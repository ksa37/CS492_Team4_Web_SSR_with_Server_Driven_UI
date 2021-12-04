import React from 'react'
import styles from './postCard.module.css'


export default function GrayboxLink({props}){
    const {publisher, gray_tag, link_num, link} = props
    var text = ''
    if (gray_tag) { //for view
        text = ` ${publisher}의 #${gray_tag} 콘텐츠 더보기`
    }else if(link_num){ //for influencer
        text = ` ${publisher}의 참여 콘텐츠 ${link_num}개 더보기`
    }
    return(
    <a href={link} className={styles.linkBox}>
        <span style={{marginRight:'12px', overflow:'hidden'}}>
            <img
                src={"icons/link.png"}
                height={11}
                width={11}
                alt='link'
            />
            {/*  {publisher}의 #{gray_tag} 콘텐츠 더보기 */}
            <span>{text}</span>
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