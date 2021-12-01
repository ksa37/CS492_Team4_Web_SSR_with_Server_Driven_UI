import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import { useState } from 'react';
import Link from '@mui/material/Link';
import styles from './influencer.module.css'
import MoreContent from '../components/MoreContent';

const Blogfan = () => {
  const [showResults, setShowResults] = useState(false)
  const onClick = () => setShowResults(!showResults)
  return (
    <div>
      { showResults ? 
      <div onClick={onClick} > <img className = {styles.fanicon} src="/images/influencer/unfan.png"/>  </div> 
      : <div onClick={onClick} > <img className = {styles.fanicon} src="/images/influencer/fanicon.png"/>  </div>}
    </div>
  )
}

const Search = (props) => {
  const [showResults, setShowResults] = useState(false)
  const onClick = () => setShowResults(!showResults)
  return (
    <div>
      { showResults ? 
      <div className = {styles.rightallign} onClick={onClick} > <img className = {styles.influencer_icon} src="/images/influencer/after.png"/>  </div> 
      : <div className = {styles.rightallign} onClick={onClick} > <img className = {styles.influencer_icon} src="/images/influencer/before.png"/>  </div>}
      { showResults ? <Results props={props}/> : null }
    </div>
  )
}

const Results = (props) => {
  return (
    <Card sx={{ width: 700, lineHeight: "20px", border: 1, borderColor: 'grey.100', ml: "40px", mr: "40px", mb: "5px" }}>
      <Card sx={{ width: 680, lineHeight: "20px", border: 1, borderColor: 'grey.100', ml: "10px", mr: "10px", fontSize: '0.8rem' }}>
        <div className = {styles.typ_grey}> 여행 스타일:   <div className = {styles.typ_black}>{props.props.props[0]}</div> </div>
        <div className = {styles.typ_grey}> 창작 분야:     <div className = {styles.typ_black}>{props.props.props[1]}</div></div>
      </Card>
      <div className = {styles.flipscreen}> 자세히 보기
      </div>
    </Card>
  )
}

export default function Influencer(props) {
  const [showResults, setShowResults] = useState(false)
  const { data, keyword, morecontent } = props.props
  return (
    <>
    <Card sx={{ maxWidth: 768, lineHeight: "79px"}}>
       <Container sx={{ display: 'flex' }}>

          <Container sx={{ fontSize: '1rem', fontWeight : "700", display: 'flex'}}> 
          <div>인플루언서 </div> 
          <img className = {styles.influencer_icon} src="/images/influencer/icon_img.png"/>
          </Container>

          <Container sx={{ color: "#0c43b7", fontSize: '1rem' }} className = {styles.contenttitle_rightend}> 
          <Link href = "https://in.naver.com/"> 서비스 홈 바로가기 </Link> 
          </Container>

        </Container>
      </Card>

      {data.map((each) => 
      <Card sx={{ maxWidth: 768, my: '10px'}} key = {each.name}>
        <Container sx={{ maxWidth: 768, mt:"10px" }}>
          <Link href={each.avatar_name_url}> 
          <img className = {styles.avatar} src={"/images/influencer/avatar_" + keyword + "_" + each.key + ".png"}/>
          </Link>
            <div className = {styles.flex}> 
              <Link href={each.avatar_name_url} underline="none"> <div className = {styles.title}>{each.name}</div> </Link> 
              <div className = {styles.header}>{each.fans}</div> 
            </div>  
            <div className = {styles.header_sub}>{each.type}</div> 
            <div className = {styles.header_sub_lft}>{each.place}</div>
            <Blogfan/>
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
  
        <Container sx={{ display : 'flex' }}>
          <Container>
            <Link href={each.title_content_url} underline="none"> <Container sx={{my: '10px', color: "#404040", fontSize: '1rem' }}> {each.content} </Container> </Link>
            <Container sx={{my: '10px', color: 'grey', fontSize: '1rem' }}> {each.date} </Container>
          </Container>
          <Link href={each.title_content_url} underline="none"> <img className = {styles.image} src={"/images/influencer/blog_" + keyword + "_" + each.key + ".png"}/> </Link>
        </Container>
      </Card>)}
      <MoreContent props={{'view_option': "인플루엔서",'more_link':morecontent}}/>
    </>
  )
}
