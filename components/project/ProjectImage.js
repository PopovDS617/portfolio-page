import Image from 'next/image';
import { Box } from '@chakra-ui/react';

export const ProjectImage = ({ src, alt, height = '500', width = '1000' }) => (
  <Box
    mb={4}
    transition="all 0.4s"
    _hover={{ transform: 'scale(1.05)', transition: 'all 0.4s' }}
    borderRadius="lg"
  >
    <Image
      w="full"
      src={src}
      alt={alt}
      height={height}
      width={width}
      loading="lazy"
      placeholder="blur"
      blurDataURL="/images/blurred-logo-2.jpg"
      quality={100}
    />
  </Box>
);
