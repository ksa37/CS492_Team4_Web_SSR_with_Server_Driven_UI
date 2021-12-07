import React from 'react';
import { Box, Paper, Typography} from '@mui/material';
import Link from '@mui/material/Link';
import styles from './MoreContent.module.css'

export default function MoreContent({props}){
    const {view_option, more_link} = props;
    return(
        <Link href={more_link} underline="none">
            <Paper 
                sx={{ maxWidth:767, mb: '10px' }}
                style={{ height: 50, borderRadius: 0, backgroundColor: '#f4f7f8'}}>
                    {<div className={styles.moreContentInfo}>
                        {view_option} 더보기
                        <img className={styles.img} src="/icons/forward_arrow.svg" alt='arrow' />
                    </div> 
                    }
            </Paper>
        </Link>
    );
}