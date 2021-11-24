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
              "place": "| 국내 전문",
              "fans": "팬 9,163",
              "blogdetails": "2012 파워블로그",
              "avatar_name_url": "https://in.naver.com/soltmon?query=%EB%B6%88%EA%B5%AD%EC%82%AC",
              "detailsdepth": "· 도서 출간 3권 · 도심 여행 · 선호 여행 리뷰",
              "title": "경주 가볼만한곳 불타는 단풍 가을 불국사",    
              "content": "가을 경주 가볼만한곳 단풍이 아름다운 불국사입니다. 인기 여행지기도 하고 어릴 때 한 번쯤은 수학여행 등으로 어쩔 수 없이 오게 되는 한국인의 명소 한국에서 학",
              "title_content_url":"https://in.naver.com/soltmon/contents/367697143409280?query=%EB%B6%88%EA%B5%AD%EC%82%AC",
              "date": "2021.11.05",
              "etc" : ["블로그경주 숙소 추천 경주월드 엑스포공원 도보 가능한 힐튼", "블로그경주 숙소 추천 보문관광단지 원픽 라한 호텔"],
              "image" : ""
            },
            {
              "name": "쏠트몬1",
              "type": "여행 작가",
              "place": "| 국내 전문",
              "fans": "| 팬 9,163",
              "blogdetails": "2012 파워블로그",
              "avatar_name_url": "https://in.naver.com/soltmon?query=%EB%B6%88%EA%B5%AD%EC%82%AC",
              "detailsdepth": "· 도서 출간 3권 · 도심 여행 · 선호 여행 리뷰",
              "title": "경주 가볼만한곳 불타는 단풍 가을 불국사",    
              "content": "가을 경주 가볼만한곳 단풍이 아름다운 불국사입니다. 인기 여행지기도 하고 어릴 때 한 번쯤은 수학여행 등으로 어쩔 수 없이 오게 되는 한국인의 명소 한국에서 학",
              "title_content_url":"https://in.naver.com/soltmon/contents/367697143409280?query=%EB%B6%88%EA%B5%AD%EC%82%AC",
              "date": "2021.11.05",
              "etc" : ["블로그경주 숙소 추천 경주월드 엑스포공원 도보 가능한 힐튼", "블로그경주 숙소 추천 보문관광단지 원픽 라한 호텔"],
              "image" : ""
            },
            {
              "name": "쏠트몬2",
              "type": "여행 작가",
              "place": "| 국내 전문",
              "fans": "| 팬 9,163",
              "blogdetails": "2012 파워블로그",
              "avatar_name_url": "https://in.naver.com/soltmon?query=%EB%B6%88%EA%B5%AD%EC%82%AC",
              "detailsdepth": "· 도서 출간 3권 · 도심 여행 · 선호 여행 리뷰",
              "title": "경주 가볼만한곳 불타는 단풍 가을 불국사",    
              "content": "가을 경주 가볼만한곳 단풍이 아름다운 불국사입니다. 인기 여행지기도 하고 어릴 때 한 번쯤은 수학여행 등으로 어쩔 수 없이 오게 되는 한국인의 명소 한국에서 학",
              "title_content_url":"https://in.naver.com/soltmon/contents/367697143409280?query=%EB%B6%88%EA%B5%AD%EC%82%AC",
              "date": "2021.11.05",
              "etc" : ["블로그경주 숙소 추천 경주월드 엑스포공원 도보 가능한 힐튼", "블로그경주 숙소 추천 보문관광단지 원픽 라한 호텔"],
              "image" : ""
            },
            {
              "name": "쏠트몬3",
              "type": "여행 작가",
              "place": "| 국내 전문",
              "fans": "| 팬 9,163",
              "blogdetails": "2012 파워블로그",
              "avatar_name_url": "https://in.naver.com/soltmon?query=%EB%B6%88%EA%B5%AD%EC%82%AC",
              "detailsdepth": "· 도서 출간 3권 · 도심 여행 · 선호 여행 리뷰",
              "title": "경주 가볼만한곳 불타는 단풍 가을 불국사",    
              "content": "가을 경주 가볼만한곳 단풍이 아름다운 불국사입니다. 인기 여행지기도 하고 어릴 때 한 번쯤은 수학여행 등으로 어쩔 수 없이 오게 되는 한국인의 명소 한국에서 학",
              "title_content_url":"https://in.naver.com/soltmon/contents/367697143409280?query=%EB%B6%88%EA%B5%AD%EC%82%AC",
              "date": "2021.11.05",
              "etc" : ["블로그경주 숙소 추천 경주월드 엑스포공원 도보 가능한 힐튼", "블로그경주 숙소 추천 보문관광단지 원픽 라한 호텔"],
              "image" : ""
            },
            {
              "name": "쏠트몬4",
              "type": "여행 작가",
              "place": "| 국내 전문",
              "fans": "| 팬 9,163",
              "blogdetails": "2012 파워블로그",
              "avatar_name_url": "https://in.naver.com/soltmon?query=%EB%B6%88%EA%B5%AD%EC%82%AC",
              "detailsdepth": "· 도서 출간 3권 · 도심 여행 · 선호 여행 리뷰",
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
      <div className = {styles.rightallign} onClick={onClick} > 인플루엔서 </div>
      { showResults ? <Results props={props}/> : null }
    </div>
  )
}

const Results = (props) => {
  return (
    <div>
    <Card sx={{ width: 800, lineHeight: "50px", border: 1, borderColor: 'grey.200', my:"100px" }}>
      <Container> 여행 스타일SNS 핫플 매니아 </Container>
      <Container> 여행 스타일SNS 핫플 매니아 </Container>
      <Container> 자세히 보기 </Container>
    </Card>
    </div> 
  )
}

export default function Home() {
  const [showResults, setShowResults] = useState(false)
  return (
    <Container>
      <Search/>
      <Card sx={{ maxWidth: 1150, lineHeight: "109px"}}>
       <Container sx={{ display: 'flex' }}>
          <Container sx={{ fontSize: '1.6rem', fontWeight : "700", display: 'flex'}}> 
          <div>인플루언서 </div> 
          <img onClick = {influencer_icon} className = {styles.influencer_icon} src="/static/images/avatar/icon_img.png"/> 
          </Container>
          <Container sx={{ color: "#0c43b7", fontSize: '1.3rem' }} className = {styles.contenttitle_rightend}> <Link href = "https://in.naver.com/"> 서비스 홈 바로가기 </Link> </Container>
        </Container>
      </Card>
      {dummydata['influencer'].map((each) => 
      <Card sx={{ maxWidth: 1150, my: '10px'}} key = {each.name}>
        <Container sx={{ display: 'flex' }}>
          <CardHeader
          avatar={
            <Link href={each.avatar_name_url}> 
            <Avatar sx = {{ width: 88, height: 88, display:'inline-block'}} alt="" src="../static/images/avatar/avatar_1.png"/>
            </Link>
          }
          title= {<div> <Link href={each.avatar_name_url} underline="none"> <ui className = {styles.title}>{each.name}</ui> </Link> <ui className = {styles.header}>{each.fans}</ui> </div> }
          subheader= {<div className = {styles.magintop}> <ui className = {styles.header}>{each.type}</ui> <ui className = {styles.header}>{each.place}</ui> </div>}
          />
          <div className = {styles.right}> <img onClick = {addblogfan} className = {styles.fanicon} src="../static/images/avatar/fanicon.png"/> </div>
        </Container>

        <Container sx={{ml:'40px', display : 'flex' }}> 
          <img className = {styles.blogicon} src="../static/images/avatar/blogicon.png"/> 
          <div className = {styles.subheader}> {each.blogdetails} </div> 
          <div className = {styles.detailsdepth}> {each.detailsdepth} </div> 
        </Container>
        <Search props = {each.detailsdepth}/>
        
        <Link href={each.title_content_url} underline="none"> 
        <Container sx={{my: '10px', color: '#0c43b7', fontSize: '1.6rem', ml:'40px' }} className = {styles.contenttitle}> {each.title} </Container> 
        </Link>  
  
        <Container className = {styles.flex_allign}>
          <Container>
            <Link href={each.title_content_url} underline="none"> <Container sx={{my: '10px', color: "#404040", fontSize: '1.3rem' }}> {each.content} </Container> </Link>
            <Container sx={{my: '10px', color: 'grey', fontSize: '1.1rem' }}> {each.date} </Container>
          </Container>
          <Link href={each.title_content_url} underline="none"> <img className = {styles.image} src="/static/images/avatar/blog_1.png"/> </Link>
        </Container>
      </Card>)}
    </Container>
  )
}
