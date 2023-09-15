## API 발급
https://www.themoviedb.org/ 

회원가입 후 API 발급

<br>

Get Movie by Latest

https://www.themoviedb.org/3/movie/latest?api_key=<<api_key>>&language=en-US

Get Movie Detail

https://www.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

Get Movie Reviews

https://www.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1

Get Trending

https://www.themoviedb.org/3/movie/latest?api_key=<<api_key>>&language=en-US

이미지 가져오기

https://image.tmdb.org/t/p/<<이미지 사이즈>>/<<유니크한 이미지 이름>>

<br><br>

## The Movie DB API 요청을 위한 Axios 인스턴스 생성 및 요청 보내기

### Axios

- Axios는 브라우저, Node.js를 위한 Promise API를 활용하는 HTTP 비동기 통신 라이브러리

- 백엔드와 프론트엔드가 통신을 쉽게하기 위해 Ajax와 더불어 사용

- Axios는 패치와 달리 바로 json 형식으로 받아옴

- 설치
  ```terminal
  npm install axios --save
  ```

- 요청 예시
  ```javascript
  axios.get('https://api.themoviedb.org/3/trending/all/week/')
  ```

- Axios 인스턴스 만들기
    
    - <a href='https://github.com/hwadong119/react-disney-plus-app/blob/main/src/api/axios.js'>axios.js</a>: 인스턴스 정보

    - <a href='https://github.com/hwadong119/react-disney-plus-app/blob/main/src/api/request.js'>request.js</a>: 요청 보낼 경로 정리

<br><br>

## Styled Component 

- Css-in-JS, JavaScript 파일 안에서 CSS를 처리할 수 있게 해주는 라이브러리
- https://styled-components.com/docs/basics
- 설치

  ```terminal
  # with npm
  npm install styled-components

  # with yarn
  yarn add styled-components
  ```

<br><br>

## Pending 해결 방법

아직 Response가 오지 않은 펜딩한 상태가 아닌 결과값을 받은 이후에 값을 처리해주면 됨

1. Async Request 
  .then()

2. Async Await

<br><br>

## Iframe

- HTML Inline Frame 요소이며 inline frame의 약자

- 효과적으로 다른 HTML 페이지를 현재 페이지에 포함시키는 중첩된 브라우저로 Iframe 요소를 이용하면 해당 웹 페이지 안에 어떠한 제한 없이 다른 페이지를 불러와서 삽입할 수 있음

<br><br>

