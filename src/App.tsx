import { useState, useEffect } from 'react'
import { Box, Heading, Text, Button, Stack } from '@chakra-ui/react'
import { Layout } from './components/Layout'
import { sections } from './data/sections'
import type { SectionId } from './types/section'
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';

const theme = createTheme();

function App() {
  // 해시에서 섹션 ID 추출
  const getSectionFromHash = (): SectionId => {
    const hash = window.location.hash.replace('#', '');
    return (hash && sections[hash as SectionId]) ? (hash as SectionId) : 'intro';
  };

  const [currentSection, setCurrentSection] = useState<SectionId>(getSectionFromHash());

  // 해시 변경 시 섹션 변경
  useEffect(() => {
    const onHashChange = () => {
      setCurrentSection(getSectionFromHash());
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // 섹션 변경 시 해시도 변경
  const handleSectionChange = (section: SectionId) => {
    window.location.hash = section;
    setCurrentSection(section);
  };

  const currentSectionData = sections[currentSection];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout currentSection={currentSection} onSectionChange={handleSectionChange}>
        <Box bg="white" borderRadius="lg" overflow="hidden" boxShadow="sm">
          <Box p={8} borderBottomWidth={1}>
            <Heading as="h1" size="xl" mb={4}>{currentSectionData.title}</Heading>
            <Text fontSize="lg" color="gray.600">
              {currentSectionData.description}
            </Text>
          </Box>

          <Box p={8}>
            {currentSectionData.content}
          </Box>

          <Box p={6} bg="gray.50" borderTopWidth={1}>
            <Stack direction="row" justify="space-between" gap={4}>
              {currentSectionData.prev && (
                <Button
                  variant="outline"
                  onClick={() => handleSectionChange(currentSectionData.prev as SectionId)}
                  leftIcon={<Text>←</Text>}
                >
                  {sections[currentSectionData.prev as SectionId].title}
                </Button>
              )}
              {currentSectionData.next && (
                <Button
                  variant="outline"
                  onClick={() => handleSectionChange(currentSectionData.next as SectionId)}
                  rightIcon={<Text>→</Text>}
                  ml="auto"
                >
                  {sections[currentSectionData.next as SectionId].title}
                </Button>
              )}
            </Stack>
          </Box>
        </Box>
      </Layout>
    </ThemeProvider>
  )
}

export default App
