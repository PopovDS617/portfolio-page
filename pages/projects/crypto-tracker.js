import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { ProjectTitle } from '../../components/project/ProjectTitle';
import { ProjectImage } from '../../components/project/ProjectImage';
import { ProjectMeta } from '../../components/project/ProjectMeta';

import { Paragraph } from '../../components/styles/Paragraph';
import ArticleLayout from '../../components/layouts/ArticleLayout';

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
            <ProjectMeta>Website</ProjectMeta>
            <Link href="https://crypto-trkr.netlify.app" isExternal>
              https://crypto-trkr.netlify.app <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <ProjectMeta>Stack</ProjectMeta>
            <span>React, TypeScript</span>
          </ListItem>
          <ProjectImage src="/images/ava.jpg" />
        </List>
      </Container>
    </ArticleLayout>
  );
};

export default Project;
