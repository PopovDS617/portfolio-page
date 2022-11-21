import Link from 'next/link';

import { Text, useColorModeValue, Box } from '@chakra-ui/react';
import styled from '@emotion/styled';
import useTranslation from 'next-translate/useTranslation';

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: flex;
  align-items: center;
  height: 20px;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  &:hover div {
    transform: rotate(180deg);
  }
`;

const LogoIcon = styled.span`
  color: white;
  font-size: 18px;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-out;
  &:hover {
    transform: rotate(-180deg);
    transition: all 0.5s ease-out;
  }
`;

const Logo = () => {
  const { t } = useTranslation('common');

  return (
    <Link href="/">
      <a>
        <LogoBox>
          <LogoIcon>
            <Text
              color={useColorModeValue('gray.800', 'whiteAlpha.900')}
              fontFamily="M PLUS Rounded 1c"
              ml={3}
            >
              dp
            </Text>
          </LogoIcon>

          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily="M PLUS Rounded 1c"
            fontWeight="bold"
            ml={3}
          >
            {t('title')}
          </Text>
        </LogoBox>
      </a>
    </Link>
  );
};

export default Logo;
