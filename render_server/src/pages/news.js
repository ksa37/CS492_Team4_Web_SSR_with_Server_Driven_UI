import React from 'react'
import PostCard from '../components/PostCard'
import styles from './news.module.css'
import MoreContent from '../components/MoreContent';

import { Card, CardHeader } from '@mui/material';
import { ReactComponent as Dot } from '../../public/icons/dot.svg'; 

// date to millisecond convertor: https://currentmillis.com
var ViewType = Object.freeze({
  NEWS: 0,
  WIKI: 1
});

export default function News({props}) {
  const {news_posts, news_more} = props
  // console.log(props)

  const [sort, setSort] = React.useState(true);
  const [sortRelated, setSortRelated] = React.useState(null);
  const [sortLastest, setSortLastest] = React.useState(null);
  const isRelated = Boolean(sort);
  const sortRelatedClick = (event) => {
    // setSort(event.currentTarget);
    console.log("--------");
    console.log(isRelated);
    setSort(true);
    // setSort(!sort);
    console.log(event.currentTarget);
    // console.log(event.target);
    console.log(isRelated);
  };
  const sortLastestClick = (event) => {
    // setSort(event.currentTarget);
    console.log("--------");
    console.log(isRelated);
    setSort(false);
    // setSort(!sort);
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
                        {/* <Dot fill='red' stroke='green'/> */}
                        {/* <ReactSVG className={styles.svg} src='/icons/dot.svg'/> */}
                        관련도순
                      </button>
                    {/* </div> */}
                    {/* <div className={styles.viewSort}> */}
                      <button className={styles.btn}
                        onClick={sortLastestClick}
                      >
                        {sort 
                        ? <div>
                            최신순
                          </div>
                        : <div style={{color:"#FF0000"}}>
                          최신순
                        </div>}
                      </button>
                      {/* 최신순 */}
                    {/* </div> */}
                </div>
            </div>
            }
            style={{ textAlign: 'left'}}
        />
        {news_posts&&news_posts.map((news) => <PostCard props={news} view={{"viewType": ViewType.NEWS}}/>)}
      </Card>
      <MoreContent props={{'view_option': "뉴스",'more_link':news_more}}/>
      </>
    );
}
