import React, { useEffect, useState } from 'react';
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Typography, Button, Alert, CircularProgress, Snackbar } from '@mui/material';
import { ExampleTab } from '../../components/ExampleTab';

// 타입 정의
export type KanbanColumns = { [key: string]: { id: string; text: string }[] };

// mock API (localStorage + setTimeout)
const STORAGE_KEY = 'server-dnd-kanban';
const mockFetchBoard = () =>
  new Promise<KanbanColumns>(resolve => setTimeout(() => {
    const data = localStorage.getItem(STORAGE_KEY);
    resolve(
      data
        ? JSON.parse(data)
        : {
            todo: [
              { id: '1', text: 'React 공부하기' },
              { id: '2', text: 'DnD 예제 만들기' },
            ],
            doing: [
              { id: '3', text: '문서 정리' },
            ],
            done: [
              { id: '4', text: '점심 먹기' }],
          }
    );
  }, 600));
const mockSaveBoard = (data: KanbanColumns) =>
  new Promise((resolve, reject) => setTimeout(() => {
    if (Math.random() < 0.1) return reject(new Error('서버 오류!'));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    resolve(true);
  }, 600));

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

function KanbanColumn({ col, items }: { col: string; items: { id: string; text: string }[] }) {
  return (
    <div style={{ minWidth: 220, background: '#232323', borderRadius: 12, padding: 16, minHeight: 220 }}>
      <div style={{ color: '#b5e853', fontWeight: 700, fontSize: 18, marginBottom: 12, textAlign: 'center' }}>
        {col === 'todo' ? '할 일' : col === 'doing' ? '진행 중' : '완료'}
      </div>
      <SortableContext items={items.map(i => i.id)} strategy={verticalListSortingStrategy}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {items.map(item => <KanbanCard key={item.id} item={item} />)}
        </div>
      </SortableContext>
    </div>
  );
}

const stateExampleBlockStyle = {
  background: '#f8fafc',
  padding: '1.5em 2em',
  borderRadius: '8px',
  border: '1px solid #eee',
  marginTop: '1.2em',
  marginBottom: '2em',
  marginLeft: 0,
  marginRight: 0,
};

const codeExample = `// mock fetch(localStorage) 기반 Kanban DnD\nconst mockFetchBoard = () => { /* ... */ };\nconst mockSaveBoard = (data) => { /* ... */ };\n// DndContext, SortableContext, handleDragEnd 등은 dnd-kit 공식 문서 참고`;

const ServerDnDExample: React.FC = () => {
  const [columns, setColumns] = useState<KanbanColumns | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const sensors = useSensors(useSensor(PointerSensor));

  useEffect(() => {
    setLoading(true);
    mockFetchBoard().then(data => {
      setColumns(data);
      setLoading(false);
    });
  }, []);

  const saveBoard = async (next: KanbanColumns) => {
    setSaving(true);
    setError(null);
    try {
      await mockSaveBoard(next);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setSaving(false);
    }
  };

  function handleDragEnd(e: any) {
    const { active, over } = e;
    if (!over || !columns) return;
    let fromCol: string | undefined, toCol: string | undefined;
    for (const key in columns) {
      if (columns[key].find((item: { id: string }) => item.id === active.id)) fromCol = key;
      if (columns[key].find((item: { id: string }) => item.id === over.id)) toCol = key;
    }
    if (!fromCol || !toCol) return;
    if (fromCol === toCol && active.id === over.id) return;
    const fromList = [...columns[fromCol]];
    const toList = fromCol === toCol ? fromList : [...columns[toCol]];
    const movingIdx = fromList.findIndex(i => i.id === active.id);
    const overIdx = toList.findIndex(i => i.id === over.id);
    const [moving] = fromList.splice(movingIdx, 1);
    toList.splice(overIdx, 0, moving);
    const next: KanbanColumns = {
      ...columns,
      [fromCol]: fromCol === toCol ? toList : fromList,
      [toCol]: toList,
    };
    setColumns(next);
    saveBoard(next);
  }

  if (loading) return <div style={{textAlign:'center',margin:'2em'}}><CircularProgress /><br/>불러오는 중...</div>;

  return (
    <div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>서버 연동 DnD (실전 예제)</Typography>
        <ExampleTab
          example={
            <>
              {error && <Alert severity="error" sx={{mb:2}}>{error}</Alert>}
              <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                <div style={{ display: 'flex', gap: 32, justifyContent: 'center', margin: '1.5em 0' }}>
                  {columns && Object.entries(columns).map(([col, items]) => (
                    <KanbanColumn key={col} col={col} items={items} />
                  ))}
                </div>
              </DndContext>
              <div style={{textAlign:'right',marginTop:8}}>
                {saving && <span style={{color:'#b5e853'}}><CircularProgress size={18} sx={{mr:1}}/>저장 중...</span>}
                <Button size="small" onClick={()=>{
                  setLoading(true);
                  mockFetchBoard().then(data=>{setColumns(data);setLoading(false);});
                }}>서버에서 새로고침</Button>
              </div>
              <Snackbar
                open={saving}
                autoHideDuration={1500}
                onClose={()=>setSaving(false)}
                message="저장 성공!"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
              />
            </>
          }
          code={codeExample}
          desc={`Kanban 스타일 보드에서 드래그로 카드 순서를 바꾸고, 변경사항을 서버에 저장/불러오는 실전 예제입니다.\n- mock fetch(localStorage)로 서버 연동 시뮬레이션\n- 낙관적 UI, 에러 처리, 동기화 패턴 반영\n\n[실전 팁]\n- 낙관적 UI, 에러 처리, 동기화 패턴 반영\n- mock fetch/localStorage로 서버 연동 시뮬레이션\n- 칸반 외에도 리스트/트리 등 다양한 구조에 응용 가능`}
          labels={['Example', 'Sources', 'Description']}
        />
      </div>
    </div>
  );
};

export default ServerDnDExample; 