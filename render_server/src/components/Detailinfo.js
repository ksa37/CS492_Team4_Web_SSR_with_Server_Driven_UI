import  React from 'react'
import styles from './Bulguksa.module.css'

export default function Detailinfo({detailinfo, pagenum}) {
    return (
    <>
        <div className={pagenum===0? styles.detailinfo : styles.proinfobox}>
            <dl className={pagenum===0? styles.infotxt : styles.proinfotxt}>
                {detailinfo&&detailinfo.map((info, index)=> {
                    if(info.length === 2)
                    {
                        return (
                            <div key={index} className={styles.infogroup}>
                                <dt className={pagenum===0? styles.infodt : styles.proinfodt}><span className={styles.bar}/>{info[0]}</dt>
                                <dd className={pagenum===0? styles.infodd : styles.proinfodd}>{info[1]}</dd>
                            </div>
                        )
                    }
                    else if(info.length === 3)
                    {
                        return (
                            <div key={index} className={styles.infogroup}>
                                <dt className={pagenum===0? styles.infodt : styles.proinfodt}><span className={styles.bar}/>{info[0]}</dt>
                                <dd className={pagenum===0? styles.infodd : styles.proinfodd}>
                                    {info[1]&&info[1].map((text, index2) => {
                                        if(index[2] === info[1].length - 1)
                                        {
                                            return (<a key={index2} href={info[2][index2]}>{text}</a>)
                                        }
                                        else
                                        {
                                            return (<a key={index2} href={info[2][index2]}>{text}, </a>)
                                        }
                                    })}
                                </dd>
                            </div>
                        )
                    }
                })}
            </dl>
        </div>
    </>)
}