import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    black: '#000000',
    white: '#FFF',
    gray: {
      '50': '#F5F8FA',
      '100': '#DADADA',
      '300': '#999999',
      '700': '#47585B'
    },
    yellow: {
      '900': '#FFBA08'
    }
  },
  fonts: {
    heading: 'Poppins, sans-serif',
    body: 'Poppins, sans-serif'
  },
  styles: {
    global: {
      body: 'gray.50',
      color: 'gray.100'
    }
  }
})