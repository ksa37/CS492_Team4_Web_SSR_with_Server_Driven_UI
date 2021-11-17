import React from 'react';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Image from "next/image"


export default function StandardImageList({props}) {

  return (
    <ImageList sx={{ maxWidth: 766, height: 766, m:0}} cols={3} rowHeight={254} gap={2}>
      {props&&props.map((img) => (
        <ImageListItem >
          <img
            src={img.img_path}
            // alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

