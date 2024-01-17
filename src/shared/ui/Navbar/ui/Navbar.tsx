/* eslint-disable react-hooks/rules-of-hooks */
import Logo from './Logo';
import NextLink from 'next/link';
import {
  Container,
  Box,
  Link as ChakraLink,
  Stack,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  background
} from '@chakra-ui/react';
import { ThemeToggleButton } from './ThemeToggleButton';
import { LangToggleButton } from './LangToggleButton';

import { HamburgerIcon } from '@chakra-ui/icons';
import useTranslation from 'next-translate/useTranslation';
import { Link } from '../../Link';

type NavbarProps = {
  path: string;
};

export const Navbar = (props: NavbarProps) => {
  const { t } = useTranslation('common');

  const { path } = props;
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#e8d2a6b5', '#20202380')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        alignItems="center"
        justifyContent="center"
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
          <Link href="/stack" path={path}>
            {t('stackLink')}
          </Link>
          <Link href="/projects" path={path}>
            {t('projectsLink')}
          </Link>
          <Link href="/posts" path={path}>
            {t('postsLink')}
          </Link>
        </Stack>
        <Box
          flex={1}
          alignItems="center"
          mr={5}
          display="flex"
          justifyContent="flex-end"
        >
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
                border="none"
                _active={{
                  backgroundColor: useColorModeValue('#eec677', '#2d3748')
                }}
                _focus={{
                  backgroundColor: useColorModeValue('#eec677', '#2d3748')
                }}
              />
              <MenuList
                bg={useColorModeValue('#eec677', '#2d3748')}
                borderColor="transparent"
                padding={0}
              >
                <NextLink legacyBehavior href="/stack" passHref>
                  <MenuItem
                    borderRadius={4}
                    isFocusable={false}
                    color={path === '/stack' ? 'black' : undefined}
                    bg={
                      path === '/stack'
                        ? useColorModeValue(
                            'customSaturatedGreenColor',
                            'customSaturatedGreenColor'
                          )
                        : ''
                    }
                  >
                    {t('stackLink')}
                  </MenuItem>
                </NextLink>
                <NextLink legacyBehavior href="/projects" passHref>
                  <MenuItem
                    isFocusable={false}
                    color={path === '/projects' ? 'black' : undefined}
                    bg={
                      path === '/projects'
                        ? useColorModeValue(
                            'customSaturatedGreenColor',
                            'customSaturatedGreenColor'
                          )
                        : ''
                    }
                  >
                    {t('projectsLink')}
                  </MenuItem>
                </NextLink>
                <NextLink legacyBehavior href="/posts" passHref>
                  <MenuItem
                    isFocusable={false}
                    color={path === '/posts' ? 'black' : undefined}
                    bg={
                      path === '/posts'
                        ? useColorModeValue(
                            'customSaturatedGreenColor',
                            'customSaturatedGreenColor'
                          )
                        : ''
                    }
                  >
                    {t('postsLink')}
                  </MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
