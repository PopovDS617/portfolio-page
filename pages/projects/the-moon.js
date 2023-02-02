import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { ProjectTitle } from '../../components/project/ProjectTitle';
import { ProjectMeta } from '../../components/project/ProjectMeta';
import { ProjectImage } from '../../components/project/ProjectImage';
import { Paragraph } from '../../components/styles/Paragraph';
import ArticleLayout from '../../components/layouts/ArticleLayout';

const Project = () => {
  return (
    <ArticleLayout title="The Moon">
      <Container>
        <ProjectTitle>
          The Moon <ProjectMeta>2022</ProjectMeta>
        </ProjectTitle>
        <Paragraph>-------</Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <ProjectMeta>Demo</ProjectMeta>
            <Link href="https://moon-pp.netlify.app/" isExternal>
              https://moon-pp.netlify.app <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <ProjectMeta>Stack</ProjectMeta>
            <span>React, TypeScript</span>
          </ListItem>
          <ListItem>
            <ProjectMeta>Source</ProjectMeta>
            <Link href="https://github.com/PopovDS617/the-moon" isExternal>
              https://github.com/PopovDS617/the-moon
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
        <ProjectImage src="/images/projects/the-moon/shot-1.jpg" />
      </Container>
    </ArticleLayout>
  );
};

export default Project;
