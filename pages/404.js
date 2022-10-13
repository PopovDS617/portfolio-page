import NextLink from 'next/link';
import {
  Box,
  Heading,
  Container,
  Divider,
  Button,
  Text
} from '@chakra-ui/react';

const NotFoundPage = () => {
  return (
    <Container>
      <Heading as="h1">Oops</Heading>
      <Text> 404</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme="teal">to homepage</Button>
        </NextLink>
      </Box>
    </Container>
  );
};

export default NotFoundPage;
