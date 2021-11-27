import React from 'react';
import styles from "./Standardimagelist.module.css";
import Link from '@mui/material/Link';


export default function StandardImageList({props}) {
  return (
      <div className={styles.container}>
      {props&&props.map((img, index) => (
          <div key={index} className={styles.grid_item} >
            <Link href={img.img_url} underline="none">
              <div>
                {/* <Image
                  src={img.img_path}
                  style={{
                    width:'197px',
                    height:'197px',
                  }}/> */}
                  <img
                  className={styles.grid_item_img}
                  src={img.img_path}
                  // layout="fill"
                  loading="lazy"
                />
              </div>
            </Link>
          </div>
        ))}
    </div>
  )
}