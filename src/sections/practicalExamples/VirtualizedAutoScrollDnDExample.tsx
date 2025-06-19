import React, { useRef, useState, useCallback } from 'react';
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy, useSortable, arrayMove } from '@dnd-kit/sortable';
import { FixedSizeList as List } from 'react-window';
import { Typography } from '@mui/material';
import { ExampleTab } from '../../components/ExampleTab';

const stateExampleBlockStyle = {
  background: '#484f54',
  padding: '1.5em 2em',
  borderRadius: '8px',
  border: '1px solid #eee',
  marginTop: '1.2em',
  marginBottom: '2em',
  marginLeft: 0,
  marginRight: 0,
};

const ITEM_HEIGHT = 48;
const ITEM_COUNT = 120;
const INITIAL_ITEMS = Array.from({ length: ITEM_COUNT }, (_, i) => ({ id: String(i + 1), text: `아이템 ${i + 1}` }));

function VirtualizedSortableItem({ id, text, style }: { id: string; text: string; style: React.CSSProperties }) {
  const { attributes, listeners, setNodeRef, isDragging, transform } = useSortable({ id });
  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={{
        ...style,
        background: isDragging ? '#e53e3e' : '#fff',
        color: '#232323',
        borderRadius: 8,
        boxShadow: isDragging ? '0 4px 16px #e53e3e99' : '0 2px 8px #23232322',
        border: '1.5px solid #eee',
        fontWeight: 500,
        fontSize: 16,
        userSelect: 'none',
        cursor: 'grab',
        marginBottom: 6,
        minHeight: ITEM_HEIGHT - 8,
        display: 'flex', alignItems: 'center',
        padding: '0 1.2em',
        zIndex: isDragging ? 1200 : 1,
        transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
        transition: isDragging ? 'box-shadow 0.2s, background 0.2s, transform 0.2s' : 'box-shadow 0.2s, background 0.2s',
      }}
    >
      {text}
    </div>
  );
}

const VirtualizedAutoScrollDnDExample: React.FC = () => {
  const [items, setItems] = useState(INITIAL_ITEMS);
  const sensors = useSensors(useSensor(PointerSensor));
  const listRef = useRef<List>(null);

  // 자동 스크롤 구현
  const handleDragMove = useCallback((event: any) => {
    if (!listRef.current) return;
    const { activatorEvent } = event;
    if (!activatorEvent || !activatorEvent.clientY) return;
    // react-window 1.x: outerRef, 2.x: outerElementRef. 여기서는 DOM 직접 접근
    const outer = listRef.current && (listRef.current as any)._outerRef ? (listRef.current as any)._outerRef : (listRef.current as any).outerRef;
    if (!outer) return;
    const listRect = outer.getBoundingClientRect();
    const mouseY = activatorEvent.clientY;
    const edge = 60; // 스크롤 트리거 영역(px)
    const scrollSpeed = 18;
    // scrollOffset은 props로 접근 (react-window)
    const scrollOffset = (listRef.current as any).state?.scrollOffset ?? (listRef.current as any).props?.scrollOffset ?? 0;
    if (mouseY < listRect.top + edge) {
      listRef.current.scrollTo(scrollOffset - scrollSpeed);
    } else if (mouseY > listRect.bottom - edge) {
      listRef.current.scrollTo(scrollOffset + scrollSpeed);
    }
  }, []);

  function handleDragEnd(event: any) {
    const { active, over } = event;
    if (active.id !== over?.id) {
      setItems(items => {
        const oldIdx = items.findIndex(i => i.id === active.id);
        const newIdx = items.findIndex(i => i.id === over?.id);
        return arrayMove(items, oldIdx, newIdx);
      });
    }
  }

  const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => {
    const item = items[index];
    return <VirtualizedSortableItem id={item.id} text={item.text} style={style} />;
  };

  const example = (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragMove={handleDragMove}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={items.map(i => i.id)} strategy={verticalListSortingStrategy}>
        <List
          ref={listRef}
          height={360}
          width={340}
          itemCount={items.length}
          itemSize={ITEM_HEIGHT}
          style={{ background: '#232323', borderRadius: 12, border: '1.5px solid #eee', margin: '0 auto' }}
        >
          {Row}
        </List>
      </SortableContext>
    </DndContext>
  );

  const code = `// react-window + dnd-kit 자동 스크롤 가상화 DnD 예제\n// 1. react-window List와 dnd-kit SortableContext 결합\n// 2. onDragMove에서 마우스 위치에 따라 listRef.scrollTo로 자동 스크롤\n// 3. 100개 이상 대용량 리스트도 부드럽게 동작\n`;

  const desc = `100개 이상의 대용량 리스트에서 드래그 시 자동 스크롤이 동작하는 가상화 DnD 예제입니다.\n\n- react-window로 가상화, dnd-kit으로 드래그\n- 리스트 상/하단 근처에서 자동 스크롤\n- 실전에서는 서버 연동, 무한스크롤, 필터 등과 결합 가능`;

  return (
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>가상화 + 자동 스크롤 DnD</Typography>
      <ExampleTab
        example={example}
        code={code}
        desc={desc}
      />
    </div>
  );
};

export default VirtualizedAutoScrollDnDExample; 