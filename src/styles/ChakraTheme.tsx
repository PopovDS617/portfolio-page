import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

type ThemeProps = Record<string, any>;

const styles = {
  global: (props: ThemeProps) => ({
    main: { width: '100%' },
    body: {
      bg: mode('#E8D2A6', '#202023')(props),
      scrollBehavior: 'smooth',
      '-webkit-tap-highlight-color': 'transparent'
    }
  })
};

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 24,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      },
      'page-title': {
        fontSize: 36,
        letterSpacing: 1,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecrationThickness: 4,
        textAlign: 'center'
      }
    }
  },
  Link: {
    baseStyle: (props: ThemeProps) => ({
      borderRadius: '0.375rem',
      color: mode('customDarkBlueColor', '#F9E282')(props),
      textUnderlineOffset: 3
    }),
    variants: {
      'social-link': {
        fontSize: 22,
        color: 'blue'
      }
    }
  },
  Divider: {
    baseStyle: (props: ThemeProps) => ({
      borderColor: mode('#202023', '#525252')(props)
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
  customDarkGreenColor: '#04b069',
  customDarkBlueColor: '#00425A'
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: 'true'
};

export const theme = extendTheme({
  config,
  styles,
  components,
  colors,
  fonts
});
