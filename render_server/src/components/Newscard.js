import React from 'react'
import Link from 'next/link'
import styles from './newscard.module.css'
import Image from "next/image"
import Morevert from './Morevert'
import DateConvertor from './DateConvertor'


import { Card, CardContent, CardHeader, Divider } from '@mui/material';


export default function NewsCard({props}) {  
    const { publisherURL, publisherImgURL, publisher, date, newsURL, title, contents, contentsImgURL } = props
    const now = Date.now()
    var converted_date = DateConvertor(date)

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        console.log(event.currentTarget)
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    var isWiki = false;
    return (
        <Card sx={{ maxWidth: 766 }} square > 
            <CardHeader 
                sx={{ m: 0, p:0, paddingTop: '8px', paddingLeft: '16px', paddingRight: '8px' }} variant="contained"
                avatar={
                    <Link href={publisherURL}>
                        <a>
                            <div className={styles.publisherImgBoarder}>
                                {publisherImgURL == ""
                                ? <Image className={styles.publisherImg}
                                    src="/images/default_publisher.png" 
                                    width='100%'
                                    height='100%'
                                    objectFit='contain'
                                />
                                : <Image className={styles.publisherImg}
                                    
                                    src={publisherImgURL}
                                    // src={contentsImgURL}
                                    width='100%'
                                    height='100%'
                                    objectFit='contain'
                                />}
                            </div>
                        </a>
                    </Link>
                }
                title = {
                    <div className={styles.publishInfo}>
                        <Link href={publisherURL}>
                            <a>
                                <div className={styles.publisher}>{publisher}</div>
                            </a>
                        </Link>
                        <hr className={styles.verticalDivider}></hr>
                        <div className={styles.date}>{converted_date}</div>
                        {/* <div className={styles.date}>{date}</div> */}
                    </div>
                }
                action = {
                    <Morevert props = {{
                        "open": open, 
                        "anchorEl": anchorEl, 
                        "handleClick": handleClick, 
                        "handleClose": handleClose
                    }}/>
                }
            />
            <CardContent sx={{ m: 0, p: 0, paddingTop: '8px', paddingLeft: '16px', paddingRight: '16px', marginBottom: '10px' }} variant="contained" >
                <Link href={newsURL}>
                    <a>
                        <div className={styles.title}>{title}</div>
                        {isWiki && <Divider margin='10px'/>}
                        <div className={styles.contentsInfo}>
                            <div className={styles.contents}>{contents}</div>
                            {contentsImgURL != "" && <div className={styles.contentsImgBoarder}>
                                <Image className={styles.contentsImg}
                                    src={contentsImgURL}
                                    // width='100%'
                                    width='88px'
                                    height='100%'
                                    objectFit='contain'
                                /> 
                            </div>}
                        </div>
                    </a>
                </Link>
            </CardContent>                      
        </Card>
    )
}
