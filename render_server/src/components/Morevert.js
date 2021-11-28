import React from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import styles from './MoreVert.module.css'
import Link from '@mui/material/Link';

import MoreVertIcon from "@material-ui/icons/MoreVert";
import BookmarkIcon from '../../public/icons/bookmark.svg'; 
import ForwardIcon from '../../public/icons/forward.svg'; 

import { Divider, IconButton, Box } from '@mui/material';

export default function MoreVert({props}) {  
    const { open, anchorEl, handleClick, handleClose } = props

    return (
        <div>
            <IconButton sx={{ py: 0 }}
                onClick={handleClick}
                // onClick={
                //     // {handleClick} && 
                //     () => {
                //     shareNaverLink( 'https://n.news.naver.com/mnews/article/366/0000772471?sid=101', '이 링크를 공유' )
                //     }
                // }
                

                style={{ backgroundColor: 'transparent' }}
                disableRipple
            >
                { open
                ? <MoreVertIcon style={{color: '#8F8F8F'}}/>
                : <MoreVertIcon style={{color: '#D1D3D6'}}/>
                }   
            </IconButton>
            <Menu
                id="morevert-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                PaperProps={{
                    elevation: 3,
                }}
                >
                <MorevertMenuItem props = {{
                    "onClick": () => {
                        shareNaverLink( 'https://n.news.naver.com/mnews/article/366/0000772471?sid=101', '이 링크를 공유' )
                        },
                    "text": "공유하기",
                    "icon": <img src="https://ssl.pstatic.net/share/js/naver_sharebutton.js"/>
                }}/>
                <Box style={{ backgroundColor: "transparent", height: "8px" }}/>
                <div className={styles.divider}/>
                <Box style={{ backgroundColor: "transparent", height: "8px" }}/>
                {/* <Divider sx={{ m: 0 }}/> */}
                <MorevertMenuItem props = {{
                    "onClick": () => {
                                shareNaverLink( 'https://n.news.naver.com/mnews/article/366/0000772471?sid=101', '이 링크를 공유' )
                                },
                    "text": "Keep에 저장",
                    "icon": <BookmarkIcon style={{stroke: '#B3B4B6'}}/>
                }}/>
                <Box style={{ backgroundColor: "transparent", height: "8px" }}/>
                <div className={styles.divider}/>
                <Box style={{ backgroundColor: "var(--naver_green)", height: "8px" }}/>
                {/* <Divider sx={{ m: 0 }}/> */}
                <MorevertMenuItem props = {{
                    "onClick": () => {
                        shareNaverLink( 'https://n.news.naver.com/mnews/article/366/0000772471?sid=101', '이 링크를 공유' )
                        },
                    "text": "저장된 문서입니다.",
                    "icon": <BookmarkIcon style={{stroke: 'var(--naver_green)', fill: '#FFFFFF'}}/>,
                    "bgColor": 'var(--naver_green)',
                    "color": '#FFFFFF'
                }}/>
                {/* <Divider sx={{ m: 0 }}/> */}
                <Box style={{ backgroundColor: "var(--naver_green)", height: "8px" }}/>
                <div className={styles.divider}/>
                <Box style={{ backgroundColor: "transparent", height: "8px" }}/>
                <MorevertMenuItem props = {{
                    "onClick": () => {
                                if (typeof window !== "undefined") {
                                    window.location.replace( "https://keep.naver.com/" ); 
                                }},
                    "text": "Keep 바로가기",
                    "icon": <img src='/icons/forward.svg'/>
                }}/>
            </Menu>
        </div>
    )
}

function MorevertMenuItem({props}) { 
    const { onClick, text, icon, bgColor = "transparent", color = "var(--dark_gray_2)" } = props
    // const { onClick, text, icon, bgColor, color } = props

    return (
        <MenuItem 
            onClick={onClick}
            // style={{ backgroundColor: 'transparent', color: 'var(--dark_gray_2)' }}
            style={{ backgroundColor: bgColor, color: color }}
            disableRipple
        >
            <div className={styles.menuItem}>
                {text}
                {icon}
            </div>
        </MenuItem>
    )
}

function shareNaverLink(url, title) { 
    var encodeUrl = encodeURIComponent( url ); 
    var encodeTitle = encodeURIComponent( title ); 
    // var link = StringTool.format( 'https://share.naver.com/web/shareView.nhn?url={0}&title={1}', encodeUrl, encodeTitle ); 
    var link = `https://share.naver.com/web/shareView.nhn?url=${encodeUrl}&title=${encodeTitle}`; 

    console.log("share Naver")
    if (typeof window !== "undefined") {
        // browser code
        window.open( link, 'share', 'width=500, height=500' ); 
    }
}
