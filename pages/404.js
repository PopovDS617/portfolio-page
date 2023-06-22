import NextLink from 'next/link';
import {
  Box,
  Heading,
  Container,
  Divider,
  Button,
  Text
} from '@chakra-ui/react';
import TranslatedText from '../components/TranslatedText';
import { NextSeo } from 'next-seo';

const NotFoundPage = () => {
  return (
    <>
      <NextSeo noindex />
      <Container>
        <Heading as="h3" fontSize={36} mb={4} textAlign="center">
          Oops
        </Heading>

        <Divider my={6} />
        <Box my={6} align="center">
          <NextLink href="/">
            <Button
              colorScheme="green"
              bg="customSaturatedGreenColor"
              _hover={{ bg: 'customDarkGreenColor' }}
            >
              <TranslatedText localeFile="common" text="404" />
            </Button>
          </NextLink>
        </Box>
      </Container>
    </>
  );
};

export default NotFoundPage;
