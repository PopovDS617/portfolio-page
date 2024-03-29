import { motion } from 'framer-motion';

import { GridItemStyle } from '@/styles';

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 }
};

type ArticleLayoutProps = {
  children: React.ReactNode;
  title?: string;
};

export const ArticleLayout = (props: ArticleLayoutProps) => {
  const { children } = props;

  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: 'easeInOut' }}
      style={{ position: 'relative' }}
    >
      <>
        {children}
        <GridItemStyle />
      </>
    </motion.article>
  );
};
