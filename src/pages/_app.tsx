import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Layout } from '../components/common/Layout/Layout';
import { ThemeProvider } from 'next-themes';
import { Seo } from '../components/common/SEO/Seo';
import { Provider } from 'urql';
import { client } from '../graphql/client';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <ThemeProvider attribute='class'>
        <Seo title='Stonks' />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
