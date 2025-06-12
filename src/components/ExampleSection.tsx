import React, { useState } from 'react';
import { Box, Typography, Paper, Tab, Tabs } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

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
            <Box sx={{
              background: '#1e1e1e',
              borderRadius: '10px',
              margin: '0.5em 0',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              overflow: 'hidden',
              border: '1px solid #222',
              position: 'relative'
            }}>
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                height: '28px',
                background: '#232323',
                padding: '0 12px',
                borderBottom: '1px solid #222',
                gap: '8px',
              }}>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56', display: 'inline-block' }}></span>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e', display: 'inline-block' }}></span>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f', display: 'inline-block' }}></span>
              </Box>
              <Box sx={{
                background: 'transparent',
                color: '#eaeaea',
                padding: '1em',
                fontFamily: 'Menlo, Monaco, Consolas, monospace',
                fontSize: '1em',
                margin: 0,
                lineHeight: '1.6',
                overflowX: 'auto',
                whiteSpace: 'pre-wrap',
                position: 'relative'
              }}>
                {tooltip || '설명이 없습니다.'}
                <Box
                  sx={{
                    position: 'absolute',
                    display: 'inline-block',
                    width: '8px',
                    height: '15px',
                    backgroundColor: '#b5e853',
                    animation: 'blink 1s step-end infinite',
                    '@keyframes blink': {
                      '0%': { opacity: 1 },
                      '50%': { opacity: 0 },
                      '100%': { opacity: 1 }
                    },
                    ml: 1,
                    verticalAlign: 'middle'
                  }}
                />
              </Box>
            </Box>
          )}
        </Box>
      </Paper>
    </Box>
  );
}; 