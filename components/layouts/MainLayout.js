import Head from 'next/head';
import { Box, Container } from '@chakra-ui/react';
import Navbar from '../../components/Navbar';
import dynamic from 'next/dynamic';

import Loader from '../three/model-loader';
import Footer from '../../components/Navbar';

const FaceModel = dynamic(() => import('../three/face-model'), {
  ssr: false,
  loading: () => <Loader />
});

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
        <Footer />
      </Container>
    </Box>
  );
};

export default MainLayout;
