import React from 'react';
import { Box, Flex, Stack, Text, Link, Container, Heading } from '@chakra-ui/react';
import { sections } from '../data/sections';
import type { Section, SectionId } from '../types/section';

interface LayoutProps {
  children: React.ReactNode;
  currentSection: SectionId;
  onSectionChange: (section: SectionId) => void;
}

export const Layout = ({ children, currentSection, onSectionChange }: LayoutProps) => {
  const categories = {
    getting_started: {
      title: '시작하기',
      sections: Object.values(sections).filter((section: Section) => section.category === 'getting_started')
    },
    basics: {
      title: '기본 개념',
      sections: Object.values(sections).filter((section: Section) => section.category === 'basics')
    },
    hooks: {
      title: 'Hooks',
      sections: Object.values(sections).filter((section: Section) => section.category === 'hooks')
    },
    advanced: {
      title: '고급 개념',
      sections: Object.values(sections).filter((section: Section) => section.category === 'advanced')

    },
    example: {
      title: 'Example',
      sections: Object.values(sections).filter((section: Section) => section.category === 'example')
    },
  };

  return (
    <Box minH="100vh" width="90vw">
      <Box
        as="header"
        position="fixed"
        top={0}
        left={0}
        right={0}
        h="60px"
        bg="white"
        boxShadow="sm"
        zIndex={100}
        px={6}
        display="flex"
        alignItems="center"
      >
        <Link
          href="#"
          onClick={e => { e.preventDefault(); onSectionChange('intro'); }}
          _hover={{ textDecoration: 'none' }}
          color="brand.500"
        >
          <Heading size="md" color="brand.500">React Tutorial</Heading>
        </Link>
      </Box>
      
      <Flex pt="60px" h="calc(100vh - 60px)" width="100vw">
        <Box
          as="aside"
          w="280px"
          bg="white"
          position="fixed"
          left={0}
          top="60px"
          h="calc(100vh - 60px)"
          overflowY="auto"
          borderRightWidth="1px"
          py={6}
        >
          <Stack direction="column" gap={6}>
            {Object.entries(categories).map(([key, category]) => (
              <Box key={key}>
                <Text
                  px={6}
                  fontSize="xs"
                  fontWeight="semibold"
                  textTransform="uppercase"
                  color="gray.500"
                  letterSpacing="wider"
                  mb={2}
                >
                  {category.title}
                </Text>
                <Stack direction="column" gap={1}>
                  {category.sections.map((section: Section) => (
                    <Link
                      key={section.id}
                      px={6}
                      py={2}
                      display="flex"
                      alignItems="center"
                      color={currentSection === section.id ? 'brand.500' : 'gray.700'}
                      bg={currentSection === section.id ? 'brand.50' : 'transparent'}
                      borderLeftWidth="3px"
                      borderLeftColor={currentSection === section.id ? 'brand.500' : 'transparent'}
                      _hover={{
                        bg: 'gray.50',
                        textDecoration: 'none'
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        onSectionChange(section.id as SectionId);
                      }}
                    >
                      <Text fontSize="xl" mr={3}>{section.icon}</Text>
                      <Text fontSize="sm">{section.title}</Text>
                    </Link>
                  ))}
                </Stack>
              </Box>
            ))}
          </Stack>
        </Box>
        
        <Container
          maxW="1000px"
          minW="0"
          flex={1}
          ml="280px"
          py={8}
          px={6}
          bg="gray.50"
        >
          {children}
        </Container>
      </Flex>
    </Box>
  );
}; 