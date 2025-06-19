import React, { useState } from 'react';
import { DndContext, closestCenter, PointerSensor, KeyboardSensor, useSensor, useSensors } from '@dnd-kit/core';
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

const keyboardA11yCode = `import React, { useState, useRef, useEffect } from 'react';
import { DndContext, closestCenter, PointerSensor, KeyboardSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy, useSortable, arrayMove } from '@dnd-kit/sortable';

function SortableItem({ id, text, isActive, onFocus }) {
  const { attributes, listeners, setNodeRef, isDragging } = useSortable({ id });
  return (
    <div
      ref={setNodeRef}
      tabIndex={0}
      aria-roledescription="sortable item"
      aria-label={text}
      aria-selected={isActive}
      onFocus={onFocus}
      style={{
        background: isActive ? '#b5e853' : isDragging ? '#e3f2fd' : '#fff',
        color: '#232323',
        borderRadius: 8,
        boxShadow: isActive ? '0 4px 16px #b5e85399' : '0 2px 8px #23232322',
        padding: '0.8em 1em',
        border: '1.5px solid #eee',
        fontWeight: 500,
        fontSize: 16,
        userSelect: 'none',
        cursor: 'grab',
        marginBottom: 10,
        outline: isActive ? '2px solid #b5e853' : undefined,
        transition: 'box-shadow 0.2s, background 0.2s',
        minWidth: 180,
      }}
      {...attributes}
      {...listeners}
    >
      {text}
    </div>
  );
}

function KeyboardA11yDnDExample() {
  const [items, setItems] = useState([
    { id: '1', text: 'React 공부하기' },
    { id: '2', text: '키보드 접근성 DnD 구현' },
    { id: '3', text: '문서 정리' },
    { id: '4', text: '점심 먹기' },
  ]);
  const [activeId, setActiveId] = useState(null);
  const [focusIdx, setFocusIdx] = useState(0);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: undefined // 기본값 사용
    })
  );

  useEffect(() => {
    setActiveId(items[focusIdx]?.id || null);
  }, [focusIdx, items]);

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

  function handleKeyDown(e) {
    if (e.key === 'ArrowDown') {
      setFocusIdx(idx => Math.min(idx + 1, items.length - 1));
    } else if (e.key === 'ArrowUp') {
      setFocusIdx(idx => Math.max(idx - 1, 0));
    }
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={items.map(i => i.id)} strategy={verticalListSortingStrategy}>
        <div
          role="listbox"
          aria-label="정렬 가능한 리스트"
          tabIndex={-1}
          onKeyDown={handleKeyDown}
          style={{ display: 'flex', flexDirection: 'column', gap: 0, minHeight: 180 }}
        >
          {items.map((item, idx) => (
            <SortableItem
              key={item.id}
              id={item.id}
              text={item.text}
              isActive={focusIdx === idx}
              onFocus={() => setFocusIdx(idx)}
            />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}
`;

const keyboardA11yDesc = `키보드 접근성(키보드만으로 이동/정렬/드롭) DnD 예제입니다.\n\n- Tab/화살표로 포커스 이동, Space/Enter로 드래그 시작 및 드롭이 가능합니다.\n- ARIA 속성, 포커스 스타일, 키보드 내비게이션 등 접근성 패턴을 반영했습니다.\n- 실전에서는 스크린리더, 포커스 트랩 등과 함께 사용하면 좋습니다.`;

function SortableItem({ id, text, isActive, onFocus }: { id: string; text: string; isActive: boolean; onFocus: () => void }) {
  const { attributes, listeners, setNodeRef, isDragging } = useSortable({ id });
  return (
    <div
      ref={setNodeRef}
      onFocus={onFocus}
      aria-label={text}
      aria-selected={isActive}
      style={{
        background: isActive ? '#b5e853' : isDragging ? '#e3f2fd' : '#fff',
        color: '#232323',
        borderRadius: 8,
        boxShadow: isActive ? '0 4px 16px #b5e85399' : '0 2px 8px #23232322',
        padding: '0.8em 1em',
        border: '1.5px solid #eee',
        fontWeight: 500,
        fontSize: 16,
        userSelect: 'none',
        cursor: 'grab',
        marginBottom: 10,
        outline: isActive ? '2px solid #b5e853' : undefined,
        transition: 'box-shadow 0.2s, background 0.2s',
        minWidth: 180,
      }}
      {...attributes}
      {...listeners}
    >
      {text}
    </div>
  );
}

const KeyboardA11yDnDExample: React.FC = () => {
  const [items, setItems] = useState([
    { id: '1', text: 'React 공부하기' },
    { id: '2', text: '키보드 접근성 DnD 구현' },
    { id: '3', text: '문서 정리' },
    { id: '4', text: '점심 먹기' },
  ]);
  const [focusIdx, setFocusIdx] = useState(0);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: undefined // 기본값 사용
    })
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

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'ArrowDown') {
      setFocusIdx(idx => Math.min(idx + 1, items.length - 1));
    } else if (e.key === 'ArrowUp') {
      setFocusIdx(idx => Math.max(idx - 1, 0));
    }
  }

  const example = (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={items.map(i => i.id)} strategy={verticalListSortingStrategy}>
        <div
          role="listbox"
          aria-label="정렬 가능한 리스트"
          tabIndex={-1}
          onKeyDown={handleKeyDown}
          style={{ display: 'flex', flexDirection: 'column', gap: 0, minHeight: 180 }}
        >
          {items.map((item, idx) => (
            <SortableItem
              key={item.id}
              id={item.id}
              text={item.text}
              isActive={focusIdx === idx}
              onFocus={() => setFocusIdx(idx)}
            />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );

  return (
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>키보드 접근성 DnD</Typography>
      <ExampleTab
        example={example}
        code={keyboardA11yCode}
        desc={keyboardA11yDesc}
      />
    </div>
  );
};

export default KeyboardA11yDnDExample; 