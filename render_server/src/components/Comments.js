import React from 'react'
import Link from '@mui/material/Link';
import styles from './comments.module.css'

export default function Comments({props}){
    const {comments, link} = props

    return (
        <div className={styles.totalComment}>
            <div className={styles.commentsWrap}>
                <div>
                    <ul className={styles.listComment}>
                        {comments&&comments.map((comment, index)=>(
                            <li key={index} className={styles.commentBx}>
                                <Link href={link} underline="none" className={styles.commentBxInner}>
                                    <div className={styles.txtArea}>
                                        <p style={{margin:'0'}}><i className={styles.icoReply}>RE</i>{comment}</p>
                                    </div>
                                </Link>
                            </li> 
                        ))}
                        <li className={styles.commentBx}>
                            <Link href={link} underline="none" className={styles.moreButton}>
                                <span className={styles.moreInfo}>
                                    <span className={styles.iconWrapper}>
                                     <img 
                                        src="/icons/forward_arrow.svg"
                                        style={{paddingTop:'10px'}}
                                        alt="forward"
                                     />
                                    </span>
                                    더보기 
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )


}