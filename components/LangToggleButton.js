import React from 'react';
import {   useColorModeValue, useColorMode,Text } from '@chakra-ui/react';

 

const LangToggleButton = () => {
  const { toggleColorMode } = useColorMode();

  return (
    
      <div
        style={{ display: 'inline-block' }}
        key={useColorModeValue('light', 'dark')}
      
      >
        <Text
          aria-label="Toggle lang"
          colorScheme={useColorModeValue('black', 'white')}
          
          onClick={toggleColorMode}
        >RU</Text>
      </div>
    
  );
};

export default LangToggleButton;
