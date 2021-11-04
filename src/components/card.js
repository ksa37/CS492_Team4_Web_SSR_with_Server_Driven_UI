import React from 'react'
import styles from './card.module.css'
import Image from "next/image"
import { Divider } from 'semantic-ui-react'


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

export default function Card() {    
    return (
        <div className={styles.post}> 
            {/* {(props.publisher_image === "" || props.publisher_image === null) ? 
            <br></br>
            // : <img src={props.publisher_image} width="100%" alt="shared-diary-post-card" />}
            : <img src={props.publisher_image} width="100%" />} */}
            <div className={styles.publishInfo}>
                <Image className={styles.publisherImg}
                    src='/images/news_publisher_logos/BTN.jpg'
                    width={24}
                    height={24}
                    layout='fixed'
                    objectFit='contain'
                />
                <div className={styles.publisher}>BTN불교TV</div>
                <div className={styles.date}>7시간 전</div>
                <br></br>
            </div>
            <div className={styles.title}>불국사, 신라불교 최초 공인한 법흥왕 기려..다례재 봉행</div>
            <div className={styles.contentsInfo}>
                <div className={styles.contents}>신라시대 불교를 공인한 법흥왕을 기리는 추모 다례재가 오늘 불국사 신도회 주최로 경주 코모도 호텔 잔디광장에서 봉행됐습니다. 이영숙 / 불국사 신도회장 (신라불교를 최초 공인한 임금으로서 우리들은 그 동안 그 크신 공헌을 까맣게 잊고 살아오지 않았나 반성하며...</div>
                <Image className={styles.contentsImg}
                    src="/images/news_images/BTN_1.jpg"
                    width={88}
                    height={88}
                    layout='fixed'
                    objectFit='contain'
                /> 
            </div>
            {/* <Divider horizontal></Divider> */}
            <hr class="solid"></hr>
        </div>
    )
}