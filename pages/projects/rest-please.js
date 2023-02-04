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
    <ArticleLayout title="Rest, please">
      <Container>
        <ProjectTitle>
          Rest, please <ProjectInfo>2022</ProjectInfo>
        </ProjectTitle>
        <Paragraph fontSize={{ base: 12 }}>
          <TranslatedText localeFile="projects" text="restPleaseDescription" />
        </Paragraph>
        <List ml={4} my={4} fontSize={{ base: 14, md: 18 }}>
          <ListItem>
            <ProjectInfo>Demo</ProjectInfo>
            <Link href="https://rest-please.vercel.app/" isExternal>
              rest-please.vercel.app <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <ProjectInfo>Stack</ProjectInfo>
            <span>TypeScript, Next.js, Tailwind, framer motion</span>
          </ListItem>
          <ListItem>
            <ProjectInfo>Source</ProjectInfo>
            <Link href="https://github.com/PopovDS617/rest-please" isExternal>
              github.com/PopovDS617/rest-please
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
        <ProjectImage src="/images/projects/rest-please/shot-1.jpg" />
        <ProjectImage src="/images/projects/rest-please/shot-2.jpg" />
        <ProjectImage src="/images/projects/rest-please/shot-3.jpg" />
      </Container>
    </ArticleLayout>
  );
};

export default Project;
