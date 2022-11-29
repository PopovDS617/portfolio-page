import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { ProjectTitle } from '../../components/project/ProjectTitle';
import { ProjectMeta } from '../../components/project/ProjectMeta';
import { ProjectImage } from '../../components/project/ProjectImage';
import { Paragraph } from '../../components/styles/Paragraph';
import ArticleLayout from '../../components/layouts/ArticleLayout';

import firstPicture from './../../public/images/projects/crypto-tracker/shot-1.jpg';
import secondPicture from './../../public/images/projects/crypto-tracker/shot-2.jpg';
import thirdPicture from './../../public/images/projects/crypto-tracker/shot-3.jpg';
import fourthPicture from './../../public/images/projects/crypto-tracker/shot-4.jpg';

const Project = () => {
  return (
    <ArticleLayout title="crypto tracker">
      <Container>
        <ProjectTitle>
          Crypto Tracker <Badge>2022</Badge>
        </ProjectTitle>
        <Paragraph>
          a simple app for tracking of buying and selling crypto assets
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <ProjectMeta>Demo</ProjectMeta>
            <Link href="https://crypto-trkr.netlify.app" isExternal>
              https://crypto-trkr.netlify.app <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <ProjectMeta>Stack</ProjectMeta>
            <span>React, TypeScript</span>
          </ListItem>
          <ListItem>
            <ProjectMeta>Source</ProjectMeta>
            <Link
              href="https://github.com/PopovDS617/crypto-tracker-app"
              isExternal
            >
              https://github.com/PopovDS617/crypto-tracker-app
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ProjectImage src="/images/projects/crypto-tracker/shot-1.jpg" />
          <ProjectImage src="/images/projects/crypto-tracker/shot-2.jpg" />
          <ProjectImage src="/images/projects/crypto-tracker/shot-3.jpg" />
          <ProjectImage src="/images/projects/crypto-tracker/shot-4.jpg" />
        </List>
      </Container>
    </ArticleLayout>
  );
};

export default Project;
