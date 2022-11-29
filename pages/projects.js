import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react';
import Section from '../components/Section';
import { ProjectGridItem } from '../components/grid/GridItem';
import thumbnailCryptoTracker from '../public/images/ava.jpg';
import thumbnailQuizWebsite from '../public/images/ava.jpg';
import ArticleLayout from '../components/layouts/ArticleLayout';
import useTranslation from 'next-translate/useTranslation';
import CryptoTrackerLogo from '../public/images/projects/crypto-tracker/logo.jpg';

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
              title="crypto tracker"
              thumbnail={CryptoTrackerLogo}
            >
              crypto tracker
            </ProjectGridItem>
          </Section>
          <Section delay={0.2}>
            <ProjectGridItem
              id="second project"
              title="quiz website tracker"
              thumbnail={thumbnailQuizWebsite}
            >
              quiz website
            </ProjectGridItem>
          </Section>
        </SimpleGrid>
        <Divider my={6} />
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
