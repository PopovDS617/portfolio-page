import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { ProjectTitle } from '../../components/project/ProjectTitle';
import { ProjectMeta } from '../../components/project/ProjectMeta';
import { ProjectImage } from '../../components/project/ProjectImage';
import { Paragraph } from '../../components/styles/Paragraph';
import ArticleLayout from '../../components/layouts/ArticleLayout';

const Project = () => {
  return (
    <ArticleLayout title="Map. Point-to-point route">
      <Container>
        <ProjectTitle>
          Map. Point-to-point route <Badge>2022</Badge>
        </ProjectTitle>
        <Paragraph>-------</Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <ProjectMeta>Demo</ProjectMeta>
            <Link href="p-t-p-map-routing.vercel.app/" isExternal>
              p-t-p-map-routing.vercel.app <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <ProjectMeta>Stack</ProjectMeta>
            <span>React, TypeScript</span>
          </ListItem>
          <ListItem>
            <ProjectMeta>Source</ProjectMeta>
            <Link
              href="https://github.com/PopovDS617/map-point-to-point-routing"
              isExternal
            >
              https://github.com/PopovDS617/map-point-to-point-routing
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
