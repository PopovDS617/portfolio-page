import React from 'react';
import { useColorModeValue, Text } from '@chakra-ui/react';
import setLanguage from 'next-translate/setLanguage';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';

const LanguageToggleBox = styled.div`
  display: inline-block;
  cursor: pointer;
  textalign: center;
`;

const LangToggleButton = () => {
  const router = useRouter();

  const switchLanguage = async () => {
    await setLanguage(router.locale === 'ru-RU' ? 'en-US' : 'ru-RU');
  };

  return (
    <LanguageToggleBox>
      <Text
        aria-label="Toggle lang"
        colorScheme={useColorModeValue('black', 'white')}
        onClick={switchLanguage}
      >
        {router.locale === 'ru-RU' ? 'RU' : 'ENG'}
      </Text>
    </LanguageToggleBox>
  );
};

export default LangToggleButton;
