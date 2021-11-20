import React from 'react';
import { Box, Paper, Typography} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import styles from './component.module.css'

export default function MoreContent({props}){
    const {view_option, more_link} = props;
    console.log(props);
    return(
        <div className={styles.moreContent} >
            <Link href={more_link}>
                        <a>
                        <Paper 
                            style={{ maxWidth:767, height: 50, borderRadius: 0, backgroundColor: '#f4f7f8'}}>
                            {/* {<Typography  style={{height:48, fontSize: 16, verticalAlign:'center', textAlign:'center'}}>
                            {view_option} 더보기 <ArrowForwardIcon sx={{mt:2}} style={{height: 16, width: 20}}/>
                            </Typography>} */}
                            {<div className={styles.moreContentText}>
                                <Box sx={{m: 0.5}}/>
                                <Typography  style={{ fontSize: 16, verticalAlign:'center', textAlign:'center'}}>
                                    {view_option} 더보기 {<img src="/icons/forward_arrow.svg"/>}
                                </Typography>
                                <Box sx={{m: 0.5}}/>
                            </div> 
                            }
                            {/* <div className={styles.moreContent}>
                                {view_option} 더보기 <img src="/icons/forward_arrow.svg"/>
                            </div> */}
                        </Paper>
                        </a>
                    </Link>
        </div>
       
    );
}