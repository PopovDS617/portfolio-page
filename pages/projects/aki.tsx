import { Container, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { ProjectTitle, ProjectInfo, ProjectImage } from '@/entities/project';

import { Paragraph } from '@/styles';
import { ArticleLayout } from '@/widgets/layout';
import { TranslatedText } from '@/features/internalization';

const Project = () => {
  return (
    <ArticleLayout title="Aki">
      <Container>
        <ProjectTitle>
          Aki <ProjectInfo>2022</ProjectInfo>
        </ProjectTitle>
        <Paragraph>
          <TranslatedText localeFile="projects" text="catAkiDescription" />
        </Paragraph>
        <List ml={4} my={4} fontSize={{ base: 14, md: 18 }}>
          <ListItem>
            <ProjectInfo>Demo</ProjectInfo>
            <Link href="https://cat-aki.vercel.app/" isExternal>
              https://cat-aki.vercel.app <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <ProjectInfo>Stack</ProjectInfo>
            <span>Typescript, Next.js, Sass, framer motion, three.js</span>
          </ListItem>
          <ListItem>
            <ProjectInfo>Source</ProjectInfo>
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
