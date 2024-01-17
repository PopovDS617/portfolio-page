import { Image } from '@chakra-ui/react';
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react';
import { GridItemProps } from '../types';

export const GridItem = (props: GridItemProps) => {
  const { children, thumbnail, title, href } = props;

  return (
    <Box w="100%" align="center">
      <LinkBox cursor="pointer">
        <Image src={thumbnail} height="100%" alt={title} loading="lazy" />
        <LinkOverlay href={href} target="_blank">
          <Text mt={2}>{title}</Text>
        </LinkOverlay>
        <Text fontSize={16}>{children}</Text>
      </LinkBox>
    </Box>
  );
};
