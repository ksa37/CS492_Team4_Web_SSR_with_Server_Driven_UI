import React from 'react'
import styles from './postCard.module.css'


export default function GrayboxLink({props}){
    const {publisher, gray_tag, link} = props
    return(
    <a href={link} className={styles.linkBox}>
        <span style={{marginRight:'12px', overflow:'hidden'}}>
            <img
                src={"icons/link.png"}
                height={11}
                width={11}
                alt='link'
            />
            <span> {publisher}의 #{gray_tag} 콘텐츠 더보기</span>
            <img
                className={styles.linkBoxForward}
                src={'/icons/forward.svg'}
                width={7}
                height={11}
                alt='forward'
            />     
        </span>
    </a>
    )
}