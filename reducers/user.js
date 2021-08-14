//노예이름
const LOG_IN_REQUEST = "LOG_IN_REQUEST";
const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
const LOG_IN_FAILURE = "LOG_IN_FAILURE";
const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";
//노예 생성함수
export const loginRequestAction = (data) => ({ type: LOG_IN_REQUEST, data });
export const logoutRequestAction = () => ({ type: LOG_OUT_REQUEST });

//노예 생성 함수 return 함수
// export const loginAction = (data) => {
//     return (dispatch, getState) => {
//         const state = getState();
//         dispatch(loginRequestAction(data));
//         axios.post('/api/login')
//             .then((result) => {
//                 dispatch(loginSuccessAction(result.data))
//             })
//             .catch((e) => {
//                 dispatch(loginFailureAction(e))
//             })
//     }
// }


export const initalState = {
    isLoggingIn: false,//로그인 시도중
    isLoggedIn: false,
    isLoggingOut: false,//로그아웃 시도중 
    //시도중이 ture 면 로딩창을 띄울꺼임
    me: null,
    signUpData: {},
    loginData: {},
}

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case LOG_IN_REQUEST:
            return {
                ...state,
                isLoggingIn: true,
            }
        case LOG_IN_SUCCESS:
            return {
                ...state,
                isLoggingIn: false,
                isLoggedIn: true,
                me: { ...action.data, nickname: 'zerocho' },
            }
        case LOG_IN_FAILURE:
            return {
                ...state,
                isLoggingIn: false,
                isLoggedIn: false,
            }
        case LOG_OUT_REQUEST:
            return {
                ...state,
                isLoggingOut: true,
            }
        case LOG_OUT_SUCCESS:
            return {
                ...state,
                isLoggingOut: false,
                isLoggedIn: false,
                me: null,
            }
        case LOG_OUT_FAILURE:
            return {
                ...state,
                isLoggingOut: false,
            }
        default: return state;
    }
}
export default reducer;