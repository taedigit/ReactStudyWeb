import React, { useState } from 'react';
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors, DragOverlay } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy, useSortable, arrayMove } from '@dnd-kit/sortable';
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

const customPreviewCode = `import React, { useState } from 'react';
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors, DragOverlay } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy, useSortable, arrayMove } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

function Card({ id, text, listeners, attributes, setNodeRef, isDragging }) {
  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={{
        background: isDragging ? '#b5e853' : '#fff',
        color: '#232323',
        borderRadius: 8,
        boxShadow: isDragging ? '0 4px 16px #b5e85399' : '0 2px 8px #23232322',
        padding: '0.8em 1em',
        border: '1.5px solid #eee',
        fontWeight: 500,
        fontSize: 16,
        userSelect: 'none',
        cursor: 'grab',
        marginBottom: 10,
        opacity: isDragging ? 0.5 : 1,
        transition: 'box-shadow 0.2s, background 0.2s',
        minWidth: 180,
      }}
    >
      {text}
    </div>
  );
}

function CustomPreviewDnDExample() {
  const [items, setItems] = useState([
    { id: '1', text: 'React 공부하기' },
    { id: '2', text: 'DnD 커스텀 프리뷰 구현' },
    { id: '3', text: '문서 정리' },
    { id: '4', text: '점심 먹기' },
  ]);
  const [activeId, setActiveId] = useState(null);
  const sensors = useSensors(useSensor(PointerSensor));

  function handleDragStart(event) {
    setActiveId(event.active.id);
  }
  function handleDragEnd(event) {
    const { active, over } = event;
    if (active.id !== over?.id) {
      setItems(items => {
        const oldIdx = items.findIndex(i => i.id === active.id);
        const newIdx = items.findIndex(i => i.id === over?.id);
        return arrayMove(items, oldIdx, newIdx);
      });
    }
    setActiveId(null);
  }
  function handleDragCancel() {
    setActiveId(null);
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <SortableContext items={items.map(i => i.id)} strategy={verticalListSortingStrategy}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0, minHeight: 180 }}>
          {items.map(item => <SortableCard key={item.id} id={item.id} text={item.text} />)}
        </div>
      </SortableContext>
      <DragOverlay dropAnimation={null}>
        {activeId ? (
          <Card id={activeId} text={items.find(i => i.id === activeId)?.text || ''} isDragging />
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}

function SortableCard({ id, text }) {
  const { attributes, listeners, setNodeRef, isDragging } = useSortable({ id });
  return (
    <Card
      id={id}
      text={text}
      listeners={listeners}
      attributes={attributes}
      setNodeRef={setNodeRef}
      isDragging={isDragging}
    />
  );
}
`;

const customPreviewDesc = `드래그 중에만 보이는 커스텀 프리뷰(DragOverlay)를 제공하는 DnD 예제입니다.\n\n- dnd-kit의 DragOverlay를 활용해 드래그 중인 아이템의 스타일, 정보, 애니메이션을 자유롭게 커스텀할 수 있습니다.\n- 실전에서는 카드, 이미지, 리스트 등 다양한 UI에 적용 가능하며, 프리뷰 컴포넌트 분리로 성능 최적화도 가능합니다.`;

function Card({ text, listeners, attributes, setNodeRef, isDragging }: any) {
  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={{
        background: isDragging ? '#b5e853' : '#fff',
        color: '#232323',
        borderRadius: 8,
        boxShadow: isDragging ? '0 4px 16px #b5e85399' : '0 2px 8px #23232322',
        padding: '0.8em 1em',
        border: '1.5px solid #eee',
        fontWeight: 500,
        fontSize: 16,
        userSelect: 'none',
        cursor: 'grab',
        marginBottom: 10,
        opacity: isDragging ? 0.5 : 1,
        transition: 'box-shadow 0.2s, background 0.2s',
        minWidth: 180,
      }}
    >
      {text}
    </div>
  );
}

function SortableCard({ id, text }: { id: string; text: string }) {
  const { attributes, listeners, setNodeRef, isDragging } = useSortable({ id });
  return (
    <Card
      text={text}
      listeners={listeners}
      attributes={attributes}
      setNodeRef={setNodeRef}
      isDragging={isDragging}
    />
  );
}

const CustomPreviewDnDExample: React.FC = () => {
  const [items, setItems] = useState([
    { id: '1', text: 'React 공부하기' },
    { id: '2', text: 'DnD 커스텀 프리뷰 구현' },
    { id: '3', text: '문서 정리' },
    { id: '4', text: '점심 먹기' },
  ]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const sensors = useSensors(useSensor(PointerSensor));

  function handleDragStart(event: any) {
    setActiveId(event.active.id);
  }
  function handleDragEnd(event: any) {
    const { active, over } = event;
    if (active.id !== over?.id) {
      setItems(items => {
        const oldIdx = items.findIndex(i => i.id === active.id);
        const newIdx = items.findIndex(i => i.id === over?.id);
        return arrayMove(items, oldIdx, newIdx);
      });
    }
    setActiveId(null);
  }
  function handleDragCancel() {
    setActiveId(null);
  }

  const example = (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <SortableContext items={items.map(i => i.id)} strategy={verticalListSortingStrategy}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0, minHeight: 180 }}>
          {items.map(item => <SortableCard key={item.id} id={item.id} text={item.text} />)}
        </div>
      </SortableContext>
      <DragOverlay dropAnimation={null}>
        {activeId ? (
          <Card id={activeId} text={items.find(i => i.id === activeId)?.text || ''} isDragging />
        ) : null}
      </DragOverlay>
    </DndContext>
  );

  return (
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>커스텀 드래그 프리뷰 DnD</Typography>
      <ExampleTab
        example={example}
        code={customPreviewCode}
        desc={customPreviewDesc}
      />
    </div>
  );
};

export default CustomPreviewDnDExample; 