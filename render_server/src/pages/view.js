import Image from 'next/image'
import React from 'react';
import MoreContent from '../components/MoreContent';
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Container, Chip, CssBaseline, Divider, Grid, IconButton, Paper, Stack, Typography} from '@mui/material';
import Link from 'next/link'
import PostCard from '../components/PostCard';
import ViewCard from '../components/ViewCard';
import ViewCardMultimeda from '../components/ViewCardMultimedia'

export default function View({props}){
    const view_option = "VIEW";
    const {tags, view_posts, view_more} = props
    return(
    <>
        <Card sx={{ maxWidth: 768}} variant='outlined' square>
            <CardHeader 
                className="api_title_area"
                title= {
                <Typography variant="h2" display="inline" style={{fontSize: 17}} > 
                <b>VIEW</b>
                </Typography>
                }
                style={{ textAlign: 'left'}}
            />
            <Paper 
                className="group_option_tag_wrap" 
                style={{height: 83, overflow: 'auto', backgroundColor:'#f8fafb'}}
                square
            >
                <Grid
                container
                direction="row"
                alignItems="center"
                style={{minHeight:66}}
                
                >
                <Stack direction="row" spacing={1} style= {{paddingLeft:12, paddingRight:12}}>
                {tags&&tags.map((item) => (
                    <Link href={item.tagURL}>
                    <a>
                    <Chip 
                    key={item["tag_name"]}
                    label={item["tag_name"]}
                    variant="outlined"
                    style={{backgroundColor: "#ffffff"}}
                    onclick
                    />
                    </a>
                    
                    {/* rgb(0,207,91) '#f5f7f8' */}
                    </Link>
                ))}
                </Stack>
                </Grid>
            </Paper>
            {view_posts&&view_posts.slice(0, 5).map((view) => <ViewCard props={view} view={{"viewType": "NEWS"}}/>)}
            {view_posts&&view_posts.slice(0, 3).map((view) => <ViewCardMultimeda props={view} view={{"viewType": "NEWS"}}/>)}
        </Card>
        <MoreContent props={{'view_option':view_option,'more_link':view_more}}/>
    </>
    )
}