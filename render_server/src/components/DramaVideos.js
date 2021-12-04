import React from 'react'
import styles from './dramaVideos.module.css'
import { Paper, Divider } from '@mui/material';
import ForwardIcon from '../../public/icons/forward.svg'; 

export default function DramaVideos({props}) {  
    const {showMore, videoData} = props

    const [viewAll, setViewAll] = React.useState(true);
    const setViewAllClick = (event) => {
        setViewAll(!viewAll);
    };

    return (
      <>
        <Paper
            sx={{ px: "15px", py: "21px", mx: "11px", maxWidth:746, borderRadius: '8px 8px 0px 0px' }}>
            {
                videoData.map((data, i) => {
                    if (viewAll && i < 4) {
                        return ( <VideoList key={i} props={data}></VideoList> )
                    }
                    if (!viewAll && i < 8) {
                        return ( <VideoList key={i} props={data}></VideoList> )
                    }
                })
            }
            {!viewAll && 
                <a className={styles.showMore} href={showMore}>
                    공식영상 더보기
                    <ForwardIcon className={styles.icon} style={{ stroke: "#B3B4B6", width: "7px", height: "11px" }}/>
                </a>
            }
        </Paper>
        <Divider sx={{ mx: "11px", background: "#ECF0F2" }}/>
        <a onClick={setViewAllClick} style={{ cursor: "pointer" }} >
            <Paper 
                variant="elevation"
                sx={{ py: "12px", mb: "21px", mx: "11px", borderRadius: '0 0 8px 8px'}}
                style={{backgroundColor: "#FAFBFB" }}>
                    {viewAll ?
                    <div className={styles.viewAll}>
                        펼쳐보기 
                        <ForwardIcon className={styles.iconDown} style={{ stroke: "#8A8D8F", width: '9px', height: '16px' }}/>
                    </div>
                    :<div className={styles.viewAll}>
                        접기 
                        <ForwardIcon className={styles.iconUp} style={{ stroke: "#8A8D8F", width: '9px', height: '16px' }}/>
                    </div>
                    }
            </Paper> 
        </a>
    </>
    )
}

function VideoList({props}) {  
    const { thumbImg, videoURL, videoLength, title, publisher, viewCount, date } = props
  
    return (
      <Paper 
          sx={{ maxWidth: 716, borderRadius: '6px', mb: '12px'}}
          style= {{ background: "#FFFFFF" }}
          > 
          <a href={videoURL}>
              <div className={styles.thumb}>
                  <img 
                      className={styles.img}
                      src={thumbImg}
                      alt="video"
                  />
                  <div className={styles.icon}>
                      <img color='transparent'
                      src='/images/Bulguksa/video.png'
                      width='28px'
                      height='32px'
                      alt='icon'/>
                  </div>
                  <span className={styles.time}>{videoLength}</span>
              </div>
          </a>
          <div className={styles.videoInfo}>
              <a href={videoURL}>
                  <div className={styles.videoTitle}>{title}</div>
                  <div className={styles.subInfo}>
                      {publisher}
                      <div className={styles.verticalDivider2}></div>
                      {viewCount}
                      <div className={styles.verticalDivider2}></div>
                      {date}
                  </div>
              </a>
          </div>
      </Paper>
    )
}
