import { Container, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { ProjectTitle, ProjectInfo, ProjectImage } from '@/entities/project';

import { Paragraph } from '@/styles';
import { ArticleLayout } from '@/widgets/layout';
import { TranslatedText } from '@/features/internalization';

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
        <List ml={4} my={4} fontSize={{ base: 14, md: 18 }}>
          <ListItem>
            <ProjectInfo>Demo</ProjectInfo>
            <Link href="https://quiz-pp.vercel.app/" isExternal>
              https://quiz-pp.vercel.app <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <ProjectInfo>Stack</ProjectInfo>
            <span>Javascript, Next.js, Sass, framer motion</span>
          </ListItem>
          <ListItem>
            <ProjectInfo>Source</ProjectInfo>
            <Link href="https://github.com/PopovDS617/pub-quiz-project" isExternal>
              github.com/PopovDS617/pub-quiz-project
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
