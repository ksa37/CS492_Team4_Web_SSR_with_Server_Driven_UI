import React from 'react'
import Link from 'next/link'
import styles from './postCard.module.css'
// import Image from "next/image"
import Image from 'material-ui-image'
import Morevert from './Morevert'
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
                            <Morevert props = {{
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
                            <Morevert props = {{
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
        </Card> 
        /*
        <Card sx={{ maxWidth: 766 }} square > 
            <CardHeader 
                sx={{ m: 0, p:0, paddingTop: '12px', paddingLeft: '18px', paddingRight: '10px', paddingBottom: '12px', '& .MuiCardHeader-avatar': {
                    marginRight: '11px',
                  }}} variant="contained"
                avatar={
                    <Link href={publisherURL}>
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
                        <Link href={publisherURL}>
                            <a>
                                <div className={styles.publisher}><b>{publisher}</b></div>
                            </a>
                        </Link>
                    </div>
                }
                subheader={<div className={styles.date}>{converted_date}</div>}
                action = {
                    <Morevert props = {{
                        "open": open, 
                        "anchorEl": anchorEl, 
                        "handleClick": handleClick, 
                        "handleClose": handleClose
                    }}
                    />
                }
            />
            {contentsImgURL != "" && <div className={styles.viewMultiImg}>
                <Image className={styles.contentsImg}
                    src={contentsImgURL}
                    layout="fill"
                /> 
            </div>}
            <CardContent sx={{ m: 0, p: 0, paddingLeft: '18px', paddingRight: '18px', paddingBottom: '15px', paddingTop: '14px',
            "&:last-child": {paddingBottom: 0}}} variant="contained" >
                <Link href={postURL}>
                    <a>
                        <div className={styles.title}>{title}</div>
                        <div className={styles.contentsInfo}>
                        <div className={styles.contents}>{contents}</div>
                        </div>
                    </a>
                </Link>
            </CardContent>   
            <Paper 
              className="group_option_tag_wrap" 
              style={{overflow: 'auto', paddingBottom: 18}}
              elevation='0'
              square
            >
                <Stack direction="row" spacing={1} style= {{paddingLeft:18, paddingRight:18}}> 
                {tags&&tags.map((item) => (
                    <Link href={item.tagURL}>
                    <a>
                    <Button className={styles.tagButton} variant="contained" disableElevation 
                    sx={{'&:hover': {backgroundColor: '#f4f7f8'}}}>#{item.tag_name}
                    </Button>
                    </a>
                    </Link>
                ))}
                </Stack>
            </Paper>
            <ul className='timeline_list'>
                <li>
                    <div></div>
                    <div></div>
                    <div></div>
                </li>
            </ul>
            <Timeline align="left" position="right">
                <TimelineItem>
                <TimelineOppositeContent style={{flex:0, padding:0}}>
                </TimelineOppositeContent>
                    <TimelineSeparator>
                    <TimelineDot variant="outlined" />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent style={{padding:4}}>
                        <Link href={postURL}>
                            <a>
                                <div className={styles.title}>{title}</div>
                                <div className={styles.contentsInfo}>
                                <div className={styles.contents}>{contents}</div>
                                </div>
                            </a>
                        </Link>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot variant="outlined" color="primary" />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Code</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot variant="outlined" color="secondary" />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Sleep</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot variant="outlined" />
                    </TimelineSeparator>
                    <TimelineContent>Repeat</TimelineContent>
                </TimelineItem>
            </Timeline>
        </Card>     */
    )
}