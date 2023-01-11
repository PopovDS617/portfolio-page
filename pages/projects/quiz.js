import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { ProjectTitle } from '../../components/project/ProjectTitle';
import { ProjectMeta } from '../../components/project/ProjectMeta';
import { ProjectImage } from '../../components/project/ProjectImage';
import { Paragraph } from '../../components/styles/Paragraph';
import ArticleLayout from '../../components/layouts/ArticleLayout';

const Project = () => {
  return (
    <ArticleLayout title="Pub quiz website">
      <Container>
        <ProjectTitle>
          Pub quiz website <Badge>2022</Badge>
        </ProjectTitle>
        <Paragraph>-------</Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <ProjectMeta>Demo</ProjectMeta>
            <Link href="https://quiz-pp.vercel.app/" isExternal>
              https://quiz-pp.vercel.app <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <ProjectMeta>Stack</ProjectMeta>
            <span>React, TypeScript</span>
          </ListItem>
          <ListItem>
            <ProjectMeta>Source</ProjectMeta>
            <Link
              href="https://github.com/PopovDS617/pub-quiz-project"
              isExternal
            >
              https://github.com/PopovDS617/crypto-tracker-app
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
        <ProjectImage src="/images/projects/quiz/shot-1.jpg" />
        <ProjectImage src="/images/projects/quiz/shot-2.jpg" />
        <ProjectImage src="/images/projects/quiz/shot-3.jpg" />
        <ProjectImage src="/images/projects/quiz/shot-4.jpg" />
        <ProjectImage src="/images/projects/quiz/shot-5.jpg" />
      </Container>
    </ArticleLayout>
  );
};

export default Project;
