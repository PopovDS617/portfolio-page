import Head from 'next/head';
import { Box, Container } from '@chakra-ui/react';
import { Navbar } from '../Navbar';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Three from './../3dmodel/model-container';

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
        <Box
          className="voxel-dog"
          m="auto"
          mt={['-20px', '-60px', '-120px']}
          mb={['-40px', '-140px', '-200px']}
          w={[280, 480, 640]}
          h={[280, 480, 640]}
          position="relative"
        >
          <Canvas id="three-canvas-container" shadows>
            <Three />
          </Canvas>
        </Box>

        {children}
      </Container>
    </Box>
  );
};

export default MainLayout;
