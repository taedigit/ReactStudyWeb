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
  const codeWithDesc = desc ? `/*
${desc}
*/

${code}` : code;

  const tabs = [
    {
      label: 'Example',
      content: <MacCmdExampleWrapper>{example}</MacCmdExampleWrapper>
    },
    {
      label: 'Source',
      content: <MacCmd showCaret={showCaret}>{codeWithDesc}</MacCmd>
    }
  ];

  return <TabComponent tabs={tabs} />;
}