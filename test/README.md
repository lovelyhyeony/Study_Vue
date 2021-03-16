# 2021-03-15 Vue.js 입문
- 참고 링크 : [개발자의품격](https://www.youtube.com/watch?v=sqH0u8wN4Rs&list=LL&index=1)
  
## Content
- Vue.js 는 **컴포넌트(Component)**기반 **SPA(Single Page Application)**을 구현할 수 있도록 도와주는 웹 프론트엔드 프레임워크 중 하나
- @vue/cli
- **Router**를 통해 호출할 컴포넌트를 다르게 바꾸는 방법
  ```
    routes: [
    { path: "/", component: Home },
    { path: "/about", component: About }
  ]
  ```
- Vue Component내에서 데이터 처리를 다루는 방법
- Methods 사용법 
- Vue 인스턴스가 생성이되고 소멸이 될때까지 **라이프사이클 이벤트 훅**
- 데이터 바인딩 **v-model**
- **@이벤트**를 통해 method 호출
- **v-if, v-show** : 화면 엘리먼트를 보여줄 수 있다
- **watch** : 실시간 데이터 변화 감지