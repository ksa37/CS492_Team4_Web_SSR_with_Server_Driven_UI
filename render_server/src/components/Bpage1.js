import  React from 'react'
import styles from './Bulguksa.module.css'
import { Paper, Divider } from '@mui/material'
import Middletitle from './Middletitle'
import Detailinfo from './Detailinfo'
import Buttonarea from './Buttonarea'
import Morecontent from './Morecontent'
import Textexpand from './Textexpand'

export default function Bpage1({first_card, second_card, third_card}) {
    const {relimg, middletitle, detailinfo, buttonarea, video} = first_card
    const {text, description, dict_more} = second_card
    const text2 = third_card.text
    const detailinfo2 = third_card.detailinfo
    return (
    <>
        <Paper 
            sx={{ maxWidth:746, borderRadius: '6px', mx: "11px", mb: "12px", px: '15px', pt:"9px", pb:"21px"}}
            style= {{ background: "#ffffff" }}
        >
            <div className={styles.relimg}>
                <div className={styles.imgscroll}>
                    <ul className={styles.imglist}>
                        <li className={styles.imgli}>
                            <a href={video.href}>
                                <div className={styles.thumb}>
                                    <img 
                                        className={styles.thumbimg}
                                        src={video.img}
                                        alt="video"
                                    />
                                    <div className={styles.icon}>
                                        <img color='transparent'
                                        src='/images/Bulguksa/video.png'
                                        width='28px'
                                        height='32px'
                                        alt='icon'/>
                                    </div>
                                    <span className={styles.time}>{video.time}</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <Detailinfo detailinfo={detailinfo} pagenum={0}/>
            <Buttonarea buttonarea={buttonarea}/>
        </Paper>
        <Paper 
            sx={{ maxWidth:746, borderRadius: '6px', mx: "11px", px: "15px", pt: "9px", pb: "16px", borderRadius: '8px 8px 0 0'}}
            style= {{ background: "#ffffff" }}
        >
            <Middletitle href={"#"} text={text}/>
            <Textexpand textexpand={description} pagenum={1}/>
        </Paper>

        <Divider sx={{ mx: "11px", background: "#ECF0F2" }}/>
        <a href={dict_more} style={{ cursor: "pointer" }} >
            <Paper 
                variant="elevation"
                sx={{ py: "12px", mb: "21px", mx: "11px", borderRadius: '0 0 8px 8px'}}
                style={{backgroundColor: "#FAFBFB" }}>
                <div className={styles.showMore}>
                    지식백과 더보기 
                    <img className={styles.img} src="/icons/forward_arrow.svg" alt='arrow' />
                </div>
            </Paper> 
        </a>
        
        <Paper 
            sx={{ maxWidth:746, borderRadius: '6px', mx: "9px", mb: "1px", px: '15px', pt:"9px", pb:"21px"}}
            style= {{ background: "#ffffff" }}
        >
            <Middletitle href={"#"} text={text2}/>
            <Detailinfo detailinfo={detailinfo2} pagenum={1}/>
        </Paper>
    </>)
}