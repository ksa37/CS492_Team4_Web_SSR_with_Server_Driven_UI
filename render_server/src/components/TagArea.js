import React from 'react'
import { Avatar, Button, Card, CardContent, CardHeader, Divider, Grid, Paper, Stack, Typography} from '@mui/material';
import Link from '@mui/material/Link';
import styles from './postCard.module.css'

export default function TagArea({props}){
    const {tags} = props

    return (
        <Paper 
        className="group_option_tag_wrap" 
        style={{overflow: 'auto', paddingBottom: 18}}
        elevation='0'
        square
        >
            <Stack direction="row" spacing={1} style= {{paddingLeft:18, paddingRight:18}}> 
            {tags&&tags.map((item, index) => (
                <a key={index}  className={styles.tagButton} href={item.tagURL}>
                    #{item.tag_name}    
                </a>
            ))}
            </Stack>
        </Paper>
    )
}
