import express from 'express';
import * as React from 'react';
import ReactDOMServer from 'react-dom/server';
import createEmotionServer from '@emotion/server/create-instance';
import createEmotionCache from './components/createEmotionCache';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import App from './components/App';
import themeLight from './components/themeLight';

function renderFullPage(html, css, data) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>My page</title>
        ${css}
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </head>
      <script type="text/javascript">
        window.DATA = ${data};
      </script>
      <body>
        <script async src="build/bundle.js"></script>
        <div id="root">${html}</div>
      </body>
    </html>
  `;
}

const app = express()

app.use('/build', express.static('build'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.post('/', (req, res) => {
  const data = JSON.parse(req.body.data);
  const cache = createEmotionCache();
  const { extractCriticalToChunks, constructStyleTagsFromChunks } = createEmotionServer(cache);

  const html = ReactDOMServer.renderToString(
    <CacheProvider value={cache}>
      <ThemeProvider theme={themeLight}>
        <CssBaseline />
        <App input={data}/>
      </ThemeProvider>
    </CacheProvider>
  );

  const emotionChunks = extractCriticalToChunks(html);
  const emotionCss = constructStyleTagsFromChunks(emotionChunks);
  
  res.send(renderFullPage(html, emotionCss, data));
});

const port = 4000
app.listen(port, () => {
  console.log(`Listening on ${port}`);
})