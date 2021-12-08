import React from 'react';
import StandardImageList from '../components/StandardImageList';
import MoreContent from '../components/Morecontent';
import { Avatar, Card, CardHeader, Chip, Grid, Paper, Stack, Typography} from '@mui/material';

export default function Photo({props}) {
    const {tags, images, image_more} = props
    const view_option = "이미지";
    return(
      <>
        <Card sx={{ maxWidth: 768}} variant='outlined' square>
            <CardHeader 
              className="api_title_area"
              title= {
                <Typography variant="h2" display="inline" style={{fontSize: 17}} > 
                <b>이미지</b>
              </Typography>
              }
              style={{ textAlign: 'left'}}
            />
            <Paper 
              className="group_option_tag_wrap" 
              style={{height: 83, overflow: 'auto', backgroundColor: '#f5f7f8', borderBlock: '1px solid rgb(236, 240, 242)', boxShadow:'none'}}
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
                    avatar={<Avatar src ={item["tag_image_url"]} alt={item.tag_name} />}
                    alt={item.tag_name}
                    variant="outlined"
                    sx={{backgroundColor: "#ffffff"}}
                    clickable
                  />
                ))}
              </Stack>
              </Grid>
            </Paper>
            <StandardImageList props={images}/>
        </Card>
        <MoreContent props={{'view_option':view_option,'more_link':image_more}}/>
        </>
    )
}
