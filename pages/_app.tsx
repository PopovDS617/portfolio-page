import { ChakraProvider } from '@chakra-ui/react';
import { MainLayout } from '@/widgets/layout';
import { theme, Fonts } from '@/styles';
import { AnimatePresence } from 'framer-motion';
import { DefaultSeo, OrganizationJsonLd, WebPageJsonLd } from 'next-seo';

import { defaultSeoENG, defaultSeoRU } from '../next-seo.config';
import { useRouter } from 'next/router';
import { generateCanonical } from '@/lib';
import { AppProps } from 'next/app';
import { SITE_URL } from '@/shared/constants';

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual';
}

const Website = ({ Component, pageProps, router }: AppProps) => {
  const nextRouter = useRouter();

  const { asPath, locale, defaultLocale } = nextRouter;

  const canonicalPath = locale === defaultLocale ? asPath : `/${locale}${asPath}`;
  const seo = locale === defaultLocale ? defaultSeoRU : defaultSeoENG;

  return (
    <ChakraProvider theme={theme}>
      <WebPageJsonLd id="1" description="Дмитрий Попов" />
      <OrganizationJsonLd name="Дмитрий Попов" url={SITE_URL} logo="/favicon.ico" address="Ростов-на-Дону" />
      <DefaultSeo {...seo} canonical={generateCanonical(canonicalPath)} />
      <Fonts />
      <MainLayout router={router}>
        <AnimatePresence mode="wait" initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </MainLayout>
    </ChakraProvider>
  );
};

export default Website;
