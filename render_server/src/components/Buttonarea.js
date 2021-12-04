import  React from 'react'
import styles from './Bulguksa.module.css'

export default function Buttonarea({buttonarea}) {
    const {mapURL, shareURL, title} = buttonarea
    
    return (
    <>  
        <div className={styles.btnArea}>
            <a className={styles.mapbtnArea} href={mapURL}>
                <img className={styles.mapIcon} src='/icons/map.png' alt='map_button'/>
                지도
            </a>
            <a className={styles.sharebtnArea} onClick={() => {
                shareNaverLink( shareURL, `[공유] ${title}` )
                }}>
                <img className={styles.shareIcon} src='/icons/share.png' alt='share_button'/>
            </a>
        </div>
        
    </>)
}

function shareNaverLink(url, title) { 
    var encodeUrl = encodeURIComponent( url ); 
    var encodeTitle = encodeURIComponent( title );
    var link = `https://share.naver.com/web/shareView.nhn?url=${encodeUrl}&title=${encodeTitle}`; 
    
    // console.log("share Naver", encodeUrl, encodeTitle)
    if (typeof window !== "undefined") {
        // browser code
        window.open( link, 'share', 'width=500, height=500' ); 
    }
}