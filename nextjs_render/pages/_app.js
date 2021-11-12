import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../src/theme';
export default function MyApp({ Component, pageProps }) {
  return (
    <container>
      <Head>
        <title>Naver week 3</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </container>
  );
}