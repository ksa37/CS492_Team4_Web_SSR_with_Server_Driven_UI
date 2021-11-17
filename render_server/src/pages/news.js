import NewsCard from '../components/Newscard'
import styles from './news.module.css'

import { Card, CardHeader, Grid, Paper, Stack } from '@mui/material';

// date to millisecond convertor: https://currentmillis.com


export default function News({props}) {
  const {news_posts, news_more} = props
  console.log(props)
  return (
    <Card sx={{ maxWidth: 766}} variant='outlined' square>
        <CardHeader 
            className="api_title_area"
            title= {
                // <Typography variant="h2" display="inline" style={{fontSize: 17}} > 
                //     <b>뉴스</b>
                // </Typography>
                <div className={styles.viewHeader}>
                <div className={styles.viewName}>뉴스</div>
                <div className={styles.viewOptions}>
                    <div className={styles.viewSort}>관련도순</div>
                    <div className={styles.viewSort}>최신순</div>
                </div>
            </div>
            }
            style={{ textAlign: 'left'}}
        />
        <Paper 
            className="group_option_tag_wrap" 
            // style={{height: 83, overflow: 'auto', backgroundColor: '#f5f7f8'}}
        >
            <Grid
            container
            direction="row"
            alignItems="center"
            style={{minHeight:66}}
            
            >
            <Stack >
              {/* {dummydata["keywords"][1]["news"].map((news) => <NewsCard props={news}/>)} */}
              {news_posts&&news_posts.map((news) => <NewsCard props={news}/>)}
            </Stack >

            </Grid>
      </Paper>
      </Card>
  );
}
