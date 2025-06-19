import React, { useState } from 'react';
import { DndContext, closestCenter, PointerSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy, useSortable, arrayMove } from '@dnd-kit/sortable';
import { Typography } from '@mui/material';
import { ExampleTab } from '../../components/ExampleTab';

const ITEM_HEIGHT = 56;
const INITIAL_ITEMS = Array.from({ length: 8 }, (_, i) => ({ id: String(i + 1), text: `카드 ${i + 1}` }));

function MobileSortableItem({ text, listeners, attributes, setNodeRef, isDragging, style }: any) {
  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={{
        ...style,
        background: isDragging ? '#e53e3e' : '#fff',
        color: '#232323',
        borderRadius: 12,
        boxShadow: isDragging ? '0 4px 16px #e53e3e99' : '0 2px 8px #23232322',
        border: '2px solid #eee',
        fontWeight: 500,
        fontSize: 18,
        userSelect: 'none',
        cursor: 'grab',
        marginBottom: 12,
        minHeight: ITEM_HEIGHT - 8,
        display: 'flex', alignItems: 'center',
        padding: '0 1.5em',
        zIndex: isDragging ? 1200 : 1,
        touchAction: 'none',
        transition: 'box-shadow 0.2s, background 0.2s',
      }}
    >
      {text}
    </div>
  );
}

const MobileTouchDnDExample: React.FC = () => {
  const [items, setItems] = useState(INITIAL_ITEMS);
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 120, tolerance: 8 } })
  );

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
      <MobileSortableItem
        text={text}
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

  const example = (
    <div style={{ maxWidth: 340, margin: '0 auto' }}>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={items.map(i => i.id)} strategy={verticalListSortingStrategy}>
          {items.map(item => (
            <SortableItem key={item.id} id={item.id} text={item.text} />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );

  const code = `// dnd-kit 모바일/터치 지원 예제\n// PointerSensor + TouchSensor 동시 사용, activationConstraint로 UX 최적화\n`;
  const desc = `모바일/터치 환경에서도 자연스럽게 동작하는 DnD 예제입니다.\n\n- PointerSensor + TouchSensor 동시 사용\n- 터치 영역/버튼 크기 확대, 반응형\n- 실전 모바일 UX 반영`;

  return (
    <div style={{ background: '#484f54', padding: '1.5em 2em', borderRadius: '12px', border: '1px solid #eee', marginTop: '1.2em', marginBottom: '2em', marginLeft: 0, marginRight: 0 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>모바일/터치 지원 DnD</Typography>
      <ExampleTab example={example} code={code} desc={desc} />
    </div>
  );
};

export default MobileTouchDnDExample; 