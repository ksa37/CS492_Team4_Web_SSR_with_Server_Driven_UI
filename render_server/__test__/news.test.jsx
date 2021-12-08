import React from 'react'
import { render, screen } from '@testing-library/react'
import News from '../src/components/news'
 
function replace_text(text){
  var new_text = text.replace(/\./g, '\\.')
                  .replace(/\(/g, '\\(').replace(/\)/g, '\\)')
                  .replace(/\+/g, '\\+').replace(/\?/g, '\\?')
                  .replace(/\*/g, '\\*').replace(/\{/g, '\\{')
                  .replace(/\}/g, '\\}').replace(/\|/g, '\\|')
                  .replace(/\^/g, '\\^').replace(/\$/g, '\\$')
                  .replace(/\[/g, '\\[').replace(/\]/g, '\\]')
  return new_text;
}

describe('News', () => {
  it('renders a news card', () => {
    const news = {
      "news_posts": [
        { 
            "publisherURL": "https://media.naver.com/press/022",
            "publisherImgURL": "/images/Bulguksa/news/1/1.jpg",
            "publisher": "세계일보",
            "date": "1637683320000",
            "postURL": "https://n.news.naver.com/mnews/article/022/0003640940?sid=102",
            "title": "코로나19 이후 첫 외국인 단체 관광객, 경주 불국사 등 방문",
            "contents": "싱가포르 관광객들이 경주 불국사 앞에서 기념촬영을 하고있다. 지난해 2월 코로나19 사태 이후 처음으로 외국인 단체 관광객이 경북을 방문해 눈길을 끌었다. 23일 경북도문화관광공사에 따르면 싱가포르 단체 관광객 약 20명이 지난 19일과 20일 이틀간 경주 대릉원, 첨성대, 석굴암, 불국사...",
            "contentsImgURL": "/images/Bulguksa/news/1/2.jpg",
            "relation": "0.9"
        },
        { 
            "publisherURL": "https://media.naver.com/press/020",
            "publisherImgURL": "/images/Bulguksa/news/2/1.jpg",
            "publisher": "동아일보",
            "date": "1637777340000",
            "postURL": "https://n.news.naver.com/mnews/article/020/0003395866?sid=102",
            "title": "“APEC 정상회의 유치 땐 경주발전 10년 이상 앞당길 것”",
            "contents": "싱가포르에서 온 이들은 19, 20일 대릉원과 첨성대, 석굴암, 불국사 등을 둘러봤다. 대표적 관광지인 경주엑스포대공원 관람객은 10월 말 현재 32만4324명을 기록했다. 지난해 같은 기간 16만9984명보다 91% 증가한 수치다. 올해 말까지 예상되는 관람객은 약 35만 명이다. 주 시장은 “위드 코로나...",
            "contentsImgURL": "/images/Bulguksa/news/2/2.jpg",
            "relation": "0.8"
        },
        { 
            "publisherURL": "https://www.ajunews.com/",
            "publisherImgURL": "/images/Bulguksa/news/3/1.jpg",
            "publisher": "아주경제",
            "date": "1637566620000",
            "postURL": "https://www.ajunews.com/view/20211122145015567",
            "title": "트래블 버블 협정 맺은 싱가포르 단체 관광객, 경북 경주 첫 방문",
            "contents": "최주호 기자 cjh@ajunews.com 싱가포르 단체 관광객들이 경주 불국사 앞에서 기념촬영을 하고 있다. [사진=경북문화관광공사 제공] 경상북도와 경북문화관광공사(이하 ‘공사’)는 ‘트래블버블’ 협정국 싱가포르 단체 관광객 약 20명에게 방역 키트‧기념품 등을 증정하며 경주 방문 환영...",
            "contentsImgURL": "/images/Bulguksa/news/3/2.jpg",
            "relation": "0.7"
        },
        { 
            "publisherURL": "https://media.naver.com/press/003",
            "publisherImgURL": "/images/Bulguksa/news/4/1.jpg",
            "publisher": "뉴시스",
            "date": "1637215140000",
            "postURL": "https://n.news.naver.com/mnews/article/003/0010840961?sid=102",
            "title": "경북도, 중국인 유학생 초청 안동~경주 팸투어",
            "contents": "이번 팸투어는 ▲경북도청 동락관의 경북도-허난성 국제미술교류전 참관 ▲안동 하회마을, 월영교 및 낙강물길 공원 방문 ▲경주 대릉원, 첨성대, 불국사 방문 및 경주빵 만들기 체험 등으로 이뤄졌다. 이번 팸투어 참가자는 경북대, 계명대, 대구보건대, 대구카톨릭대, 영진전문대에 재학 중인...",
            "contentsImgURL": "/images/Bulguksa/news/4/2.jpg",
            "relation": "0.6"
        }
    ],
    "news_more": "https://m.search.naver.com/search.naver?where=m_news&sm=mtb_nmr&query=%EA%B2%BD%EC%A3%BC%20%EB%B6%88%EA%B5%AD%EC%82%AC&sort=0&nso=so:r,p:all" 
  }
    render(<News props={news}/>)
    for(var i = 0; i < news.news_posts.length; i++)
    {
      const img0 = screen.getByAltText(RegExp(`(?<!.)${i+" thumb"}(?!.)`, "i"))
      expect(img0).toBeInTheDocument()
      expect(img0.closest('div').closest('div').closest('a')).toHaveAttribute('href', news.news_posts[i].publisherURL)
      const link0 = screen.getByRole('link', {
        name: RegExp(`(?<!.)${replace_text(news.news_posts[i].publisher)}(?!.)`, "i"),
      })
      expect(link0).toBeInTheDocument()
      expect(link0.closest('a')).toHaveAttribute('href', news.news_posts[i].publisherURL)
      const button0 = screen.getByTestId(RegExp(`(?<!.)${i+" button"}(?!.)`, "i"))
      expect(button0).toBeInTheDocument()
      const link1 = screen.getByRole('link', {
        name: RegExp(`(?<!.)${replace_text(news.news_posts[i].publisher)}(?!.)`, "i"),
      })
      expect(link1).toBeInTheDocument()
      expect(link1.closest('a')).toHaveAttribute('href', news.news_posts[i].publisherURL)
      // const hr0 = screen.getByTestId(RegExp(`(?<!.)${i+" divider"}(?!.)`, "i"))
      // expect(hr0).toBeInTheDocument()
      // expect(hr0).toBeNull()
      const link3 = screen.getByText(RegExp(`(?<!.)${replace_text(news.news_posts[i].contents)}(?!.)`, "i"))
      expect(link3).toBeInTheDocument()
      expect(link3.closest('div').closest('a')).toHaveAttribute('href', news.news_posts[i].postURL)
    }
    const div0 = screen.getByText(/(?<!.)뉴스 더보기(?!.)/i)
    const img1 = screen.getByAltText(/arrow/i)
    expect(div0).toBeInTheDocument()
    expect(img1).toBeInTheDocument()
    expect(div0.closest('div').closest('a')).toHaveAttribute('href', news.news_more)
  })
})
 