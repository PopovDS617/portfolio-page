import React from 'react';
import {   useColorModeValue, useColorMode } from '@chakra-ui/react';

import { AnimatePresence, motion } from 'framer-motion';

const LangToggleButton = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={useColorModeValue('light', 'dark')}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <Text
          aria-label="Toggle lang"
          colorScheme={useColorModeValue('black', 'white')}
          
          onClick={toggleColorMode}
        ></Text>
      </motion.div>
    </AnimatePresence>
  );
};

export default LangToggleButton;
