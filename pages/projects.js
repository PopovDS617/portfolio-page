import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react';
import Section from '../components/Section';
import { ProjectGridItem } from '../components/grid/ProjectGridItem';

import ArticleLayout from '../components/layouts/ArticleLayout';
import TranslatedText from '../components/TranslatedText';

const ProjectsPage = () => {
  return (
    <ArticleLayout>
      <Container>
        <Heading
          as="h3"
          fontSize={{ base: 20, md: 30 }}
          mb={4}
          pt={6}
          textAlign="center"
        >
          <TranslatedText localeFile="projects" text="pageTitle" />
        </Heading>
        <Divider my={6} />
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.2}>
            <ProjectGridItem
              id="snake-game"
              title="Snake game"
              thumbnail="/images/projects/snake-game/logo.jpg"
            />
          </Section>
          <Section delay={0.1}>
            <ProjectGridItem
              id="url-shortener"
              title="URL shortener"
              thumbnail="/images/projects/url-shortener/logo.jpg"
            />
          </Section>
        </SimpleGrid>
        <Divider my={6} />
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.2}>
            <ProjectGridItem
              id="rest-please"
              title="Rest, please"
              thumbnail="/images/projects/rest-please/logo.jpg"
            />
          </Section>
          <Section delay={0.4}>
            <ProjectGridItem
              id="quiz"
              title="Pub quiz website"
              thumbnail="/images/projects/quiz/logo.jpg"
            />
          </Section>
        </SimpleGrid>
        <Divider my={6} />
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.5}>
            <ProjectGridItem
              id="harry-potter-csp"
              title="Harry Potter CSP"
              thumbnail="/images/projects/harry-potter-csp/logo.jpg"
            />
          </Section>
          <Section delay={0.6}>
            <ProjectGridItem
              id="crypto-tracker"
              title="Crypto tracker"
              thumbnail="/images/projects/crypto-tracker/logo.jpg"
            />
          </Section>
        </SimpleGrid>
        <Divider my={6} />
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.7}>
            <ProjectGridItem
              id="aki"
              title="Cat Aki"
              thumbnail="/images/projects/aki/logo.jpg"
            />
          </Section>
          <Section delay={0.7}>
            <ProjectGridItem
              id="english-grammar"
              title="English Grammar"
              thumbnail="/images/projects/english-grammar/logo.jpg"
            />
          </Section>
        </SimpleGrid>
        <Divider my={6} />
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.7}>
            <ProjectGridItem
              id="the-moon"
              title="the Moon"
              thumbnail="/images/projects/the-moon/logo.jpg"
            />
          </Section>
          <Section delay={1}>
            <ProjectGridItem
              id="map-point-to-point"
              title="Map. Point-to-point route"
              thumbnail="/images/projects/map-point-to-point/logo.jpg"
            />
          </Section>
        </SimpleGrid>
        <Divider my={6} />
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.7}>
            <ProjectGridItem
              id="map-delivery-warehouse"
              title="Map. Delivery from a warehouse"
              thumbnail="/images/projects/map-warehouse/logo.jpg"
            />
          </Section>
          <Section delay={0.7}>
            <ProjectGridItem
              id="map-bakeries-locations"
              title="Map. Addresses of bakeries"
              thumbnail="/images/projects/map-bakeries/logo.jpg"
            />
          </Section>
        </SimpleGrid>
        <Divider my={6} />
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.7}>
            <ProjectGridItem
              id="weather-forecast"
              title="Weather forecast"
              thumbnail="/images/projects/weather-forecast/logo.jpg"
            />
          </Section>
        </SimpleGrid>
      </Container>
    </ArticleLayout>
  );
};

export default ProjectsPage;
