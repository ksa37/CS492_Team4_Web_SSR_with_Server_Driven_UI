import React from 'react'
import styles from './imageScroll.module.css'

export default function ImageScroll({props, view}) {
    const {imgs, link} = props
    
    return(
        <div className={styles.imageScroller}>
            <ul className={styles.imageScrollerContainer}>
                {imgs&&imgs.map((img, index)=> (
                    index==0
                    ?
                    <a key={index} href={link} >
                    <img
                        className={styles.imageScrollerItem}
                        style={{marginLeft:18}}
                        src={img}
                    />
                    </a>
                    :   <>
                        {index==imgs.length-1
                        ? <a key={index} href={link}>
                        <img
                            className={styles.imageScrollerItem}
                            style={{marginRight:18}}
                            src={img}
                        />
                        </a>
                        : <a key={index} href={link}>
                        <img
                            className={styles.imageScrollerItem}
                            src={img}
                        />
                        </a>}
                        </>
                    
                ))}
            </ul>
        </div>
    )
}