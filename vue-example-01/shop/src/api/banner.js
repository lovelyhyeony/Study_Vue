import http from './http';

export default  {
    // getMainSlideBanners()메소드를
    // async로 만들어 http클래스의 get메소드로 백엔드에서 데이터를 가져옴
    /**
     * async : ES7에 추가된 비동기 함수 선언 키워
     * ES6에 추가된 Promise가 조금 더 사용하기 편하게 바뀐 것
     */
    async getMainSlideBanners() {
        return http.get('api/banner.json');
    }
}