import React, { useState, useEffect } from 'react';

interface Position {
  x: number;
  y: number;
}

interface MouseTrackerProps {
  children: (position: Position) => React.ReactNode;
}

export function MouseTracker({ children }: MouseTrackerProps) {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div style={{
      padding: '20px',
      background: '#232323',
      borderRadius: '8px',
      color: '#eaeaea'
    }}>
      {children(position)}
    </div>
  );
} 