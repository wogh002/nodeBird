import { createWrapper } from "next-redux-wrapper";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers";
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from "@redux-saga/core";
//composeWithDevTools 개발자 도구에서 보이게
//react에 redux를 붙이는건 react app에서는 단 하나의 redux store만 존재하므로 어렵지 않다.
// next-redux-wrapper는 유저가 페이지를 요청할때마다 리덕스 스토어를 생성해야 하기 때문에 configureStore함수를 정의해서 넘기는것이다.
const loggerMiddleware = ({ dispatch, getState }) => (next) => (action) => {
    console.log(action);
    // next 는 액션을 다음 미들웨어에게 전달하는 함수입니다. next(action) 이런 형태로 사용합니다.
    // 만약 다음 미들웨어가 없다면 리듀서에게 액션을 전달해줍니다. 
    //만약에 next 를 호출하지 않게 된다면 액션이 무시처리되어 리듀서에게로 전달되지 않습니다.
    return next(action);
}
const configureStore = () => {
    //dispatch() 후 사가 or 썽크 호출됌
    //middleware란? 리덕스의 기능을 업글!
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware, loggerMiddleware]; //사가 or 썽크 (미들웨어)넣자 
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