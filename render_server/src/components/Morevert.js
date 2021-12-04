import React from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import styles from './MoreVert.module.css'

import MoreVertIcon from "@mui/icons-material/MoreVert";
import BookmarkIcon from '../../public/icons/bookmark.svg'; 
import ForwardIcon from '../../public/icons/forward.svg'; 

import { IconButton, Box } from '@mui/material';

export default function MoreVert({props}) {  
    const { open, anchorEl, handleClick, handleClose, url, title, activeColor='#9FA4AA', inactiveColor='#D1D3D6' } = props
    const [keep, setKeep] = React.useState(true);
    const setKeepClick = (event) => {
        setKeep(!keep);
        // console.log(keep)
    };

    return (
        <div>
            <IconButton sx={{ py: 0 }}
                onClick={handleClick}
                style={{ backgroundColor: 'transparent' }}
                disableRipple
            >
                { open
                ? <MoreVertIcon style={{color: activeColor}}/>
                : <MoreVertIcon style={{color: inactiveColor}}/>
                // ? <MoreVertIcon style={{color: '#8F8F8F'}}/>
                // : <MoreVertIcon style={{color: '#D1D3D6'}}/>
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
                        shareNaverLink( url, `[공유] ${title}` )
                        // shareNaverLink( 'https://n.news.naver.com/mnews/article/366/0000772471?sid=101', '이 링크를 공유' )
                        },
                    "text": "공유하기",
                    "icon": <img src="/icons/naver_share.png" 
                                width="auto"
                                height="16px"
                                alt='share'
                                />
                }}/>
                <Box style={{ backgroundColor: "transparent", height: "8px" }}/>
                <div className={styles.divider}/>
                {keep
                ? <div> 
                    <Box style={{ backgroundColor: "transparent", height: "8px" }}/>
                    <MorevertMenuItem props = {{
                        "onClick": setKeepClick,
                        "text": "Keep에 저장",
                        "icon": <BookmarkIcon style={{ stroke: '#B3B4B6'}}/>
                    }}/>
                    <Box style={{ backgroundColor: "transparent", height: "8px" }}/>
                    <div className={styles.divider}/>
                </div>
                : <div>
                    <Box style={{ backgroundColor: "var(--naver_green)", height: "8px" }}/>
                    <MorevertMenuItem props = {{
                        "onClick": setKeepClick,
                        "text": "저장된 문서입니다.",
                        "icon": <BookmarkIcon style={{ stroke: "var(--naver_green)", fill: '#FFFFFF'}}/>,
                        // "icon": <BookmarkIcon style={{ stroke: "#5ECA69", fill: '#FFFFFF'}}/>,
                        "bgColor": 'var(--naver_green)',
                        "color": '#FFFFFF'
                    }}/>
                    <Box style={{ backgroundColor: "var(--naver_green)", height: "8px" }}/>
                    <div className={styles.divider}/>
                </div>
                }
                <Box style={{ backgroundColor: "transparent", height: "8px" }}/>
                <MorevertMenuItem props = {{
                    "onClick": () => {
                                if (typeof window !== "undefined") {
                                    // window.location.replace( "https://keep.naver.com/" ); 
                                    window.location.href = "https://keep.naver.com/";
                                
                                }},
                    "text": "Keep 바로가기",
                    "icon": <ForwardIcon style={{ stroke: "#B3B4B6", width: "7px", height: "11px" }}/>,
                }}/>
            </Menu>
        </div>
    )
}

function MorevertMenuItem({props}) { 
    const { onClick, text, icon, bgColor="transparent", color="var(--dark_gray_2)" } = props

    return (
        <MenuItem 
            onClick={onClick}
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
    var link = `https://share.naver.com/web/shareView.nhn?url=${encodeUrl}&title=${encodeTitle}`; 
    
    // console.log("share Naver", encodeUrl, encodeTitle)
    if (typeof window !== "undefined") {
        // browser code
        window.open( link, 'share', 'width=500, height=500' ); 
    }
}
