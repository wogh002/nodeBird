import shortId from 'shortid';

const dummyPost = (data) => ({
    id: data.id, //게시글 ID
    content: data.content, //게시글 내용
    User: { //게시글 작성한 유저 정보 (id,닉네임)
        id: 1,
        nickname: '더미포스트에 있는 닉네임 제로초',
    },
    Images: [],
    Comments: [],
})
const dummyComment = (data) => ({
    id: shortId.generate(), //댓글 ID
    content: data,
    User: { //댓글 쓴 유저 정보
        id: 1,
        nickname: '재호쨩',
    },
});

//노예이름
export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

export const REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
export const REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
export const REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE";

export const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";

//노예 생성함수
//동적으로 생성하는건 재사용가능성이 높은것들.
export const addPostRequestAction = (data) => ({ type: ADD_POST_REQUEST, data });
export const addCommentRequestAction = (data) => ({ type: ADD_COMMENT_REQUEST, data });

export const initalState = {
    //더미데이터를 만들자 
    // 서버쪽에서 데이터를 나한테 어떻게 보낼건지 미리 물어보자.
    //id content 이런건 소문자인데  -> 게시글(post)자체의 속성
    //User,Images,Comments 는 왜 대문자냐?
    //DB 시퀄라이즈랑 관계가 있음 
    //id content 는 게시글 자체의 속성이다.
    //User,Images,Comments 정보(post) 와 다른정보와의 관계가 있으면 대문자로
    mainPosts: [{
        //게시글 id
        id: 1,
        content: "첫 번째 게시글 #해시태그 #익스프레스",
        User: {
            //게시글(post) 작성자한 유저 정보 -> id ,닉네임 
            id: 1,
            nickname: '제로초',
        },
        Images: [
            {
                id: shortId.generate(),
                src: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA3MzBfODMg%2FMDAxNjI3NjExMjY2NTc4.6y1YAkF-z652ZcMud-GPwH3JimVpuMSLBCwxNZ77NDgg.G2mlr1CY_cGxdszrCWU7sQAWDwmZjelpBCbskEh3zv8g.JPEG.hdglbys%2F21%25A3%25AD07%25A3%25AD30%25A3%25AD09%25A3%25AD37%25A3%25AD52%25A3%25AD877%25A3%25DFdeco.jpg&type=a340',
            },
            {
                id: shortId.generate(),
                src: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA3MzBfODMg%2FMDAxNjI3NjExMjY2NTc4.6y1YAkF-z652ZcMud-GPwH3JimVpuMSLBCwxNZ77NDgg.G2mlr1CY_cGxdszrCWU7sQAWDwmZjelpBCbskEh3zv8g.JPEG.hdglbys%2F21%25A3%25AD07%25A3%25AD30%25A3%25AD09%25A3%25AD37%25A3%25AD52%25A3%25AD877%25A3%25DFdeco.jpg&type=a340',
            },
            {
                id: shortId.generate(),
                src: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA3MzBfODMg%2FMDAxNjI3NjExMjY2NTc4.6y1YAkF-z652ZcMud-GPwH3JimVpuMSLBCwxNZ77NDgg.G2mlr1CY_cGxdszrCWU7sQAWDwmZjelpBCbskEh3zv8g.JPEG.hdglbys%2F21%25A3%25AD07%25A3%25AD30%25A3%25AD09%25A3%25AD37%25A3%25AD52%25A3%25AD877%25A3%25DFdeco.jpg&type=a340',
            }
        ],
        Comments: [
            {
                id: shortId.generate(),
                content: '우와 개정판이 나왔군요~',
                User: {
                    id: shortId.generate(),
                    nickname: 'nero',
                },
            },
            {
                id: shortId.generate(),
                content: '이거 참 신기한 댓글이군요',
                User: {
                    id: shortId.generate(),
                    nickname: 'hoya',
                },

            },
        ]
    }],
    //이미지 업로드하면 경로 쌓임 imagePaths 에 
    imagePaths: [],
    addPostLoading: false,
    addPostDone: false,
    addPostError: null,
    removePostLoading: false,
    removePostDone: false,
    removePostError: null,
    addCommentLoading: false,
    addCommentDone: false,
    addCommentError: null,

}
const reducer = (state = initalState, action) => {
    switch (action.type) {
        case ADD_POST_REQUEST: {
            return {
                ...state,
                addPostLoading: true,
                addPostDone: false,
                addPostError: null,
            }
        }
        case ADD_POST_SUCCESS:
            return {
                ...state,
                //더미데이터 클라->서버 요청하고 응답의 값
                mainPosts: [dummyPost(action.data), ...state.mainPosts],
                addPostLoading: false,
                addPostDone: true,
            }
        case ADD_POST_FAILURE:
            return {
                ...state,
                addPostLoading: false,
                addPostError: action.error
            }
        case REMOVE_POST_REQUEST: {
            return {
                ...state,
                removePostLoading: true,
                removePostDone: false,
                removePostError: null,
            }
        }
        case REMOVE_POST_SUCCESS:
            return {
                ...state,
                //action.data에는 현재 삭제버튼 누른 게시글 id 들어있음
                mainPosts: state.mainPosts.filter(item => item.id !== action.data),
                removePostLoading: false,
                removePostDone: true,
            }
        case REMOVE_POST_FAILURE:
            return {
                ...state,
                removePostLoading: false,
                removePostError: action.error
            }
        case ADD_COMMENT_REQUEST:
            return {
                ...state,
                addCommentLoading: true,
                addCommentDone: false,
                addCommentError: null,
            }
        case ADD_COMMENT_SUCCESS:
            //현재 action.data => 게시글 id, 유저 id , 댓글 내용 있음
            //불변성을 지켜줘야한다 ...
            //불변성의 핵심 은 ★
            // 바뀌는 것만 새로운 객체로 교체한다. 나머지는 참조를 유지한다.
            //게시글은 새로 쓸때마다 새로 객체 추가가된다 -> mainPosts: [dummyPost(action.data), ...state.mainPosts],

            //목표 : 게시글에 있는 댓글에 댓글 내용을 추가해야한다.
            //1.댓글 객체에 접근하려면 게시글을 먼저 찾고 접근해야한다 (게시글 id를 통해서 찾을거임)
            //index 는 0번지부터시작. -> 내가 1번게시글에 작성했다치면 , 인덱스는 0 
            const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId);
            //2.해당 게시글 get
            const post = { ...state.mainPosts[postIndex] };
            //3.해당 게시글에 댓글내용 추가
            post.Comments = [dummyComment(action.data.content), ...post.Comments];
            //4.전체 게시글 구해오기
            const mainPosts = [...state.mainPosts];
            //5.전체 게시글에 get한 해당 게시글 추가
            mainPosts[postIndex] = post;
            return {
                ...state,
                //6.추가
                mainPosts,
                addCommentLoading: false,
                addCommentDone: true,
            }
        case ADD_COMMENT_FAILURE:
            return {
                ...state,
                addCommentLoading: false,
                addCommentError: action.error
            }
        default: return state;
    }


}
export default reducer;