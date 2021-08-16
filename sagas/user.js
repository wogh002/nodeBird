import { all, fork, put, takeLatest, delay } from 'redux-saga/effects';
import {
    LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE,
    LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE,
    SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE,
    FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE,
    UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE,
} from '../reducers/user';

// 제너레이터 아님 주의(X)
// const logInAPI = (data) => {
//     return axios.post('/api/login', data);
// };
// const logOutAPI = () => {
//     return axios.post('/api/logout');
// }
//const signUpAPI = ()=>{
//return axios.post('/api/signUp');
//}
function* logIn(action) {
    //login요청 실패염려 때문에 try{} catch();
    try {
        // const result = yield call(loginAPI, action.data);
        yield delay(1000);
        yield put({
            type: LOG_IN_SUCCESS,
            data: action.data
        });
    }
    catch (err) {
        yield put({
            type: LOG_IN_FAILURE,
            error: err.response.data
        })
    }
}
function* logOut() {
    try {
        // const result = yield call(logOutAPI);
        yield delay(1000);
        yield put({
            type: LOG_OUT_SUCCESS,
        });
    }
    catch (err) {
        yield put({
            type: LOG_OUT_FAILURE,
            error: err.response.data
        })
    }
}

function* signUp(action) {
    try {
        // const result = yield call(signUpAPI);
        yield delay(1000);
        yield put({
            type: SIGN_UP_SUCCESS,
            data: action.data,
            // data: result.data,
        });
    }
    catch (err) {
        yield put({
            type: SIGN_UP_FAILURE,
            error: err.response.data
        })
    }
}

//비동기 액션 크리에이터 (이벤트리스너 처럼 생각)
function* watchLogIn() {
    yield takeLatest(LOG_IN_REQUEST, logIn);
}
function* watchLogOut() {
    yield takeLatest(LOG_OUT_REQUEST, logOut);
}
function* watchSignUp() {
    yield takeLatest(SIGN_UP_REQUEST, signUp);
}
export default function* userSaga() {
    yield all([
        fork(watchLogIn),
        fork(watchLogOut),
        fork(watchSignUp),
    ])
}