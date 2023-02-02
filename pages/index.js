import NextLink from 'next/link';
import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Button,
  Link,
  List,
  ListItem,
  Icon,
  ListIcon,
  UnorderedList
} from '@chakra-ui/react';
import Section from '../components/Section';
import { Paragraph } from '../components/styles/Paragraph';
import { ChevronRightIcon, SearchIcon } from '@chakra-ui/icons';
import { BioSection, BioYear } from '../components/styles/Bio';
import ArticleLayout from '../components/layouts/ArticleLayout';
import { BsTelegram, BsGithub } from 'react-icons/bs';
import useTranslation from 'next-translate/useTranslation';

const HomePage = () => {
  const { t } = useTranslation('common');

  return (
    <ArticleLayout>
      <Container>
        <Box
          display={{ md: 'flex' }}
          bg={useColorModeValue('#e8d2a6b5', '#20202380')}
          css={{ backdropFilter: 'blur(10px)' }}
          padding={5}
          borderRadius={20}
        >
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Image
              borderColor={useColorModeValue('#202023', 'whiteAlpha.800')}
              borderWidth={2}
              borderStyle="solid"
              maxWidth="150px"
              display="inline-block"
              borderRadius="full"
              src="/images/avatar.jpg"
              alt="profile image"
            />
          </Box>
          <Box
            flexGrow={1}
            display="flex"
            justifyContent={{ md: 'center', sm: 'center' }}
            alignItems={{ base: 'center', md: 'center' }}
            flexDirection="column"
          >
            <Heading
              as="h2"
              variant="page-title"
              textAlign={{ sm: 'justify' }}
              fontSize={{ base: 26, md: 32 }}
            >
              {t('title')}
            </Heading>
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading
            as="h3"
            variant="section-title"
            fontSize={{ base: 20, md: 30 }}
          >
            Work
          </Heading>
          <Paragraph fontSize={20}>
            Hello this is mine description hello and welcome
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading
            as="h3"
            variant="section-title"
            fontSize={{ base: 20, md: 30 }}
          >
            {t('hobbiesTitle')}
          </Heading>

          <List fontSize={{ base: 16, md: 18 }}>
            <ListItem>
              <ListIcon
                as={SearchIcon}
                color={useColorModeValue(
                  'customDarkBlueColor',
                  'customSaturatedGreenColor'
                )}
              />
              {t('hobbie1')}
            </ListItem>
            <ListItem>
              <ListIcon
                as={SearchIcon}
                color={useColorModeValue(
                  'customDarkBlueColor',
                  'customSaturatedGreenColor'
                )}
              />
              {t('hobbie2')}
            </ListItem>
            <ListItem>
              <ListIcon
                as={SearchIcon}
                color={useColorModeValue(
                  'customDarkBlueColor',
                  'customSaturatedGreenColor'
                )}
              />
              {t('hobbie3')}
            </ListItem>
            <ListItem>
              <ListIcon
                as={SearchIcon}
                color={useColorModeValue(
                  'customDarkBlueColor',
                  'customSaturatedGreenColor'
                )}
              />
              {t('hobbie4')}
            </ListItem>
          </List>
        </Section>
        <Section delay={0.3}>
          <Heading
            as="h3"
            variant="section-title"
            fontSize={{ base: 20, md: 30 }}
          >
            {t('contactsTitle')}
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/PopovDS617" target="_blank">
                <Button
                  variant="ghost"
                  _hover={{
                    bg: useColorModeValue(
                      'rgba(0, 66, 90,0.35)',
                      'rgba(0, 220, 130,0.10)'
                    )
                  }}
                  fontSize={20}
                  colorScheme="green"
                  color={useColorModeValue(
                    'customDarkBlueColor',
                    'customSaturatedGreenColor'
                  )}
                  leftIcon={<Icon as={BsGithub} />}
                >
                  {`github`}
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://t.me/PopovDS617" target="_blank">
                <Button
                  _hover={{
                    bg: useColorModeValue(
                      'rgba(0, 66, 90,0.35)',
                      'rgba(0, 220, 130,0.10)'
                    )
                  }}
                  fontSize={20}
                  variant="ghost"
                  colorScheme="green"
                  color={useColorModeValue(
                    'customDarkBlueColor',
                    'customSaturatedGreenColor'
                  )}
                  leftIcon={<Icon as={BsTelegram} />}
                >
                  {`telegram`}
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </ArticleLayout>
  );
};

export default HomePage;
