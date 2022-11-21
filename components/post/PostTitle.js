import NextLink from 'next/link';

import { Heading, Box, Link } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

export const PostTitle = ({ children }) => (
  <Box>
    <NextLink href="/posts" passHref>
      <Link>Posts</Link>
    </NextLink>
    <span>
      <ChevronRightIcon />
    </span>
    <Heading display="inline-block" as="h2" fontSize={20} mb={2}>
      {children}
    </Heading>
  </Box>
);
