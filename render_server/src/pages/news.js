import React from 'react'
import PostCard from '../components/PostCard'
import styles from './news.module.css'
import MoreContent from '../components/MoreContent';

import { Card, CardHeader, Button, Grid, Paper, Stack } from '@mui/material';

// date to millisecond convertor: https://currentmillis.com
// var ViewType = Object.freeze({
//   NEWS: 0,
//   WIKI: 1
// });

export default function News({props}) {
  const {news_posts, news_more} = props
  // console.log(props)

  const [sort, setSort] = React.useState(null);
  const [sortRelated, setSortRelated] = React.useState(null);
  const [sortLastest, setSortLastest] = React.useState(null);
  const isRelated = Boolean(sort);
  const sortRelatedClick = (event) => {
    // setSort(event.currentTarget);
    console.log("--------");
    console.log(isRelated);
    setSort(!sort);
    console.log(event.currentTarget);
    // console.log(event.target);
    console.log(isRelated);
  };
  const sortLastestClick = (event) => {
    // setSort(event.currentTarget);
    console.log("--------");
    console.log(isRelated);
    setSort(!sort);
    console.log(event.currentTarget);
    // console.log(event.target);
    console.log(isRelated);
  };
  

  return (
    <>
    <Card sx={{ maxWidth: 768}} variant='outlined' square>
        <CardHeader 
            className="api_title_area"
            title= {
                // <Typography variant="h2" display="inline" style={{fontSize: 17}} > 
                //     <b>뉴스</b>
                // </Typography>
                <div className={styles.viewHeader}>
                <div className={styles.viewName}>뉴스</div>
                <div className={styles.viewOptions}>
                    {/* <div className={styles.viewSort}> */}
                      <button className={styles.btn}
                        onClick={sortRelatedClick}
                      >
                        관련도순
                      </button>
                    {/* </div> */}
                    {/* <div className={styles.viewSort}> */}
                      <button className={styles.btn}
                        onClick={sortLastestClick}
                      >
                        최신순
                      </button>
                      {/* 최신순 */}
                    {/* </div> */}
                </div>
            </div>
            }
            style={{ textAlign: 'left'}}
        />
        {news_posts&&news_posts.map((news) => <PostCard props={news} view={{"viewType": "NEWS"}}/>)}
      </Card>
      <MoreContent props={{'view_option': "뉴스",'more_link':news_more}}/>
      </>
    );
}
