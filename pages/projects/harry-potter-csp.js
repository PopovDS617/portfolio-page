import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { ProjectTitle } from '../../components/project/ProjectTitle';
import { ProjectMeta } from '../../components/project/ProjectMeta';
import { ProjectImage } from '../../components/project/ProjectImage';
import { Paragraph } from '../../components/styles/Paragraph';
import ArticleLayout from '../../components/layouts/ArticleLayout';

const Project = () => {
  return (
    <ArticleLayout title="Harry Potter CSP">
      <Container>
        <ProjectTitle>
          Harry Potter CSP <Badge>2022</Badge>
        </ProjectTitle>
        <Paragraph>List of characters, spells and potions</Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <ProjectMeta>Demo</ProjectMeta>
            <Link href="https://harry-potter-pp.vercel.app/" isExternal>
              https://harry-potter-pp.vercel.app <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <ProjectMeta>Stack</ProjectMeta>
            <span>React, TypeScript</span>
          </ListItem>
          <ListItem>
            <ProjectMeta>Source</ProjectMeta>
            <Link href="https://github.com/PopovDS617/harry-potter" isExternal>
              https://github.com/PopovDS617/crypto-tracker-app
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
        <ProjectImage src="/images/projects/harry-potter-csp/shot-1.jpg" />
        <ProjectImage src="/images/projects/harry-potter-csp/shot-2.jpg" />
        <ProjectImage src="/images/projects/harry-potter-csp/shot-3.jpg" />
      </Container>
    </ArticleLayout>
  );
};

export default Project;
