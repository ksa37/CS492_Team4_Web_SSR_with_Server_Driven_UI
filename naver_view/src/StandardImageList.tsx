import React from 'react';
import logo from './logo.svg';
import './App.css';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Divider from '@mui/material/Divider';
import imgA from './static/images/hotblue.jpg';
import imgB from "./static/images/blog_img1.png";
import { withStyles } from "@material-ui/core/styles";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import GridToolbar from '@mui/x-data-grid-generator';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

// src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
// srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
export default function StandardImageList() {
  return (
    <ImageList sx={{ maxWidth: 766, height: 766, m:0}} cols={3} rowHeight={254} gap={2}>
      {itemData.map((item) => (
        <ImageListItem key={item.title}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: imgA,
    title: 'Breakfast',
  },
  {
    img: imgA,
    title: 'Burger',
  },
  {
    img: imgA,
    title: 'Camera',
  },
  {
    img: imgA,
    title: 'Coffee',
  },
  {
    img: imgA,
    title: 'Hats',
  },
  {
    img: imgA,
    title: 'Honey',
  },
  {
    img: imgA,
    title: 'Basketball',
  },
  {
    img: imgA,
    title: 'Fern',
  },
  {
    img: imgA,
    title: 'Mushrooms',
  },

];
