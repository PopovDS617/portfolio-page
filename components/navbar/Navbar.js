import Logo from './Logo';
import NextLink from 'next/link';
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react';
import ThemeToggleButton from './ThemeToggleButton';
import LangToggleButton from './LangToggleButton';
import { BsGithub } from 'react-icons/bs';
import { HamburgerIcon } from '@chakra-ui/icons';
import useTraslation from 'next-translate/useTranslation';

const LinkItem = ({ href, path, children, target, ...props }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha900');
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        p={2}
        bg={active ? 'customSaturatedGreenColor' : undefined}
        color={active ? '#202023' : inactiveColor}
        target={target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
};

export const Navbar = props => {
  const { path } = props;
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg">
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
        >
          <LinkItem href="/stack" path={path}>
            stack
          </LinkItem>
          <LinkItem href="/projects" path={path}>
            projects
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            posts
          </LinkItem>
          <LinkItem
            target="_blank"
            href="https://github.com/PopovDS617/portfolio-page"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <BsGithub />
            source
          </LinkItem>
        </Stack>
        <Box flex={1} align="right" mr={5}>
          <LangToggleButton />
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>about</MenuItem>
                </NextLink>
                <NextLink href="/stack" passHref>
                  <MenuItem>stack</MenuItem>
                </NextLink>
                <NextLink href="/projects" passHref>
                  <MenuItem>projects</MenuItem>
                </NextLink>
                <NextLink href="/posts" passHref>
                  <MenuItem as={Link}>posts</MenuItem>
                </NextLink>

                <MenuItem
                  as={Link}
                  href="https://github.com/PopovDS617/portfolio-page"
                >
                  source code
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};