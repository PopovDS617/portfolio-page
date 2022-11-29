import NextLink from 'next/link';

import { Heading, Box, Link } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

export const ProjectTitle = ({ children }) => (
  <Box>
    <NextLink href="/projects" passHref>
      <Link>Projects</Link>
    </NextLink>
    <span>
      <ChevronRightIcon />
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
);
