import { Badge } from '@chakra-ui/react';

export const PostMeta = ({ children }: { children: React.ReactNode }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
);
