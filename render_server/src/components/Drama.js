import React from 'react'
import Link from '@mui/material/Link';
import MoreVert from './MoreVert'
import styles from './drama.module.css'

import { Card, CardContent, CardHeader, Divider, Box, Paper } from '@mui/material';

export default function Drama({props}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        console.log(event.currentTarget)
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    return (
        <>
        <Card sx={{ maxWidth: 768 }} style={{backgroundColor: "#F1EDEB" }} variant='outlined' square>
        <CardHeader 
            sx={{ paddingRight: '8px', 
                '& .MuiCardHeader-action': { padding: 0}
            }}
            title= {
                <div className={styles.headerInfo}>
                    <Link underline="none">
                    {/* <Link href={dramaURL} underline="none"> */}
                        <div className={styles.dramaName}>술꾼도시여자들</div>
                    </Link>
                    <Link underline="none">
                    {/* <Link href={categoryURL} underline="none"> */}
                        <div className={styles.dramaCategory}>웹드라마</div>
                    </Link>
                    <div className={styles.menu}>
                        전체
                        <div className={styles.verticalDivider}></div>
                        기본정보
                        <div className={styles.verticalDivider}></div>
                        등장인물
                        <div className={styles.verticalDivider}></div>
                        공식영상
                        <div className={styles.verticalDivider}></div>
                        함께 볼만한 웹드라마
                    </div>
                </div>
            }
            action = {
                <MoreVert props = {{
                    "open": open, 
                    "anchorEl": anchorEl, 
                    "handleClick": handleClick, 
                    "handleClose": handleClose
                }}
                />
            }
            style={{ textAlign: 'left'}}
        />
        <Paper 
            sx={{ maxWidth:746, height: 1000, borderRadius: '8px' }}>
            <Paper 
            sx={{ maxWidth:716, height: 464, borderRadius: '6px'}}
            style= {{ background: "#D2C9C4" }}
            >
            
        {/* {drama_videos&&drama_videos.map((video) => <PostCard key={video.title} props={video} view={{"viewType": ViewType.NEWS }}/>)} */}
                
        </Paper>
                
        </Paper>
      </Card>
      {/* <MoreContent props={{'view_option': "뉴스",'more_link':news_more}}/> */}
        </>
    )
}