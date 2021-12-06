import React from 'react'
import { render, screen } from '@testing-library/react'
import PostCard from '../src/components/PostCard'
 
describe('Wiki', () => {
  it('renders a wiki card', () => {
    var ViewType = Object.freeze({
      NEWS: 0,
      WIKI: 1
    });
    const wiki = {
      "publisherURL": "http://www.bulguksa.or.kr/",
      "publisherImgURL": "/images/Bulguksa/wiki/1.png",
      "publisher": "www.bulguksa.or.kr",
      "date": "",
      "postURL": "http://www.bulguksa.or.kr/",
      "title": "세계문화유산 불국사",
      "contents": "1… 행사 사진 BULGUK GALLERY 제49회 신라문화 영산대재와 천… 오시는 길 개인정보처리방침 서비스이용약관 경상북도 경주시 불국로 385 (진현동 15-1) l Tel. 054)746-9913 ㅣ FAX 054)746-1476 ㅣ Email ************@*******.*** 불국사 템플스테이 Tel. 054)746-0983 bulguksa...",
      "contentsImgURL": "",
      "relation": "",
      "content_links": [
        {
          "link_name": "관람안내",
          "link_url": "http://www.bulguksa.or.kr/bbs/content.php?co_id=application"
        },
        {
          "link_name": "전각/성보문화재",
          "link_url": "http://www.bulguksa.or.kr/bbs/content.php?co_id=palace"
        },
        {
          "link_name": "성보문화재",
          "link_url": "http://www.bulguksa.or.kr/bbs/content.php?co_id=treasure"
        },
        {
          "link_name": "불국사",
          "link_url": "http://www.bulguksa.or.kr/bbs/content.php?co_id=history"
        },
        {
          "link_name": "찾아오시는 길",
          "link_url": "http://www.bulguksa.or.kr/bbs/content.php?co_id=location"
        },
        {
          "link_name": "지대방",
          "link_url": "http://www.bulguksa.or.kr/bbs/board.php?bo_table=notice"
        }
      ]
    }
    render(<PostCard props={wiki} view={{ "viewType": ViewType.WIKI }}/>)
 
    const img0 = screen.getByAltText(/publisher/i)
    const link0 = screen.getByRole('link', {
      name: /www.bulguksa.or.kr/i,
    })
    const button0 = screen.getByRole('button')
    const link1 = screen.getByRole('link', {
      name: /세계문화유산 불국사/i,
    })
    const hr0 = screen.getByRole('separator')
    const link2 = screen.getByRole('link', {
      name: /관람안내/i,
    })
    const link3 = screen.getByRole('link', {
      name: /전각\/성보문화재/i,
    })
    const link4 = screen.getByRole('link', {
      name: /(?<!\/)성보문화재/i,
    })
    const link5 = screen.getByRole('link', {
      name: /(?<!.)불국사/i,
    })
    const link6 = screen.getByRole('link', {
      name: /찾아오시는 길/i,
    })
    const link7 = screen.getByRole('link', {
      name: /지대방/i,
    })
    const link8 = screen.getByText(/1…/i)
 
    expect(img0).toBeInTheDocument()
    expect(button0).toBeInTheDocument()
    expect(hr0).toBeInTheDocument()
    expect(link0).toBeInTheDocument()
    expect(link1).toBeInTheDocument()
    expect(link2).toBeInTheDocument()
    expect(link3).toBeInTheDocument()
    expect(link4).toBeInTheDocument()
    expect(link5).toBeInTheDocument()
    expect(link6).toBeInTheDocument()
    expect(link7).toBeInTheDocument()
    expect(link8).toBeInTheDocument()
    expect(img0.closest('div').closest('div').closest('a')).toHaveAttribute('href', 'http://www.bulguksa.or.kr/')
    expect(link0.closest('a')).toHaveAttribute('href', 'http://www.bulguksa.or.kr/')
    expect(link1.closest('a')).toHaveAttribute('href', 'http://www.bulguksa.or.kr/')
    expect(link2).toHaveAttribute('href', 'http://www.bulguksa.or.kr/bbs/content.php?co_id=application')
    expect(link3).toHaveAttribute('href', 'http://www.bulguksa.or.kr/bbs/content.php?co_id=palace')
    expect(link4).toHaveAttribute('href', 'http://www.bulguksa.or.kr/bbs/content.php?co_id=treasure')
    expect(link5).toHaveAttribute('href', 'http://www.bulguksa.or.kr/bbs/content.php?co_id=history')
    expect(link6).toHaveAttribute('href', 'http://www.bulguksa.or.kr/bbs/content.php?co_id=location')
    expect(link7).toHaveAttribute('href', 'http://www.bulguksa.or.kr/bbs/board.php?bo_table=notice')
    expect(link8.closest('div').closest('a')).toHaveAttribute('href', 'http://www.bulguksa.or.kr/')
  })
})
 