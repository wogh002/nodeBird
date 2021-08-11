//노예이름
//게시글 작성
const ADD_POST = "ADD_POST";

//노예 생성함수
export const addPost = () => ({ type: ADD_POST });

export const initalState = {
    //더미데이터를 만들자 
    // 서버쪽에서 데이터를 나한테 어떻게 보낼건지 미리 물어보자.
    //id content 이런건 소문자인데  -> 게시글(post)자체의 속성
    //User,Images,Comments 는 왜 대문자냐?
    //DB 시퀄라이즈랑 관계가 있음 
    //id content 는 게시글 자체의 속성이다.
    //User,Images,Comments 정보(post) 와 다른정보와의 관계가 있으면 대문자로
    mainPosts: [{
        //게시글의 id ,내용
        id: 1,
        content: "첫 번째 게시글 #해시태그 #익스프레스",
        User: {
            //게시글 작성자의 정보 -> id ,닉네임 
            id: 'ekem159',
            nickname: '제로초',
        },
        Images: [
            {
                src: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA3MzBfODMg%2FMDAxNjI3NjExMjY2NTc4.6y1YAkF-z652ZcMud-GPwH3JimVpuMSLBCwxNZ77NDgg.G2mlr1CY_cGxdszrCWU7sQAWDwmZjelpBCbskEh3zv8g.JPEG.hdglbys%2F21%25A3%25AD07%25A3%25AD30%25A3%25AD09%25A3%25AD37%25A3%25AD52%25A3%25AD877%25A3%25DFdeco.jpg&type=a340',
            },
            {
                src: 'heeeeee',
            },
            {
                src: 'hhhhhhhhhhhhh',
            }
        ],
        Comments: [
            {
                User: {
                    nickname: 'nero',
                },
                content: '우와 개정판이 나왔군요~',
            },
            {
                User: {
                    nickname: 'hero',
                },
                content: '얼른  !!!! 사고싶어요~!',
            }
        ]
    }],
    //이미지 업로드하면 경로 쌓임 imagePaths 에 
    imagePaths: [],
    postAdded: false,
}
const dummyPost = {
    id: 2,
    content: '더미데이터',
    User: {
        id: 1,
        nickname: '제로초',
    },
    Images: [],
    Comments: [],
}
const reducer = (state = initalState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts],
                postAdded: true,
            }
        }
        default: return state;
    }
}
export default reducer;