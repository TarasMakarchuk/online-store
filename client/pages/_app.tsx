import '@/assets/styles/global.scss';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '@/store/store';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={ store }>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>

  );
};

