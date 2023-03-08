import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';

function App() {
  return <ChakraProvider theme={theme}>this is home</ChakraProvider>;
}

export default App;
