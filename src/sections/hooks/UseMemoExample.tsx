import React, { useState, useMemo } from 'react';
import { Button, TextField, Typography } from '@mui/material';
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

const descriptions = {
  basicMemo: `useMemo의 기본 사용법을 보여줍니다.\n- 값의 메모이제이션으로 불필요한 재계산을 방지합니다.\n- 고비용 계산, 객체/배열 참조 유지 등에 활용합니다.`,
  expensiveCalc: `고비용 계산(예: 피보나치 수열 등)을 useMemo로 최적화할 수 있습니다.\n- 의존성 배열을 최소화해 성능을 극대화합니다.`,
  refEquality: `객체/배열의 참조 동등성을 유지해 자식 컴포넌트의 불필요한 리렌더링을 막을 수 있습니다.\n- useMemo로 객체/배열을 메모이제이션하면, props로 전달할 때 최적화 효과가 있습니다.`,
  contextMemo: `Context의 value를 useMemo로 감싸면, 불필요한 전파와 리렌더링을 줄일 수 있습니다.\n- 대규모 앱에서 Context 최적화에 필수적인 패턴입니다.`
};

// Demo Components
const BasicMemoDemo: React.FC = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const expensiveValue = useMemo(() => {
    console.log('Computing expensive value...');
    return count * 2;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Expensive Value: {expensiveValue}</p>
      <Button onClick={() => setCount(prev => prev + 1)} variant="contained" sx={{ mr: 2 }}>
        Increment Count
      </Button>
      <TextField
        value={text}
        onChange={(e) => setText(e.target.value)}
        label="Type here"
        variant="outlined"
        size="small"
      />
    </div>
  );
};

const ExpensiveCalcDemo: React.FC = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const fibonacci = useMemo(() => {
    console.log('Computing Fibonacci...');
    const fib = (n: number): number => {
      if (n <= 1) return n;
      return fib(n - 1) + fib(n - 2);
    };
    return fib(number);
  }, [number]);

  const theme = useMemo(() => ({
    backgroundColor: dark ? '#333' : '#FFF',
    color: dark ? '#FFF' : '#333',
    padding: '2rem',
    borderRadius: '4px',
  }), [dark]);

  return (
    <div style={theme}>
      <TextField
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
        label="Enter number"
        variant="outlined"
        size="small"
        sx={{ mr: 2 }}
      />
      <Button onClick={() => setDark(prev => !prev)} variant="contained">
        Toggle Theme
      </Button>
      <p>Fibonacci: {fibonacci}</p>
    </div>
  );
};

const RefEqualityDemo: React.FC = () => {
  const [count, setCount] = useState(0);
  const [items] = useState(['A', 'B', 'C']);

  const sortedItems = useMemo(() => {
    console.log('Sorting items...');
    return [...items].sort();
  }, [items]);

  const itemsStyle = useMemo(() => ({
    padding: '1rem',
    border: '1px solid #ccc',
    margin: '1rem 0',
  }), []);

  return (
    <div>
      <div style={itemsStyle}>
        <p>Sorted Items: {sortedItems.join(', ')}</p>
      </div>
      <p>Count: {count}</p>
      <Button onClick={() => setCount(prev => prev + 1)} variant="contained">
        Increment
      </Button>
    </div>
  );
};

const ContextMemoDemo: React.FC = () => {
  const [user, setUser] = useState({ name: 'John', age: 30 });
  const [theme, setTheme] = useState('light');

  const userContextValue = useMemo(() => ({
    user,
    updateUser: (name: string) => setUser(prev => ({ ...prev, name }))
  }), [user]);

  const themeContextValue = useMemo(() => ({
    theme,
    toggleTheme: () => setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }), [theme]);

  return (
    <div>
      <div style={{ marginBottom: '1rem' }}>
        <TextField
          value={user.name}
          onChange={(e) => userContextValue.updateUser(e.target.value)}
          label="User name"
          variant="outlined"
          size="small"
          sx={{ mr: 2 }}
        />
        <Button onClick={themeContextValue.toggleTheme} variant="contained">
          Toggle Theme ({themeContextValue.theme})
        </Button>
      </div>
      <p>User: {JSON.stringify(userContextValue.user)}</p>
    </div>
  );
};

// Code Strings
const basicMemoCode = `const BasicMemoDemo: React.FC = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const expensiveValue = useMemo(() => {
    console.log('Computing expensive value...');
    return count * 2;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Expensive Value: {expensiveValue}</p>
      <button onClick={() => setCount(prev => prev + 1)}>
        Increment Count
      </button>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type here"
      />
    </div>
  );
};`;

const expensiveCalcCode = `const ExpensiveCalcDemo: React.FC = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const fibonacci = useMemo(() => {
    console.log('Computing Fibonacci...');
    const fib = (n: number): number => {
      if (n <= 1) return n;
      return fib(n - 1) + fib(n - 2);
    };
    return fib(number);
  }, [number]);

  const theme = useMemo(() => ({
    backgroundColor: dark ? '#333' : '#FFF',
    color: dark ? '#FFF' : '#333',
    padding: '2rem',
  }), [dark]);

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
      />
      <button onClick={() => setDark(prev => !prev)}>
        Toggle Theme
      </button>
      <p>Fibonacci: {fibonacci}</p>
    </div>
  );
};`;

const refEqualityCode = `const RefEqualityDemo: React.FC = () => {
  const [count, setCount] = useState(0);
  const [items] = useState(['A', 'B', 'C']);

  const sortedItems = useMemo(() => {
    console.log('Sorting items...');
    return [...items].sort();
  }, [items]);

  const itemsStyle = useMemo(() => ({
    padding: '1rem',
    border: '1px solid #ccc',
    margin: '1rem 0',
  }), []);

  return (
    <div>
      <div style={itemsStyle}>
        <p>Sorted Items: {sortedItems.join(', ')}</p>
      </div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(prev => prev + 1)}>
        Increment
      </button>
    </div>
  );
};`;

const contextMemoCode = `const ContextMemoDemo: React.FC = () => {
  const [user, setUser] = useState({ name: 'John', age: 30 });
  const [theme, setTheme] = useState('light');

  const userContextValue = useMemo(() => ({
    user,
    updateUser: (name: string) => setUser(prev => ({ ...prev, name }))
  }), [user]);

  const themeContextValue = useMemo(() => ({
    theme,
    toggleTheme: () => setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }), [theme]);

  return (
    <div>
      <input
        value={user.name}
        onChange={(e) => userContextValue.updateUser(e.target.value)}
      />
      <button onClick={themeContextValue.toggleTheme}>
        Toggle Theme ({themeContextValue.theme})
      </button>
      <p>User: {JSON.stringify(userContextValue.user)}</p>
    </div>
  );
};`;

export const UseMemoExample = () => {
  return (
    <div>

      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>1. 기본 메모이제이션 (Basic Memoization)</Typography>
        <ExampleTab
          example={<BasicMemoDemo />}
          code={basicMemoCode}
          desc={descriptions.basicMemo}
        />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>2. 고비용 계산 최적화 (Expensive Calculation)</Typography>
        <ExampleTab
          example={<ExpensiveCalcDemo />}
          code={expensiveCalcCode}
          desc={descriptions.expensiveCalc}
        />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>3. 참조 동등성 유지 (Reference Equality)</Typography>
        <ExampleTab
          example={<RefEqualityDemo />}
          code={refEqualityCode}
          desc={descriptions.refEquality}
        />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>4. Context 최적화 (Context Integration)</Typography>
        <ExampleTab
          example={<ContextMemoDemo />}
          code={contextMemoCode}
          desc={descriptions.contextMemo}
        />
      </div>
    </div>
  );
}; 