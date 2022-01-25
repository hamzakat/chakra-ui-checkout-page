import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/provider'
import { extendTheme } from '@chakra-ui/react'

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })

const App = ( {Component, pagePorps} : AppProps) => {
  return (
    <ChakraProvider theme={theme}>  
      <Component {...pagePorps} />
    </ChakraProvider>
  );
};

export default App
