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
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              {t('title')}
            </Heading>
            <p>разработчик из России</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/ava.jpg"
              alt="profile image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Hello this is mine description hello and welcome
          </Paragraph>
          {/* <Box align="center" my={4}>
            <NextLink href="/projects">
              <Button
                rightIcon={<ChevronRightIcon />}
                colorScheme="green"
                bg="customSaturatedGreenColor"
                _hover={{ bg: 'customDarkGreenColor' }}
              >
                my portfolio
              </Button>
            </NextLink>
          </Box> */}
        </Section>
        {/* <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            <BioSection>
              <BioYear>2000</BioYear>
            </BioSection>
          </Heading>
        </Section> */}
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            {t('hobbiesTitle')}
          </Heading>

          <List>
            <ListItem>
              <ListIcon as={SearchIcon} color="green.500" />
              {t('hobbie1')}
            </ListItem>
            <ListItem>
              <ListIcon as={SearchIcon} color="green.500" />
              {t('hobbie2')}
            </ListItem>
            <ListItem>
              <ListIcon as={SearchIcon} color="green.500" />
              {t('hobbie3')}
            </ListItem>
            <ListItem>
              <ListIcon as={SearchIcon} color="green.500" />
              {t('hobbie4')}
            </ListItem>
          </List>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            {t('contactsTitle')}
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/PopovDS617" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="green"
                  leftIcon={<Icon as={BsGithub} />}
                >
                  {`github`}
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://t.me/PopovDS617" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="green"
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
