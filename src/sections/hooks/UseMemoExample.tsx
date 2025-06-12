import React, { useState, useMemo } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { ExampleSection } from '../../components/ExampleSection';

const descriptions = {
  basicMemo: `• useMemo 기본 개념
  - 값의 메모이제이션
  - 고비용 계산 최적화
  - 불필요한 재계산 방지

• 기본 구조
  const memoizedValue = useMemo(
    () => computeExpensiveValue(a, b),
    [a, b]
  );

• 주요 사용 사례
  - 복잡한 계산
  - 객체 참조 유지
  - 렌더링 최적화`,

  expensiveCalc: `• 고비용 계산 최적화
  - 복잡한 수학 연산
  - 대규모 데이터 처리
  - 재귀적 계산

• 최적화 전략
  1. 계산 결과 캐싱
  2. 의존성 최소화
  3. 불필요한 재계산 방지

• 성능 개선 효과
  - CPU 사용량 감소
  - 렌더링 성능 향상
  - 반응성 개선`,

  refEquality: `• 참조 동등성 유지
  - 객체/배열 메모이제이션
  - 불필요한 재생성 방지
  - 자식 컴포넌트 최적화

• 주요 패턴
  1. 객체 메모이제이션
  2. 배열 메모이제이션
  3. 함수 메모이제이션

• 최적화 효과
  - 불필요한 리렌더링 방지
  - 메모리 사용 최적화
  - 성능 향상`,

  contextMemo: `• Context 최적화
  - Context 값 메모이제이션
  - Provider 최적화
  - Consumer 리렌더링 방지

• 구현 전략
  1. 값 안정화
  2. 불필요한 전파 방지
  3. 선택적 구독

• 성능 개선
  - Context 전파 최적화
  - 리렌더링 범위 제한
  - 애플리케이션 확장성`
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

const UseMemoExample: React.FC = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        useMemo Examples
      </Typography>
      <ExampleSection
        title="Basic Memoization"
        description="Demonstrates basic usage of useMemo with a counter."
        example={<BasicMemoDemo />}
        code={basicMemoCode}
        tooltip={descriptions.basicMemo}
      />
      <ExampleSection
        title="Expensive Calculation"
        description="Shows memoization of expensive calculations."
        example={<ExpensiveCalcDemo />}
        code={expensiveCalcCode}
        tooltip={descriptions.expensiveCalc}
      />
      <ExampleSection
        title="Reference Equality"
        description="Demonstrates maintaining object reference equality."
        example={<RefEqualityDemo />}
        code={refEqualityCode}
        tooltip={descriptions.refEquality}
      />
      <ExampleSection
        title="Context Integration"
        description="Shows useMemo with React Context."
        example={<ContextMemoDemo />}
        code={contextMemoCode}
        tooltip={descriptions.contextMemo}
      />
    </div>
  );
};

export default UseMemoExample; 