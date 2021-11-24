# 김찬우 201930207
[ 11월 17일 ]
학습내용

대체불가능토큰 NFT
좀비 그림이 억단위...

Remarkable 사용하기
```c
create-react-app 으로 markdown-editor 프로젝트 생성
component  이름을 App으로 수정하기
rendering은 index.js
remarkable 설치
react와 remarkable 임포트
```

[ 11월 10일 ]
학습내용

프로젝트 배포하기

package.json 수정
scripts에 deploy와 predeploy 추가 및 마지막 줄에 github 홈페이지 작성

```c
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "deploy": "gh-pages -d build",
    "predeploy": "npm run build"
}
```
```c
"homepage": "https://sambuka777.github.io/movie_app_2021-5"
```
npm install gh-pages,

npm run deploy

터미널에서 위와 같이 실행하면 Build 폴더 생성
homepage 접속 시 movie app 실행

오류 발생 시 해볼 것
```c
npm cache clean --force
npm rebuild
npm install
```

[ 11월 3일 ]
학습내용

영화 상세정보 기능

-history
-location
-match
-staticContext
react-router-dome 에서 route 컴포넌트가 그릴 컴포넌트에 전달한 props
route 컴포넌트가 그릴 컴포넌트에는 항상 props가 전달됨

route props에 데이터를 담아 보내기 위해 navigation 컴포넌트의 구조 바꾸기
```c
<Link to={{ pathname: '/about', state: { fromNavigation: true}}}>About</Link>
```
movie 컴포넌트에 link 컴포넌트를 추가 후
```c
<Link to={{pathname:'/movie-detail',state: {year, title,summary, poster, genres},}}>
```
코드를 작성하면 영화 카드를 누를 시 movie-detail로 이동하게 됨

Detail 컴포넌트에서 Link 컴포넌트가 보내준 영화 데이터를 확인할 수 있게 
Detail을 출력해주는 Route 컴포넌트를 App.js에 추가
```c
 <Route path="/movie-detail" component={Detail} />
 ```

리다이렉트 기능

- Detail 컴포넌트 클래스형 컴포넌트로 변경
- Detail 컴포넌트를 함수형에서 클래스형 컴포넌트로 변경한 다음 location, history 키를 구조 분해 할당 함

[ 10월 27일 ]
학습내용

라우터란 사용자가 입력한 주소를 통해 특정한 컴포넌트를 호출함

react-router-dom 설치
```c
npm install react-router-dom
```
설치 오류시 해결방법은 node_modules와 package-lock.json 파일 제거 후
```c
npm cache clean --force
npm rebuild
npm install
```

라우터를 사용할 때
```c
import {HashRouter, Route} from 'react-router-dom'
function App() {return (<HashRouter> <Route /><HashRouter>)}
```
App  컴포넌트에 다른 컴포넌트를 import 하고 path와 컴포넌트 props에 주소와 컴포넌트 전달 후 내용을 작성
```c
localhost:3000/#/(path props))
```

[ 10월 13일 ]
학습내용

- 객체의 키와 대입할 변수의 이름이 같으면 코드를 축약할 수 있다

```c
ex) this.setState({movies: movies}) -> this.setState({movies})
```
- Movie 컴포넌트

영화 데이터를 받아 관리하기 위해 prop-types 사용

  ```c
    id: PropTypes.number.isRequired
    year: PropTypes.string.isRequired
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  ```
  구조분해할당으로 this.state 의 movie를 얻어서 movie 컴포넌트에 map() 사용
   ```c
    render(){const{isLoading, movies}=this.state;
    return <div>{isLoading ? 'Loading..' : movies.map()}</div>
  ```
- App 컴포넌트에 HTML 추가

  App 컴포넌트가 반환할 JSX 바깥쪽에 추가
  ```c
  <section class = "container'>
  ```
  로딩에는
  ```c
  <div class="loader"><span class='loader-text'>
  ```
  위 코드처럼 className이 아닌 class 속성으로 지정하면 콘솔에서 오류메세지를 출력한다

  해결 : JSX에 사용한 속성중 class 속성을 className으로 사용

  
[ 10월 6일 ]
학습내용

-영화 데이터 출력
  isLoading state
    - state = {isLoading : true}
    - const {  isLoading } = this.true
    - componentDidMount(){setTimeout(()=>{this.setState({isLoading:false});},6000)} 6초뒤 loading state -> false

-axios 설치
   npm install axios (설치 확인은 package.json)

-노마드코더 영화 API를 영화 앱에서 호출
    import axios from "axios"
    componentDidMount() {
      axios.get('https://yts.mx/api/v2/list_movies.json) // axios.get 함수 인자에 url 을 전달하여 API를 호출
    }

  getMovies = () => {const movies = axios.get("http://yts-proxy.now.sh/list_movies.json");}  
  //영화 API를 사용해 getMovies() 함수를 기다린 다음, axios.get 함수가 반환한 결과를 movies에 저장하기

  getMovies에 async 붙이고, axios.get에 await 붙이기
  자바스크립트에 시간이 필요함을 알리려면 async를 ()앞에
  실제 시간이 필요한 대상인 axios.get 함수에는 await을 붙이기

- 영화 데이터 화면에 출력
getMovies = async () => {const movies = await axios.get("http://yts-proxy.now.sh/list_movies.json");console.log(movies.data.data.movies);}


[ 09월 29일 ]
학습내용

- Master branch 를 main branch로 변경
- React Project clone : 리액트 프로젝트는 설치 후 개발함
  프로젝트를 클론하여 package.json에 등록되어있는 모듈을 설치하게된다

- prop-types 적용하기
App.js 파일 맨 위에 추가

    import PropTupes from 'prop-types';

ration props를 Food 컴포넌트에 전달
Food.propType 에 객체를 적어줌

- state 정의하기
class 안에 state = { } 로 state를 정의
state는 객체 형태의 데이터이다
state를 사용하려면 반드시 class형 컴포넌트 안에서 소문자를 사용한다

- state에 count 값 추가 및 사용
state에 count키와 키값을 0으로 추가
return 함수로  count값을 반환한다 -> render 함수에서 this.state.count를 출력

[ 09월 15일 ]
학습내용

- JSX, rendering, 컴포넌트를 사용해 이미지 출력

[ 09월 08일 ]
학습내용

- react app create
- vscode 깃 연결
- package-lock-jason 삭제
- App.js , index.js 파일 수정