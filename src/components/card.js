import React from 'react'
import Link from 'next/link'
import styles from './card.module.css'
import Image from "next/image"
import MoreVertIcon from "@material-ui/icons/MoreVert";


// export default function Card(props) {    
//     return (
//         <div className="post" key={props.id}> 
//             {(props.publisher_image === "" || props.publisher_image === null) ? 
//             <br></br>
//             // : <img src={props.publisher_image} width="100%" alt="shared-diary-post-card" />}
//             : <img src={props.publisher_image} width="100%" />}
//             <div className="publisher">{props.publisher}</div>
//             <div className="date">{props.date}</div>
//             <div className="title">{props.title}</div>
//             <div className="contents">{props.contents}</div>
//             <br></br>
//             {(props.image === "" || props.image === null) ? 
//             <br></br>
//             : <img src={props.image} width="100%"/>}
//         </div>
//     )
// }

export default function Card({props}) {  
    const { publisherURL, publisherImgURL, publisher, date, newsURL, title, contents, contentsImgURL } = props
    // const data = { 
    //     "publisherURL": "http://www.btnnews.tv",
    //     "publisherImgURL": "/images/news_publisher_logos/BTN.jpg",
    //     "publisher": "BTN불교TV",
    //     "date": "7시간 전",
    //     "newsURL": "http://m.btnnews.tv/news/articleView.html?idxno=68717",
    //     "title": "불국사, 신라불교 최초 공인한 법흥왕 기려..다례재 봉행",
    //     "contents": "신라시대 불교를 공인한 법흥왕을 기리는 추모 다례재가 오늘 불국사 신도회 주최로 경주 코모도 호텔 잔디광장에서 봉행됐습니다. 이영숙 / 불국사 신도회장 (신라불교를 최초 공인한 임금으로서 우리들은 그 동안 그 크신 공헌을 까맣게 잊고 살아오지 않았나 반성하며...",
    //     "contentsImgURL": "/images/news_images/BTN_1.jpg"
    // }

    return (
        <div className={styles.postOutline}> 
            <div className={styles.post}> 
                <div className={styles.cardHeader}>
                    <div className={styles.publishInfo}>
                        {/* <Link href="http://www.btnnews.tv"> */}
                        {/* <Link href={data.publisherURL}> */}
                        <Link href={publisherURL}>
                            <a>
                            <div className={styles.publishInfo}>
                                <Image className={styles.publisherImg}
                                    // src='/images/news_publisher_logos/BTN.jpg'
                                    src={publisherImgURL}
                                    width={24}
                                    height={24}
                                    layout='fixed'
                                    objectFit='contain'
                                />
                                {/* <div className={styles.publisher}>BTN불교TV</div> */}
                                {/* <div className={styles.publisher}>{data.publisher}</div> */}
                                <div className={styles.publisher}>{publisher}</div>
                            </div>
                            </a>
                        </Link>
                        {/* <hr className={styles.verticalDivider}></hr> */}
                        <div className={styles.date}>7시간 전</div>
                        {/* <div className={styles.date}>{date}</div> */}
                    </div>
                    <MoreVertIcon className={styles.morevert}>
                    </MoreVertIcon>
                </div>
                <Link href="http://m.btnnews.tv/news/articleView.html?idxno=68717">
                {/* <Link href={newsURL}> */}
                    <a>
                        <div className={styles.title}>불국사, 신라불교 최초 공인한 법흥왕 기려..다례재 봉행</div>
                        {/* <div className={styles.title}>{title}</div> */}
                        <div className={styles.contentsInfo}>
                            <div className={styles.contents}>신라시대 불교를 공인한 법흥왕을 기리는 추모 다례재가 오늘 불국사 신도회 주최로 경주 코모도 호텔 잔디광장에서 봉행됐습니다. 이영숙 / 불국사 신도회장 (신라불교를 최초 공인한 임금으로서 우리들은 그 동안 그 크신 공헌을 까맣게 잊고 살아오지 않았나 반성하며...</div>
                            {/* <div className={styles.contents}>{contents}</div> */}
                            <Image className={styles.contentsImg}
                                src="/images/news_images/BTN_1.jpg"
                                // src={contentsImgURL}
                                width={88}
                                height={88}
                                layout='fixed'
                                objectFit='contain'
                            /> 
                        </div>
                    </a>
                </Link>
                {/* <Divider horizontal></Divider> */}
            </div>
            <hr className={styles.divider}></hr>

        </div>
    )
}