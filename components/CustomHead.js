import Head from 'next/head';

const CustomHead = () => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Dmitry Popov's homepage" />
      <meta name="author" content="Dmitry Popov" />
      <meta name="author" content="Дмитрий Попов" />
      <link rel="apple-touch-icon" href="apple-touch-icon.png" />
      <meta name="yandex-verification" content="b4595331cb9305bc" />
      <meta
        name="google-site-verification"
        content="zSjWpAENkeNVCbUW0wcUn7nMovtl-uBNrEyeTVpCtE0"
      />
      <meta property="og:site_name" content="Дмитрий Попов" />
      <meta name="og:title" content="Дмитрий Попов" />
      <meta property="og:type" content="website" />

      <title>Дмитрий Попов</title>
    </Head>
  );
};

export default CustomHead;
