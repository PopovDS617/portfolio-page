import { Container, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { ProjectTitle, ProjectInfo, ProjectImage } from '@/entities/project';

import { Paragraph } from '@/styles';
import { ArticleLayout } from '@/widgets/layout';
import { TranslatedText } from '@/features/internalization';

const Project = () => {
  return (
    <ArticleLayout title="Markdown blog">
      <Container>
        <ProjectTitle>
          Markdown blog <ProjectInfo>2024</ProjectInfo>
        </ProjectTitle>
        <Paragraph>
          <TranslatedText localeFile="projects" text="mdBlogDescription" />
        </Paragraph>
        <List ml={4} my={4} fontSize={{ base: 14, md: 18 }}>
          <ListItem>
            <ProjectInfo>Stack</ProjectInfo>
            <span>Go</span>
          </ListItem>
          <ListItem>
            <ProjectInfo>Source</ProjectInfo>
            <Link href="https://github.com/PopovDS617/go_markdown_blog" isExternal>
              https://github.com/PopovDS617/go_markdown_blog
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
        <ProjectImage src="/images/projects/mdblog/shot-0.jpg" />
        <ProjectImage src="/images/projects/mdblog/shot-1.jpg" />
        <ProjectImage src="/images/projects/mdblog/shot-2.jpg" />
        <ProjectImage src="/images/projects/mdblog/shot-3.jpg" />
      </Container>
    </ArticleLayout>
  );
};

export default Project;
