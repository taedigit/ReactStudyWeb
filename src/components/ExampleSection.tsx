import React, { useState } from 'react';
import { Box, Typography, Paper, Tab, Tabs } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { MacCmd } from './MacCmd';

interface ExampleSectionProps {
  title: string;
  description: string;
  example: React.ReactNode;
  code: string;
  tooltip?: string;
}

export const ExampleSection: React.FC<ExampleSectionProps> = ({
  title,
  description,
  example,
  code,
  tooltip
}) => {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        {description}
      </Typography>
      <Paper elevation={2} sx={{ p: 2, bgcolor: '#1b1b1b' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs 
            value={tabValue} 
            onChange={handleTabChange}
            sx={{
              '& .MuiTab-root': {
                color: '#b5e853',
                minHeight: '48px',
                '&.Mui-selected': {
                  color: '#eaeaea'
                }
              },
              '& .MuiTabs-indicator': {
                backgroundColor: '#b5e853'
              }
            }}
          >
            <Tab label="Example" />
            <Tab label="Source" />
            <Tab label="Desc" />
          </Tabs>
        </Box>
        <Box sx={{ mt: 2 }}>
          {tabValue === 0 && (
            <Box sx={{ p: 2 }}>{example}</Box>
          )}
          {tabValue === 1 && (
            <SyntaxHighlighter
              language="typescript"
              style={vscDarkPlus}
              customStyle={{
                margin: 0,
                padding: '1em',
                borderRadius: '4px',
                fontSize: '14px',
                backgroundColor: '#1b1b1b'
              }}
            >
              {code}
            </SyntaxHighlighter>
          )}
          {tabValue === 2 && (
            <MacCmd showCaret={false}>
              {tooltip || '설명이 없습니다.'}
            </MacCmd>
          )}
        </Box>
      </Paper>
    </Box>
  );
}; 