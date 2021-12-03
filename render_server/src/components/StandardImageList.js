import React from 'react';
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
<<<<<<< HEAD
                  alt={index}
=======
>>>>>>> 4eb85f7651b68a2f7e9edd858b75bdbaf70f33f2
                  loading="lazy"
                />
              </div>
            </Link>
          </div>
        ))}
    </div>
  )
}

