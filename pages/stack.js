import {
  Container,
  Heading,
  Box,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Divider
} from '@chakra-ui/react';
import Section from '../components/Section';

import ArticleLayout from '../components/layouts/ArticleLayout';
import TranslatedText from '../components/TranslatedText';
import { AiFillApi } from 'react-icons/ai';
import { MdStorage } from 'react-icons/md';
import { BsFillCreditCard2FrontFill, BsTranslate } from 'react-icons/bs';
import { FiTarget } from 'react-icons/fi';

const StackPage = () => {
  return (
    <ArticleLayout>
      <Container>
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
            textAlign="center"
            fontSize={{ base: 20, md: 30 }}
          >
            <TranslatedText localeFile="stack" text="pageTitle" />
          </Heading>
          <Divider my={6} />
        </Box>
        <Section delay={0.1}>
          <Heading
            as="h3"
            variant="section-title"
            fontSize={{ base: 20, md: 25 }}
          >
            <TranslatedText localeFile="stack" text="languagesTitle" />
          </Heading>
          <List fontSize={{ base: 16, md: 18 }}>
            <ListItem padding={2}>
              <ListIcon
                as={BsTranslate}
                color={useColorModeValue(
                  'customDarkBlueColor',
                  'customSaturatedGreenColor'
                )}
              />
              Javascript, Typescript, Python
            </ListItem>
          </List>
        </Section>
        <Section delay={0.1}>
          <Heading
            as="h3"
            variant="section-title"
            fontSize={{ base: 20, md: 25 }}
          >
            <TranslatedText localeFile="stack" text="frontendTitle" />
          </Heading>
          <List fontSize={{ base: 16, md: 18 }}>
            <ListItem padding={2}>
              <ListIcon
                as={BsFillCreditCard2FrontFill}
                color={useColorModeValue(
                  'customDarkBlueColor',
                  'customSaturatedGreenColor'
                )}
              />
              React, Next.js
            </ListItem>
            <ListItem padding={2}>
              <ListIcon
                as={BsFillCreditCard2FrontFill}
                color={useColorModeValue(
                  'customDarkBlueColor',
                  'customSaturatedGreenColor'
                )}
              />
              Sass, Tailwind, Styled components, Chakra, Bootstrap
            </ListItem>
            <ListItem padding={2}>
              <ListIcon
                as={BsFillCreditCard2FrontFill}
                color={useColorModeValue(
                  'customDarkBlueColor',
                  'customSaturatedGreenColor'
                )}
              />
              Three.js
            </ListItem>
          </List>
        </Section>
        <Section delay={0.2}>
          <Heading
            as="h3"
            variant="section-title"
            fontSize={{ base: 20, md: 25 }}
          >
            <TranslatedText localeFile="stack" text="backendTitle" />
          </Heading>
          <List fontSize={{ base: 16, md: 18 }}>
            <ListItem padding={2}>
              <ListIcon
                as={AiFillApi}
                color={useColorModeValue(
                  'customDarkBlueColor',
                  'customSaturatedGreenColor'
                )}
              />
              Node, Express
            </ListItem>
          </List>
        </Section>
        <Section delay={0.2}>
          <Heading
            as="h3"
            variant="section-title"
            fontSize={{ base: 20, md: 25 }}
          >
            <TranslatedText localeFile="stack" text="dbBackendTitle" />
          </Heading>
          <List fontSize={{ base: 16, md: 18 }}>
            <ListItem padding={2}>
              <ListIcon
                as={MdStorage}
                color={useColorModeValue(
                  'customDarkBlueColor',
                  'customSaturatedGreenColor'
                )}
              />
              MongoDB, MySQL
            </ListItem>
          </List>
        </Section>
        <Section delay={0.3}>
          <Heading
            as="h3"
            variant="section-title"
            fontSize={{ base: 20, md: 25 }}
          >
            <TranslatedText localeFile="stack" text="goalsFor2023" />
          </Heading>
          <List fontSize={{ base: 16, md: 18 }}>
            <ListItem padding={2}>
              <ListIcon
                as={FiTarget}
                color={useColorModeValue(
                  'customDarkBlueColor',
                  'customSaturatedGreenColor'
                )}
              />
              Vue, Django
            </ListItem>
          </List>
        </Section>
      </Container>
    </ArticleLayout>
  );
};

export default StackPage;
