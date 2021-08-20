//더미데이터 함수 : 클라->서버 요청 하고 응답받은 결과 
const dummyUser = (data) => ({
    //사용유저 한명에 대한 정보들! 받아옴!
    ...data, //...data 에 email,password 있음
    nickname: '태호찡',
    id: 1, //사용자 ID
    Posts: [{ id: 1 }], //내가 작성한 게시글 
    Followings: [{ nickname: "재호찡" }, { nickname: "상원찡" }, { nickname: "제로초" }],
    Followers: [{ nickname: "상원찡" }, { nickname: "재호찡" }],
});
//노예이름
export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";

export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

export const CHANGE_NICKNAME_REQUEST = "CHANGE_NICKNAME_REQUEST";
export const CHANGE_NICKNAME_SUCCESS = "CHANGE_NICKNAME_SUCCESS";
export const CHANGE_NICKNAME_FAILURE = "CHANGE_NICKNAME_FAILURE";

export const FOLLOW_REQUEST = "FOLLOW_REQUEST";
export const FOLLOW_SUCCESS = "FOLLOW_SUCCESS";
export const FOLLOW_FAILURE = "FOLLOW_FAILURE";

export const UNFOLLOW_REQUEST = "UNFOLLOW_REQUEST";
export const UNFOLLOW_SUCCESS = "UNFOLLOW_SUCCESS";
export const UNFOLLOW_FAILURE = "UNFOLLOW_FAILURE";

//post 에서 add POST 했을 때 user me 의 Posts(내가 작성한 게시글)에 추가해줘야한다.
export const ADD_POST_TO_ME = "ADD_POST_TO_ME";
export const REMOVE_POST_OF_ME = "REMOVE_POST_OF_ME";

//노예 생성함수
//재사용 할 거면 동적으로 생성하자.
export const loginRequestAction = (data) => ({ type: LOG_IN_REQUEST, data });
export const logoutRequestAction = () => ({ type: LOG_OUT_REQUEST });

//초기 상태
export const initalState = {
    logInLoading: false, //로그인 시도중
    logInDone: false, //로그인 성공,실패
    logInError: null,
    logOutLoading: false, //로그아웃 시도중
    logOutDone: false,
    logOutError: null,
    signUpLoading: false, //회원가입 시도중
    signUpDone: false,
    signUpError: null,
    changeNicknameLoading: false, //닉네임 변경 시도중
    changeNicknameDone: false,
    changeNicknameError: null,
    me: null,
    signUpData: {},
    loginData: {},

    followLoading: false,
    followDone: false,
    followError: null,

    unFollowLoading: false,
    unFollowDone: false,
    unFollowError: null,
}
const reducer = (state = initalState, action) => {
    switch (action.type) {
        case LOG_IN_REQUEST:
            return {
                ...state,
                logInLoading: true,
                logInDone: false,
                logInError: null,
            }
        case LOG_IN_SUCCESS:
            return {
                ...state,
                logInLoading: false,
                logInDone: true,
                me: dummyUser(action.data),
            }
        case LOG_IN_FAILURE:
            return {
                ...state,
                logInLoading: false,
                logInError: action.error,
            }
        case LOG_OUT_REQUEST:
            return {
                ...state,
                logOutLoading: true,
                logOutDone: false,
                logOutError: null,
            }
        case LOG_OUT_SUCCESS:
            return {
                ...state,
                logOutLoading: false,
                logOutDone: true,
                me: null,
            }
        case LOG_OUT_FAILURE:
            return {
                ...state,
                logOutLoading: false,
                logOutError: action.error,
            }
        case SIGN_UP_REQUEST:
            return {
                ...state,
                signUpLoading: true,
                signUpDone: false,
                signUpError: null,
            }
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                //더미데이터 추가해야됌
                me: dummyUser(action.data),
                signUpLoading: false,
                signUpDone: true,
            }
        case SIGN_UP_FAILURE:
            return {
                ...state,
                signUpLoading: false,
                signUpError: action.error,
            }
        case CHANGE_NICKNAME_REQUEST:
            return {
                ...state,
                changeNicknameLoading: true,
                changeNicknameDone: false,
                changeNicknameError: null,
            }
        case CHANGE_NICKNAME_SUCCESS:
            return {
                ...state,
                //더미데이터 추가해야됌
                changeNicknameLoading: false,
                changeNicknameDone: true,
            }
        case CHANGE_NICKNAME_FAILURE:
            return {
                ...state,
                changeNicknameLoading: false,
                changeNicknameError: action.error,
            }
        case ADD_POST_TO_ME:
            //게시글 id를 data로 받음
            return {
                ...state,
                me: {
                    ...state.me,
                    Posts: [{ id: action.data }, ...state.me.Posts],
                },
            }
        case REMOVE_POST_OF_ME:
            return {
                ...state,
                me: {
                    ...state.me,
                    Posts: state.me.Posts.filter(item => item.id !== action.data),
                },
            }
        case FOLLOW_REQUEST:
            return {
                ...state,
                followLoading: true,
                followDone: false,
                followError: null,
            }
        case FOLLOW_SUCCESS:
            return {
                ...state,
                followLoading: false,
                followDone: true,
                me: {
                    ...state.me,
                    Followings: [{ id: action.data }, ...state.me.Followings]
                }
            }
        case FOLLOW_FAILURE:
            return {
                ...state,
                followLoading: false,
                followError: action.error,
            }
        case UNFOLLOW_REQUEST:
            return {
                ...state,
                unFollowLoading: true,
                unFollowDone: false,
                unFollowError: null,
            }
        case UNFOLLOW_SUCCESS:
            return {
                ...state,
                unFollowLoading: false,
                unFollowDone: true,
                me: {
                    ...state.me,
                    Followings: state.me.Followings.filter(item => item.id !== action.data),
                }
            }
        case UNFOLLOW_FAILURE:
            return {
                ...state,
                unFollowLoading: false,
                unFollowError: action.error,
            }
        default: return state;
    }
}
export default reducer;