import { SITE_URL } from '@/shared/constants';

const ogImage = { images: [{ url: SITE_URL + '/meta/og_image.png', alt: '', height: 600, width: 600 }] };
// const ogTwitter = { handle: '@handle', site: '@site', cardType: 'summary_large_image' };

export const defaultSeoRU = {
  title: 'Дмитрий Попов',
  description:
    // 'Фуллстек разработчик из Ростова-на-Дону, Россия. Работал в различных компаниях: от стартапов до крупных финтехов и банков. Разрабатываю фронт на React, Next.js, Vue и бэк на Go и Node.js. Люблю все, что связано с веб-разработкой.',
    'Фуллстек разработчик из Ростова-на-Дону, Россия. Go, Typescript (React, Next.js, Vue, Node.js).',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: SITE_URL,
    siteName: 'Дмитрий Попов',
    ...ogImage
  }
  // twitter: ogTwitter
};

export const defaultSeoENG = {
  title: 'Dmitry Popov ',
  description:
    // 'I am a fullstack developer from Rostov-on-Don, Russia. Worked in various companies: from startups to large fintechs and banks. I develop front-end with React, Next.js, Vue and backend with Go and Node.js. I love everything related to the web development.',
    'Fullstack developer from Rostov-on-Don, Russia. Go, Typescript (React, Next.js, Vue, Node.js).',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Dmitry Popov',
    ...ogImage
  }
  // twitter: ogTwitter
};
