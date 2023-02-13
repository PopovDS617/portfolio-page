import NextLink from 'next/link';
import { Image } from '@chakra-ui/react';
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react';

export const PostGridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" align="center">
    <NextLink href={`/posts/${id}`} scroll={false}>
      <LinkBox cursor="pointer">
        <Image src={thumbnail} alt={title} height="100%" placeholder="blur" />
        <LinkOverlay href={`/posts/${id}`}>
          <Text mt={2} fontSize={22}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={16}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
);
