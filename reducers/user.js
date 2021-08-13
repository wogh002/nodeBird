//노예이름
const LOG_IN_REQUEST = "LOG_IN";
const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
const LOG_IN_FAILURE = "LOG_IN_FAILURE";
const LOG_OUT_REQUEST = "LOG_OUT";
const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";
//노예 생성함수
export const loginRequestAction = (data) => ({ type: LOG_IN_REQUEST, data });
export const loginSuccessAction = (data) => ({ type: LOG_IN_SUCCESS, data });
export const loginFailureAction = (data) => ({ type: LOG_IN_FAILURE, data });
export const logoutRequestAction = () => ({ type: LOG_OUT_REQUEST });
export const logoutSuccessAction = (data) => ({ type: LOG_OUT_SUCCESS, data });
export const logoutFailureAction = () => ({ type: LOG_OUT_FAILURE });

//노예 생성 함수 return 함수
export const loginAction = (data) => {
    return (dispatch,getState) => {
        const state = getState();
        dispatch(loginRequestAction(data));
        axios.post('/api/login')
            .then((result) => {
                dispatch(loginSuccessAction(result.data))
            })
            .catch((e) => {
                dispatch(loginFailureAction(e))
            })
    }
}


export const initalState = {
    isLoggedIn: false,
    me: null,
    signUpData: {},
    loginData: {},
}

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case LOG_IN_REQUEST:
            return {
                ...state,
                isLoggedIn: true,
                me: action.data,
            }
        case LOG_OUT_REQUEST:
            return {
                ...state,
                isLoggedIn: false,
                me: null,
            }
        default: return state;
    }
}
export default reducer;