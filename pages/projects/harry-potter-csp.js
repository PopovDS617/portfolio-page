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
    <ArticleLayout title="Harry Potter CSP">
      <Container>
        <ProjectTitle>
          Harry Potter CSP <ProjectInfo>2022</ProjectInfo>
        </ProjectTitle>
        <Paragraph fontSize={{ base: 14, md: 18 }}>
          <TranslatedText localeFile="projects" text="harryPotterDescription" />
        </Paragraph>
        <List ml={4} my={4} fontSize={{ base: 14, md: 18 }}>
          <ListItem>
            <ProjectInfo>Demo</ProjectInfo>
            <Link href="https://harry-potter-pp.vercel.app/" isExternal>
              harry-potter-pp.vercel.app <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <ProjectInfo>Stack</ProjectInfo>
            <span>Typescript, Next.js, Redux, Sass, framer motion</span>
          </ListItem>
          <ListItem>
            <ProjectInfo>Source</ProjectInfo>
            <Link href="https://github.com/PopovDS617/harry-potter" isExternal>
              github.com/PopovDS617/harry-potter
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
        <ProjectImage src="/images/projects/harry-potter-csp/shot-1.jpg" />
        <ProjectImage src="/images/projects/harry-potter-csp/shot-2.jpg" />
        <ProjectImage src="/images/projects/harry-potter-csp/shot-3.jpg" />
        <ProjectImage src="/images/projects/harry-potter-csp/shot-4.jpg" />
      </Container>
    </ArticleLayout>
  );
};

export default Project;
