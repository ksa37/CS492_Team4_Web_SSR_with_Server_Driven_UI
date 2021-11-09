import Head from 'next/head'
import Link from 'next/link'
import Card from '../components/card'
import styles from './news.module.css'

const dummydata = {
    "keywords": [ {
                    "keyword": "불국사",
                    "view": [ "basicInfo", "photo", "news" ],
                    "basicInfo": {
                                    "지정종목": "사적",
                                    "지정번호": "제502호" 
                                },
                    "photo": [ "url_1", "url_2", "url_3" ],
                    "news": [
                                { 
                                    "publisherURL": "http://www.btnnews.tv",
                                    "publisherImgURL": "/images/news_publisher_logos/BTN.jpg",
                                    "publisher": "BTN불교TV",
                                    "date": "7시간 전",
                                    "newsURL": "http://m.btnnews.tv/news/articleView.html?idxno=68717",
                                    "title": "불국사, 신라불교 최초 공인한 법흥왕 기려..다례재 봉행",
                                    "contents": "신라시대 불교를 공인한 법흥왕을 기리는 추모 다례재가 오늘 불국사 신도회 주최로 경주 코모도 호텔 잔디광장에서 봉행됐습니다. 이영숙 / 불국사 신도회장 (신라불교를 최초 공인한 임금으로서 우리들은 그 동안 그 크신 공헌을 까맣게 잊고 살아오지 않았나 반성하며...",
                                    "contentsImgURL": "/images/news_images/BTN_1.jpg"
                                },
                                { 
                                    "publisherURL": "http://www.btnnews.tv",
                                    "publisherImgURL": "/images/news_publisher_logos/BTN.jpg",
                                    "publisher": "BTN불교TV",
                                    "date": "7시간 전",
                                    "newsURL": "http://m.btnnews.tv/news/articleView.html?idxno=68717",
                                    "title": "불국사, 신라불교 최초 공인한 법흥왕 기려..다례재 봉행",
                                    "contents": "신라시대 불교를 공인한 법흥왕을 기리는 추모 다례재가 오늘 불국사 신도회 주최로 경주 코모도 호텔 잔디광장에서 봉행됐습니다. 이영숙 / 불국사 신도회장 (신라불교를 최초 공인한 임금으로서 우리들은 그 동안 그 크신 공헌을 까맣게 잊고 살아오지 않았나 반성하며...",
                                    "contentsImgURL": "/images/news_images/BTN_1.jpg"
                                }
                            ]
                        },
        {
            "keyword": "모가디슈"

        }
    ]
}

const newsdummy = [
    { 
        "publisherURL": "http://www.btnnews.tv",
        "publisherImgURL": "/images/news_publisher_logos/BTN.jpg",
        "publisher": "BTN불교TV",
        "date": "7시간 전",
        "newsURL": "http://m.btnnews.tv/news/articleView.html?idxno=68717",
        "title": "불국사, 신라불교 최초 공인한 법흥왕 기려..다례재 봉행",
        "contents": "신라시대 불교를 공인한 법흥왕을 기리는 추모 다례재가 오늘 불국사 신도회 주최로 경주 코모도 호텔 잔디광장에서 봉행됐습니다. 이영숙 / 불국사 신도회장 (신라불교를 최초 공인한 임금으로서 우리들은 그 동안 그 크신 공헌을 까맣게 잊고 살아오지 않았나 반성하며...",
        "contentsImgURL": "/images/news_images/BTN_1.jpg"
    }
]

export default function News() {
    return (
        <>
            <Head>
                <title>news</title>
            </Head>
            <div className={styles.news}>
                <hr className={styles.divider}></hr>
                <div className={styles.viewHeader}>
                    <div className={styles.viewName}>뉴스</div>
                    <div className={styles.viewOptions}>
                        <div className={styles.viewSort}>관련도순</div>
                        <div className={styles.viewSort}>최신순</div>
                    </div>
                </div>
                <hr className={styles.divider}></hr>
            </div>
            {/* {dummydata["keywords"][0]["news"][0]["publisherURL"]} */}
            {/* {newsdummy.map((news) => <Card props={news}/>)} */}
            {dummydata["keywords"][0]["news"].map((news) => <Card props={news}/>)}
            {/* <Card props = {dummydata["keywords"][0]["news"][0]}></Card> */}
            {/* <Card></Card>
            <Card></Card>
            <Card></Card> */}
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </>
    )
}