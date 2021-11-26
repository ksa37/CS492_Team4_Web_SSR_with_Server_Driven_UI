import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
// import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import styles from './influencer.module.css'

function addblogfan() {
  var answer = window.confirm("로그인이 필요한 서비스입니다.\n로그인 하시겠습니까?");
  if (answer) {
    window.location.href = "https://nid.naver.com/nidlogin.login?svctype=262144&url=https%3A%2F%2Fsearch.naver.com%2Fsearch.naver%3Fwhere%3Dnexearch%26sm%3Dtop_hty%26fbm%3D1%26ie%3Dutf8%26query%3D%25EB%25B6%2588%25EA%25B5%25AD%25EC%2582%25AC"
}
  else {}
}

function influencer_icon(){
  console.log('clicked')
  const togglePopup = () => {
    setShowPopup(!showPopup)
  };
}

const dummydata = {
          "influencer": [
            {
              "name": "쏠트몬",
              "type": "여행 작가",
              "place": " 국내 전문",
              "fans": "팬 9,163",
              "blogdetails": "2012 파워블로그",
              "avatar_name_url": "https://in.naver.com/soltmon?query=%EB%B6%88%EA%B5%AD%EC%82%AC",
              "detailsdepth": ["도심 여행", "선호 여행 리뷰"],
              "title": "경주 가볼만한곳 불타는 단풍 가을 불국사",    
              "content": "가을 경주 가볼만한곳 단풍이 아름다운 불국사입니다. 인기 여행지기도 하고 어릴 때 한 번쯤은 수학여행 등으로 어쩔 수 없이 오게 되는 한국인의 명소 한국에서 학",
              "title_content_url":"https://in.naver.com/soltmon/contents/367697143409280?query=%EB%B6%88%EA%B5%AD%EC%82%AC",
              "date": "2021.11.05",
              "etc" : ["블로그경주 숙소 추천 경주월드 엑스포공원 도보 가능한 힐튼", "블로그경주 숙소 추천 보문관광단지 원픽 라한 호텔"],
              "image" : ""
            },
            {
              "name": "쏠트몬",
              "type": "여행 작가",
              "place": " 국내 전문",
              "fans": "팬 9,163",
              "blogdetails": "2012 파워블로그",
              "avatar_name_url": "https://in.naver.com/soltmon?query=%EB%B6%88%EA%B5%AD%EC%82%AC",
              "detailsdepth": ["도심 여행", "선호 여행 리뷰"],
              "title": "경주 가볼만한곳 불타는 단풍 가을 불국사",    
              "content": "가을 경주 가볼만한곳 단풍이 아름다운 불국사입니다. 인기 여행지기도 하고 어릴 때 한 번쯤은 수학여행 등으로 어쩔 수 없이 오게 되는 한국인의 명소 한국에서 학",
              "title_content_url":"https://in.naver.com/soltmon/contents/367697143409280?query=%EB%B6%88%EA%B5%AD%EC%82%AC",
              "date": "2021.11.05",
              "etc" : ["블로그경주 숙소 추천 경주월드 엑스포공원 도보 가능한 힐튼", "블로그경주 숙소 추천 보문관광단지 원픽 라한 호텔"],
              "image" : ""
            },
            {
              "name": "쏠트몬",
              "type": "여행 작가",
              "place": " 국내 전문",
              "fans": "팬 9,163",
              "blogdetails": "2012 파워블로그",
              "avatar_name_url": "https://in.naver.com/soltmon?query=%EB%B6%88%EA%B5%AD%EC%82%AC",
              "detailsdepth": ["도심 여행", "선호 여행 리뷰"],
              "title": "경주 가볼만한곳 불타는 단풍 가을 불국사",    
              "content": "가을 경주 가볼만한곳 단풍이 아름다운 불국사입니다. 인기 여행지기도 하고 어릴 때 한 번쯤은 수학여행 등으로 어쩔 수 없이 오게 되는 한국인의 명소 한국에서 학",
              "title_content_url":"https://in.naver.com/soltmon/contents/367697143409280?query=%EB%B6%88%EA%B5%AD%EC%82%AC",
              "date": "2021.11.05",
              "etc" : ["블로그경주 숙소 추천 경주월드 엑스포공원 도보 가능한 힐튼", "블로그경주 숙소 추천 보문관광단지 원픽 라한 호텔"],
              "image" : ""
            },
            {
              "name": "쏠트몬",
              "type": "여행 작가",
              "place": " 국내 전문",
              "fans": "팬 9,163",
              "blogdetails": "2012 파워블로그",
              "avatar_name_url": "https://in.naver.com/soltmon?query=%EB%B6%88%EA%B5%AD%EC%82%AC",
              "detailsdepth": ["도심 여행", "선호 여행 리뷰"],
              "title": "경주 가볼만한곳 불타는 단풍 가을 불국사",    
              "content": "가을 경주 가볼만한곳 단풍이 아름다운 불국사입니다. 인기 여행지기도 하고 어릴 때 한 번쯤은 수학여행 등으로 어쩔 수 없이 오게 되는 한국인의 명소 한국에서 학",
              "title_content_url":"https://in.naver.com/soltmon/contents/367697143409280?query=%EB%B6%88%EA%B5%AD%EC%82%AC",
              "date": "2021.11.05",
              "etc" : ["블로그경주 숙소 추천 경주월드 엑스포공원 도보 가능한 힐튼", "블로그경주 숙소 추천 보문관광단지 원픽 라한 호텔"],
              "image" : ""
            },
            {
              "name": "쏠트몬",
              "type": "여행 작가",
              "place": " 국내 전문",
              "fans": "팬 9,163",
              "blogdetails": "2012 파워블로그",
              "avatar_name_url": "https://in.naver.com/soltmon?query=%EB%B6%88%EA%B5%AD%EC%82%AC",
              "detailsdepth": ["도심 여행", "선호 여행 리뷰"],
              "title": "경주 가볼만한곳 불타는 단풍 가을 불국사",    
              "content": "가을 경주 가볼만한곳 단풍이 아름다운 불국사입니다. 인기 여행지기도 하고 어릴 때 한 번쯤은 수학여행 등으로 어쩔 수 없이 오게 되는 한국인의 명소 한국에서 학",
              "title_content_url":"https://in.naver.com/soltmon/contents/367697143409280?query=%EB%B6%88%EA%B5%AD%EC%82%AC",
              "date": "2021.11.05",
              "etc" : ["블로그경주 숙소 추천 경주월드 엑스포공원 도보 가능한 힐튼", "블로그경주 숙소 추천 보문관광단지 원픽 라한 호텔"],
              "image" : ""
            }
            ]}

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
}));

const Search = (props) => {
  const [showResults, setShowResults] = useState(false)
  const onClick = () => setShowResults(!showResults)
  return (
    <div>
      <div className = {styles.rightallign} onClick={onClick} > i </div>
      { showResults ? <Results props={props}/> : null }
    </div>
  )
}

const Results = (props) => {
  return (
    <Card sx={{ width: 748, lineHeight: "20px", border: 1, borderColor: 'grey.100', ml: "10px", mr: "10px" }}>
      <Card sx={{ width: 720, lineHeight: "20px", border: 1, borderColor: 'grey.100', ml: "10px", mr: "10px", fontSize: '0.8rem' }}>
        <div> 여행 스타일: {props.props.props[0]} </div>
        <div> 창작 분야: {props.props.props[1]}</div>
      </Card>
      <div className = {styles.flipscreen}> 자세히 보기
      </div>
    </Card>
  )
}

export default function Influencer() {
  const [showResults, setShowResults] = useState(false)
  // const {data} = props
  return (
    <>
      <Card sx={{ maxWidth: 768, lineHeight: "109px"}}>
       <Container sx={{ display: 'flex' }}>

          <Container sx={{ fontSize: '1rem', fontWeight : "700", display: 'flex'}}> 
          <div>인플루언서 </div> 
          <img onClick = {influencer_icon} className = {styles.influencer_icon} src="/images/influencer/icon_img.png"/> 
          </Container>

          <Container sx={{ color: "#0c43b7", fontSize: '1rem' }} className = {styles.contenttitle_rightend}> 
          <Link href = "https://in.naver.com/"> 서비스 홈 바로가기 </Link> 
          </Container>

        </Container>
      </Card>

      {dummydata['influencer'].map((each) => 
      <Card sx={{ maxWidth: 768, my: '10px'}} key = {each.name}>
        <Container sx={{ maxWidth: 768, display: 'flex' }}>
          <CardHeader
          avatar={
            <Link href={each.avatar_name_url}> 
            <Avatar sx = {{ width: 88, height: 88, display:'inline-block'}} alt="" src="/images/influencer/avatar_1.png"/>
            </Link>
          }
          title = {<div className = {styles.flex}> <Link href={each.avatar_name_url} underline="none"> 
          <div className = {styles.title}>{each.name}</div> 
          </Link> <div className = {styles.header}>{each.fans}</div> </div> }
          
          subheader= {<div className = {styles.magintop, styles.flex}> 
          <div className = {styles.header_sub}>{each.type}</div> 
          <div className = {styles.header_sub}>{each.place}</div> </div>}
          />
          <div className = {styles.right}> <img onClick = {addblogfan} className = {styles.fanicon} src="/images/influencer/fanicon.png"/> </div>
        </Container>

        <Container sx={{ml:'40px', display : 'flex' }}> 
          <img className = {styles.blogicon} src="/images/influencer/blogicon.png"/> 
          <div className = {styles.subheader}> {each.blogdetails} </div> 
          <div className = {styles.detailsdepth}> {each.detailsdepth} </div> 
        </Container>
        <Search props = {each.detailsdepth}/>
        
        <Link href={each.title_content_url} underline="none"> 
        <Container sx={{color: '#0c43b7', fontSize: '1rem', ml:'45px' }} className = {styles.contenttitle}> {each.title} </Container> 
        </Link>  
  
        <Container className = {styles.flex_allign}>
          <Container>
            <Link href={each.title_content_url} underline="none"> <Container sx={{my: '10px', color: "#404040", fontSize: '1rem' }}> {each.content} </Container> </Link>
            <Container sx={{my: '10px', color: 'grey', fontSize: '1rem' }}> {each.date} </Container>
          </Container>
          <Link href={each.title_content_url} underline="none"> <img className = {styles.image} src="/images/influencer/blog_1.png"/> </Link>
        </Container>
      </Card>)}
    </>
  )
}
