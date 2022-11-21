import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import ArticleLayout from '../components/layouts/ArticleLayout';
import Section from '../components/Section';
import { GridItem } from '../components/GridItem';
import ImagePath from '../public/images/ava.jpg';
import { PostGridItem } from '../components/GridItem';

const PostsPage = () => {
  return (
    <ArticleLayout title="posts">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          All the recent posts
        </Heading>
        <Section delay={0.1}>
          <SimpleGrid columns={[1, 2, 3]} gap={6}>
            <PostGridItem
              id="post-one"
              title="Post One"
              thumbnail={ImagePath}
            ></PostGridItem>
            <PostGridItem title="Post Two" thumbnail={ImagePath}></PostGridItem>
            <PostGridItem
              title="Post Three"
              thumbnail={ImagePath}
            ></PostGridItem>
          </SimpleGrid>
        </Section>
        <Section delay={0.3}>
          <SimpleGrid columns={[1, 2, 3]} gap={6}>
            <PostGridItem
              title="Post Four"
              thumbnail={ImagePath}
            ></PostGridItem>
            <PostGridItem
              title="Post Five"
              thumbnail={ImagePath}
            ></PostGridItem>
            <PostGridItem title="Post Six" thumbnail={ImagePath}></PostGridItem>
          </SimpleGrid>
        </Section>
        {/* <Section delay={0.5}>
          <SimpleGrid columns={[1, 2, 3]} gap={6}>
            <GridItem title="Post Seven" thumbnail={ImagePath}></GridItem>
            <GridItem title="Post Eight" thumbnail={ImagePath}></GridItem>
            <GridItem title="Post Nine" thumbnail={ImagePath}></GridItem>
          </SimpleGrid>
        </Section> */}
      </Container>
    </ArticleLayout>
  );
};

export default PostsPage;
