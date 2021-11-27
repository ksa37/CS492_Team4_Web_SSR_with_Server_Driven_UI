import React from 'react'
import Link from '@mui/material/Link';
import MoreVert from './Morevert'
import styles from './Bulguksa.module.css'

import { Card, CardContent, CardHeader, Divider, Box, Paper } from '@mui/material';

export default function Bulguksa({props}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        console.log(event.currentTarget)
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    return (
        <>
            <Card sx={{ maxWidth: 768 }} style={{backgroundColor: "#F1EDEB" }} variant='outlined' square>
                <CardHeader 
                    sx={{ paddingRight: '8px', '& .MuiCardHeader-action': { padding: 0}}}
                    title= {
                        <div className={styles.headerInfo}>
                            <Link underline="none">
                                <div className={styles.dramaName}>경주 불국사</div>
                            </Link>
                            <Link underline="none">
                                <div className={styles.dramaCategory}>문화재 <hr className={styles.verticalDivider}></hr> 慶州 佛國寺</div>
                            </Link>
                            <div className={styles.menu}>
                                전체
                                <hr className={styles.verticalDivider}></hr>
                                기본정보
                                <hr className={styles.verticalDivider}></hr>
                                포토
                                <hr className={styles.verticalDivider}></hr>
                                주변 문화재
                                <hr className={styles.verticalDivider}></hr>
                                함께 찾는 문화제
                            </div>
                        </div>
                    }
                    action = {
                        <MoreVert props = {{
                            "open": open, 
                            "anchorEl": anchorEl, 
                            "handleClick": handleClick, 
                            "handleClose": handleClose
                        }}/>
                    }
                    style={{ textAlign: 'left'}}
                />
                <Paper 
                    sx={{ maxWidth:746, height: 1000, borderRadius: '8px' }}>
                    <Paper 
                        sx={{ maxWidth:716, height: 464, borderRadius: '6px'}}
                        style= {{ background: "#D2C9C4" }}
                    >
                    </Paper>
                </Paper>
            </Card>
        </>
    )
}