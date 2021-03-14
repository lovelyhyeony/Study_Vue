// 메소드와 url 을 사용해 용도를 구별하는
// Restful API로 많이 사용
import axios from 'axios';

let baseUrl = '';

// Http 클래스에서 사용하는
// axios를 사용하기 위해
// npm install axios --save-dev
// --save-dev (axios 패키지 설치함)
/**
 * Http 클래스는 push나 delete같이 구버전 브라우저에서
 * 지원하지 않는 메소드는 hidden input에 메소드를 담아
 * post로 보내는 식의 방식을 많이 사용하기 때문에
 * 이런 환경을 지원하고 ajax호출 시 에러처리들을 한곳에 모아서
 * 할 수 있는 기반을 만들기 위한 클래스
 */
class Http {
    // parseUrl이라는
    static parseUrl(url) {
        // baseUrl과 넘겨받을 url 연결해서
        // api서버를 별도로 운영할 경우 해당 주소로 바꿔주는 메소드 구현
        return `${baseUrl}/${url}`;
    }

    // get
    static get(url, data = null, config = {}) {
        if (data !== null) {
            config['params'] = data;
        }

        return axios
            .get(this.parseUrl(url), config)
            .catch(error => {
                return Promise.reject(error.response);
            });
    }

    // post
    static post(url, data, cofig = null) {
        return axios
            .post(this.parseUrl(url), data, config)
            .catch(error => {
                return Promise.reject(error.response);
            });
    }
    // >> get, post axios에서 제공하는걸 그대로 사

    // update
    static update(url, data = {}, config = null) {
        data['_method'] = 'put';
    }

    // destroy
    // get, post, update, destroy 메소드를 구현해서
    // 넘겨받은 데이터 값을 가지고 에이잭스를 호출하는 기능 구현
    static destroy(url, data = {}, config = null) {
        data['_method'] = 'delete';

        return axios
            .post(this.parseUrl(url), data, config)
            .catch(error => {
                return Promise.reject(error.response);
            });
    }

    // >> update, destroy : 라라벨이라는 php 프레임워크
    // 라라벨은 구버전 브라우저에서 지원하지 않는 메소드를
    // _method라는 이름에 담아 post로 넘겨서 사용해서
    // data['_method'] = 'delete' 이렇게 만들어 줌
    // (이부분은 내가 사용하는 백엔드 프레임워크에 맞춰서 사용하면 됌)
}