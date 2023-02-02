import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { ProjectTitle } from '../../components/project/ProjectTitle';
import { ProjectInfo } from '../../components/project/ProjectInfo';
import { ProjectImage } from '../../components/project/ProjectImage';
import { Paragraph } from '../../components/styles/Paragraph';
import ArticleLayout from '../../components/layouts/ArticleLayout';
import TranslatedText from '../../components/TranslatedText';

const Project = () => {
  return (
    <ArticleLayout title="Map. Addresses of bakeries">
      <Container>
        <ProjectTitle>
          Map. Addresses of bakeries <ProjectInfo>2022</ProjectInfo>
        </ProjectTitle>
        <Paragraph fontSize={{ base: 14, md: 18 }}>
          <TranslatedText localeFile="projects" text="mapBakeryDescription" />
        </Paragraph>
        <List ml={4} my={4} fontSize={{ base: 14, md: 18 }}>
          <ListItem>
            <ProjectInfo>Demo</ProjectInfo>
            <Link href="https://popov-bakery-locations.netlify.app/" isExternal>
              bakeries-locations.netlify.app <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <ProjectInfo>Stack</ProjectInfo>
            <span>Typescript, React, Leaflet</span>
          </ListItem>
          <ListItem>
            <ProjectInfo>Source</ProjectInfo>
            <Link
              href="https://github.com/PopovDS617/microservice-interactive-map"
              isExternal
            >
              github.com/PopovDS617/microservice-interactive-map
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
        <ProjectImage src="/images/projects/map-bakeries/shot-1.jpg" />
        <ProjectImage src="/images/projects/map-bakeries/shot-2.jpg" />
      </Container>
    </ArticleLayout>
  );
};

export default Project;
