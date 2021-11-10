import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react';
import logo from './logo.svg';
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

import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Container, Chip, CssBaseline, Divider, Grid, IconButton, Paper, Stack, Typography} from '@mui/material';
import { Box, minHeight } from '@mui/system';

import News from './news';

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

const imga = '/images/photos/photos_images/hotblue.jpg'
const itemData= [
  {
    img: imga,
    tag_name: 'Breakfast',
  },
  {
    img: imga,
    tag_name: 'Burger',
  },
  {
    img: imga,
    tag_name: 'Camera',
  },
  {
    img: imga,
    tag_name: 'Coffee',
  },
  {
    img: imga,
    tag_name: 'Hats',
  },
  {
    img: imga,
    tag_name: 'Honeys',
  },
  {
    img: imga,
    tag_name: 'Basketball',
  },
  {
    img: imga,
    tag_name: 'Fern',
  },
  {
    img: imga,
    tag_name: 'Mushrooms',
  },

];
const card_header_title = 
<Typography variant="h2" display="inline" style={{fontSize: 17}} > 
  <b>이미지</b>
</Typography>;

const Home: NextPage = () => {
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
        <div className="section_news">
          <News/>
        </div>
        <div className="section_image">
          <Card sx={{ maxWidth: 766}} variant='outlined' square>
            <CardHeader 
              className="api_title_area"
              title= {card_header_title}
              style={{ textAlign: 'left'}}
            />
            <Paper 
              className="group_option_tag_wrap" 
              style={{height: 83, overflow: 'auto', backgroundColor: '#f5f7f8'}}
            >
              <Grid
                container
                direction="row"
                alignItems="center"
                style={{minHeight:66}}
              
              >
                <Stack direction="row" spacing={1} style= {{paddingLeft:12, paddingRight:12}}>
                {itemData.map((item) => (
                  <Chip 
                    key={item.tag_name}
                    avatar={<Avatar src ={item.img} />}
                    label={item.tag_name}
                    variant="outlined"
                    style={{backgroundColor: "#ffffff"}}
                  />
                ))}
              </Stack>
              </Grid>
            </Paper>
            <StandardImageList />
            <Paper style={{height: 50, overflow: 'auto', backgroundColor: '#f4f7f8'}}>
              <Typography style={{height:48, fontSize: 16, verticalAlign:'center'}}>
                이미지 더보기 <ArrowForwardIcon sx={{mt:2}} style={{height: 16, width: 20}}/>
              </Typography>
            </Paper>
          </Card>
        </div>
      </Grid>

    </div>
    </ThemeProvider>
  )
}

export default Home
