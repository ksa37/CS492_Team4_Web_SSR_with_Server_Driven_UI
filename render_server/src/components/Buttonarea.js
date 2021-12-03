import  React from 'react'
import styles from './Bulguksa.module.css'

export default function Buttonarea({buttonarea}) {
    return (
    <>
        <div className={styles.buttonarea}>
            <div className={styles.buttonbox}>
                <ul className={styles.buttonboxul}><li className={styles.buttonboxli}><a className={styles.buttonboxa} href={buttonarea}><img className={styles.buttonareaicon} src='/images/Bulguksa/map.png' alt='button'/>지도</a></li></ul>
            </div>
        </div>
    </>)
}