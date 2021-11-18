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
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box} from '@mui/material';
// import { BoxProps } from '@mui/material/Box';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Image from "next/image"

import styles from "./imagelist.module.css";
import Link from 'next/link';

// const styles = createTheme({

//   responsiveImage: {
//     width: '100%',
//     // Without height undefined it won't work
//     height: '100%',
//     // figure out your image aspect ratio
//     aspectRatio: 1,
//   },

// });

// function Item(props) {
//   const { sx, ...other } = props;
//   return (
//     <Box
//       sx={{
//         bgcolor: 'primary.main',
//         color: 'white',
//         p: 1,
//         borderRadius: 1,
//         textAlign: 'center',
//         fontSize: '1rem',
//         fontWeight: '700',
//         ...sx,
//       }}
//       {...other}
//     />
//   );
// }

export default function StandardImageList({props}) {
  
  return (
      <div className={styles.container}>
      {props&&props.map((img) => (
          <div className={styles.grid_item} >
            <Link href={img.img_url}>
              <a>
              <Image
                  src={img.img_path}
                  layout="fill"
                />
              </a>
            </Link>
          </div>
        ))}
    </div>
  );


}

