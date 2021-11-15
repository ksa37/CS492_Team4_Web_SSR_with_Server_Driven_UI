import React from 'react'
import Link from 'next/link'
import styles from './card.module.css'
import Image from "next/image"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import MoreVertIcon from "@material-ui/icons/MoreVert";
import BookmarkIcon from "@material-ui/icons/BookmarkBorderOutlined";
import ArrowForwardIcon from "@material-ui/icons/ArrowForwardIos";

import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Container, Chip, CssBaseline, Divider, Grid, IconButton, Paper, Stack, Typography} from '@mui/material';


export default function NewsCard({props}) {  
    const { publisherURL, publisherImgURL, publisher, date, newsURL, title, contents, contentsImgURL } = props
    const now = Date.now()
    var converted_date = dateConvertor(date)

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

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
                    <div>
                        <IconButton
                            onClick={handleClick}
                        >
                            <MoreVertIcon style={{color: '#D1D3D6'}}/>
                        </IconButton>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            >
                            <MenuItem onClick={handleClose}>
                                Keep에 저장
                                <BookmarkIcon/>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                Keep 바로가기
                                <ArrowForwardIcon/>
                            </MenuItem>
                        </Menu>
                    </div>
                }
            />
            <CardContent sx={{ m: 0, p: 0, paddingTop: '8px', paddingLeft: '16px', paddingRight: '16px', marginBottom: '10px' }} variant="contained" >
                <Link href={newsURL}>
                    <a>
                        <div className={styles.title}>{title}</div>
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

function dateConvertor(str_postDate) {
    const now = new Date()
    var postDate = new Date(parseInt(str_postDate))
    var dateText = ""
    
    // console.log("NOW:", now)
    // console.log("Post:", postDate)

    var dateDiff = Math.floor((now.getTime()-postDate.getTime())/(1000*3600*24))
    
    if (dateDiff == 0) {
        // console.log("1")
        var hourDiff = Math.floor((now.getTime()-postDate.getTime())/(1000*3600))
        dateText = hourDiff + "시간 전"
    }
    else if (dateDiff < 8) {
    // else if (dateDiff < 5) {
        // console.log("2")
        dateText = dateDiff + "일 전"
    }
    else {
        dateText = dateFormat(postDate)
    }
    return dateText
}

function dateFormat(date) {
    let month = date.getMonth() + 1;
    let day = date.getDate();

    month = month >= 10 ? month : '0' + month;
    day = day >= 10 ? day : '0' + day;

    return date.getFullYear() + '.' + month + '.' + day + '.'
}