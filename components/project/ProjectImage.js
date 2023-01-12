import { Image } from '@chakra-ui/react';

export const ProjectImage = ({ src, alt }) => (
  <Image
    borderRadius="lg"
    w="full"
    src={src}
    alt={alt}
    mb={4}
    transition="all 0.3s"
    _hover={{ transform: 'scale(1.3)', transition: 'all 0.3s' }}
  />
);
