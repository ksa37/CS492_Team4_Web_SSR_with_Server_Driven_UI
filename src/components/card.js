import React from 'react'
import Link from 'next/link'
import styles from './card.module.css'
import Image from "next/image"

import MoreVertIcon from "@material-ui/icons/MoreVert";

import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Container, Chip, CssBaseline, Divider, Grid, IconButton, Paper, Stack, Typography} from '@mui/material';


export default function NaverCard({props}) {  
    const { publisherURL, publisherImgURL, publisher, date, newsURL, title, contents, contentsImgURL } = props

    // return (
    //     <div className={styles.postOutline}> 
    //         <div className={styles.post}> 
    //             <div className={styles.cardHeader}>
    //                 <div className={styles.publishInfo}>
    //                     <Link href={publisherURL}>
    //                         <a>
    //                         <div className={styles.publishInfo}>
    //                             <Image className={styles.publisherImg}
    //                                 src={publisherImgURL}
    //                                 width={24}
    //                                 height={24}
    //                                 layout='fixed'
    //                                 objectFit='contain'
    //                             />
    //                             <div className={styles.publisher}>{publisher}</div>
    //                         </div>
    //                         </a>
    //                     </Link>
    //                     <hr className={styles.verticalDivider}></hr>
    //                     <div className={styles.date}>{date}</div>
    //                 </div>
    //                 <MoreVertIcon className={styles.morevert}>
    //                 </MoreVertIcon>
    //             </div>
                // <Link href={newsURL}>
                //     <a>
                //         <div className={styles.title}>{title}</div>
                //         <div className={styles.contentsInfo}>
                //             <div className={styles.contents}>{contents}</div>
                //             <Image className={styles.contentsImg}
                //                 src={contentsImgURL}
                //                 width={88}
                //                 height={88}
                //                 layout='fixed'
                //                 objectFit='contain'
                //             /> 
                //         </div>
                //     </a>
                // </Link>
    //         </div>
    //         <hr className={styles.divider}></hr>

    //     </div>
    // )

    return (
        // <Card sx={{ maxWidth: 766}} variant='outlined' square > 
        <Card sx={{ maxWidth: 766 }} square > 
            <CardHeader 
                sx={{ m: 0, p:0, paddingTop: '8px', paddingLeft: '16px', paddingRight: '8px' }} variant="contained"
                avatar={
                    <Link href={publisherURL}>
                        <a>
                            <div className={styles.publisherImgBoarder}>
                                <Image className={styles.publisherImg}
                                    src={publisherImgURL}
                                    // src={contentsImgURL}
                                    width='100%'
                                    height='100%'
                                    objectFit='contain'
                                />
                            </div>
                        </a>
                    </Link>
                }
                title = {
                    <div className={styles.publishInfo}>
                        <Link href={publisherURL}>
                            <a>
                                <div className={styles.publisher}>{publisher}</div
                            ></a>
                        </Link>
                        <hr className={styles.verticalDivider}></hr>
                        <div className={styles.date}>{date}</div>
                    </div>
                }
                action={
                    <IconButton>
                        <MoreVertIcon style={{color: '#D1D3D6'}}/>
                    </IconButton>
                }
            />
            <CardContent sx={{ m: 0, p: 0, paddingTop: '8px', paddingLeft: '16px', paddingRight: '16px', marginBottom: '10px' }} variant="contained" >
                <Link href={newsURL}>
                    <a>
                        <div className={styles.title}>{title}</div>
                        <div className={styles.contentsInfo}>
                            <div className={styles.contents}>{contents}</div>
                            <div className={styles.contentsImgBoarder}>
                                <Image className={styles.contentsImg}
                                    src={contentsImgURL}
                                    width='100%'
                                    height='100%'
                                    objectFit='contain'
                                /> 
                            </div>
                        </div>
                    </a>
                </Link>
            </CardContent>                      
        </Card>
    )
}