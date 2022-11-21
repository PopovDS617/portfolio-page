import React from 'react';
import { useColorModeValue, Text } from '@chakra-ui/react';
import setLanguage from 'next-translate/setLanguage';
import { useRouter } from 'next/router';

const LangToggleButton = () => {
  const router = useRouter();

  const switchLanguage = async () => {
    await setLanguage(router.locale === 'ru-RU' ? 'en-US' : 'ru-RU');
  };

  return (
    <div
      style={{
        display: 'inline-block',
        cursor: 'pointer',
        textAlign: 'center'
      }}
    >
      <Text
        aria-label="Toggle lang"
        colorScheme={useColorModeValue('black', 'white')}
        onClick={switchLanguage}
      >
        {router.locale === 'ru-RU' ? 'RU' : 'ENG'}
      </Text>
    </div>
  );
};

export default LangToggleButton;
