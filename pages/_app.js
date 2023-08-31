import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../components/layouts/MainLayout';
import theme from '../lib/theme';
import Fonts from '../components/styles/Fonts';
import { AnimatePresence } from 'framer-motion';
import { DefaultSeo, OrganizationJsonLd, WebPageJsonLd } from 'next-seo';

import { defaultSeo } from '../next-seo.config';
import { useRouter } from 'next/router';
import { generateCanonical } from '../lib/generateCanonical';
if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual';
}

const Website = ({ Component, pageProps, router }) => {
  const { asPath } = useRouter();

  return (
    <ChakraProvider theme={theme}>
      <WebPageJsonLd id={1} description="Дмитрий Попов" />
      <OrganizationJsonLd
        name="Дмитрий Попов"
        url="https://popov-d.site"
        logo="/favicon.ico"
        address="Ростов-на-Дону"
      />
      <DefaultSeo {...defaultSeo} canonical={generateCanonical(asPath)} />
      <Fonts />
      <Layout router={router}>
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
      </Layout>
    </ChakraProvider>
  );
};

export default Website;
