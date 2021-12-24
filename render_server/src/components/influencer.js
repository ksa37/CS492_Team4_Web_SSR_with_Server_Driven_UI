import { Container, Card, Grid, Link, Paper} from '@mui/material';
import { useState } from 'react';
import styles from './influencer.module.css'
import MoreContent from '../components/Morecontent';
import ImageScroll from './ImageScroll';

export default function Influencer(props) {
  var ScrollType = Object.freeze({
    VIEWBASIC: 0,
    VIEWTIMELINE: 1,
    INFLUENCER: 2
  });
        
  const Blogfan = (props) => {
    const [showResults, setShowResults] = useState(false)
    const onClick = () => setShowResults(!showResults)
    // console.log(props, props.props + 'unfan', 'props for blog fan2')
    return (
      <div data-testid = {(props.props) + "button"}>
        { showResults ? 
        <img onClick={onClick} className = {styles.fanicon_after} src="/images/influencer/unfan.png" alt={(props.props) + "unfan"}/>   
        : <img onClick={onClick} className = {styles.fanicon_before} src="/images/influencer/fanicon.png" alt={(props.props) + "fan"}/>}
      </div>
    )
  }
  
  const Search = (props) => {
    const [showResults, setShowResults] = useState(false)
    const onClick = () => setShowResults(!showResults)
    // console.log(props.props.id, 'search props')
    return (
      <div>
        { showResults ? 
        <div className = {styles.rightallign} onClick={onClick} > <img className = {styles.influencer_icon} src="/images/influencer/after.png" alt = {(props.props.id) + "after"}/>  </div> 
        : <div className = {styles.rightallign} onClick={onClick} > <img className = {styles.influencer_icon} src="/images/influencer/before.png" alt = {(props.props.id) + "before"}/>  </div>}
        { showResults ? <Results props={props}/> : null }
      </div>
    )
  }
  
  const Results = (props) => {
    return (
      <Paper sx={{ width: 730, lineHeight: "20px", border: 1, borderColor: 'grey.100', ml: "18px", mr: "18px", mb: "5px", mt: "5px" }}>
        <Grid sx={{ width: 710, lineHeight: "20px", border: 1, borderColor: 'grey.100', ml: "15px", mr: "10px", fontSize: '0.8rem', mt: "5px" }}>
          <div className = {styles.typ_grey}> 여행 스타일:<div className = {styles.typ_black}>{props.props.props.details[0]}</div> </div>
          <div className = {styles.typ_grey}> 창작 분야:  <div className = {styles.typ_black}>{props.props.props.details[1]}</div></div>
        </Grid>
        <Link href = {props.props.props.url}> <div className = {styles.flipscreen}> 자세히 보기 </div> </Link>
      </Paper>
    )
  }
  const [showResults, setShowResults] = useState(false)
  const { data, keyword, morecontent, contentsImgURL } = props.props
  // console.log(data, 'dataaaa')
  return (
    <>    
    <Card sx={{ maxWidth: 768}} variant='outlined' square>
      <Card sx={{ maxWidth: 768, lineHeight: "50px"}} square>
      <div className = {styles.influencer}> 인플루언서 </div> 
      <img className = {styles.influencer_icon} src="/images/influencer/icon_img.png" alt = {"header_icon"}/>
      <a className = {styles.service} href = "https://in.naver.com/"> 서비스 홈 바로가기 </a> 
      </Card>
      {data.map((each) => 
      <Card sx={{ maxWidth: 766}} key = {each.name} square>
        <Grid sx={{ maxWidth: 766, mt:"10px", ml:"18px" }}>
          <Link href={each.avatar_name_url}> <img className = {styles.avatar} src={"/images/influencer/avatar_" + keyword + "_" + each.key + ".png"} alt={(each.key) + "avatar"}/> </Link>
          <div className = {styles.flex}> 
            <Link href={each.avatar_name_url} underline="none"> <div className = {styles.title}>{each.name}</div> </Link> 
            <div className = {styles.header}>{each.fans}</div> 
          </div>
          <div className = {styles.header_sub}>{each.type}</div> 
          <div className = {styles.header_sub_lft}>{each.place}</div>
          <Blogfan props = {each.key}/>
        </Grid>

        <Container style = {{display: "flex"}}> 
          <img className = {styles.blogicon} src="/images/influencer/blogicon.png" alt = {(each.key) + "icon"}/> 
          <div className = {styles.subheader}> {each.blogdetails} </div> 
          <div className = {styles.detailsdepth}> {each.detailsdepth} </div>
        </Container>

        <Search props = {{"details": each.detailsdepth, "url": each.avatar_name_url, "id": each.key}}/>

        <Container sx = {{mt: "27px"}}>{keyword === 'bulguksa' && <ImageScroll props={{'imgs': each.contentsImgURL}} scroll_view={{"scroll_type": ScrollType.INFLUENCER}}/>}
        </Container>
        
        <Link href={each.title_content_url} underline="none"> 
        <Grid sx={{color: '#0c43b7', fontSize: '1rem', ml:'20px' }} className = {styles.contenttitle}> {each.title} </Grid> 
        </Link>  
  
        <div className = {styles.f}>
          <div>
            <Link href={each.title_content_url} underline="none"> <div className = {styles.content}> {each.content} </div> </Link>
            <div className = {styles.date}> {each.date} </div>
          </div>
          <Link href={each.title_content_url} underline="none"> 
          {keyword !== 'bulguksa' && <img className = {styles.image} src={"/images/influencer/blog_" + keyword + "_" + each.key + ".png"} alt={(each.key) + "blog"}/>} 
          </Link> 
        </div>
        </Card>)}
    </Card>
    
    
      <MoreContent props={{'view_option': "인플루언서",'more_link':morecontent}}/>
    </>
  )
}
