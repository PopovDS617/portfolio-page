import { Badge } from '@chakra-ui/react';

export const PostMeta = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
);
