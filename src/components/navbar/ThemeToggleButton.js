import React from 'react';
import { IconButton, useColorModeValue, useColorMode } from '@chakra-ui/react';

import { AnimatePresence, motion } from 'framer-motion';
import SunIcon from '../ui/SunIcon';
import MoonIcon from '../ui/MoonIcon';

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        style={{ display: 'inline-block', marginRight: 10, marginLeft: 10 }}
        key={useColorModeValue('light', 'dark')}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton
          isRound="true"
          aria-label="Toggle theme"
          backgroundColor="transparent"
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          onClick={toggleColorMode}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default ThemeToggleButton;
