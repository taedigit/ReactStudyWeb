import { Button, TextField, Typography } from '@mui/material';
import { memo, useState, useCallback, useEffect } from 'react';
import { ExampleTab } from '../../components/ExampleTab';

/*const descriptions = {
  basicCallback: `useCallback은 메모이제이션된 콜백 함수를 반환합니다.
- 의존성 배열이 변경될 때만 새로운 함수를 생성
- 자식 컴포넌트에 전달되는 콜백 함수의 불필요한 재생성 방지
- React.memo와 함께 사용하면 더 효과적`,

  childProps: `자식 컴포넌트의 props로 전달되는 콜백 최적화:
- React.memo로 감싼 자식 컴포넌트에 콜백 전달
- useCallback으로 콜백 메모이제이션
- 부모 컴포넌트의 상태가 변경되어도 자식은 리렌더링되지 않음`,

  eventHandler: `이벤트 핸들러에서의 활용:
- 이벤트 리스너 등록/제거 시 안정적인 참조 유지
- useEffect의 의존성 배열에서 사용
- 불필요한 이벤트 리스너 재등록 방지`,

  effectDeps: `useEffect 의존성으로 사용:
- API 호출 함수를 useCallback으로 메모이제이션
- 무한 루프 방지
- 불필요한 API 호출 방지`,

  customHooks: `커스텀 훅에서의 활용:
- 훅이 반환하는 함수들을 메모이제이션
- 훅을 사용하는 컴포넌트의 성능 최적화
- 안정적인 함수 참조 제공`
};*/

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

// Demo Components
const BasicCallbackDemo: React.FC = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const handleIncrement = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  const handleTextChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={handleIncrement} variant="contained" sx={{ mr: 2 }}>
        Increment
      </Button>
      <TextField
        value={text}
        onChange={handleTextChange}
        label="Type here"
        variant="outlined"
        size="small"
      />
    </div>
  );
};

const ChildButton = memo(({ onClick, label }: { onClick: () => void; label: string }) => {
  console.log(`Rendering ${label}`);
  return (
    <Button onClick={onClick} variant="contained" sx={{ mr: 2 }}>
      {label}
    </Button>
  );
});

const ChildPropsDemo: React.FC = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleClick1 = useCallback(() => {
    setCount1(prev => prev + 1);
  }, []);

  const handleClick2 = useCallback(() => {
    setCount2(prev => prev + 1);
  }, []);

  return (
    <div>
      <div>
        <p>Count 1: {count1}</p>
        <ChildButton onClick={handleClick1} label="Increment Count 1" />
      </div>
      <div>
        <p>Count 2: {count2}</p>
        <ChildButton onClick={handleClick2} label="Increment Count 2" />
      </div>
    </div>
  );
};

const EventHandlersDemo: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isTracking, setIsTracking] = useState(false);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  }, []);

  const toggleTracking = useCallback(() => {
    setIsTracking(prev => !prev);
  }, []);

  useEffect(() => {
    if (isTracking) {
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [isTracking, handleMouseMove]);

  return (
    <div>
      <p>Mouse Position: {JSON.stringify(position)}</p>
      <Button onClick={toggleTracking} variant="contained">
        {isTracking ? 'Stop Tracking' : 'Start Tracking'}
      </Button>
    </div>
  );
};

const EffectDepsDemo: React.FC = () => {
  const [id, setId] = useState('');
  const [data, setData] = useState<any>(null);

  const fetchData = useCallback(async () => {
    if (!id) return;
    try {
      const response = await fetch(`https://api.example.com/data/${id}`);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <TextField
        value={id}
        onChange={(e) => setId(e.target.value)}
        label="Enter ID"
        variant="outlined"
        size="small"
        sx={{ mr: 2 }}
      />
      <Button onClick={fetchData} variant="contained">
        Fetch Data
      </Button>
      {data && <p>Data: {JSON.stringify(data)}</p>}
    </div>
  );
};

const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount(prev => prev - 1);
  }, []);

  const reset = useCallback(() => {
    setCount(initialValue);
  }, [initialValue]);

  return { count, increment, decrement, reset };
};

const CustomHooksDemo: React.FC = () => {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={increment} variant="contained" sx={{ mr: 2 }}>
        Increment
      </Button>
      <Button onClick={decrement} variant="contained" sx={{ mr: 2 }}>
        Decrement
      </Button>
      <Button onClick={reset} variant="contained">
        Reset
      </Button>
    </div>
  );
};

// Code Strings
const basicCallbackCode = `const BasicCallbackDemo: React.FC = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const handleIncrement = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  const handleTextChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>
        Increment
      </button>
      <input
        value={text}
        onChange={handleTextChange}
        placeholder="Type here"
      />
    </div>
  );
};`;

const childPropsCode = `const ChildButton = memo(({ onClick, label }) => {
  console.log(\`Rendering \${label}\`);
  return (
    <button onClick={onClick}>
      {label}
    </button>
  );
});

const ChildPropsDemo: React.FC = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleClick1 = useCallback(() => {
    setCount1(prev => prev + 1);
  }, []);

  const handleClick2 = useCallback(() => {
    setCount2(prev => prev + 1);
  }, []);

  return (
    <div>
      <div>
        <p>Count 1: {count1}</p>
        <ChildButton onClick={handleClick1} label="Increment Count 1" />
      </div>
      <div>
        <p>Count 2: {count2}</p>
        <ChildButton onClick={handleClick2} label="Increment Count 2" />
      </div>
    </div>
  );
};`;

const eventHandlersCode = `const EventHandlersDemo: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isTracking, setIsTracking] = useState(false);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  }, []);

  const toggleTracking = useCallback(() => {
    setIsTracking(prev => !prev);
  }, []);

  useEffect(() => {
    if (isTracking) {
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [isTracking, handleMouseMove]);

  return (
    <div>
      <p>Mouse Position: {JSON.stringify(position)}</p>
      <button onClick={toggleTracking}>
        {isTracking ? 'Stop Tracking' : 'Start Tracking'}
      </button>
    </div>
  );
};`;

const effectDepsCode = `const EffectDepsDemo: React.FC = () => {
  const [id, setId] = useState('');
  const [data, setData] = useState(null);

  const fetchData = useCallback(async () => {
    if (!id) return;
    try {
      const response = await fetch(\`https://api.example.com/data/\${id}\`);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <input
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Enter ID"
      />
      <button onClick={fetchData}>
        Fetch Data
      </button>
      {data && <p>Data: {JSON.stringify(data)}</p>}
    </div>
  );
};`;

const customHooksCode = `const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount(prev => prev - 1);
  }, []);

  const reset = useCallback(() => {
    setCount(initialValue);
  }, [initialValue]);

  return { count, increment, decrement, reset };
};

const CustomHooksDemo: React.FC = () => {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};`;

export const UseCallbackExample = () => {
  return (
    <div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>1. 기본 콜백 (Basic Callback)</Typography>
        <ExampleTab
          example={<BasicCallbackDemo />}
          code={basicCallbackCode}
          desc={`useCallback은 메모이제이션된 콜백 함수를 반환합니다.\n- 의존성 배열이 변경될 때만 새로운 함수를 생성\n- 자식 컴포넌트에 전달되는 콜백 함수의 불필요한 재생성 방지\n- React.memo와 함께 사용하면 더 효과적`}
        />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>2. 자식 컴포넌트 props 최적화 (Child Props)</Typography>
        <ExampleTab
          example={<ChildPropsDemo />}
          code={childPropsCode}
          desc={`자식 컴포넌트의 props로 전달되는 콜백 최적화:\n- React.memo로 감싼 자식 컴포넌트에 콜백 전달\n- useCallback으로 콜백 메모이제이션\n- 부모 컴포넌트의 상태가 변경되어도 자식은 리렌더링되지 않음`}
        />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>3. 이벤트 핸들러 (Event Handler)</Typography>
        <ExampleTab
          example={<EventHandlersDemo />}
          code={eventHandlersCode}
          desc={`이벤트 핸들러에서의 활용:\n- 이벤트 리스너 등록/제거 시 안정적인 참조 유지\n- useEffect의 의존성 배열에서 사용\n- 불필요한 이벤트 리스너 재등록 방지`}
        />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>4. useEffect 의존성 (Effect Dependencies)</Typography>
        <ExampleTab
          example={<EffectDepsDemo />}
          code={effectDepsCode}
          desc={`useEffect 의존성으로 사용:\n- API 호출 함수를 useCallback으로 메모이제이션\n- 무한 루프 방지\n- 불필요한 API 호출 방지`}
        />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>5. 커스텀 훅에서의 활용 (Custom Hooks)</Typography>
        <ExampleTab
          example={<CustomHooksDemo />}
          code={customHooksCode}
          desc={`커스텀 훅에서의 활용:\n- 훅이 반환하는 함수들을 메모이제이션\n- 훅을 사용하는 컴포넌트의 성능 최적화\n- 안정적인 함수 참조 제공`}
        />
      </div>
    </div>
  );
}; 