import React, { useState, useEffect } from 'react';
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
  basicEffect: `useEffect의 기본 사용법을 보여줍니다.\n- 부수 효과(Side Effect) 처리에 사용합니다.\n- 컴포넌트가 마운트/업데이트/언마운트될 때 실행할 코드를 작성할 수 있습니다.\n- 의존성 배열을 통해 실행 시점을 제어합니다.`,
  dependencies: `의존성 배열을 활용해 특정 값이 변경될 때만 effect가 실행되도록 할 수 있습니다.\n- 배열이 비어 있으면 마운트/언마운트 시에만 실행됩니다.\n- 객체/함수 등은 useCallback/useMemo로 메모이제이션하여 불필요한 재실행을 방지할 수 있습니다.`,
  cleanup: `클린업 함수는 컴포넌트가 언마운트되거나, effect가 다시 실행되기 전에 호출됩니다.\n- 이벤트 리스너 해제, 타이머 정리, 네트워크 요청 취소 등에 사용합니다.`,
  asyncEffect: `비동기 작업(API 호출 등)은 effect 내부에서 처리할 수 있습니다.\n- IIFE 패턴이나 별도 함수 선언으로 async/await를 사용할 수 있습니다.\n- 에러 처리와 상태 업데이트에 주의해야 합니다.`,
  multipleEffects: `여러 개의 effect를 분리해서 사용할 수 있습니다.\n- 관심사별로 effect를 나누면 코드 가독성과 유지보수성이 좋아집니다.`
};

const BasicEffectDemo: React.FC = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);
  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={() => setCount(prev => prev + 1)} variant="contained">
        Increment
      </Button>
    </div>
  );
};

const DependenciesDemo: React.FC = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  useEffect(() => {
    console.log(`Profile updated - Name: ${name}, Age: ${age}`);
  }, [name, age]);
  return (
    <div>
      <TextField value={name} onChange={e => setName(e.target.value)} label="Name" variant="outlined" size="small" sx={{ mr: 2 }} />
      <TextField value={age} onChange={e => setAge(e.target.value)} label="Age" type="number" variant="outlined" size="small" />
    </div>
  );
};

const CleanupDemo: React.FC = () => {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);
  return (
    <div>
      <p>Network Status: {isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
};

const AsyncEffectDemo: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch('https://api.example.com/data');
        const json = await response.json();
        if (isMounted) {
          setData(json);
        }
      } catch (err) {
        if (isMounted) {
          setError('Failed to fetch data');
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };
    fetchData();
    return () => {
      isMounted = false;
    };
  }, []);
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data) return null;
  return <p>Data: {JSON.stringify(data)}</p>;
};

const MultipleEffectsDemo: React.FC = () => {
  const [count, setCount] = useState(0);
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);
  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={() => setCount(prev => prev + 1)} variant="contained" sx={{ mb: 2 }}>
        Increment
      </Button>
      <p>Window Size: {size.width} x {size.height}</p>
    </div>
  );
};

const basicEffectCode = `const BasicEffectDemo: React.FC = () => {\n  const [count, setCount] = useState(0);\n\n  useEffect(() => {\n    document.title = \`Count: \${count}\`;\n  }, [count]);\n\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(prev => prev + 1)}>\n        Increment\n      </button>\n    </div>\n  );\n};`;

const dependenciesCode = `const DependenciesDemo: React.FC = () => {\n  const [name, setName] = useState('');\n  const [age, setAge] = useState('');\n\n  useEffect(() => {\n    console.log(\`Profile updated - Name: \${name}, Age: \${age}\`);\n  }, [name, age]);\n\n  return (\n    <div>\n      <input\n        value={name}\n        onChange={(e) => setName(e.target.value)}\n        placeholder="Name"\n      />\n      <input\n        value={age}\n        onChange={(e) => setAge(e.target.value)}\n        type="number"\n        placeholder="Age"\n      />\n    </div>\n  );\n};`;

const cleanupCode = `const CleanupDemo: React.FC = () => {\n  const [isOnline, setIsOnline] = useState(true);\n\n  useEffect(() => {\n    const handleOnline = () => setIsOnline(true);\n    const handleOffline = () => setIsOnline(false);\n\n    window.addEventListener('online', handleOnline);\n    window.addEventListener('offline', handleOffline);\n\n    return () => {\n      window.removeEventListener('online', handleOnline);\n      window.removeEventListener('offline', handleOffline);\n    };\n  }, []);\n\n  return (\n    <div>\n      <p>Network Status: {isOnline ? 'Online' : 'Offline'}</p>\n    </div>\n  );\n};`;

const asyncEffectCode = `const AsyncEffectDemo: React.FC = () => {\n  const [data, setData] = useState(null);\n  const [isLoading, setIsLoading] = useState(false);\n  const [error, setError] = useState(null);\n\n  useEffect(() => {\n    let isMounted = true;\n\n    const fetchData = async () => {\n      setIsLoading(true);\n      setError(null);\n      try {\n        const response = await fetch('https://api.example.com/data');\n        const json = await response.json();\n        if (isMounted) {\n          setData(json);\n        }\n      } catch (err) {\n        if (isMounted) {\n          setError('Failed to fetch data');\n        }\n      } finally {\n        if (isMounted) {\n          setIsLoading(false);\n        }\n      }\n    };\n\n    fetchData();\n\n    return () => {\n      isMounted = false;\n    };\n  }, []);\n\n  if (isLoading) return <p>Loading...</p>;\n  if (error) return <p>Error: {error}</p>;\n  if (!data) return null;\n\n  return <p>Data: {JSON.stringify(data)}</p>;\n};`;

const multipleEffectsCode = `const MultipleEffectsDemo: React.FC = () => {\n  const [count, setCount] = useState(0);\n  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });\n\n  useEffect(() => {\n    document.title = \`Count: \${count}\`;\n  }, [count]);\n\n  useEffect(() => {\n    const handleResize = () => {\n      setSize({ width: window.innerWidth, height: window.innerHeight });\n    };\n\n    window.addEventListener('resize', handleResize);\n    return () => window.removeEventListener('resize', handleResize);\n  }, []);\n\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(prev => prev + 1)}>\n        Increment\n      </button>\n      <p>Window Size: {size.width} x {size.height}</p>\n    </div>\n  );\n};`;

export const UseEffectExample = () => {
  return (
    <div>

      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>1. 기본 Effect (Basic Effect)</Typography>
        <ExampleTab
          example={<BasicEffectDemo />}
          code={basicEffectCode}
          desc={descriptions.basicEffect}
        />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>2. 의존성 배열 (Dependencies)</Typography>
        <ExampleTab
          example={<DependenciesDemo />}
          code={dependenciesCode}
          desc={descriptions.dependencies}
        />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>3. 클린업 (Cleanup)</Typography>
        <ExampleTab
          example={<CleanupDemo />}
          code={cleanupCode}
          desc={descriptions.cleanup}
        />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>4. 비동기 Effect (Async Effect)</Typography>
        <ExampleTab
          example={<AsyncEffectDemo />}
          code={asyncEffectCode}
          desc={descriptions.asyncEffect}
        />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>5. 여러 Effect 분리 (Multiple Effects)</Typography>
        <ExampleTab
          example={<MultipleEffectsDemo />}
          code={multipleEffectsCode}
          desc={descriptions.multipleEffects}
        />
      </div>
    </div>
  );
}; 