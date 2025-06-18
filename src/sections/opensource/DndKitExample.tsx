import { useState } from 'react';
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy, horizontalListSortingStrategy, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
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

// 1. 기본 수직 리스트 정렬
function BasicSortableList() {
  const [items, setItems] = useState(['🍎', '🍌', '🍊', '🍇', '🍉']);
  const sensors = useSensors(useSensor(PointerSensor));
  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={e => {
      const { active, over } = e;
      if (active.id !== over?.id) {
        setItems(items => {
          const oldIdx = items.indexOf(active.id as string);
          const newIdx = items.indexOf(over?.id as string);
          return arrayMove(items, oldIdx, newIdx);
        });
      }
    }}>
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {items.map(id => <SortableItem key={id} id={id} />)}
        </ul>
      </SortableContext>
    </DndContext>
  );
}
function SortableItem({ id }: { id: string }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });
  return (
    <li ref={setNodeRef} {...attributes} {...listeners} style={{
      transform: CSS.Transform.toString(transform),
      transition,
      background: isDragging ? '#b5e853' : '#232323',
      color: isDragging ? '#232323' : '#fff',
      borderRadius: 8,
      marginBottom: 8,
      padding: '0.7em 1.2em',
      fontSize: 22,
      fontWeight: 700,
      boxShadow: isDragging ? '0 4px 16px #b5e85355' : 'none',
      cursor: 'grab',
      userSelect: 'none',
    }}>{id}</li>
  );
}

// 2. 수평 리스트 정렬
function HorizontalSortableList() {
  const [items, setItems] = useState(['A', 'B', 'C', 'D', 'E']);
  const sensors = useSensors(useSensor(PointerSensor));
  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={e => {
      const { active, over } = e;
      if (active.id !== over?.id) {
        setItems(items => {
          const oldIdx = items.indexOf(active.id as string);
          const newIdx = items.indexOf(over?.id as string);
          return arrayMove(items, oldIdx, newIdx);
        });
      }
    }}>
      <SortableContext items={items} strategy={horizontalListSortingStrategy}>
        <div style={{ display: 'flex', gap: 12 }}>
          {items.map(id => <SortableItem key={id} id={id} />)}
        </div>
      </SortableContext>
    </DndContext>
  );
}

// 3. 그리드 정렬
function GridSortableList() {
  const [items, setItems] = useState(['1', '2', '3', '4', '5', '6']);
  const sensors = useSensors(useSensor(PointerSensor));
  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={e => {
      const { active, over } = e;
      if (active.id !== over?.id) {
        setItems(items => {
          const oldIdx = items.indexOf(active.id as string);
          const newIdx = items.indexOf(over?.id as string);
          return arrayMove(items, oldIdx, newIdx);
        });
      }
    }}>
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 60px)', gap: 12 }}>
          {items.map(id => <SortableGridItem key={id} id={id} />)}
        </div>
      </SortableContext>
    </DndContext>
  );
}
function SortableGridItem({ id }: { id: string }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });
  return (
    <div ref={setNodeRef} {...attributes} {...listeners} style={{
      transform: CSS.Transform.toString(transform),
      transition,
      background: isDragging ? '#53b5e8' : '#232323',
      color: isDragging ? '#232323' : '#fff',
      borderRadius: 8,
      width: 60,
      height: 60,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 700,
      fontSize: 22,
      boxShadow: isDragging ? '0 4px 16px #53b5e855' : 'none',
      cursor: 'grab',
      userSelect: 'none',
    }}>{id}</div>
  );
}

// 4. 다중 드롭존(간단)
function MultiDropZone() {
  const [left, setLeft] = useState(['🍎', '🍌']);
  const [right, setRight] = useState(['🍊', '🍇', '🍉']);
  const sensors = useSensors(useSensor(PointerSensor));
  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={e => {
      const { active, over } = e;
      if (!over) return;
      if (left.includes(active.id as string) && over.id === 'right') {
        setLeft(l => l.filter(i => i !== active.id));
        setRight(r => [...r, active.id as string]);
      } else if (right.includes(active.id as string) && over.id === 'left') {
        setRight(r => r.filter(i => i !== active.id));
        setLeft(l => [...l, active.id as string]);
      }
    }}>
      <div style={{ display: 'flex', gap: 32 }}>
        <DropZone items={left} label="Left" />
        <DropZone items={right} label="Right" />
      </div>
    </DndContext>
  );
}
function DropZone({ items, label }: { items: string[]; label: string }) {
  return (
    <div style={{ minWidth: 120, minHeight: 80, background: '#232323', borderRadius: 10, padding: 12 }}>
      <div style={{ color: '#b5e853', fontWeight: 700, marginBottom: 8 }}>{label}</div>
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        {items.map(i => <SortableItem key={i} id={i} />)}
      </SortableContext>
    </div>
  );
}

// 5. 커스텀 핸들/아이콘
function HandleSortableList() {
  const [items, setItems] = useState(['A', 'B', 'C', 'D']);
  const sensors = useSensors(useSensor(PointerSensor));
  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={e => {
      const { active, over } = e;
      if (active.id !== over?.id) {
        setItems(items => {
          const oldIdx = items.indexOf(active.id as string);
          const newIdx = items.indexOf(over?.id as string);
          return arrayMove(items, oldIdx, newIdx);
        });
      }
    }}>
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {items.map(id => <HandleSortableItem key={id} id={id} />)}
        </ul>
      </SortableContext>
    </DndContext>
  );
}
function HandleSortableItem({ id }: { id: string }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });
  return (
    <li ref={setNodeRef} style={{
      transform: CSS.Transform.toString(transform),
      transition,
      background: isDragging ? '#e853b5' : '#232323',
      color: isDragging ? '#fff' : '#fff',
      borderRadius: 8,
      marginBottom: 8,
      padding: '0.7em 1.2em',
      fontSize: 22,
      fontWeight: 700,
      boxShadow: isDragging ? '0 4px 16px #e853b555' : 'none',
      cursor: 'default',
      userSelect: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
    }}>
      <span {...listeners} {...attributes} style={{ cursor: 'grab', fontSize: 18, color: '#b5e853' }}>☰</span>
      {id}
    </li>
  );
}

// 6. 카드 이동(카드형 UI)
function CardMoveExample() {
  const [cards, setCards] = useState([
    { id: '1', title: '할 일', desc: 'React 공부하기' },
    { id: '2', title: '진행 중', desc: 'DnD 예제 만들기' },
    { id: '3', title: '완료', desc: '점심 먹기' },
  ]);
  const sensors = useSensors(useSensor(PointerSensor));
  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={e => {
      const { active, over } = e;
      if (active.id !== over?.id) {
        setCards(cards => {
          const oldIdx = cards.findIndex(c => c.id === active.id);
          const newIdx = cards.findIndex(c => c.id === over?.id);
          return arrayMove(cards, oldIdx, newIdx);
        });
      }
    }}>
      <SortableContext items={cards.map(c => c.id)} strategy={verticalListSortingStrategy}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {cards.map(card => <CardItem key={card.id} card={card} />)}
        </div>
      </SortableContext>
    </DndContext>
  );
}
function CardItem({ card }: { card: { id: string; title: string; desc: string } }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: card.id });
  return (
    <div ref={setNodeRef} {...attributes} {...listeners} style={{
      transform: CSS.Transform.toString(transform),
      transition,
      background: isDragging ? '#fffbe6' : '#fff',
      color: '#232323',
      borderRadius: 10,
      boxShadow: isDragging ? '0 4px 16px #b5e85355' : '0 2px 8px #23232322',
      padding: '1em 1.5em',
      border: '1px solid #eee',
      fontWeight: 500,
      minWidth: 220,
      userSelect: 'none',
    }}>
      <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 6 }}>{card.title}</div>
      <div style={{ fontSize: 15 }}>{card.desc}</div>
    </div>
  );
}

const DndKitExample = () => (
  <div>
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>1. 기본 수직 리스트 정렬</Typography>
      <ExampleTab
        example={<BasicSortableList />}
        code={`// 기본 수직 리스트 정렬 전체 코드
function BasicSortableList() {
  const [items, setItems] = useState(['🍎', '🍌', '🍊', '🍇', '🍉']);
  const sensors = useSensors(useSensor(PointerSensor));
  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={e => {
      const { active, over } = e;
      if (active.id !== over?.id) {
        setItems(items => {
          const oldIdx = items.indexOf(active.id as string);
          const newIdx = items.indexOf(over?.id as string);
          return arrayMove(items, oldIdx, newIdx);
        });
      }
    }}>
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {items.map(id => <SortableItem key={id} id={id} />)}
        </ul>
      </SortableContext>
    </DndContext>
  );
}
function SortableItem({ id }: { id: string }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });
  return (
    <li ref={setNodeRef} {...attributes} {...listeners} style={{
      transform: CSS.Transform.toString(transform),
      transition,
      background: isDragging ? '#b5e853' : '#232323',
      color: isDragging ? '#232323' : '#fff',
      borderRadius: 8,
      marginBottom: 8,
      padding: '0.7em 1.2em',
      fontSize: 22,
      fontWeight: 700,
      boxShadow: isDragging ? '0 4px 16px #b5e85355' : 'none',
      cursor: 'grab',
      userSelect: 'none',
    }}>{id}</li>
  );
}`}
        desc={`DndContext(드래그 컨텍스트)와 SortableContext(정렬 컨텍스트), useSortable(개별 아이템 드래그 가능) 훅을 조합해 가장 기본적인 수직 리스트 정렬을 구현합니다.\n- onDragEnd에서 active.id와 over.id를 비교해 순서를 변경합니다.\n- arrayMove로 배열 순서를 쉽게 바꿀 수 있습니다.\n- 실전에서는 키보드 접근성, 커스텀 스타일, 드래그 핸들 등도 추가할 수 있습니다.`}
      />
    </div>
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>2. 수평 리스트 정렬</Typography>
      <ExampleTab
        example={<HorizontalSortableList />}
        code={`// 수평 리스트 정렬 전체 코드
function HorizontalSortableList() {
  const [items, setItems] = useState(['A', 'B', 'C', 'D', 'E']);
  const sensors = useSensors(useSensor(PointerSensor));
  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={e => {
      const { active, over } = e;
      if (active.id !== over?.id) {
        setItems(items => {
          const oldIdx = items.indexOf(active.id as string);
          const newIdx = items.indexOf(over?.id as string);
          return arrayMove(items, oldIdx, newIdx);
        });
      }
    }}>
      <SortableContext items={items} strategy={horizontalListSortingStrategy}>
        <div style={{ display: 'flex', gap: 12 }}>
          {items.map(id => <SortableItem key={id} id={id} />)}
        </div>
      </SortableContext>
    </DndContext>
  );
}`}
        desc={`horizontalListSortingStrategy를 사용하면 수평(가로) 리스트도 쉽게 정렬할 수 있습니다.\n- flex 레이아웃과 조합해 UI를 자유롭게 구성할 수 있습니다.\n- 드래그 앤 드롭으로 카드/태그/버튼 등 다양한 UI에 활용 가능합니다.`}
      />
    </div>
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>3. 그리드 정렬</Typography>
      <ExampleTab
        example={<GridSortableList />}
        code={`// 그리드 정렬 전체 코드
function GridSortableList() {
  const [items, setItems] = useState(['1', '2', '3', '4', '5', '6']);
  const sensors = useSensors(useSensor(PointerSensor));
  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={e => {
      const { active, over } = e;
      if (active.id !== over?.id) {
        setItems(items => {
          const oldIdx = items.indexOf(active.id as string);
          const newIdx = items.indexOf(over?.id as string);
          return arrayMove(items, oldIdx, newIdx);
        });
      }
    }}>
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 60px)', gap: 12 }}>
          {items.map(id => <SortableGridItem key={id} id={id} />)}
        </div>
      </SortableContext>
    </DndContext>
  );
}
function SortableGridItem({ id }: { id: string }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });
  return (
    <div ref={setNodeRef} {...attributes} {...listeners} style={{
      transform: CSS.Transform.toString(transform),
      transition,
      background: isDragging ? '#53b5e8' : '#232323',
      color: isDragging ? '#232323' : '#fff',
      borderRadius: 8,
      width: 60,
      height: 60,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 700,
      fontSize: 22,
      boxShadow: isDragging ? '0 4px 16px #53b5e855' : 'none',
      cursor: 'grab',
      userSelect: 'none',
    }}>{id}</div>
  );
}`}
        desc={`grid 레이아웃(행/열)에서도 드래그 정렬이 가능합니다.\n- SortableContext와 grid CSS 조합\n- 대시보드, 이미지 갤러리, 카드형 UI 등에 활용`}
      />
    </div>
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>4. 다중 드롭존</Typography>
      <ExampleTab
        example={<MultiDropZone />}
        code={`// 다중 드롭존 전체 코드
function MultiDropZone() {
  const [left, setLeft] = useState(['🍎', '🍌']);
  const [right, setRight] = useState(['🍊', '🍇', '🍉']);
  const sensors = useSensors(useSensor(PointerSensor));
  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={e => {
      const { active, over } = e;
      if (!over) return;
      if (left.includes(active.id as string) && over.id === 'right') {
        setLeft(l => l.filter(i => i !== active.id));
        setRight(r => [...r, active.id as string]);
      } else if (right.includes(active.id as string) && over.id === 'left') {
        setRight(r => r.filter(i => i !== active.id));
        setLeft(l => [...l, active.id as string]);
      }
    }}>
      <div style={{ display: 'flex', gap: 32 }}>
        <DropZone items={left} label="Left" />
        <DropZone items={right} label="Right" />
      </div>
    </DndContext>
  );
}
function DropZone({ items, label }: { items: string[]; label: string }) {
  return (
    <div style={{ minWidth: 120, minHeight: 80, background: '#232323', borderRadius: 10, padding: 12 }}>
      <div style={{ color: '#b5e853', fontWeight: 700, marginBottom: 8 }}>{label}</div>
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        {items.map(i => <SortableItem key={i} id={i} />)}
      </SortableContext>
    </div>
  );
}`}
        desc={`여러 DropZone(드롭 영역) 간에 아이템을 이동할 수 있습니다.\n- 드래그한 아이템이 어느 영역에 속하는지에 따라 상태를 분리 관리\n- Kanban 보드, 장바구니, 분류 UI 등에 활용`}
      />
    </div>
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>5. 커스텀 핸들/아이콘</Typography>
      <ExampleTab
        example={<HandleSortableList />}
        code={`// 커스텀 핸들 전체 코드
function HandleSortableList() {
  const [items, setItems] = useState(['A', 'B', 'C', 'D']);
  const sensors = useSensors(useSensor(PointerSensor));
  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={e => {
      const { active, over } = e;
      if (active.id !== over?.id) {
        setItems(items => {
          const oldIdx = items.indexOf(active.id as string);
          const newIdx = items.indexOf(over?.id as string);
          return arrayMove(items, oldIdx, newIdx);
        });
      }
    }}>
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {items.map(id => <HandleSortableItem key={id} id={id} />)}
        </ul>
      </SortableContext>
    </DndContext>
  );
}
function HandleSortableItem({ id }: { id: string }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });
  return (
    <li ref={setNodeRef} style={{
      transform: CSS.Transform.toString(transform),
      transition,
      background: isDragging ? '#e853b5' : '#232323',
      color: isDragging ? '#fff' : '#fff',
      borderRadius: 8,
      marginBottom: 8,
      padding: '0.7em 1.2em',
      fontSize: 22,
      fontWeight: 700,
      boxShadow: isDragging ? '0 4px 16px #e853b555' : 'none',
      cursor: 'default',
      userSelect: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
    }}>
      <span {...listeners} {...attributes} style={{ cursor: 'grab', fontSize: 18, color: '#b5e853' }}>☰</span>
      {id}
    </li>
  );
}`}
        desc={`드래그 핸들(☰)만 잡고 이동할 수 있도록 커스텀할 수 있습니다.\n- 핸들 영역만 드래그 가능하게 하여 실수 방지\n- 실전에서는 아이콘, 버튼, 영역 등 다양한 핸들 UI로 확장 가능`}
      />
    </div>
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>6. 카드 이동(카드형 UI)</Typography>
      <ExampleTab
        example={<CardMoveExample />}
        code={`// 카드 이동 전체 코드
function CardMoveExample() {
  const [cards, setCards] = useState([
    { id: '1', title: '할 일', desc: 'React 공부하기' },
    { id: '2', title: '진행 중', desc: 'DnD 예제 만들기' },
    { id: '3', title: '완료', desc: '점심 먹기' },
  ]);
  const sensors = useSensors(useSensor(PointerSensor));
  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={e => {
      const { active, over } = e;
      if (active.id !== over?.id) {
        setCards(cards => {
          const oldIdx = cards.findIndex(c => c.id === active.id);
          const newIdx = cards.findIndex(c => c.id === over?.id);
          return arrayMove(cards, oldIdx, newIdx);
        });
      }
    }}>
      <SortableContext items={cards.map(c => c.id)} strategy={verticalListSortingStrategy}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {cards.map(card => <CardItem key={card.id} card={card} />)}
        </div>
      </SortableContext>
    </DndContext>
  );
}
function CardItem({ card }: { card: { id: string; title: string; desc: string } }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: card.id });
  return (
    <div ref={setNodeRef} {...attributes} {...listeners} style={{
      transform: CSS.Transform.toString(transform),
      transition,
      background: isDragging ? '#fffbe6' : '#fff',
      color: '#232323',
      borderRadius: 10,
      boxShadow: isDragging ? '0 4px 16px #b5e85355' : '0 2px 8px #23232322',
      padding: '1em 1.5em',
      border: '1px solid #eee',
      fontWeight: 500,
      minWidth: 220,
      userSelect: 'none',
    }}>
      <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 6 }}>{card.title}</div>
      <div style={{ fontSize: 15 }}>{card.desc}</div>
    </div>
  );
}`}
        desc={`카드형 UI(예: 칸반보드, 작업 리스트 등)에서 카드 순서를 드래그로 변경할 수 있습니다.\n- 객체 배열을 사용해 실제 데이터와 연동\n- 카드별 스타일, 내용, 액션 버튼 등 확장 가능\n- 실전에서는 컬럼별 이동, 외부 데이터 연동 등도 쉽게 구현`}
      />
    </div>
  </div>
);

export default DndKitExample; 