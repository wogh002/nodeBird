import { HYDRATE } from "next-redux-wrapper";
import user from './user';
import post from './post';
import { combineReducers } from "redux";
//HYDRATE는 next-redux-wrapper를 쓸 때 필요한 액션인데요. 
//HYDRATE는
// 리엑트에서 서버사이드 렌더링을 실행한 HTML 결과물을 받아온 뒤, 
//브라우저에서 이것을 다시 리액트 트리에 맞게 파싱하는 행위이다.

//불변객체 -> 객체를 참조해서 수정 하면 안된다. -->교체 가능 read만 가능.


//다른 컴포넌트에서 getServerSideProps 해준 정보 HYDRATE에 있다.
// const rootReducer = combineReducers({
//     index: (state = {}, action) => {
//         switch (action.type) {
//             case HYDRATE:
//                 console.log('HYDRATE', action);
//                 return { ...state, ...action.payload }
//             default: return state;
//         }
//     },
//     user,
//     post
// });

//reducer는 (이전상태,액션)=>return 다음상태로 교체
//next.js에서 생성한 redux store와 client에서 생성한 redux store는 다르기 때문에 이 둘을 합쳐야 한다.
const rootReducer = (state, action) => {
    switch (action.type) {
        case HYDRATE: {
            console.log("HYDRATE", action);
            return action.payload;
        }
        default: {
            const combinedReducer = combineReducers({
                user,
                post,
            })
            return combinedReducer(state, action);
        }
    }
}
export default rootReducer;