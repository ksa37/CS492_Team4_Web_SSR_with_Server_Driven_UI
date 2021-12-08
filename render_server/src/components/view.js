import React,{ useState } from 'react';
import MoreContent from './Morecontent';
import { Card, CardHeader, Chip, Grid, IconButton, Paper, Stack, Typography} from '@mui/material';
// import Link from 'next/link'
import PostCard from './PostCard';
import ViewCardBasic from './ViewCardBasic';
import ViewCardMultimeda from './ViewCardMultimedia'
import ViewCardTimeline from './ViewCardTimeline';
import { string } from 'prop-types';

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


export default function View({props}){
    const view_option = "VIEW";
    const {tags, view_posts, view_cafe_posts, view_weather_posts, view_more} = props

    {/* Tag change keeped even when view type changes*/}

    // const [currentIndices, setContentIndices] = useState({'view_type':0, 'tag':0})
    // const updateIndices = (changetype, index) => {
    //     var key = '';
    //     if (changetype==0)
    //         key = 'view_type';
    //     else if (changetype==1)
    //         key = 'tag';

    //     setContentIndices({
    //       ...currentIndices,
    //       [key]: index
    //     });
    //   };

      const [currentViewType, setViewType] = useState(0);
      const [currentBasicTag, setBasicTag] = useState(0);
      const [currentTimelineTag, setTimelineTag] = useState(0);
      const [currentMultimediaTag, setMultimediaTag] = useState(0);
      const tagsForViewType = [currentBasicTag, currentTimelineTag, currentMultimediaTag];
      const posts = [view_posts, view_cafe_posts, view_weather_posts]

      const setViewTag = (index) => {
        if (currentViewType==0){
            setBasicTag(index);
        }
        else if (currentViewType==1){
            setTimelineTag(index);        
        }
        else if (currentViewType==2){
            setMultimediaTag(index);
        }
      };

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
                            name='view_type'
                            onClick={()=> setViewType(index)}
                        >
                        {   currentViewType==index
                            ? <img 
                                src={option.src_open}
                                height={16} width={16}
                                alt={option.tab}/>
                            : <img 
                                src={option.src_close}
                                height={16} width={16}
                                alt={option.tab}/>
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
                        <>
                        { tagsForViewType[currentViewType]==index
                            ? <Chip 
                            key={index} 
                            name='tag'
                            label={item["tag_name"]}
                            variant="outlined"
                            sx={{backgroundColor: "#06c755", color: "#ffffff", fontWeight: "bold", borderColor:"#06c755", "&&:hover":{backgroundColor:"#06c755"}}}
                            clickable
                            onClick={() => setViewTag(index)}
                            />
                            : <Chip 
                            key={index} 
                            name='tag'
                            label={item["tag_name"]}
                            variant="outlined"
                            sx={{backgroundColor: "#ffffff", color: "#666", "&&:hover":{backgroundColor:"#ffffff" }}}
                            clickable
                            onClick={() => setViewTag(index)}
                            />
                        }
                        {}
                        </>
                    ))}
                </Stack>
                </Grid>
            </Paper>
            {(() => {
                switch (currentViewType) {
                case 0:
                    return (
                        <>{posts[currentBasicTag]&&posts[currentBasicTag].slice(0, 5).map((view, index) => 
                        <PostCard key={index} props={view} view={{"viewType": ViewType.VIEW}} index={index}/> )}</> 
   
                    )
                    break;
                case 1:
                    return (
                        <>{posts[currentTimelineTag]&&<ViewCardTimeline props={{'view_posts': posts[currentTimelineTag].slice(0,5)}}/>} </>
                    )
                    break;
                case 2:
                    return (
                        <>{posts[currentMultimediaTag]&&posts[currentMultimediaTag].slice(0, 3).map((view, index) => <ViewCardMultimeda key={index} props={view} />)}</>
                    )
                    break;
                default:
                    return <></>
                }
            })()}
        </Card>
        <MoreContent props={{'view_option':view_option,'more_link':view_more}}/>
    </>
    )
}