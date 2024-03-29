import NextLink from 'next/link';

import { Heading, Box, Link } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { TranslatedText } from '@/features/internalization';

export const ProjectTitle = ({ children }: { children: React.ReactNode }) => (
  <Box fontSize={{ base: 20, md: 26 }}>
    <NextLink legacyBehavior href="/projects" passHref>
      <Link>
        <TranslatedText localeFile="projects" text="pageTitle" />
      </Link>
    </NextLink>
    <span>
      <ChevronRightIcon />
    </span>
    <Heading display="inline-block" as="h3" fontSize={{ base: 20, md: 26 }} mb={4} pt={6}>
      {children}
    </Heading>
  </Box>
);
