import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import ArticleLayout from '../components/layouts/ArticleLayout';
import Section from '../components/Section';
import { GridItem } from '../components/GridItem';
import ImagePath from '../public/images/ava.jpg';

const PostsPage = () => {
  return (
    <ArticleLayout title="posts">
      <Container>
        <Heading as="h4" fontSize={20} mb={4}>
          Popular
        </Heading>
        <Section delay={0.1}></Section>
        <SimpleGrid columns={[1, 2]} gap={6}>
          <GridItem title="Post One" thumbnail={ImagePath}></GridItem>
          <GridItem title="Post Two" thumbnail={ImagePath}></GridItem>
        </SimpleGrid>
      </Container>
    </ArticleLayout>
  );
};

export default PostsPage;
