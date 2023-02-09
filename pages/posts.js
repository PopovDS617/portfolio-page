import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import ArticleLayout from '../components/layouts/ArticleLayout';
import Section from '../components/Section';
import { PostGridItem } from '../components/grid/PostGridItem';
import TranslatedText from '../components/TranslatedText';

const PostsPage = () => {
  return (
    <ArticleLayout title="posts">
      <Container>
        <Heading
          as="h3"
          fontSize={{ base: 20, md: 30 }}
          mb={4}
          pt={6}
          textAlign="center"
        >
          <TranslatedText localeFile="posts" text="pageTitle" />
        </Heading>

        <Heading
          as="h3"
          fontSize={{ base: 12, md: 20 }}
          mb={4}
          pt={6}
          textAlign="center"
          fontStyle="italic"
        >
          <TranslatedText localeFile="posts" text="addLater" />
        </Heading>

        {/* <Section delay={0.1}>
          <SimpleGrid columns={[1, 2, 3]} gap={6}>
            <PostGridItem
              id="post-one"
              title="Post One"
              thumbnail="/images/ava.jpg"
            ></PostGridItem>
            <PostGridItem
              title="Post Two"
              thumbnail="/images/ava.jpg"
            ></PostGridItem>
            <PostGridItem
              title="Post Three"
              thumbnail="/images/ava.jpg"
            ></PostGridItem>
          </SimpleGrid>
        </Section>
        <Section delay={0.3}>
          <SimpleGrid columns={[1, 2, 3]} gap={6}>
            <PostGridItem
              title="Post Four"
              thumbnail="/images/ava.jpg"
            ></PostGridItem>
            <PostGridItem
              title="Post Five"
              thumbnail="/images/ava.jpg"
            ></PostGridItem>
            <PostGridItem
              title="Post Six"
              thumbnail="/images/ava.jpg"
            ></PostGridItem>
          </SimpleGrid>
        </Section>
        <Section delay={0.5}>
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
