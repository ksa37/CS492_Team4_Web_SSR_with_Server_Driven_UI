import React from 'react';
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

// 
// {props}: {props:any}
export default function StandardImageList() {
    // const {imgs} = props
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
    img: "/images/photos/photos_images/paris_image1.jpeg",
    title: 'Breakfast',
  },
  {
    img: "/images/photos/photos_images/paris_image2.jpeg",
    title: 'Burger',
  },
  {
    img: "/images/photos/photos_images/paris_image3.jpeg",
    title: 'Camera',
  },
  {
    img: "/images/photos/photos_images/paris_image3.jpeg",
    title: 'Coffee',
  },
  {
    img: "/images/photos/photos_images/paris_image5.jpeg",
    title: 'Hats',
  },
  {
    img: "/images/photos/photos_images/paris_image6.jpeg",
    title: 'Honey',
  },
  {
    img: "/images/photos/photos_images/paris_image7.jpeg",
    title: 'Basketball',
  },
  {
    img: "/images/photos/photos_images/paris_image8.jpeg",
    title: 'Fern',
  },
  {
    img: "/images/photos/photos_images/paris_image8.jpeg",
    title: 'Mushrooms',
  },

];
