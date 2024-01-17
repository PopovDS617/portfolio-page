import NextLink from 'next/link';
import Image from 'next/image';
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react';
import { GridItemProps } from '../types';

export const ProjectGridItem = (props: GridItemProps) => {
  const { children, thumbnail, title, id } = props;
  return (
    <Box
      w="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      transition="all 0.3s"
      _hover={{
        transform: 'scale(1.02)',
        transition: 'all 0.3s'
      }}
    >
      <NextLink legacyBehavior href={`/projects/${id}`}>
        <LinkBox cursor="pointer">
          <Image
            src={thumbnail}
            alt={title}
            placeholder="blur"
            blurDataURL="/images/blurred-logo-1.jpg"
            quality={100}
            height="230"
            width="230"
          />
          <LinkOverlay href={`/projects/${id}`}>
            <Text mt={2} fontSize={22} align="center" whiteSpace="wrap">
              {title}
            </Text>
          </LinkOverlay>
          <Text fontSize={16}>{children}</Text>
        </LinkBox>
      </NextLink>
    </Box>
  );
};
