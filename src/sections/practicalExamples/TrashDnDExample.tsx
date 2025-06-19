import React, { useState } from 'react';
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy, useSortable, arrayMove } from '@dnd-kit/sortable';
import { Typography, Box, Snackbar } from '@mui/material';
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

const trashDnDCode = `import React, { useState } from 'react';
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy, useSortable, arrayMove } from '@dnd-kit/sortable';
import { Box, Snackbar } from '@mui/material';

function Card({ id, text, listeners, attributes, setNodeRef, isDragging }) {
  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={{
        background: isDragging ? '#e53e3e' : '#fff',
        color: '#232323',
        borderRadius: 8,
        boxShadow: isDragging ? '0 4px 16px #e53e3e99' : '0 2px 8px #23232322',
        padding: '0.8em 1em',
        border: '1.5px solid #eee',
        fontWeight: 500,
        fontSize: 16,
        userSelect: 'none',
        cursor: 'grab',
        marginBottom: 10,
        opacity: isDragging ? 0.7 : 1,
        transition: 'box-shadow 0.2s, background 0.2s',
        minWidth: 180,
      }}
    >
      {text}
    </div>
  );
}

function TrashDnDExample() {
  const [items, setItems] = useState([
    { id: '1', text: 'React 공부하기' },
    { id: '2', text: 'DnD 휴지통 구현' },
    { id: '3', text: '문서 정리' },
    { id: '4', text: '점심 먹기' },
  ]);
  const [trashActive, setTrashActive] = useState(false);
  const [snackbar, setSnackbar] = useState(false);
  const sensors = useSensors(useSensor(PointerSensor));

  function handleDragOver(event) {
    if (event.over && event.over.id === 'trash') {
      setTrashActive(true);
    } else {
      setTrashActive(false);
    }
  }
  function handleDragEnd(event) {
    const { active, over } = event;
    setTrashActive(false);
    if (over && over.id === 'trash') {
      setItems(items => items.filter(i => i.id !== active.id));
      setSnackbar(true);
    } else if (active.id !== over?.id) {
      setItems(items => {
        const oldIdx = items.findIndex(i => i.id === active.id);
        const newIdx = items.findIndex(i => i.id === over?.id);
        return arrayMove(items, oldIdx, newIdx);
      });
    }
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start' }}>
        <SortableContext items={items.map(i => i.id)} strategy={verticalListSortingStrategy}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, minHeight: 180 }}>
            {items.map(item => <SortableCard key={item.id} id={item.id} text={item.text} />)}
          </div>
        </SortableContext>
        <Box
          id="trash"
          sx={{
            width: 80, height: 80, borderRadius: '50%',
            background: trashActive ? '#e53e3e' : '#232323',
            color: trashActive ? '#fff' : '#aaa',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 32, fontWeight: 700, boxShadow: trashActive ? '0 0 0 4px #e53e3e55' : '0 2px 8px #23232322',
            border: trashActive ? '2.5px solid #fff' : '2.5px solid #484f54',
            transition: 'all 0.2s',
            mt: 2
          }}
        >
          🗑️
        </Box>
      </div>
      <Snackbar
        open={snackbar}
        autoHideDuration={1200}
        onClose={()=>setSnackbar(false)}
        message="삭제되었습니다."
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </DndContext>
  );
}

function SortableCard({ id, text }) {
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
`;

const trashDnDDesc = `카드/아이템을 휴지통 영역으로 드래그하면 삭제되는 DnD 예제입니다.\n\n- 휴지통 위에 드래그하면 색상/애니메이션으로 피드백을 주고, 드롭 시 삭제 및 스낵바 알림이 표시됩니다.\n- 실전에서는 삭제 확인, Undo, 서버 연동 등으로 확장할 수 있습니다.`;

function Card({ text, listeners, attributes, setNodeRef, isDragging }: any) {
  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={{
        background: isDragging ? '#e53e3e' : '#fff',
        color: '#232323',
        borderRadius: 8,
        boxShadow: isDragging ? '0 4px 16px #e53e3e99' : '0 2px 8px #23232322',
        padding: '0.8em 1em',
        border: '1.5px solid #eee',
        fontWeight: 500,
        fontSize: 16,
        userSelect: 'none',
        cursor: 'grab',
        marginBottom: 10,
        opacity: isDragging ? 0.7 : 1,
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

const TrashDnDExample: React.FC = () => {
  const [items, setItems] = useState([
    { id: '1', text: 'React 공부하기' },
    { id: '2', text: 'DnD 휴지통 구현' },
    { id: '3', text: '문서 정리' },
    { id: '4', text: '점심 먹기' },
  ]);
  const [trashActive, setTrashActive] = useState(false);
  const [snackbar, setSnackbar] = useState(false);
  const sensors = useSensors(useSensor(PointerSensor));

  function handleDragOver(event: any) {
    if (event.over && event.over.id === 'trash') {
      setTrashActive(true);
    } else {
      setTrashActive(false);
    }
  }
  function handleDragEnd(event: any) {
    const { active, over } = event;
    setTrashActive(false);
    if (over && over.id === 'trash') {
      setItems(items => items.filter(i => i.id !== active.id));
      setSnackbar(true);
    } else if (active.id !== over?.id) {
      setItems(items => {
        const oldIdx = items.findIndex(i => i.id === active.id);
        const newIdx = items.findIndex(i => i.id === over?.id);
        return arrayMove(items, oldIdx, newIdx);
      });
    }
  }

  const example = (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start' }}>
        <SortableContext items={items.map(i => i.id)} strategy={verticalListSortingStrategy}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, minHeight: 180 }}>
            {items.map(item => <SortableCard key={item.id} id={item.id} text={item.text} />)}
          </div>
        </SortableContext>
        <Box
          id="trash"
          sx={{
            width: 80, height: 80, borderRadius: '50%',
            background: trashActive ? '#e53e3e' : '#232323',
            color: trashActive ? '#fff' : '#aaa',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 32, fontWeight: 700, boxShadow: trashActive ? '0 0 0 4px #e53e3e55' : '0 2px 8px #23232322',
            border: trashActive ? '2.5px solid #fff' : '2.5px solid #484f54',
            transition: 'all 0.2s',
            mt: 2
          }}
        >
          🗑️
        </Box>
      </div>
      <Snackbar
        open={snackbar}
        autoHideDuration={1200}
        onClose={()=>setSnackbar(false)}
        message="삭제되었습니다."
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </DndContext>
  );

  return (
    <div style={stateExampleBlockStyle}>
      <Typography variant="h6" sx={{ mb: 2 }}>휴지통/삭제 DnD</Typography>
      <ExampleTab
        example={example}
        code={trashDnDCode}
        desc={trashDnDDesc}
      />
    </div>
  );
};

export default TrashDnDExample; 