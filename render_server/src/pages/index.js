import styles from '../styles/Home.module.css'
import React from 'react';
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { CssBaseline, Typography} from '@mui/material';
import { Box } from '@mui/system';

import News from './news';
import Photo from './photo';
import Wiki from './wiki';

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
    // text: {
    //   primary: "#ffffff"
    // }
  }
});

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('http://localhost:5000/keywords')
  const data = await res.json()
  // console.log(data)
  // Pass data to the page via props
  return { props: { data:data } }
}


export default function Home({data}) {
  const news_view =  data[1]["view"].includes("news");
  const photo_view = data[1]["view"].includes("photo");
  const wiki_view = data[1]["view"].includes("wiki");
  return (
   
    <ThemeProvider theme={themeLight}>
      <CssBaseline />
    <div className={styles.container}>
      <Box sx={{ m: 0, mb: 1 }}></Box>
        {news_view && 
        <div className="section_news">
          <News props={data[1]["news"]}/>
        </div>}
        {wiki_view && 
        <div className="section_wiki">
          <Wiki props={data[1]["wiki"]}/>
        </div>}
        {photo_view&&
        <div className="section_image">
          <Photo props={data[1]["photo"]}/>  
        </div>}
      <Box sx={{ mb: 15 }}></Box>
      <Typography style={{fontSize: 16, fontWeight: '900', verticalAlign:'center', textAlign:'center'}}>
        NAVER
      </Typography>
      <Typography style={{fontSize: 14, verticalAlign:'center', textAlign:'center'}}>
        Team 4
      </Typography>
      <Box sx={{ mb: 5 }}></Box>
      
    </div>
    </ThemeProvider>

    
  )
}
