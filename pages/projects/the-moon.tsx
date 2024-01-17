import { Container, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { ProjectTitle, ProjectInfo, ProjectImage } from '@/entities/project';

import { Paragraph } from '@/styles';
import { ArticleLayout } from '@/widgets/layout';
import { TranslatedText } from '@/features/internalization';

const Project = () => {
  return (
    <ArticleLayout title="The Moon">
      <Container>
        <ProjectTitle>
          The Moon <ProjectInfo>2022</ProjectInfo>
        </ProjectTitle>
        <Paragraph>
          <TranslatedText localeFile="projects" text="theMoonDescription" />
        </Paragraph>
        <List ml={4} my={4} fontSize={{ base: 14, md: 18 }}>
          <ListItem>
            <ProjectInfo>Demo</ProjectInfo>
            <Link href="https://moon-pp.netlify.app/" isExternal>
              moon-pp.netlify.app <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <ProjectInfo>Stack</ProjectInfo>
            <span>Javascript, React, three.js</span>
          </ListItem>
          <ListItem>
            <ProjectInfo>Source</ProjectInfo>
            <Link href="https://github.com/PopovDS617/the-moon" isExternal>
              github.com/PopovDS617/the-moon
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
