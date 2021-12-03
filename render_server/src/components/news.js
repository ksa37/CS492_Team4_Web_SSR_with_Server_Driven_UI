import React from 'react'
import PostCard from './PostCard'
import styles from './news.module.css'
import MoreContent from '../components/Morecontent';

import { Card, CardHeader } from '@mui/material';
import Dot from '../../public/icons/dot.svg'; 

// date to millisecond convertor: https://currentmillis.com
var ViewType = Object.freeze({
  NEWS: 0,
  WIKI: 1
});

export default function News({props}) {
  const {news_posts, news_more} = props
  
  const [sortRelated, setSortRelated] = React.useState(true);
  // const isRelated = Boolean(sortRelated);
  const sortRelatedClick = (event) => {
    setSortRelated(true);
  };
  const sortLastestClick = (event) => {
    setSortRelated(false);
  };

  sortRelated
  ? news_posts&&news_posts.sort((a, b) => parseFloat(a.relation) < parseFloat(b.relation) ? 1 : -1) // sort by relation
  : news_posts&&news_posts.sort((a, b) => parseInt(a.date) < parseInt(b.date) ? 1 : -1);            // sort by date

  

  return (
    <>
    <Card sx={{ maxWidth: 768}} variant='outlined' square>
        <CardHeader 
            className="api_title_area"
            title= {
                <div className={styles.viewHeader}>
                <div className={styles.viewName}>뉴스</div>
                <div className={styles.viewOptions}>
                      <button className={styles.btn}
                        onClick={sortRelatedClick}
                      >
                        {sortRelated 
                        ? <div className={styles.viewSort}>
                            <Dot className={styles.sortDot} fill="var(--naver_green)"/>
                            관련도순
                          </div>
                        : <div className={styles.viewSort}>
                            <Dot className={styles.sortDot} fill="var(--date_gray)"/>
                            <div className={styles.inactiveSort}>관련도순</div>
                          </div>
                        }
                      </button>
                      <button className={styles.btn}
                        onClick={sortLastestClick}
                      >
                        {sortRelated 
                        ? <div className={styles.viewSort}>
                            <Dot className={styles.sortDot} fill="var(--date_gray)"/>
                            <div className={styles.inactiveSort}>최신순</div>
                          </div>
                        : <div className={styles.viewSort}>
                            <Dot className={styles.sortDot} fill="var(--naver_green)"/>
                            최신순
                          </div>
                        }
                    </button>
                </div>
            </div>
            }
            style={{ textAlign: 'left'}}
        />
        {news_posts&&news_posts.map((news) => <PostCard key={news.publisherURL} props={news} view={{"viewType": ViewType.NEWS }}/>)}
      </Card>
      <MoreContent props={{'view_option': "뉴스",'more_link':news_more}}/>
      </>
    );
}
