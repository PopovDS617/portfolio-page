import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react';
import Section from '../components/Section';
import { ProjectGridItem } from '../components/GridItem';
import thumbnailCryptoTracker from '../public/images/ava.jpg';
import thumbnailQuizWebsite from '../public/images/ava.jpg';

const Projects = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} gap={6}>
        <Section delay={0.1}>
          <ProjectGridItem
            id="first project"
            title="crypto tracker"
            thumbnail={thumbnailCryptoTracker}
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
    </Container>
  );
};

export default Projects;
