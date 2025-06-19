import React, { useState } from 'react';
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Typography, Alert } from '@mui/material';
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

type KanbanColumns = { [key: string]: { id: string; text: string }[] };

const initial: KanbanColumns = {
  todo: [
    { id: '1', text: 'React 공부하기' },
    { id: '2', text: 'DnD 예제 만들기' },
  ],
  doing: [
    { id: '3', text: '문서 정리' },
  ],
  done: [
    { id: '4', text: '점심 먹기' }],
};

function KanbanCard({ item }: { item: { id: string; text: string } }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: item.id });
  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
        background: isDragging ? '#fffbe6' : '#fff',
        color: '#232323',
        borderRadius: 8,
        boxShadow: isDragging ? '0 4px 16px #b5e85355' : '0 2px 8px #23232322',
        padding: '0.8em 1em',
        border: '1px solid #eee',
        fontWeight: 500,
        fontSize: 16,
        userSelect: 'none',
        cursor: 'grab',
        marginBottom: 8,
      }}
    >
      {item.text}
    </div>
  );
}

function KanbanColumn({ col, items, canDrop }: { col: string; items: { id: string; text: string }[]; canDrop: boolean }) {
  return (
    <div style={{ minWidth: 220, background: canDrop ? '#232323' : '#eee', borderRadius: 12, padding: 16, minHeight: 220, opacity: canDrop ? 1 : 0.5 }}>
      <div style={{ color: canDrop ? '#b5e853' : '#aaa', fontWeight: 700, fontSize: 18, marginBottom: 12, textAlign: 'center' }}>
        {col === 'todo' ? '할 일' : col === 'doing' ? '진행 중' : '완료'}
        {!canDrop && <span style={{ fontSize: 13, color: '#e53e3e', marginLeft: 8 }}>(드롭 불가)</span>}
      </div>
      <SortableContext items={items.map(i => i.id)} strategy={verticalListSortingStrategy}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {items.map(item => <KanbanCard key={item.id} item={item} />)}
        </div>
      </SortableContext>
    </div>
  );
}

const dropRestrictionCode = `// dnd-kit 기반 칸반에서 특정 컬럼(예: 'done')에는 드롭 불가
function handleDragEnd(e) {
  const { active, over } = e;
  if (!over) return;
  // 'done' 컬럼에는 드롭 불가
  if (over.id === 'done') {
    setError('완료 컬럼에는 드롭할 수 없습니다!');
    return;
  }
  // ...이하 일반 DnD 로직
}`;

const dropRestrictionDesc = `특정 컬럼(예: 'done')에는 드롭이 불가하도록 조건부 drop을 구현한 예제입니다.\n\n- handleDragEnd에서 over.id(드롭 대상 컬럼)를 체크해 조건부로 드롭을 제한합니다.\n- 드롭 불가 컬럼은 스타일과 안내 메시지로 피드백을 제공합니다.\n- 실전에서는 권한, 상태, 개수 제한 등 다양한 조건에 응용할 수 있습니다.`;

const DropRestrictionDnDExample: React.FC = () => {
  const [columns, setColumns] = useState<KanbanColumns>(initial);
  const [error, setError] = useState<string | null>(null);
  const sensors = useSensors(useSensor(PointerSensor));

  function handleDragEnd(e: any) {
    const { active, over } = e;
    if (!over) return;
    // 드롭 제한: 'done' 컬럼에는 드롭 불가
    let fromCol: string | undefined, toCol: string | undefined;
    for (const key in columns) {
      if (columns[key].find((item: { id: string }) => item.id === active.id)) fromCol = key;
      if (key === over.id) toCol = key;
    }
    if (!fromCol || !toCol) return;
    if (toCol === 'done') {
      setError('완료 컬럼에는 드롭할 수 없습니다!');
      return;
    }
    if (fromCol === toCol && active.id === over.id) return;
    const fromList = [...columns[fromCol]];
    const toList = fromCol === toCol ? fromList : [...columns[toCol]];
    const movingIdx = fromList.findIndex(i => i.id === active.id);
    const overIdx = toList.findIndex(i => i.id === over.id);
    const [moving] = fromList.splice(movingIdx, 1);
    toList.splice(overIdx, 0, moving);
    setColumns(cols => ({
      ...cols,
      [fromCol!]: fromCol === toCol ? toList : fromList,
      [toCol!]: toList
    }));
    setError(null);
  }

  const example = (
    <>
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <div style={{ display: 'flex', gap: 32, justifyContent: 'center', margin: '1.5em 0' }}>
          {Object.entries(columns).map(([col, items]) => (
            <KanbanColumn key={col} col={col} items={items} canDrop={col !== 'done'} />
          ))}
        </div>
      </DndContext>
    </>
  );

  return (
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>드롭 제한 DnD (특정 컬럼 드롭 불가)</Typography>
      <ExampleTab
        example={example}
        code={dropRestrictionCode}
        desc={dropRestrictionDesc}
      />
    </div>
  );
};

export default DropRestrictionDnDExample; 