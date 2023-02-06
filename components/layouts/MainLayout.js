import Head from 'next/head';
import { Box, Container, useColorModeValue } from '@chakra-ui/react';
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
          w={[250, 450, 480]}
          h={[250, 450, 480]}
          position="relative"
        >
          <Suspense fallback={<ModelSpinner />}>
            <Canvas concurrent="true" shadows>
              <Three />
            </Canvas>
          </Suspense>
          <Box
            w={[250, 450, 480]}
            h={[125, 225, 240]}
            bg={useColorModeValue('#e8d2a6b5', '#20202380')}
            css={{ backdropFilter: 'blur(10px)' }}
            position="relative"
            mt={['-40px', '-60px', '-95px']}
          />
        </Box>

        {children}
      </Container>
    </Box>
  );
};

export default MainLayout;
