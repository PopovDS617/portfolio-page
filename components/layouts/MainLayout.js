import Head from 'next/head';
import { Box, Container } from '@chakra-ui/react';
import { Navbar } from '../navbar/Navbar';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Three from './../3dmodel/model-container';
import CustomHead from '../CustromHead';
import { ModelSpinner } from '../ui/Spinner';

const MainLayout = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <CustomHead />
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        <Box
          m="auto"
          mt={['-20px', '-60px', '-120px']}
          mb={['-20px', '-70px', '-100px']}
          w={[300, 450, 500]}
          h={[300, 450, 500]}
          position="relative"
        >
          <Canvas concurrent="true" shadows>
            <Suspense fallback={<ModelSpinner />}>
              <Three />
            </Suspense>
          </Canvas>
        </Box>

        {children}
      </Container>
    </Box>
  );
};

export default MainLayout;
