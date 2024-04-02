import { SITE_URL } from '@/shared/constants';

export const defaultSeoRU = {
  title: 'Дмитрий Попов',
  description:
    'Фуллстек разработчик из Ростова-на-Дону, Россия. Работал в различных компаниях: от стартапов до крупных финтехов и банков. Разрабатываю фронт на React, Next.js, Vue и бэк на Go и Node.js. Люблю все, что связано с веб-разработкой.',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: SITE_URL,
    siteName: 'Дмитрий Попов'
  }
};

export const defaultSeoENG = {
  title: 'Dmitry Popov ',
  description:
    'I am a fullstack developer from Rostov-on-Don, Russia. Worked in various companies: from startups to large fintechs and banks. I develop front-end with React, Next.js, Vue and backend with Go and Node.js. I love everything related to the web development.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Dmitry Popov'
  }
};
