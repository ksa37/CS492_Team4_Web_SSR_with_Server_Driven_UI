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

    var link;
    if (typeof window !== "undefined") {
        link = window.location.href;
        console.log(link);
    }

    const parentRef   = React.useRef(null);
    const childrenRef = React.useRef(null);
    var parentWidth;

    React.useEffect ( () => {
        if(parentRef.current){
            let parentHeight = parentRef.current.offsetHeight;
            parentWidth  = parentRef.current.offsetWidth;
            console.log("parent width:", parentWidth);
        }
        if(childrenRef.current){
            let childrenHeight = childrenRef.current.offsetHeight;
            let childrenWidth  = childrenRef.current.offsetWidth;
            console.log("children width:", childrenWidth);
        }
    }, [parentRef, childrenRef]);
    
    return (
        <>
        <div className={ styles.page }>
        <Card sx={{ maxWidth: 768 }} style={{backgroundColor: "#F1EDEB" }} variant='outlined' square  ref={ parentRef }>
        {/* <div className={styles.wrapHeader}>
        <div className={styles.basicInfoHeader}>
            <div>
                <Link underline="none">
                // <Link href={dramaURL} underline="none">
                    <div className={styles.dramaName}>술꾼도시여자들</div>
                </Link>
                <Link underline="none">
                // </Link><Link href={categoryURL} underline="none"> 
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
            <Box className={styles.box} sx={{m: 0.5}}/>
            <MoreVert props = {{
                "open": open, 
                "anchorEl": anchorEl, 
                "handleClick": handleClick, 
                "handleClose": handleClose,
                "url": link,
                "title": "술꾼도시여자들 공식영상",
                "activeColor": "rgba(145,120,103,1)",
                "inactiveColor": "rgba(145,120,103,0.5)"
            }}/>
        </div>
        </div> */}
        {/* <div ref={ childrenRef }> */}
        <Card className={styles.basicInfoHeader} sx={{ maxWidth: 768, maxHeight: 122 }} style={{backgroundColor: "#F1EDEB" }} variant='outlined' square  ref={ parentRef }>
        <CardHeader 
            sx={{ paddingRight: '8px', 
                '& .MuiCardHeader-action': { padding: 0}
            }}
            // style={{backgroundColor: "#F1EDEB" }}
            title= {
                // <div className={styles.headerInfo}>
                <div>
                    <Link underline="none">
                    {/* // <Link href={dramaURL} underline="none"> */}
                        <div className={styles.dramaName}>술꾼도시여자들</div>
                    </Link>
                    <Link underline="none">
                    {/* // <Link href={categoryURL} underline="none"> */}
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
                    <Box sx={{m: 0.5}}/>
                </div>
            }
            action = {
                <MoreVert props = {{
                    "open": open, 
                    "anchorEl": anchorEl, 
                    "handleClick": handleClick, 
                    "handleClose": handleClose,
                    "url": link,
                    "title": "술꾼도시여자들 공식영상",
                    "activeColor": "rgba(145,120,103,1)",
                    "inactiveColor": "rgba(145,120,103,0.5)"
                }}
                />
            }
            style={{ textAlign: 'left'}}
        />
        </Card>
        <Paper className={styles.innerContent}
            sx={{ mt: '122px', maxWidth:746, height: 1000, borderRadius: '8px' }}>
            <Paper 
            sx={{ maxWidth:716, height: 464, borderRadius: '6px'}}
            style= {{ background: "#D2C9C4" }}
            >
        {/* // {drama_videos&&drama_videos.map((video) => <PostCard key={video.title} props={video} view={{"viewType": ViewType.NEWS }}/>)} */}
            </Paper>
        </Paper>
      </Card>
      </div>

      {/* <MoreContent props={{'view_option': "뉴스",'more_link':news_more}}/> */}
        </>
    )
}