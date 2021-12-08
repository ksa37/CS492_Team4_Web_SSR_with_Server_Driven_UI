import React from 'react'
import renderer from 'react-test-renderer'
import View from '../src/components/view'

it('renders homepage unchanged', () => {
    const view = {
      "tags": [
          {
            "tag_name": "전체",
            "tag_image_url": "/images/photos/photos_tag_images/paris_tag1.png",
            "tagURL": "https://m.search.naver.com/search.naver?where=m_image&mode=imgonly&nso=so%3Ar%2Ca%3Aall%2Cp%3Aall&sm=mtb_imt&query=%ED%94%84%EB%9E%91%EC%8A%A4%20%ED%8C%8C%EB%A6%AC&pq=%ED%8C%8C%EB%A6%AC"
          },
          {
            "tag_name": "카페글",
            "tag_image_url": "/images/photos/photos_tag_images/paris_tag2.png",
            "tagURL" : "https://m.search.naver.com/search.naver?where=m_image&mode=imgonly&nso=so%3Ar%2Ca%3Aall%2Cp%3Aall&sm=mtb_imt&query=%ED%8C%8C%EB%A6%AC%20%EA%B5%AD%EA%B8%B0&pq=%ED%8C%8C%EB%A6%AC"
          },
          {
            "tag_name": "날씨",
            "tag_image_url": "/images/photos/photos_tag_images/paris_tag3.png",
            "tagURL": "https://m.search.naver.com/search.naver?where=m_image&mode=imgonly&nso=so%3Ar%2Ca%3Aall%2Cp%3Aall&sm=mtb_imt&query=%ED%8C%8C%EB%A6%AC%20%EC%A7%80%EB%8F%84&pq=%ED%8C%8C%EB%A6%AC"
          },
          {
            "tag_name": "맛집",
            "tag_image_url": "/images/photos/photos_tag_images/paris_tag4.png",
            "tagURL": "https://m.search.naver.com/search.naver?where=m_image&mode=imgonly&nso=so%3Ar%2Ca%3Aall%2Cp%3Aall&sm=mtb_imt&query=%ED%8C%8C%EB%A6%AC%20%EC%83%9D%EC%A0%9C%EB%A5%B4%EB%A7%B9&pq=%ED%8C%8C%EB%A6%AC"
          },
          {
            "tag_name": "물랑루즈",
            "tag_image_url": "/images/photos/photos_tag_images/paris_tag5.png",
            "tagURL": "https://m.search.naver.com/search.naver?where=m_image&mode=imgonly&nso=so%3Ar%2Ca%3Aall%2Cp%3Aall&sm=mtb_imt&query=%ED%8C%8C%EB%A6%AC%20%EC%97%90%ED%8E%A0%ED%83%91&pq=%ED%8C%8C%EB%A6%AC"
          },
          {
            "tag_name": "쇼핑",
            "tag_image_url": "/images/photos/photos_tag_images/paris_tag6.png",
            "tagURL": "https://m.search.naver.com/search.naver?where=m_image&mode=imgonly&nso=so%3Ar%2Ca%3Aall%2Cp%3Aall&sm=mtb_imt&query=%ED%8C%8C%EB%A6%AC%20%EC%95%BC%EA%B2%BD&pq=%ED%8C%8C%EB%A6%AC"
          },
          {
              "tag_name": "코스",
              "tag_image_url": "/images/photos/photos_tag_images/paris_tag6.png",
              "tagURL": "https://m.search.naver.com/search.naver?where=m_image&mode=imgonly&nso=so%3Ar%2Ca%3Aall%2Cp%3Aall&sm=mtb_imt&query=%ED%8C%8C%EB%A6%AC%20%EC%95%BC%EA%B2%BD&pq=%ED%8C%8C%EB%A6%AC"
          },
          {
              "tag_name": "모나리자",
              "tag_image_url": "/images/photos/photos_tag_images/paris_tag6.png",
              "tagURL": "https://m.search.naver.com/search.naver?where=m_image&mode=imgonly&nso=so%3Ar%2Ca%3Aall%2Cp%3Aall&sm=mtb_imt&query=%ED%8C%8C%EB%A6%AC%20%EC%95%BC%EA%B2%BD&pq=%ED%8C%8C%EB%A6%AC"
          },
          {
              "tag_name": "야경",
              "tag_image_url": "/images/photos/photos_tag_images/paris_tag6.png",
              "tagURL": "https://m.search.naver.com/search.naver?where=m_image&mode=imgonly&nso=so%3Ar%2Ca%3Aall%2Cp%3Aall&sm=mtb_imt&query=%ED%8C%8C%EB%A6%AC%20%EC%95%BC%EA%B2%BD&pq=%ED%8C%8C%EB%A6%AC"
          },
          {
              "tag_name": "에펠탑",
              "tag_image_url": "/images/photos/photos_tag_images/paris_tag6.png",
              "tagURL": "https://m.search.naver.com/search.naver?where=m_image&mode=imgonly&nso=so%3Ar%2Ca%3Aall%2Cp%3Aall&sm=mtb_imt&query=%ED%8C%8C%EB%A6%AC%20%EC%95%BC%EA%B2%BD&pq=%ED%8C%8C%EB%A6%AC"
          },
          {
              "tag_name": "예약",
              "tag_image_url": "/images/photos/photos_tag_images/paris_tag6.png",
              "tagURL": "https://m.search.naver.com/search.naver?where=m_image&mode=imgonly&nso=so%3Ar%2Ca%3Aall%2Cp%3Aall&sm=mtb_imt&query=%ED%8C%8C%EB%A6%AC%20%EC%95%BC%EA%B2%BD&pq=%ED%8C%8C%EB%A6%AC"
          },
          {
              "tag_name": "루브르박물관",
              "tag_image_url": "/images/photos/photos_tag_images/paris_tag6.png",
              "tagURL": "https://m.search.naver.com/search.naver?where=m_image&mode=imgonly&nso=so%3Ar%2Ca%3Aall%2Cp%3Aall&sm=mtb_imt&query=%ED%8C%8C%EB%A6%AC%20%EC%95%BC%EA%B2%BD&pq=%ED%8C%8C%EB%A6%AC"
          },
          {
              "tag_name": "베르사유궁전",
              "tag_image_url": "/images/photos/photos_tag_images/paris_tag6.png",
              "tagURL": "https://m.search.naver.com/search.naver?where=m_image&mode=imgonly&nso=so%3Ar%2Ca%3Aall%2Cp%3Aall&sm=mtb_imt&query=%ED%8C%8C%EB%A6%AC%20%EC%95%BC%EA%B2%BD&pq=%ED%8C%8C%EB%A6%AC"
          }
        ],
      "view_posts": [
          { 
              "publisherURL": "https://in.naver.com/hug387",
              "publisherImgURL": "/images/view/blog_logo1.jpeg",
              "publisher": "유지니",
              "date": "1637031230000",
              "postURL": "https://m.blog.naver.com/hug387/222569690308",
              "title": "호탤스닷컴 11월 할인코드 파리여행 준비해볼까~",
              "contents": "직접 보여드릴게요, 파리 숙소를 검색했더니 다양한 호텔들이 나와요. 여기서 기본적으로... 다시가고 싶은 파리여행 뭘해도 재밌었다, 라는 생각이 드는 파리. 2020년 1월에...",
              "contentsImgURL": ["/images/view/blog_img1_1.png","/images/view/blog_img1_2.jpeg",
                  "/images/view/blog_img1_3.jpeg","/images/view/blog_img1_4.jpeg","/images/view/blog_img1_5.jpeg",
                  "/images/view/blog_img1_6.jpeg","/images/view/blog_img1_7.jpeg","/images/view/blog_img1_8.jpeg",
                  "/images/view/blog_img1_9.jpeg","/images/view/blog_img1_10.jpeg","/images/view/blog_img1_11.jpeg"
              ],
              "imgNum": 11,
              "relation": "",
              "tags": [
                  {"tag_name": "호텔스닷컴",
                  "tagURL":"https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&query=%ED%98%B8%ED%85%94%EC%8A%A4%EB%8B%B7%EC%BB%B4"
                  },
                  {"tag_name": "호텔스닷컴11월할인코드",
                  "tagURL":"https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&query=%ED%98%B8%ED%85%94%EC%8A%A4%EB%8B%B7%EC%BB%B411%EC%9B%94%ED%95%A0%EC%9D%B8%EC%BD%94%EB%93%9C"
                  },
                  {"tag_name": "파리여행",
                  "tagURL":"https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&query=%ED%8C%8C%EB%A6%AC%EC%97%AC%ED%96%89"
                  }
              ],
              "more_links": [
                  
              ]
          },
          { 
              "publisherURL": "https://m.blog.naver.com/amy201427",
              "publisherImgURL": "/images/view/blog_logo2.jpeg",
              "publisher": "Chez Amy (·ㅅ·)♥",
              "date": "1637341500000",
              "postURL": "https://m.blog.naver.com/amy201427/222573481510",
              "title": "파리 블랙프라이데이에 낚인 라발레빌리지 아울렛 feat. FURLA 백팩",
              "contents": "파리 블랙프라이데이에 낚인 라발레빌리지 아울렛 feat. FURLA 백팩 작년에 이어 올해도 어김없이 파리 블랙프라이데이가 돌아왔음 :) 작년과 다르게 올해는 위드코로나로 관광객들이...",
              "contentsImgURL": ["/images/view/blog_img2.png"],
              "imgNum": 99,
              "relation": "",
              "tags": [
                  {"tag_name": "파리블랙프라이데이",
                  "tagURL":"https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&query=%ED%8C%8C%EB%A6%AC%EB%B8%94%EB%9E%99%ED%94%84%EB%9D%BC%EC%9D%B4%EB%8D%B0%EC%9D%B4"
                  },
                  {"tag_name": "파리라발레빌리지",
                  "tagURL":"https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&query=%ED%8C%8C%EB%A6%AC%EB%9D%BC%EB%B0%9C%EB%A0%88%EB%B9%8C%EB%A6%AC%EC%A7%80"
                  },
                  {"tag_name": "파리아울렛",
                  "tagURL":"https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&query=%ED%8C%8C%EB%A6%AC%EC%95%84%EC%9A%B8%EB%A0%9B"
                  },
                  {"tag_name": "FURLA백팩",
                  "tagURL":"https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&query=FURLA%EB%B0%B1%ED%8C%A9"
                  }
              ],
              "more_links": [
                  {"link_name": "초겨울보다 늦가을이란 말이 어울리는 11월의 파리(#11월파리 #파리11월)",
                  "link_url": "https://m.blog.naver.com/amy201427/222563620200"
                  },
                  {"link_name": "최근에 간 프랑스 파리 카페 & 레스토랑(#프랑스카페 #파리카페)",
                  "link_url": "https://m.blog.naver.com/amy201427/222541103184"
                  }
              ]
      
          },
          { 
              "publisherURL": "https://m.post.naver.com/my.naver?memberNo=15792726",
              "publisherImgURL": "/images/view/blog_logo3.jpeg",
              "publisher": "트래비",
              "date": "1635483180000",
              "postURL": "https://m.post.naver.com/viewer/postView.naver?volumeNo=32649551&memberNo=15792726&vType=VERTICAL",
              "title": "낭만과 고독 사이, 11월의 파리",
              "contents": "11월의 파리는 쌀쌀하다.소나기도 자주 내리고,흐린 날도 더러 있다.그럼에도 여행은 낭만적이다.때론 고독하기도 하고.  파리의 낭만적인, 혹은 고독한 거리 L'Horizon 120 Rue de...",
              "contentsImgURL": ["/images/view/blog_img3.jpeg"],
              "imgNum": 8,
              "relation": "",
              "tags": [
                  {"tag_name": "frparis",
                  "tagURL":"https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&query=frparis"
                  },
                  {"tag_name": "유럽자유여행",
                  "tagURL":"https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&query=%EC%9C%A0%EB%9F%BD%EC%9E%90%EC%9C%A0%EC%97%AC%ED%96%89"
                  },
                  {"tag_name": "프랑스여행",
                  "tagURL":"https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&query=%ED%94%84%EB%9E%91%EC%8A%A4%EC%97%AC%ED%96%89"
                  },
                  {"tag_name": "파리여행코스",
                  "tagURL":"https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&query=%ED%8C%8C%EB%A6%AC%EC%97%AC%ED%96%89%EC%BD%94%EC%8A%A4"
                  },
                  {"tag_name": "파리가볼만한곳",
                  "tagURL":"https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&query=%ED%8C%8C%EB%A6%AC%EA%B0%80%EB%B3%BC%EB%A7%8C%ED%95%9C%EA%B3%B3"
                  },
                  {"tag_name": "파리몽마르뜨",
                  "tagURL":"https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&query=%ED%8C%8C%EB%A6%AC%EB%AA%BD%EB%A7%88%EB%A5%B4%EB%9C%A8"
                  },
                  {"tag_name": "파리쇼핑",
                  "tagURL":"https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&query=%ED%8C%8C%EB%A6%AC%EC%87%BC%ED%95%91"
                  }
              ],
              "more_links": [
                  
              ]
          },
          { 
              "publisherURL": "https://in.naver.com/charla1005",
              "publisherImgURL": "/images/view/blog_logo4.jpeg",
              "publisher": "샬라",
              "date": "1635489680000",
              "postURL": "https://m.blog.naver.com/charla1005/222564450060",
              "title": "파리 자유여행 몽파르나스 전망대 야경명소",
              "contents": "파리 자유여행 몽파르나스 전망대 야경명소 2019년 11월, 딱 2년전 다녀온 파리 자유여행 :D 추울건 알고 갔지만.... 진짜 작정하고 추웠던 11월의 파리 ^_ㅜ 추운걸로 시작해서...",
              "contentsImgURL":  ["/images/view/blog_img4.png"],
              "imgNum": 30,
              "relation": "",
              "tags": [
                  {"tag_name": "몽파르나스전망대",
                  "tagURL":"https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&query=%EB%AA%BD%ED%8C%8C%EB%A5%B4%EB%82%98%EC%8A%A4%EC%A0%84%EB%A7%9D%EB%8C%80"
                  },
                  {"tag_name": "파리자유여행",
                  "tagURL":"https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&query=%ED%8C%8C%EB%A6%AC%EC%9E%90%EC%9C%A0%EC%97%AC%ED%96%89"
                  }
              ],
              "more_links": [
                  
              ]
          },
          { 
              "publisherURL": "https://m.blog.naver.com/ghdtlr1130",
              "publisherImgURL": "/images/view/blog_logo5.jpeg",
              "publisher": "레이디마마",
              "date": "1637012600000",
              "postURL": "https://m.blog.naver.com/ghdtlr1130/222573197981",
              "title": "프랑스 파리 Paris- Versailles베르사유, bateau mouche바토무슈, Eiffel Tower에펠탑 (2021.09....",
              "contents": "모두의 로망 파리~ 아닌가? 유로스타를 타려고 했는데, 몇개월전에 미리 예약하면... 차타고 런던에서 파리가기! eurotunnel 유로터널. 언젠가는 가봐야지했는데 바로 가게되다니. 차를...",
              "contentsImgURL":[ "/images/view/blog_img5.png"],
              "imgNum": 34,
              "relation": "",
              "tags": [
                  {"tag_name": "파리",
                  "tagURL":"https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&query=%ED%8C%8C%EB%A6%AC"
                  },
                  {"tag_name": "파리여행",
                  "tagURL":"https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&query=%ED%8C%8C%EB%A6%AC%EC%97%AC%ED%96%89"
                  },
                  {"tag_name": "Paris",
                  "tagURL":"https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&query=Paris"
                  },
                  {"tag_name": "versailles",
                  "tagURL":"https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&query=versailles"
                  },
                  {"tag_name": "바토무슈",
                  "tagURL":"https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&query=%EB%B0%94%ED%86%A0%EB%AC%B4%EC%8A%88"
                  },
                  {"tag_name": "에펠탑",
                  "tagURL":"https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&query=%EC%97%90%ED%8E%A0%ED%83%91"
                  },
                  {"tag_name": "Eiffeltower",
                  "tagURL":"https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&query=Eiffeltower"
                  },
                  {"tag_name": "eurotunnel",
                  "tagURL":"https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&query=eurotunnel"
                  },
                  {"tag_name": "유로터널",
                  "tagURL":"https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&query=%EC%9C%A0%EB%A1%9C%ED%84%B0%EB%84%90"
                  },
                  {"tag_name": "차타고파리가기",
                  "tagURL":"https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&query=%EC%B0%A8%ED%83%80%EA%B3%A0%ED%8C%8C%EB%A6%AC%EA%B0%80%EA%B8%B0"
                  }
              ],
              
              "more_links": [
                  {"link_name": "프랑스 파리 Paris- 몽마르뜨 언덕,루브르,튈리르가든,콩코드광장,개선문,에펠탑 (2021.09.11~09.12)(#파리 #파리여행)",
                  "link_url": "https://m.blog.naver.com/ghdtlr1130/222573282965"
                  }
              ]
          }
          
          ],
          "view_cafe_posts": [
              { 
                  "publisherURL": "https://m.cafe.naver.com/hotellife",
                  "publisherImgURL": "/images/view/cafe_logo1.jpeg",
                  "publisher": "[스사사] 스마트컨슈머들의 호텔/항공/VIP카드/여행 이야기",
                  "date": "1637633760000",
                  "postURL": "https://m.cafe.naver.com/ca-fe/web/cafes/hotellife/articles/1670600?useCafeId=false&or=m.search.naver.com&query=%ED%8C%8C%EB%A6%AC%2B&buid=712b5797-94af-4d52-a529-496c8aaa867e&art=ZXh0ZXJuYWwtc2VydmljZS1uYXZlci1ldGMtZm9yLWNvbW1lbnQ.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjYWZlVHlwZSI6IkNBRkVfSUQiLCJhcnRpY2xlSWQiOjE2NzA2MDAsImlzc3VlZEF0IjoxNjM4MTg5NjU5Nzc3LCJjYWZlSWQiOjE4Nzg2NjA1fQ.xwM-_-5tjkufJtre78m7ltUW-jhxu1D9FPba35cvpfY",
                  "title": "첫 숙소 Regina Paris + 파리야경",
                  "contents": "정말 파리에 온 느낌이 물씬 나더라구라요! 사진 나갑니다 ㅎㅎ 밤에 도착한지라... 바로 파리의 밤을 즐기러 나가봅니다 휘비고~~~ 3년 전에도 파리에 왔었는데 그 때랑 정말 많이...",
                  "contentsImgURL": ["/images/view/cafe_img1.png"
                  ],
                  "imgNum": 33,
                  "relation": "",
                  "tags": [
                  ],
                  "more_links": [
                  ],
                  "comments": [
                      "저도 낮술 좋아합니다.. 파리에서 우아한 낮술 하고 싶어요",
                      "와우... 신혼여행 축하드립니다~~ ㅎㅎㅎ 여행가고 싶어요",
                      "넘 부러워요ㅠㅠ좋은시간 보내고 오세요!!",
                      "거리 풍경 보면서 저 거리 풍경에 한국 간판을 달면 어떤 모습일까 상상해 봅니다. 우리나라도 간판 규정좀 만들어서 통일했으면 ㅠㅠ 신혼여행 축하드리고 좋은시간 보내세요~"
                  ]
              },
              { 
                  "publisherURL": "https://m.cafe.naver.com/hotellife",
                  "publisherImgURL": "/images/view/cafe_logo1.jpeg",
                  "publisher": "[스사사] 스마트컨슈머들의 호텔/항공/VIP카드/여행 이야기",
                  "date": "1637240340000",
                  "postURL": "https://m.cafe.naver.com/ca-fe/web/cafes/hotellife/articles/1669669?useCafeId=false&or=m.search.naver.com&query=%ED%8C%8C%EB%A6%AC%2B&buid=712b5797-94af-4d52-a529-496c8aaa867e&art=ZXh0ZXJuYWwtc2VydmljZS1uYXZlci1ldGMtZm9yLWNvbW1lbnQ.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjYWZlVHlwZSI6IkNBRkVfSUQiLCJhcnRpY2xlSWQiOjE2Njk2NjksImlzc3VlZEF0IjoxNjM4MTg5OTY0NjM1LCJjYWZlSWQiOjE4Nzg2NjA1fQ.DmnNzhR8TKD7b-ve6mjvdaqD8D-_ExrQLMy7P3JttMI",
                  "title": "파리 여행 아직도 기억이생생해요",
                  "contents": "다녀왔던 파리여행 결정하고 가는데 일주일도 안걸렸어요 ^^ 그때는 무슨 생각으로... 여행지였던 파리...여행의 흔적들입니다. 프랑스 파리 샤를드골 공항 입니다. 세계에서 3번째로 큰...",
                  "contentsImgURL": ["/images/view/cafe_img2.png"],
                  "imgNum": 21,
                  "relation": "",
                  "tags": [
                  ],
                  "more_links": [
                  ],
                  "comments": [
                      "어머.. 저기 한인식당 저도 다녀와본 곳 같아서 이렇게 보니 새롭네요🤣🤣 그 때 반찬을 너무 소박하게 주셨던 기억이.... ㅠㅠㅋㅋ 근데 저는 왜 유람선 탈 생각은 못했을까요... ㅜㅜ 다음엔 저도 타봐야겠네요..!!! 너무 로맨틱해~~",
                      "딸 아이가 꼭 가고 싶다던 프랑스를 단둘이는 갈 용기가 안 나서 여권 발급부터 했는데 며칠 뒤 코로나가 터져 못 갔다지요. 제 휴직도 그렇게 끝났고요. 덕분에 구경 잘했어요^^",
                      "우와 타이밍이 적절했네요!! 그리고 처음 가는 곳으로 더군다나 장거리 여행을 일주일만에 결정하고 다녀오셨다니 대단하세요! 그럼 여행계획(가볼 곳, 숙소 등)은 어떻게 하신 거에요? 그 짧은 시간에 어케 준비하셨는지 궁금해요. 팁이 있으신가요? 😀 글구 덕분에 파리사진 잘 봤어요. 저도 너무나 그립고 다시 가고 싶습니다ㅠㅠㅠ",
                      "저 요즘 파리 앓이중이예요.. ㅠㅠ 어제는 에펠탑 기념품에 전구 감아서 요러고 놀았어요... 이거 흑형이 달라붙어서.. 계속 흥정하다가 결국 눈탱이 맞고 산건데.... 남편이랑 끌려갈까봐 ㅋㅋㅋㅋㅋㅋㅋ 신혼여행이었거든요. 남프랑스+파리.. 아~ 제발.. 리허니문 갈수 있게 되길... 🙏 올려주신 사진들로 추억팔이해요~",
                      "파리여행 사진 정말 멋지네요",
                      "정말 부럽네요 가을에 파리~^^"
                  ]
          
              },
              { 
                  "publisherURL": "https://m.cafe.naver.com/firenze",
                  "publisherImgURL": "/images/view/cafe_logo2.jpeg",
                  "publisher": "[유랑]유럽여행의든든한동반자",
                  "date": "1637824020000",
                  "postURL": "https://m.cafe.naver.com/ca-fe/web/cafes/firenze/articles/7103597?useCafeId=false&or=m.search.naver.com&query=%ED%8C%8C%EB%A6%AC%2B&buid=712b5797-94af-4d52-a529-496c8aaa867e&art=ZXh0ZXJuYWwtc2VydmljZS1uYXZlci1ldGMtZm9yLWNvbW1lbnQ.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjYWZlVHlwZSI6IkNBRkVfSUQiLCJhcnRpY2xlSWQiOjcxMDM1OTcsImlzc3VlZEF0IjoxNjM4MTkwMDQzOTAwLCJjYWZlSWQiOjEwMjA5MDYyfQ.EXN2pseC1NlR50-qprt98pw7Z-ucwjSEmfryVUeKPK0",
                  "title": "파리 샤를드골공항",
                  "contents": "무엇보다 제가 파리에서 글을쓰고 있다는게 안믿겨요 ㄲㅑ~~~~ 샤를드골은 한산해서... 참 오랫만에 느껴보는 파리 하...춥네요그래도 행복하네요ㅎ 도움이될만한 정보 있으면...",
                  "contentsImgURL": ["/images/view/cafe_img3.png"],
                  "imgNum": 6,
                  "relation": "",
                  "tags": [
                  ],
                  "more_links": [
                      
                  ],
                  "comments": [
                      "뜬금없는 질문하나 던집니다. 드골공항 착륙시 진행방향 어느쪽에서 에펠탑이 보이나요? 즐건 여행 하시길~~",
                      "와~~~비행기 착륙 사진 너무 이뻐요~저도 12월 출발이라 반갑네요~안전하고 즐거운 여행 다녀오세요~^^"
                  ]
              },
              { 
                  "publisherURL": "https://m.cafe.naver.com/momsolleh",
                  "publisherImgURL": "/images/view/cafe_logo3.jpeg",
                  "publisher": "체크인유럽♬유럽여행:스페인/이탈리아/스위스/터키/러시아여행",
                  "date": "1635489680000",
                  "postURL": "https://m.cafe.naver.com/ca-fe/web/cafes/momsolleh/articles/315113?useCafeId=false&or=m.search.naver.com&query=%ED%8C%8C%EB%A6%AC%2B&buid=712b5797-94af-4d52-a529-496c8aaa867e&art=ZXh0ZXJuYWwtc2VydmljZS1uYXZlci1ldGMtZm9yLWNvbW1lbnQ.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjYWZlVHlwZSI6IkNBRkVfSUQiLCJhcnRpY2xlSWQiOjMxNTExMywiaXNzdWVkQXQiOjE2MzgxOTAyMjg5MTcsImNhZmVJZCI6MjUzMTI2ODR9.TeSKSw4sPB9u0pQ5_TF-Zzz7nTLmfQXzciHQi2U2pQA",
                  "title": "아트 인문학 여행 파리",
                  "contents": "파리로 조만간 박물관 투어 가볼까해요.^^ 이번이 두번째지만, 첫번째 갔을땐 워낙... 이번에는 정말 자유롭게 파리에서 나를 느끼고 내가 좋아하는 것을 할 예정입니다. 이렇게 좋은...",
                  "contentsImgURL":  ["/images/view/cafe_img4.png"],
                  "imgNum": 1,
                  "relation": "",
                  "tags": [
                  ],
                  "more_links": [
                  ],
                  "comments": [
                      "재미있겠어요~ 알고보는 파리는 다르게 보일것 같아요~",
                      "언제가시나요?..저두겨울예정인데 첨이라 두려워서 패키지는 싫지만 고민중이예요",
                      "여행 횟수가 늘면서 점점 더 깊게 좋아하는걸 찾아하는 여행으로 바뀌눈것 같아여. 많이 보고 느끼고 오세요. ^^"
                  ]
              },
              { 
                  "publisherURL": "https://m.cafe.naver.com/hotellife",
                  "publisherImgURL": "/images/view/cafe_logo1.jpeg",
                  "publisher": "[스사사] 스마트컨슈머들의 호텔/항공/VIP카드/여행 이야기",
                  "date": "1637012600000",
                  "postURL": "https://m.cafe.naver.com/ca-fe/web/cafes/hotellife/articles/1670144?useCafeId=false&or=m.search.naver.com&query=%ED%8C%8C%EB%A6%AC%2B&buid=712b5797-94af-4d52-a529-496c8aaa867e&art=ZXh0ZXJuYWwtc2VydmljZS1uYXZlci1ldGMtZm9yLWNvbW1lbnQ.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjYWZlVHlwZSI6IkNBRkVfSUQiLCJhcnRpY2xlSWQiOjE2NzAxNDQsImlzc3VlZEF0IjoxNjM4MTkwNDkwMTEzLCJjYWZlSWQiOjE4Nzg2NjA1fQ.kxSU4-4aHbGZARnP_R2GSchg6No3hSz4pCjD-7PQq6Y",
                  "title": "파리 211120 리츠파리",
                  "contents": "댄공 발권하여 파리로 왔네요. PCR없이 올 수 있는 멋진 곳 내일은 비가 온다고 합니다.... 리츠 파리 지내시는 분들 fast track 및 쇼퍼 서비스 이용하시면 엄청 빠르고 편리합니다....",
                  "contentsImgURL":[ "/images/view/cafe_img5.png"],
                  "imgNum": 7,
                  "relation": "",
                  "tags": [
                  ],
                  "more_links": [
                  ],
                  "comments": [
                      "어디 호텔이 저리 멋진가요?",
                      "바롱 로칠드!언제 마셔도 좋은 삼 이지요!",
                      "사진예뻐요 ㅎㅎ 저 다음주에 파리 가는데 좌석 불켜지말라는게 혹시 택시 좌석 인가요?? 너무 무섭네요"
                  ]
              }
          ],
          "view_weather_posts": [
              { 
                  "publisherURL": "https://m.cafe.naver.com/hotellife",
                  "publisherImgURL": "/images/view/blog_logo6.jpeg",
                  "publisher": "올리비아",
                  "date": "1637633760000",
                  "postURL": "https://m.blog.naver.com/clothes1213/221719883266",
                  "title": "유럽 유심 보다폰 후기 & 파리 날씨 12월 1월 옷차림?",
                  "contents": "우버 타고 가면서 예뻐서 찍어봤던 파리 시내 영상! 지금 다시보니 추억돋으면서도 날씨가 참.. 글루미하네요 ㅎㅎㅎ 12월, 1월 파리 날씨는 어떨지 제가 한번 찾아봤는데요, 위와같이...",
                  "contentsImgURL": ["/images/view/w_img1_1.png","/images/view/w_img1_2.png","/images/view/w_img1_3.png",
                      "/images/view/w_img1_4.png","/images/view/w_img1_5.png","/images/view/w_img1_6.png","/images/view/w_img1_7.png"
                  ],
                  "imgNum": 7,
                  "relation": "",
                  "tags": [
                  ],
                  "more_links": [
                      {"link_name": "파리 날씨 2월, 3월 & 여행일정 꿀팁! (ft. 몽마르뜨)(#파리날씨 #파리여행일정)",
                      "link_url": "https://m.blog.naver.com/clothes1213/221812163491"
                      }
                  ],
                  "comments": [ 
                  ],
                  "gray_link": {"gray_tag":"파리여행", "link":"https://in.naver.com/clothes1213/challenge/keyword/111162005745792#253449877933792"}
              },
              { 
                  "publisherURL": "https://m.blog.naver.com/amy201427",
                  "publisherImgURL": "/images/view/blog_logo2.jpeg",
                  "publisher": "Chez Amy (·ㅅ·)♥",
                  "date": "1637240340000",
                  "postURL": "https://m.blog.naver.com/amy201427/222539755036",
                  "title": "10월 프랑스 파리 날씨 위드코로나 일상 :)",
                  "contents": "모르겠음 파리에서 꾸준히 하는 쇼핑이 바로 영양제인데 한국보다 가격이 싸거나 하진 않지만 (음... 솔가는 더 싼 듯?) 워낙 효과가 좋아서 추워지는 날씨에 이것저것 나도 챙겨먹고...",
                  "contentsImgURL": ["/images/view/w_img2.png"],
                  "imgNum": 47,
                  "relation": "",
                  "tags": [
                      {"tag_name": "위드코로나",
                      "tagURL":"https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&query=%EC%9C%84%EB%93%9C%EC%BD%94%EB%A1%9C%EB%82%98"
                      },
                      {"tag_name": "프랑스코로나",
                      "tagURL":"https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&query=%ED%94%84%EB%9E%91%EC%8A%A4%EC%BD%94%EB%A1%9C%EB%82%98"
                      },
                      {"tag_name": "파리10월날씨",
                      "tagURL":"https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&query=%ED%8C%8C%EB%A6%AC10%EC%9B%94%EB%82%A0%EC%94%A8"
                      },
                      {"tag_name": "파리코로나",
                      "tagURL":"https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&query=%ED%8C%8C%EB%A6%AC%EC%BD%94%EB%A1%9C%EB%82%98"
                      }
                  ],
                  "more_links": [
                      {"link_name":"파리 일상 feat.10월 날씨(#파리일상 #파리날씨)",
                      "link_url": "https://m.blog.naver.com/amy201427/222531330976"},
                      {"link_name":"프랑스 파리 근황 (+날씨, 코로나 보건 패스 Pass sanitaire, QR코드)(#파리날씨 #코로나보건패스)",
                      "link_url": "https://m.blog.naver.com/amy201427/2224813709236"}
                  ],
                  "comments": [
                  ],
                  "gray_link": ""
          
              },
              { 
                  "publisherURL": "https://m.cafe.naver.com/firenze",
                  "publisherImgURL": "/images/view/cafe_logo2.jpeg",
                  "publisher": "[유랑]유럽여행의든든한동반자",
                  "date": "1637824020000",
                  "postURL": "https://m.cafe.naver.com/ca-fe/web/cafes/firenze/articles/7075730?useCafeId=false&or=m.search.naver.com&query=%ED%8C%8C%EB%A6%AC%2B&buid=712b5797-94af-4d52-a529-496c8aaa867e&art=ZXh0ZXJuYWwtc2VydmljZS1uYXZlci1ldGMtZm9yLWNvbW1lbnQ.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjYWZlVHlwZSI6IkNBRkVfSUQiLCJhcnRpY2xlSWQiOjcwNzU3MzAsImlzc3VlZEF0IjoxNjM4NDYzNDQyOTY3LCJjYWZlSWQiOjEwMjA5MDYyfQ.5gI2HNclz2LJ4KJhrN4p_Z2pQFIGEIt2yuuanSRy86Y",
                  "title": "11월 첫째주 런던, 둘째주 파리 날씨 괜찮을까요? + 바보같은질문",
                  "contents": "11월 첫째주 둘째주 파리/런던 날씨 우리나라 수능볼 때 겨울 날씨만큼 매우 추울까요? 11월 런던 날씨예보 11월 파리 날씨예보 그리고 바보같은 질문이지만 유럽 여행을 여러번...",
                  "contentsImgURL": ["/images/view/w_img3.png"],
                  "imgNum": 2,
                  "relation": "",
                  "tags": [
                  ],
                  "more_links": [
                      {"link_name":"11월 첫째 주 파리 날씨에 맞는 옷ㅠㅠ",
                      "link_url": "https://m.cafe.naver.com/ca-fe/web/cafes/firenze/articles/7077097?useCafeId=false&or=m.search.naver.com&query=%ED%8C%8C%EB%A6%AC%2B&buid=712b5797-94af-4d52-a529-496c8aaa867e&art=ZXh0ZXJuYWwtc2VydmljZS1uYXZlci1ldGMtZm9yLWNvbW1lbnQ.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjYWZlVHlwZSI6IkNBRkVfSUQiLCJhcnRpY2xlSWQiOjcwNzcwOTcsImlzc3VlZEF0IjoxNjM4NDYyMjM3MjAzLCJjYWZlSWQiOjEwMjA5MDYyfQ.METAuLRWL0tdIQpyzi9pao6cCcaFEU--6txL_sddyLo"},
                      {"link_name":"파리 날씨 의문점 있어요^^",
                      "link_url": "https://m.cafe.naver.com/ca-fe/web/cafes/firenze/articles/7094338?useCafeId=false&or=m.search.naver.com&query=%ED%8C%8C%EB%A6%AC%2B&buid=712b5797-94af-4d52-a529-496c8aaa867e&art=ZXh0ZXJuYWwtc2VydmljZS1uYXZlci1ldGMtZm9yLWNvbW1lbnQ.eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjYWZlVHlwZSI6IkNBRkVfSUQiLCJhcnRpY2xlSWQiOjcwOTQzMzgsImlzc3VlZEF0IjoxNjM4NDYyMjQ4MzI1LCJjYWZlSWQiOjEwMjA5MDYyfQ.0sK_GYjUoCKOi1UWIv0Zje-a8A1QLrRrqmjzBEvavWg"}
                  ],
                  "comments": [
                      "비맞으면서 챔스봤는데 그역시 추억입니다 날씨가 막지 못합니다",
                      "우리나라처럼 춥지 않습니다. 제가 가본 경험으로는요",
                      "11월부터 우기 시작이었지만 장마처럼 죽죽 오기도 하고 비오는대 해뜨기도 하고 말짱하기도 하고~ 이왕 가는거 쏘니도 보고 오면 좋지 않을까요? ㅎㅎ"
                  ],
                  "gray_link": ""
              },
              { 
                  "publisherURL": "https://in.naver.com/hug387",
                  "publisherImgURL": "/images/view/blog_logo1.jpeg",
                  "publisher": "유지니",
                  "date": "1635489680000",
                  "postURL": "https://m.blog.naver.com/hug387/222059742672",
                  "title": "프랑스 파리 날씨 생각나네, 에펠탑 보러 여행 갈 수 있을까",
                  "contents": "날씨 좋았던 프랑스 스위스 사진 풀어보며 달래보는 오늘, 내 동심 무럭무럭 커졌던 파리 디즈니랜드, 잘있니?ㅠㅠ 내가 1월에 프랑스 파리 갔을때도 날씨 내내 흐리고 비오고 추워서...",
                  "contentsImgURL":  ["/images/view/w_img4.png"],
                  "imgNum": 35,
                  "relation": "",
                  "tags": [
                  ],
                  "more_links": [
                      {"link_name":"프랑스 파리 날씨 실시간! 겨울이라 춥고 우박떨어짐 2월 옷차림 조심하세욤(#파리 #날씨)",
                      "link_url": "https://m.blog.naver.com/hug387/221790187410"}
                  ],
                  "comments": [
                  ],
                  "gray_link": {"gray_tag":"파리여행", "link":"https://in.naver.com/hug387/challenge/keyword/111162005745792"}
              },
              { 
                  "publisherURL": "https://m.cafe.naver.com/hotellife",
                  "publisherImgURL": "/images/view/blog_logo7.jpeg",
                  "publisher": "민트콩의유럽",
                  "date": "1637012600000",
                  "postURL": "https://m.blog.naver.com/hoti7746/221766919550",
                  "title": "4월 유럽여행 추천/ 날씨가 다했다! 파리여행 만족도 200% 벚꽃명소 알려드림♡",
                  "contents": "파리 날씨! 지난 4월 파리여행 날씨 입니다 ! 기온이 약간 들쭉 날쭉? 하지만 4월 낮 최고기온은 25도~ 그리고 최저 기온은 낮 10도 입니다~ 평균 12~15도 정도 날씨~! 맑은 날은 한없이...",
                  "contentsImgURL":[ "/images/view/w_img5.png"],
                  "imgNum": 26,
                  "relation": "",
                  "tags": [
                      {"tag_name": "파리",
                          "tagURL":"https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&query=%ED%8C%8C%EB%A6%AC"
                          },
                          {"tag_name": "파리여행",
                          "tagURL":"https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&query=%ED%8C%8C%EB%A6%AC%EC%97%AC%ED%96%89"
                          },
                          {"tag_name": "Paris",
                          "tagURL":"https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&query=Paris"
                          },
                          {"tag_name": "versailles",
                          "tagURL":"https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&query=versailles"
                          },
                          {"tag_name": "바토무슈",
                          "tagURL":"https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&query=%EB%B0%94%ED%86%A0%EB%AC%B4%EC%8A%88"
                          },
                          {"tag_name": "에펠탑",
                          "tagURL":"https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&query=%EC%97%90%ED%8E%A0%ED%83%91"
                          },
                          {"tag_name": "Eiffeltower",
                          "tagURL":"https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&query=Eiffeltower"
                          },
                          {"tag_name": "eurotunnel",
                          "tagURL":"https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&query=eurotunnel"
                          },
                          {"tag_name": "유로터널",
                          "tagURL":"https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&query=%EC%9C%A0%EB%A1%9C%ED%84%B0%EB%84%90"
                          },
                          {"tag_name": "차타고파리가기",
                          "tagURL":"https://m.search.naver.com/search.naver?where=m_view&sm=mtb_viw.all&query=%EC%B0%A8%ED%83%80%EA%B3%A0%ED%8C%8C%EB%A6%AC%EA%B0%80%EA%B8%B0"
                          }
                  ],
                  "more_links": [
                      {"link_name":"유럽배낭여행/ 어머나?안덥? 파리8월날씨 &옷차림(ft.에펠뷰 파리맛집,미슐랭)(#파리맛집 #유럽배낭여행)",
                      "link_url": "https://m.blog.naver.com/hoti7746/221826209737"},
                      {"link_name":"9월 유럽여행 / 파리 날씨! 선선한 가을, 감성충 취향저격~(#9월유럽여행 #9월파리날씨)",
                      "link_url": "https://m.blog.naver.com/hoti7746/221512275402"}
                  ],
                  "comments": [
                  ],
                  "gray_link": ""
              }
          ],
          "view_more": "https://m.search.naver.com/search.naver?where=m_view&sm=mtb_nrm&query=%ED%8C%8C%EB%A6%AC&mode=normal&nso=" 
          }
  const tree = renderer.create(<View props={view}/>).toJSON()
  expect(tree).toMatchSnapshot()
})