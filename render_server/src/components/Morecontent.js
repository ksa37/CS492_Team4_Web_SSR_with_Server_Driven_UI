import React from 'react';
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Container, Chip, CssBaseline, Divider, Grid, IconButton, Paper, Stack, Typography} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';

import next from 'next';
export default function Morecontent({props}){
    const {view_option, more_link} = props;
    console.log(props);
    return(
        <Link href={more_link}>
            <a>
            <Paper 
                style={{height: 50, overflow: 'auto', backgroundColor: '#f4f7f8'}}>
                {<Typography  style={{height:48, fontSize: 16, verticalAlign:'center', textAlign:'center'}}>
                {view_option} 더보기 <ArrowForwardIcon sx={{mt:2}} style={{height: 16, width: 20}}/>
                </Typography>}
            </Paper>
            </a>
        </Link>
    );
}