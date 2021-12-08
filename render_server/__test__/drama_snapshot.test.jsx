import React from 'react'
import renderer from 'react-test-renderer'
import Drama from '../src/components/Drama'

it('renders homepage unchanged', () => {
    const drama = {
      "header": {
          "title": "술꾼도시여자들",
          "href": "https://m.tving.com/app/theme.tving?pocCode=POCD0600&themeSeq=109682&utm_source=portal&utm_medium=search&utm_campaign=WorkLaterDrinkNow&utm_content=eventpage",
          "category": "웹드라마",
          "tablist": ["전체", "기본정보", "등장인물", "공식영상", "함께 볼만한 웹드라마"],
          "categoryURL": "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=blFB&x_csa=%7B%22pkid%22%3A%22356%22%7D&qvt=0&query=%EC%9B%B9%EB%93%9C%EB%9D%BC%EB%A7%88",
          "tablisthref": ["https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=blZH&x_csa=%7B%22pkid%22%3A648%7D&pkid=648&os=19371944&x_nqx=%7B%22theme%22%3A%22culturalassets%22%2C%22pkid%22%3A%22648%22%2C%22os%22%3A%2219371944%22%7D&qvt=0&query=%EA%B2%BD%EC%A3%BC%20%EB%B6%88%EA%B5%AD%EC%82%AC", "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=blZH&x_csa=%7B%22pkid%22%3A648%7D&pkid=648&os=19371944&x_nqx=%7B%22theme%22%3A%22culturalassets%22%2C%22pkid%22%3A%22648%22%2C%22os%22%3A%2219371944%22%7D&qvt=0&query=%EA%B2%BD%EC%A3%BC%20%EB%B6%88%EA%B5%AD%EC%82%AC%20%EA%B8%B0%EB%B3%B8%EC%A0%95%EB%B3%B4", "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=blZH&x_csa=%7B%22pkid%22%3A648%7D&pkid=648&os=19371944&x_nqx=%7B%22theme%22%3A%22culturalassets%22%2C%22pkid%22%3A%22648%22%2C%22os%22%3A%2219371944%22%7D&qvt=0&query=%EA%B2%BD%EC%A3%BC%20%EB%B6%88%EA%B5%AD%EC%82%AC%20%ED%8F%AC%ED%86%A0", "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=blZH&x_csa=%7B%22pkid%22%3A648%7D&pkid=648&os=19371944&x_nqx=%7B%22theme%22%3A%22culturalassets%22%2C%22pkid%22%3A%22648%22%2C%22os%22%3A%2219371944%22%7D&qvt=0&query=%EA%B2%BD%EC%A3%BC%20%EB%B6%88%EA%B5%AD%EC%82%AC%20%EC%A3%BC%EB%B3%80%20%EB%AC%B8%ED%99%94%EC%9E%AC", "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=blZH&x_csa=%7B%22pkid%22%3A648%7D&pkid=648&os=19371944&x_nqx=%7B%22theme%22%3A%22culturalassets%22%2C%22pkid%22%3A%22648%22%2C%22os%22%3A%2219371944%22%7D&qvt=0&query=%EA%B2%BD%EC%A3%BC%20%EB%B6%88%EA%B5%AD%EC%82%AC%20%ED%95%A8%EA%BB%98%20%EC%B0%BE%EC%9D%80%20%EB%AC%B8%ED%99%94%EC%9E%AC"]
      },
      "videos": {
          "showMore": "https://tv.naver.com/v/22495407/list/739104",
          "videoData": [
              {
                  "title": "[술꾼도시여자들] 🍺술도녀 보내기 아쉬운 분들을 위한 역대급 분량 하드털이 메이킹",
                  "publisher": "네이버TV",
                  "viewCount": "4,534",
                  "date": "2021.11.30.",
                  "videoURL": "https://tv.naver.com/v/23826103",
                  "videoLength": "24:36",
                  "thumbImg": "https://search.pstatic.net/common?type=f&size=327x180&quality=75&direct=true&src=https%3A%2F%2Fphinf.pstatic.net%2Ftvcast%2F20211130_183%2FagfL7_1638280758457AMaev_JPEG%2F1638280716455.jpg"
              },
              {
                  "title": "[술꾼도시여자들] 이선빈X한선화에게 사랑받는(?) 정은지💓 지구방위대씬 비하인드",
                  "publisher": "네이버TV",
                  "viewCount": "2,066",
                  "date": "2021.11.30.",
                  "videoURL": "https://tv.naver.com/v/23826072",
                  "videoLength": "12:59",
                  "thumbImg": "https://search.pstatic.net/common?type=f&size=327x180&quality=75&direct=true&src=https%3A%2F%2Fphinf.pstatic.net%2Ftvcast%2F20211130_262%2F3Hciy_1638280544584Oo8ki_JPEG%2F1638280476322.jpg"
              },
              {
                  "title": "[술꾼도시여자들] 이선빈X최시원 베드씬부터 한선화의 데이트, 정은지X동생의 꽁냥 모먼트",
                  "publisher": "네이버TV",
                  "viewCount": "16,894",
                  "date": "2021.11.22.",
                  "videoURL": "https://tv.naver.com/v/23677808",
                  "videoLength": "14:10",
                  "thumbImg": "https://search.pstatic.net/common?type=f&size=327x180&quality=75&direct=true&src=https%3A%2F%2Fphinf.pstatic.net%2Ftvcast%2F20211122_75%2Fk3TeH_1637590335132ofURX_JPEG%2F1637590244966.jpg"
              },
              {
                  "title": "[술꾼도시여자들] 술도녀에게 닥친 인생 최대 시련ㅣ11화 예고",
                  "publisher": "네이버TV",
                  "viewCount": "22,318",
                  "date": "2021.11.22.",
                  "videoURL": "https://tv.naver.com/v/23677888",
                  "videoLength": "00:56",
                  "thumbImg": "https://search.pstatic.net/common?type=f&size=327x180&quality=75&direct=true&src=https%3A%2F%2Fphinf.pstatic.net%2Ftvcast%2F20211122_19%2FAMixR_1637590566041ADSeJ_JPEG%2F1637590533723.jpg"
              },
              {
                  "title": "[술꾼도시여자들] 정은지, 이선빈 얼굴에 냉수 뿌린 이유는? 열연 돋보인 장례식씬 메이킹",
                  "publisher": "네이버TV",
                  "viewCount": "4,220",
                  "date": "2021.11.22.",
                  "videoURL": "https://tv.naver.com/v/23677736",
                  "videoLength": "10:15",
                  "thumbImg": "https://search.pstatic.net/common?type=f&size=327x180&quality=75&direct=true&src=https%3A%2F%2Fphinf.pstatic.net%2Ftvcast%2F20211122_296%2FH9CpO_1637590120907Iy20U_JPEG%2F1637590004889.jpg"
              },
              {
                  "title": "[술꾼도시여자들] 수험생분들을 위한 술도녀팀의 응원💓 수능대박나고 내년에 술 먹자!",
                  "publisher": "네이버TV",
                  "viewCount": "18,626",
                  "date": "2021.11.15.",
                  "videoURL": "https://tv.naver.com/v/23538553",
                  "videoLength": "00:56",
                  "thumbImg": "https://search.pstatic.net/common?type=f&size=327x180&quality=75&direct=true&src=https%3A%2F%2Fphinf.pstatic.net%2Ftvcast%2F20211115_49%2FgZblp_1636968668450d8h5q_JPEG%2F1636968588451.jpg"
              },
              {
                  "title": "[술꾼도시여자들]갑작스러운 이선빈 아빠의 죽음, 곁을 지키는 한선화와 정은지ㅣ9화 예고",
                  "publisher": "네이버TV",
                  "viewCount": "72,356",
                  "date": "2021.11.15.",
                  "videoURL": "https://tv.naver.com/v/23538482",
                  "videoLength": "00:33",
                  "thumbImg": "https://search.pstatic.net/common?type=f&size=327x180&quality=75&direct=true&src=https%3A%2F%2Fphinf.pstatic.net%2Ftvcast%2F20211115_225%2F2J4T2_1636968444441Q9NJz_JPEG%2F1636968387611.jpg"
              },
              {
                  "title": "[술꾼도시여자들] '가끔 넘어져도 괜찮아!' 정은지의 청춘을 위한 인생 한잔ㅣ스페셜MV",
                  "publisher": "네이버TV",
                  "viewCount": "18,430",
                  "date": "2021.11.15.",
                  "videoURL": "https://tv.naver.com/v/23538046",
                  "videoLength": "03:16",
                  "thumbImg": "https://search.pstatic.net/common?type=f&size=327x180&quality=75&direct=true&src=https%3A%2F%2Fphinf.pstatic.net%2Ftvcast%2F20211115_176%2F5qFdc_16369672438573DSkl_JPEG%2F1636967136238.jpg"
              }
          ]
      }
  }
  const tree = renderer.create(<Drama props={drama}/>).toJSON()
  expect(tree).toMatchSnapshot()
})