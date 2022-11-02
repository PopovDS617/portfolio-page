import NextLink from 'next/link';

import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react';
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

export const PostImage = ({ src, alt }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
);

export const PostMeta = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
);
