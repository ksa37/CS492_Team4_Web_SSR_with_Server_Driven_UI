import Head from 'next/head'
import Link from 'next/link'
import NaverCard from '../components/card'
import Image from "next/image"
import styles from './news.module.css'

import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Container, Chip, CssBaseline, Divider, Grid, IconButton, Paper, Stack, Typography} from '@mui/material';
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';



var imgA = "/images/news_publisher_logos/BTN.jpg";

const dummydata = {
    "keywords": [ {
                    "keyword": "불국사",
                    "view": [ "basicInfo", "photo", "news" ],
                    "basicInfo": {
                                    "지정종목": "사적",
                                    "지정번호": "제502호" 
                                },
                    "photo": [ "url_1", "url_2", "url_3" ],
                    "news": [
                                { 
                                    "publisherURL": "http://www.btnnews.tv",
                                    "publisherImgURL": "/images/news_publisher_logos/BTN.jpg",
                                    "publisher": "BTN불교TV",
                                    "date": "7시간 전",
                                    "newsURL": "http://m.btnnews.tv/news/articleView.html?idxno=68717",
                                    "title": "불국사, 신라불교 최초 공인한 법흥왕 기려..다례재 봉행",
                                    "contents": "신라시대 불교를 공인한 법흥왕을 기리는 추모 다례재가 오늘 불국사 신도회 주최로 경주 코모도 호텔 잔디광장에서 봉행됐습니다. 이영숙 / 불국사 신도회장 (신라불교를 최초 공인한 임금으로서 우리들은 그 동안 그 크신 공헌을 까맣게 잊고 살아오지 않았나 반성하며...",
                                    "contentsImgURL": "/images/news_images/BTN_1.jpg"
                                },
                                { 
                                    "publisherURL": "https://media.naver.com/press/009",
                                    "publisherImgURL": "/images/news_publisher_logos/BTN.jpg",
                                    "publisher": "매일경제",
                                    "date": "2일 전",
                                    "newsURL": "https://n.news.naver.com/mnews/article/009/0004873767?sid=103",
                                    "title": "세계 1위 여행출판사 '경주' 콕 찍었다 코로나 풀리면 꼭 가라",
                                    "contents": "불국사와 석굴암 등 주요 유적지에 대해서도 언급하며 경주를 충분히 즐기기 위해서는 며칠 간 머물러야 한다고 이 책은 조언했다. 론리 플래닛은 이번에 독일의 '환경수도' 프라이부르크(3위), 미국 남부 중심도시 애틀랜타(4위), 멕시코 유카탄주 최대도시 메리다(8위), 유럽 근대 르네상스의...",
                                    "contentsImgURL": "/images/news_images/BTN_1.jpg"
                                }
                            ]
                        },
        {
            "keyword": "모가디슈"

        }
    ]
}

const itemData = [
    {
      img: imgA,
      tag_name: 'Breakfast',
    },
    {
      img: imgA,
      tag_name: 'Burger',
    },
    {
      img: imgA,
      tag_name: 'Camera',
    },
    {
      img: imgA,
      tag_name: 'Coffee',
    },
    {
      img: imgA,
      tag_name: 'Hats',
    },
    {
      img: imgA,
      tag_name: 'Honey',
    },
    {
      img: imgA,
      tag_name: 'Basketball',
    },
    {
      img: imgA,
      tag_name: 'Fern',
    },
    {
      img: imgA,
      tag_name: 'Mushrooms',
    },
  
  ];
  

// export default function News() {
//     return (
//         <>
//             <Head>
//                 <title>news</title>
//             </Head>
//             <div className={styles.news}>
//                 <hr className={styles.divider}></hr>
//                 <div className={styles.viewHeader}>
//                     <div className={styles.viewName}>뉴스</div>
//                     <div className={styles.viewOptions}>
//                         <div className={styles.viewSort}>관련도순</div>
//                         <div className={styles.viewSort}>최신순</div>
//                     </div>
//                 </div>
//                 <hr className={styles.divider}></hr>
//             </div>
//             {dummydata["keywords"][0]["news"].map((news) => <Card props={news}/>)}
//             <h2>
//                 <Link href="/">
//                     <a>Back to home</a>
//                 </Link>
//             </h2>
//         </>
//     )
// }

const card_header_date = 
<Typography display="inline" style={{fontSize: 16}} > 
  awesome days{' '} | 5일 전
</Typography>;

const card_header_title = 
<Typography variant="h2" display="inline" style={{fontSize: 17}} > 
  <b>이미지</b>
</Typography>;

export default function News() {
  return (
    <>
      <CssBaseline />
    
    <div className="App">
        <Grid 
            container
            justifyContent="center"
            alignItems="center"
            direction="column" 
        >
        
        {/* <div className="section_view">
            
        </div> */}
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
                {dummydata["keywords"][0]["news"].map((news) => <NaverCard props={news}/>)}
                </Stack >
                </Grid>
          </Paper>
          </Card>


      <div className="section_image">
        <Card sx={{ maxWidth: 766}} variant='outlined' square>
          <CardHeader 
            className="api_title_area"
            title= {card_header_title}
            style={{ textAlign: 'left'}}
          />
          <Paper 
            className="group_option_tag_wrap" 
            style={{height: 83, overflow: 'auto', backgroundColor: '#f5f7f8'}}
          >
            <Grid
              container
              direction="row"
              alignItems="center"
              style={{minHeight:66}}
             
            >
            <Stack direction="row" spacing={1} style= {{paddingLeft:12, paddingRight:12}}>
            {itemData.map((item) => (
              <Chip 
                key={item.tag_name}
                avatar={<Avatar src={item.img} />}
                label={item.tag_name}
                variant="outlined"
                style={{backgroundColor: "#ffffff"}}
              />
            ))}
            </Stack>
            </Grid>
          </Paper>
            {/* <StandardImageList /> */}
          <Paper style={{height: 50, overflow: 'auto', backgroundColor: '#f4f7f8'}}>
            <Typography style={{height:48, fontSize: 16, verticalAlign:'center'}}>
              이미지 더보기 <ArrowForwardIcon sx={{mt:2}} style={{height: 16, width: 20}}/>
            </Typography>
          </Paper>
        </Card>
      </div>   
      </Grid>
    </div>
    </>
    
  );
}
