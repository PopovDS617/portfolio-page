import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { ProjectTitle } from '../../components/project/ProjectTitle';
import { ProjectMeta } from '../../components/project/ProjectMeta';
import { ProjectImage } from '../../components/project/ProjectImage';
import { Paragraph } from '../../components/styles/Paragraph';
import ArticleLayout from '../../components/layouts/ArticleLayout';
import TranslatedText from '../../components/TranslatedText';

const Project = () => {
  return (
    <ArticleLayout title="English Grammar">
      <Container>
        <ProjectTitle>
          English Grammar <ProjectMeta>2022</ProjectMeta>
        </ProjectTitle>
        <Paragraph>
          <TranslatedText
            localeFile="projects"
            text="englishGrammarDescription"
          />
        </Paragraph>
        <List ml={4} my={4} fontSize={18}>
          <ListItem>
            <ProjectMeta>Demo</ProjectMeta>
            <Link href="https://eng-grammar.vercel.app/" isExternal>
              https://eng-grammar.vercel.app <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <ProjectMeta>Stack</ProjectMeta>
            <span>Typescript, NextJS, Tailwind, framer motion</span>
          </ListItem>
          <ListItem>
            <ProjectMeta>Source</ProjectMeta>
            <Link href="https://github.com/PopovDS617/eng-gram" isExternal>
              https://github.com/PopovDS617/eng-gram
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
        <ProjectImage src="/images/projects/english-grammar/shot-1.jpg" />
        <ProjectImage src="/images/projects/english-grammar/shot-2.jpg" />
        <ProjectImage src="/images/projects/english-grammar/shot-3.jpg" />
      </Container>
    </ArticleLayout>
  );
};

export default Project;
