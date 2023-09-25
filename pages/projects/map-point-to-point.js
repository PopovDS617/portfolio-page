import { Container, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { ProjectTitle } from '../../components/project/ProjectTitle';
import { ProjectInfo } from '../../components/project/ProjectInfo';
import { ProjectImage } from '../../components/project/ProjectImage';
import { Paragraph } from '../../components/styles/Paragraph';
import ArticleLayout from '../../components/layouts/ArticleLayout';
import TranslatedText from '../../components/TranslatedText';
const Project = () => {
  return (
    <ArticleLayout title="Map. Point-to-point route">
      <Container>
        <ProjectTitle>
          Map. Point-to-point route <ProjectInfo>2022</ProjectInfo>
        </ProjectTitle>
        <Paragraph fontSize={{ base: 14, md: 18 }}>
          <TranslatedText localeFile="projects" text="mapRoutingDescription" />
        </Paragraph>
        <List ml={4} my={4} fontSize={{ base: 14, md: 18 }}>
          <ListItem>
            <ProjectInfo>Demo</ProjectInfo>
            <Link href="https://p-t-p-map-routing.vercel.app/" isExternal>
              p-t-p-map-routing.vercel.app <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <ProjectInfo>Stack</ProjectInfo>
            <span>Javascript, React, TomTom SDK</span>
          </ListItem>
          <ListItem>
            <ProjectInfo>Source</ProjectInfo>
            <Link
              href="https://github.com/PopovDS617/map-point-to-point-routing"
              isExternal
            >
              github.com/PopovDS617/map-point-to-point-routing
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
        <ProjectImage src="/images/projects/map-point-to-point/shot-1.jpg" />
        <ProjectImage src="/images/projects/map-point-to-point/shot-2.jpg" />
      </Container>
    </ArticleLayout>
  );
};

export default Project;
