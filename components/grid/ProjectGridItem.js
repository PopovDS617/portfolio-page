import NextLink from 'next/link';
import { Image } from '@chakra-ui/react';
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react';

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
        <Image
          src={thumbnail}
          alt={title}
          placeholder="blur"
          height="100%"
          width="80%"
        />
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
