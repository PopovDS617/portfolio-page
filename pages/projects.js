import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react';
import Section from '../components/Section';
import { ProjectGridItem } from '../components/grid/GridItem';
import thumbnailCryptoTracker from '../public/images/ava.jpg';
import thumbnailQuizWebsite from '../public/images/ava.jpg';
import ArticleLayout from '../components/layouts/ArticleLayout';
import useTranslation from 'next-translate/useTranslation';
import CryptoTrackerLogo from '../public/images/projects/crypto-tracker/logo.jpg';
import QuizLogo from '../public/images/projects/quiz/logo.jpg';
import HarryPotterLogo from '../public/images/projects/harry-potter-csp/logo.jpg';
import AkiLogo from '../public/images/projects/aki/logo.jpg';
import RestPleaseLogo from '../public/images/projects/rest-please/shot-1.jpg';
import MoonLogo from '../public/images/projects/the-moon/logo.jpg';
import EngGrammarLogo from '../public/images/projects/english-grammar/logo.jpg';

const ProjectsPage = () => {
  const { t } = useTranslation('projects');

  return (
    <ArticleLayout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          {t('title')}
        </Heading>
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
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.3}>
            <ProjectGridItem
              id="english-grammar"
              title="English Grammar"
              thumbnail={EngGrammarLogo}
            >
              crypto tracker 2
            </ProjectGridItem>
          </Section>
          <Section delay={0.4}>
            <ProjectGridItem
              id="second project"
              title="quiz website tracker"
              thumbnail={thumbnailQuizWebsite}
            >
              quiz website 2
            </ProjectGridItem>
          </Section>
        </SimpleGrid>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.3}>
            <ProjectGridItem
              id="first project"
              title="crypto tracker"
              thumbnail={CryptoTrackerLogo}
            >
              crypto tracker 2
            </ProjectGridItem>
          </Section>
          <Section delay={0.4}>
            <ProjectGridItem
              id="second project"
              title="quiz website tracker"
              thumbnail={thumbnailQuizWebsite}
            >
              quiz website 2
            </ProjectGridItem>
          </Section>
        </SimpleGrid>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.3}>
            <ProjectGridItem
              id="first project"
              title="crypto tracker"
              thumbnail={CryptoTrackerLogo}
            >
              crypto tracker 2
            </ProjectGridItem>
          </Section>
          <Section delay={0.4}>
            <ProjectGridItem
              id="second project"
              title="quiz website tracker"
              thumbnail={thumbnailQuizWebsite}
            >
              quiz website 2
            </ProjectGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </ArticleLayout>
  );
};

export default ProjectsPage;
