import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: props => ({
    body: {
      bg: mode('#E5E3C9', '#202023')(props)
      // scrollBehavior: 'smooth'
    }
  })
};

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 22,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
         textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      },
      'page-title': {
        fontSize: 34,
        letterSpacing: 1,
           textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecrationThickness: 4,
      }
    }
  },
  Link: {
    baseStyle: props => ({
      borderRadius: '0.375rem',
      color: mode('#0c5df5', '#F9E282')(props),
      textUnderlineOffset: 3
    })
  }
};

const fonts = {
  heading: `'Rubik', sans-serif`,
  body: `'Rubik', sans-serif`
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
