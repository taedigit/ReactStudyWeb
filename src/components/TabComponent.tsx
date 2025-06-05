import { useState } from 'react';
import { Box, Button, Stack } from '@chakra-ui/react';

interface Tab {
  label: string;
  content: React.ReactNode;
  code?: string;
}

interface TabComponentProps {
  tabs: Tab[];
}

export const TabComponent = ({ tabs }: TabComponentProps) => {
  const [selected, setSelected] = useState(0);

  return (
    <Box>
      <Stack direction="row" spacing={0} mb={4} borderBottom="1px solid #333" pb={1} borderRadius="999px" bg="transparent">
        {tabs.map((tab, idx) => (
          <Button
            key={tab.label}
            onClick={() => setSelected(idx)}
            variant="unstyled"
            fontWeight={selected === idx ? 'bold' : 'normal'}
            fontSize="xs"
            px={4}
            py={1}
            minW="64px"
            textAlign="center"
            overflow="hidden"
            textOverflow="ellipsis"
            whiteSpace="nowrap"
            height="20px"
            color={selected === idx ? '#2563eb' : '#aaa'}
            transition="color 0.2s, background 0.2s"
            bg={selected === idx ? '#23293a' : 'transparent'}
            style={{
              borderRadius: 0,
              background: 'none',
              border: 'none',
              boxShadow: 'none',
              outline: 'none',
              transform: 'none',
            }}
            _focus={{ boxShadow: 'none' }}
            _active={{ bg: 'none', color: '#2563eb' }}
            _hover={{ bg: 'none', color: '#2563eb' }}
          >
            {tab.label}
          </Button>
        ))}
      </Stack>
      <Box minHeight="60px">
        {tabs[selected].content}
              </Box>
              </Box>
  );
}; 