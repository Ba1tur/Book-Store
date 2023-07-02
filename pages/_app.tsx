import Layout from "@/components/Layout/Layout";
import { setupStore } from "@/redux/store";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Provider } from 'react-redux';


const store = setupStore();


export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
        <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
    </Provider>
  
  );
}
