import { useState, useEffect } from 'react'
import { Box, Heading, Text, Button, Stack, Tag as CTag, TagLabel, HStack } from '@chakra-ui/react'
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

  // 태그 클릭 시 Layout의 검색창에 입력값을 전달하는 커스텀 이벤트
  const handleTagClick = (tag: string) => {
    const event = new CustomEvent('sectionTagSearch', { detail: tag });
    window.dispatchEvent(event);
  };

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

          {/* 태그 바: 섹션에 tags가 있을 때만 표시 */}
          {currentSectionData.tags && currentSectionData.tags.length > 0 && (
            <Box px={8} py={3} borderTopWidth={1} bg="gray.50">
              <HStack spacing={2} wrap="wrap">
                {currentSectionData.tags.map(tag => (
                  <CTag
                    key={tag}
                    size="md"
                    variant="subtle"
                    colorScheme="blue"
                    cursor="pointer"
                    onClick={() => handleTagClick(tag)}
                  >
                    <TagLabel>{`#${tag}`}</TagLabel>
                  </CTag>
                ))}
              </HStack>
            </Box>
          )}

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



