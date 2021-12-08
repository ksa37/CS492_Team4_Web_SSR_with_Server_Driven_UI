import React from "react";

import Gallery from "./react-photo-gallery/Gallery";
import styles from "./Imagesection.module.css";

export default function List({ id, data }) {
    var listphotos = [];
    for (var j = 0; j < id; j++) {
        var photos = [];
        for (var i = 0; i < 12; i++) {
            if (12 * j + i < data.imgs.length) {
                photos.push({
                    src: data.imgs[12 * j + i],
                    width: data.ratios[12 * j + i],
                    height: 1,
                    href: data.hrefs[12 * j + i],
                    lindex: 12 * j
                })
            }
        }
        listphotos.push(photos);
    }
    return listphotos.map((photos, index) => {
        return (
            <div key={index} className={styles.item}>
                <Gallery photos={photos} targetRowHeight={180}/>
            </div>
        )
    })
}
