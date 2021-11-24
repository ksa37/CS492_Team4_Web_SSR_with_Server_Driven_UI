import React from 'react'
import Link from 'next/link'
import styles from './postCard.module.css'
// import Image from "next/image"
import Image from 'material-ui-image'
import MoreVert from './MoreVert'
import DateConvertor from './DateConvertor'

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

import { Avatar, Button, Card, CardContent, CardHeader, Divider, Grid, Paper, Stack} from '@mui/material';

export default function ViewCardTimeline({props, view}) {  
    const { publisherURL, publisherImgURL, publisher, date, postURL, title, contents, contentsImgURL, tags, more_links} = props
    const { viewType } = view

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

    const more_links_exist = more_links.length!=0;

    return (

        <Card sx={{ maxWidth: 766, borderTop: 'solid 1px rgb(236, 240, 242)'}} square > 
            <div className={styles.timelineDate}>
                2021.11.22
            </div>
            <div className={styles.timelineContent} >
                <div className={styles.timelineCircle}/>
                <div className={styles.timelineContentInner}>
                    <CardHeader 
                        sx={{ m: 0, p:0, paddingTop:'4px',paddingBottom:'6px', '& .MuiCardHeader-avatar': {
                            marginRight: '10px', elevation: '0px'
                        }}} variant="contained"
                        avatar={
                            <Link href={publisherURL} underline="none">
                                <a>
                                    <div className={styles.viewMultiImgBoarder }>
                                        {publisherImgURL == ""
                                        ? <Image className={styles.viewMultiImgBoarder }
                                            src="/images/default_publisher.png" 
                                            width='100%'
                                            height='100%'
                                            objectFit='contain'
                                        />
                                        : <Image className={styles.viewMultiImgBoarder }
                                            
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
                                <Link href={publisherURL} underline="none">
                                    <a>
                                        <div className={styles.publisher}><b>{publisher}</b></div>
                                    </a>
                                </Link>
                            </div>
                        }
                        subheader={<div className={styles.date}>{converted_date}</div>}
                        action = {
                            <MoreVert props = {{
                                "open": open, 
                                "anchorEl": anchorEl, 
                                "handleClick": handleClick, 
                                "handleClose": handleClose
                            }}
                            />
                        }
                    />   
                    <div className={styles.imageScroller}>
                        <ul className={styles.imageScrollerContainer}>
                            {/* <li className={styles.imageScrollerItem}> */}
                                <img
                                    className={styles.imageScrollerItem}
                                    src={publisherImgURL}
                                    width={100}
                                    height={93}/>
                            {/* </li> */}
                            {/* <li className={styles.imageScrollerItem}> */}
                                <img
                                    className={styles.imageScrollerItem}
                                    src={publisherImgURL}
                                    width={100}
                                    height={93}/>
                            {/* </li> */}
                            {/* <li className={styles.imageScrollerItem}> */}
                                <img
                                className={styles.imageScrollerItem}
                                    src={publisherImgURL}
                                    width={100}
                                    height={93}/>
                            {/* </li> */}
                            {/* <li className={styles.imageScrollerItem}> */}
                                <img
                                className={styles.imageScrollerItem}
                                    src={publisherImgURL}
                                    width={100}
                                    height={93}/>
                            {/* </li> */}
                            {/* <li className={styles.imageScrollerItem}> */}
                                <img
                                className={styles.imageScrollerItem}
                                    src={publisherImgURL}
                                    width={100}
                                    height={93}/>
                            {/* </li> */}
                            {/* <li className={styles.imageScrollerItem}> */}
                                <img
                                className={styles.imageScrollerItem}
                                    src={publisherImgURL}
                                    width={100}
                                    height={93}/>
                            {/* </li> */}
                            {/* <li className={styles.imageScrollerItem}> */}
                                <img
                                className={styles.imageScrollerItem}
                                    src={publisherImgURL}
                                    width={100}
                                    height={93}/>
                            {/* </li> */}
                            {/* <li className={styles.imageScrollerItem}> */}
                                <img
                                className={styles.imageScrollerItem}
                                    src={publisherImgURL}
                                    width={100}
                                    height={93}/>
                            {/* </li> */}
                            {/* <li className={styles.imageScrollerItem}> */}
                                <img
                                className={styles.imageScrollerItem}
                                    src={publisherImgURL}
                                    width={100}
                                    height={93}/>
                            {/* </li> */}
                            {/* <li className={styles.imageScrollerItem}> */}
                                <img
                                className={styles.imageScrollerItem}
                                    src={publisherImgURL}
                                    width={100}
                                    height={93}/>
                            {/* </li> */}
                            {/* <li className={styles.imageScrollerItem}> */}
                                <img
                                className={styles.imageScrollerItem}
                                    src={publisherImgURL}
                                    width={100}
                                    height={93}/>
                            {/* </li> */}
                        </ul>
                    </div>  
                    <div>
                        <Link href={postURL} underline="none">
                            <a>
                                <div className={styles.title}>{title}</div>
                                <div className={styles.contentsInfo}>
                                <div className={styles.contents}>{contents}</div>
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </Card>
/* 
            <Divider sx={{marginLeft:'32px', marginRight:'18px'}}/>
            <div className={styles.timelineContent} >
                <div className={styles.timelineCircle}/>
                <div className={styles.timelineContentInner}>
                    <CardHeader 
                        sx={{ m: 0, p:0, paddingTop:'4px',paddingBottom:'6px', '& .MuiCardHeader-avatar': {
                            marginRight: '10px', elevation: '0px'
                        }}} variant="contained"
                        avatar={
                            <Link href={publisherURL} underline="none">
                                <a>
                                    <div className={styles.viewMultiImgBoarder }>
                                        {publisherImgURL == ""
                                        ? <Image className={styles.viewMultiImgBoarder }
                                            src="/images/default_publisher.png" 
                                            width='100%'
                                            height='100%'
                                            objectFit='contain'
                                        />
                                        : <Image className={styles.viewMultiImgBoarder }
                                            
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
                                <Link href={publisherURL} underline="none">
                                    <a>
                                        <div className={styles.publisher}><b>{publisher}</b></div>
                                    </a>
                                </Link>
                            </div>
                        }
                        subheader={<div className={styles.date}>{converted_date}</div>}
                        action = {
                            <MoreVert props = {{
                                "open": open, 
                                "anchorEl": anchorEl, 
                                "handleClick": handleClick, 
                                "handleClose": handleClose
                            }}
                            />
                        }
                    />   
                    <div className={styles.imageScroller}>
                        <ul className={styles.imageScrollerContainer}>
                            <li className={styles.imageScrollerItem}>
                                <Image
                                    src={publisherImgURL}
                                    width={100}
                                    height={93}/>
                            </li>
                            <li className={styles.imageScrollerItem}>
                                <Image
                                    src={publisherImgURL}
                                    width={100}
                                    height={93}/>
                            </li>
                            <li className={styles.imageScrollerItem}>
                                <Image
                                    src={publisherImgURL}
                                    width={100}
                                    height={93}/>
                            </li>
                            <li className={styles.imageScrollerItem}>
                                <Image
                                    src={publisherImgURL}
                                    width={100}
                                    height={93}/>
                            </li>
                            <li className={styles.imageScrollerItem}>
                                <Image
                                    src={publisherImgURL}
                                    width={100}
                                    height={93}/>
                            </li>
                            <li className={styles.imageScrollerItem}>
                                <Image
                                    src={publisherImgURL}
                                    width={100}
                                    height={93}/>
                            </li>
                            <li className={styles.imageScrollerItem}>
                                <Image
                                    src={publisherImgURL}
                                    width={100}
                                    height={93}/>
                            </li>
                            <li className={styles.imageScrollerItem}>
                                <Image
                                    src={publisherImgURL}
                                    width={100}
                                    height={93}/>
                            </li>
                            <li className={styles.imageScrollerItem}>
                                <Image
                                    src={publisherImgURL}
                                    width={100}
                                    height={93}/>
                            </li>
                            <li className={styles.imageScrollerItem}>
                                <Image
                                    src={publisherImgURL}
                                    width={100}
                                    height={93}/>
                            </li>
                            <li className={styles.imageScrollerItem}>
                                <Image
                                    src={publisherImgURL}
                                    width={100}
                                    height={93}/>
                            </li>
                        </ul>
                    </div>  
                    <div>
                        <Link href={postURL} underline="none">
                            <a>
                                <div className={styles.title}>{title}</div>
                                <div className={styles.contentsInfo}>
                                <div className={styles.contents}>{contents}</div>
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </Card>  */
        
    )
}