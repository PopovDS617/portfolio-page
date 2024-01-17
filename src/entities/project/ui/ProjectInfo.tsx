import { Badge } from '@chakra-ui/react';

export const ProjectInfo = ({ children }: { children: React.ReactNode }) => (
  <Badge colorScheme="green" mr={2} fontSize={{ md: 16, base: 14 }}>
    {children}
  </Badge>
);
