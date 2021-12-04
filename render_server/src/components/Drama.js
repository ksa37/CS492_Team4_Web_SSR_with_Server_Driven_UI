import React from 'react'
import Link from '@mui/material/Link';
import MoreVert from './Morevert'
import styles from './drama.module.css'
import HeaderMenuButton from './HeaderMenuButton';
import DateConvertor from './DateConvertor'

import { Card, CardHeader, Box, Paper } from '@mui/material';

export default function Drama({props}) {
    var btns = ["전체", "기본정보", "등장인물", "공식영상", "함께 볼만한 웹드라마"];
    var keywordURL = "https://m.tving.com/app/theme.tving?pocCode=POCD0600&themeSeq=109682&utm_source=portal&utm_medium=search&utm_campaign=WorkLaterDrinkNow&utm_content=eventpage";
    var keyword = "술꾼도시여자들"
    var categoryURL = "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=blFB&x_csa=%7B%22pkid%22%3A%22356%22%7D&qvt=0&query=%EC%9B%B9%EB%93%9C%EB%9D%BC%EB%A7%88"
    var category = "웹드라마"
    var mockdata = [
        {
            "title": "[술꾼도시여자들] 🍺술도녀 보내기 아쉬운 분들을 위한 역대급 분량 하드털이 메이킹",
            "publisher": "네이버TV",
            "viewCount": "4,534",
            "date": "1638198000000",
            "videoURL": "https://tv.naver.com/v/23826103",
            "videoLength": "24:36",
            "thumbImg": "https://search.pstatic.net/common?type=f&size=327x180&quality=75&direct=true&src=https%3A%2F%2Fphinf.pstatic.net%2Ftvcast%2F20211130_183%2FagfL7_1638280758457AMaev_JPEG%2F1638280716455.jpg"
        },
        {
            "title": "[술꾼도시여자들] 이선빈X한선화에게 사랑받는(?) 정은지💓 지구방위대씬 비하인드",
            "publisher": "네이버TV",
            "viewCount": "2,066",
            "date": "1638198000000",
            "videoURL": "https://tv.naver.com/v/23826072",
            "videoLength": "12:59",
            "thumbImg": "https://search.pstatic.net/common?type=f&size=327x180&quality=75&direct=true&src=https%3A%2F%2Fphinf.pstatic.net%2Ftvcast%2F20211130_183%2FagfL7_1638280758457AMaev_JPEG%2F1638280716455.jpg"
        },
        {
            "title": "[술꾼도시여자들] 이선빈X최시원 베드씬부터 한선화의 데이트, 정은지X동생의 꽁냥 모먼트",
            "publisher": "네이버TV",
            "viewCount": "16,894",
            "date": "1637506800000",
            "videoURL": "https://tv.naver.com/v/23677808",
            "videoLength": "14:10",
            "thumbImg": "https://search.pstatic.net/common?type=f&size=327x180&quality=75&direct=true&src=https%3A%2F%2Fphinf.pstatic.net%2Ftvcast%2F20211130_183%2FagfL7_1638280758457AMaev_JPEG%2F1638280716455.jpg"
        },
        {
            "title": "[술꾼도시여자들] 술도녀에게 닥친 인생 최대 시련ㅣ11화 예고",
            "publisher": "네이버TV",
            "viewCount": "22,318",
            "date": "1637506800000",
            "videoURL": "https://tv.naver.com/v/23677888",
            "videoLength": "00:56",
            "thumbImg": "https://search.pstatic.net/common?type=f&size=327x180&quality=75&direct=true&src=https%3A%2F%2Fphinf.pstatic.net%2Ftvcast%2F20211130_183%2FagfL7_1638280758457AMaev_JPEG%2F1638280716455.jpg"
        },
        {
            "title": "[술꾼도시여자들] 정은지, 이선빈 얼굴에 냉수 뿌린 이유는? 열연 돋보인 장례식씬 메이킹",
            "publisher": "네이버TV",
            "viewCount": "4,220",
            "date": "1637506800000",
            "videoURL": "https://tv.naver.com/v/23677736",
            "videoLength": "10:15",
            "thumbImg": "https://search.pstatic.net/common?type=f&size=327x180&quality=75&direct=true&src=https%3A%2F%2Fphinf.pstatic.net%2Ftvcast%2F20211130_183%2FagfL7_1638280758457AMaev_JPEG%2F1638280716455.jpg"
        }
    ]

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        console.log(event.currentTarget)
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    var link;
    if (typeof window !== "undefined") {
        link = window.location.href;
        // console.log(link);
    }

    const [offset, setOffset] = React.useState(0);
    React.useEffect(() => {
        window.onscroll = () => {
        setOffset(window.pageYOffset)
        }
    }, []);

    var variant;
    if (offset) variant ='elevation';
    else variant ='none';
    // console.log(offset); 
    
    const [menu, setMenu] = React.useState({
        darkBtn: 0
    });

    const changeColor = (btn) => {
        setMenu({ darkBtn: btn });
    };

    return (
        <>
        <Card className={styles.stickyHeader}  sx={{ maxWidth: 768, maxHeight: 122}} style={{backgroundColor: "#F1EDEB" }} variant={variant} square >
        <CardHeader
            sx={{ paddingBottom: '4px', paddingRight: '8px', '& .MuiCardHeader-action': { padding: 0}
            }}
            title= {
                <div>
                    <div className={styles.dramaName}>
                        <a className={styles.dramaName} href={keywordURL} underline="none"> 
                            {keyword}
                        </a>
                    </div>
                    { (offset == 0) &&
                        <div className={styles.dramaCategory}>
                            <Link className={styles.dramaCategory} href={categoryURL} underline="none"> 
                                {category}
                            </Link>
                        </div>
                    }
                    <div className={styles.btnmenu}>
                        {btns.map((btn, i) => (
                            <div key={i} className={styles.btnmenu}>
                            <button
                                onClick={changeColor.bind(this, i)}
                                className={ 
                                    menu.darkBtn === i 
                                    ? styles.selectedMenu 
                                    : ((i == 0) ? styles.firstunselectedMenu : styles.unselectedMenu) }
                            >
                            {btn}
                            </button>
                            {(i != btns.length - 1) 
                            && !(i === menu.darkBtn || i + 1 === menu.darkBtn) 
                            && <div className={styles.verticalDivider}></div>}
                            </div>
                        ))}
                    </div>
                    <Box sx={{m: 0.5}}/>
                </div>
            }
            
            action = {
                (offset == 0) &&
                <MoreVert props = {{
                    "open": open, 
                    "anchorEl": anchorEl, 
                    "handleClick": handleClick, 
                    "handleClose": handleClose,
                    "url": link,
                    "title": "술꾼도시여자들 공식영상",
                    "activeColor": "rgba(145,120,103,1)",
                    "inactiveColor": "rgba(145,120,103,0.5)"
                }}
                />
            }
            style={{ textAlign: 'left'}}
        />
        </Card>
        <Card className={styles.contents} sx={{ maxWidth: 768 }} style={{backgroundColor: "#F1EDEB" }} variant='outlined' square>
        <Paper
            sx={{ px: "15px", py: "21px", mb: "21px", mx: "11px", maxWidth:746, borderRadius: '8px' }}>
            {/* sx={{ px: "15px", pt: "21px", mb: "21px", mx: "11px", maxWidth:746, height: 1500, borderRadius: '8px' }}> */}
            {btns.map((btn, i) => (
                (menu.darkBtn === i) && 
                <Paper 
                    key={i}
                    sx={{ maxWidth: 716, height: 464, borderRadius: '6px'}}
                    style= {{ background: "#D2C9C4" }}
                > {btn}
                </Paper>
            ))}
            {mockdata.map((data, i) => (
                (menu.darkBtn === 3) && 
                <Paper 
                    key={i}
                    sx={{ maxWidth: 716, borderRadius: '6px', mb: '12px'}}
                    // sx={{ maxWidth: 716, height: 464, borderRadius: '6px'}}
                    style= {{ background: "#FFFFFF" }}
                > 
                    <a href={data.videoURL}>
                        <div className={styles.thumb}>
                            <img 
                                className={styles.img}
                                src={data.thumbImg}
                                alt="video"
                            />
                            <div className={styles.icon}>
                                <img color='transparent'
                                src='/images/Bulguksa/video.png'
                                width='28px'
                                height='32px'
                                alt='icon'/>
                            </div>
                            <span className={styles.time}>{data.videoLength}</span>
                        </div>
                    </a>
                    <div className={styles.videoInfo}>
                        <a href={data.videoURL}>
                            <div className={styles.videoTitle}>{data.title}</div>
                            <div className={styles.subInfo}>
                                {data.publisher}
                                <div className={styles.verticalDivider2}></div>
                                {data.viewCount}
                                <div className={styles.verticalDivider2}></div>
                                {DateConvertor(data.date)}
                            </div>
                        </a>
                    </div>
        {/* // {drama_videos&&drama_videos.map((video) => <PostCard key={video.title} props={video} view={{"viewType": ViewType.NEWS }}/>)} */}
                </Paper>
            ))}
        </Paper>
      </Card>

      {/* <MoreContent props={{'view_option': "뉴스",'more_link':news_more}}/> */}
        </>
    )
}