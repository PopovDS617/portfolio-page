import NextLink from 'next/link';
import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Button,
  Link,
  SimpleGrid,
  List,
  ListItem,
  Icon
} from '@chakra-ui/react';
import Section from '../components/Section';
import { Paragraph } from '../components/Paragraph';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { BioSection, BioYear } from '../components/Bio';
import ArticleLayout from '../components/layouts/ArticleLayout';
import { BsTelegram, BsGithub } from 'react-icons/bs';
import { GridItem } from '../components/GridItem';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <ArticleLayout>
      <Container>
        <Box
          borderRadius="lg"
          p={3}
          mb={6}
          textAlign="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        >
          Привет, это страничка
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Дмитрий Попов
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
          <Box align="center" my={4}>
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
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            <BioSection>
              <BioYear>2000</BioYear>
            </BioSection>
          </Heading>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Увлечения
          </Heading>
          <Paragraph>
            Music,
            <Link href="" target="_blank">
              Drawing
            </Link>
            Playing
            <Link href="" target="_blank">
              Photography
            </Link>
            Music
          </Paragraph>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            contacts
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/PopovDS617" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="green"
                  leftIcon={<Icon as={BsGithub} />}
                >
                  my github profile
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
                  {`my telegram profile`}
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
      <Footer />
    </ArticleLayout>
  );
};

export default HomePage;
export { getServerSideProps } from '../components/ssrSetup';
