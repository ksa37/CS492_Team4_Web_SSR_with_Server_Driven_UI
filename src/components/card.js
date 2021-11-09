import React from 'react'
import Link from 'next/link'
import styles from './card.module.css'
import Image from "next/image"
import MoreVertIcon from "@material-ui/icons/MoreVert";


export default function Card({props}) {  
    const { publisherURL, publisherImgURL, publisher, date, newsURL, title, contents, contentsImgURL } = props

    return (
        <div className={styles.postOutline}> 
            <div className={styles.post}> 
                <div className={styles.cardHeader}>
                    <div className={styles.publishInfo}>
                        <Link href={publisherURL}>
                            <a>
                            <div className={styles.publishInfo}>
                                <Image className={styles.publisherImg}
                                    src={publisherImgURL}
                                    width={24}
                                    height={24}
                                    layout='fixed'
                                    objectFit='contain'
                                />
                                <div className={styles.publisher}>{publisher}</div>
                            </div>
                            </a>
                        </Link>
                        <hr className={styles.verticalDivider}></hr>
                        <div className={styles.date}>{date}</div>
                    </div>
                    <MoreVertIcon className={styles.morevert}>
                    </MoreVertIcon>
                </div>
                <Link href={newsURL}>
                    <a>
                        <div className={styles.title}>{title}</div>
                        <div className={styles.contentsInfo}>
                            <div className={styles.contents}>{contents}</div>
                            <Image className={styles.contentsImg}
                                src={contentsImgURL}
                                width={88}
                                height={88}
                                layout='fixed'
                                objectFit='contain'
                            /> 
                        </div>
                    </a>
                </Link>
            </div>
            <hr className={styles.divider}></hr>

        </div>
    )
}