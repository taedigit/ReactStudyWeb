import React, { useEffect, useState, useRef } from 'react';
import { Box, Flex, Stack, Text, Link, Container, Heading } from '@chakra-ui/react';
import { sections } from '../data/sections';
const allSections = sections;
import type { Section, SectionId } from '../types/section';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import type { DropResult, DroppableProvided, DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd';

interface LayoutProps {
  children: React.ReactNode;
  currentSection: SectionId;
  onSectionChange: (section: SectionId) => void;
}

const SIDEBAR_ORDER_KEY = 'sidebarOrder';
const SIDEBAR_META_KEY = 'sidebarMeta';

function getDefaultOrder(categories: any) {
  // 카테고리별로 section id 배열 반환
  const order: Record<string, string[]> = {};
  Object.entries(categories).forEach(([key, category]: any) => {
    order[key] = category.sections.map((section: Section) => section.id);
  });
  return order;
}

export const Layout = ({ children, currentSection, onSectionChange }: LayoutProps) => {
  // categories 객체는 매 렌더마다 새로 만들어지므로, 원본 sections에서만 사용
  const categories: Record<string, { title: string; sections: Section[] }> = {
    getting_started: {
      title: '시작하기',
      sections: Object.values(sections).filter((section: Section) => section.category === 'getting_started')
    },
    basics: {
      title: '기본 개념',
      sections: Object.values(sections).filter((section: Section) => section.category === 'basics')
    },
    hooks: {
      title: 'Hooks',
      sections: Object.values(sections).filter((section: Section) => section.category === 'hooks')
    },
    advanced: {
      title: '고급 개념',
      sections: Object.values(sections).filter((section: Section) => section.category === 'advanced')
    },
    example: {
      title: '실전 예제',
      sections: Object.values(sections).filter((section: Section) => section.category === 'example')
    },
    Api: {
      title: 'API 연동',
      sections: Object.values(sections).filter((section: Section) => section.category === 'Api')
    },
    library: {
      title: '라이브러리',
      sections: Object.values(sections).filter((section: Section) => section.category === 'opensource')
    }
  };

  // 순서 상태: { 카테고리: [sectionId, ...] }
  const [sidebarOrder, setSidebarOrder] = useState<Record<string, string[]>>(() => {
    const saved = localStorage.getItem(SIDEBAR_ORDER_KEY);
    if (saved) return JSON.parse(saved);
    return getDefaultOrder(categories);
  });

  // 메뉴 이름/아이콘 커스텀 상태
  const [sidebarMeta, setSidebarMeta] = useState<Record<string, { title: string; icon: string }>>(() => {
    const saved = localStorage.getItem(SIDEBAR_META_KEY);
    if (saved) return JSON.parse(saved);
    return {};
  });

  // 수정 중인 메뉴 id 및 입력값
  const [editing, setEditing] = useState<null | string>(null);
  const [editValue, setEditValue] = useState<{ title: string; icon: string }>({ title: '', icon: '' });

  // 헤더 검색 상태
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState<Section[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // 사이드바 각 섹션의 ref 저장
  const sidebarRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // 카테고리별 섹션을 순서대로 반환
  const getOrderedSections = (catKey: string) => {
    const order = sidebarOrder[catKey] || [];
    const sectionMap: Record<string, Section> = {};
    categories[catKey].sections.forEach((s: Section) => { sectionMap[s.id] = s; });
    return order.map(id => sectionMap[id]).filter(Boolean);
  };

  // 드래그 완료 시 순서 갱신
  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) return; // 카테고리 이동 불가
    const catKey = source.droppableId;
    const items = Array.from(sidebarOrder[catKey]);
    const [removed] = items.splice(source.index, 1);
    items.splice(destination.index, 0, removed);
    const newOrder = { ...sidebarOrder, [catKey]: items };
    setSidebarOrder(newOrder);
    localStorage.setItem(SIDEBAR_ORDER_KEY, JSON.stringify(newOrder));
  };

  // 수정 취소
  const handleCancel = () => {
    setEditing(null);
  };

  // 수정 완료
  const handleSave = (sectionId: string) => {
    const newMeta = { ...sidebarMeta, [sectionId]: { ...editValue } };
    setSidebarMeta(newMeta);
    localStorage.setItem(SIDEBAR_META_KEY, JSON.stringify(newMeta));
    setEditing(null);
  };

  // 엔터/esc 처리
  const handleKeyDown = (e: React.KeyboardEvent, sectionId: string) => {
    if (e.key === 'Enter') handleSave(sectionId);
    if (e.key === 'Escape') handleCancel();
  };

  // 카테고리/섹션 추가/삭제 시 localStorage 동기화
  useEffect(() => {
    const defaultOrder = getDefaultOrder(categories);
    let changed = false;
    const newOrder = { ...sidebarOrder };
    Object.keys(defaultOrder).forEach(catKey => {
      // 새 섹션 추가
      defaultOrder[catKey].forEach(id => {
        if (!newOrder[catKey]) newOrder[catKey] = [];
        if (!newOrder[catKey].includes(id)) {
          newOrder[catKey].push(id);
          changed = true;
        }
      });
      // 삭제된 섹션 제거
      newOrder[catKey] = newOrder[catKey].filter(id => defaultOrder[catKey].includes(id));
    });
    if (changed) {
      setSidebarOrder(newOrder);
      localStorage.setItem(SIDEBAR_ORDER_KEY, JSON.stringify(newOrder));
    }
    // eslint-disable-next-line
  }, [Object.keys(categories).join(','), Object.values(categories).map(c=>c.sections.length).join(',')]);

  useEffect(() => {
    if (search.trim().length === 0) {
      setSearchResults([]);
      setShowDropdown(false);
      return;
    }
    const q = search.trim().toLowerCase();
    const results = Object.values(allSections).filter(
      s => s.title.toLowerCase().includes(q) || s.description.toLowerCase().includes(q)
    ).slice(0, 10);
    setSearchResults(results);
    setShowDropdown(results.length > 0);
  }, [search]);

  // 검색 결과 클릭 시 이동 + 사이드바 스크롤
  const handleResultClick = (id: string) => {
    setSearch('');
    setShowDropdown(false);
    onSectionChange(id as SectionId);
    // 사이드바 해당 섹션으로 스크롤
    setTimeout(() => {
      const ref = sidebarRefs.current[id];
      if (ref) {
        ref.scrollIntoView({ block: 'center', behavior: 'smooth' });
      }
    }, 100); // 섹션 변경 후 렌더링 대기
    if (searchInputRef.current) searchInputRef.current.blur();
  };

  return (
    <Box minH="100vh" width="90vw">
      <Box
        as="header"
        position="fixed"
        top={0}
        left={0}
        right={0}
        h="60px"
        bg="white"
        boxShadow="sm"
        zIndex={100}
        px={6}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        style={{ position: 'fixed', width: '100vw', minWidth: 0, maxWidth: '100vw' }}
      >
        <Link
          href="#"
          onClick={e => { e.preventDefault(); onSectionChange('intro'); }}
          _hover={{ textDecoration: 'none' }}
          color="brand.500"
        >
          <Heading size="md" color="brand.500">React Tutorial</Heading>
        </Link>
        <div style={{ position: 'relative' }}>
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            onFocus={() => { if (searchResults.length > 0) setShowDropdown(true); }}
            onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
            style={{
              padding: '7px 14px',
              borderRadius: 6,
              border: '1px solid #ddd',
              fontSize: 15,
              marginLeft: 16,
              background: '#f7f7f7',
              minWidth: 180
            }}
          />
          {showDropdown && (
            <div
              style={{
                position: 'absolute',
                top: 44,
                right: 0,
                left: 0,
                background: '#fff',
                border: '1px solid #ddd',
                borderRadius: 8,
                boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                zIndex: 200,
                maxHeight: 320,
                overflowY: 'auto',
                minWidth: 220
              }}
            >
              {searchResults.map(s => (
                <div
                  key={s.id}
                  onMouseDown={() => handleResultClick(s.id)}
                  style={{
                    padding: '10px 16px',
                    cursor: 'pointer',
                    borderBottom: '1px solid #f2f2f2',
                    fontSize: 15,
                    color: '#222',
                    background: currentSection === s.id ? '#e8f0fe' : 'transparent',
                    fontWeight: currentSection === s.id ? 600 : 400
                  }}
                >
                  <span style={{ marginRight: 8 }}>{s.icon}</span>
                  <span>{s.title}</span>
                  <span style={{ color: '#888', fontSize: 13, marginLeft: 8 }}>{s.description}</span>
                </div>
              ))}
              {searchResults.length === 0 && (
                <div style={{ padding: '10px 16px', color: '#888', fontSize: 15 }}>No results</div>
              )}
            </div>
          )}
        </div>
      </Box>
      
      <Flex pt="60px" h="calc(100vh - 60px)" width="100vw">
        <Box
          as="aside"
          w="280px"
          bg="white"
          position="fixed"
          left={0}
          top="60px"
          h="calc(100vh - 60px)"
          overflowY="auto"
          borderRightWidth="1px"
          py={6}
        >
          <Stack direction="column" gap={6}>
            <DragDropContext onDragEnd={onDragEnd}>
              {Object.entries(categories).map(([key, category]) => (
                <Box key={key}>
                  <Text
                    px={6}
                    fontSize="xs"
                    fontWeight="semibold"
                    textTransform="uppercase"
                    color="gray.500"
                    letterSpacing="wider"
                    mb={2}
                  >
                    {category.title}
                  </Text>
                  <Droppable droppableId={key}>
                    {(provided: DroppableProvided) => (
                      <Stack direction="column" gap={1} ref={provided.innerRef} {...provided.droppableProps}>
                        {getOrderedSections(key).map((section: Section, idx: number) => {
                          const meta = sidebarMeta[section.id] || {};
                          const isEditing = editing === section.id;
                          return (
                            <Draggable key={section.id} draggableId={section.id} index={idx}>
                              {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
                                <Box
                                  ref={el => { provided.innerRef(el); sidebarRefs.current[section.id] = el; }}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  display="flex"
                                  alignItems="center"
                                  px={0}
                                  py={0}
                                  style={{
                                    ...provided.draggableProps.style,
                                    boxShadow: snapshot.isDragging ? '0 2px 8px rgba(0,0,0,0.12)' : undefined,
                                    borderRadius: 6,
                                    cursor: 'grab',
                                    userSelect: 'none',
                                    background: currentSection === section.id ? '#e8f0fe' : 'transparent',
                                    marginBottom: 2
                                  }}
                                >
                                  {isEditing ? (
                                    <>
                                      <input
                                        style={{ width: 32, fontSize: 20, marginRight: 6, border: '1px solid #ddd', borderRadius: 4, padding: '2px 4px' }}
                                        value={editValue.icon}
                                        onChange={e => setEditValue(v => ({ ...v, icon: e.target.value }))}
                                        onKeyDown={e => handleKeyDown(e, section.id)}
                                        maxLength={2}
                                        autoFocus
                                      />
                                      <input
                                        style={{ flex: 1, fontSize: 15, marginRight: 6, border: '1px solid #ddd', borderRadius: 4, padding: '2px 6px' }}
                                        value={editValue.title}
                                        onChange={e => setEditValue(v => ({ ...v, title: e.target.value }))}
                                        onKeyDown={e => handleKeyDown(e, section.id)}
                                        onBlur={() => handleSave(section.id)}
                                        maxLength={20}
                                      />
                                      <button
                                        style={{ background: '#2563eb', color: '#fff', border: 'none', borderRadius: 4, padding: '2px 8px', fontSize: 13, marginRight: 4, cursor: 'pointer' }}
                                        onClick={() => handleSave(section.id)}
                                        title="저장"
                                      >✔</button>
                                      <button
                                        style={{ background: '#eee', color: '#333', border: 'none', borderRadius: 4, padding: '2px 8px', fontSize: 13, cursor: 'pointer' }}
                                        onClick={handleCancel}
                                        title="취소"
                                      >✖</button>
                                    </>
                                  ) : (
                                    <Link
                                      px={6}
                                      py={2}
                                      display="flex"
                                      alignItems="center"
                                      color={currentSection === section.id ? 'brand.500' : 'gray.700'}
                                      bg={currentSection === section.id ? 'brand.50' : 'transparent'}
                                      borderLeftWidth="3px"
                                      borderLeftColor={currentSection === section.id ? 'brand.500' : 'transparent'}
                                      _hover={{
                                        bg: 'gray.50',
                                        textDecoration: 'none'
                                      }}
                                      onClick={e => {
                                        e.preventDefault();
                                        onSectionChange(section.id as SectionId);
                                      }}
                                      style={{ flex: 1, minWidth: 0 }}
                                    >
                                      <Text fontSize="xl" mr={3}>{meta.icon || section.icon}</Text>
                                      <Text fontSize="sm" isTruncated>{meta.title || section.title}</Text>
                                    </Link>
                                  )}
                                </Box>
                              )}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </Stack>
                    )}
                  </Droppable>
                </Box>
              ))}
            </DragDropContext>
          </Stack>
        </Box>
        
        <Container
          maxW="1000px"
          minW="0"
          flex={1}
          ml="280px"
          py={8}
          px={6}
          bg="gray.50"
          style={{ paddingTop: 60 }}
        >
          {children}
        </Container>
      </Flex>
    </Box>
  );
}; 