import React, { useEffect, useState } from 'react';
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Typography, Button, Alert, CircularProgress, Snackbar } from '@mui/material';
import { ExampleTab } from '../../components/ExampleTab';

// 타입 정의
export type KanbanColumns = { [key: string]: { id: string; text: string }[] };

// 실제 REST API 대신 mock API (axios 사용)
const mockFetchBoard = async (): Promise<KanbanColumns> => {
  // 실제로는 axios.get(API_URL)
  return new Promise(resolve => setTimeout(() => {
    resolve({
      todo: [
        { id: '1', text: 'API 연동 DnD 만들기' },
        { id: '2', text: 'Optimistic UI 적용' },
      ],
      doing: [
        { id: '3', text: '실전 UX 개선' },
      ],
      done: [
        { id: '4', text: '테스트/배포' }],
    });
  }, 700));
};
const mockSaveBoard = async (_: KanbanColumns) => {
  // 실제로는 axios.post(API_URL, data)
  return new Promise((resolve, reject) => setTimeout(() => {
    if (Math.random() < 0.15) return reject(new Error('서버 오류!'));
    resolve(true);
  }, 700));
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
        background: isDragging ? '#e3f2fd' : '#fff',
        color: '#232323',
        borderRadius: 8,
        boxShadow: isDragging ? '0 4px 16px #1976d255' : '0 2px 8px #23232322',
        padding: '0.8em 1em',
        border: '1px solid #90caf9',
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
    <div style={{ minWidth: 220, background: '#e3f2fd', borderRadius: 12, padding: 16, minHeight: 220 }}>
      <div style={{ color: '#1976d2', fontWeight: 700, fontSize: 18, marginBottom: 12, textAlign: 'center' }}>
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

const codeExample = `// REST API/axios 기반 Kanban DnD\nconst mockFetchBoard = async () => { /* ... */ };\nconst mockSaveBoard = async (data) => { /* ... */ };\n// DnDContext, SortableContext, handleDragEnd 등은 dnd-kit 공식 문서 참고`;
const tip = `실전 팁:\n- Optimistic UI: 드래그 후 즉시 UI 반영, 실패 시 롤백\n- 에러/로딩/성공 상태를 명확히 표시\n- 실제 API 연동 시 axios/fetch로 대체\n- 칸반 외에도 리스트/트리 등 다양한 구조에 응용 가능`;

const ServerDnDExample2: React.FC = () => {
  const [columns, setColumns] = useState<KanbanColumns | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const sensors = useSensors(useSensor(PointerSensor));

  useEffect(() => {
    setLoading(true);
    mockFetchBoard().then(data => {
      setColumns(data);
      setLoading(false);
    });
  }, []);

  // Optimistic update + 에러 처리
  const saveBoard = async (next: KanbanColumns) => {
    setSaving(true);
    setError(null);
    setColumns(next); // Optimistic update
    try {
      await mockSaveBoard(next);
      setSuccess(true);
    } catch (e: any) {
      setError(e.message);
      // 실패 시 롤백(실제라면 이전 상태 저장 필요)
      mockFetchBoard().then(data => setColumns(data));
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
    saveBoard(next);
  }

  if (loading) return <div style={{textAlign:'center',margin:'2em'}}><CircularProgress /><br/>불러오는 중...</div>;

  return (
    <div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>1. 설명 및 코드</Typography>
        <ExampleTab
          example={<div>REST API/axios 기반 Kanban 보드에서 드래그로 카드 순서를 바꾸고, 변경사항을 서버에 저장하는 실전 예제입니다.<br/>- Optimistic UI, 에러 처리, 실전 UX 개선<br/>- 실제 API 연동 시 axios/fetch로 대체</div>}
          code={codeExample}
          desc={"이 예제는 REST API/axios, dnd-kit, Optimistic UI, 에러 처리 등 실전 패턴을 모두 반영합니다."}
          labels={['실행 예제', '코드', '설명']}
        />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>2. 실행 예제</Typography>
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
                {saving && <span style={{color:'#1976d2'}}><CircularProgress size={18} sx={{mr:1}}/>저장 중...</span>}
                <Button size="small" onClick={()=>{
                  setLoading(true);
                  mockFetchBoard().then(data=>{setColumns(data);setLoading(false);});
                }}>서버에서 새로고침</Button>
              </div>
              <Snackbar
                open={success}
                autoHideDuration={1500}
                onClose={()=>setSuccess(false)}
                message="저장 성공!"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
              />
            </>
          }
          code={`// 주요 DnD 로직 및 상태 관리 코드는 위 설명/코드 탭 참고`}
          desc={`실행 결과: 칸반 보드에서 카드를 드래그하면 서버에 저장/불러오기, Optimistic UI, 에러/로딩/성공 상태가 반영됩니다.`}
          labels={['실행 예제', '코드', '설명']}
        />
      </div>
      <div style={{...stateExampleBlockStyle, background:'#f1f5fb', border:'1px solid #dbeafe'}}>
        <Typography variant="h6" sx={{ mb: 2, color: '#2563eb', fontWeight: 600 }}>실전 팁</Typography>
        <pre style={{background:'transparent',color:'#2563eb',padding:0,margin:0,whiteSpace:'pre-line',fontSize:15, fontFamily:'inherit'}}>{tip}</pre>
      </div>
    </div>
  );
};

export default ServerDnDExample2; 