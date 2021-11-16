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

const themeLight = createTheme({
  palette: {
    background: {
      default: "#e9ecef"
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
  return (
   
    <ThemeProvider theme={themeLight}>
      <CssBaseline />
    <div className={styles.container}>
      <Grid 
        container
        justifyContent="center"
        alignItems="center"
        direction="column" 
      >
        {news_view && 
        <div className="section_news">
          <News/>
        </div>}
        {photo_view&&
        <div className="section_image">
          <Photo props={data[1]["photo"]}/>  
        </div>}
      </Grid>

    </div>
    </ThemeProvider>

    
  )
}
