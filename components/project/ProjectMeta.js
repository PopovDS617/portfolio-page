import { Badge } from '@chakra-ui/react';

export const ProjectMeta = ({ children }) => (
  <Badge colorScheme="green" mr={2} fontSize={{ md: 16, base: 14 }}>
    {children}
  </Badge>
);
