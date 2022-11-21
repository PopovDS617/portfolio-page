import { Badge } from '@chakra-ui/react';

export const ProjectMeta = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
);
