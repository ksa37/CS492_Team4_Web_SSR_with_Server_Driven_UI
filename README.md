# CS492_Team4_Web_SSR_with_Server_Driven_UI


## Basic info

- **Your name**: 김민형, 김수아, 박지윤, 최지호
- **Your email**: (김민형 이메일), (김수아 이메일), wldbs0507@kaist.ac.kr, (최지호 이메일)

## Index of content

1. [Brief overview](#brief-overview)
2. [Detailed description](#detailed-description)
3. [Resources](#resources)
4. [Credits](#credits)
5. [License](#license)

## Brief overview

설명

### How to run project
### Install
```
$ git clone http://git.prototyping.id/20160272/Project.git
$ cd CS492_Team4_Web_SSR_with_Server_Driven_UI
$ npm install 
```
Clone the project and install all packages required for this project
### Start & Debug
```
$ cd web_server
$ npm run web

$ cd ..
$ cd db_server
$ npm run json

$ cd ..
$ cd render_server
$ npm run dev
```
Runs the app in the development mode.
Open [https://localhost:4000](https://localhost:4000) to view it in the browser.

### Build
```
(in render_server directory)
$ npm run build
$ npm run start
```
Open Hosting URL: [https://localhost:4000](https://localhost:4000) 

---
## Detailed description
### How to Use 
1. ```keyword 선택``` 

설명설명 ?id=Bulguksa
select box

2. ```view 선택```

 설명 ?views[]=influencer&?views[]=review
influencer
view (review)
news
wiki
image
basic


## Structure
webserver renderserver 구조 이미지 
간단하게 설명

## Resources

1. [Demo Video](https://) youtube link

## Credits
네이버 공유하기
next js document
unit test

## License

 MIT License   

Copyright (c) 2021 Jiyun Park
     
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
     
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
     
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.