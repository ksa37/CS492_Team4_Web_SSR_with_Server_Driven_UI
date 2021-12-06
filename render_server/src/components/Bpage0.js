import  React from 'react'
import styles from './Bulguksa.module.css'
import { Paper } from '@mui/material'
import Middletitle from './Middletitle'
import Detailinfo from './Detailinfo'
import Buttonarea from './Buttonarea'
import Textexpand from './Textexpand'

export default function Bpage0({first_card, second_card}) {
    const {relimg, middletitle, detailinfo, textexpand, buttonarea, video} = first_card
    const middletitle2 = second_card.middletitle
    const scrollbox = second_card.scrollbox
    return (
    <>
        <Paper 
            sx={{ maxWidth:746, borderRadius: '6px', mx: "11px", mb:"21px", px: '15px', pt:"9px", pb:"21px"}}
            style= {{ background: "#ffffff" }}
        >
            <div className={styles.relimg}>
                <span className={styles.count}>
                    <img className={styles.countimg} color='transparent' src='/images/Bulguksa/imgnum.png' alt='num'/>
                    {relimg.imgs.length}
                </span>
                <div className={styles.imgscroll}>
                    <ul className={styles.imglist}>
                        {relimg.imgs&&relimg.imgs.map((img, index)=> {
                            if(index < 10)
                            {
                                return (
                                    <li key={index} className={styles.imgli}>
                                        <a href={relimg.ahref}>
                                            <div className={styles.thumb}>
                                                <img 
                                                    src={img}
                                                    height= "168px"
                                                    alt={"scroll_"+index}
                                                />
                                            </div>
                                        </a>
                                    </li>
                                )
                            }
                        })}
                    </ul>
                </div>
            </div>
            <Middletitle href={middletitle.href} text={middletitle.text}/>
            <Detailinfo detailinfo={detailinfo} pagenum={0}/>
            <Textexpand textexpand={textexpand} pagenum={0}/>
            <Buttonarea buttonarea={buttonarea}/>
        </Paper>
        <Paper 
            sx={{ maxWidth:746, borderRadius: '6px', mx: "9px", mb: "1px", px: "15px", pt: "9px", pb: "16px"}}
            style= {{ background: "#ffffff" }}
        >
            <Middletitle href={middletitle2.href} text={middletitle2.text}/>
            <div className={styles.scrollbox}>
                <div className={styles.listinfo}>
                    <ul className={styles.infoul}>
                        {scrollbox&&scrollbox.map((scroll, index)=> {
                            return (
                                <li key={index}>
                                    <div className={styles.areacard}>
                                        <a href={scroll.href}><img src={scroll.thumb} width="87px" height="87px" alt={scroll.name + " img"}/></a>
                                        <div className={styles.titlebox}>
                                            <a className={styles.name} href={scroll.href}>{scroll.name}</a>
                                            <span className={styles.subtext}>{scroll.subtext}</span>
                                        </div>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </Paper>
    </>)
}