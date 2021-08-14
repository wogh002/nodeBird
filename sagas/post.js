import { all, fork, call, put, take, takeEvery, takeLatest, delay } from 'redux-saga/effects';

// const addPostAPI = (data) => {
//     return axios.post('/api/post', data);
// }

function* addPost(action) {
    try {
        // const result = yield call(addPostAPI, action.data);
        yield put({
            type: "ADD_POST_SUCCESS",
        })
    }
    catch (err) {
        yield put({
            type: "ADD_POST_FAILURE",
            data: err.response.data,
        })
    }
}

function* watchAddPost() { 
    yield takeLatest("ADD_POST_REQUEST", addPost);
}

export default function* postSaga() {
    yield all([
        fork(watchAddPost),
    ])
}