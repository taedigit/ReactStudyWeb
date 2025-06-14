import React, { useState, useContext, createContext, useReducer } from 'react';
import { Button, TextField, Switch, Typography } from '@mui/material';
import { ExampleTab } from '../../components/ExampleTab';

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

export const UseContextExample = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        useContext 단계별 예제
      </Typography>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>1. 기본 Context (Basic Context)</Typography>
        <ExampleTab
          example={<BasicContextDemo />}
          code={basicContextCode}
          desc={`Context API의 기본 사용법을 보여줍니다.
- 전역 상태(여기서는 count)를 여러 컴포넌트에서 쉽게 공유할 수 있습니다.
- createContext로 Context를 만들고, Provider로 값을 하위 트리에 전달합니다.
- useContext로 Context 값을 읽어옵니다.
- props drilling(깊은 props 전달) 없이 상태를 공유할 수 있어, 규모가 커질수록 유용합니다.
- 단, Context 값이 바뀌면 해당 값을 구독하는 모든 컴포넌트가 리렌더링되므로, 너무 자주 바뀌는 값은 Context로 관리하지 않는 것이 좋습니다.`}
        />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>2. 테마 Context (Theme Context)</Typography>
        <ExampleTab
          example={<ThemeContextDemo />}
          code={themeContextCode}
          desc={`다크/라이트 모드 등 앱의 테마를 전역에서 관리하는 패턴입니다.
- 테마 상태와 테마 전환 함수를 Context로 제공해, 트리 어디서든 테마를 바꿀 수 있습니다.
- 스타일 시스템, 디자인 시스템 구현에 필수적입니다.
- 실제 서비스에서는 localStorage, 시스템 설정 등과 연동해 초기 테마를 결정할 수 있습니다.
- 테마 변경 시 불필요한 리렌더링을 막으려면, Context 분리 또는 memoization이 필요할 수 있습니다.`}
        />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>3. 인증 Context (Auth Context)</Typography>
        <ExampleTab
          example={<AuthContextDemo />}
          code={authContextCode}
          desc={`로그인/로그아웃 등 인증 상태를 전역에서 관리하는 패턴입니다.
- 인증 여부, 로그인/로그아웃 함수, 사용자 정보 등을 Context로 제공합니다.
- 인증이 필요한 페이지, 컴포넌트에서 쉽게 인증 상태를 확인하고, 조건부 렌더링을 할 수 있습니다.
- 실제 서비스에서는 토큰 저장, 만료 처리, 사용자 정보 fetch 등과 결합해 사용합니다.
- 인증 Context는 앱의 핵심이므로, 보안과 성능에 신경 써야 합니다.`}
        />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>4. 중첩 Context (Nested Context)</Typography>
        <ExampleTab
          example={<NestedContextDemo />}
          code={nestedContextCode}
          desc={`여러 개의 Context를 중첩해서 사용하는 예제입니다.
- 관심사(예: 사용자 정보, 테마 등)를 분리해 각각의 Context로 관리하면, 코드의 유지보수성이 높아집니다.
- 필요한 Context만 구독할 수 있어, 불필요한 리렌더링을 줄일 수 있습니다.
- 실제로는 Provider가 중첩되는 구조가 많으므로, Context 구조를 잘 설계하는 것이 중요합니다.`}
        />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>5. Reducer와 Context 결합 (Reducer Context)</Typography>
        <ExampleTab
          example={<ReducerContextDemo />}
          code={reducerContextCode}
          desc={`복잡한 상태 로직(여기서는 Todo 리스트)을 Context와 useReducer로 함께 관리하는 패턴입니다.
- Context로 전역 상태와 dispatch 함수를 제공해, 트리 어디서든 액션을 발생시킬 수 있습니다.
- Redux와 유사한 구조로, 상태 변경 로직을 한 곳에 모아 관리할 수 있습니다.
- 대규모 앱에서 상태 관리 라이브러리 없이도 충분히 강력한 전역 상태 관리가 가능합니다.
- 상태가 복잡해질수록 reducer와 Context를 분리해 관리하는 것이 유지보수에 유리합니다.`}
        />
      </div>
    </div>
  );
}; 