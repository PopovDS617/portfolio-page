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
import useTranslation from 'next-translate/useTranslation';

const LinkItem = ({ href, path, children, target, ...props }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha900');
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        p={2}
        px={4}
        bg={active ? 'customSaturatedGreenColor' : undefined}
        color={active ? '#202023' : inactiveColor}
        target={target}
        fontSize={20}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
};

export const Navbar = props => {
  const { t } = useTranslation('common');

  const { path } = props;
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#e5e3c980', '#20202380')}
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
          <Logo path={props.path} />
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
            {t('stackLink')}
          </LinkItem>
          <LinkItem href="/projects" path={path}>
            {t('projectsLink')}
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            {t('postsLink')}
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
            {t('sourceLink')}
          </LinkItem>
        </Stack>
        <Box flex={1} align="right" mr={5}>
          <LangToggleButton />
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                outline="2px solid #00dc82"
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                {/* <NextLink href="/" passHref>
                  <MenuItem as={Link}>about</MenuItem>
                </NextLink> */}
                <NextLink href="/stack" passHref>
                  <MenuItem> {t('stackLink')}</MenuItem>
                </NextLink>
                <NextLink href="/projects" passHref>
                  <MenuItem> {t('projectsLink')}</MenuItem>
                </NextLink>
                <NextLink href="/posts" passHref>
                  <MenuItem as={Link}>{t('postsLink')}</MenuItem>
                </NextLink>

                <MenuItem
                  as={Link}
                  href="https://github.com/PopovDS617/portfolio-page"
                >
                  {t('sourceLink')}
                  <Box px={1}>
                    <BsGithub />
                  </Box>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
