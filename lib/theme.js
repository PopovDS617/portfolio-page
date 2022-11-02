import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: props => ({
    body: {
      bg: mode('#f0e7db', '#001E26')(props)
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
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#3d7aed', '#F9E282')(props),
      textUnderlineOffset: 3
    })
  }
};

const fonts = {
  heading: "'M PLUS Rounded 1c'"
};

const colors = {
  // glassTeal: '#88ccca',
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
