import React from 'react';

export function MacCmdExampleWrapper({ children, agGrid }: { children: React.ReactNode; agGrid?: boolean }) {
  return (
    <div style={{
      background: agGrid ? 'none' : '#ffffff',
      borderRadius: '10px',
      margin: '0.5em 0',
      boxShadow: agGrid ? 'none' : '0 2px 8px rgba(0,0,0,0.08)',
      overflow: agGrid ? 'visible' : 'hidden',
      border: agGrid ? 'none' : '1px solid #e0e0e0',
      padding: agGrid ? 0 : undefined,
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        height: '35px',
        background: agGrid ? 'none' : '#f5f5f5',
        padding: '0 12px',
        borderBottom: agGrid ? 'none' : '1px solid #e0e0e0',
        gap: '8px',
      }}>
        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56', display: 'inline-block' }}></span>
        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e', display: 'inline-block' }}></span>
        <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f', display: 'inline-block' }}></span>
      </div>
      <div style={{
        background: 'transparent',
        color: '#000000',
        padding: agGrid ? 0 : '1.5em',
        margin: 0,
        lineHeight: '1.6',
        overflowX: 'auto',
      }}>
        {children}
      </div>
    </div>
  );
} 