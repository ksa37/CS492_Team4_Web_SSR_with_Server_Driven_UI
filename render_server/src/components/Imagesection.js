import React from "react";
import styles from "./Imagesection.module.css";
import List from "./List"

export default function Imagesection({data, id}) {
  return (
    <div className={styles.imagesection}>
      <List
        id={id}
        data={data}
      />
    </div>
  )
}