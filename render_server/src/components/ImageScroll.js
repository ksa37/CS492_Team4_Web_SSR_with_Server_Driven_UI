import React from 'react'
import Link from '@mui/material/Link';
import styles from './imageScroll.module.css'

var ScrollType = Object.freeze({
    VIEWBASIC: 0,
    VIEWTIMELINE: 1,
    INFLUENCER: 2
  });

export default function ImageScroll({props, scroll_view}) {
    const {imgs} = props
    // const {imgs, link} = props
    const {scroll_type} = scroll_view
    
    return(
        <>
        {scroll_type==ScrollType.VIEWBASIC &&
        <div className={styles.imageScroller}>
            <ul className={styles.imageScrollerContainer}>
                {imgs&&imgs.map((img, index)=> (
                    <img key={index}
                        className={styles.imageScrollerItem}
                        src={img}
                        alt={index}
                    />
                ))}
            </ul>
        </div>}
        {scroll_type==ScrollType.VIEWTIMELINE &&
        <div className={styles.imageScrollerTimeLine}>
            <ul className={styles.imageScrollerContainerTimeLine}>
                {imgs&&imgs.map((img, index)=> (
                    <img key={index}
                        className={styles.imageScrollerItemTimeLine}
                        src={img}
                        alt={index}
                    />
                ))}
            </ul>
        </div>}
        {scroll_type==ScrollType.INFLUENCER &&
        <div className={styles.imageScrollerInfluencer}>
            <ul className={styles.imageScrollerContainerInfluencer}>
                {imgs&&imgs.map((img, index)=> (
                    <img key={index}
                        className={styles.imageScrollerItemInfluencer}
                        src={img}
                        alt={index}
                    />
                ))}
            </ul>
        </div>}
        </>
    )
}