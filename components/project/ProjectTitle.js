import NextLink from 'next/link';

import { Heading, Box, Link } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import TranslatedText from '../TranslatedText';

export const ProjectTitle = ({ children }) => (
  <Box fontSize={{ base: 20, md: 26 }}>
    <NextLink href="/projects" passHref>
      <Link>
        <TranslatedText localeFile="projects" text="pageTitle" />
      </Link>
    </NextLink>
    <span>
      <ChevronRightIcon />
    </span>
    <Heading
      display="inline-block"
      as="h3"
      fontSize={{ base: 20, md: 26 }}
      mb={4}
    >
      {children}
    </Heading>
  </Box>
);
