import styles from '../styles/Home.module.css'
import React from 'react';
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { CssBaseline, Typography } from '@mui/material';
import { Box } from '@mui/system';

import News from '../components/news';
import Photo from '../components/photo';
import Wiki from '../components/wiki';
import View from '../components/view'
import Influencer from '../components/influencer';
import Drama from '../components/Drama';
import ViewCardBasic from '../components/ViewCardBasic';

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

// export async function getServerSideProps(context) {
//   const res = await fetch('http://localhost:5000/keywords')
//   const data = await res.json()
//   const string_data = JSON.stringify(data)
//   const props = {data: ''}
//   props.data = string_data
//   /*
//   const {req, } = context
//   const props = {data: ''}
//   if (req.method === "POST") {
//     const streamPromise = new Promise((resolve, reject) => {
//       let body = ''
//       req.on('data', ( data ) => {
//         body += data
//       });
//       req.on('end', () => {
//         resolve(body);
//       });
//     });
//     const body = await streamPromise;
//       props.data = body;
//   }
//   return { props }
//   */
//   return { props }
// }

export async function getServerSideProps(context) {
  const {req, } = context
  const props = {data: ''}
  if (req.method === "POST") {
    const streamPromise = new Promise((resolve, reject) => {
      let body = ''
      req.on('data', (data) => {
        body += data
      });
      req.on('end', () => {
        resolve(JSON.parse(body).data);
      });
    });
    const body = await streamPromise;
    props.data = body;
  }
  else
  {
    const res = await fetch('http://localhost:5000/Paris')
    const data = await res.json()
    const string_data = JSON.stringify(data)
    props.data = string_data
  }
  return { props }
}


// export default function Home({data}) {
//   const json = JSON.parse(JSON.parse(data).data)
//   // const json = JSON.parse(data)
//   const news_view =  json[1].view.includes("news");
//   const photo_view = json[1].view.includes("photo");
//   const view_view = json[1].view.includes("review");
//   const wiki_view = json[1].view.includes("wiki");
export default function Home({ data }) {
  const json = JSON.parse(data)
  const view_view = json.view.includes("review");
  const news_view = json.view.includes("news");
  const photo_view = json.view.includes("photo");
  const wiki_view = json.view.includes("wiki");
  const influencer_view = json.view.includes("influencer");
  return (
    <ThemeProvider theme={themeLight}>
      <CssBaseline />
      <div className={styles.container}>
        <div className="section_drama">
          <Drama/>  
        </div>
        {/* <ViewCardBasic props={json.review}/> */}
        {/* {view_view&&
        <div className="section_view">
        <View props={json.review}/>
        </div>
        }
        {news_view && 
        <div className="section_news">
          <News props={json.news}/>
        </div>}
        {wiki_view && 
        <div className="section_wiki">
          <Wiki props={json.wiki}/>
        </div>}
        {photo_view&&
        <div className="section_image">
          <Photo props={json.photo}/>  
        </div>}
        {influencer_view&&
        <div className="section_influencer">
          <Influencer props={json.influencer}/>    
        </div>} */}
        <Box sx={{ mb: 15 }}></Box>
        <Typography style={{ fontSize: 16, fontWeight: '900', verticalAlign: 'center', textAlign: 'center' }}>
          <img src="/icons/naver_logo.png" 
          width="auto"
          height="21px"
        />
        </Typography>
        <Typography style={{ fontSize: 14, fontWeight: '900', color: 'var(--date_gray)', verticalAlign: 'center', textAlign: 'center' }}>
          Team 4
        </Typography>
        <Box sx={{ mb: 5 }}></Box>
      </div>
    </ThemeProvider>
  )
}