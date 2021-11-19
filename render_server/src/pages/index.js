import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react';
import StandardImageList from '../components/StandardImageList';


import { red } from '@mui/material/colors';
import { IconButtonProps } from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// import { withStyles, makeStyles, styled} from "@material-ui/core/styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Container, Chip, CssBaseline, Divider, Grid, IconButton, Link, Paper, Stack, Typography} from '@mui/material';
import { Box, minHeight } from '@mui/system';

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
