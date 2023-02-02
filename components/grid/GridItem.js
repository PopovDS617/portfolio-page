import NextLink from 'next/link';
import { Image } from '@chakra-ui/react';
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react';
import { Global } from '@emotion/react';

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" align="center">
    <LinkBox cursor="pointer">
      <Image src={thumbnail} alt={title} loading="lazy" />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={16}>{children}</Text>
    </LinkBox>
  </Box>
);

export const ProjectGridItem = ({ children, id, title, thumbnail }) => (
  <Box
    w="100%"
    align="center"
    transition="all 0.3s"
    _hover={{
      transform: 'scale(1.02)',
      transition: 'all 0.3s'
    }}
  >
    <NextLink href={`/projects/${id}`}>
      <LinkBox cursor="pointer">
        <Image src={thumbnail} alt={title} placeholder="blur" />
        <LinkOverlay href={`/projects/${id}`}>
          <Text mt={2} fontSize={22}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={16}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
);
export const PostGridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" align="center">
    <NextLink href={`/posts/${id}`}>
      <LinkBox cursor="pointer">
        <Image src={thumbnail} alt={title} placeholder="blur" />
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

export const GridItemStyle = () => (
  <Global
    styles={`
    .grid-tem-thumbnail{
        border-radius:12px;


    }
    `}
  />
);
