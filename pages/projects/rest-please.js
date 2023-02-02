import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { ProjectTitle } from '../../components/project/ProjectTitle';
import { ProjectMeta } from '../../components/project/ProjectMeta';
import { ProjectImage } from '../../components/project/ProjectImage';
import { Paragraph } from '../../components/styles/Paragraph';
import ArticleLayout from '../../components/layouts/ArticleLayout';

const Project = () => {
  return (
    <ArticleLayout title="Rest, please">
      <Container>
        <ProjectTitle>
          Rest, please <ProjectMeta>2022</ProjectMeta>
        </ProjectTitle>
        <Paragraph>-------</Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <ProjectMeta>Demo</ProjectMeta>
            <Link href="https://rest-please.vercel.app/" isExternal>
              https://rest-please.vercel.app <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <ProjectMeta>Stack</ProjectMeta>
            <span>React, TypeScript</span>
          </ListItem>
          <ListItem>
            <ProjectMeta>Source</ProjectMeta>
            <Link href="https://github.com/PopovDS617/rest-please" isExternal>
              https://github.com/PopovDS617/rest-please
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
        <ProjectImage src="/images/projects/rest-please/shot-1.jpg" />
        <ProjectImage src="/images/projects/rest-please/shot-2.jpg" />
        <ProjectImage src="/images/projects/rest-please/shot-3.jpg" />
      </Container>
    </ArticleLayout>
  );
};

export default Project;
