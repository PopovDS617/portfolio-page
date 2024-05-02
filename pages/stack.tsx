import { Container, Heading, Box, useColorModeValue, List, ListItem, ListIcon, Divider } from '@chakra-ui/react';
import { Section } from '@/shared/ui';

import { ArticleLayout } from '@/widgets/layout';
import { TranslatedText } from '@/features/internalization';
import { AiFillApi } from 'react-icons/ai';
import { MdStorage } from 'react-icons/md';
import { BsFillCreditCard2FrontFill, BsTranslate } from 'react-icons/bs';
import { FiTarget } from 'react-icons/fi';
import { BiTestTube } from 'react-icons/bi';

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
          <Heading as="h2" variant="page-title" textAlign="center" pt={6} fontSize={{ base: 20, md: 30 }}>
            <TranslatedText localeFile="stack" text="pageTitle" />
          </Heading>
          <Divider my={6} />
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title" fontSize={{ base: 20, md: 25 }}>
            <TranslatedText localeFile="stack" text="languagesTitle" />
          </Heading>
          <List fontSize={{ base: 16, md: 18 }}>
            <ListItem>
              <ListIcon
                as={BsTranslate}
                color={useColorModeValue('customDarkBlueColor', 'customSaturatedGreenColor')}
              />
              Go, Javascript (Typescript)
            </ListItem>
          </List>
        </Section>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title" fontSize={{ base: 20, md: 25 }}>
            <TranslatedText localeFile="stack" text="backendTitle" />
          </Heading>
          <List fontSize={{ base: 16, md: 18 }}>
            <ListItem>
              <ListIcon as={AiFillApi} color={useColorModeValue('customDarkBlueColor', 'customSaturatedGreenColor')} />
              Go - Gin, Fiber, Gorilla
            </ListItem>
            <ListItem>
              <ListIcon as={AiFillApi} color={useColorModeValue('customDarkBlueColor', 'customSaturatedGreenColor')} />
              JS - Node, Express, NestJS
            </ListItem>
          </List>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title" fontSize={{ base: 20, md: 25 }}>
            <TranslatedText localeFile="stack" text="dbBackendTitle" />
          </Heading>
          <List fontSize={{ base: 16, md: 18 }}>
            <ListItem>
              <ListIcon as={MdStorage} color={useColorModeValue('customDarkBlueColor', 'customSaturatedGreenColor')} />
              PostgreSQL, MySQL
            </ListItem>
            <ListItem>
              <ListIcon as={MdStorage} color={useColorModeValue('customDarkBlueColor', 'customSaturatedGreenColor')} />
              MongoDB
            </ListItem>
            <ListItem>
              <ListIcon as={MdStorage} color={useColorModeValue('customDarkBlueColor', 'customSaturatedGreenColor')} />
              Redis, Memcached
            </ListItem>
          </List>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title" fontSize={{ base: 20, md: 25 }}>
            <TranslatedText localeFile="stack" text="frontendTitle" />
          </Heading>
          <List fontSize={{ base: 16, md: 18 }}>
            <ListItem>
              <ListIcon
                as={BsFillCreditCard2FrontFill}
                color={useColorModeValue('customDarkBlueColor', 'customSaturatedGreenColor')}
              />
              React, Next.js
            </ListItem>
            <ListItem>
              <ListIcon
                as={BsFillCreditCard2FrontFill}
                color={useColorModeValue('customDarkBlueColor', 'customSaturatedGreenColor')}
              />
              sass, tailwind, styled components, chakra, bootstrap
            </ListItem>
            <ListItem>
              <ListIcon
                as={BsFillCreditCard2FrontFill}
                color={useColorModeValue('customDarkBlueColor', 'customSaturatedGreenColor')}
              />
              three.js
            </ListItem>
          </List>
        </Section>
        {/* <Section delay={0.3}>
          <Heading as="h3" variant="section-title" fontSize={{ base: 20, md: 25 }}>
            <TranslatedText localeFile="stack" text="testingTitle" />
          </Heading>
          <List fontSize={{ base: 16, md: 18 }}>
            <ListItem>
              <ListIcon as={BiTestTube} color={useColorModeValue('customDarkBlueColor', 'customSaturatedGreenColor')} />
              Jest, React testing library, Cypress, Mocha
            </ListItem>
          </List>
        </Section> */}
        {/* <Section delay={0.3}>
          <Heading as="h3" variant="section-title" fontSize={{ base: 20, md: 25 }}>
            <TranslatedText localeFile="stack" text="goalsFor2023" />
          </Heading>
          <List fontSize={{ base: 16, md: 18 }}>
            <ListItem>
              <ListIcon as={FiTarget} color={useColorModeValue('customDarkBlueColor', 'customSaturatedGreenColor')} />
              Vue, Django
            </ListItem>
          </List>
        </Section> */}
      </Container>
    </ArticleLayout>
  );
};

export default StackPage;
