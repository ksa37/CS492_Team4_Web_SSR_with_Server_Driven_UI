import React from 'react';
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

