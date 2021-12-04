import styles from './dramaVideos.module.css'
import { Paper } from '@mui/material';

export default function PostCard({props}) {  
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