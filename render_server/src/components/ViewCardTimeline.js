import React from 'react'
import Link from '@mui/material/Link';
import styles from './postCard.module.css'
import Image from 'material-ui-image'
import MoreVert from './MoreVert'
import DateConvertor from './DateConvertor'
import ImageScroll from './ImageScroll';
import { Avatar, Button, Card, CardContent, CardHeader, Divider, Grid, Paper, Stack} from '@mui/material';

// var ViewType = Object.freeze({
//     NEWS: 0,
//     WIKI: 1,
//     VIEW: 2
// });

export default function ViewCardTimeline({props}) {  
    const { publisherURL, publisherImgURL, publisher, date, postURL, title, contents, contentsImgURL, tags, more_links} = props
    
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
                                        width='100%'
                                        height='100%'
                                        objectFit='contain'
                                    />}
                                </div>
                            </Link>
                        }
                        title = {
                            <div className={styles.publishInfo}>
                                <Link href={publisherURL} underline="none">
                                    <div className={styles.publisher}><b>{publisher}</b></div>
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
                    {contentsImgURL.length > 1 &&
                        <ImageScroll props={{'imgs': contentsImgURL, 'link': postURL}}/>
                    }
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
    )
}