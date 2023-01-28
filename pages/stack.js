import { Container, Heading } from '@chakra-ui/react';
import Section from '../components/Section';
import { Paragraph } from '../components/styles/Paragraph';

import ArticleLayout from '../components/layouts/ArticleLayout';

import useTranslation from 'next-translate/useTranslation';

const StackPage = () => {
  const { t } = useTranslation('common');

  return (
    <ArticleLayout>
      <Container>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            front
          </Heading>
          <Paragraph fontSize={20}>
            Hello this is mine description hello and welcome
          </Paragraph>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            back
          </Heading>
          <Paragraph fontSize={20}>
            Hello this is mine description hello and welcome
          </Paragraph>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            db
          </Heading>
          <Paragraph fontSize={20}>
            Hello this is mine description hello and welcome
          </Paragraph>
        </Section>
        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            to do
          </Heading>
          <Paragraph fontSize={20}>
            Hello this is mine description hello and welcome
          </Paragraph>
        </Section>
      </Container>
    </ArticleLayout>
  );
};

export default StackPage;
