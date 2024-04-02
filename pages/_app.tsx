import { ChakraProvider } from '@chakra-ui/react';
import { MainLayout } from '@/widgets/layout';
import { theme, Fonts } from '@/styles';
import { AnimatePresence } from 'framer-motion';
import { DefaultSeo, OrganizationJsonLd, WebPageJsonLd } from 'next-seo';

import { defaultSeo } from '../next-seo.config';
import { useRouter } from 'next/router';
import { generateCanonical } from '@/lib';
import { AppProps } from 'next/app';

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual';
}

const Website = ({ Component, pageProps, router }: AppProps) => {
  const { asPath } = useRouter();

  return (
    <ChakraProvider theme={theme}>
      <WebPageJsonLd id="1" description="Дмитрий Попов" />
      <OrganizationJsonLd name="Дмитрий Попов" url="https://dpopov.site" logo="/favicon.ico" address="Ростов-на-Дону" />
      <DefaultSeo {...defaultSeo} canonical={generateCanonical(asPath)} />
      <Fonts />
      <MainLayout router={router}>
        <AnimatePresence
          mode="wait"
          initial={true}
          // onExitComplete={() => {
          //   if (typeof window !== 'undefined') {
          //     window.scrollTo({ top: 0 });
          //   }
          // }}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </MainLayout>
    </ChakraProvider>
  );
};

export default Website;
