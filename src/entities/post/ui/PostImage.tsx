import { Image } from '@chakra-ui/react';
export const PostImage = ({ src, alt }: { src: string; alt: string }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
);
