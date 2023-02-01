import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { ProjectTitle } from '../../components/project/ProjectTitle';
import { ProjectMeta } from '../../components/project/ProjectMeta';
import { ProjectImage } from '../../components/project/ProjectImage';
import { Paragraph } from '../../components/styles/Paragraph';
import ArticleLayout from '../../components/layouts/ArticleLayout';

const Project = () => {
  return (
    <ArticleLayout title="Aki">
      <Container>
        <ProjectTitle>
          Aki <Badge>2022</Badge>
        </ProjectTitle>
        <Paragraph>-------</Paragraph>
        <List ml={4} my={4} fontSize={18}>
          <ListItem>
            <ProjectMeta>Demo</ProjectMeta>
            <Link href="https://cat-aki.vercel.app/" isExternal>
              https://cat-aki.vercel.app <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <ProjectMeta>Stack</ProjectMeta>
            <span>Typescript, NextJS, Sass, framer motion, threeJS</span>
          </ListItem>
          <ListItem>
            <ProjectMeta>Source</ProjectMeta>
            <Link href="https://github.com/PopovDS617/aki" isExternal>
              https://github.com/PopovDS617/aki
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
        <ProjectImage src="/images/projects/aki/shot-0.jpg" />
        <ProjectImage src="/images/projects/aki/shot-1.jpg" />
        <ProjectImage src="/images/projects/aki/shot-2.jpg" />
        <ProjectImage src="/images/projects/aki/shot-3.jpg" />
      </Container>
    </ArticleLayout>
  );
};

export default Project;
