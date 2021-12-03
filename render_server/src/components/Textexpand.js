import  React from 'react'
import styles from './Bulguksa.module.css'

export default function Detailinfo({textexpand, pagenum}) {
    return (
    <>
        {pagenum === 0? 
        <div className={styles.textexpand}>
            {textexpand}
        </div>
        :
        <div className={styles.introbox}>
            {textexpand}
        </div>        
        }
    </>
    )
}