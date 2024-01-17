import { shouldForwardProp, chakra } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition';
  }
});

type SectionProps = {
  children: React.ReactNode;
  delay: number;
};

export const Section = (props: SectionProps) => {
  const { children, delay = 0 } = props;

  return (
    <StyledDiv
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={`0.8s ${delay}`}
      mb={6}
    >
      {children}
    </StyledDiv>
  );
};
