import React from 'react';

export function MacCmdExampleWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      background: '#ffffff',
      borderRadius: '10px',
      margin: '0.5em 0',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      overflow: 'hidden',
      border: '1px solid #e0e0e0',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        height: '35px',
        background: '#f5f5f5',
        padding: '0 12px',
        borderBottom: '1px solid #e0e0e0',
        gap: '8px',
      }}>
        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56', display: 'inline-block' }}></span>
        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e', display: 'inline-block' }}></span>
        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f', display: 'inline-block' }}></span>
      </div>
      <div style={{
        background: 'transparent',
        color: '#000000',
        padding: '1.5em',
        margin: 0,
        lineHeight: '1.6',
        overflowX: 'auto',
      }}>
        {children}
      </div>
    </div>
  );
} 