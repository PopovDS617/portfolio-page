import { Container, Badge, List, ListItem, Box } from '@chakra-ui/react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { PostImage } from '../../components/post/PostImage';
import { PostMeta } from '../../components/post/PostMeta';
import { PostTitle } from '../../components/post/PostTitle';
import { Paragraph } from '../../components/styles/Paragraph';
import ArticleLayout from '../../components/layouts/ArticleLayout';
import CodeSnippet from '../../components/CodeSnippet';

const Post = () => {
  const a = ` const object={name:'vasya',
  age:15}
 `;

  return (
    <ArticleLayout title="crypto tracker">
      <Container>
        <PostTitle>
          How to do this <Badge>2022</Badge>
        </PostTitle>
        <List ml={4} my={4}>
          <ListItem>
            <PostMeta>Tag</PostMeta>
          </ListItem>
        </List>
        <Paragraph>
          in this post we will do this and that and then this after that
        </Paragraph>
        <PostImage src="/images/ava.jpg" />
      </Container>
      <Box p={5}>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          sagittis eu libero quis facilisis. Donec accumsan nisl at ipsum
          finibus, vitae maximus leo pellentesque. Suspendisse aliquam mi at
          arcu molestie, at placerat est commodo. Nullam vehicula posuere ipsum,
          a dapibus diam porta a. Donec eget pretium nisi. Pellentesque id
          mauris vel lorem sagittis lobortis non ut orci. Curabitur vitae est
          vel risus accumsan facilisis in vitae metus. Suspendisse sodales
          facilisis odio a placerat. Aliquam lobortis vulputate lorem, ac
          sodales nisl condimentum vel. Duis faucibus mi vel pellentesque
          fringilla. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Aliquam rhoncus non lectus eu posuere. Morbi mattis diam
          eget nunc ornare, in varius turpis semper. Curabitur euismod massa ut
          tempor ultricies. Duis consequat lectus nec libero euismod, vel
        </Paragraph>
        {/* <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
          {a}
        </SyntaxHighlighter> */}
        <CodeSnippet>{a}</CodeSnippet>
      </Box>
    </ArticleLayout>
  );
};

export default Post;
