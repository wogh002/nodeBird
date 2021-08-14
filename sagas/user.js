import { all, fork, put, takeLatest, delay } from 'redux-saga/effects';
// 제너레이터 아님 주의(X)
// const logInAPI = (data) => {
//     return axios.post('/api/login', data);
// };
// const logOutAPI = () => {
//     return axios.post('/api/logout');
// }
function* logIn(action) {
    //login요청 실패염려 때문에 try{} catch();
    try {
        // const result = yield call(loginAPI, action.data);
        yield delay(1000);
        yield put({
            type: "LOG_IN_SUCCESS",
            data:action.data
        });
    }
    catch (err) {
        yield put({
            type: "LOG_IN_FAILURE",
            data: err.response.data
        })
    }
}
function* logOut() {
    try {
        // const result = yield call(logOutAPI);
        yield delay(1000);
        yield put({
            type: "LOG_OUT_SUCCESS",
        });
    }
    catch (err) {
        yield put({
            type: "LOG_OUT_FAILURE",
            data: err.response.data
        })
    }
}
//비동기 액션 크리에이터 (이벤트리스너 처럼 생각)
function* watchLogIn() {
    yield takeLatest('LOG_IN_REQUEST', logIn);
}
function* watchLogOut() {
    yield takeLatest("LOG_OUT_REQUEST", logOut);
}
export default function* userSaga() {
    yield all([
        fork(watchLogIn),
        fork(watchLogOut),
    ])
}