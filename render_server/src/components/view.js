// import Image from 'next/image'
import Image from 'material-ui-image'
import React from 'react';
import MoreContent from './MoreContent';
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Container, Chip, CssBaseline, Divider, Grid, IconButton, Paper, Stack, Typography} from '@mui/material';
// import Link from 'next/link'
import Link from '@mui/material/Link'
import PostCard from './PostCard';
import ViewCardBasic from './ViewCardBasic';
import ViewCardMultimeda from './ViewCardMultimedia'
import ViewCardTimeline from './ViewCardTimeline';


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
                {tags&&tags.map((item, index) => (
                    <Link key={index}  href={item.tagURL} underline="none">
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
            {view_posts&&view_posts.slice(0, 5).map((view, index) => <ViewCardBasic key={index} props={view} view={{"viewType": "NEWS"}}/>)}
            {view_posts&&view_posts.slice(0, 3).map((view, index) => <ViewCardMultimeda key={index} props={view} view={{"viewType": "NEWS"}}/>)}
            {view_posts&&view_posts.slice(0, 1).map((view, index) => <ViewCardTimeline key={index} props={view} view={{"viewType": "NEWS"}}/>)}
        </Card>
        <MoreContent props={{'view_option':view_option,'more_link':view_more}}/>
    </>
    )
}