import React from 'react'
import renderer from 'react-test-renderer'
import Influencer from '../src/components/influencer'

it('renders homepage unchanged', () => {
    const influencer = { 
        "data": [
        {
          "name": "쏠트몬",
          "type": "여행 전문작가",
          "place": "국내 전문",
          "fans": "팬 9,163",
          "blogdetails": "2012 파워블로그",
          "avatar_name_url": "https://in.naver.com/soltmon?query=%EB%B6%88%EA%B5%AD%EC%82%AC",
          "detailsdepth": ["도심 여행", "선호 여행 리뷰"],
          "title": "경주 가볼만한곳 불타는 단풍 가을 불국사",    
          "content": "가을 경주 가볼만한곳 단풍이 아름다운 불국사입니다. 인기 여행지기도 하고 어릴 때 한 번쯤은 수학여행 등으로 어쩔 수 없이 오게 되는 한국인의 명소 한국에서 학",
          "title_content_url":"https://in.naver.com/soltmon/contents/367697143409280?query=%EB%B6%88%EA%B5%AD%EC%82%AC",
          "date": "2021.11.05",
          "contentsImgURL": ["/images/Bulguksa/influencer/3/1.PNG","/images/Bulguksa/influencer/3/2.PNG","/images/Bulguksa/influencer/3/3.PNG","/images/Bulguksa/influencer/3/4.PNG","/images/Bulguksa/influencer/3/5.PNG","/images/Bulguksa/influencer/3/6.PNG","/images/Bulguksa/influencer/3/7.PNG","/images/Bulguksa/influencer/3/8.PNG","/images/Bulguksa/influencer/3/9.PNG","/images/Bulguksa/influencer/3/10.PNG","/images/Bulguksa/influencer/3/11.PNG"],
          
          "key" : "1"
        },
        {
          "name": "어람",
          "type": "여행 전문블로거",
          "place": " 국내 전문",
          "fans": "팬 4,855",
          "blogdetails": "이달의 블로그 (2021.1)",
          "avatar_name_url": "https://in.naver.com/byunyo?query=%EA%B2%BD%EC%A3%BC+%EB%B6%88%EA%B5%AD%EC%82%AC",
          "detailsdepth": ["자연경관 선호", "여행 리뷰"],
          "title": "단풍으로 붉게 물든 경주 불국사",    
          "content": "단풍 명소로 단연코 으뜸이라 할 수 있는 경주 불국사 단풍은 절정으로 지나고 있습니다. 오늘 흐린 날이지만 잠시 단풍 구경 다녀왔는데요 평일인지 휴일인지 분간이 안 갈 정도로 많은 인파로 아침부",
          "title_content_url":"https://in.naver.com/byunyo/contents/369761082338656?query=%EA%B2%BD%EC%A3%BC+%EB%B6%88%EA%B5%AD%EC%82%AC",
          "date": "2021.11.11",
          "contentsImgURL": ["/images/Bulguksa/influencer/2/1.PNG","/images/Bulguksa/influencer/2/2.PNG","/images/Bulguksa/influencer/2/3.PNG","/images/Bulguksa/influencer/2/4.PNG","/images/Bulguksa/influencer/2/5.PNG","/images/Bulguksa/influencer/2/6.PNG","/images/Bulguksa/influencer/2/7.PNG","/images/Bulguksa/influencer/2/8.PNG","/images/Bulguksa/influencer/2/9.PNG","/images/Bulguksa/influencer/2/10.PNG","/images/Bulguksa/influencer/2/11.PNG"],
          "key" : "2"
        },
        {
          "name": "쩡유의트래블라이프",
          "type": "여행 전문블로거",
          "place": "유럽 전문",
          "fans": "팬 5,291",
          "blogdetails": "블로그 이웃 8,300+",
          "avatar_name_url": "https://in.naver.com/youujjung?query=%EA%B2%BD%EC%A3%BC+%EB%B6%88%EA%B5%AD%EC%82%AC",
          "detailsdepth": ["SNS 핫플 매니아", "경험/노하우 공유"],
          "title": "경주 불국사 근처 맛집 콩이랑부터 카페까지 추천!",    
          "content": "G Y E O N G J U 경주 불국사 근처 맛집 콩이랑 + 카페 하프라운드, 바실라 후기 글/사진. 쩡유 안녕하세요 여행블로거 쩡유입니다 :> 요즘 날씨가 좋아서 주말에 경주 여행, 나들이 가시는 분들도 많",
          "title_content_url":"https://in.naver.com/youujjung/contents/373175694222656?query=%EA%B2%BD%EC%A3%BC+%EB%B6%88%EA%B5%AD%EC%82%ACC",
          "date": "6일 전",
          "contentsImgURL": ["/images/Bulguksa/influencer/1/1.PNG","/images/Bulguksa/influencer/1/2.png","/images/Bulguksa/influencer/1/3.png","/images/Bulguksa/influencer/1/4.png","/images/Bulguksa/influencer/1/5.png","/images/Bulguksa/influencer/1/6.png","/images/Bulguksa/influencer/1/7.png","/images/Bulguksa/influencer/1/8.png","/images/Bulguksa/influencer/1/9.png","/images/Bulguksa/influencer/1/10.png"],
          "key" : "3"
        }],
        "morecontent": "https://m.search.naver.com/search.naver?query=%EA%B2%BD%EC%A3%BC+%EB%B6%88%EA%B5%AD%EC%82%AC&sm=mtb_nmr&where=m_influencer",
        "keyword": "bulguksa"
    }
  const tree = renderer.create(<Influencer props={influencer}/>).toJSON()
  expect(tree).toMatchSnapshot()
})