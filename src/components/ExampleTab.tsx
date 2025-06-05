import React from 'react';
import { MacCmdExampleWrapper } from './MacCmdExampleWrapper';
import { MacCmd } from './MacCmd';
import { TabComponent } from './TabComponent';

interface ExampleTabProps {
  example: React.ReactNode;
  code: string;
  showCaret?: boolean;
}

export function ExampleTab({ example, code, showCaret = false }: ExampleTabProps) {
  return (
    <TabComponent
      tabs={[
        {
          label: 'Example',
          content: <MacCmdExampleWrapper>{example}</MacCmdExampleWrapper>
        },
        {
          label: 'Source',
          content: <MacCmd showCaret={showCaret}>{code}</MacCmd>
        }
      ]}
    />
  );
} 