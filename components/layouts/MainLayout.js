import Head from 'next/head';
import { Box, Container } from '@chakra-ui/react';
import { Navbar } from '../navbar/Navbar';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Three from './../3dmodel/model-container';
import { ModelSpinner } from '../ui/Spinner';
import CustomHead from '../CustomHead';

const MainLayout = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <CustomHead />
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        <Box
          m="auto"
          mt={['-20px', '-60px', '-120px']}
          mb={['-50px', '-70px', '-100px']}
          w={[250, 450, 500]}
          h={[250, 450, 500]}
          position="relative"
        >
          <Suspense fallback={<ModelSpinner />}>
            <Canvas concurrent="true" shadows>
              <Three />
            </Canvas>
          </Suspense>
        </Box>

        {children}
      </Container>
    </Box>
  );
};

export default MainLayout;
