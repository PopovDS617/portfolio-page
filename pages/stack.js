import {
  Container,
  Box,
  Heading,
  useColorModeValue,
  Icon
} from '@chakra-ui/react';
import Section from '../components/Section';
import { Paragraph } from '../components/styles/Paragraph';

import ArticleLayout from '../components/layouts/ArticleLayout';

const StackPage = () => {
  return (
    <ArticleLayout>
      <Container>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              мой стек
            </Heading>
            <p>мой стек</p>
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            стек
          </Heading>
          <Paragraph>
            Hello this is mine description hello and welcome
          </Paragraph>
        </Section>
      </Container>
    </ArticleLayout>
  );
};

export default StackPage;
