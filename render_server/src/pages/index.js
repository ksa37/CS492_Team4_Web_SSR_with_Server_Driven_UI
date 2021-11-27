import styles from '../styles/Home.module.css'
import React from 'react';
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { CssBaseline, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Link from '@mui/material/Link';

import News from '../components/News';
import Photo from '../components/Photo';
import Wiki from '../components/Wiki';
import View from '../components/View'
import Influencer from '../components/Influencer';
import Bulguksa from '../components/Bulguksa';
import Linkbox from '../components/Linkbox';

const themeLight = createTheme({
  palette: {
    background: {
      default: "#e9ecef"
    },
    gray: {
      light: "#FFFFFF"
    }
  }
});

const themeDark = createTheme({
  palette: {
    background: {
      default: "#e9ecef"
    },
  }
});

export async function getServerSideProps(context) {
  const {req, } = context
  const props = {data: '', views: [], keyword: ''}
  if (req.method === "POST") {
    const streamPromise = new Promise((resolve, reject) => {
      let body = ''
      req.on('data', (data) => {
        body += data
      });
      req.on('end', () => {
        resolve(JSON.parse(body));
      });
    });
    const json = await streamPromise;
    props.data = json.data;
    props.views = json.views;
    props.keyword = json.keyword;
  }
  else
  {
    const res = await fetch('http://localhost:5000/Bulguksa')
    const data = await res.json()
    const string_data = JSON.stringify(data)
    props.data = string_data
    props.views = data.views;
    props.keyword = 'Bulguksa';
  }
  return { props }
}

export default function Home({ data, views, keyword }) {
  const json = JSON.parse(data)
  return (
    <ThemeProvider theme={themeLight}>
      <CssBaseline />
      <div className={styles.container}>
        <div className="section_link">
          <Linkbox />
        </div>
        {views.map((view, index) => {
          switch(view) {
            /*
            case "basic":
              if (keyword === 'Bulguksa')
              {
                return (
                  <div className="section_bulguksa">
                    <Bulguksa props={json.basic}/>
                  </div>
                )
              }
              break;
            */
            case "influencer":
              return (
                <div key={index} className="section_influencer">
                  <Influencer props={json.influencer}/>
                </div>
              )
            case "review":
              return (
                <div key={index} className="section_review">
                  <View props={json.review}/>
                </div>
              )
            case "wiki":
              return (
                <div key={index} className="section_wiki">
                  <Wiki props={json.wiki}/>
                </div>
              )
            case "news":
              return (
                <div key={index} className="section_news">
                  <News props={json.news}/>
                </div>
              )
            case "photo":
              return (
                <div key={index} className="section_photo">
                  <Photo props={json.photo}/>
                </div>
              )
          }})}
        <Box sx={{ mb: 15 }}></Box>
        <Typography style={{ fontSize: 16, fontWeight: '900', verticalAlign: 'center', textAlign: 'center' }}>
          NAVER
        </Typography>
        <Typography style={{ fontSize: 14, verticalAlign: 'center', textAlign: 'center' }}>
          Team 4
        </Typography>
        <Box sx={{ mb: 5 }}></Box>
      </div>
    </ThemeProvider>
  )
}