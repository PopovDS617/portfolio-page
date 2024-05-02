import { Container, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { ProjectTitle, ProjectInfo, ProjectImage } from '@/entities/project';

import { Paragraph } from '@/styles';
import { ArticleLayout } from '@/widgets/layout';
import { TranslatedText } from '@/features/internalization';

const Project = () => {
  return (
    <ArticleLayout title="Google OAuth">
      <Container>
        <ProjectTitle>
          Google OAuth <ProjectInfo>2024</ProjectInfo>
        </ProjectTitle>
        <Paragraph>
          <TranslatedText localeFile="projects" text="googleOauthDescription" />
        </Paragraph>
        <List ml={4} my={4} fontSize={{ base: 14, md: 18 }}>
          <ListItem>
            <ProjectInfo>Stack</ProjectInfo>
            <span>Go</span>
          </ListItem>
          <ListItem>
            <ProjectInfo>Source</ProjectInfo>
            <Link href="https://github.com/PopovDS617/go_oauth2_example" isExternal>
              https://github.com/PopovDS617/go_oauth2_example
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
        <ProjectImage src="/images/projects/oauth/shot-0.jpg" />
        <ProjectImage src="/images/projects/oauth/shot-1.jpg" />
        <ProjectImage src="/images/projects/oauth/shot-2.jpg" />
      </Container>
    </ArticleLayout>
  );
};

export default Project;
