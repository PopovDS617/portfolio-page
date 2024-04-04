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
        <meta name="google-site-verification" content="Cp90cSWW3ZoFKAAkBymkNnkMdbZ2NnuD9jvEQ3yKZvs" />
        <body style={{ overflow: 'overlay' }}>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
