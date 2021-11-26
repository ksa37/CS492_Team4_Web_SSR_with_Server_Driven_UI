// import Image from 'next/image'
import Image from 'material-ui-image'
import React,{ useState } from 'react';
import MoreContent from './MoreContent';
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Container, Chip, CssBaseline, Divider, Grid, IconButton, Paper, Stack, Typography} from '@mui/material';
// import Link from 'next/link'
import Link from '@mui/material/Link'
import PostCard from './PostCard';
import ViewCardBasic from './ViewCardBasic';
import ViewCardMultimeda from './ViewCardMultimedia'
import ViewCardTimeline from './ViewCardTimeline';

var ViewType = Object.freeze({
    NEWS: 0,
    WIKI: 1,
    VIEW: 2
});
const selectView = [
    {
      tab: "basic",
      src_close:"/icons/view_basic1.png",
      src_open: "/icons/view_basic2.png"
    },
    {
      tab: "timeline",
      src_close:"/icons/view_timeline1.png",
      src_open: "/icons/view_timeline2.png"
    },
    {
      tab: "multimedia",
      src_close:"/icons/view_multimedia1.png",
      src_open: "/icons/view_multimedia2.png" 
    }
];

const useTabs = (initialTabs, allTabs) => {
    const [currentIndex, setContentIndex] = useState(initialTabs);
    return {
      currentItem: allTabs[currentIndex],
      contentChange: setContentIndex
    };
};

export default function View({props}){
    const view_option = "VIEW";
    const {tags, view_posts, view_more} = props

    const { currentItem, contentChange } = useTabs(0, selectView);

    return(
    <>
        <Card sx={{ maxWidth: 768}} variant='outlined' square>
            <CardHeader 
                className="api_title_area"
                title = {
                <Typography variant="h2" display="inline" style={{fontSize: 17}} > 
                <b>VIEW</b>
                </Typography>
                }
                style = {{ textAlign: 'left'}}
                action = {
                    <>
                    {selectView&&selectView.map((option, index)=>(
                        <IconButton
                            key={index}
                            onClick={()=>contentChange(index)}
                        >
                        {   currentItem.tab==option.tab
                            ? <img 
                                src={option.src_open}
                                height={16} width={16}/>
                            : <img 
                            src={option.src_close}
                            height={16} width={16}/>
                        }
                        </IconButton>
                    ))}
                    </>
                }
            />
            <Paper 
                className="group_option_tag_wrap" 
                style={{height: 83, overflow: 'auto', backgroundColor:'#f8fafb', borderBlock: '1px solid rgb(236, 240, 242)', boxShadow:'none'}}
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
                    <Chip 
                    key={index} 
                    component="a" 
                    href={item.tagURL}
                    label={item["tag_name"]}
                    variant="outlined"
                    sx={{backgroundColor: "#ffffff"}}
                    clickable
                    />
                ))}
                </Stack>
                </Grid>
            </Paper>
            {currentItem.tab=="basic" 
                ? <>{view_posts&&view_posts.slice(0, 5).map((view, index) => 
                    <PostCard key={index} props={view} view={{"viewType": ViewType.VIEW}}/>

                    )}</> 
                : <></> }
            {currentItem.tab=="timeline" 
                ? <>{view_posts&&view_posts.slice(0, 5).map((view, index) => <ViewCardTimeline key={index} props={view} />)} </>
                : <></> }
            {currentItem.tab=="multimedia" 
                ? <>{view_posts&&view_posts.slice(0, 3).map((view, index) => <ViewCardMultimeda key={index} props={view} />)}</>
                : <></> }

            {/* {view_posts&&view_posts.slice(0, 5).map((view, index) => <ViewCardBasic key={index} props={view} view={{"viewType": "NEWS"}}/>)}
            {view_posts&&view_posts.slice(0, 3).map((view, index) => <ViewCardMultimeda key={index} props={view} view={{"viewType": "NEWS"}}/>)}
            {view_posts&&view_posts.slice(0, 1).map((view, index) => <ViewCardTimeline key={index} props={view} view={{"viewType": "NEWS"}}/>)} */}
        </Card>
        <MoreContent props={{'view_option':view_option,'more_link':view_more}}/>
    </>
    )
}