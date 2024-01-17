import NextLink from 'next/link';
import { Image } from '@chakra-ui/react';
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react';
import { GridItemProps } from '../types';

export const PostGridItem = (props: GridItemProps) => {
  const { children, thumbnail, title, id } = props;

  return (
    <Box w="100%" alignItems="center">
      <NextLink legacyBehavior href={`/posts/${id}`} scroll={false}>
        <LinkBox cursor="pointer">
          <Image
            src={thumbnail}
            alt={title}
            height="100%"
            // _placeholder="blur"
          />
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
};
