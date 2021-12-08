import React from 'react'
import { render, screen } from '@testing-library/react'
import Wiki from '../src/components/wiki'
 
function replace_text(text){
  var new_text = text.replace(/\./g, '\\.').replace(/\(/g, '\\(').replace(/\)/g, '\\)').replace(/\+/g, '\\+').replace(/\?/g, '\\?').replace(/\*/g, '\\*').replace(/\{/g, '\\{').replace(/\}/g, '\\}').replace(/\|/g, '\\|').replace(/\^/g, '\\^').replace(/\$/g, '\\$')
  return new_text;
}

describe('Wiki', () => {
  it('renders a wiki card', () => {
    const wiki = {
      "wiki_posts": [
          {
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
          },
          {
              "publisherURL": "http://encykorea.aks.ac.kr/Contents/Item/E0024933",
              "publisherImgURL": "/images/Bulguksa/wiki/2.png",
              "publisher": "encykorea.aks.ac.kr › contents",
              "date": "",
              "postURL": "http://encykorea.aks.ac.kr/Contents/Item/E0024933",
              "title": "경주 불국사(慶州 佛國寺) - 한국민족문화대백과사전",
              "contents": "경상북도 경주시 토함산(吐含山) 서쪽 중턱에 있는 남북국시대 통일신라 김대성의 발원으로 창건한 사찰. 사적.대한불교조계종 제11교구 본사이다.",
              "contentsImgURL": "",
              "relation": "",
              "content_links": []
          },
          {
              "publisherURL": "https://namu.wiki/w/%EB%B6%88%EA%B5%AD%EC%82%AC",
              "publisherImgURL": "/images/Bulguksa/wiki/3.png",
              "publisher": "namu.wiki › 불국사",
              "date": "",
              "postURL": "https://namu.wiki/w/%EB%B6%88%EA%B5%AD%EC%82%AC",
              "title": "불국사 - 나무위키",
              "contents": "경상북도경주시불국로 385 (진현동) 토함산 기슭에 위치한 신라 연간을 기원으로 하는 사찰. 1995년 12월에 토함산 중턱의 암자 석굴암과 공동으로 유네스코 세계문화유산으로 지정되었다.",
              "contentsImgURL": "",
              "relation": "",
              "content_links": []
          },
          {
              "publisherURL": "https://www.gyeongju.go.kr/tour/page.do?mnu_uid=2349&area_uid=260&cmd=2",
              "publisherImgURL": "/images/Bulguksa/wiki/1.png",
              "publisher": "www.gyeongju.go.kr›tour",
              "date": "",
              "postURL": "https://www.gyeongju.go.kr/tour/page.do?mnu_uid=2349&area_uid=260&cmd=2",
              "title": "경주 불국사 | 불국사·석굴암 | 세계문화유산 | 문화재·역사 | 경주문화관광 - 경주시청",
              "contents": "경주 불국사 慶州 佛國寺 기본정보 종목 사적 제502호 분류 유적건조물 수량/면적 409,315㎡ 지정(등록)일 2009년 12월 21일 소재지 경북 경주시 불국로 385, 등 (진현동) 소유자 불국사 외 관리자 불국사 길찾기 좋아요 3 스크랩 9 목록 경주시청이 창작한 불국사·석굴암 저작물은 “공공누리...",
              "contentsImgURL": "",
              "relation": "",
              "content_links": []
          }
      ],
      "wiki_more": "https://m.search.naver.com/search.naver?page=2&query=%EA%B2%BD%EC%A3%BC+%EB%B6%88%EA%B5%AD%EC%82%AC&sm=mtb_pge&start=1&where=m_web"
  }
    render(<Wiki props={wiki}/>)
    for(var i = 0; i < wiki.wiki_posts.length; i++)
    {
      const img0 = screen.getByAltText(RegExp(`(?<!.)${i+" thumb"}(?!.)`, "i"))
      expect(img0).toBeInTheDocument()
      expect(img0.closest('div').closest('div').closest('a')).toHaveAttribute('href', wiki.wiki_posts[i].publisherURL)
      const link0 = screen.getByRole('link', {
        name: RegExp(`(?<!.)${replace_text(wiki.wiki_posts[i].publisher)}(?!.)`, "i"),
      })
      expect(link0).toBeInTheDocument()
      expect(link0.closest('a')).toHaveAttribute('href', wiki.wiki_posts[i].publisherURL)
      const button0 = screen.getByTestId(RegExp(`(?<!.)${i+" button"}(?!.)`, "i"))
      expect(button0).toBeInTheDocument()
      const link1 = screen.getByRole('link', {
        name: RegExp(`(?<!.)${replace_text(wiki.wiki_posts[i].title)}(?!.)`, "i"),
      })
      expect(link1).toBeInTheDocument()
      expect(link1.closest('a')).toHaveAttribute('href', wiki.wiki_posts[i].publisherURL)
      const hr0 = screen.getByTestId(RegExp(`(?<!.)${i+" divider"}(?!.)`, "i"))
      expect(hr0).toBeInTheDocument()
      if(wiki.wiki_posts[i].content_links.length !== 0)
      {
        for(var j = 0; j < wiki.wiki_posts[i].content_links.length; j++)
        {
          const link2 = screen.getByRole('link', {
            name: RegExp(`(?<!.)${replace_text(wiki.wiki_posts[i].content_links[j].link_name)}(?!.)`, "i"),
          })
          expect(link2).toBeInTheDocument()
          expect(link2).toHaveAttribute('href', wiki.wiki_posts[i].content_links[j].link_url)
        }
      }
      const link3 = screen.getByText(RegExp(`(?<!.)${replace_text(wiki.wiki_posts[i].contents)}(?!.)`, "i"))
      expect(link3).toBeInTheDocument()
      expect(link3.closest('div').closest('a')).toHaveAttribute('href', wiki.wiki_posts[i].postURL)
    }
    const div0 = screen.getByText(/(?<!.)더보기(?!.)/i)
    const img1 = screen.getByAltText(/arrow/i)
    expect(div0).toBeInTheDocument()
    expect(img1).toBeInTheDocument()
    expect(div0.closest('div').closest('a')).toHaveAttribute('href', wiki.wiki_more)
  })
})
 