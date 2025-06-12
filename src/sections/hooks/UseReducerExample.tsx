import React, { useReducer, useState } from 'react';
import { Box, IconButton, Tooltip, Button, TextField, List, ListItem, ListItemText, ListItemSecondaryAction, Checkbox, Typography } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { ExampleTab } from '../../components/ExampleTab';
import { ExampleSection } from '../../components/ExampleSection';

const descriptions = {
  basicReducer: `• useReducer 기본 개념
  - 상태 관리 Hook
  - 액션 기반 상태 업데이트
  - Redux 스타일 패턴

• 기본 구조
  const [state, dispatch] = useReducer(
    reducer,
    initialState,
    init?
  );

• 주요 사용 사례
  - 복잡한 상태 로직
  - 다중 상태 관리
  - 상태 전이 관리`,

  todoReducer: `• Todo 앱 구현
  - CRUD 작업 관리
  - 상태 변화 추적
  - 액션 타입 관리

• 구현 패턴
  1. 액션 정의
  2. Reducer 로직
  3. 상태 업데이트

• 최적화
  - 불변성 유지
  - 성능 최적화
  - 상태 정규화`,

  formReducer: `• 폼 상태 관리
  - 입력 필드 관리
  - 유효성 검사
  - 제출 처리

• 구현 전략
  1. 필드 상태 관리
  2. 에러 처리
  3. 제출 로직

• 장점
  - 일관된 상태 관리
  - 복잡한 폼 처리
  - 재사용성`,

  asyncReducer: `• 비동기 작업 관리
  - 로딩 상태
  - 에러 처리
  - 데이터 페칭

• 구현 패턴
  1. 상태 정의
  2. 액션 처리
  3. 에러 핸들링

• 주의사항
  - 사이드 이펙트 관리
  - 상태 일관성
  - 메모리 누수 방지`,

  contextReducer: `• Context 통합
  - 전역 상태 관리
  - 상태 공유
  - 컴포넌트 통신

• 구현 전략
  1. Context 설정
  2. Reducer 통합
  3. Provider 구성

• 장점
  - 상태 중앙화
  - 로직 재사용
  - 유지보수성`,

  complexReducer: `• 복잡한 상태 관리
- 다중 리듀서 조합
- 상태 계층 구조
- Context API 통합

아키텍처 패턴:
- 리듀서 컴포지션
- 상태 분할
- 액션 크리에이터`
};

const tooltipStyle = {
  tooltip: {
    backgroundColor: '#2d2d2d',
    color: '#eaeaea',
    maxWidth: 'none',
    padding: '12px 16px',
    fontSize: '14px',
    border: '1px solid #444',
    '& .MuiTooltip-arrow': {
      color: '#2d2d2d'
    }
  }
};

const exampleBlockStyle = {
  background: '#484f54',
  padding: '1.5em 2em',
  borderRadius: '8px',
  border: '1px solid #eee',
  marginTop: '1.2em',
  marginBottom: '2em',
  marginLeft: '-2em',
  marginRight: '-2em',
};

// Demo Components
type CounterAction = 
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'RESET' };

const counterReducer = (state: number, action: CounterAction): number => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'RESET':
      return 0;
    default:
      return state;
  }
};

const BasicReducerDemo: React.FC = () => {
  const [count, dispatch] = useReducer(counterReducer, 0);

  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={() => dispatch({ type: 'INCREMENT' })} variant="contained" sx={{ mr: 2 }}>
        Increment
      </Button>
      <Button onClick={() => dispatch({ type: 'DECREMENT' })} variant="contained" sx={{ mr: 2 }}>
        Decrement
      </Button>
      <Button onClick={() => dispatch({ type: 'RESET' })} variant="contained">
        Reset
      </Button>
    </div>
  );
};

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type TodoAction =
  | { type: 'ADD_TODO'; text: string }
  | { type: 'TOGGLE_TODO'; id: number }
  | { type: 'DELETE_TODO'; id: number };

const todoReducer = (state: Todo[], action: TodoAction): Todo[] => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, {
        id: Date.now(),
        text: action.text,
        completed: false
      }];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
};

const TodoReducerDemo: React.FC = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch({ type: 'ADD_TODO', text });
    setText('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
        <TextField
          value={text}
          onChange={(e) => setText(e.target.value)}
          label="New Todo"
          variant="outlined"
          size="small"
          sx={{ mr: 2 }}
        />
        <Button type="submit" variant="contained">
          Add Todo
        </Button>
      </form>
      <List>
        {todos.map(todo => (
          <ListItem key={todo.id}>
            <ListItemText
              primary={todo.text}
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            />
            <ListItemSecondaryAction>
              <Checkbox
                edge="end"
                checked={todo.completed}
                onChange={() => dispatch({ type: 'TOGGLE_TODO', id: todo.id })}
              />
              <IconButton
                edge="end"
                onClick={() => dispatch({ type: 'DELETE_TODO', id: todo.id })}
              >
                🗑️
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

type FormState = {
  username: string;
  email: string;
  password: string;
  errors: {
    username?: string;
    email?: string;
    password?: string;
  };
};

type FormAction =
  | { type: 'SET_FIELD'; field: keyof FormState; value: string }
  | { type: 'SET_ERROR'; field: keyof FormState['errors']; error: string }
  | { type: 'CLEAR_ERRORS' }
  | { type: 'RESET_FORM' };

const formReducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.field]: action.value };
    case 'SET_ERROR':
      return {
        ...state,
        errors: { ...state.errors, [action.field]: action.error }
      };
    case 'CLEAR_ERRORS':
      return { ...state, errors: {} };
    case 'RESET_FORM':
      return initialFormState;
    default:
      return state;
  }
};

const initialFormState: FormState = {
  username: '',
  email: '',
  password: '',
  errors: {}
};

const FormReducerDemo: React.FC = () => {
  const [state, dispatch] = useReducer(formReducer, initialFormState);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: 'CLEAR_ERRORS' });

    if (!state.username) {
      dispatch({
        type: 'SET_ERROR',
        field: 'username',
        error: 'Username is required'
      });
    }
    if (!state.email) {
      dispatch({
        type: 'SET_ERROR',
        field: 'email',
        error: 'Email is required'
      });
    }
    if (!state.password) {
      dispatch({
        type: 'SET_ERROR',
        field: 'password',
        error: 'Password is required'
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: '1rem' }}>
        <TextField
          value={state.username}
          onChange={(e) => dispatch({
            type: 'SET_FIELD',
            field: 'username',
            value: e.target.value
          })}
          label="Username"
          error={!!state.errors.username}
          helperText={state.errors.username}
          variant="outlined"
          size="small"
          fullWidth
        />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <TextField
          value={state.email}
          onChange={(e) => dispatch({
            type: 'SET_FIELD',
            field: 'email',
            value: e.target.value
          })}
          label="Email"
          error={!!state.errors.email}
          helperText={state.errors.email}
          variant="outlined"
          size="small"
          fullWidth
        />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <TextField
          value={state.password}
          onChange={(e) => dispatch({
            type: 'SET_FIELD',
            field: 'password',
            value: e.target.value
          })}
          label="Password"
          type="password"
          error={!!state.errors.password}
          helperText={state.errors.password}
          variant="outlined"
          size="small"
          fullWidth
        />
      </div>
      <Button type="submit" variant="contained" sx={{ mr: 2 }}>
        Submit
      </Button>
      <Button
        onClick={() => dispatch({ type: 'RESET_FORM' })}
        variant="outlined"
      >
        Reset
      </Button>
    </form>
  );
};

type AsyncState<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};

type AsyncAction<T> =
  | { type: 'FETCH_START' }
  | { type: 'FETCH_SUCCESS'; payload: T }
  | { type: 'FETCH_ERROR'; error: string };

const asyncReducer = <T,>(state: AsyncState<T>, action: AsyncAction<T>): AsyncState<T> => {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return { data: action.payload, loading: false, error: null };
    case 'FETCH_ERROR':
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

const AsyncReducerDemo: React.FC = () => {
  const [state, dispatch] = useReducer(asyncReducer<{ id: number; title: string }>, {
    data: null,
    loading: false,
    error: null
  });

  const fetchData = async () => {
    dispatch({ type: 'FETCH_START' });
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const data = await response.json();
      dispatch({ type: 'FETCH_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_ERROR', error: 'Failed to fetch data' });
    }
  };

  return (
    <div>
      <Button onClick={fetchData} variant="contained" disabled={state.loading}>
        {state.loading ? 'Loading...' : 'Fetch Data'}
      </Button>
      {state.error && <p style={{ color: 'red' }}>{state.error}</p>}
      {state.data && (
        <div style={{ marginTop: '1rem' }}>
          <p>ID: {state.data.id}</p>
          <p>Title: {state.data.title}</p>
        </div>
      )}
    </div>
  );
};

type ComplexState = {
  todos: Todo[];
  filter: 'all' | 'active' | 'completed';
  search: string;
};

type ComplexAction =
  | { type: 'ADD_TODO'; text: string }
  | { type: 'TOGGLE_TODO'; id: number }
  | { type: 'DELETE_TODO'; id: number }
  | { type: 'SET_FILTER'; filter: ComplexState['filter'] }
  | { type: 'SET_SEARCH'; search: string };

const complexReducer = (state: ComplexState, action: ComplexAction): ComplexState => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, { id: Date.now(), text: action.text, completed: false }]
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        )
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      };
    case 'SET_FILTER':
      return { ...state, filter: action.filter };
    case 'SET_SEARCH':
      return { ...state, search: action.search };
    default:
      return state;
  }
};

const ComplexReducerDemo: React.FC = () => {
  const [state, dispatch] = useReducer(complexReducer, {
    todos: [],
    filter: 'all',
    search: ''
  });

  const [newTodo, setNewTodo] = useState('');

  const filteredTodos = state.todos
    .filter(todo => {
      switch (state.filter) {
        case 'active':
          return !todo.completed;
        case 'completed':
          return todo.completed;
        default:
          return true;
      }
    })
    .filter(todo =>
      todo.text.toLowerCase().includes(state.search.toLowerCase())
    );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    dispatch({ type: 'ADD_TODO', text: newTodo });
    setNewTodo('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
        <TextField
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          label="New Todo"
          variant="outlined"
          size="small"
          sx={{ mr: 2 }}
        />
        <Button type="submit" variant="contained">
          Add Todo
        </Button>
      </form>

      <div style={{ marginBottom: '1rem' }}>
        <TextField
          value={state.search}
          onChange={(e) => dispatch({ type: 'SET_SEARCH', search: e.target.value })}
          label="Search"
          variant="outlined"
          size="small"
          sx={{ mr: 2 }}
        />
        <Button
          onClick={() => dispatch({ type: 'SET_FILTER', filter: 'all' })}
          variant={state.filter === 'all' ? 'contained' : 'outlined'}
          sx={{ mr: 1 }}
        >
          All
        </Button>
        <Button
          onClick={() => dispatch({ type: 'SET_FILTER', filter: 'active' })}
          variant={state.filter === 'active' ? 'contained' : 'outlined'}
          sx={{ mr: 1 }}
        >
          Active
        </Button>
        <Button
          onClick={() => dispatch({ type: 'SET_FILTER', filter: 'completed' })}
          variant={state.filter === 'completed' ? 'contained' : 'outlined'}
        >
          Completed
        </Button>
      </div>

      <List>
        {filteredTodos.map(todo => (
          <ListItem key={todo.id}>
            <ListItemText
              primary={todo.text}
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            />
            <ListItemSecondaryAction>
              <Checkbox
                edge="end"
                checked={todo.completed}
                onChange={() => dispatch({ type: 'TOGGLE_TODO', id: todo.id })}
              />
              <IconButton
                edge="end"
                onClick={() => dispatch({ type: 'DELETE_TODO', id: todo.id })}
              >
                🗑️
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

// Code Strings
const basicReducerCode = `type CounterAction = 
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'RESET' };

const counterReducer = (state: number, action: CounterAction): number => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'RESET':
      return 0;
    default:
      return state;
  }
};

const BasicReducerDemo: React.FC = () => {
  const [count, dispatch] = useReducer(counterReducer, 0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: 'RESET' })}>
        Reset
      </button>
    </div>
  );
};`;

const todoReducerCode = `type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type TodoAction =
  | { type: 'ADD_TODO'; text: string }
  | { type: 'TOGGLE_TODO'; id: number }
  | { type: 'DELETE_TODO'; id: number };

const todoReducer = (state: Todo[], action: TodoAction): Todo[] => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, {
        id: Date.now(),
        text: action.text,
        completed: false
      }];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
};

const TodoReducerDemo: React.FC = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch({ type: 'ADD_TODO', text });
    setText('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="New Todo"
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none'
              }}
              onClick={() => dispatch({ type: 'TOGGLE_TODO', id: todo.id })}
            >
              {todo.text}
            </span>
            <button
              onClick={() => dispatch({ type: 'DELETE_TODO', id: todo.id })}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};`;

const formReducerCode = `type FormState = {
  username: string;
  email: string;
  password: string;
  errors: {
    username?: string;
    email?: string;
    password?: string;
  };
};

type FormAction =
  | { type: 'SET_FIELD'; field: keyof FormState; value: string }
  | { type: 'SET_ERROR'; field: keyof FormState['errors']; error: string }
  | { type: 'CLEAR_ERRORS' }
  | { type: 'RESET_FORM' };

const formReducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.field]: action.value };
    case 'SET_ERROR':
      return {
        ...state,
        errors: { ...state.errors, [action.field]: action.error }
      };
    case 'CLEAR_ERRORS':
      return { ...state, errors: {} };
    case 'RESET_FORM':
      return initialFormState;
    default:
      return state;
  }
};

const FormReducerDemo: React.FC = () => {
  const [state, dispatch] = useReducer(formReducer, {
    username: '',
    email: '',
    password: '',
    errors: {}
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: 'CLEAR_ERRORS' });

    if (!state.username) {
      dispatch({
        type: 'SET_ERROR',
        field: 'username',
        error: 'Username is required'
      });
    }
    // ... similar validation for email and password
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={state.username}
        onChange={(e) => dispatch({
          type: 'SET_FIELD',
          field: 'username',
          value: e.target.value
        })}
        placeholder="Username"
      />
      {state.errors.username && <span>{state.errors.username}</span>}
      {/* ... similar fields for email and password */}
      <button type="submit">Submit</button>
      <button onClick={() => dispatch({ type: 'RESET_FORM' })}>
        Reset
      </button>
    </form>
  );
};`;

const asyncReducerCode = `type AsyncState<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
};

type AsyncAction<T> =
  | { type: 'FETCH_START' }
  | { type: 'FETCH_SUCCESS'; payload: T }
  | { type: 'FETCH_ERROR'; error: string };

const asyncReducer = <T,>(state: AsyncState<T>, action: AsyncAction<T>): AsyncState<T> => {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return { data: action.payload, loading: false, error: null };
    case 'FETCH_ERROR':
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

const AsyncReducerDemo: React.FC = () => {
  const [state, dispatch] = useReducer(asyncReducer, {
    data: null,
    loading: false,
    error: null
  });

  const fetchData = async () => {
    dispatch({ type: 'FETCH_START' });
    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      dispatch({ type: 'FETCH_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_ERROR', error: 'Failed to fetch data' });
    }
  };

  return (
    <div>
      <button onClick={fetchData} disabled={state.loading}>
        {state.loading ? 'Loading...' : 'Fetch Data'}
      </button>
      {state.error && <p>{state.error}</p>}
      {state.data && <pre>{JSON.stringify(state.data, null, 2)}</pre>}
    </div>
  );
};`;

const complexReducerCode = `type ComplexState = {
  todos: Todo[];
  filter: 'all' | 'active' | 'completed';
  search: string;
};

type ComplexAction =
  | { type: 'ADD_TODO'; text: string }
  | { type: 'TOGGLE_TODO'; id: number }
  | { type: 'DELETE_TODO'; id: number }
  | { type: 'SET_FILTER'; filter: ComplexState['filter'] }
  | { type: 'SET_SEARCH'; search: string };

const complexReducer = (state: ComplexState, action: ComplexAction): ComplexState => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, { id: Date.now(), text: action.text, completed: false }]
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        )
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      };
    case 'SET_FILTER':
      return { ...state, filter: action.filter };
    case 'SET_SEARCH':
      return { ...state, search: action.search };
    default:
      return state;
  }
};

const ComplexReducerDemo: React.FC = () => {
  const [state, dispatch] = useReducer(complexReducer, {
    todos: [],
    filter: 'all',
    search: ''
  });

  const filteredTodos = state.todos
    .filter(todo => {
      switch (state.filter) {
        case 'active':
          return !todo.completed;
        case 'completed':
          return todo.completed;
        default:
          return true;
      }
    })
    .filter(todo =>
      todo.text.toLowerCase().includes(state.search.toLowerCase())
    );

  return (
    <div>
      <input
        value={state.search}
        onChange={(e) => dispatch({
          type: 'SET_SEARCH',
          search: e.target.value
        })}
        placeholder="Search todos"
      />
      <button onClick={() => dispatch({ type: 'SET_FILTER', filter: 'all' })}>
        All
      </button>
      <button onClick={() => dispatch({ type: 'SET_FILTER', filter: 'active' })}>
        Active
      </button>
      <button onClick={() => dispatch({ type: 'SET_FILTER', filter: 'completed' })}>
        Completed
      </button>
      {/* Todo list rendering */}
    </div>
  );
};`;

const UseReducerExample: React.FC = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        useReducer Examples
      </Typography>
      <ExampleSection
        title="Basic Reducer"
        description="Demonstrates basic usage of useReducer."
        example={<BasicReducerDemo />}
        code={basicReducerCode}
        tooltip={descriptions.basicReducer}
      />
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2, mt: 4 }}>
        <h4 style={{ margin: 0 }}>2. Todo 리듀서</h4>
        <Tooltip 
          title={<pre style={{ whiteSpace: 'pre-wrap', margin: 0, fontFamily: 'inherit' }}>{descriptions.todoReducer}</pre>}
          placement="right-start"
          arrow
          componentsProps={{
            tooltip: {
              sx: tooltipStyle.tooltip
            }
          }}
        >
          <IconButton size="small" sx={{ color: '#eaeaea', '&:hover': { color: '#b5e853' } }}>
            <InfoIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>
      <div style={exampleBlockStyle}>
        <ExampleTab
          example={<TodoReducerDemo />}
          code={todoReducerCode}
          showCaret={false}
          desc="Todo 앱의 상태를 관리하는 리듀서 예제입니다."
        />
      </div>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2, mt: 4 }}>
        <h4 style={{ margin: 0 }}>3. 폼 리듀서</h4>
        <Tooltip 
          title={<pre style={{ whiteSpace: 'pre-wrap', margin: 0, fontFamily: 'inherit' }}>{descriptions.formReducer}</pre>}
          placement="right-start"
          arrow
          componentsProps={{
            tooltip: {
              sx: tooltipStyle.tooltip
            }
          }}
        >
          <IconButton size="small" sx={{ color: '#eaeaea', '&:hover': { color: '#b5e853' } }}>
            <InfoIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>
      <div style={exampleBlockStyle}>
        <ExampleTab
          example={<FormReducerDemo />}
          code={formReducerCode}
          showCaret={false}
          desc="폼 상태를 관리하는 리듀서 예제입니다."
        />
      </div>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2, mt: 4 }}>
        <h4 style={{ margin: 0 }}>4. 비동기 리듀서</h4>
        <Tooltip 
          title={<pre style={{ whiteSpace: 'pre-wrap', margin: 0, fontFamily: 'inherit' }}>{descriptions.asyncReducer}</pre>}
          placement="right-start"
          arrow
          componentsProps={{
            tooltip: {
              sx: tooltipStyle.tooltip
            }
          }}
        >
          <IconButton size="small" sx={{ color: '#eaeaea', '&:hover': { color: '#b5e853' } }}>
            <InfoIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>
      <div style={exampleBlockStyle}>
        <ExampleTab
          example={<AsyncReducerDemo />}
          code={asyncReducerCode}
          showCaret={false}
          desc="비동기 작업을 처리하는 리듀서 예제입니다."
        />
      </div>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2, mt: 4 }}>
        <h4 style={{ margin: 0 }}>5. 복잡한 리듀서</h4>
        <Tooltip 
          title={<pre style={{ whiteSpace: 'pre-wrap', margin: 0, fontFamily: 'inherit' }}>{descriptions.complexReducer}</pre>}
          placement="right-start"
          arrow
          componentsProps={{
            tooltip: {
              sx: tooltipStyle.tooltip
            }
          }}
        >
          <IconButton size="small" sx={{ color: '#eaeaea', '&:hover': { color: '#b5e853' } }}>
            <InfoIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>
      <div style={exampleBlockStyle}>
        <ExampleTab
          example={<ComplexReducerDemo />}
          code={complexReducerCode}
          showCaret={false}
          desc="복잡한 상태를 관리하는 리듀서 예제입니다."
        />
      </div>
    </div>
  );
};

export default UseReducerExample; 