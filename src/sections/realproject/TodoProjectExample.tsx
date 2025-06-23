import { useReducer, useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import { ExampleTab } from '../../components/ExampleTab';

// 1. 타입 설계
export type TodoItem = {
  id: number;
  text: string;
  completed: boolean;
  dueDate?: string;
};

export type Filter = 'all' | 'completed' | 'active';

// 2. 상태관리 (useReducer)
type State = { todos: TodoItem[]; filter: Filter };
type Action =
  | { type: 'ADD'; text: string }
  | { type: 'TOGGLE'; id: number }
  | { type: 'DELETE'; id: number }
  | { type: 'SET_FILTER'; filter: Filter };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'ADD':
      const newTodo: TodoItem = {
        id: Date.now(),
        text: action.text,
        completed: false,
      };
      return { ...state, todos: [newTodo, ...state.todos] };
    case 'TOGGLE':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case 'DELETE':
      return { ...state, todos: state.todos.filter(todo => todo.id !== action.id) };
    case 'SET_FILTER':
      return { ...state, filter: action.filter };
    default:
      return state;
  }
}

// 3. 단계별 미니 예제 컴포넌트
function MiniTypeDemo() {
  // 타입 설계는 UI가 없으므로 설명만
  return <div style={{ color: '#8fd', fontWeight: 600 }}>타입 설계는 코드 탭을 참고하세요!</div>;
}

function MiniStateDemo() {
  const [state, dispatch] = useReducer(reducer, { todos: [], filter: 'all' });
  return (
    <div style={{ background: '#23272f', borderRadius: 8, padding: 16, color: '#eaeaea', maxWidth: 340 }}>
      <button onClick={() => dispatch({ type: 'ADD', text: '예시 할 일' })} style={{ marginBottom: 8, background: '#8fd', color: '#23272f', border: 'none', borderRadius: 6, padding: '6px 14px', fontWeight: 700 }}>할 일 추가</button>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {state.todos.map(todo => (
          <li key={todo.id} style={{ padding: 4 }}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

function MiniInputDemo() {
  const [text, setText] = useState('');
  const [list, setList] = useState<string[]>([]);
  return (
    <div style={{ background: '#23272f', borderRadius: 8, padding: 16, color: '#eaeaea', maxWidth: 340 }}>
      <form onSubmit={e => { e.preventDefault(); if (!text.trim()) return; setList(l => [text, ...l]); setText(''); }} style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
        <input value={text} onChange={e => setText(e.target.value)} placeholder="할 일 입력" style={{ flex: 1, borderRadius: 6, border: '1px solid #444', background: '#181c20', color: '#eaeaea', padding: 6 }} />
        <button type="submit" style={{ borderRadius: 6, background: '#8fd', color: '#23272f', fontWeight: 700, border: 'none', padding: '6px 14px' }}>추가</button>
      </form>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {list.map((item, i) => <li key={i} style={{ padding: 4 }}>{item}</li>)}
      </ul>
    </div>
  );
}

function MiniFilterDemo() {
  const [filter, setFilter] = useState<Filter>('all');
  return (
    <div style={{ background: '#23272f', borderRadius: 8, padding: 16, color: '#eaeaea', maxWidth: 340 }}>
      <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
        {(['all', 'active', 'completed'] as Filter[]).map(f => (
          <button key={f} onClick={() => setFilter(f)} style={{ borderRadius: 6, border: 'none', background: filter === f ? '#8fd' : '#23272f', color: filter === f ? '#23272f' : '#eaeaea', fontWeight: 700, padding: '6px 14px' }}>{f}</button>
        ))}
      </div>
      <div>현재 필터: <b style={{ color: '#8fd' }}>{filter}</b></div>
    </div>
  );
}

function MiniListDemo() {
  const [todos, setTodos] = useState<TodoItem[]>([ { id: 1, text: '예시 할 일', completed: false } ]);
  return (
    <div style={{ background: '#23272f', borderRadius: 8, padding: 16, color: '#eaeaea', maxWidth: 340 }}>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map(todo => (
          <li key={todo.id} style={{ display: 'flex', alignItems: 'center', padding: 4 }}>
            <input type="checkbox" checked={todo.completed} onChange={() => setTodos(ts => ts.map(t => t.id === todo.id ? { ...t, completed: !t.completed } : t))} style={{ marginRight: 8 }} />
            <span style={{ textDecoration: todo.completed ? 'line-through' : undefined }}>{todo.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MiniTestDemo() {
  return <div style={{ color: '#8fd', fontWeight: 600 }}>테스트 코드는 코드 탭을 참고하세요!</div>;
}

function MiniEditDemo() {
  const [todos, setTodos] = useState<TodoItem[]>([
    { id: 1, text: '예시 할 일', completed: false }
  ]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState('');
  return (
    <div style={{ background: '#23272f', borderRadius: 8, padding: 16, color: '#eaeaea', maxWidth: 340 }}>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map(todo => (
          <li key={todo.id} style={{ display: 'flex', alignItems: 'center', padding: 4 }}>
            {editingId === todo.id ? (
              <>
                <input
                  value={editText}
                  onChange={e => setEditText(e.target.value)}
                  style={{ flex: 1, marginRight: 8, borderRadius: 6, border: '1px solid #444', background: '#181c20', color: '#eaeaea', padding: 6 }}
                />
                <button
                  onClick={() => { setTodos(ts => ts.map(t => t.id === todo.id ? { ...t, text: editText } : t)); setEditingId(null); }}
                  style={{ borderRadius: 6, background: '#8fd', color: '#23272f', fontWeight: 700, border: 'none', padding: '6px 10px', marginRight: 4 }}
                >저장</button>
                <button
                  onClick={() => setEditingId(null)}
                  style={{ borderRadius: 6, background: '#ff6b6b', color: '#fff', fontWeight: 700, border: 'none', padding: '6px 10px' }}
                >취소</button>
              </>
            ) : (
              <>
                <span style={{ flex: 1 }}>{todo.text}</span>
                <button
                  onClick={() => { setEditingId(todo.id); setEditText(todo.text); }}
                  style={{ borderRadius: 6, background: '#ffe066', color: '#23272f', fontWeight: 700, border: 'none', padding: '6px 10px', marginLeft: 8 }}
                >수정</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

const miniEditDemoCode = `function MiniEditDemo() {\n  const [todos, setTodos] = useState<TodoItem[]>([\n    { id: 1, text: '예시 할 일', completed: false }\n  ]);\n  const [editingId, setEditingId] = useState<number | null>(null);\n  const [editText, setEditText] = useState('');\n  return (\n    <div style={{ background: '#23272f', borderRadius: 8, padding: 16, color: '#eaeaea', maxWidth: 340 }}>\n      <ul style={{ listStyle: 'none', padding: 0 }}>\n        {todos.map(todo => (\n          <li key={todo.id} style={{ display: 'flex', alignItems: 'center', padding: 4 }}>\n            {editingId === todo.id ? (\n              <>\n                <input\n                  value={editText}\n                  onChange={e => setEditText(e.target.value)}\n                  style={{ flex: 1, marginRight: 8, borderRadius: 6, border: '1px solid #444', background: '#181c20', color: '#eaeaea', padding: 6 }}\n                />\n                <button\n                  onClick={() => { setTodos(ts => ts.map(t => t.id === todo.id ? { ...t, text: editText } : t)); setEditingId(null); }}\n                  style={{ borderRadius: 6, background: '#8fd', color: '#23272f', fontWeight: 700, border: 'none', padding: '6px 10px', marginRight: 4 }}\n                >저장</button>\n                <button\n                  onClick={() => setEditingId(null)}\n                  style={{ borderRadius: 6, background: '#ff6b6b', color: '#fff', fontWeight: 700, border: 'none', padding: '6px 10px' }}\n                >취소</button>\n              </>\n            ) : (\n              <>\n                <span style={{ flex: 1 }}>{todo.text}</span>\n                <button\n                  onClick={() => { setEditingId(todo.id); setEditText(todo.text); }}\n                  style={{ borderRadius: 6, background: '#ffe066', color: '#23272f', fontWeight: 700, border: 'none', padding: '6px 10px', marginLeft: 8 }}\n                >수정</button>\n              </>\n            )}\n          </li>\n        ))}\n      </ul>\n    </div>\n  );\n}`;

function MiniDueDateDemo() {
  const [text, setText] = useState('');
  const [due, setDue] = useState('');
  const [list, setList] = useState<{ text: string; due: string }[]>([]);
  return (
    <div style={{ background: '#23272f', borderRadius: 8, padding: 16, color: '#eaeaea', maxWidth: 340 }}>
      <form
        onSubmit={e => { e.preventDefault(); if (!text.trim()) return; setList(l => [{ text, due }, ...l]); setText(''); setDue(''); }}
        style={{ display: 'flex', gap: 8, marginBottom: 8 }}
      >
        <input value={text} onChange={e => setText(e.target.value)} placeholder="할 일 입력" style={{ flex: 1, borderRadius: 6, border: '1px solid #444', background: '#181c20', color: '#eaeaea', padding: 6 }} />
        <input type="date" value={due} onChange={e => setDue(e.target.value)} style={{ borderRadius: 6, border: '1px solid #444', background: '#181c20', color: '#eaeaea', padding: 6 }} />
        <button type="submit" style={{ borderRadius: 6, background: '#8fd', color: '#23272f', fontWeight: 700, border: 'none', padding: '6px 14px' }}>추가</button>
      </form>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {list.map((item, i) => (
          <li key={i} style={{ padding: 4 }}>
            {item.text}
            {item.due && (
              <span style={{ color: '#ffe066', marginLeft: 8 }}>
                (마감: {item.due})
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

const miniDueDateDemoCode = `function MiniDueDateDemo() {
  const [text, setText] = useState('');
  const [due, setDue] = useState('');
  const [list, setList] = useState<{ text: string; due: string }[]>([]);
  return (
    <div style={{ background: '#23272f', borderRadius: 8, padding: 16, color: '#eaeaea', maxWidth: 340 }}>
      <form
        onSubmit={e => { e.preventDefault(); if (!text.trim()) return; setList(l => [{ text, due }, ...l]); setText(''); setDue(''); }}
        style={{ display: 'flex', gap: 8, marginBottom: 8 }}
      >
        <input value={text} onChange={e => setText(e.target.value)} placeholder="할 일 입력" style={{ flex: 1, borderRadius: 6, border: '1px solid #444', background: '#181c20', color: '#eaeaea', padding: 6 }} />
        <input type="date" value={due} onChange={e => setDue(e.target.value)} style={{ borderRadius: 6, border: '1px solid #444', background: '#181c20', color: '#eaeaea', padding: 6 }} />
        <button type="submit" style={{ borderRadius: 6, background: '#8fd', color: '#23272f', fontWeight: 700, border: 'none', padding: '6px 14px' }}>추가</button>
      </form>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {list.map((item, i) => (
          <li key={i} style={{ padding: 4 }}>
            {item.text}
            {item.due && (
              <span style={{ color: '#ffe066', marginLeft: 8 }}>
                (마감: {item.due})
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}`;

function MiniApiDemo() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [loading, setLoading] = useState(false);
  function fetchTodos() {
    setLoading(true);
    setTimeout(() => {
      setTodos([
        { id: 1, text: '서버에서 불러온 할 일', completed: false },
        { id: 2, text: 'API 예제', completed: true }
      ]);
      setLoading(false);
    }, 1000);
  }
  return (
    <div style={{ background: '#23272f', borderRadius: 8, padding: 16, color: '#eaeaea', maxWidth: 340 }}>
      <button onClick={fetchTodos} style={{ borderRadius: 6, background: '#8fd', color: '#23272f', fontWeight: 700, border: 'none', padding: '6px 14px', marginBottom: 8 }}>
        서버에서 할 일 불러오기
      </button>
      {loading ? <div>로딩 중...</div> : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {todos.map(todo => (
            <li key={todo.id} style={{ padding: 4 }}>{todo.text}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

const miniApiDemoCode = `function MiniApiDemo() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [loading, setLoading] = useState(false);
  function fetchTodos() {
    setLoading(true);
    setTimeout(() => {
      setTodos([
        { id: 1, text: '서버에서 불러온 할 일', completed: false },
        { id: 2, text: 'API 예제', completed: true }
      ]);
      setLoading(false);
    }, 1000);
  }
  return (
    <div style={{ background: '#23272f', borderRadius: 8, padding: 16, color: '#eaeaea', maxWidth: 340 }}>
      <button onClick={fetchTodos} style={{ borderRadius: 6, background: '#8fd', color: '#23272f', fontWeight: 700, border: 'none', padding: '6px 14px', marginBottom: 8 }}>
        서버에서 할 일 불러오기
      </button>
      {loading ? <div>로딩 중...</div> : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {todos.map(todo => (
            <li key={todo.id} style={{ padding: 4 }}>{todo.text}</li>
          ))}
        </ul>
      )}
    </div>
  );
}`;

// 1. REST API 커스텀 훅 예제
function useTodosApiMock() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [loading, setLoading] = useState(false);
  const fetchTodos = async () => {
    setLoading(true);
    setTimeout(() => {
      setTodos([
        { id: 1, text: '서버에서 불러온 할 일', completed: false, dueDate: '2024-07-01' },
        { id: 2, text: 'API 예제', completed: true, dueDate: '2024-07-02' }
      ]);
      setLoading(false);
    }, 1000);
  };
  const addTodo = async (text: string, dueDate?: string) => {
    setTodos(todos => [{ id: Date.now(), text, completed: false, dueDate }, ...todos]);
  };
  const updateTodo = async (id: number, data: Partial<TodoItem>) => {
    setTodos(todos => todos.map(t => t.id === id ? { ...t, ...data } : t));
  };
  const deleteTodo = async (id: number) => {
    setTodos(todos => todos.filter(t => t.id !== id));
  };
  return { todos, loading, fetchTodos, addTodo, updateTodo, deleteTodo };
}

// 2. 통합 TodoApp (수정/삭제/마감일/완료/REST API)
function RealTodoAppDemo() {
  const { todos, loading, fetchTodos, addTodo, updateTodo, deleteTodo } = useTodosApiMock();
  const [text, setText] = useState('');
  const [due, setDue] = useState('');
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState('');
  const [editDue, setEditDue] = useState('');
  useEffect(() => { fetchTodos(); }, []);
  return (
    <div style={{ background: '#23272f', borderRadius: 12, padding: 24, maxWidth: 480, margin: '0 auto', color: '#eaeaea' }}>
      <form
        onSubmit={async e => {
          e.preventDefault();
          if (!text.trim()) return;
          await addTodo(text, due);
          setText('');
          setDue('');
        }}
        style={{ display: 'flex', gap: 8, marginBottom: 16 }}
      >
        <input value={text} onChange={e => setText(e.target.value)} placeholder="할 일 입력" style={{ flex: 1 }} />
        <input type="date" value={due} onChange={e => setDue(e.target.value)} />
        <button type="submit">추가</button>
      </form>
      {loading ? <div>로딩 중...</div> : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {todos.map(todo => (
            <li key={todo.id} style={{ display: 'flex', alignItems: 'center', padding: 4 }}>
              {editingId === todo.id ? (
                <>
                  <input value={editText} onChange={e => setEditText(e.target.value)} style={{ flex: 1 }} />
                  <input type="date" value={editDue} onChange={e => setEditDue(e.target.value)} />
                  <button onClick={async () => { await updateTodo(todo.id, { text: editText, dueDate: editDue }); setEditingId(null); }}>저장</button>
                  <button onClick={() => setEditingId(null)}>취소</button>
                </>
              ) : (
                <>
                  <input type="checkbox" checked={todo.completed} onChange={async () => await updateTodo(todo.id, { completed: !todo.completed })} />
                  <span style={{ flex: 1, textDecoration: todo.completed ? 'line-through' : undefined }}>{todo.text}</span>
                  <span style={{ color: '#ffe066', marginLeft: 8 }}>{todo.dueDate && `(마감: ${todo.dueDate})`}</span>
                  <button onClick={() => { setEditingId(todo.id); setEditText(todo.text); setEditDue(todo.dueDate || ''); }}>수정</button>
                  <button onClick={async () => await deleteTodo(todo.id)} style={{ color: '#ff6b6b' }}>삭제</button>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const realTodoAppDemoCode = `function RealTodoAppDemo() { ... } // 위와 동일}`;
const realTodoTestCode = `import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import RealTodoApp from '../RealTodoApp';

test('할 일 추가/수정/삭제/마감일', async () => {
  render(<RealTodoApp />);
  fireEvent.change(screen.getByPlaceholderText('할 일 입력'), { target: { value: '공부하기' } });
  fireEvent.click(screen.getByText('추가'));
  await waitFor(() => expect(screen.getByText('공부하기')).toBeInTheDocument());

  fireEvent.click(screen.getByText('수정'));
  fireEvent.change(screen.getByDisplayValue('공부하기'), { target: { value: '운동하기' } });
  fireEvent.click(screen.getByText('저장'));
  await waitFor(() => expect(screen.getByText('운동하기')).toBeInTheDocument());

  fireEvent.click(screen.getByText('삭제'));
  await waitFor(() => expect(screen.queryByText('운동하기')).not.toBeInTheDocument());
});`;

export const TodoProjectExample = () => {
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '2.5em 1.5em', background: '#23272f', borderRadius: 20, color: '#eaeaea', boxShadow: '0 6px 32px #0003', fontFamily: 'Pretendard, Noto Sans KR, sans-serif' }}>
      <Typography variant="h3" sx={{ fontWeight: 900, color: '#8fd', mb: 3, textShadow: '0 2px 12px #0006' }}>ToDo 앱 실전 프로젝트</Typography>
      <Typography sx={{ fontSize: 20, color: '#ffe066', mb: 4 }}>
        요구사항 분석 → 타입 설계 → 상태관리 → UI/입력 → 기능 구현 → 테스트/배포<br />
        실제 서비스를 완성해가는 실전 프로젝트 흐름을 단계별로 익힙니다.
      </Typography>

      {/* 1. 요구사항 분석 & 데이터 모델링 */}
      <ExampleTab
        example={<MiniTypeDemo />}
        code={'// 요구사항 예시\n- 할 일 추가/삭제/완료\n- 필터(전체/완료/미완료)\n- 로컬 저장 또는 서버 연동'}
        desc="프로젝트의 요구사항을 명확히 정의하면, 타입 설계와 구현이 쉬워집니다."
      />

      {/* 2. 타입 설계 (TypeScript) */}
      <ExampleTab
        example={<MiniStateDemo />}
        code={'export type TodoItem = {\n  id: number;\n  text: string;\n  completed: boolean;\n};\n\ntype Filter = \'all\' | \'completed\' | \'active\';'}
        desc="타입을 먼저 설계하면, 컴포넌트와 API 구현이 훨씬 안전해집니다."
      />

      {/* 3. 상태관리/비즈니스 로직 (useReducer) */}
      <ExampleTab
        example={<MiniInputDemo />}
        code={'function reducer(state, action) {\n  switch (action.type) {\n    case \'ADD\':\n      // ...\n    case \'TOGGLE\':\n      // ...\n    // ...\n  }\n}'}
        desc="상태관리 로직을 분리하면, 유지보수와 확장이 쉬워집니다."
      />

      {/* 4. UI/입력/컴포넌트 구조 */}
      <ExampleTab
        example={<MiniFilterDemo />}
        code={'// 전체 코드 예시는 아래를 참고하세요!'}
        desc="실제 동작하는 ToDo 앱 예제입니다. 입력, 필터, 토글, 삭제 등 모든 기능이 구현되어 있습니다."
      />

      {/* 5. 기능 구현: 입력/토글/삭제/필터 */}
      <ExampleTab
        example={<MiniListDemo />}
        code={'<TodoInput onAdd={...} />\n<TodoFilter filter={...} onChange={...} />\n<TodoList todos={...} onToggle={...} onDelete={...} />'}
        desc="컴포넌트 구조를 먼저 설계하면, 유지보수와 확장이 쉬워집니다."
      />

      {/* 6. 완성 예제: 전체 TodoApp */}
      <ExampleTab
        example={<RealTodoAppDemo />}
        code={realTodoAppDemoCode}
        desc="실제 동작하는 ToDo 앱 전체 예제입니다. 입력, 필터, 토글, 삭제 등 모든 기능이 구현되어 있습니다."
      />

      {/* 7. 테스트/배포/실전 팁 */}
      <ExampleTab
        example={<MiniTestDemo />}
        code={realTodoTestCode}
        desc="실전에서 자주 마주치는 문제와 팁을 함께 익히세요."
      />

      {/* 8. 추가된 기능: 수정, 마감일, API 연동 */}
      <ExampleTab
        example={<MiniEditDemo />}
        code={miniEditDemoCode}
        desc="수정 기능을 추가하면, 할 일을 수정할 수 있습니다."
      />

      <ExampleTab
        example={<MiniDueDateDemo />}
        code={miniDueDateDemoCode}
        desc="마감일을 추가하면, 할 일의 마감일을 설정할 수 있습니다."
      />

      <ExampleTab
        example={<MiniApiDemo />}
        code={miniApiDemoCode}
        desc="서버와의 연동을 추가하면, 할 일을 서버에서 불러올 수 있습니다."
      />
    </div>
  );
};

export default TodoProjectExample; 