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
  ListIcon
} from '@chakra-ui/react';
import Section from '../components/Section';
import { Paragraph } from '../components/styles/Paragraph';

import ArticleLayout from '../components/layouts/ArticleLayout';
import { BsTelegram, BsGithub } from 'react-icons/bs';

import { FaCat } from 'react-icons/fa';
import { BsFillDice5Fill } from 'react-icons/bs';
import { MdQuiz } from 'react-icons/md';
import { GiPaintBrush } from 'react-icons/gi';
import TranslatedText from '../components/TranslatedText';

const HomePage = () => {
  return (
    <ArticleLayout>
      <Container>
        <Box
          pt={6}
          pb={4}
          display={'flex'}
          flexDirection={{ base: 'column-reverse ', md: 'row' }}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Box flexShrink={0} mt={{ base: 4, md: 0 }}>
            <Image
              borderColor={useColorModeValue('#202023', 'whiteAlpha.800')}
              borderWidth={2}
              borderStyle="solid"
              maxWidth="150px"
              display="inline-block"
              borderRadius="full"
              src="/images/avatar.jpg"
              alt="profile image"
              height="100%"
            />
          </Box>
          <Box
            flexGrow={1}
            display="flex"
            ml={6}
            justifyContent={{ md: 'center', sm: 'center' }}
            alignItems={{ base: 'center', md: 'flex-start' }}
            flexDirection="column"
          >
            <Heading
              as="h2"
              variant="page-title"
              textAlign={{ sm: 'justify' }}
              fontSize={{ base: 26, md: 32 }}
            >
              <TranslatedText localeFile="common" text="title" />
            </Heading>
          </Box>
        </Box>
        <Section delay={0.1}>
          {/* <Heading
            as="h3"
            variant="section-title"
            fontSize={{ base: 20, md: 25 }}
          >
            Work
          </Heading> */}
          <Paragraph>
            <TranslatedText localeFile="common" text="description" />
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading
            as="h3"
            variant="section-title"
            fontSize={{ base: 20, md: 25 }}
          >
            <TranslatedText localeFile="common" text="hobbiesTitle" />
          </Heading>

          <List fontSize={{ base: 16, md: 18 }}>
            <ListItem>
              <ListIcon
                as={BsFillDice5Fill}
                color={useColorModeValue(
                  'customDarkBlueColor',
                  'customSaturatedGreenColor'
                )}
              />
              <TranslatedText localeFile="common" text="hobbie1" />
            </ListItem>
            <ListItem>
              <ListIcon
                as={MdQuiz}
                color={useColorModeValue(
                  'customDarkBlueColor',
                  'customSaturatedGreenColor'
                )}
              />
              <TranslatedText localeFile="common" text="hobbie2" />
            </ListItem>
            <ListItem>
              <ListIcon
                as={GiPaintBrush}
                color={useColorModeValue(
                  'customDarkBlueColor',
                  'customSaturatedGreenColor'
                )}
              />
              <TranslatedText localeFile="common" text="hobbie3" />
            </ListItem>
            <ListItem>
              <ListIcon
                as={FaCat}
                color={useColorModeValue(
                  'customDarkBlueColor',
                  'customSaturatedGreenColor'
                )}
              />
              <TranslatedText localeFile="common" text="hobbie4" />
            </ListItem>
          </List>
        </Section>
        <Section delay={0.3}>
          <Heading
            as="h3"
            variant="section-title"
            fontSize={{ base: 20, md: 25 }}
          >
            <TranslatedText localeFile="common" text="contactsTitle" />
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
