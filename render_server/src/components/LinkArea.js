import React from 'react'
import { Avatar, Button, Card, CardContent, CardHeader, Divider, Grid, Paper, Stack, Typography} from '@mui/material';
import Link from '@mui/material/Link';
import styles from './postCard.module.css'

export default function LinkArea({props}){
    const {more_links} = props
    const more_links_exist = more_links.length!=0;
    return(
    <>
        {more_links_exist&&<div className={styles.linkArea}>
        <div className={styles.linkLine}>
            {more_links&&more_links.map((item, index) => (
                <a key={index} href={item.link_url}>
                {item.link_name} <br/>
                </a>
            )

            )}
        </div>
        </div>}
    </>
    )
}