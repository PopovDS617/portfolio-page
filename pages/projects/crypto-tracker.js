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
    <ArticleLayout title="crypto tracker">
      <Container>
        <ProjectTitle>
          Crypto Tracker <ProjectInfo>2022</ProjectInfo>
        </ProjectTitle>
        <Paragraph fontSize={{ base: 14, md: 18 }}>
          <TranslatedText
            localeFile="projects"
            text="cryptoTrackerDescription"
          />
        </Paragraph>
        <List ml={4} my={4} fontSize={{ base: 14, md: 18 }}>
          <ListItem>
            <ProjectInfo>Demo</ProjectInfo>
            <Link href="https://crypto-trkr.netlify.app" isExternal>
              https://crypto-trkr.netlify.app <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <ProjectInfo>Stack</ProjectInfo>
            <span>Typescript, React, CSS</span>
          </ListItem>
          <ListItem>
            <ProjectInfo>Source</ProjectInfo>
            <Link
              href="https://github.com/PopovDS617/crypto-tracker-app"
              isExternal
            >
              https://github.com/PopovDS617/crypto-tracker-app
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
        <ProjectImage src="/images/projects/crypto-tracker/shot-1.jpg" />
        <ProjectImage src="/images/projects/crypto-tracker/shot-2.jpg" />
        <ProjectImage src="/images/projects/crypto-tracker/shot-3.jpg" />
        <ProjectImage src="/images/projects/crypto-tracker/shot-4.jpg" />
        <ProjectImage src="/images/projects/crypto-tracker/shot-5.jpg" />
      </Container>
    </ArticleLayout>
  );
};

export default Project;
