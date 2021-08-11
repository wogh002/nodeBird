//노예이름
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";

//노예 생성함수
export const loginAction = (data) => ({ type: LOG_IN, data });
export const logoutAction = () => ({ type: LOG_OUT });

export const initalState = {
    isLoggedIn: false,
    user: null,
    signUpData: {},
    loginData: {},
}

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case LOG_IN:
            return {
                ...state,
                isLoggedIn: true,
                user: action.data,
            }
        case LOG_OUT:
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            }
        default: return state;
    }
}
export default reducer;