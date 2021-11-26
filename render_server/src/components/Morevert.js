import React from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import styles from './MoreVert.module.css'

import MoreVertIcon from "@material-ui/icons/MoreVert";

import { Divider, IconButton } from '@mui/material';

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
                    "handleClose": handleClose,
                    "text": "Keep에 저장",
                    "srcURL": '/icons/bookmark.svg'
                }}/>
                <Divider/>
                <MorevertMenuItem props = {{
                    "handleClose": handleClose,
                    "text": "Keep 바로가기",
                    "srcURL": '/icons/forward.svg'
                }}/>
            </Menu>
        </div>
    )
}

function MorevertMenuItem({props}) { 
    const { handleClose, text, srcURL } = props

    return (
        <MenuItem 
            onClick={handleClose}
            style={{ backgroundColor: 'transparent' }}
            disableRipple
        >
            <div className={styles.menuItem}>
                {text}
                <img src={srcURL}/>
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
