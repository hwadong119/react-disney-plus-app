# 배포

https://react-disney-plus-app-10092.web.app

<br><br>


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

## useDebounce Custom Hooks 만들기

- debounce function은 사용자가 미리 결정된 시간 동안 타이핑을 멈출 때까지 keyup 이벤트의 처리를 지연시킴

- 이렇게 하면 UI코드가 모든 이벤트를 처리할 필요가 없고 서버로 전송되는 API 호출 수도 크게 줄어듦

- <a href='https://github.com/hwadong119/react-disney-plus-app/blob/main/src/hooks/useDebounce.js'>src/hooks/useDebounce.js</a>

<br><br>

## useRef

- 특정 DOM을 선택할 때 사용하는 React Hooks


<br><br>

## Firebase를 이용해서 배포하기

설치

```terminal
npm install -g firebase-tools
```

firebase 로그인

```terminal
firebase login
```

빌드

```terminal
npm run build
```

init

```terminal
firebase init
```

Hosting 선택

Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys

```terminal
react-disney-plus-app % firebase init

     ######## #### ########  ######## ########     ###     ######  ########
     ##        ##  ##     ## ##       ##     ##  ##   ##  ##       ##
     ######    ##  ########  ######   ########  #########  ######  ######
     ##        ##  ##    ##  ##       ##     ## ##     ##       ## ##
     ##       #### ##     ## ######## ########  ##     ##  ######  ########

You're about to initialize a Firebase project in this directory:

...

? Which Firebase features do you want to set up for this directory? Press Space to select features, then Enter to confirm your choices. (Press <space> to select, <a> to toggle all, <i> to invert selection, and
 <enter> to proceed)
❯◯ Realtime Database: Configure a security rules file for Realtime Database and (optionally) provision default instance
 ◯ Firestore: Configure security rules and indexes files for Firestore
 ◯ Functions: Configure a Cloud Functions directory and its files
 ◯ Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys
 ◯ Hosting: Set up GitHub Action deploys
 ◯ Storage: Configure a security rules file for Cloud Storage
 ◯ Emulators: Set up local emulators for Firebase products

  
```

firebase 콘솔에서 프로젝트를 만들었기 때문에

Use an existing project 선택

```terminal
? Please select an option: (Use arrow keys)
❯ Use an existing project 
  Create a new project 
  Add Firebase to an existing Google Cloud Platform project 
  Don't set up a default project 
```

만들어두었던 프로젝트 선택

(react-disney-plus-app-10092 선택)

```terminal
? Please select an option: Use an existing project
? Select a default Firebase project for this directory: (Use arrow keys)
❯ react-disney-plus-app-10092 (react-disney-plus-app) 
  todolist-88269 (todolist) 
```

옵션 입력

```terminal
? What do you want to use as your public directory? build
? Configure as a single-page app (rewrite all urls to /index.html)? Yes
? Set up automatic builds and deploys with GitHub? No
? File build/index.html already exists. Overwrite? (y/N) n
```

deploy
```terminal
firebase deploy
```

<br><br>

## 리덕스 스토어에 유저 데이터 넣어주기

- 리덕스 설치

  ```terminal
  npm install @reduxjs/toolkit react-redux redux-persist
  ```

<br><br>

## Redux-Persist

- 리덕스 스토어에 있는 State들은 페이지를 새로고침하면 초기화되는 것을 볼 수 있음 

- Redux Persist를 이용하면 페이지 새로 고침 후에도 상태를 유지할 수 있게 됨

- 설치
  ```terminal
  npm i redux-persist
  ```
- 설정