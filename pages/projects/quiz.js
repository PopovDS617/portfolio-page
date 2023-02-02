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
    <ArticleLayout title="Pub quiz website">
      <Container>
        <ProjectTitle>
          Pub quiz website <ProjectInfo>2022</ProjectInfo>
        </ProjectTitle>
        <Paragraph>
          <TranslatedText localeFile="projects" text="pubQuizDescription" />
        </Paragraph>
        <List ml={4} my={4} fontSize={18}>
          <ListItem>
            <ProjectInfo>Demo</ProjectInfo>
            <Link href="https://quiz-pp.vercel.app/" isExternal>
              https://quiz-pp.vercel.app <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <ProjectInfo>Stack</ProjectInfo>
            <span>Javascript, NextJS, Sass, framer motion</span>
          </ListItem>
          <ListItem>
            <ProjectInfo>Source</ProjectInfo>
            <Link
              href="https://github.com/PopovDS617/pub-quiz-project"
              isExternal
            >
              https://github.com/PopovDS617/pub-quiz-project
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
