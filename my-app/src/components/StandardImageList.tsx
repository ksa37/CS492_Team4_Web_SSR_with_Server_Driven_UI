import React from 'react';
import logo from './logo.svg';
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
import Divider from '@mui/material/Divider';
// import imgA from '../../public/images/photos/photos_images/hotblue.jpg';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Image from "next/image"



export default function StandardImageList() {
  return (
    <ImageList sx={{ maxWidth: 766, height: 766, m:0}} cols={3} rowHeight={254} gap={2}>
      {itemData.map((item) => (
        <ImageListItem key={item.title}>
          <img
            src={item.img}
            alt={item.title}
            loading="lazy"
          />

        </ImageListItem>
      ))}
    </ImageList>
  );
}

const imgA = 'images/photos/photos_images/hotblue.jpg'
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
