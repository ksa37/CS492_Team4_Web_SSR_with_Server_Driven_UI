import React from 'react';
// import Image from 'material-ui-image'
import styles from "./imagelist.module.css";
import Link from '@mui/material/Link';


export default function StandardImageList({props}) {
  return (
      <div className={styles.container}>
      {props&&props.map((img, index) => (
          <div key={index} className={styles.grid_item} >
            <Link href={img.img_url} underline="none">
              <div>
                  <img
                  className={styles.grid_item_img}
                  src={img.img_path}
                  loading="lazy"
                />
              </div>
            </Link>
          </div>
        ))}
    </div>
  )
}

