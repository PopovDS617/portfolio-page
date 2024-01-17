import { Link as ChakraLink, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';

type LinkProps = {
  href: string;
  path: string;
  children: React.ReactNode;
  target?: string;
};

export const Link = (props: LinkProps) => {
  const { href, path, children, target } = props;

  const active = path.includes(href);
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha900');
  return (
    <ChakraLink
      as={NextLink}
      p={2}
      px={4}
      bg={active ? 'customSaturatedGreenColor' : undefined}
      color={active ? '#202023' : inactiveColor}
      fontSize={20}
      transition="background-color 0.15s ease-out, color 0.05s ease-out"
      {...props}
    >
      {children}
    </ChakraLink>
  );
};
