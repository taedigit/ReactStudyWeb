import React, { useReducer, useState } from 'react';
import { Typography } from '@mui/material';
import { ExampleTab } from '../../components/ExampleTab';

// 1. 타입 설계
export type TodoItem = {
  id: number;
  text: string;
  completed: boolean;
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

// 4. 완성된 TodoApp (동일)
function TodoAppDemo() {
  // TodoInput, TodoFilter, TodoList를 이 함수 내부에서 정의
  function TodoInput({ onAdd }: { onAdd: (text: string) => void }) {
    const [text, setText] = useState('');
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!text.trim()) return;
          onAdd(text);
          setText('');
        }}
        style={{ display: 'flex', gap: 8, marginBottom: 16 }}
      >
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="할 일을 입력하세요"
          style={{ flex: 1, padding: 8, borderRadius: 6, border: '1px solid #444', background: '#181c20', color: '#eaeaea' }}
          autoFocus
        />
        <button type="submit" style={{ padding: '8px 18px', borderRadius: 6, background: '#8fd', color: '#23272f', fontWeight: 700, border: 'none' }}>추가</button>
      </form>
    );
  }
  function TodoList({ todos, onToggle, onDelete }: {
    todos: TodoItem[];
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
  }) {
    if (todos.length === 0) return <div style={{ color: '#aaa', margin: '1em 0' }}>할 일이 없습니다.</div>;
    return (
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map(todo => (
          <li key={todo.id} style={{ display: 'flex', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid #333' }}>
            <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} style={{ marginRight: 12 }} />
            <span style={{ flex: 1, textDecoration: todo.completed ? 'line-through' : undefined, color: todo.completed ? '#888' : '#fff' }}>{todo.text}</span>
            <button onClick={() => onDelete(todo.id)} style={{ background: 'none', border: 'none', color: '#ff6b6b', fontWeight: 700, cursor: 'pointer' }}>삭제</button>
          </li>
        ))}
      </ul>
    );
  }
  function TodoFilter({ filter, onChange }: { filter: Filter; onChange: (f: Filter) => void }) {
    return (
      <div style={{ display: 'flex', gap: 8, margin: '1em 0' }}>
        {(['all', 'active', 'completed'] as Filter[]).map(f => (
          <button
            key={f}
            onClick={() => onChange(f)}
            style={{
              padding: '6px 16px',
              borderRadius: 6,
              border: 'none',
              background: filter === f ? '#8fd' : '#23272f',
              color: filter === f ? '#23272f' : '#eaeaea',
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            {f === 'all' ? '전체' : f === 'active' ? '미완료' : '완료'}
          </button>
        ))}
      </div>
    );
  }
  const [state, dispatch] = useReducer(reducer, { todos: [], filter: 'all' });
  const filtered = state.todos.filter(todo =>
    state.filter === 'all' ? true : state.filter === 'completed' ? todo.completed : !todo.completed
  );
  return (
    <div style={{ background: '#23272f', borderRadius: 12, padding: 24, boxShadow: '0 2px 12px #0002', maxWidth: 480, margin: '0 auto' }}>
      <TodoInput onAdd={text => dispatch({ type: 'ADD', text })} />
      <TodoFilter filter={state.filter} onChange={f => dispatch({ type: 'SET_FILTER', filter: f })} />
      <TodoList todos={filtered} onToggle={id => dispatch({ type: 'TOGGLE', id })} onDelete={id => dispatch({ type: 'DELETE', id })} />
    </div>
  );
}

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
        example={<TodoAppDemo />}
        code={'// 전체 완성 코드 예시는 위 useReducer, TodoInput, TodoList, TodoFilter, TodoAppDemo를 참고하세요!'}
        desc="실제 동작하는 ToDo 앱 전체 예제입니다. 입력, 필터, 토글, 삭제 등 모든 기능이 구현되어 있습니다."
      />

      {/* 7. 테스트/배포/실전 팁 */}
      <ExampleTab
        example={<MiniTestDemo />}
        code={'import { render, screen, fireEvent } from "@testing-library/react";\nimport TodoApp from "../TodoApp";\n\ntest("할 일 추가", () => {\n  render(<TodoApp />);\n  fireEvent.change(screen.getByPlaceholderText("할 일을 입력하세요"), { target: { value: "공부하기" } });\n  fireEvent.click(screen.getByText("추가"));\n  expect(screen.getByText("공부하기")).toBeInTheDocument();\n});'}
        desc="실전에서 자주 마주치는 문제와 팁을 함께 익히세요."
      />
    </div>
  );
};

export default TodoProjectExample; 