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
  -webkit-tap-highlight-color: unset;
`;

const LogoIcon = styled.span`
  color: white;
  line-height: 20px;
  font-size: 18px;
  transform: translateY(2.1px);
  transition: all 0.25s ease-out;
  white-space: nowrap;
  &:hover {
    transform: rotate(-5deg) scale(1.05);
    transition: all 0.25s ease-out;
  }
`;

type LogoProps = {
  path: string;
};

const Logo = (props: LogoProps) => {
  const active = props.path === '/';
  return (
    <Link legacyBehavior href="/">
      <a>
        <LogoBox>
          <LogoIcon>
            <Text
              lineHeight="20px"
              borderRadius="0.375rem"
              p={2}
              px={4}
              color={useColorModeValue('gray.800', 'whiteAlpha.900')}
              transition="outline 0.2s ease-out"
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
