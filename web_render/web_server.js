import express from 'express';
const axios = require("axios").default

const dummydata = {
  "keywords": [
    {
      "keyword": "불국사",
      "view": [ "basicInfo", "photo", "news" ],
      "basicInfo": {
        "지정종목": "사적",
        "지정번호": "제502호" 
      },
      "photo": {
        "tags": [
          {
            "tag_name": "프랑스",
            "tag_image_url": "/images/photos/photos_tag_images/paris_tag1.png",
            "tagURL": "https://m.search.naver.com/search.naver?where=m_image&mode=imgonly&nso=so%3Ar%2Ca%3Aall%2Cp%3Aall&sm=mtb_imt&query=%ED%94%84%EB%9E%91%EC%8A%A4%20%ED%8C%8C%EB%A6%AC&pq=%ED%8C%8C%EB%A6%AC"
          },
          {
            "tag_name": "국기",
            "tag_image_url": "/images/photos/photos_tag_images/paris_tag2.png",
            "tagURL" : "https://m.search.naver.com/search.naver?where=m_image&mode=imgonly&nso=so%3Ar%2Ca%3Aall%2Cp%3Aall&sm=mtb_imt&query=%ED%8C%8C%EB%A6%AC%20%EA%B5%AD%EA%B8%B0&pq=%ED%8C%8C%EB%A6%AC"
          },
          {
            "tag_name": "지도",
            "tag_image_url": "/images/photos/photos_tag_images/paris_tag3.png",
            "tagURL": "https://m.search.naver.com/search.naver?where=m_image&mode=imgonly&nso=so%3Ar%2Ca%3Aall%2Cp%3Aall&sm=mtb_imt&query=%ED%8C%8C%EB%A6%AC%20%EC%A7%80%EB%8F%84&pq=%ED%8C%8C%EB%A6%AC"
          },
          {
            "tag_name": "생제르맹",
            "tag_image_url": "/images/photos/photos_tag_images/paris_tag4.png",
            "tagURL": "https://m.search.naver.com/search.naver?where=m_image&mode=imgonly&nso=so%3Ar%2Ca%3Aall%2Cp%3Aall&sm=mtb_imt&query=%ED%8C%8C%EB%A6%AC%20%EC%83%9D%EC%A0%9C%EB%A5%B4%EB%A7%B9&pq=%ED%8C%8C%EB%A6%AC"
          },
          {
            "tag_name": "에펠탑",
            "tag_image_url": "/images/photos/photos_tag_images/paris_tag5.png",
            "tagURL": "https://m.search.naver.com/search.naver?where=m_image&mode=imgonly&nso=so%3Ar%2Ca%3Aall%2Cp%3Aall&sm=mtb_imt&query=%ED%8C%8C%EB%A6%AC%20%EC%97%90%ED%8E%A0%ED%83%91&pq=%ED%8C%8C%EB%A6%AC"
          },
          {
            "tag_name": "야경",
            "tag_image_url": "/images/photos/photos_tag_images/paris_tag6.png",
            "tagURL": "https://m.search.naver.com/search.naver?where=m_image&mode=imgonly&nso=so%3Ar%2Ca%3Aall%2Cp%3Aall&sm=mtb_imt&query=%ED%8C%8C%EB%A6%AC%20%EC%95%BC%EA%B2%BD&pq=%ED%8C%8C%EB%A6%AC"
          }
        ],
        "images": [
          {
            "img_path": "/images/photos/photos_images/paris_image1.jpeg",
            "img_url": "https://m.search.naver.com/search.naver?where=m_image&mode=imgonly&nso=so%3Ar%2Ca%3Aall%2Cp%3Aall&sm=mtb_imt&query=%ED%8C%8C%EB%A6%AC%20%EC%97%90%ED%8E%A0%ED%83%91&pq=%ED%8C%8C%EB%A6%AC"
          },
          {
            "img_path": "/images/photos/photos_images/paris_image2.jpeg",
            "img_url": "https://m.search.naver.com/search.naver?where=m_image&mode=imgonly&nso=so%3Ar%2Ca%3Aall%2Cp%3Aall&sm=mtb_imt&query=%ED%8C%8C%EB%A6%AC%20%EC%97%90%ED%8E%A0%ED%83%91&pq=%ED%8C%8C%EB%A6%AC"
          },
          {
            "img_path": "/images/photos/photos_images/paris_image3.jpeg",
            "img_url": "https://m.search.naver.com/search.naver?where=m_image&mode=imgonly&nso=so%3Ar%2Ca%3Aall%2Cp%3Aall&sm=mtb_imt&query=%ED%8C%8C%EB%A6%AC%20%EC%97%90%ED%8E%A0%ED%83%91&pq=%ED%8C%8C%EB%A6%AC"
          },
          {
            "img_path": "/images/photos/photos_images/paris_image3.jpeg",
            "img_url": "https://m.search.naver.com/search.naver?where=m_image&mode=imgonly&nso=so%3Ar%2Ca%3Aall%2Cp%3Aall&sm=mtb_imt&query=%ED%8C%8C%EB%A6%AC%20%EC%97%90%ED%8E%A0%ED%83%91&pq=%ED%8C%8C%EB%A6%AC"
          },
          {
            "img_path": "/images/photos/photos_images/paris_image5.jpeg",
            "img_url": "https://m.search.naver.com/search.naver?where=m_image&mode=imgonly&nso=so%3Ar%2Ca%3Aall%2Cp%3Aall&sm=mtb_imt&query=%ED%8C%8C%EB%A6%AC%20%EC%97%90%ED%8E%A0%ED%83%91&pq=%ED%8C%8C%EB%A6%AC"
          },
          {
            "img_path": "/images/photos/photos_images/paris_image6.jpeg",
            "img_url": "https://m.search.naver.com/search.naver?where=m_image&mode=imgonly&nso=so%3Ar%2Ca%3Aall%2Cp%3Aall&sm=mtb_imt&query=%ED%8C%8C%EB%A6%AC%20%EC%97%90%ED%8E%A0%ED%83%91&pq=%ED%8C%8C%EB%A6%AC"
          },
          {
            "img_path": "/images/photos/photos_images/paris_image7.jpeg",
            "img_url": "https://m.search.naver.com/search.naver?where=m_image&mode=imgonly&nso=so%3Ar%2Ca%3Aall%2Cp%3Aall&sm=mtb_imt&query=%ED%8C%8C%EB%A6%AC%20%EC%97%90%ED%8E%A0%ED%83%91&pq=%ED%8C%8C%EB%A6%AC"
          },
          {
            "img_path": "/images/photos/photos_images/paris_image8.jpeg",
            "img_url": "https://m.search.naver.com/search.naver?where=m_image&mode=imgonly&nso=so%3Ar%2Ca%3Aall%2Cp%3Aall&sm=mtb_imt&query=%ED%8C%8C%EB%A6%AC%20%EC%97%90%ED%8E%A0%ED%83%91&pq=%ED%8C%8C%EB%A6%AC"
          },
          {
            "img_path": "/images/photos/photos_images/paris_image8.jpeg",
            "img_url": "https://m.search.naver.com/search.naver?where=m_image&mode=imgonly&nso=so%3Ar%2Ca%3Aall%2Cp%3Aall&sm=mtb_imt&query=%ED%8C%8C%EB%A6%AC%20%EC%97%90%ED%8E%A0%ED%83%91&pq=%ED%8C%8C%EB%A6%AC"
          }
        ],
        "image_more": "https://m.search.naver.com/search.naver?where=m_image&mode=imgonly&nso=so%3Ar%2Ca%3Aall%2Cp%3Aall&sm=mtb_nmr&query=%ED%8C%8C%EB%A6%AC" 
      },
      "news": {
        "news_posts": [
          { 
            "publisherURL": "http://www.btnnews.tv",
            "publisherImgURL": "/images/news/news_publisher_logos/BTN.jpg",
            "publisher": "BTN불교TV",
            "date": "7시간 전",
            "postURL": "http://m.btnnews.tv/news/articleView.html?idxno=68717",
            "title": "불국사, 신라불교 최초 공인한 법흥왕 기려..다례재 봉행",
            "contents": "신라시대 불교를 공인한 법흥왕을 기리는 추모 다례재가 오늘 불국사 신도회 주최로 경주 코모도 호텔 잔디광장에서 봉행됐습니다. 이영숙 / 불국사 신도회장 (신라불교를 최초 공인한 임금으로서 우리들은 그 동안 그 크신 공헌을 까맣게 잊고 살아오지 않았나 반성하며...",
            "contentsImgURL": "/images/news/news_images/BTN_1.jpg",
            "relation": "0.9"
          },
          { 
            "publisherURL": "https://media.naver.com/press/009",
            "publisherImgURL": "/images/news/news_publisher_logos/BTN.jpg",
            "publisher": "매일경제",
            "date": "2일 전",
            "postURL": "https://n.news.naver.com/mnews/article/009/0004873767?sid=103",
            "title": "세계 1위 여행출판사 '경주' 콕 찍었다 코로나 풀리면 꼭 가라",
            "contents": "불국사와 석굴암 등 주요 유적지에 대해서도 언급하며 경주를 충분히 즐기기 위해서는 며칠 간 머물러야 한다고 이 책은 조언했다. 론리 플래닛은 이번에 독일의 '환경수도' 프라이부르크(3위), 미국 남부 중심도시 애틀랜타(4위), 멕시코 유카탄주 최대도시 메리다(8위), 유럽 근대 르네상스의...",
            "contentsImgURL": "",
            "relation": "0.8"
          }
        ],
        "news_more": "https://m.search.naver.com/search.naver?where=m_image&mode=imgonly&nso=so%3Ar%2Ca%3Aall%2Cp%3Aall&sm=mtb_nmr&query=%ED%8C%8C%EB%A6%AC" 
      }
    },
    {
      "keyword": "파리",
      "view": [ "photo", "news", "wiki" ],
      "photo": {
        "tags": [
          {
            "tag_name": "프랑스",
            "tag_image_url": "/images/photos/photos_tag_images/paris_tag1.png",
            "tagURL": "https://m.search.naver.com/search.naver?where=m_image&mode=imgonly&nso=so%3Ar%2Ca%3Aall%2Cp%3Aall&sm=mtb_imt&query=%ED%94%84%EB%9E%91%EC%8A%A4%20%ED%8C%8C%EB%A6%AC&pq=%ED%8C%8C%EB%A6%AC"
          },
          {
            "tag_name": "국기",
            "tag_image_url": "/images/photos/photos_tag_images/paris_tag2.png",
            "tagURL" : "https://m.search.naver.com/search.naver?where=m_image&mode=imgonly&nso=so%3Ar%2Ca%3Aall%2Cp%3Aall&sm=mtb_imt&query=%ED%8C%8C%EB%A6%AC%20%EA%B5%AD%EA%B8%B0&pq=%ED%8C%8C%EB%A6%AC"
          },
          {
            "tag_name": "지도",
            "tag_image_url": "/images/photos/photos_tag_images/paris_tag3.png",
            "tagURL": "https://m.search.naver.com/search.naver?where=m_image&mode=imgonly&nso=so%3Ar%2Ca%3Aall%2Cp%3Aall&sm=mtb_imt&query=%ED%8C%8C%EB%A6%AC%20%EC%A7%80%EB%8F%84&pq=%ED%8C%8C%EB%A6%AC"
          },
          {
            "tag_name": "생제르맹",
            "tag_image_url": "/images/photos/photos_tag_images/paris_tag4.png",
            "tagURL": "https://m.search.naver.com/search.naver?where=m_image&mode=imgonly&nso=so%3Ar%2Ca%3Aall%2Cp%3Aall&sm=mtb_imt&query=%ED%8C%8C%EB%A6%AC%20%EC%83%9D%EC%A0%9C%EB%A5%B4%EB%A7%B9&pq=%ED%8C%8C%EB%A6%AC"
          },
          {
            "tag_name": "에펠탑",
            "tag_image_url": "/images/photos/photos_tag_images/paris_tag5.png",
            "tagURL": "https://m.search.naver.com/search.naver?where=m_image&mode=imgonly&nso=so%3Ar%2Ca%3Aall%2Cp%3Aall&sm=mtb_imt&query=%ED%8C%8C%EB%A6%AC%20%EC%97%90%ED%8E%A0%ED%83%91&pq=%ED%8C%8C%EB%A6%AC"
          },
          {
            "tag_name": "야경",
            "tag_image_url": "/images/photos/photos_tag_images/paris_tag6.png",
            "tagURL": "https://m.search.naver.com/search.naver?where=m_image&mode=imgonly&nso=so%3Ar%2Ca%3Aall%2Cp%3Aall&sm=mtb_imt&query=%ED%8C%8C%EB%A6%AC%20%EC%95%BC%EA%B2%BD&pq=%ED%8C%8C%EB%A6%AC"
          }
        ],
        "images": [
          {
            "img_path": "/images/photos/photos_images/paris_image1.jpeg",
            "img_url": "https://m.search.naver.com/search.naver?where=m_image&mode=imgonly&nso=so%3Ar%2Ca%3Aall%2Cp%3Aall&sm=mtb_imt&query=%ED%8C%8C%EB%A6%AC%20%EC%97%90%ED%8E%A0%ED%83%91&pq=%ED%8C%8C%EB%A6%AC"
          },
          {
            "img_path": "/images/photos/photos_images/paris_image2.jpeg",
            "img_url": "https://m.search.naver.com/search.naver?where=m_image&mode=imgonly&nso=so%3Ar%2Ca%3Aall%2Cp%3Aall&sm=mtb_imt&query=%ED%8C%8C%EB%A6%AC%20%EC%97%90%ED%8E%A0%ED%83%91&pq=%ED%8C%8C%EB%A6%AC"
          },
          {
            "img_path": "/images/photos/photos_images/paris_image3.jpeg",
            "img_url": "https://m.search.naver.com/search.naver?where=m_image&mode=imgonly&nso=so%3Ar%2Ca%3Aall%2Cp%3Aall&sm=mtb_imt&query=%ED%8C%8C%EB%A6%AC%20%EC%97%90%ED%8E%A0%ED%83%91&pq=%ED%8C%8C%EB%A6%AC"
          },
          {
            "img_path": "/images/photos/photos_images/paris_image3.jpeg",
            "img_url": "https://m.search.naver.com/search.naver?where=m_image&mode=imgonly&nso=so%3Ar%2Ca%3Aall%2Cp%3Aall&sm=mtb_imt&query=%ED%8C%8C%EB%A6%AC%20%EC%97%90%ED%8E%A0%ED%83%91&pq=%ED%8C%8C%EB%A6%AC"
          },
          {
            "img_path": "/images/photos/photos_images/paris_image5.jpeg",
            "img_url": "https://m.search.naver.com/search.naver?where=m_image&mode=imgonly&nso=so%3Ar%2Ca%3Aall%2Cp%3Aall&sm=mtb_imt&query=%ED%8C%8C%EB%A6%AC%20%EC%97%90%ED%8E%A0%ED%83%91&pq=%ED%8C%8C%EB%A6%AC"
          },
          {
            "img_path": "/images/photos/photos_images/paris_image6.jpeg",
            "img_url": "https://m.search.naver.com/search.naver?where=m_image&mode=imgonly&nso=so%3Ar%2Ca%3Aall%2Cp%3Aall&sm=mtb_imt&query=%ED%8C%8C%EB%A6%AC%20%EC%97%90%ED%8E%A0%ED%83%91&pq=%ED%8C%8C%EB%A6%AC"
          },
          {
            "img_path": "/images/photos/photos_images/paris_image7.jpeg",
            "img_url": "https://m.search.naver.com/search.naver?where=m_image&mode=imgonly&nso=so%3Ar%2Ca%3Aall%2Cp%3Aall&sm=mtb_imt&query=%ED%8C%8C%EB%A6%AC%20%EC%97%90%ED%8E%A0%ED%83%91&pq=%ED%8C%8C%EB%A6%AC"
          },
          {
            "img_path": "/images/photos/photos_images/paris_image8.jpeg",
            "img_url": "https://m.search.naver.com/search.naver?where=m_image&mode=imgonly&nso=so%3Ar%2Ca%3Aall%2Cp%3Aall&sm=mtb_imt&query=%ED%8C%8C%EB%A6%AC%20%EC%97%90%ED%8E%A0%ED%83%91&pq=%ED%8C%8C%EB%A6%AC"
          },
          {
            "img_path": "/images/photos/photos_images/paris_image8.jpeg",
            "img_url": "https://m.search.naver.com/search.naver?where=m_image&mode=imgonly&nso=so%3Ar%2Ca%3Aall%2Cp%3Aall&sm=mtb_imt&query=%ED%8C%8C%EB%A6%AC%20%EC%97%90%ED%8E%A0%ED%83%91&pq=%ED%8C%8C%EB%A6%AC"
          }
        ],
        "image_more": "https://m.search.naver.com/search.naver?where=m_image&mode=imgonly&nso=so%3Ar%2Ca%3Aall%2Cp%3Aall&sm=mtb_nmr&query=%ED%8C%8C%EB%A6%AC" 
      },
      "news": {
        "news_posts": [
          {
            "publisherURL": "https://media.naver.com/press/366",
            "publisherImgURL": "/images/news/news_publisher_logos/paris_logo1.png",
            "publisher": "조선비즈",
            "date": "1636405260000",
            "postURL": "https://n.news.naver.com/mnews/article/366/0000772471?sid=101",
            "title": "“드디어 파리 간다”… 보복여행 기대감에 날아오른 항공주",
            "contents": "항공주, 실적 회복 기대감에 상승 항공 관련주 주가 선반영 정도 높아 투자 유의 지적도 서울에 사는 직장인 김모(33)씨는 이달 프랑스 파리로 가는 비행기 티켓을 끊었다. 이달 우리나라가 ‘위드 코로나(단계적 일상회복)’ 정책을 펼치기에 앞서 프랑스는 지난 6월부터 외국인에 국경을...",
            "contentsImgURL": "/images/news/news_images/paris_1.jpeg",
            "relation": "0.9"
          },
          { 
            "publisherURL": "http://www.daejonilbo.com/",
            "publisherImgURL": "/images/news/news_publisher_logos/paris_logo2.png",
            "publisher": "대전일보",
            "date": "1636518338000",
            "postURL": "http://www.daejonilbo.com/news/newsitem.asp?pk_no=1494047",
            "title": "파리바게뜨 충북혁신1호점, '장학기금' 기탁",
            "contents": "꽃동네아동복지시설에 생활하는 약 100여명의 아이들에게 생일마다 케이크 전달 파리바게뜨 충북혁신1호점(대표 김보형, 김효정)은 지난 9일 지역인재 양성을 위해 써달라며 맹동면장학회 추진위원회(위원장 임흥식)에 장학기금 100만 원을 기탁했다. 파리바게뜨 충북혁신1호점은 맹동면...",
            "contentsImgURL": "/images/news/news_images/paris_2.jpeg",
            "relation": "0.5"
          },
          { 
            "publisherURL": "https://media.naver.com/press/003",
            "publisherImgURL": "/images/news/news_publisher_logos/newsis.jpeg",
            "publisher": "뉴시스",
            "date": "1636595858000",
            "postURL": "https://n.news.naver.com/sports/general/article/003/0010825963",
            "title": "남녀핸드볼, '파리올림픽 겨냥' 최초 외국인감독 선임 예정",
            "contents": "기사내용 요약2024 파리올림픽 대비 경쟁력 강화 방안 여자대표팀, 제25회 세계선수권대회 앞두고 11일 진천선수촌 입촌 한국 남녀 핸드볼이 역대 처음으로 외국인감독을 선임할 계획을 밝혔다. 대한핸드볼협회는 11일 “국제 경쟁력 강화와 2024 파리올림픽 준비를 위해 남녀 국가대표팀 모두...",
            "contentsImgURL": "/images/news/news_images/paris_3.jpeg",
            "relation": "0.8"
          },
          { 
            "publisherURL": "https://media.naver.com/press/421",
            "publisherImgURL": "/images/news/news_publisher_logos/news1.jpeg",
            "publisher": "뉴스1",
            "date": "1636930800000",
            "postURL": "https://n.news.naver.com/mnews/article/421/0005723365?sid=104",
            "title": "파리서 냄비 쇼핑하는 해리스 부통령",
            "contents": "카멀라 해리스 미국 부통령이 13일 (현지시간) 프랑스 파리의 조리 용품점에서 냄비를 쇼핑하고 있다. © AFP=뉴스1",
            "contentsImgURL": "/images/news/news_images/paris_4.jpeg",
            "relation": "0.7"
          },
          { 
            "publisherURL": "https://namu.wiki/w/%EB%B6%88%EA%B5%AD%EC%82%AC",
            "publisherImgURL": "/images/news/news_publisher_logos/news1.jpeg",
            "publisher": "namu.wiki › 불국사",
            "date": "",
            "postURL": "https://namu.wiki/w/%EB%B6%88%EA%B5%AD%EC%82%AC",
            "title": "불국사 - 나무위키",
            "contents": "경상북도경주시불국로 385 (진현동) 토함산 기슭에 위치한 신라 연간을 기원으로 하는 사찰. 1995년 12월에 토함산 중턱의 암자 석굴암과 공동으로 유네스코 세계문화유산으로 지정되었다.",
            "contentsImgURL": "",
            "relation": ""
          }
        ],
        "news_more": "https://m.search.naver.com/search.naver?where=m_image&mode=imgonly&nso=so%3Ar%2Ca%3Aall%2Cp%3Aall&sm=mtb_nmr&query=%ED%8C%8C%EB%A6%AC" 
      },
      "wiki": {
        "wiki_posts": [
          { 
            "publisherURL": "https://namu.wiki/w/%ED%8C%8C%EB%A6%AC(%ED%94%84%EB%9E%91%EC%8A%A4)",
            "publisherImgURL": "/images/wiki/namuwiki.png",
            "publisher": "namu.wiki › 파리(프랑스)",
            "date": "",
            "postURL": "https://namu.wiki/w/%ED%8C%8C%EB%A6%AC(%ED%94%84%EB%9E%91%EC%8A%A4)",
            "title": "파리(프랑스) - 나무위키",
            "contents": "프랑스의 수도이자 최대 도시이다. 유럽의 대표적인 관광 명소이기도 하다. 세계적으로도 큰 영향력을 끼치는 대도시이며, 영국의 런던, 독일의 프랑크푸르트와 함께 유럽의 금융과 경제를 담당하는 중요한 거점 도시이다.",
            "contentsImgURL": "",
            "relation": ""
          },
          { 
            "publisherURL": "https://namu.wiki/w/%ED%8C%8C%EB%A6%AC(%EA%B3%A4%EC%B6%A9)",
            "publisherImgURL": "/images/wiki/namuwiki.png",
            "publisher": "namu.wiki › 파리(곤충)",
            "date": "",
            "postURL": "https://namu.wiki/w/%ED%8C%8C%EB%A6%AC(%EA%B3%A4%EC%B6%A9)",
            "title": "파리(곤충) - 나무위키",
            "contents": "[ 언어별 표기 ]학명Cyclorrhapha한자蠅한국어파리표준중국어苍蝇(Cāngying), 蝇子(",
            "contentsImgURL": "",
            "relation": ""
          },
          { 
            "publisherURL": "https://namu.wiki/w/%EB%B6%88%EA%B5%AD%EC%82%AC",
            "publisherImgURL": "/images/wiki/paris.png",
            "publisher": "www.paris.fr",
            "date": "",
            "postURL": "https://www.paris.fr/",
            "title": "파리시청",
            "contents": "프랑스 파리 소개, 경제, 문화, 교육, 환경 등 관련정보 제공, 프랑스어 페이지.",
            "contentsImgURL": "",
            "relation": ""
          },
          { 
            "publisherURL": "https://namu.wiki/w/%ED%8C%8C%EB%A6%AC",
            "publisherImgURL": "/images/wiki/namuwiki.png",
            "publisher": "namu.wiki › 파리",
            "date": "",
            "postURL": "https://namu.wiki/w/%ED%8C%8C%EB%A6%AC",
            "title": "파리 - 나무위키",
            "contents": "  자세한 내용은 파리(곤충) 문서를의 번 문단을의 부분을 참고하십시오.",
            "contentsImgURL": "",
            "relation": ""
          }
        ],
        "wiki_more": "https://m.search.naver.com/search.naver?page=2&query=%ED%8C%8C%EB%A6%AC&sm=mtb_pge&start=1&where=m_web" 
      }
    },
    {
      "keyword": "모가디슈"
    }
  ]
}

const app = express();

app.use('/build', express.static('build'));
app.use('/images', express.static('images'));
app.use('/styles', express.static('styles'));
app.use(handleRender);
function handleRender(req, res) {
  axios.post("http://localhost:4000/", {data: JSON.stringify(dummydata)})
    .then((response) => {
      const html = response.data
      res.send(html);
    })
    .catch((error) => console.log("error:", error));
}

const port = 3000;
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});