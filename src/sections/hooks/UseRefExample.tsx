import React, { useRef, useEffect, useState, forwardRef } from 'react';
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
  domRef: `DOM 요소 참조 및 직접 조작 예제입니다.\n- useRef로 input 등의 DOM에 직접 접근할 수 있습니다.\n- focus, scroll, 크기 측정 등 다양한 실무 활용이 가능합니다.`,
  mutableRef: `리렌더링 없이 값을 저장하는 용도로 useRef를 사용할 수 있습니다.\n- state와 달리 값이 바뀌어도 컴포넌트가 리렌더링되지 않습니다.\n- 이전 값 추적, 타이머 ID 저장 등에 유용합니다.`,
  prevValue: `이전 값을 추적할 때 useRef와 useEffect를 함께 사용합니다.\n- 값이 바뀔 때마다 useEffect에서 ref를 갱신하면, 이전 값을 언제든 참조할 수 있습니다.`,
  timerRef: `타이머 ID를 useRef에 저장하면, 컴포넌트가 리렌더링되어도 ID가 유지됩니다.\n- 언마운트 시 cleanup으로 안전하게 타이머를 정리할 수 있습니다.`,
  forwardRef: `forwardRef를 사용하면 부모가 자식 컴포넌트의 DOM에 직접 접근할 수 있습니다.\n- 커스텀 컴포넌트에서 ref를 전달할 때 필수 패턴입니다.`
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

export const UseRefExample = () => {
  return (
    <div>
 
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>1. DOM 참조 (DOM Reference)</Typography>
        <ExampleTab
          example={<DomRefDemo />}
          code={domRefCode}
          desc={descriptions.domRef}
        />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>2. 변경 가능한 값 저장 (Mutable Ref)</Typography>
        <ExampleTab
          example={<MutableRefDemo />}
          code={mutableRefCode}
          desc={descriptions.mutableRef}
        />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>3. 이전 값 추적 (Previous Value)</Typography>
        <ExampleTab
          example={<PrevValueDemo />}
          code={prevValueCode}
          desc={descriptions.prevValue}
        />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>4. 타이머 관리 (Timer Ref)</Typography>
        <ExampleTab
          example={<TimerRefDemo />}
          code={timerRefCode}
          desc={descriptions.timerRef}
        />
      </div>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>5. ref 전달 (Forward Ref)</Typography>
        <ExampleTab
          example={<ForwardRefDemo />}
          code={forwardRefCode}
          desc={descriptions.forwardRef}
        />
      </div>
    </div>
  );
}; 