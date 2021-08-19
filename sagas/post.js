import axios from 'axios';
import { all, fork, call, put, take, takeEvery, takeLatest, delay } from 'redux-saga/effects';
import shortid from 'shortid';
import {
    ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE,
    ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE,
    REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, REMOVE_POST_REQUEST,
    LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE,
    generateDummyPost
} from '../reducers/post';
import { ADD_POST_TO_ME, REMOVE_POST_OF_ME } from '../reducers/user';

// const addPostAPI = (data) => {
//     return axios.post('/api/post', data);
// }
// const addCommentAPI = (data) => {
//     return axios.post('/api/post/${data.postId}/comment', data);
// }
// const removePostAPI = (data) => {
//     return axios.delete('/api/post/${data.postId}/comment', data);
// }
// const removePostAPI = (data) => {
//     return axios.delete('/api/post/${data.postId}/comment', data);
// }
// const loadPostsAPI = (data) => {
//     //     return axios.get('/api/posts', data);
//     // }


function* addPost(action) {
    try {
        //call => promise await 이라고 생각하자 
        //then 하지 않아도 알아요~
        // const result = yield call(addPostAPI, action.data);
        // redux-saga 는 여러 액션을 dispatch 할 수 있다.
        const id = shortid.generate();
        yield delay(1000);
        yield put({
            type: ADD_POST_SUCCESS,
            //더미 data :data!
            data: { 
                id,
                content: action.data,
            }
        })
        yield put({
            type: ADD_POST_TO_ME,
            data: id,
        })
    }
    catch (err) {
        yield put({
            type: ADD_POST_FAILURE,
            error: err.response.data,
        })
    }
}

function* removePost(action) {
    try {
        // const result = yield call(removePostAPI, action.data);
        yield delay(1000);
        yield put({
            type: REMOVE_POST_SUCCESS,
            //현재 데이타에 게시글 id 있음
            data: action.data,
        })
        yield put({
            type: REMOVE_POST_OF_ME,
            data: action.data,
        })
    }
    catch (err) {
        yield put({
            type: REMOVE_POST_FAILURE,
            error: err.response.data,
        })
    }
}

function* addComment(action) {
    try {
        // const result = yield call(addCommentAPI, action.data);
        yield delay(1000);
        yield put({
            type: ADD_COMMENT_SUCCESS,
            //더미 data :data!
            data: action.data,
        })
    }
    catch (err) {
        yield put({
            type: ADD_COMMENT_FAILURE,
            error: err.response.data,
        })
    }
}
function* loadPosts() {
    try {
        // const result = yield call(loadPostsAPI);
        yield put({
            type: LOAD_POST_SUCCESS,
            data: generateDummyPost(10),
        })
    }
    catch (err) {
        yield put({
            type: LOAD_POST_FAILURE,
            error: err.response.data,
        })
    }

}
function* watchAddPost() {
    yield takeLatest(ADD_POST_REQUEST, addPost);
}
function* watchRemovePost() {
    yield takeLatest(REMOVE_POST_REQUEST, removePost);
}
function* watchAddComment() {
    yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}
function* watchLoadPosts() {
    yield takeLatest(LOAD_POST_REQUEST, loadPosts);
}

export default function* postSaga() {
    yield all([
        fork(watchAddPost),
        fork(watchRemovePost),
        fork(watchAddComment),
        fork(watchLoadPosts),
    ])
}