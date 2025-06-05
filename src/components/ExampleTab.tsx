import React from 'react';
import { MacCmdExampleWrapper } from './MacCmdExampleWrapper';
import { MacCmd } from './MacCmd';
import { TabComponent } from './TabComponent';

interface ExampleTabProps {
  example: React.ReactNode;
  code: string;
  showCaret?: boolean;
  desc?: string;
}

export function ExampleTab({ example, code, showCaret = false, desc }: ExampleTabProps) {
  return (
    <TabComponent
      tabs={[
        {
          label: 'Example',
          content: <MacCmdExampleWrapper>{example}</MacCmdExampleWrapper>
        },
        {
          label: 'Source',
          content: <MacCmd showCaret={showCaret} desc={desc}>{code}</MacCmd>
        }
      ]}
    />
  );
} 