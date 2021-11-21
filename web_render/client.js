import * as React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import App from './components/App';
import themeLight from './components/themeLight';
import createEmotionCache from './components/createEmotionCache';

const cache = createEmotionCache();
const input = window.DATA
function Main(cache, theme, data) {
    return (
      <CacheProvider value={cache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App input={data}/>
        </ThemeProvider>
      </CacheProvider>
    );
  }
ReactDOM.hydrate(<Main cache={cache} theme={themeLight} data={input}/>, document.querySelector('#root'));
