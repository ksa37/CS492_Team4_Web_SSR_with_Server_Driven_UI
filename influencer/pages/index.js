import Head from 'next/head'

const dummydata = {
  "keyword": "불국사",
  "view": [ "basicInfo", "photo", "news" ],
  "basicInfo": {
                "지정종목": "사적",
                "지정번호": "제502호"
                },
  "photo": [ "url_1", "url_2", "url_3" ],
  "news": [
            { 
              "title": "[포토뉴스] 만개한 경주 불국사 겹벚꽃",
              "publisher": "영남일보",
              "date": "2021.04.16",
              "contents": "16일 경북 경주시 진현동 불국사 주차장에서 경내로 오르는 야트막한 둔덕에 자리한 겹벚꽃 군락에 꽃이 만개해 시민들의 발길을 붙잡고 있다.",
              "link": "url_4",
            }
          ],
  "influencer": [
    {
      "name": "influencer1",
      "fans": 11111,
      "type": "여행 전문 블로거",
      "preference": "자연 경관 선호",
      "place": "국내선호",
      "images": ["url1", "url2", "url3"]
    },
    {
      "name": "influencer2",
      "fans": 22222,
      "type": "여행 전문 블로거",
      "preference": "자연 경관 선호",
      "place": "국내선호",
      "images": ["url1", "url2", "url3"]
    },
    {
      "name": "influencer3",
      "fans": 33333,
      "type": "여행 전문 블로거",
      "preference": "자연 경관 선호",
      "place": "국내선호",
      "images": ["url1", "url2", "url3"]
    },
    {
      "name": "influencer4",
      "fans": 44444,
      "type": "여행 전문 블로거",
      "preference": "자연 경관 선호",
      "place": "국내선호",
      "images": ["url1", "url2", "url3"]
    },
    {
      "name": "influencer5",
      "fans": 55555,
      "type": "여행 전문 블로거",
      "preference": "자연 경관 선호",
      "place": "국내선호",
      "images": ["url1", "url2", "url3"]
    }
                ]
        }

export default function Home() {
  return (
    <div>
      <Head>
        <title> Bootstrap </title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"></link>
      </Head>

      {/* <h1> Next.js </h1>
      <button type="button" className ="btn btn-primary">Primary</button> */}
      {console.log(dummydata['influencer'])}

      {dummydata['influencer'].map((each) => 
      <div className = "container-fluid" key = {each['name']}>
        <div className="row">
        <div className="col-md-4" className="name"> {each['name']} </div>
        <div className="col-md-3" className="fans"> {each['fans']} </div>
        </div>
        <div className="row">
        <div className="col-sm-2.5" className="type"> {each['type']} </div>
        <div className="col-sm-2" className="place"> {each['place']} </div>
        </div>
        <div className="row">
        <div className="col-sm-1.5" className="preference"> {each['preference']} </div>
        </div>
        <div className="row">
        {each['images'].map((img) => <div className="col-sm-3" className = "images"> {img} </div>)}
        </div>
      </div>)}
    </div>
  )
}
