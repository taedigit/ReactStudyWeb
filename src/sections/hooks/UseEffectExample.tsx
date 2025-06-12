import React, { useState, useEffect } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { ExampleSection } from '../../components/ExampleSection';

const descriptions = {
  basicEffect: `• useEffect 기본 개념
  - 부수 효과(Side Effect) 처리
  - 컴포넌트 생명주기와 연동
  - 비동기 작업 처리에 적합

• 실행 시점
  - 컴포넌트 마운트 후
  - 의존성 배열 값 변경 시
  - 컴포넌트 언마운트 전(클린업)

• 기본 구조
  useEffect(() => {
    // 실행할 효과
    return () => {
      // 클린업 함수
    };
  }, [의존성배열]);`,

  dependencies: `• 의존성 배열 활용
  - 빈 배열: 마운트/언마운트 시에만 실행
  - 특정 값: 해당 값 변경 시 실행
  - 배열 생략: 매 렌더링마다 실행

• 의존성 최적화
  - 필요한 값만 포함
  - 객체/함수는 useCallback/useMemo 활용
  - 불필요한 재실행 방지

• 주의사항
  - 무한 루프 방지
  - 누락된 의존성 주의
  - 불필요한 의존성 제거`,

  cleanup: `• 클린업 함수 역할
  - 메모리 누수 방지
  - 구독 해제
  - 타이머 정리
  - 네트워크 요청 취소

• 실행 시점
  1. 다음 효과 실행 전
  2. 컴포넌트 언마운트 시

• 주요 사용 사례
  - 이벤트 리스너 제거
  - WebSocket 연결 해제
  - setInterval 정리
  - API 요청 취소`,

  asyncEffect: `• 비동기 작업 처리
  - API 호출
  - 데이터 페칭
  - 파일 처리
  - 타이머 설정

• 구현 패턴
  1. IIFE 패턴
     - 즉시 실행 비동기 함수
     - 클린업 처리 용이
  2. 별도 함수 선언
     - 코드 가독성 향상
     - 재사용성 증가

• 에러 처리
  - try-catch 블록 사용
  - 상태 업데이트
  - 사용자 피드백`,

  multipleEffects: `• 여러 효과 분리
  - 관심사 분리 원칙
  - 독립적인 기능별 구분
  - 유지보수성 향상

• 분리 기준
  1. 데이터 종류별
  2. 기능 단위별
  3. 실행 조건별

• 장점
  - 코드 가독성 향상
  - 디버깅 용이
  - 재사용성 증가
  - 테스트 용이`
};

const basicEffectCode = `const BasicEffectDemo: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`Count: \${count}\`;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(prev => prev + 1)}>
        Increment
      </button>
    </div>
  );
};`;

const dependenciesCode = `const DependenciesDemo: React.FC = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    console.log(\`Profile updated - Name: \${name}, Age: \${age}\`);
  }, [name, age]);

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        value={age}
        onChange={(e) => setAge(e.target.value)}
        type="number"
        placeholder="Age"
      />
    </div>
  );
};`;

const cleanupCode = `const CleanupDemo: React.FC = () => {
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
};`;

const asyncEffectCode = `const AsyncEffectDemo: React.FC = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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
};`;

const multipleEffectsCode = `const MultipleEffectsDemo: React.FC = () => {
  const [count, setCount] = useState(0);
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    document.title = \`Count: \${count}\`;
  }, [count]);

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(prev => prev + 1)}>
        Increment
      </button>
      <p>Window Size: {size.width} x {size.height}</p>
    </div>
  );
};`;

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
      <TextField
        value={name}
        onChange={(e) => setName(e.target.value)}
        label="Name"
        variant="outlined"
        size="small"
        sx={{ mr: 2 }}
      />
      <TextField
        value={age}
        onChange={(e) => setAge(e.target.value)}
        label="Age"
        type="number"
        variant="outlined"
        size="small"
      />
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

const UseEffectExample: React.FC = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        useEffect Examples
      </Typography>
      <ExampleSection
        title="Basic Effect"
        description="Demonstrates basic usage of useEffect with a counter."
        example={<BasicEffectDemo />}
        code={basicEffectCode}
        tooltip={descriptions.basicEffect}
      />
      <ExampleSection
        title="Dependencies"
        description="Shows how dependencies affect effect execution."
        example={<DependenciesDemo />}
        code={dependenciesCode}
        tooltip={descriptions.dependencies}
      />
      <ExampleSection
        title="Cleanup"
        description="Demonstrates cleanup function in useEffect."
        example={<CleanupDemo />}
        code={cleanupCode}
        tooltip={descriptions.cleanup}
      />
      <ExampleSection
        title="Async Effect"
        description="Shows how to handle async operations in useEffect."
        example={<AsyncEffectDemo />}
        code={asyncEffectCode}
        tooltip={descriptions.asyncEffect}
      />
      <ExampleSection
        title="Multiple Effects"
        description="Demonstrates using multiple effects in a component."
        example={<MultipleEffectsDemo />}
        code={multipleEffectsCode}
        tooltip={descriptions.multipleEffects}
      />
    </div>
  );
};

export default UseEffectExample; 