import React, { useState, useCallback, useRef } from 'react';
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors, DragOverlay } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy, useSortable, arrayMove } from '@dnd-kit/sortable';
import { Typography, Button } from '@mui/material';
import { ExampleTab } from '../../components/ExampleTab';

const ITEM_HEIGHT = 44;
const INITIAL_ITEMS = Array.from({ length: 12 }, (_, i) => ({ id: String(i + 1), text: `아이템 ${i + 1}` }));

function MultiSortableItem({ id, text, selected, onClick, listeners, attributes, setNodeRef, isDragging, style }: any) {
  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      onClick={onClick}
      style={{
        ...style,
        background: selected ? (isDragging ? '#e53e3e' : '#1976d2') : (isDragging ? '#e53e3e' : '#fff'),
        color: selected ? '#fff' : '#232323',
        borderRadius: 8,
        boxShadow: isDragging ? '0 4px 16px #e53e3e99' : '0 2px 8px #23232322',
        border: selected ? '2px solid #1976d2' : '1.5px solid #eee',
        fontWeight: 500,
        fontSize: 16,
        userSelect: 'none',
        cursor: 'grab',
        marginBottom: 6,
        minHeight: ITEM_HEIGHT - 8,
        display: 'flex', alignItems: 'center',
        padding: '0 1.2em',
        zIndex: isDragging ? 1200 : 1,
        opacity: isDragging && !selected ? 0.3 : 1,
        transition: 'box-shadow 0.2s, background 0.2s, border 0.2s',
      }}
    >
      {text}
    </div>
  );
}

const MultiSelectDnDExample: React.FC = () => {
  const [items, setItems] = useState(INITIAL_ITEMS);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const sensors = useSensors(useSensor(PointerSensor));
  const lastSelected = useRef<string | null>(null);

  // 선택 로직 (shift/ctrl)
  const handleSelect = useCallback((id: string, e: React.MouseEvent) => {
    if (e.shiftKey && lastSelected.current) {
      const lastIdx = items.findIndex(i => i.id === lastSelected.current);
      const currIdx = items.findIndex(i => i.id === id);
      if (lastIdx !== -1 && currIdx !== -1) {
        const [start, end] = [lastIdx, currIdx].sort((a, b) => a - b);
        const rangeIds = items.slice(start, end + 1).map(i => i.id);
        setSelectedIds(Array.from(new Set([...selectedIds, ...rangeIds])));
      }
    } else if (e.ctrlKey || e.metaKey) {
      setSelectedIds(sel => sel.includes(id) ? sel.filter(sid => sid !== id) : [...sel, id]);
      lastSelected.current = id;
    } else {
      setSelectedIds([id]);
      lastSelected.current = id;
    }
  }, [items, selectedIds]);

  // 드래그 시작
  const handleDragStart = ({ active }: any) => {
    setActiveId(active.id);
    if (!selectedIds.includes(active.id)) {
      setSelectedIds([active.id]);
    }
  };

  // 드래그 종료
  const handleDragEnd = ({ active, over }: any) => {
    if (!over) {
      setActiveId(null);
      return;
    }
    const overIdx = items.findIndex(i => i.id === over.id);
    const selected = items.filter(i => selectedIds.includes(i.id));
    const rest = items.filter(i => !selectedIds.includes(i.id));
    let insertIdx = overIdx;
    // 드래그 그룹이 아래로 이동할 때 인덱스 보정
    if (overIdx > items.findIndex(i => i.id === active.id)) {
      insertIdx = overIdx - selected.length + 1;
    }
    const newItems = [
      ...rest.slice(0, insertIdx),
      ...selected,
      ...rest.slice(insertIdx),
    ];
    setItems(newItems);
    setActiveId(null);
  };

  // 드래그 취소
  const handleDragCancel = () => setActiveId(null);

  // 선택 초기화
  const handleClear = () => setSelectedIds([]);

  // Sortable 아이템
  const SortableItem = ({ id, text }: { id: string, text: string }) => {
    const {
      attributes,
      listeners,
      setNodeRef,
      isDragging,
      transform,
      transition,
    } = useSortable({ id });
    return (
      <MultiSortableItem
        id={id}
        text={text}
        selected={selectedIds.includes(id)}
        onClick={e => handleSelect(id, e)}
        listeners={listeners}
        attributes={attributes}
        setNodeRef={setNodeRef}
        isDragging={isDragging}
        style={{
          transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
          transition,
        }}
      />
    );
  };

  // DragOverlay: 여러 개를 한 번에 보여줌
  const overlayItems = items.filter(i => selectedIds.includes(i.id));

  const example = (
    <div>
      <Button size="small" variant="outlined" onClick={handleClear} sx={{ mb: 1, ml: 1 }}>선택 해제</Button>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragCancel={handleDragCancel}
      >
        <SortableContext items={items.map(i => i.id)} strategy={verticalListSortingStrategy}>
          {items.map(item => (
            <SortableItem key={item.id} id={item.id} text={item.text} />
          ))}
        </SortableContext>
        <DragOverlay>
          {activeId && overlayItems.length > 0 && (
            <div style={{ minWidth: 180 }}>
              {overlayItems.map(i => (
                <div key={i.id} style={{
                  background: '#1976d2', color: '#fff', borderRadius: 8, marginBottom: 4, padding: '0.5em 1em', fontWeight: 500, boxShadow: '0 2px 8px #23232322',
                }}>{i.text}</div>
              ))}
            </div>
          )}
        </DragOverlay>
      </DndContext>
    </div>
  );

  const code = `// dnd-kit 다중 선택/다중 드래그 예제\n// Shift/Ctrl+클릭으로 여러 개 선택, DragOverlay로 그룹 이동\n`;
  const desc = `여러 아이템을 Shift/Ctrl+클릭으로 선택하고, 선택된 아이템을 한 번에 드래그하여 이동할 수 있습니다.\n\n- 실전에서 자주 쓰는 그룹 이동 UX\n- 선택 해제 버튼 제공`;

  return (
    <div style={{ background: '#484f54', padding: '1.5em 2em', borderRadius: '8px', border: '1px solid #eee', marginTop: '1.2em', marginBottom: '2em', marginLeft: 0, marginRight: 0 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>다중 선택/다중 드래그 DnD</Typography>
      <ExampleTab example={example} code={code} desc={desc} />
    </div>
  );
};

export default MultiSelectDnDExample; 