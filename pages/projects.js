import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react';
import Section from '../components/Section';
import { ProjectGridItem } from '../components/grid/GridItem';

import ArticleLayout from '../components/layouts/ArticleLayout';
import useTranslation from 'next-translate/useTranslation';
import CryptoTrackerLogo from '../public/images/projects/crypto-tracker/logo.jpg';
import QuizLogo from '../public/images/projects/quiz/logo.jpg';
import HarryPotterLogo from '../public/images/projects/harry-potter-csp/logo.jpg';
import AkiLogo from '../public/images/projects/aki/logo.jpg';
import RestPleaseLogo from '../public/images/projects/rest-please/logo.jpg';
import MoonLogo from '../public/images/projects/the-moon/logo.jpg';
import EngGrammarLogo from '../public/images/projects/english-grammar/logo.jpg';
import MapBakeriesLogo from '../public/images/projects/map-bakeries/logo.jpg';
import MapP2PLogo from '../public/images/projects/map-point-to-point/logo.jpg';
import MapWarehouseLogo from '../public/images/projects/map-warehouse/logo.jpg';
import WForecastLogo from '../public/images/projects/weather-forecast/logo.jpg';
import TranslatedText from '../components/TranslatedText';

const ProjectsPage = () => {
  return (
    <ArticleLayout>
      <Container>
        <Heading as="h3" fontSize={26} mb={4}>
          <TranslatedText localeFile="projects" text="pageTitle" />
        </Heading>
        <Divider my={6} />
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.1}>
            <ProjectGridItem
              id="crypto-tracker"
              title="Crypto tracker"
              thumbnail={CryptoTrackerLogo}
            />
          </Section>
          <Section delay={0.2}>
            <ProjectGridItem
              id="quiz"
              title="Pub quiz website"
              thumbnail={QuizLogo}
            />
          </Section>
        </SimpleGrid>
        <Divider my={6} />
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.3}>
            <ProjectGridItem
              id="harry-potter-csp"
              title="Harry Potter CSP"
              thumbnail={HarryPotterLogo}
            />
          </Section>
          <Section delay={0.4}>
            <ProjectGridItem id="aki" title="Cat Aki" thumbnail={AkiLogo} />
          </Section>
        </SimpleGrid>
        <Divider my={6} />
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.3}>
            <ProjectGridItem
              id="rest-please"
              title="Rest, please"
              thumbnail={RestPleaseLogo}
            />
          </Section>
          <Section delay={0.4}>
            <ProjectGridItem
              id="the-moon"
              title="the Moon"
              thumbnail={MoonLogo}
            />
          </Section>
        </SimpleGrid>
        <Divider my={6} />
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.3}>
            <ProjectGridItem
              id="english-grammar"
              title="English Grammar"
              thumbnail={EngGrammarLogo}
            />
          </Section>
          <Section delay={0.4}>
            <ProjectGridItem
              id="map-bakeries-locations"
              title="Map. Addresses of bakeries"
              thumbnail={MapBakeriesLogo}
            />
          </Section>
        </SimpleGrid>
        <Divider my={6} />
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.3}>
            <ProjectGridItem
              id="map-point-to-point"
              title="Map. Point-to-point route"
              thumbnail={MapP2PLogo}
            />
          </Section>
          <Section delay={0.4}>
            <ProjectGridItem
              id="map-delivery-warehouse"
              title="Map. Delivery from a warehouse"
              thumbnail={MapWarehouseLogo}
            />
          </Section>
        </SimpleGrid>
        <Divider my={6} />
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.3}>
            <ProjectGridItem
              id="weather-forecast"
              title="Weather forecast"
              thumbnail={WForecastLogo}
            />
          </Section>
        </SimpleGrid>
      </Container>
    </ArticleLayout>
  );
};

export default ProjectsPage;
