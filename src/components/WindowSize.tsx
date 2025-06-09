import { useState, useEffect } from 'react';

interface Size {
  width: number;
  height: number;
}

function useWindowSize() {
  const [size, setSize] = useState<Size>({
    width: window.innerWidth,
    height: window.innerHeight
  });

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

  return size;
}

export function WindowSize() {
  const size = useWindowSize();

  return (
    <div style={{
      padding: '20px',
      background: '#232323',
      borderRadius: '8px',
      color: '#eaeaea'
    }}>
      <p>Window Width: {size.width}px</p>
      <p>Window Height: {size.height}px</p>
    </div>
  );
} 