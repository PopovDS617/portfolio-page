import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { ProjectTitle } from '../../components/project/ProjectTitle';
import { ProjectMeta } from '../../components/project/ProjectMeta';
import { ProjectImage } from '../../components/project/ProjectImage';
import { Paragraph } from '../../components/styles/Paragraph';
import ArticleLayout from '../../components/layouts/ArticleLayout';

const Project = () => {
  return (
    <ArticleLayout title="Map. Addresses of bakeries">
      <Container>
        <ProjectTitle>
          Map. Addresses of bakeries <ProjectMeta>2022</ProjectMeta>
        </ProjectTitle>
        <Paragraph>-------</Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <ProjectMeta>Demo</ProjectMeta>
            <Link href="popov-bakery-locations.netlify.app/" isExternal>
              popov-bakeries-locations.netlify.app <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <ProjectMeta>Stack</ProjectMeta>
            <span>React, TypeScript</span>
          </ListItem>
          <ListItem>
            <ProjectMeta>Source</ProjectMeta>
            <Link
              href="https://github.com/PopovDS617/microservice-interactive-map"
              isExternal
            >
              https://github.com/PopovDS617/microservice-interactive-map
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
