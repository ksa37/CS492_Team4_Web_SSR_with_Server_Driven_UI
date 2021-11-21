import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react';
import StandardImageList from '../components/StandardImageList';
import MoreContent from '../components/MoreContent';

import { IconButtonProps } from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// import { withStyles, makeStyles, styled} from "@material-ui/core/styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Container, Chip, CssBaseline, Divider, Grid, IconButton, Paper, Stack, Typography} from '@mui/material';
import Link from 'next/link';
import { Box } from '@mui/system';

export default function Photo({props}) {
    const {tags, images, image_more} = props
    const view_option = "이미지";
    return(
      <>
        <Card sx={{ maxWidth: 768}} variant='outlined' square>
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
                  <Link href={item.tagURL}>
                    <a>
                  <Chip 
                    key={item["tag_name"]}
                    avatar={<Avatar src ={item["tag_image_url"]} />}
                    label={item["tag_name"]}
                    variant="outlined"
                    style={{backgroundColor: "#ffffff"}}
                  />
                    </a>
                  </Link>
                ))}
              </Stack>
              </Grid>
            </Paper>
            <StandardImageList props={images}/>
        </Card>
        <MoreContent props={{'view_option':view_option,'more_link':image_more}}/>
        </>
    )
}