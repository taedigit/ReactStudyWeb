import React from 'react';
import { MacCmdExampleWrapper } from './MacCmdExampleWrapper';
import { MacCmd } from './MacCmd';
import { TabComponent } from './TabComponent';

interface ExampleTabProps {
  example: React.ReactNode;
  code: string;
  showCaret?: boolean;
  desc?: string;
  labels?: string[];
}

export function ExampleTab({ example, code, showCaret = false, desc, labels }: ExampleTabProps) {
  const tabLabels = labels || ['Example', 'Sources', 'Description'];
  const tabs = [
    {
      label: tabLabels[0],
      content: <MacCmdExampleWrapper>{example}</MacCmdExampleWrapper>
    },
    {
      label: tabLabels[1],
      content: <MacCmd showCaret={showCaret}>{code}</MacCmd>
    },
    {
      label: tabLabels[2],
      content: (
        <div style={{
          background: '#1e1e1e',
          borderRadius: '10px',
          margin: '0.5em 0',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          overflow: 'hidden',
          border: '1px solid #222',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            height: '35px',
            background: '#232323',
            padding: '0 12px',
            borderBottom: '1px solid #222',
            gap: '8px',
          }}>
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56', display: 'inline-block' }}></span>
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e', display: 'inline-block' }}></span>
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f', display: 'inline-block' }}></span>
          </div>
          <div style={{
            padding: '1em',
            minHeight: 40,
            fontFamily: 'Menlo, Monaco, Consolas, monospace',
            color: '#6a9955',
            fontSize: '1em',
            lineHeight: 1.6,
            background: 'transparent',
            whiteSpace: 'pre-line',
          }}>
            {desc || <span style={{ color: '#aaa' }}>No description provided.</span>}
          </div>
        </div>
      )
    }
  ];

  return <TabComponent tabs={tabs} />;
}