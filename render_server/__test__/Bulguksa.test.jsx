import React from 'react'
import { render, screen } from '@testing-library/react'
import Bulguksa from '../src/components/Bulguksa'
import userEvent from '@testing-library/user-event'

function replace_text(text){
  var new_text = text.replace(/\./g, '\\.').replace(/\(/g, '\\(').replace(/\)/g, '\\)').replace(/\+/g, '\\+').replace(/\?/g, '\\?').replace(/\*/g, '\\*').replace(/\{/g, '\\{').replace(/\}/g, '\\}').replace(/\|/g, '\\|').replace(/\^/g, '\\^').replace(/\$/g, '\\$')
  return new_text;
}

describe('Bulguksa', () => {
  it('renders a Bulguksa page', () => {
    const bulguksa = {
      "header": {
          "title": "경주 불국사",
          "href": "https://m.terms.naver.com/entry.naver?docId=1104868&cid=40942&categoryId=33380",
          "category": ["문화재", "慶州 佛國寺"],
          "tablist": ["전체", "기본정보", "포토", "주변 문화재", "함께 찾은 문화재"],
          "tablisthref": ["https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=blZH&x_csa=%7B%22pkid%22%3A648%7D&pkid=648&os=19371944&x_nqx=%7B%22theme%22%3A%22culturalassets%22%2C%22pkid%22%3A%22648%22%2C%22os%22%3A%2219371944%22%7D&qvt=0&query=%EA%B2%BD%EC%A3%BC%20%EB%B6%88%EA%B5%AD%EC%82%AC", "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=blZH&x_csa=%7B%22pkid%22%3A648%7D&pkid=648&os=19371944&x_nqx=%7B%22theme%22%3A%22culturalassets%22%2C%22pkid%22%3A%22648%22%2C%22os%22%3A%2219371944%22%7D&qvt=0&query=%EA%B2%BD%EC%A3%BC%20%EB%B6%88%EA%B5%AD%EC%82%AC%20%EA%B8%B0%EB%B3%B8%EC%A0%95%EB%B3%B4", "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=blZH&x_csa=%7B%22pkid%22%3A648%7D&pkid=648&os=19371944&x_nqx=%7B%22theme%22%3A%22culturalassets%22%2C%22pkid%22%3A%22648%22%2C%22os%22%3A%2219371944%22%7D&qvt=0&query=%EA%B2%BD%EC%A3%BC%20%EB%B6%88%EA%B5%AD%EC%82%AC%20%ED%8F%AC%ED%86%A0", "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=blZH&x_csa=%7B%22pkid%22%3A648%7D&pkid=648&os=19371944&x_nqx=%7B%22theme%22%3A%22culturalassets%22%2C%22pkid%22%3A%22648%22%2C%22os%22%3A%2219371944%22%7D&qvt=0&query=%EA%B2%BD%EC%A3%BC%20%EB%B6%88%EA%B5%AD%EC%82%AC%20%EC%A3%BC%EB%B3%80%20%EB%AC%B8%ED%99%94%EC%9E%AC", "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=blZH&x_csa=%7B%22pkid%22%3A648%7D&pkid=648&os=19371944&x_nqx=%7B%22theme%22%3A%22culturalassets%22%2C%22pkid%22%3A%22648%22%2C%22os%22%3A%2219371944%22%7D&qvt=0&query=%EA%B2%BD%EC%A3%BC%20%EB%B6%88%EA%B5%AD%EC%82%AC%20%ED%95%A8%EA%BB%98%20%EC%B0%BE%EC%9D%80%20%EB%AC%B8%ED%99%94%EC%9E%AC"]
      },
      "first_card": {
          "relimg": {
              "imgs": ["/images/Bulguksa/basic/1/1.jpg", "/images/Bulguksa/basic/1/2.jpg", "/images/Bulguksa/basic/1/3.jpg", "/images/Bulguksa/basic/1/4.jpg", "/images/Bulguksa/basic/1/5.jpg", "/images/Bulguksa/basic/1/6.jpg", "/images/Bulguksa/basic/1/7.jpg", "/images/Bulguksa/basic/1/8.jpg", "/images/Bulguksa/basic/1/9.jpg", "/images/Bulguksa/basic/1/10.jpg", "/images/Bulguksa/basic/1/11.jpg", "/images/Bulguksa/basic/1/12.jpg", "/images/Bulguksa/basic/1/13.jpg", "/images/Bulguksa/basic/1/14.jpg", "/images/Bulguksa/basic/1/15.jpg", "/images/Bulguksa/basic/1/16.jpg", "/images/Bulguksa/basic/1/17.jpg", "/images/Bulguksa/basic/1/18.jpg", "/images/Bulguksa/basic/1/19.jpg", "/images/Bulguksa/basic/1/20.jpg", "/images/Bulguksa/basic/1/21.jpg", "/images/Bulguksa/basic/1/22.jpg", "/images/Bulguksa/basic/1/23.jpg", "/images/Bulguksa/basic/1/24.jpg", "/images/Bulguksa/basic/1/25.jpg", "/images/Bulguksa/basic/1/26.jpg", "/images/Bulguksa/basic/1/27.jpg", "/images/Bulguksa/basic/1/28.jpg", "/images/Bulguksa/basic/1/29.jpg", "/images/Bulguksa/basic/1/30.jpg"],
              "hrefs": ["https://m.terms.naver.com/imageDetail.naver?docId=1104868&imageUrl=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_361%2F20200109065040326_XPT7GLZUJ.gif%2F79773_0.gif%3Ftype%3Dm4500_4500_fst%26wm%3DN&cid=40942&categoryId=33380", "https://m.terms.naver.com/imageDetail.naver?docId=1104868&imageUrl=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_383%2F20210902073710511_860A9OWJX.jpg%2F10545613.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN&cid=40942&categoryId=33380", "https://m.terms.naver.com/imageDetail.naver?docId=1104868&imageUrl=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_383%2F20210902073711216_OY29PF7YZ.jpg%2F10545615.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN&cid=40942&categoryId=33380", "https://m.terms.naver.com/imageDetail.naver?docId=1104868&imageUrl=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_383%2F20210902075005787_MHOWJN4CB.jpg%2F10708602.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN&cid=40942&categoryId=33380", "https://m.terms.naver.com/imageDetail.naver?docId=1104868&imageUrl=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_383%2F20210902075038404_2I15WK6H0.jpg%2F10712762.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN&cid=40942&categoryId=33380", "https://m.terms.naver.com/imageDetail.naver?docId=1104868&imageUrl=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_383%2F20210902075023229_D1LCQXNAW.jpg%2F10708964.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN&cid=40942&categoryId=33380", "https://m.terms.naver.com/imageDetail.naver?docId=1104868&imageUrl=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_383%2F20210902075034463_PDFPYQ309.jpg%2F10712722.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN&cid=40942&categoryId=33380", "https://m.terms.naver.com/imageDetail.naver?docId=1104868&imageUrl=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_383%2F20210902075025139_T8DBAC4OE.jpg%2F10711974.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN&cid=40942&categoryId=33380", "https://m.terms.naver.com/imageDetail.naver?docId=1104868&imageUrl=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_383%2F20210902075006710_JPWT5VUKN.jpg%2F10708743.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN&cid=40942&categoryId=33380", "https://m.terms.naver.com/imageDetail.naver?docId=1104868&imageUrl=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_383%2F20210902075021801_AN6BXN7JK.jpg%2F10708902.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN&cid=40942&categoryId=33380", "https://m.terms.naver.com/imageDetail.naver?docId=1104868&imageUrl=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_383%2F20210902075024335_47VKYCNIB.jpg%2F10708983.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN&cid=40942&categoryId=33380", "https://m.terms.naver.com/imageDetail.naver?docId=1104868&imageUrl=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_383%2F20210902075025599_5PVFOA9A7.jpg%2F10712335.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN&cid=40942&categoryId=33380", "https://m.terms.naver.com/imageDetail.naver?docId=1104868&imageUrl=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_43%2F20181008214838506_TVJ0CTYHI.jpg%2F584703.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN&cid=40942&categoryId=33380", "https://m.terms.naver.com/imageDetail.naver?docId=1104868&imageUrl=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_43%2F20181008214835869_GK3B501KL.jpg%2F584701.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN&cid=40942&categoryId=33380", "https://m.terms.naver.com/imageDetail.naver?docId=1104868&imageUrl=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_43%2F20181008214835743_FUCEFKTCX.jpg%2F584700.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN&cid=40942&categoryId=33380", "https://m.terms.naver.com/imageDetail.naver?docId=1104868&imageUrl=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_356%2F20190905234403210_XSACSSOBZ.jpg%2F10340369.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN&cid=40942&categoryId=33380", "https://m.terms.naver.com/imageDetail.naver?docId=1104868&imageUrl=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_356%2F20190905234402734_HEE2XASNO.jpg%2F10340368.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN&cid=40942&categoryId=33380", "https://m.terms.naver.com/imageDetail.naver?docId=1104868&imageUrl=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_356%2F20190905234409661_U7R3O78E4.jpg%2F10340371.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN&cid=40942&categoryId=33380", "https://m.terms.naver.com/imageDetail.naver?docId=1104868&imageUrl=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_356%2F20190905234410127_IUTZ8WGW7.jpg%2F10340382.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN&cid=40942&categoryId=33380", "https://m.terms.naver.com/imageDetail.naver?docId=1104868&imageUrl=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_356%2F20190905234409569_9EU3YEK5P.jpg%2F10340370.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN&cid=40942&categoryId=33380", "https://m.terms.naver.com/imageDetail.naver?docId=1104868&imageUrl=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_43%2F20181008230342165_UKHM77K5C.jpg%2F1735729.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN&cid=40942&categoryId=33380", "https://m.terms.naver.com/imageDetail.naver?docId=1104868&imageUrl=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_43%2F20181008215433403_IKYYA9SHQ.jpg%2F650943.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN&cid=40942&categoryId=33380", "https://m.terms.naver.com/imageDetail.naver?docId=1104868&imageUrl=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_43%2F20181008215433154_KDZSGO63R.jpg%2F650942.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN&cid=40942&categoryId=33380", "https://m.terms.naver.com/imageDetail.naver?docId=1104868&imageUrl=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_43%2F20181008215428826_WEEVVTALG.jpg%2F650941.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN&cid=40942&categoryId=33380", "https://m.terms.naver.com/imageDetail.naver?docId=1104868&imageUrl=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_43%2F20181008215425232_E3HE1KZK4.jpg%2F650940.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN&cid=40942&categoryId=33380", "https://m.terms.naver.com/imageDetail.naver?docId=1104868&imageUrl=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_43%2F20181008215421898_7FOCMXC1Z.jpg%2F650939.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN&cid=40942&categoryId=33380", "https://m.terms.naver.com/imageDetail.naver?docId=1104868&imageUrl=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_43%2F20181008215421559_MYJF2PVLG.jpg%2F650927.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN&cid=40942&categoryId=33380", "https://m.terms.naver.com/imageDetail.naver?docId=1104868&imageUrl=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_43%2F20181008215420944_QM152WMLF.jpg%2F650924.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN&cid=40942&categoryId=33380", "https://m.terms.naver.com/imageDetail.naver?docId=1104868&imageUrl=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_43%2F20181008215421447_W1DW6LXOX.jpg%2F650926.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN&cid=40942&categoryId=33380", "https://m.terms.naver.com/imageDetail.naver?docId=1104868&imageUrl=https%3A%2F%2Fdbscthumb-phinf.pstatic.net%2F2765_000_43%2F20181008215421428_Y51UIX6NG.jpg%2F650925.jpg%3Ftype%3Dm4500_4500_fst%26wm%3DN&cid=40942&categoryId=33380"],
              "ratios": [1.3269, 1.7778, 1.7778, 1.4993, 1.4993, 1.4993, 1.4993, 1.4993, 1.4993, 0.6667, 1.4993, 1.4993, 1.3727, 1.3672, 1.3745, 1.4993, 1.4971, 1.4971, 0.6680, 1.4971, 1.4993, 1.4993, 1.4993, 1.4993, 1.4993, 1.4993, 1.4993, 1.4993, 1.4993, 1.4993],
              "ahref": "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=blZH&x_csa=%7B%22pkid%22%3A648%7D&pkid=648&os=19371944&x_nqx=%7B%22theme%22%3A%22culturalassets%22%2C%22pkid%22%3A%22648%22%2C%22os%22%3A%2219371944%22%7D&qvt=0&query=%EA%B2%BD%EC%A3%BC%20%EB%B6%88%EA%B5%AD%EC%82%AC%20%ED%8F%AC%ED%86%A0"
          },
          "middletitle": {
              "text": "기본정보",
              "href": "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=blZH&x_csa=%7B%22isOpen%22%3Atrue%2C%22pkid%22%3A648%7D&pkid=648&os=19371944&x_nqx=%7B%22theme%22%3A%22culturalassets%22%2C%22pkid%22%3A%22648%22%2C%22os%22%3A%2219371944%22%7D&qvt=0&query=%EA%B2%BD%EC%A3%BC%20%EB%B6%88%EA%B5%AD%EC%82%AC%20%EA%B8%B0%EB%B3%B8%EC%A0%95%EB%B3%B4"
          },
          "detailinfo": [
              ["지정종목", "사적"],
              ["지정일", "2009년 12월 21일"],
              ["소재지", ["경북 경주시 불국로 385, 등 (진현동)"], ["http://map.naver.com?title=%EA%B2%BD%EC%A3%BC%20%EB%B6%88%EA%B5%AD%EC%82%AC&y=35.7862812&x=129.3298991"]],
              ["시대", "통일신라"],
              ["종류/분류", "사찰"],
              ["크기", "면적 409,315㎡"]
          ],
          "textexpand": "경북 경주시 진현동 토함산 기슭에 있는 신라시대 절. 사적이다.",
          "buttonarea": {
              "mapURL": "http://map.naver.com?title=%EA%B2%BD%EC%A3%BC%20%EB%B6%88%EA%B5%AD%EC%82%AC&y=35.7862812&x=129.3298991",
              "shareURL": "https://m.terms.naver.com/entry.naver?docId=1104868&cid=40942&categoryId=33380",
              "title": "경주 불국사"
          },
          "video": {
              "img": "/images/Bulguksa/basic/3/1.jpg",
              "href": "https://tv.naver.com/v/11478389",
              "time": "02:26"
          }
      },
      "second_card_whole": {
          "middletitle": {"text": "주변 문화재", "href": "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=blZH&x_csa=%7B%22isOpen%22%3Atrue%2C%22pkid%22%3A648%7D&pkid=648&os=19371944&x_nqx=%7B%22theme%22%3A%22culturalassets%22%2C%22pkid%22%3A%22648%22%2C%22os%22%3A%2219371944%22%7D&qvt=0&query=%EA%B2%BD%EC%A3%BC%20%EB%B6%88%EA%B5%AD%EC%82%AC%20%EC%A3%BC%EB%B3%80%20%EB%AC%B8%ED%99%94%EC%9E%AC"},
          "scrollbox": [
              {
                  "thumb": "/images/Bulguksa/basic/2/1.jpg",
                  "href": "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=blZH&x_csa=%7B%22pkid%22%3A648%7D&pkid=648&os=19371948&x_nqx=%7B%22theme%22%3A%22culturalassets%22%2C%22pkid%22%3A%22648%22%2C%22os%22%3A%2219371948%22%7D&qvt=0&query=%EA%B2%BD%EC%A3%BC%20%EB%B6%88%EA%B5%AD%EC%82%AC%20%EC%82%AC%EB%A6%AC%ED%83%91",
                  "name": "경주 불국사 사리탑",
                  "subtext": "두산백과"
              },
              {
                  "thumb": "/images/Bulguksa/basic/2/2.jpg",
                  "href": "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=blZH&x_csa=%7B%22pkid%22%3A648%7D&pkid=648&os=19371947&x_nqx=%7B%22theme%22%3A%22culturalassets%22%2C%22pkid%22%3A%22648%22%2C%22os%22%3A%2219371947%22%7D&qvt=0&query=%EA%B2%BD%EC%A3%BC%20%EB%B6%88%EA%B5%AD%EC%82%AC%20%EB%8B%A4%EB%B3%B4%ED%83%91",
                  "name": "경주 불국사 다보탑",
                  "subtext": "두산백과"
              },
              {
                  "thumb": "/images/Bulguksa/basic/2/3.jpg",
                  "href": "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=blZH&x_csa=%7B%22pkid%22%3A648%7D&pkid=648&os=19371949&x_nqx=%7B%22theme%22%3A%22culturalassets%22%2C%22pkid%22%3A%22648%22%2C%22os%22%3A%2219371949%22%7D&qvt=0&query=%EA%B2%BD%EC%A3%BC%20%EB%B6%88%EA%B5%AD%EC%82%AC%20%EC%97%B0%ED%99%94%EA%B5%90%20%EB%B0%8F%20%EC%B9%A0%EB%B3%B4%EA%B5%90",
                  "name": "경주 불국사 연화교 및 칠보교",
                  "subtext": "두산백과"
              },
              {
                  "thumb": "/images/Bulguksa/basic/2/4.jpg",
                  "href": "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=blZH&x_csa=%7B%22pkid%22%3A648%7D&pkid=648&os=19371950&x_nqx=%7B%22theme%22%3A%22culturalassets%22%2C%22pkid%22%3A%22648%22%2C%22os%22%3A%2219371950%22%7D&qvt=0&query=%EA%B2%BD%EC%A3%BC%20%EB%B6%88%EA%B5%AD%EC%82%AC%20%EC%B2%AD%EC%9A%B4%EA%B5%90%20%EB%B0%8F%20%EB%B0%B1%EC%9A%B4%EA%B5%90",
                  "name": "경주 불국사 청운교 및 백운교",
                  "subtext": "두산백과"
              },
              {
                  "thumb": "/images/Bulguksa/basic/2/5.jpg",
                  "href": "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=blZH&x_csa=%7B%22pkid%22%3A648%7D&pkid=648&os=19395172&x_nqx=%7B%22theme%22%3A%22culturalassets%22%2C%22pkid%22%3A%22648%22%2C%22os%22%3A%2219395172%22%7D&qvt=0&query=%EA%B2%BD%EC%A3%BC%20%EB%B6%88%EA%B5%AD%EC%82%AC%20%EC%82%BC%EC%B8%B5%EC%84%9D%ED%83%91",
                  "name": "경주 불국사 삼층석탑",
                  "subtext": "두산백과"
              },
              {
                  "thumb": "/images/Bulguksa/basic/2/6.jpg",
                  "href": "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=blZH&x_csa=%7B%22pkid%22%3A648%7D&pkid=648&os=19371234&x_nqx=%7B%22theme%22%3A%22culturalassets%22%2C%22pkid%22%3A%22648%22%2C%22os%22%3A%2219371234%22%7D&qvt=0&query=%EA%B2%BD%EC%A3%BC%20%EB%A7%88%EB%8F%99%20%EC%82%BC%EC%B8%B5%EC%84%9D%ED%83%91",
                  "name": "경주 마동 삼층석탑",
                  "subtext": "두산백과"
              },
              {
                  "thumb": "/images/Bulguksa/basic/2/7.jpg",
                  "href": "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=blZH&x_csa=%7B%22pkid%22%3A648%7D&pkid=648&os=19372050&x_nqx=%7B%22theme%22%3A%22culturalassets%22%2C%22pkid%22%3A%22648%22%2C%22os%22%3A%2219372050%22%7D&qvt=0&query=%EA%B2%BD%EC%A3%BC%20%EC%84%9D%EA%B5%B4%EC%95%94%20%EC%84%9D%EA%B5%B4",
                  "name": "경주 석굴암 석굴",
                  "subtext": "두산백과"
              },
              {
                  "thumb": "/images/Bulguksa/basic/2/8.jpg",
                  "href": "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=blZH&x_csa=%7B%22pkid%22%3A648%7D&pkid=648&os=19375990&x_nqx=%7B%22theme%22%3A%22culturalassets%22%2C%22pkid%22%3A%22648%22%2C%22os%22%3A%2219375990%22%7D&qvt=0&query=%EC%88%98%EB%B4%89%EC%A0%95",
                  "name": "수봉정",
                  "subtext": "두산백과"
              },
              {
                  "thumb": "/images/Bulguksa/basic/2/9.jpg",
                  "href": "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=blZH&x_csa=%7B%22pkid%22%3A648%7D&pkid=648&os=19376339&x_nqx=%7B%22theme%22%3A%22culturalassets%22%2C%22pkid%22%3A%22648%22%2C%22os%22%3A%2219376339%22%7D&qvt=0&query=%EA%B0%90%EC%82%B0%EC%82%AC%EC%A7%80%20%EC%82%BC%EC%B8%B5%EC%84%9D%ED%83%91",
                  "name": "감산사지 삼층석탑",
                  "subtext": "두산백과"
              },
              {
                  "thumb": "/images/Bulguksa/basic/2/10.jpg",
                  "href": "https://m.search.naver.com/search.naver?where=m&sm=mtb_etc&mra=blZH&x_csa=%7B%22pkid%22%3A648%7D&pkid=648&os=19373294&x_nqx=%7B%22theme%22%3A%22culturalassets%22%2C%22pkid%22%3A%22648%22%2C%22os%22%3A%2219373294%22%7D&qvt=0&query=%EA%B2%BD%EC%A3%BC%20%EA%B5%AC%EC%A0%95%EB%8F%99%20%EA%B3%A0%EB%B6%84%EA%B5%B0",
                  "name": "경주 구정동 고분군",
                  "subtext": "두산백과"
              }
          ]
      },
      "second_card_basic": {
          "text": "설명",
          "description": "경북 경주시 진현동 토함산 기슭에 있는 신라시대 절. 사적이다.대한불교조계종 11교구본사(敎區本寺)의 하나로 그 경내(境內)는 2009년 12월 21일에 사적 제502호로 지정되었으며 1995년 세계문화유산목록에 등록되었다. 불국사 창건에 대하여는 두 가지 설이 전한다. 그 중 하나는 《불국사고금창기(佛國寺古今創記)》로, 여기에 보면 528년(신라 법흥왕 15) 법흥왕의 어머니 영제부인(迎帝夫人)의 발원(發願)으로 불국사를 창건하여 574년 진흥왕(眞興王)의 어머니인 지소부인(只召夫人)이 절을 크게 중건하면서 비로자나불(毘盧遮那佛)과 아미타불(阿彌陀佛)을 주조하게 하여 봉안하였고, 670년(문무왕 10)에는 무설전(無說殿)을 새로 지어 《화엄경(華嚴經)》을 강설(講說)하였고, 그 후 751년(경덕왕 10)에",
          "dict_more": "https://m.terms.naver.com/entry.naver?docId=1104868&cid=40942&categoryId=33380" 
      },
      "third_card_basic": {
          "text": "부가정보",
          "detailinfo": [
              ["참조항목", ["가람배치", "김대성", "대한불교조계종", "백률사", "보경사", "불국사고금역대기", "경주 불국사 금동비로자나불좌상", "경주 불국사 금동아미타여래좌상", "경주 불국사 다보탑", "경주 불국사 사리탑", "경주 불국사 삼층석탑", "경주 불국사 연화교 및 칠보교", "경주 불국사 청운교 및 백운교", "불영사", "비로자나불", "아미타불", "오어사", "화엄경", "극락전"], ["https://m.terms.naver.com/entry.naver?docId=1054464&cid=40942&categoryId=33076", "https://m.terms.naver.com/entry.naver?docId=1072193&cid=40942&categoryId=33380", "https://m.terms.naver.com/entry.naver?docId=1081748&cid=40942&categoryId=31572", "https://m.terms.naver.com/entry.naver?docId=1100090&cid=40942&categoryId=33076", "https://m.terms.naver.com/entry.naver?docId=1102291&cid=40942&categoryId=33081", "https://m.terms.naver.com/entry.naver?docId=1104869&cid=40942&categoryId=33383", "https://m.terms.naver.com/entry.naver?docId=1104870&cid=40942&categoryId=37713", "https://m.terms.naver.com/entry.naver?docId=1104871&cid=40942&categoryId=37713", "https://m.terms.naver.com/entry.naver?docId=1104872&cid=40942&categoryId=33380", "https://m.terms.naver.com/entry.naver?docId=1104873&cid=40942&categoryId=37713", "https://m.terms.naver.com/entry.naver?docId=1104874&cid=40942&categoryId=33380", "https://m.terms.naver.com/entry.naver?docId=1104876&cid=40942&categoryId=37713", "https://m.terms.naver.com/entry.naver?docId=1104877&cid=40942&categoryId=37713", "https://m.terms.naver.com/entry.naver?docId=1104982&cid=40942&categoryId=33081", "https://m.terms.naver.com/entry.naver?docId=1105949&cid=40942&categoryId=31545", "https://m.terms.naver.com/entry.naver?docId=1120976&cid=40942&categoryId=31545", "https://m.terms.naver.com/entry.naver?docId=1128395&cid=40942&categoryId=33081", "https://m.terms.naver.com/entry.naver?docId=1155159&cid=40942&categoryId=31546", "https://m.terms.naver.com/entry.naver?docId=1189095&cid=40942&categoryId=33081"]],
              ["역참조항목", ["경주국립공원", "경주 불국사 경내", "신라미술", "기림사", "김문량", "무구정광대다라니경", "25교구본사"], ["https://m.terms.naver.com/entry.naver?docId=1060476&cid=40942&categoryId=37713", "https://m.terms.naver.com/entry.naver?docId=1060507&cid=40942&categoryId=33081", "https://m.terms.naver.com/entry.naver?docId=1062003&cid=40942&categoryId=33048", "https://m.terms.naver.com/entry.naver?docId=1070887&cid=40942&categoryId=31548", "https://m.terms.naver.com/entry.naver?docId=1072317&cid=40942&categoryId=33380", "https://m.terms.naver.com/entry.naver?docId=1094555&cid=40942&categoryId=33380", "https://m.terms.naver.com/entry.naver?docId=1135074&cid=40942&categoryId=33081"]]
          ]
      }
    };
    render(<Bulguksa props={bulguksa}/>)

    //Case for header
    const link0 = screen.getByRole('link', {
      name: RegExp(`(?<!.)${bulguksa.header.title}(?!.)`, "i"),
    })
    const div0 = screen.getByText(RegExp(bulguksa.header.category[1], "i"))
    const button0 = screen.getByRole('button', {
      name: RegExp(`(?<!.)${bulguksa.header.tablist[0]}(?!.)`, "i"),
    })
    const button1 = screen.getByRole('button', {
      name: RegExp(`(?<!.)${bulguksa.header.tablist[1]}(?!.)`, "i"),
    })
    const button2 = screen.getByRole('button', {
      name: RegExp(`(?<!.)${bulguksa.header.tablist[2]}(?!.)`, "i"),
    })
    const button3 = screen.getByRole('button', {
      name: RegExp(`(?<!.)${bulguksa.header.tablist[3]}(?!.)`, "i"),
    })
    const button4 = screen.getByRole('button', {
      name: RegExp(`(?<!.)${bulguksa.header.tablist[4]}(?!.)`, "i"),
    })
    
    expect(link0).toBeInTheDocument()
    expect(div0).toBeInTheDocument()
    expect(button0).toBeInTheDocument()
    expect(button1).toBeInTheDocument()
    expect(button2).toBeInTheDocument()
    expect(button3).toBeInTheDocument()
    expect(button4).toBeInTheDocument()
    expect(link0).toHaveAttribute('href', bulguksa.header.href)
    expect(button3.closest('a')).toHaveAttribute('href', bulguksa.header.tablisthref[3])
    expect(button4.closest('a')).toHaveAttribute('href', bulguksa.header.tablisthref[4])

    //Case for Bulguksa page0
    const img0 = screen.getByAltText(/num/i)
    const span0 = screen.getByText(/30/i)
    expect(img0).toBeInTheDocument()
    expect(span0).toBeInTheDocument()

    for(var i = 0; i < 10; i++)
    {
      const img1 = screen.getByAltText(RegExp(`(?<!.)scroll_${i}(?!.)`, "i"))
      expect(img1).toBeInTheDocument()
      expect(img1.closest('div').closest('a')).toHaveAttribute('href', bulguksa.first_card.relimg.ahref)
    }

    const h30 = screen.getByRole('heading', {
      level: 3,
      name: RegExp(`(?<!.)${bulguksa.first_card.middletitle.text}(?!.)`, "i"),
    })
    const img2 = screen.getByAltText(RegExp(`(?<!.)${bulguksa.first_card.middletitle.text}(?!.)`, "i"))
    expect(h30).toBeInTheDocument()
    expect(img2).toBeInTheDocument()
    expect(h30.closest('a')).toHaveAttribute('href', bulguksa.first_card.middletitle.href)

    for(var i = 0; i < bulguksa.first_card.detailinfo.length; i++)
    {
      if (bulguksa.first_card.detailinfo[i].length === 2)
      {
        const dt0 = screen.getByText(RegExp(`(?<!.)${replace_text(bulguksa.first_card.detailinfo[i][0])}(?!.)`, "i"))
        const dd0 = screen.getByText(RegExp(`(?<!.)${replace_text(bulguksa.first_card.detailinfo[i][1])}(?!.)`, "i"))
        expect(dt0).toBeInTheDocument()
        expect(dd0).toBeInTheDocument()
      }
      else
      {
        const dt0 = screen.getByText(RegExp(`(?<!.)${replace_text(bulguksa.first_card.detailinfo[i][0])}(?!.)`, "i"))
        const dd0 = screen.getByText(RegExp(`(?<!.)${replace_text(bulguksa.first_card.detailinfo[i][1][0])}(?!.)`, "i"))
        expect(dt0).toBeInTheDocument()
        expect(dd0).toBeInTheDocument()
        expect(dd0).toHaveAttribute('href', bulguksa.first_card.detailinfo[i][1][1])
      }
    }

    const div1 = screen.getByText(RegExp(`(?<!.)${replace_text(bulguksa.first_card.textexpand)}(?!.)`, "i"))
    expect(div1).toBeInTheDocument()

    const img3 = screen.getByAltText(/map_button/i)
    const img4 = screen.getByAltText(/share_button/i)
    const div2 = screen.getByText(/지도/i)
    expect(img3).toBeInTheDocument()
    expect(img4).toBeInTheDocument()
    expect(div2).toBeInTheDocument()
    expect(img3.closest('a')).toHaveAttribute('href', bulguksa.first_card.buttonarea.mapURL)

    const h31 = screen.getByRole('heading', {
      level: 3,
      name: RegExp(`(?<!.)${bulguksa.second_card_whole.middletitle.text}(?!.)`, "i"),
    })
    const img5 = screen.getByAltText(RegExp(`(?<!.)${bulguksa.second_card_whole.middletitle.text}(?!.)`, "i"))
    expect(h31).toBeInTheDocument()
    expect(img5).toBeInTheDocument()
    expect(h31.closest('a')).toHaveAttribute('href', bulguksa.second_card_whole.middletitle.href)

    for(var i = 0; i < bulguksa.second_card_whole.scrollbox.length; i++)
    {
      const img6 = screen.getByAltText(RegExp(`(?<!.)${bulguksa.second_card_whole.scrollbox[i].name+" img"}(?!.)`, "i"))
      const link1 = screen.getByRole('link', {
        name: RegExp(`(?<!.)${bulguksa.second_card_whole.scrollbox[i].name}(?!.)`, "i"),
      })
      expect(img6).toBeInTheDocument()
      expect(link1).toBeInTheDocument()
      expect(img6.closest('a')).toHaveAttribute('href', bulguksa.second_card_whole.scrollbox[i].href)
      expect(link1).toHaveAttribute('href', bulguksa.second_card_whole.scrollbox[i].href)
    }

    //Case for Bulguksa page1
    const button10 = screen.getByRole('button', {
      name: RegExp(`(?<!.)${bulguksa.header.tablist[1]}(?!.)`, "i"),
    })
    userEvent.click(button10)
    const img10 = screen.getByAltText(/video/i)
    const img11 = screen.getByAltText(/icon/i)
    const span10 = screen.getByText(bulguksa.first_card.video.time)
    expect(img10).toBeInTheDocument()
    expect(img11).toBeInTheDocument()
    expect(span10).toBeInTheDocument()
    expect(img10.closest('div').closest('a')).toHaveAttribute('href', bulguksa.first_card.video.href)

    for(var i = 0; i < bulguksa.first_card.detailinfo.length; i++)
    {
      if (bulguksa.first_card.detailinfo[i].length === 2)
      {
        const dt1 = screen.getByText(RegExp(`(?<!.)${replace_text(bulguksa.first_card.detailinfo[i][0])}(?!.)`, "i"))
        const dd1 = screen.getByText(RegExp(`(?<!.)${replace_text(bulguksa.first_card.detailinfo[i][1])}(?!.)`, "i"))
        expect(dt1).toBeInTheDocument()
        expect(dd1).toBeInTheDocument()
      }
      else
      {
        const dt1 = screen.getByText(RegExp(`(?<!.)${replace_text(bulguksa.first_card.detailinfo[i][0])}(?!.)`, "i"))
        const dd1 = screen.getByText(RegExp(`(?<!.)${replace_text(bulguksa.first_card.detailinfo[i][1][0])}(?!.)`, "i"))
        expect(dt1).toBeInTheDocument()
        expect(dd1).toBeInTheDocument()
        expect(dd1).toHaveAttribute('href', bulguksa.first_card.detailinfo[i][1][1])
      }
    }

    const img12 = screen.getByAltText(/map_button/i)
    const img13 = screen.getByAltText(/share_button/i)
    const div10 = screen.getByText(/지도/i)
    expect(img12).toBeInTheDocument()
    expect(img13).toBeInTheDocument()
    expect(div10).toBeInTheDocument()
    expect(img12.closest('a')).toHaveAttribute('href', bulguksa.first_card.buttonarea.mapURL)

    const h310 = screen.getByRole('heading', {
      level: 3,
      name: RegExp(`(?<!.)${bulguksa.second_card_basic.text}(?!.)`, "i"),
    })
    expect(h310).toBeInTheDocument()

    const div11 = screen.getByText(RegExp(`(?<!.)${replace_text(bulguksa.second_card_basic.description)}(?!.)`, "i"))
    expect(div11).toBeInTheDocument()

    const div12 = screen.getByText(/(?<!.)지식백과 더보기(?!.)/i)
    const img14 = screen.getByAltText(/arrow/i)
    expect(div12).toBeInTheDocument()
    expect(img14).toBeInTheDocument()
    expect(div12.closest('div').closest('a')).toHaveAttribute('href', bulguksa.second_card_basic.dict_more)

    const h311 = screen.getByRole('heading', {
      level: 3,
      name: RegExp(`(?<!.)${bulguksa.third_card_basic.text}(?!.)`, "i"),
    })
    expect(h311).toBeInTheDocument()

    for(var i = 0; i < bulguksa.third_card_basic.detailinfo.length; i++)
    {
      const dt2 = screen.getByText(RegExp(`(?<!.)${bulguksa.third_card_basic.detailinfo[i][0]}(?!.)`, "i"))
      expect(dt2).toBeInTheDocument()
      for(var j = 0; j < bulguksa.third_card_basic.detailinfo[1].length; j++)
      {
        const dd2 = screen.getByText(RegExp(`(?<!.)${bulguksa.third_card_basic.detailinfo[i][1][j]}`, "i"))
        expect(dd2).toBeInTheDocument()
        expect(dd2).toHaveAttribute('href', bulguksa.third_card_basic.detailinfo[i][2][j])
      }
    }

    //Case for Bulguksa page2
    const button20 = screen.getByRole('button', {
        name: RegExp(`(?<!.)${bulguksa.header.tablist[2]}(?!.)`, "i"),
    })
    userEvent.click(button20)
    /*for(var i = 0; i < 12; i++)
    {
      const img20 = screen.getByAltText(RegExp(`(?<!.)${i} photo(?!.)`, "i"))
      expect(img20).toBeInTheDocument()
      expect(img20.closest('a')).toHaveAttribute('href', replace_text(bulguksa.first_card.relimg.hrefs[i]))
    }*/
    const div20 = screen.getByText(/(?<!.)펼쳐보기/i)
    expect(div20).toBeInTheDocument()
    const svg20 = screen.getByTestId('down')
    expect(svg20).toBeInTheDocument()
    userEvent.click(div20)
    /*for(var i = 0; i < 24; i++)
    {
      const img21 = screen.getByAltText(RegExp(`(?<!.)${i} photo(?!.)`, "i"))
      expect(img21).toBeInTheDocument()
      expect(img21.closest('a')).toHaveAttribute('href', replace_text(bulguksa.first_card.relimg.hrefs[i]))
    }*/
    const div21 = screen.getByText(/(?<!.)펼쳐보기/i)
    expect(div21).toBeInTheDocument()
    const svg21 = screen.getByTestId('down')
    expect(svg21).toBeInTheDocument()
    userEvent.click(div21)
    /*for(var i = 0; i < 30; i++)
    {
      const img22 = screen.getByAltText(RegExp(`(?<!.)${i} photo(?!.)`, "i"))
      expect(img22).toBeInTheDocument()
      expect(img22.closest('a')).toHaveAttribute('href', replace_text(bulguksa.first_card.relimg.hrefs[i]))
    }*/
    const div22 = screen.getByText(/(?<!.)접기/i)
    expect(div22).toBeInTheDocument()
    const svg22 = screen.getByTestId('up')
    expect(svg22).toBeInTheDocument()
    userEvent.click(div22)
    /*for(var i = 0; i < 12; i++)
    {
      const img23 = screen.getByAltText(RegExp(`(?<!.)${i} photo(?!.)`, "i"))
      expect(img23).toBeInTheDocument()
      expect(img23.closest('a')).toHaveAttribute('href', replace_text(bulguksa.first_card.relimg.hrefs[i]))
    }*/
    const div23 = screen.getByText(/(?<!.)펼쳐보기/i)
    expect(div23).toBeInTheDocument()
    const svg23 = screen.getByTestId('down')
    expect(svg23).toBeInTheDocument()
  })
})
