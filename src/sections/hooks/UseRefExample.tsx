import React, { useRef, useEffect, useState, forwardRef } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { ExampleSection } from '../../components/ExampleSection';

const descriptions = {
  domRef: `• DOM 요소 참조
  - 직접적인 DOM 조작 가능
  - focus(), scroll(), 크기/위치 측정
  - 애니메이션 제어

• 사용 방법
  1. ref 생성
     - const elementRef = useRef(null);
  2. 요소에 연결
     - <div ref={elementRef}>
  3. 접근
     - elementRef.current.focus();

• 주요 활용 사례
  - 입력 필드 포커스
  - 스크롤 위치 제어
  - 캔버스 조작
  - 미디어 요소 제어`,

  mutableRef: `변경 가능한 값 저장:
- 리렌더링 없이 값을 변경할 수 있음
- 컴포넌트 생명주기 동안 유지되는 값
- state와 달리 변경해도 리렌더링되지 않음
- 주로 이전 값 추적이나 타이머 ID 저장에 사용`,

  prevValue: `이전 값 추적하기:
- useEffect와 함께 사용하여 이전 상태 값 저장
- 현재 값과 이전 값 비교 가능
- 값이 변경될 때마다 이전 값 업데이트
- 애니메이션이나 값 변화 감지에 유용`,

  timerRef: `타이머 관리:
- setInterval/setTimeout ID 저장
- 컴포넌트 언마운트 시 타이머 정리
- 메모리 누수 방지
- 안전한 타이머 시작/중지 처리`,

  forwardRef: `DOM 요소 참조 전달:
- 부모 컴포넌트에서 자식 DOM 요소 접근
- 커스텀 컴포넌트에서 ref 전달
- focus(), scroll() 등 DOM 메서드 호출
- 명령형 프로그래밍이 필요한 경우 활용`
}; 

// Demo Components
const DomRefDemo: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <TextField inputRef={inputRef} label="Focus me" variant="outlined" size="small" />
      <Button onClick={focusInput} variant="contained" sx={{ ml: 2 }}>
        Focus Input
      </Button>
    </div>
  );
};

const MutableRefDemo: React.FC = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const handleClick = () => {
    countRef.current += 1;
    setCount(prev => prev + 1);
  };

  return (
    <div>
      <p>State Count: {count}</p>
      <p>Ref Count: {countRef.current}</p>
      <Button onClick={handleClick} variant="contained">
        Increment Both
      </Button>
    </div>
  );
};

const PrevValueDemo: React.FC = () => {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(0);

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return (
    <div>
      <p>Current Count: {count}</p>
      <p>Previous Count: {prevCountRef.current}</p>
      <Button onClick={() => setCount(prev => prev + 1)} variant="contained">
        Increment
      </Button>
    </div>
  );
};

const TimerRefDemo: React.FC = () => {
  const [count, setCount] = useState(0);
  const timerRef = useRef<number | null>(null);

  const startTimer = () => {
    if (timerRef.current) return;
    timerRef.current = window.setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        window.clearInterval(timerRef.current);
      }
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={startTimer} variant="contained" sx={{ mr: 2 }}>
        Start Timer
      </Button>
      <Button onClick={stopTimer} variant="contained" color="error">
        Stop Timer
      </Button>
    </div>
  );
};

const CustomInput = forwardRef<HTMLInputElement>((props, ref) => (
  <TextField inputRef={ref} label="Forwarded Input" variant="outlined" size="small" {...props} />
));

const ForwardRefDemo: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <CustomInput ref={inputRef} />
      <Button onClick={focusInput} variant="contained" sx={{ ml: 2 }}>
        Focus Input
      </Button>
    </div>
  );
};

// Code Strings
const domRefCode = `const DomRefDemo: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>
        Focus Input
      </button>
    </div>
  );
};`;

const mutableRefCode = `const MutableRefDemo: React.FC = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const handleClick = () => {
    countRef.current += 1;
    setCount(prev => prev + 1);
  };

  return (
    <div>
      <p>State Count: {count}</p>
      <p>Ref Count: {countRef.current}</p>
      <button onClick={handleClick}>
        Increment Both
      </button>
    </div>
  );
};`;

const prevValueCode = `const PrevValueDemo: React.FC = () => {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(0);

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return (
    <div>
      <p>Current Count: {count}</p>
      <p>Previous Count: {prevCountRef.current}</p>
      <button onClick={() => setCount(prev => prev + 1)}>
        Increment
      </button>
    </div>
  );
};`;

const timerRefCode = `const TimerRefDemo: React.FC = () => {
  const [count, setCount] = useState(0);
  const timerRef = useRef<number | null>(null);

  const startTimer = () => {
    if (timerRef.current) return;
    timerRef.current = window.setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        window.clearInterval(timerRef.current);
      }
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={stopTimer}>Stop Timer</button>
    </div>
  );
};`;

const forwardRefCode = `const CustomInput = forwardRef<HTMLInputElement>((props, ref) => (
  <input ref={ref} {...props} />
));

const ForwardRefDemo: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <CustomInput ref={inputRef} />
      <button onClick={focusInput}>
        Focus Input
      </button>
    </div>
  );
};`;

const UseRefExample: React.FC = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        useRef Examples
      </Typography>
      <ExampleSection
        title="DOM Reference"
        description="Demonstrates using useRef to access DOM elements."
        example={<DomRefDemo />}
        code={domRefCode}
        tooltip={descriptions.domRef}
      />
      <ExampleSection
        title="Mutable Reference"
        description="Shows how to store mutable values with useRef."
        example={<MutableRefDemo />}
        code={mutableRefCode}
        tooltip={descriptions.mutableRef}
      />
      <ExampleSection
        title="Previous Value"
        description="Demonstrates tracking previous state value."
        example={<PrevValueDemo />}
        code={prevValueCode}
        tooltip={descriptions.prevValue}
      />
      <ExampleSection
        title="Timer Reference"
        description="Shows timer management with useRef."
        example={<TimerRefDemo />}
        code={timerRefCode}
        tooltip={descriptions.timerRef}
      />
      <ExampleSection
        title="Forward Ref"
        description="Demonstrates ref forwarding in custom components."
        example={<ForwardRefDemo />}
        code={forwardRefCode}
        tooltip={descriptions.forwardRef}
      />
    </div>
  );
};

export default UseRefExample; 