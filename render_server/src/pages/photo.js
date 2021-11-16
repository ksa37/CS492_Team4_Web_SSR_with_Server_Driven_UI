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

export default function Photo({props}) {
    const {tags, images, image_more} = props
    return(
        <Card sx={{ maxWidth: 766}} variant='outlined' square>
            <CardHeader 
              className="api_title_area"
              title= {
                <Typography variant="h2" display="inline" style={{fontSize: 17}} > 
                <b>이미지</b>
              </Typography>
              }
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
                {tags&&tags.map((item) => (
                  <Chip 
                    key={item["tag_name"]}
                    avatar={<Avatar src ={item["tag_image_url"]} />}
                    label={item["tag_name"]}
                    variant="outlined"
                    style={{backgroundColor: "#ffffff"}}
                  />
                ))}
              </Stack>
              </Grid>
            </Paper>
            <StandardImageList props={images}/>
            <Link href={image_more}>
            <Paper 
              style={{height: 50, overflow: 'auto', backgroundColor: '#f4f7f8'}}>
              <Typography  style={{height:48, fontSize: 16, verticalAlign:'center', textAlign:'center'}}>
                이미지 더보기 <ArrowForwardIcon sx={{mt:2}} style={{height: 16, width: 20}}/>
              </Typography>
            </Paper>
            </Link>
        </Card>
    )
}