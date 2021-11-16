import Head from 'next/head'
import Link from 'next/link'
import NewsCard from '../components/card'
import Image from "next/image"
import styles from './news.module.css'

import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Container, Chip, CssBaseline, Divider, Grid, IconButton, Paper, Stack, Typography} from '@mui/material';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

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
                                    "publisherImgURL": "/images/news/news_publisher_logos/BTN.jpg",
                                    "publisher": "BTN불교TV",
                                    "date": "7시간 전",
                                    "newsURL": "http://m.btnnews.tv/news/articleView.html?idxno=68717",
                                    "title": "불국사, 신라불교 최초 공인한 법흥왕 기려..다례재 봉행",
                                    "contents": "신라시대 불교를 공인한 법흥왕을 기리는 추모 다례재가 오늘 불국사 신도회 주최로 경주 코모도 호텔 잔디광장에서 봉행됐습니다. 이영숙 / 불국사 신도회장 (신라불교를 최초 공인한 임금으로서 우리들은 그 동안 그 크신 공헌을 까맣게 잊고 살아오지 않았나 반성하며...",
                                    "contentsImgURL": "/images/news/news_images/BTN_1.jpg"
                                },
                                { 
                                    "publisherURL": "https://media.naver.com/press/009",
                                    "publisherImgURL": "/images/news/news_publisher_logos/BTN.jpg",
                                    "publisher": "매일경제",
                                    "date": "2일 전",
                                    "newsURL": "https://n.news.naver.com/mnews/article/009/0004873767?sid=103",
                                    "title": "세계 1위 여행출판사 '경주' 콕 찍었다 “코로나 풀리면 꼭 가라“",
                                    "contents": "불국사와 석굴암 등 주요 유적지에 대해서도 언급하며 경주를 충분히 즐기기 위해서는 며칠 간 머물러야 한다고 이 책은 조언했다. 론리 플래닛은 이번에 독일의 '환경수도' 프라이부르크(3위), 미국 남부 중심도시 애틀랜타(4위), 멕시코 유카탄주 최대도시 메리다(8위), 유럽 근대 르네상스의...",
                                    "contentsImgURL": "/images/news/news_images/BTN_1.jpg"
                                }
                            ]
                        },
        {
            "keyword": "파리",
            "view": [ "photo", "news" ],
            // "travelInfo": {
            //                 "지정종목": "사적",
            //                 "지정번호": "제502호" 
            //             },
            "photo": {
              "tags": [
                        {
                          "tag_name": "프랑스",
                          "tag_image_url": "/images/photos/photos_tag_images/paris_tag1.png",
                          "tagURL": "https://m.search.naver.com/search.naver?where=m_image&mode=imgonly&nso=so%3Ar%2Ca%3Aall%2Cp%3Aall&sm=mtb_imt&query=%ED%94%84%EB%9E%91%EC%8A%A4%20%ED%8C%8C%EB%A6%AC&pq=%ED%8C%8C%EB%A6%AC"
                        },
                        {
                          "tag_name": "국기",
                          "tag_image_url": "/images/photos/photos_tag_images/paris_tag2.png",
                          "tagURL" : "https://m.search.naver.com/search.naver?where=m_image&mode=imgonly&nso=so%3Ar%2Ca%3Aall%2Cp%3Aall&sm=mtb_imt&query=%ED%8C%8C%EB%A6%AC%20%EA%B5%AD%EA%B8%B0&pq=%ED%8C%8C%EB%A6%AC"
                        },
                        {
                          "tag_name": "지도",
                          "tag_image_url": "/images/photos/photos_tag_images/paris_tag3.png",
                          "tagURL": "https://m.search.naver.com/search.naver?where=m_image&mode=imgonly&nso=so%3Ar%2Ca%3Aall%2Cp%3Aall&sm=mtb_imt&query=%ED%8C%8C%EB%A6%AC%20%EC%A7%80%EB%8F%84&pq=%ED%8C%8C%EB%A6%AC"
                        },
                        {
                          "tag_name": "생제르맹",
                          "tag_image_url": "/images/photos/photos_tag_images/paris_tag4.png",
                          "tagURL": "https://m.search.naver.com/search.naver?where=m_image&mode=imgonly&nso=so%3Ar%2Ca%3Aall%2Cp%3Aall&sm=mtb_imt&query=%ED%8C%8C%EB%A6%AC%20%EC%83%9D%EC%A0%9C%EB%A5%B4%EB%A7%B9&pq=%ED%8C%8C%EB%A6%AC"
                        },
                        {
                          "tag_name": "에펠탑",
                          "tag_image_url": "/images/photos/photos_tag_images/paris_tag5.png",
                          "tagURL": "https://m.search.naver.com/search.naver?where=m_image&mode=imgonly&nso=so%3Ar%2Ca%3Aall%2Cp%3Aall&sm=mtb_imt&query=%ED%8C%8C%EB%A6%AC%20%EC%97%90%ED%8E%A0%ED%83%91&pq=%ED%8C%8C%EB%A6%AC"
                        },
                        {
                          "tag_name": "야경",
                          "tag_image_url": "/images/photos/photos_tag_images/paris_tag6.png",
                          "tagURL": "https://m.search.naver.com/search.naver?where=m_image&mode=imgonly&nso=so%3Ar%2Ca%3Aall%2Cp%3Aall&sm=mtb_imt&query=%ED%8C%8C%EB%A6%AC%20%EC%95%BC%EA%B2%BD&pq=%ED%8C%8C%EB%A6%AC"
                        },
                      ],
              "images": ["/images/photos/photos_images/paris_image1.jpeg",
                          "/images/photos/photos_images/paris_image2.jpeg", 
                          "/images/photos/photos_images/paris_image3.jpeg",
                          "/images/photos/photos_images/paris_image4.gif",
                          "/images/photos/photos_images/paris_image5.jpeg",
                          "/images/photos/photos_images/paris_image6.jpeg",
                          "/images/photos/photos_images/paris_image7.jpeg",
                          "/images/photos/photos_images/paris_image8.jpeg",
                          "/images/photos/photos_images/paris_image9.jpeg",
                      ],
              "image_more": "https://m.search.naver.com/search.naver?where=m_image&mode=imgonly&nso=so%3Ar%2Ca%3Aall%2Cp%3Aall&sm=mtb_nmr&query=%ED%8C%8C%EB%A6%AC" 
                    },
            "news": [
                        {
                            "publisherURL": "https://media.naver.com/press/366",
                            "publisherImgURL": "/images/news/news_publisher_logos/paris_logo1.png",
                            "publisher": "조선비즈",
                            "date": "1636405260000",
                            "newsURL": "https://n.news.naver.com/mnews/article/366/0000772471?sid=101",
                            "title": "“드디어 파리 간다”… 보복여행 기대감에 날아오른 항공주",
                            "contents": "항공주, 실적 회복 기대감에 상승 항공 관련주 주가 선반영 정도 높아 투자 유의 지적도 서울에 사는 직장인 김모(33)씨는 이달 프랑스 파리로 가는 비행기 티켓을 끊었다. 이달 우리나라가 ‘위드 코로나(단계적 일상회복)’ 정책을 펼치기에 앞서 프랑스는 지난 6월부터 외국인에 국경을...",
                            "contentsImgURL": "/images/news/news_images/paris_1.jpeg",
                            "relation": "0.9"
                        },
                        { 
                            "publisherURL": "http://www.daejonilbo.com/",
                            // "publisherImgURL": "/images/news/news_publisher_logos/paris_logo2.png",
                            "publisherImgURL": "",
                            "publisher": "대전일보",
                            "date": "1636518338000",
                            "newsURL": "http://www.daejonilbo.com/news/newsitem.asp?pk_no=1494047",
                            "title": "파리바게뜨 충북혁신1호점, '장학기금' 기탁",
                            "contents": "꽃동네아동복지시설에 생활하는 약 100여명의 아이들에게 생일마다 케이크 전달 파리바게뜨 충북혁신1호점(대표 김보형, 김효정)은 지난 9일 지역인재 양성을 위해 써달라며 맹동면장학회 추진위원회(위원장 임흥식)에 장학기금 100만 원을 기탁했다. 파리바게뜨 충북혁신1호점은 맹동면...",
                            // "contentsImgURL": "/images/news/news_images/paris_2.jpeg",
                            "contentsImgURL": "",
                            "relation": "0.5"
                        },
                        { 
                          "publisherURL": "https://media.naver.com/press/003",
                          "publisherImgURL": "/images/news/news_publisher_logos/newsis.jpeg",
                          "publisher": "뉴시스",
                          "date": "1636595858000",
                          "newsURL": "https://n.news.naver.com/sports/general/article/003/0010825963",
                          "title": "남녀핸드볼, '파리올림픽 겨냥' 최초 외국인감독 선임 예정",
                          "contents": "기사내용 요약2024 파리올림픽 대비 경쟁력 강화 방안 여자대표팀, 제25회 세계선수권대회 앞두고 11일 진천선수촌 입촌 한국 남녀 핸드볼이 역대 처음으로 외국인감독을 선임할 계획을 밝혔다. 대한핸드볼협회는 11일 “국제 경쟁력 강화와 2024 파리올림픽 준비를 위해 남녀 국가대표팀 모두...",
                          "contentsImgURL": "/images/news/news_images/paris_3.jpeg",
                          "relation": "0.8"
                        },
                        { 
                          "publisherURL": "https://media.naver.com/press/421",
                          "publisherImgURL": "/images/news/news_publisher_logos/news1.jpeg",
                          "publisher": "뉴스1",
                          "date": "1636930800000",
                          "newsURL": "https://n.news.naver.com/mnews/article/421/0005723365?sid=104",
                          "title": "파리서 냄비 쇼핑하는 해리스 부통령",
                          "contents": "카멀라 해리스 미국 부통령이 13일 (현지시간) 프랑스 파리의 조리 용품점에서 냄비를 쇼핑하고 있다. © AFP=뉴스1",
                          "contentsImgURL": "/images/news/news_images/paris_4.jpeg",
                          "relation": "0.7"
                        }
                    ]
                },
    ]
}

// date to millisecond convertor: https://currentmillis.com


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
                  {dummydata["keywords"][1]["news"].map((news) => <NewsCard props={news}/>)}
                </Stack >

                </Grid>
          </Paper>
          </Card>

      </Grid>
    </div>
    </>
    
  );
}
