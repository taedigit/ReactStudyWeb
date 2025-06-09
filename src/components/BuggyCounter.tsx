import { useState } from 'react';

export function BuggyCounter() {
  const [count, setCount] = useState(0);

  if (count === 5) {
    throw new Error('I crashed!');
  }

  return (
    <div style={{
      padding: '20px',
      background: '#232323',
      borderRadius: '8px',
      color: '#eaeaea'
    }}>
      <p>Count: {count}</p>
      <button
        onClick={() => setCount(c => c + 1)}
        style={{
          padding: '8px 16px',
          background: '#444',
          border: 'none',
          borderRadius: '4px',
          color: '#eaeaea',
          cursor: 'pointer'
        }}
      >
        Increment
      </button>
    </div>
  );
} 