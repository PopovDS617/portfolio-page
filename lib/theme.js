import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: props => ({
    body: {
      bg: mode('#f0e7db', '#202023')(props)
    }
  })
};

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecrationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      },
      'page-title': {
        fontSize: 30,
        letterSpacing: 1
      }
    }
  },
  Link: {
    baseStyle: props => ({
      borderRadius: '0.375rem',
      color: mode('#3d7aed', '#F9E282')(props),
      textUnderlineOffset: 3
    })
  }
};

const fonts = {
  heading:`'Noto Sans', sans-serif`,
  body: `'Noto Sans', sans-serif`
};

const colors = {
  customPaleGreenColor: '#87edc3',
  customSaturatedGreenColor: '#00dc82',
  customDarkGreenColor: '#04b069'
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: 'true'
};

const theme = extendTheme({
  config,
  styles,
  components,
  colors,
  fonts
});

export default theme;
