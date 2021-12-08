import  React from 'react'
import styles from './Bulguksa.module.css'

export default function Middletitle({href, text}) {
    return (
    <>
        {href==="#" ?
        <div className={styles.middletitle}>
            <h3 className={styles.morelinktitle}>{text}</h3>
        </div>
        :
        <div className={styles.middletitle}>
            <a className={styles.morelink} href={href}>
                <h3 className={styles.morelinktitle}>{text}</h3>
                <img className={styles.morelinkicon} src='/images/Bulguksa/more.png' alt={text}/>
            </a>
        </div>
        }
    </>)
}