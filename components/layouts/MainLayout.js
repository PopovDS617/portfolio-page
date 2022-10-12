import Head from 'next/head';
import { Box, Container } from '@chakra-ui/react';
import Navbar from '../Navbar';
import FaceModel from '../three/face-model';

const MainLayout = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta title="Дмитрий Попов" />
        <meta name="description" content="Дмитрий Попов" />
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        <FaceModel />

        {children}
      </Container>
    </Box>
  );
};

export default MainLayout;
