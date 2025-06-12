import React, { useState, useContext, createContext, useReducer } from 'react';
import { Button, TextField, Switch, Typography } from '@mui/material';
import { ExampleSection } from '../../components/ExampleSection';

const descriptions = {
  basicContext: `Context API의 기본 사용법:
- createContext로 Context 생성
- Provider로 값 제공
- useContext로 값 사용
- 전역 상태 관리에 유용`,

  themeContext: `• 테마 관리
  - 다크/라이트 모드
  - 색상 테마
  - 스타일 시스템

• 구현 전략
  1. 테마 상태 관리
  2. 테마 전환 기능
  3. 스타일 동적 적용

• 최적화
  - 불필요한 리렌더링 방지
  - 테마 변경 성능
  - 스타일 계산 최적화`,

  authContext: `인증 상태 관리 예제:
- 로그인/로그아웃 상태 관리
- 사용자 정보 전역 공유
- 컴포넌트 트리 전체에서 인증 상태 접근
- 조건부 렌더링으로 인증 UI 처리`,

  nestedContext: `중첩된 Context 사용:
- 여러 Context 중첩 사용
- 테마와 사용자 정보 분리
- 관심사 분리로 유지보수성 향상
- Provider 조합으로 유연한 상태 관리`,

  reducerContext: `Context와 Reducer 결합:
- 복잡한 상태 로직 관리
- 상태 변경 액션 타입 정의
- dispatch로 상태 업데이트
- 상태 로직 중앙화`
};

// Demo Components
const CountContext = createContext<number>(0);
const CountUpdateContext = createContext<() => void>(() => {});

const CountProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(prev => prev + 1);

  return (
    <CountContext.Provider value={count}>
      <CountUpdateContext.Provider value={increment}>
        {children}
      </CountUpdateContext.Provider>
    </CountContext.Provider>
  );
};

const DisplayCount = () => {
  const count = useContext(CountContext);
  return <p>Count: {count}</p>;
};

const IncrementButton = () => {
  const increment = useContext(CountUpdateContext);
  return (
    <Button onClick={increment} variant="contained">
      Increment
    </Button>
  );
};

const BasicContextDemo: React.FC = () => {
  return (
    <CountProvider>
      <DisplayCount />
      <IncrementButton />
    </CountProvider>
  );
};

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {}
});

const ThemedComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const style = {
    padding: '1rem',
    backgroundColor: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#333' : '#fff',
    borderRadius: '4px',
  };

  return (
    <div style={style}>
      <Typography>Current Theme: {theme}</Typography>
      <Switch
        checked={theme === 'dark'}
        onChange={toggleTheme}
        color="primary"
      />
    </div>
  );
};

const ThemeContextDemo: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('light');
  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemedComponent />
    </ThemeContext.Provider>
  );
};

interface AuthContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  login: () => {},
  logout: () => {}
});

const LoginForm = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: '1rem' }}>
        <TextField
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          label="Username"
          variant="outlined"
          size="small"
          fullWidth
        />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <TextField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          type="password"
          variant="outlined"
          size="small"
          fullWidth
        />
      </div>
      <Button type="submit" variant="contained">
        Login
      </Button>
    </form>
  );
};

const UserProfile = () => {
  const { logout } = useContext(AuthContext);
  return (
    <div>
      <p>Welcome, User!</p>
      <Button onClick={logout} variant="contained" color="error">
        Logout
      </Button>
    </div>
  );
};

const AuthContextDemo: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (username: string, password: string) => {
    if (username && password) {
      setIsAuthenticated(true);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {isAuthenticated ? <UserProfile /> : <LoginForm />}
    </AuthContext.Provider>
  );
};

interface UserContext {
  name: string;
  role: string;
}

interface ThemeContext {
  isDark: boolean;
}

const UserContext = createContext<UserContext>({ name: '', role: '' });
const DarkThemeContext = createContext<ThemeContext>({ isDark: false });

const UserInfo = () => {
  const user = useContext(UserContext);
  const theme = useContext(DarkThemeContext);

  const style = {
    padding: '1rem',
    backgroundColor: theme.isDark ? '#333' : '#fff',
    color: theme.isDark ? '#fff' : '#333',
    borderRadius: '4px',
  };

  return (
    <div style={style}>
      <p>Name: {user.name}</p>
      <p>Role: {user.role}</p>
    </div>
  );
};

const NestedContextDemo: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <UserContext.Provider value={{ name: 'John Doe', role: 'Admin' }}>
      <DarkThemeContext.Provider value={{ isDark }}>
        <UserInfo />
        <Switch
          checked={isDark}
          onChange={() => setIsDark(prev => !prev)}
          color="primary"
        />
      </DarkThemeContext.Provider>
    </UserContext.Provider>
  );
};

type TodoState = {
  todos: { id: number; text: string; completed: boolean }[];
};

type TodoAction =
  | { type: 'ADD_TODO'; text: string }
  | { type: 'TOGGLE_TODO'; id: number }
  | { type: 'DELETE_TODO'; id: number };

const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todos: [
          ...state.todos,
          { id: Date.now(), text: action.text, completed: false }
        ]
      };
    case 'TOGGLE_TODO':
      return {
        todos: state.todos.map(todo =>
          todo.id === action.id
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    case 'DELETE_TODO':
      return {
        todos: state.todos.filter(todo => todo.id !== action.id)
      };
    default:
      return state;
  }
};

const TodoContext = createContext<{
  state: TodoState;
  dispatch: React.Dispatch<TodoAction>;
}>({
  state: { todos: [] },
  dispatch: () => {}
});

const TodoList = () => {
  const { state, dispatch } = useContext(TodoContext);
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
      <ul>
        {state.todos.map(todo => (
          <li key={todo.id} style={{ marginBottom: '0.5rem' }}>
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                marginRight: '1rem'
              }}
              onClick={() => dispatch({ type: 'TOGGLE_TODO', id: todo.id })}
            >
              {todo.text}
            </span>
            <Button
              onClick={() => dispatch({ type: 'DELETE_TODO', id: todo.id })}
              variant="outlined"
              color="error"
              size="small"
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ReducerContextDemo: React.FC = () => {
  const [state, dispatch] = useReducer(todoReducer, { todos: [] });

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <TodoList />
    </TodoContext.Provider>
  );
};

// Code Strings
const basicContextCode = `const CountContext = createContext<number>(0);
const CountUpdateContext = createContext<() => void>(() => {});

const CountProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(prev => prev + 1);

  return (
    <CountContext.Provider value={count}>
      <CountUpdateContext.Provider value={increment}>
        {children}
      </CountUpdateContext.Provider>
    </CountContext.Provider>
  );
};

const DisplayCount = () => {
  const count = useContext(CountContext);
  return <p>Count: {count}</p>;
};

const IncrementButton = () => {
  const increment = useContext(CountUpdateContext);
  return <button onClick={increment}>Increment</button>;
};

const BasicContextDemo: React.FC = () => {
  return (
    <CountProvider>
      <DisplayCount />
      <IncrementButton />
    </CountProvider>
  );
};`;

const themeContextCode = `type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {}
});

const ThemedComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const style = {
    padding: '1rem',
    backgroundColor: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#333' : '#fff',
  };

  return (
    <div style={style}>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

const ThemeContextDemo: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('light');
  const toggleTheme = () => setTheme(prev =>
    prev === 'light' ? 'dark' : 'light'
  );

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemedComponent />
    </ThemeContext.Provider>
  );
};`;

const authContextCode = `interface AuthContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  login: () => {},
  logout: () => {}
});

const LoginForm = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
};

const UserProfile = () => {
  const { logout } = useContext(AuthContext);
  return (
    <div>
      <p>Welcome, User!</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

const AuthContextDemo: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (username: string, password: string) => {
    if (username && password) {
      setIsAuthenticated(true);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {isAuthenticated ? <UserProfile /> : <LoginForm />}
    </AuthContext.Provider>
  );
};`;

const nestedContextCode = `interface UserContext {
  name: string;
  role: string;
}

interface ThemeContext {
  isDark: boolean;
}

const UserContext = createContext<UserContext>({ name: '', role: '' });
const DarkThemeContext = createContext<ThemeContext>({ isDark: false });

const UserInfo = () => {
  const user = useContext(UserContext);
  const theme = useContext(DarkThemeContext);

  const style = {
    padding: '1rem',
    backgroundColor: theme.isDark ? '#333' : '#fff',
    color: theme.isDark ? '#fff' : '#333',
  };

  return (
    <div style={style}>
      <p>Name: {user.name}</p>
      <p>Role: {user.role}</p>
    </div>
  );
};

const NestedContextDemo: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <UserContext.Provider value={{ name: 'John Doe', role: 'Admin' }}>
      <DarkThemeContext.Provider value={{ isDark }}>
        <UserInfo />
        <button onClick={() => setIsDark(prev => !prev)}>
          Toggle Theme
        </button>
      </DarkThemeContext.Provider>
    </UserContext.Provider>
  );
};`;

const reducerContextCode = `type TodoState = {
  todos: { id: number; text: string; completed: boolean }[];
};

type TodoAction =
  | { type: 'ADD_TODO'; text: string }
  | { type: 'TOGGLE_TODO'; id: number }
  | { type: 'DELETE_TODO'; id: number };

const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todos: [
          ...state.todos,
          { id: Date.now(), text: action.text, completed: false }
        ]
      };
    case 'TOGGLE_TODO':
      return {
        todos: state.todos.map(todo =>
          todo.id === action.id
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    case 'DELETE_TODO':
      return {
        todos: state.todos.filter(todo => todo.id !== action.id)
      };
    default:
      return state;
  }
};

const TodoContext = createContext<{
  state: TodoState;
  dispatch: React.Dispatch<TodoAction>;
}>({
  state: { todos: [] },
  dispatch: () => {}
});

const TodoList = () => {
  const { state, dispatch } = useContext(TodoContext);
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
        {state.todos.map(todo => (
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
};

const ReducerContextDemo: React.FC = () => {
  const [state, dispatch] = useReducer(todoReducer, { todos: [] });

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <TodoList />
    </TodoContext.Provider>
  );
};`;

export const UseContextExample = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        useContext Examples
      </Typography>
      <ExampleSection
        title="Basic Context"
        description="Shows basic usage of Context API with a counter."
        example={<BasicContextDemo />}
        code={basicContextCode}
        tooltip={descriptions.basicContext}
      />
      <ExampleSection
        title="Theme Context"
        description="Shows theme management with Context."
        example={<ThemeContextDemo />}
        code={themeContextCode}
        tooltip={descriptions.themeContext}
      />
      <ExampleSection
        title="Auth Context"
        description="Demonstrates using Context for authentication state."
        example={<AuthContextDemo />}
        code={authContextCode}
        tooltip={descriptions.authContext}
      />
      <ExampleSection
        title="Nested Context"
        description="Shows how to use multiple nested contexts."
        example={<NestedContextDemo />}
        code={nestedContextCode}
        tooltip={descriptions.nestedContext}
      />
      <ExampleSection
        title="Reducer Context"
        description="Demonstrates combining useContext with useReducer."
        example={<ReducerContextDemo />}
        code={reducerContextCode}
        tooltip={descriptions.reducerContext}
      />
    </div>
  );
}; 