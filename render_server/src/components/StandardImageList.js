import React from 'react';
import Image from "next/image"

import styles from "./imagelist.module.css";
import Link from 'next/link';

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

