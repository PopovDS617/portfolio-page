import { Container, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { ProjectTitle, ProjectInfo, ProjectImage } from '@/entities/project';

import { Paragraph } from '@/styles';
import { ArticleLayout } from '@/widgets/layout';
import { TranslatedText } from '@/features/internalization';

const Project = () => {
  return (
    <ArticleLayout title="Snake game">
      <Container>
        <ProjectTitle>
          Snake game <ProjectInfo>2023</ProjectInfo>
        </ProjectTitle>
        <Paragraph>
          <TranslatedText localeFile="projects" text="snakeGameDescription" />
        </Paragraph>
        <List ml={4} my={4} fontSize={{ base: 14, md: 18 }}>
          <ListItem>
            <ProjectInfo>Demo</ProjectInfo>
            <Link href="https://snake-petprj.vercel.app/" isExternal>
              snake-petprj.vercel.app <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <ProjectInfo>Stack</ProjectInfo>
            <span>React, Redux, Sass, framer-motion</span>
          </ListItem>
          <ListItem>
            <ProjectInfo>Source</ProjectInfo>
            <Link href="https://github.com/PopovDS617/snake-game" isExternal>
              github.com/PopovDS617/snake-game
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
        <ProjectImage
          src="/images/projects/snake-game/shot-1.jpg"
          width={615}
          height={800}
        />
        <ProjectImage
          src="/images/projects/snake-game/shot-2.jpg"
          width={615}
          height={800}
        />
      </Container>
    </ArticleLayout>
  );
};

export default Project;
