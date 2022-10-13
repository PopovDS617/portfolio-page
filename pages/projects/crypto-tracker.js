import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, Meta, PrjImage } from '../../components/Project';
import { Paragraph } from '../../components/Paragraph';
import ArticleLayout from '../../components/layouts/ArticleLayout';

const Project = () => {
  return (
    <ArticleLayout title="crypto tracker">
      <Container>
        <Title>
          Crypto Tracker <Badge>2022</Badge>
        </Title>
        <Paragraph>
          a simple app for tracking of buying and selling crypto assets
        </Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://crypto-trkr.netlify.app" isExternal>
              https://crypto-trkr.netlify.app <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React, TypeScript</span>
          </ListItem>
          <PrjImage src="/images/ava.jpg" />
        </List>
      </Container>
    </ArticleLayout>
  );
};

export default Project;
