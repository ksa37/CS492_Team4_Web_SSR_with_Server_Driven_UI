import React from 'react'
import renderer from 'react-test-renderer'
import Photo from '../src/components/photo'

it('renders homepage unchanged', () => {
    const photo = {
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
          },
          {
              "tag_name": "여행",
              "tag_image_url": "/images/photos/photos_tag_images/paris_tag7.jpeg",
              "tagURL": "https://m.search.naver.com/search.naver?where=m_image&mode=imgonly&nso=so%3Ar%2Ca%3Aall%2Cp%3Aall&sm=mtb_imt&query=%ED%8C%8C%EB%A6%AC%20%EC%97%AC%ED%96%89&pq=%ED%8C%8C%EB%A6%AC"
          },
          {
              "tag_name": "관광지",
              "tag_image_url": "/images/photos/photos_tag_images/paris_tag8.jpeg",
              "tagURL": "https://m.search.naver.com/search.naver?where=m_image&mode=imgonly&nso=so%3Ar%2Ca%3Aall%2Cp%3Aall&sm=mtb_imt&query=%ED%8C%8C%EB%A6%AC%20%EA%B4%80%EA%B4%91%EC%A7%80&pq=%ED%8C%8C%EB%A6%AC"
          },
          {
              "tag_name": "개선문",
              "tag_image_url": "/images/photos/photos_tag_images/paris_tag9.jpeg",
              "tagURL": "https://m.search.naver.com/search.naver?where=m_image&mode=imgonly&nso=so%3Ar%2Ca%3Aall%2Cp%3Aall&sm=mtb_imt&query=%ED%8C%8C%EB%A6%AC%20%EA%B0%9C%EC%84%A0%EB%AC%B8&pq=%ED%8C%8C%EB%A6%AC"
          },
          {
              "tag_name": "거리",
              "tag_image_url": "/images/photos/photos_tag_images/paris_tag10.jpeg",
              "tagURL": "https://m.search.naver.com/search.naver?where=m_image&mode=imgonly&nso=so%3Ar%2Ca%3Aall%2Cp%3Aall&sm=mtb_imt&query=%ED%8C%8C%EB%A6%AC%20%EA%B1%B0%EB%A6%AC&pq=%ED%8C%8C%EB%A6%AC"
          },
          {
              "tag_name": "올림픽",
              "tag_image_url": "/images/photos/photos_tag_images/paris_tag11.jpeg",
              "tagURL": "https://m.search.naver.com/search.naver?where=m_image&mode=imgonly&nso=so%3Ar%2Ca%3Aall%2Cp%3Aall&sm=mtb_imt&query=%ED%8C%8C%EB%A6%AC%20%EC%98%AC%EB%A6%BC%ED%94%BD&pq=%ED%8C%8C%EB%A6%AC"
          },
          {
              "tag_name": "풍경",
              "tag_image_url": "/images/photos/photos_tag_images/paris_tag12.jpeg",
              "tagURL": "https://m.search.naver.com/search.naver?where=m_image&mode=imgonly&nso=so%3Ar%2Ca%3Aall%2Cp%3Aall&sm=mtb_imt&query=%ED%8C%8C%EB%A6%AC%20%ED%92%8D%EA%B2%BD&pq=%ED%8C%8C%EB%A6%AC"
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
              "img_path": "/images/photos/photos_images/paris_image4.jpeg",
              "img_url": "https://m.search.naver.com/search.naver?where=m_image&mode=imgonly&sm=mtb_img&query=%ED%8C%8C%EB%A6%AC&nso=so%3Ar%2Ca%3Aall%2Cp%3Aall#imgId=image_sas%3Ablog69427238%7C14%7C222565476601_1986740026"
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
              "img_path": "/images/photos/photos_images/paris_image9.jpeg",
              "img_url": "https://m.search.naver.com/search.naver?where=m_image&mode=imgonly&nso=so%3Ar%2Ca%3Aall%2Cp%3Aall&sm=mtb_imt&query=%ED%8C%8C%EB%A6%AC%20%EC%97%90%ED%8E%A0%ED%83%91&pq=%ED%8C%8C%EB%A6%AC"
          }
      ],
      "image_more": "https://m.search.naver.com/search.naver?where=m_image&mode=imgonly&nso=so%3Ar%2Ca%3Aall%2Cp%3Aall&sm=mtb_nmr&query=%ED%8C%8C%EB%A6%AC" 
  }
  const tree = renderer.create(<Photo props={photo}/>).toJSON()
  expect(tree).toMatchSnapshot()
})