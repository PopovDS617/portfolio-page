import Link from 'next/link';

import { Text, useColorModeValue } from '@chakra-ui/react';
import styled from '@emotion/styled';

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

const Logo = props => {
  const active = props.path === '/';
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <LogoIcon>
            <Text
              borderRadius="0.375rem"
              p={2}
              px={4}
              color={useColorModeValue('gray.800', 'whiteAlpha.900')}
              outline={active ? 'solid 4px' : undefined}
              outlineColor={active ? ' customSaturatedGreenColor' : undefined}
              fontFamily="Zen Dots"
              ml={3}
              fontSize={25}
            >
              dp
            </Text>
          </LogoIcon>
        </LogoBox>
      </a>
    </Link>
  );
};

export default Logo;
