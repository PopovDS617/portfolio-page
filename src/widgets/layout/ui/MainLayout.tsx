import { Box, Container, useColorModeValue } from '@chakra-ui/react';
import { Navbar, Spinner } from '@/shared/ui';
import { Suspense } from 'react';
import { ModelContainer } from '@/entities/3dmodel';

import { NextRouter } from 'next/router';

type MainLayoutProps = {
  children: React.ReactNode;
  router: NextRouter;
};

export const MainLayout = (props: MainLayoutProps) => {
  const { children, router } = props;

  return (
    <Box as="main" pb={8}>
      <Navbar path={router.asPath} />
      <Container minW="calc(100vw)" overflow="hidden" pt={14}>
        <Box
          m="auto"
          mt={['-50px', '-60px', '-120px']}
          mb={['-20px', '-30px', '-50px']}
          w={[250, 450, 480]}
          h={[250, 450, 480]}
          position="relative"
          overflowX="hidden"
        >
          <Suspense fallback={<Spinner />}>
            <ModelContainer />
          </Suspense>
          <Box
            w={[250, 450, 480]}
            h={[125, 225, 280]}
            _after={{
              content: '""',
              position: 'absolute',

              backdropFilter: 'blur(10px)',
              mask: 'linear-gradient(to top, black 70%,  transparent 100%)',
              height: '100%',
              width: '100%'
            }}
            position="relative"
            mt={['-80px', '-148px', '-165px']}
          />
        </Box>

        {children}
      </Container>
    </Box>
  );
};
