import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { theme } from '@/styles';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="ru">
        <Head />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <meta name="yandex-verification" content="6e68aa82a134b6de" />
        <meta name="google-site-verification" content="zSjWpAENkeNVCbUW0wcUn7nMovtl-uBNrEyeTVpCtE0" />
        <body style={{ overflow: 'overlay' }}>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
