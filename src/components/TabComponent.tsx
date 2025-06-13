import React, { useState } from 'react';

interface Tab {
  label: string;
  content: React.ReactNode;
  code?: string;
}

interface TabComponentProps {
  tabs: Tab[];
  headerMode?: boolean;
  selectedIdx?: number;
  onTabChange?: (idx: number) => void;
}

export const TabComponent = ({ tabs, headerMode = false, selectedIdx, onTabChange }: TabComponentProps) => {
  const [selected, setSelected] = useState(0);
  const sel = selectedIdx !== undefined ? selectedIdx : selected;
  const setSel = onTabChange || setSelected;

  if (headerMode) {
    return (
      <div style={{ display: 'flex', gap: 0, width: '100%', height: "35px" }}>
        {tabs.map((tab, idx) => (
          <button
            key={tab.label}
            onClick={() => setSel(idx)}
            style={{
              flex: 1,
              height: 40,
              lineHeight: '35px',
              background: sel === idx ? '#181818' : 'transparent',
              color: sel === idx ? '#fff' : '#bdbdbd',
              border: 'none',
              borderRight: idx !== tabs.length - 1 ? '1px solid #333' : 'none',
              fontWeight: sel === idx ? 600 : 400,
              fontSize: 15,
              cursor: 'pointer',
              outline: 'none',
              borderRadius: 0,
              transition: 'background 0.2s, color 0.2s',
              padding: 0,
              verticalAlign: 'middle',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div style={{ width: '100%' }}>
      <div style={{
        display: 'flex',
        borderRadius: 5,
        overflow: 'hidden',
        border: '1px solid #222',
        background: '#181818',
        marginBottom: 0,
        width: '100%',
      }}>
        {tabs.map((tab, idx) => (
          <button
            key={tab.label}
            onClick={() => setSel(idx)}
            style={{
              flex: 1,
              padding: '3px 10px',
              background: sel === idx ? '#232323' : 'transparent',
              color: sel === idx ? '#fff' : '#bdbdbd',
              border: 'none',
              borderRight: idx !== tabs.length - 1 ? '1px solid #333' : 'none',
              fontWeight: sel === idx ? 600 : 400,
              fontSize: 11,
              cursor: 'pointer',
              outline: 'none',
              transition: 'background 0.2s, color 0.2s',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div style={{ width: '100%' }}>
        {tabs[sel].content}
      </div>
    </div>
  );
}; 