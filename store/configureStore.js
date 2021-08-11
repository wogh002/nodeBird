import { createWrapper } from "next-redux-wrapper";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers";
import { composeWithDevTools } from 'redux-devtools-extension';
//composeWithDevTools 개발자 도구에서 보이게
//react에 redux를 붙이는건 react app에서는 단 하나의 redux store만 존재하므로 어렵지 않다.
// next-redux-wrapper는 유저가 페이지를 요청할때마다 리덕스 스토어를 생성해야 하기 때문에 configureStore함수를 정의해서 넘기는것이다.
const configureStore = () => {
    //dispatch() 후 사가 or 썽크 호출됌
    const middlewares = []; //사가 or 썽크 넣자 
    //리덕스의 기능이 확장 된게 enhancer
    const enhancer = process.env.NODE_ENV === 'production'
        ? compose(applyMiddleware(...middlewares)) //배포용 
        : composeWithDevTools(applyMiddleware(...middlewares)) //개발용
    const store = createStore(rootReducer, enhancer);
    return store;
}

//createWrapper => next에 redux 추가.
const wrapper = createWrapper(configureStore, {
    debug: process.env.NODE_ENV === 'development',
});

export default wrapper;