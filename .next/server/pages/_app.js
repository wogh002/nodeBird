module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\dlals\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\node-bird\\pages\\_app.jsx";
//페이지들의 공통적으로 사용되는 부분은 _app 에서 작성해서 적용시키자



 //웹팩이란 여러개의 파일을 하나의 js파일로 합쳐준다.
//next의 웹팩이 css를 보는 순간
// css를 <style>태그로 바꿔서 html 에다가 넣어준다

 //index의 부모는 app
// index.js의 return 부분이 _App 의 Component로 간다




const NodeBird = ({
  Component
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("meta", {
        charSet: "utf-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("title", {
        children: "NodeBird@@"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Component, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

NodeBird.propTypes = {
  //점검을 무조건 해주자 점검을하면 서비스의 안전성 ↑
  //<Component />처럼 JSX로 쓸 수 있는 것들을 elementType이라고 합니다.
  Component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType.isRequired
}; //서버사이드 렌더링 해주겠다는 선언. 선언만 해준거임. 아직 CSR
//이걸로 이제 개별페이지에 서버사이드 렌더링을 적용시켜줄거다.

/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_3__["default"].withRedux(NodeBird));

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ "./reducers/post.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);



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
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
      {
        console.log("HYDRATE", action);
        return action.payload;
      }

    default:
      {
        const combinedReducer = Object(redux__WEBPACK_IMPORTED_MODULE_3__["combineReducers"])({
          user: _user__WEBPACK_IMPORTED_MODULE_1__["default"],
          post: _post__WEBPACK_IMPORTED_MODULE_2__["default"]
        });
        return combinedReducer(state, action);
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPostRequestAction, addCommentRequestAction, initalState, generateDummyPost, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_REQUEST", function() { return LOAD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_SUCCESS", function() { return LOAD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_FAILURE", function() { return LOAD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_REQUEST", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_SUCCESS", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_FAILURE", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPostRequestAction", function() { return addPostRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCommentRequestAction", function() { return addCommentRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initalState", function() { return initalState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDummyPost", function() { return generateDummyPost; });
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! faker */ "faker");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const dummyPost = data => ({
  id: data.id,
  //게시글 ID
  content: data.content,
  //게시글 내용
  User: {
    //게시글 작성한 유저 정보 (id,닉네임)
    id: 1,
    nickname: '더미포스트에 있는 닉네임 제로초'
  },
  Images: [],
  Comments: []
});

const dummyComment = data => ({
  id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
  //댓글 ID
  content: data,
  User: {
    //댓글 쓴 유저 정보
    id: 1,
    nickname: '재호쨩'
  }
}); //노예이름.


const LOAD_POST_REQUEST = "LOAD_POST_REQUEST";
const LOAD_POST_SUCCESS = "LOAD_POST_SUCCESS";
const LOAD_POST_FAILURE = "LOAD_POST_FAILURE";
const ADD_POST_REQUEST = "ADD_POST_REQUEST";
const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
const ADD_POST_FAILURE = "ADD_POST_FAILURE";
const REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
const REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
const REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE";
const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE"; //노예 생성함수
//동적으로 생성하는건 재사용가능성이 높은것들.

const addPostRequestAction = data => ({
  type: ADD_POST_REQUEST,
  data
});
const addCommentRequestAction = data => ({
  type: ADD_COMMENT_REQUEST,
  data
});
const initalState = {
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
      nickname: '제로초'
    },
    Images: [{
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      src: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA3MzBfODMg%2FMDAxNjI3NjExMjY2NTc4.6y1YAkF-z652ZcMud-GPwH3JimVpuMSLBCwxNZ77NDgg.G2mlr1CY_cGxdszrCWU7sQAWDwmZjelpBCbskEh3zv8g.JPEG.hdglbys%2F21%25A3%25AD07%25A3%25AD30%25A3%25AD09%25A3%25AD37%25A3%25AD52%25A3%25AD877%25A3%25DFdeco.jpg&type=a340'
    }, {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      src: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA3MzBfODMg%2FMDAxNjI3NjExMjY2NTc4.6y1YAkF-z652ZcMud-GPwH3JimVpuMSLBCwxNZ77NDgg.G2mlr1CY_cGxdszrCWU7sQAWDwmZjelpBCbskEh3zv8g.JPEG.hdglbys%2F21%25A3%25AD07%25A3%25AD30%25A3%25AD09%25A3%25AD37%25A3%25AD52%25A3%25AD877%25A3%25DFdeco.jpg&type=a340'
    }, {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      src: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA3MzBfODMg%2FMDAxNjI3NjExMjY2NTc4.6y1YAkF-z652ZcMud-GPwH3JimVpuMSLBCwxNZ77NDgg.G2mlr1CY_cGxdszrCWU7sQAWDwmZjelpBCbskEh3zv8g.JPEG.hdglbys%2F21%25A3%25AD07%25A3%25AD30%25A3%25AD09%25A3%25AD37%25A3%25AD52%25A3%25AD877%25A3%25DFdeco.jpg&type=a340'
    }],
    Comments: [{
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      content: '우와 개정판이 나왔군요~',
      User: {
        id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
        nickname: 'nero'
      }
    }, {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      content: '이거 참 신기한 댓글이군요',
      User: {
        id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
        nickname: 'hoya'
      }
    }]
  }],
  //이미지 업로드하면 경로 쌓임 imagePaths 에 
  imagePaths: [],
  loadPostLoading: false,
  loadPostDone: false,
  loadPostError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
  hasMorePost: true //무한 스크롤 할건데 false 면 더 이상 안가져오기.

};
const generateDummyPost = number => {
  return Array(number).fill().map(() => ({
    id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
    User: {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      nickname: faker__WEBPACK_IMPORTED_MODULE_2___default.a.name.findName()
    },
    content: faker__WEBPACK_IMPORTED_MODULE_2___default.a.lorem.paragraph(),
    Images: [{
      src: faker__WEBPACK_IMPORTED_MODULE_2___default.a.image.image()
    }],
    Comments: [{
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      content: faker__WEBPACK_IMPORTED_MODULE_2___default.a.lorem.sentence(),
      User: {
        id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
        nickname: faker__WEBPACK_IMPORTED_MODULE_2___default.a.name.findName()
      }
    }]
  }));
}; // initalState.mainPosts = initalState.mainPosts.concat(generateDummyPost(10));

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case LOAD_POST_REQUEST:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          loadPostLoading: true,
          loadPostDone: false,
          loadPostError: null
        });
      }

    case LOAD_POST_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        // mainPosts: action.data.concat(state.mainPosts),
        mainPosts: [...action.data, ...state.mainPosts],
        loadPostLoading: false,
        loadPostDone: true,
        hasMorePost: state.mainPosts.length < 50
      });

    case LOAD_POST_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        loadPostLoading: false,
        loadPostError: action.error
      });

    case ADD_POST_REQUEST:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          addPostLoading: true,
          addPostDone: false,
          addPostError: null
        });
      }

    case ADD_POST_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        //더미데이터 클라->서버 요청하고 응답의 값
        mainPosts: [dummyPost(action.data), ...state.mainPosts],
        addPostLoading: false,
        addPostDone: true
      });

    case ADD_POST_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        addPostLoading: false,
        addPostError: action.error
      });

    case REMOVE_POST_REQUEST:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          removePostLoading: true,
          removePostDone: false,
          removePostError: null
        });
      }

    case REMOVE_POST_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        //action.data에는 현재 삭제버튼 누른 게시글 id 들어있음
        mainPosts: state.mainPosts.filter(item => item.id !== action.data),
        removePostLoading: false,
        removePostDone: true
      });

    case REMOVE_POST_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        removePostLoading: false,
        removePostError: action.error
      });

    case ADD_COMMENT_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        addCommentLoading: true,
        addCommentDone: false,
        addCommentError: null
      });

    case ADD_COMMENT_SUCCESS:
      //현재 action.data => 게시글 id, 유저 id , 댓글 내용 있음
      //불변성을 지켜줘야한다 ...
      //불변성의 핵심 은 ★
      // 바뀌는 것만 새로운 객체로 교체한다. 나머지는 참조를 유지한다.
      //게시글은 새로 쓸때마다 새로 객체 추가가된다 -> mainPosts: [dummyPost(action.data), ...state.mainPosts],
      //목표 : 게시글에 있는 댓글에 댓글 내용을 추가해야한다.
      //1.댓글 객체에 접근하려면 게시글을 먼저 찾고 접근해야한다 (게시글 id를 통해서 찾을거임)
      //index 는 0번지부터시작. -> 내가 1번게시글에 작성했다치면 , 인덱스는 0 
      const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId); //2.해당 게시글 get

      const post = _objectSpread({}, state.mainPosts[postIndex]); //3.해당 게시글에 댓글내용 추가


      post.Comments = [dummyComment(action.data.content), ...post.Comments]; //4.전체 게시글 구해오기

      const mainPosts = [...state.mainPosts]; //5.전체 게시글에 get한 해당 게시글 추가

      mainPosts[postIndex] = post;
      return _objectSpread(_objectSpread({}, state), {}, {
        //6.추가
        mainPosts,
        addCommentLoading: false,
        addCommentDone: true
      });

    case ADD_COMMENT_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        addCommentLoading: false,
        addCommentError: action.error
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginRequestAction, logoutRequestAction, initalState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_REQUEST", function() { return CHANGE_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_SUCCESS", function() { return CHANGE_NICKNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_FAILURE", function() { return CHANGE_NICKNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_REQUEST", function() { return FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_SUCCESS", function() { return FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_FAILURE", function() { return FOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_REQUEST", function() { return UNFOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_SUCCESS", function() { return UNFOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_FAILURE", function() { return UNFOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_OF_ME", function() { return REMOVE_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initalState", function() { return initalState; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//더미데이터 함수 : 클라->서버 요청 하고 응답받은 결과 
const dummyUser = data => _objectSpread(_objectSpread({}, data), {}, {
  //...data 에 email,password 있음
  nickname: '태호찡',
  id: 1,
  //사용자 ID
  Posts: [{
    id: 1
  }],
  //내가 작성한 게시글 
  Followings: [{
    nickname: "재호찡"
  }, {
    nickname: "상원찡"
  }, {
    nickname: "제로초"
  }],
  Followers: [{
    nickname: "상원찡"
  }, {
    nickname: "재호찡"
  }]
}); //노예이름


const LOG_IN_REQUEST = "LOG_IN_REQUEST";
const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
const LOG_IN_FAILURE = "LOG_IN_FAILURE";
const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";
const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";
const CHANGE_NICKNAME_REQUEST = "CHANGE_NICKNAME_REQUEST";
const CHANGE_NICKNAME_SUCCESS = "CHANGE_NICKNAME_SUCCESS";
const CHANGE_NICKNAME_FAILURE = "CHANGE_NICKNAME_FAILURE";
const FOLLOW_REQUEST = "FOLLOW_REQUEST";
const FOLLOW_SUCCESS = "FOLLOW_SUCCESS";
const FOLLOW_FAILURE = "FOLLOW_FAILURE";
const UNFOLLOW_REQUEST = "UNFOLLOW_REQUEST";
const UNFOLLOW_SUCCESS = "UNFOLLOW_SUCCESS";
const UNFOLLOW_FAILURE = "UNFOLLOW_FAILURE"; //post 에서 add POST 했을 때 user me 의 Posts(내가 작성한 게시글)에 추가해줘야한다.

const ADD_POST_TO_ME = "ADD_POST_TO_ME";
const REMOVE_POST_OF_ME = "REMOVE_POST_OF_ME"; //노예 생성함수
//재사용 할 거면 동적으로 생성하자.

const loginRequestAction = data => ({
  type: LOG_IN_REQUEST,
  data
});
const logoutRequestAction = () => ({
  type: LOG_OUT_REQUEST
}); //초기 상태

const initalState = {
  logInLoading: false,
  //로그인 시도중
  logInDone: false,
  //로그인 성공,실패
  logInError: null,
  logOutLoading: false,
  //로그아웃 시도중
  logOutDone: false,
  logOutError: null,
  signUpLoading: false,
  //회원가입 시도중
  signUpDone: false,
  signUpError: null,
  changeNicknameLoading: false,
  //닉네임 변경 시도중
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
  unFollowError: null
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        logInLoading: true,
        logInDone: false,
        logInError: null
      });

    case LOG_IN_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        logInLoading: false,
        logInDone: true,
        me: dummyUser(action.data)
      });

    case LOG_IN_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        logInLoading: false,
        logInError: action.error
      });

    case LOG_OUT_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        logOutLoading: true,
        logOutDone: false,
        logOutError: null
      });

    case LOG_OUT_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        logOutLoading: false,
        logOutDone: true,
        me: null
      });

    case LOG_OUT_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        logOutLoading: false,
        logOutError: action.error
      });

    case SIGN_UP_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        signUpLoading: true,
        signUpDone: false,
        signUpError: null
      });

    case SIGN_UP_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        //더미데이터 추가해야됌
        me: dummyUser(action.data),
        signUpLoading: false,
        signUpDone: true
      });

    case SIGN_UP_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        signUpLoading: false,
        signUpError: action.error
      });

    case CHANGE_NICKNAME_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        changeNicknameLoading: true,
        changeNicknameDone: false,
        changeNicknameError: null
      });

    case CHANGE_NICKNAME_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        //더미데이터 추가해야됌
        changeNicknameLoading: false,
        changeNicknameDone: true
      });

    case CHANGE_NICKNAME_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        changeNicknameLoading: false,
        changeNicknameError: action.error
      });

    case ADD_POST_TO_ME:
      //게시글 id를 data로 받음
      return _objectSpread(_objectSpread({}, state), {}, {
        me: _objectSpread(_objectSpread({}, state.me), {}, {
          Posts: [{
            id: action.data
          }, ...state.me.Posts]
        })
      });

    case REMOVE_POST_OF_ME:
      return _objectSpread(_objectSpread({}, state), {}, {
        me: _objectSpread(_objectSpread({}, state.me), {}, {
          Posts: state.me.Posts.filter(item => item.id !== action.data)
        })
      });

    case FOLLOW_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        followLoading: true,
        followDone: false,
        followError: null
      });

    case FOLLOW_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        followLoading: false,
        followDone: true,
        me: _objectSpread(_objectSpread({}, state.me), {}, {
          Followings: [{
            id: action.data
          }, ...state.me.Followings]
        })
      });

    case FOLLOW_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        followLoading: false,
        followError: action.error
      });

    case UNFOLLOW_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        unFollowLoading: true,
        unFollowDone: false,
        unFollowError: null
      });

    case UNFOLLOW_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        unFollowLoading: false,
        unFollowDone: true,
        me: _objectSpread(_objectSpread({}, state.me), {}, {
          Followings: state.me.Followings.filter(item => item.id !== action.data)
        })
      });

    case UNFOLLOW_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        unFollowLoading: false,
        unFollowError: action.error
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post */ "./sagas/post.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./sagas/user.js");



function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_user__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_post__WEBPACK_IMPORTED_MODULE_1__["default"])]);
}

/***/ }),

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");




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
    const id = shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate();
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_SUCCESS"],
      //더미 data :data!
      data: {
        id,
        content: action.data
      }
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["ADD_POST_TO_ME"],
      data: id
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function* removePost(action) {
  try {
    // const result = yield call(removePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_SUCCESS"],
      //현재 데이타에 게시글 id 있음
      data: action.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["REMOVE_POST_OF_ME"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function* addComment(action) {
  try {
    // const result = yield call(addCommentAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_SUCCESS"],
      //더미 data :data!
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_FAILURE"],
      error: err.response.data
    });
  }
}

function* loadPosts() {
  try {
    // const result = yield call(loadPostsAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POST_SUCCESS"],
      data: Object(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["generateDummyPost"])(10)
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function* watchAddPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_REQUEST"], addPost);
}

function* watchRemovePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_REQUEST"], removePost);
}

function* watchAddComment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["ADD_COMMENT_REQUEST"], addComment);
}

function* watchLoadPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_POST_REQUEST"], loadPosts);
}

function* postSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddComment), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLoadPosts)]);
}

/***/ }),

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");

 // 제너레이터 아님 주의(X)
// const logInAPI = (data) => {
//     return axios.post('/api/login', data);
// };
// const logOutAPI = () => {
//     return axios.post('/api/logout');
// }
//const signUpAPI = ()=>{
//return axios.post('/api/signUp');
//}

function* logIn(action) {
  //login요청 실패염려 때문에 try{} catch();
  try {
    // const result = yield call(loginAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["LOG_IN_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["LOG_IN_FAILURE"],
      error: err.response.data
    });
  }
}

function* logOut() {
  try {
    // const result = yield call(logOutAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["LOG_OUT_SUCCESS"]
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["LOG_OUT_FAILURE"],
      error: err.response.data
    });
  }
}

function* signUp(action) {
  try {
    // const result = yield call(signUpAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["SIGN_UP_SUCCESS"],
      data: action.data // data: result.data,

    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["SIGN_UP_FAILURE"],
      error: err.response.data
    });
  }
}

function* follow(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["FOLLOW_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["FOLLOW_FAILURE"],
      error: err.response.data
    });
  }
}

function* unFollow(action) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["UNFOLLOW_SUCCESS"],
      data: action.data
    });
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["UNFOLLOW_FAILURE"],
      error: err.response.data
    });
  }
} //비동기 액션 크리에이터 (이벤트리스너 처럼 생각)


function* watchLogIn() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_1__["LOG_IN_REQUEST"], logIn);
}

function* watchLogOut() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_1__["LOG_OUT_REQUEST"], logOut);
}

function* watchSignUp() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_1__["SIGN_UP_REQUEST"], signUp);
}

function* watchFollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_1__["FOLLOW_REQUEST"], follow);
}

function* watchUnFollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_1__["UNFOLLOW_REQUEST"], unFollow);
}

function* userSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignUp), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnFollow)]);
}

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_saga_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @redux-saga/core */ "@redux-saga/core");
/* harmony import */ var _redux_saga_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_redux_saga_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");





 //composeWithDevTools 개발자 도구에서 보이게
// next-redux-wrapper는 유저가 페이지를 요청할때마다 리덕스 스토어를 생성해야 하기 때문에 configureStore함수를 정의해서 넘기는것이다.

const loggerMiddleware = ({
  dispatch,
  getState
}) => next => action => {
  console.log(action); //콘솔에 내가 하는 액션마다 찍힘.
  // next 는 액션을 다음 미들웨어에게 전달하는 함수입니다. next(action) 이런 형태로 사용합니다.
  // 만약 다음 미들웨어가 없다면 리듀서에게 액션을 전달해줍니다. 
  //만약에 next 를 호출하지 않게 된다면 액션이 무시처리되어 리듀서에게로 전달되지 않습니다.

  return next(action);
};

const configureStore = () => {
  //dispatch() 후 사가 or 썽크 호출됌
  //middleware란? 리덕스의 기능을 업글!
  const sagaMiddleware = _redux_saga_core__WEBPACK_IMPORTED_MODULE_4___default()();
  const middlewares = [sagaMiddleware, loggerMiddleware]; //사가 or 썽크 (미들웨어)넣자 
  //리덕스의 기능이 확장 된게 enhancer

  const enhancer = false ? undefined //배포용 
  : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(...middlewares)); //개발용

  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_2__["default"], enhancer);
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_5__["default"]);
  return store;
}; //createWrapper => next에 redux 추가.


const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["createWrapper"])(configureStore, {
  debug: true
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.jsx */"./pages/_app.jsx");


/***/ }),

/***/ "@redux-saga/core":
/*!***********************************!*\
  !*** external "@redux-saga/core" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@redux-saga/core");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "faker":
/*!************************!*\
  !*** external "faker" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("faker");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "shortid":
/*!**************************!*\
  !*** external "shortid" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("shortid");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qc3giLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy91c2VyLmpzIiwid2VicGFjazovLy8uL3NhZ2FzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NhZ2FzL3Bvc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmVkdXgtc2FnYS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmYWtlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImltbWVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzaG9ydGlkXCIiXSwibmFtZXMiOlsiTm9kZUJpcmQiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJlbGVtZW50VHlwZSIsImlzUmVxdWlyZWQiLCJ3cmFwcGVyIiwid2l0aFJlZHV4Iiwicm9vdFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiLCJjb21iaW5lZFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJ1c2VyIiwicG9zdCIsImR1bW15UG9zdCIsImRhdGEiLCJpZCIsImNvbnRlbnQiLCJVc2VyIiwibmlja25hbWUiLCJJbWFnZXMiLCJDb21tZW50cyIsImR1bW15Q29tbWVudCIsInNob3J0SWQiLCJnZW5lcmF0ZSIsIkxPQURfUE9TVF9SRVFVRVNUIiwiTE9BRF9QT1NUX1NVQ0NFU1MiLCJMT0FEX1BPU1RfRkFJTFVSRSIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsImFkZFBvc3RSZXF1ZXN0QWN0aW9uIiwiYWRkQ29tbWVudFJlcXVlc3RBY3Rpb24iLCJpbml0YWxTdGF0ZSIsIm1haW5Qb3N0cyIsInNyYyIsImltYWdlUGF0aHMiLCJsb2FkUG9zdExvYWRpbmciLCJsb2FkUG9zdERvbmUiLCJsb2FkUG9zdEVycm9yIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0RXJyb3IiLCJhZGRDb21tZW50TG9hZGluZyIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudEVycm9yIiwiaGFzTW9yZVBvc3QiLCJnZW5lcmF0ZUR1bW15UG9zdCIsIm51bWJlciIsIkFycmF5IiwiZmlsbCIsIm1hcCIsImZha2VyIiwibmFtZSIsImZpbmROYW1lIiwibG9yZW0iLCJwYXJhZ3JhcGgiLCJpbWFnZSIsInNlbnRlbmNlIiwicmVkdWNlciIsImxlbmd0aCIsImVycm9yIiwiZmlsdGVyIiwiaXRlbSIsInBvc3RJbmRleCIsImZpbmRJbmRleCIsInYiLCJwb3N0SWQiLCJkdW1teVVzZXIiLCJQb3N0cyIsIkZvbGxvd2luZ3MiLCJGb2xsb3dlcnMiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTIiwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUiLCJGT0xMT1dfUkVRVUVTVCIsIkZPTExPV19TVUNDRVNTIiwiRk9MTE9XX0ZBSUxVUkUiLCJVTkZPTExPV19SRVFVRVNUIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJBRERfUE9TVF9UT19NRSIsIlJFTU9WRV9QT1NUX09GX01FIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsImxvZ0luTG9hZGluZyIsImxvZ0luRG9uZSIsImxvZ0luRXJyb3IiLCJsb2dPdXRMb2FkaW5nIiwibG9nT3V0RG9uZSIsImxvZ091dEVycm9yIiwic2lnblVwTG9hZGluZyIsInNpZ25VcERvbmUiLCJzaWduVXBFcnJvciIsImNoYW5nZU5pY2tuYW1lTG9hZGluZyIsImNoYW5nZU5pY2tuYW1lRG9uZSIsImNoYW5nZU5pY2tuYW1lRXJyb3IiLCJtZSIsInNpZ25VcERhdGEiLCJsb2dpbkRhdGEiLCJmb2xsb3dMb2FkaW5nIiwiZm9sbG93RG9uZSIsImZvbGxvd0Vycm9yIiwidW5Gb2xsb3dMb2FkaW5nIiwidW5Gb2xsb3dEb25lIiwidW5Gb2xsb3dFcnJvciIsInJvb3RTYWdhIiwiYWxsIiwiZm9yayIsInVzZXJTYWdhIiwicG9zdFNhZ2EiLCJhZGRQb3N0Iiwic2hvcnRpZCIsImRlbGF5IiwicHV0IiwiZXJyIiwicmVzcG9uc2UiLCJyZW1vdmVQb3N0IiwiYWRkQ29tbWVudCIsImxvYWRQb3N0cyIsIndhdGNoQWRkUG9zdCIsInRha2VMYXRlc3QiLCJ3YXRjaFJlbW92ZVBvc3QiLCJ3YXRjaEFkZENvbW1lbnQiLCJ3YXRjaExvYWRQb3N0cyIsImxvZ0luIiwibG9nT3V0Iiwic2lnblVwIiwiZm9sbG93IiwidW5Gb2xsb3ciLCJ3YXRjaExvZ0luIiwid2F0Y2hMb2dPdXQiLCJ3YXRjaFNpZ25VcCIsIndhdGNoRm9sbG93Iiwid2F0Y2hVbkZvbGxvdyIsImxvZ2dlck1pZGRsZXdhcmUiLCJkaXNwYXRjaCIsImdldFN0YXRlIiwibmV4dCIsImNvbmZpZ3VyZVN0b3JlIiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsIm1pZGRsZXdhcmVzIiwiZW5oYW5jZXIiLCJjb21wb3NlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJzYWdhVGFzayIsInJ1biIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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Q0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLG9DIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvL+2OmOydtOyngOuTpOydmCDqs7XthrXsoIHsnLzroZwg7IKs7Jqp65CY64qUIOu2gOu2hOydgCBfYXBwIOyXkOyEnCDsnpHshLHtlbTshJwg7KCB7Jqp7Iuc7YKk7J6QXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB3cmFwcGVyIGZyb20gJy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJztcclxuXHJcbi8v7Ju57Yyp7J20656AIOyXrOufrOqwnOydmCDtjIzsnbzsnYQg7ZWY64KY7J2YIGpz7YyM7J2866GcIO2VqeyzkOykgOuLpC5cclxuLy9uZXh07J2YIOybue2MqeydtCBjc3Prpbwg67O064qUIOyInOqwhFxyXG4vLyBjc3PrpbwgPHN0eWxlPu2DnOq3uOuhnCDrsJTqv5TshJwgaHRtbCDsl5Dri6TqsIAg64Sj7Ja07KSA64ukXHJcbmltcG9ydCBcImFudGQvZGlzdC9hbnRkLmNzc1wiO1xyXG5cclxuLy9pbmRleOydmCDrtoDrqqjripQgYXBwXHJcbi8vIGluZGV4Lmpz7J2YIHJldHVybiDrtoDrtoTsnbQgX0FwcCDsnZggQ29tcG9uZW5066GcIOqwhOuLpFxyXG5jb25zdCBOb2RlQmlyZCA9ICh7IENvbXBvbmVudCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XHJcbiAgICAgICAgPHRpdGxlPk5vZGVCaXJkQEA8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxDb21wb25lbnQgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5Ob2RlQmlyZC5wcm9wVHlwZXMgPSB7XHJcbiAgLy/soJDqsoDsnYQg66y07KGw6rG0IO2VtOyjvOyekCDsoJDqsoDsnYTtlZjrqbQg7ISc67mE7Iqk7J2YIOyViOyghOyEsSDihpFcclxuICAvLzxDb21wb25lbnQgLz7sspjrn7wgSlNY66GcIOyTuCDsiJgg7J6I64qUIOqyg+uTpOydhCBlbGVtZW50VHlwZeydtOudvOqzoCDtlanri4jri6QuXHJcbiAgQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCxcclxufTtcclxuLy/shJzrsoTsgqzsnbTrk5wg66CM642U66eBIO2VtOyjvOqyoOuLpOuKlCDshKDslrguIOyEoOyWuOunjCDtlbTspIDqsbDsnoQuIOyVhOyngSBDU1JcclxuLy/snbTqsbjroZwg7J207KCcIOqwnOuzhO2OmOydtOyngOyXkCDshJzrsoTsgqzsnbTrk5wg66CM642U66eB7J2EIOyggeyaqeyLnOy8nOykhOqxsOuLpC5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoTm9kZUJpcmQpO1xyXG4iLCJpbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQgdXNlciBmcm9tICcuL3VzZXInO1xyXG5pbXBvcnQgcG9zdCBmcm9tICcuL3Bvc3QnO1xyXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcclxuLy9IWURSQVRF64qUIG5leHQtcmVkdXgtd3JhcHBlcuulvCDsk7gg65WMIO2VhOyalO2VnCDslaHshZjsnbjrjbDsmpQuIFxyXG4vL0hZRFJBVEXripRcclxuLy8g66as7JeR7Yq47JeQ7IScIOyEnOuyhOyCrOydtOuTnCDroIzrjZTrp4HsnYQg7Iuk7ZaJ7ZWcIEhUTUwg6rKw6rO866y87J2EIOuwm+yVhOyYqCDrkqQsIFxyXG4vL+u4jOudvOyasOyggOyXkOyEnCDsnbTqsoPsnYQg64uk7IucIOumrOyVoe2KuCDtirjrpqzsl5Ag66ee6rKMIO2MjOyLse2VmOuKlCDtlonsnITsnbTri6QuXHJcblxyXG4vL+u2iOuzgOqwneyytCAtPiDqsJ3ssrTrpbwg7LC47KGw7ZW07IScIOyImOyglSDtlZjrqbQg7JWI65Cc64ukLiAtLT7qtZDssrQg6rCA64qlIHJlYWTrp4wg6rCA64qlLlxyXG5cclxuXHJcbi8v64uk66W4IOy7tO2PrOuEjO2KuOyXkOyEnCBnZXRTZXJ2ZXJTaWRlUHJvcHMg7ZW07KSAIOygleuztCBIWURSQVRF7JeQIOyeiOuLpC5cclxuLy8gY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4vLyAgICAgaW5kZXg6IChzdGF0ZSA9IHt9LCBhY3Rpb24pID0+IHtcclxuLy8gICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbi8vICAgICAgICAgICAgIGNhc2UgSFlEUkFURTpcclxuLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdIWURSQVRFJywgYWN0aW9uKTtcclxuLy8gICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCAuLi5hY3Rpb24ucGF5bG9hZCB9XHJcbi8vICAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiBzdGF0ZTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9LFxyXG4vLyAgICAgdXNlcixcclxuLy8gICAgIHBvc3RcclxuLy8gfSk7XHJcblxyXG4vL3JlZHVjZXLripQgKOydtOyghOyDge2DnCzslaHshZgpPT5yZXR1cm4g64uk7J2M7IOB7YOc66GcIOq1kOyytFxyXG4vL25leHQuanPsl5DshJwg7IOd7ISx7ZWcIHJlZHV4IHN0b3Jl7JmAIGNsaWVudOyXkOyEnCDsg53shLHtlZwgcmVkdXggc3RvcmXripQg64uk66W06riwIOuVjOusuOyXkCDsnbQg65GY7J2EIO2VqeyzkOyVvCDtlZzri6QuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEhZRFJBVEU6IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJIWURSQVRFXCIsIGFjdGlvbik7XHJcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICBjb25zdCBjb21iaW5lZFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgICAgICAgICAgICAgdXNlcixcclxuICAgICAgICAgICAgICAgIHBvc3QsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybiBjb21iaW5lZFJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyOyIsImltcG9ydCBzaG9ydElkIGZyb20gJ3Nob3J0aWQnO1xyXG5pbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7XHJcbmltcG9ydCBmYWtlciBmcm9tICdmYWtlcic7XHJcblxyXG5cclxuY29uc3QgZHVtbXlQb3N0ID0gKGRhdGEpID0+ICh7XHJcbiAgICBpZDogZGF0YS5pZCwgLy/qsozsi5zquIAgSURcclxuICAgIGNvbnRlbnQ6IGRhdGEuY29udGVudCwgLy/qsozsi5zquIAg64K07JqpXHJcbiAgICBVc2VyOiB7IC8v6rKM7Iuc6riAIOyekeyEse2VnCDsnKDsoIAg7KCV67O0IChpZCzri4nrhKTsnoQpXHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgbmlja25hbWU6ICfrjZTrr7jtj6zsiqTtirjsl5Ag7J6I64qUIOuLieuEpOyehCDsoJzroZzstIgnLFxyXG4gICAgfSxcclxuICAgIEltYWdlczogW10sXHJcbiAgICBDb21tZW50czogW10sXHJcbn0pXHJcbmNvbnN0IGR1bW15Q29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG4gICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSwgLy/rjJPquIAgSURcclxuICAgIGNvbnRlbnQ6IGRhdGEsXHJcbiAgICBVc2VyOiB7IC8v64yT6riAIOyTtCDsnKDsoIAg7KCV67O0XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgbmlja25hbWU6ICfsnqztmLjsqKknLFxyXG4gICAgfSxcclxufSk7XHJcblxyXG4vL+uFuOyYiOydtOumhC5cclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9SRVFVRVNUID0gXCJMT0FEX1BPU1RfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX1NVQ0NFU1MgPSBcIkxPQURfUE9TVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfRkFJTFVSRSA9IFwiTE9BRF9QT1NUX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gXCJBRERfUE9TVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gXCJBRERfUE9TVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gXCJBRERfUE9TVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9IFwiUkVNT1ZFX1BPU1RfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9IFwiUkVNT1ZFX1BPU1RfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRSA9IFwiUkVNT1ZFX1BPU1RfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSBcIkFERF9DT01NRU5UX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSBcIkFERF9DT01NRU5UX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSBcIkFERF9DT01NRU5UX0ZBSUxVUkVcIjtcclxuXHJcbi8v64W47JiIIOyDneyEse2VqOyImFxyXG4vL+uPmeyggeycvOuhnCDsg53shLHtlZjripTqsbQg7J6s7IKs7Jqp6rCA64ql7ISx7J20IOuGkuydgOqyg+uTpC5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3RSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7IHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsIGRhdGEgfSk7XHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50UmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoeyB0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULCBkYXRhIH0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRhbFN0YXRlID0ge1xyXG4gICAgLy/rjZTrr7jrjbDsnbTthLDrpbwg66eM65Ok7J6QIFxyXG4gICAgLy8g7ISc67KE7Kq97JeQ7IScIOuNsOydtO2EsOulvCDrgpjtlZzthYwg7Ja065a76rKMIOuztOuCvOqxtOyngCDrr7jrpqwg66y87Ja067O07J6QLlxyXG4gICAgLy9pZCBjb250ZW50IOydtOufsOqxtCDshozrrLjsnpDsnbjrjbAgIC0+IOqyjOyLnOq4gChwb3N0KeyekOyytOydmCDsho3shLFcclxuICAgIC8vVXNlcixJbWFnZXMsQ29tbWVudHMg64qUIOyZnCDrjIDrrLjsnpDrg5A/XHJcbiAgICAvL0RCIOyLnO2AhOudvOydtOymiOuekSDqtIDqs4TqsIAg7J6I7J2MIFxyXG4gICAgLy9pZCBjb250ZW50IOuKlCDqsozsi5zquIAg7J6Q7LK07J2YIOyGjeyEseydtOuLpC5cclxuICAgIC8vVXNlcixJbWFnZXMsQ29tbWVudHMg7KCV67O0KHBvc3QpIOyZgCDri6TrpbjsoJXrs7TsmYDsnZgg6rSA6rOE6rCAIOyeiOycvOuptCDrjIDrrLjsnpDroZxcclxuICAgIG1haW5Qb3N0czogW3tcclxuICAgICAgICAvL+qyjOyLnOq4gCBpZFxyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIGNvbnRlbnQ6IFwi7LKrIOuyiOynuCDqsozsi5zquIAgI+2VtOyLnO2DnOq3uCAj7J217Iqk7ZSE66CI7IqkXCIsXHJcbiAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICAvL+qyjOyLnOq4gChwb3N0KSDsnpHshLHsnpDtlZwg7Jyg7KCAIOygleuztCAtPiBpZCAs64uJ64Sk7J6EIFxyXG4gICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgbmlja25hbWU6ICfsoJzroZzstIgnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgSW1hZ2VzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgICAgICBzcmM6ICdodHRwczovL3NlYXJjaC5wc3RhdGljLm5ldC9jb21tb24vP3NyYz1odHRwJTNBJTJGJTJGYmxvZ2ZpbGVzLm5hdmVyLm5ldCUyRk1qQXlNVEEzTXpCZk9ETWclMkZNREF4TmpJM05qRXhNalkyTlRjNC42eTFZQWtGLXo2NTJaY011ZC1HUHdIM0ppbVZwdU1TTEJDd3hOWjc3TkRnZy5HMm1scjFDWV9jR3hkc3pyQ1dVN3NRQVdEd21aamVscEJDYnNrRWgzenY4Zy5KUEVHLmhkZ2xieXMlMkYyMSUyNUEzJTI1QUQwNyUyNUEzJTI1QUQzMCUyNUEzJTI1QUQwOSUyNUEzJTI1QUQzNyUyNUEzJTI1QUQ1MiUyNUEzJTI1QUQ4NzclMjVBMyUyNURGZGVjby5qcGcmdHlwZT1hMzQwJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgICAgIHNyYzogJ2h0dHBzOi8vc2VhcmNoLnBzdGF0aWMubmV0L2NvbW1vbi8/c3JjPWh0dHAlM0ElMkYlMkZibG9nZmlsZXMubmF2ZXIubmV0JTJGTWpBeU1UQTNNekJmT0RNZyUyRk1EQXhOakkzTmpFeE1qWTJOVGM0LjZ5MVlBa0YtejY1MlpjTXVkLUdQd0gzSmltVnB1TVNMQkN3eE5aNzdORGdnLkcybWxyMUNZX2NHeGRzenJDV1U3c1FBV0R3bVpqZWxwQkNic2tFaDN6djhnLkpQRUcuaGRnbGJ5cyUyRjIxJTI1QTMlMjVBRDA3JTI1QTMlMjVBRDMwJTI1QTMlMjVBRDA5JTI1QTMlMjVBRDM3JTI1QTMlMjVBRDUyJTI1QTMlMjVBRDg3NyUyNUEzJTI1REZkZWNvLmpwZyZ0eXBlPWEzNDAnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgc3JjOiAnaHR0cHM6Ly9zZWFyY2gucHN0YXRpYy5uZXQvY29tbW9uLz9zcmM9aHR0cCUzQSUyRiUyRmJsb2dmaWxlcy5uYXZlci5uZXQlMkZNakF5TVRBM016QmZPRE1nJTJGTURBeE5qSTNOakV4TWpZMk5UYzQuNnkxWUFrRi16NjUyWmNNdWQtR1B3SDNKaW1WcHVNU0xCQ3d4Tlo3N05EZ2cuRzJtbHIxQ1lfY0d4ZHN6ckNXVTdzUUFXRHdtWmplbHBCQ2Jza0VoM3p2OGcuSlBFRy5oZGdsYnlzJTJGMjElMjVBMyUyNUFEMDclMjVBMyUyNUFEMzAlMjVBMyUyNUFEMDklMjVBMyUyNUFEMzclMjVBMyUyNUFENTIlMjVBMyUyNUFEODc3JTI1QTMlMjVERmRlY28uanBnJnR5cGU9YTM0MCcsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIENvbW1lbnRzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAn7Jqw7JmAIOqwnOygle2MkOydtCDrgpjsmZTqtbDsmpR+JyxcclxuICAgICAgICAgICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgIG5pY2tuYW1lOiAnbmVybycsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogJ+ydtOqxsCDssLgg7Iug6riw7ZWcIOuMk+q4gOydtOq1sOyalCcsXHJcbiAgICAgICAgICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgICAgICAgICBuaWNrbmFtZTogJ2hveWEnLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXVxyXG4gICAgfV0sXHJcbiAgICAvL+ydtOuvuOyngCDsl4XroZzrk5ztlZjrqbQg6rK966GcIOyMk+yehCBpbWFnZVBhdGhzIOyXkCBcclxuICAgIGltYWdlUGF0aHM6IFtdLFxyXG4gICAgbG9hZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgIGxvYWRQb3N0RG9uZTogZmFsc2UsXHJcbiAgICBsb2FkUG9zdEVycm9yOiBudWxsLFxyXG4gICAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgYWRkUG9zdEVycm9yOiBudWxsLFxyXG4gICAgcmVtb3ZlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgcmVtb3ZlUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgcmVtb3ZlUG9zdEVycm9yOiBudWxsLFxyXG4gICAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gICAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gICAgYWRkQ29tbWVudEVycm9yOiBudWxsLFxyXG4gICAgaGFzTW9yZVBvc3Q6IHRydWUsIC8v66y07ZWcIOyKpO2BrOuhpCDtlaDqsbTrjbAgZmFsc2Ug66m0IOuNlCDsnbTsg4Eg7JWI6rCA7KC47Jik6riwLlxyXG59XHJcbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUR1bW15UG9zdCA9IChudW1iZXIpID0+IHtcclxuICAgIHJldHVybiBBcnJheShudW1iZXIpLmZpbGwoKS5tYXAoKCkgPT4gKHtcclxuICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgbmlja25hbWU6IGZha2VyLm5hbWUuZmluZE5hbWUoKSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnRlbnQ6IGZha2VyLmxvcmVtLnBhcmFncmFwaCgpLFxyXG4gICAgICAgIEltYWdlczogW3tcclxuICAgICAgICAgICAgc3JjOiBmYWtlci5pbWFnZS5pbWFnZSgpLFxyXG4gICAgICAgIH1dLFxyXG4gICAgICAgIENvbW1lbnRzOiBbe1xyXG4gICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICBjb250ZW50OiBmYWtlci5sb3JlbS5zZW50ZW5jZSgpLFxyXG4gICAgICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgbmlja25hbWU6IGZha2VyLm5hbWUuZmluZE5hbWUoKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9XSxcclxuICAgIH0pKVxyXG59XHJcbi8vIGluaXRhbFN0YXRlLm1haW5Qb3N0cyA9IGluaXRhbFN0YXRlLm1haW5Qb3N0cy5jb25jYXQoZ2VuZXJhdGVEdW1teVBvc3QoMTApKTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0YWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBMT0FEX1BPU1RfUkVRVUVTVDoge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2FkUG9zdExvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBsb2FkUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbG9hZFBvc3RFcnJvcjogbnVsbCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIExPQURfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAvLyBtYWluUG9zdHM6IGFjdGlvbi5kYXRhLmNvbmNhdChzdGF0ZS5tYWluUG9zdHMpLFxyXG4gICAgICAgICAgICAgICAgbWFpblBvc3RzOiBbLi4uYWN0aW9uLmRhdGEsIC4uLnN0YXRlLm1haW5Qb3N0c10sXHJcbiAgICAgICAgICAgICAgICBsb2FkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbG9hZFBvc3REb25lOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaGFzTW9yZVBvc3Q6IHN0YXRlLm1haW5Qb3N0cy5sZW5ndGggPCA1MCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTE9BRF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvYWRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBsb2FkUG9zdEVycm9yOiBhY3Rpb24uZXJyb3JcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYWRkUG9zdExvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhZGRQb3N0RG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhZGRQb3N0RXJyb3I6IG51bGwsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAvL+uNlOuvuOuNsOydtO2EsCDtgbTrnbwtPuyEnOuyhCDsmpTssq3tlZjqs6Ag7J2R64u17J2YIOqwklxyXG4gICAgICAgICAgICAgICAgbWFpblBvc3RzOiBbZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSwgLi4uc3RhdGUubWFpblBvc3RzXSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3REb25lOiB0cnVlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhZGRQb3N0RXJyb3I6IGFjdGlvbi5lcnJvclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUOiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHJlbW92ZVBvc3RMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlUG9zdEVycm9yOiBudWxsLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgLy9hY3Rpb24uZGF0YeyXkOuKlCDtmITsnqwg7IKt7KCc67KE7Yq8IOuIhOuluCDqsozsi5zquIAgaWQg65Ok7Ja07J6I7J2MXHJcbiAgICAgICAgICAgICAgICBtYWluUG9zdHM6IHN0YXRlLm1haW5Qb3N0cy5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkICE9PSBhY3Rpb24uZGF0YSksXHJcbiAgICAgICAgICAgICAgICByZW1vdmVQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICByZW1vdmVQb3N0RG9uZTogdHJ1ZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlUG9zdEVycm9yOiBhY3Rpb24uZXJyb3JcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYWRkQ29tbWVudExvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhZGRDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhZGRDb21tZW50RXJyb3I6IG51bGwsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIC8v7ZiE7J6sIGFjdGlvbi5kYXRhID0+IOqyjOyLnOq4gCBpZCwg7Jyg7KCAIGlkICwg64yT6riAIOuCtOyaqSDsnojsnYxcclxuICAgICAgICAgICAgLy/rtojrs4DshLHsnYQg7KeA7Lyc7KSY7JW87ZWc64ukIC4uLlxyXG4gICAgICAgICAgICAvL+u2iOuzgOyEseydmCDtlbXsi6wg7J2AIOKYhVxyXG4gICAgICAgICAgICAvLyDrsJTrgIzripQg6rKD66eMIOyDiOuhnOyatCDqsJ3ssrTroZwg6rWQ7LK07ZWc64ukLiDrgpjrqLjsp4DripQg7LC47KGw66W8IOycoOyngO2VnOuLpC5cclxuICAgICAgICAgICAgLy/qsozsi5zquIDsnYAg7IOI66GcIOyTuOuVjOuniOuLpCDsg4jroZwg6rCd7LK0IOy2lOqwgOqwgOuQnOuLpCAtPiBtYWluUG9zdHM6IFtkdW1teVBvc3QoYWN0aW9uLmRhdGEpLCAuLi5zdGF0ZS5tYWluUG9zdHNdLFxyXG5cclxuICAgICAgICAgICAgLy/rqqntkZwgOiDqsozsi5zquIDsl5Ag7J6I64qUIOuMk+q4gOyXkCDrjJPquIAg64K07Jqp7J2EIOy2lOqwgO2VtOyVvO2VnOuLpC5cclxuICAgICAgICAgICAgLy8xLuuMk+q4gCDqsJ3ssrTsl5Ag7KCR6re87ZWY66Ck66m0IOqyjOyLnOq4gOydhCDrqLzsoIAg7LC+6rOgIOygkeq3vO2VtOyVvO2VnOuLpCAo6rKM7Iuc6riAIGlk66W8IO2Gte2VtOyEnCDssL7snYTqsbDsnoQpXHJcbiAgICAgICAgICAgIC8vaW5kZXgg64qUIDDrsojsp4DrtoDthLDsi5zsnpEuIC0+IOuCtOqwgCAx67KI6rKM7Iuc6riA7JeQIOyekeyEse2WiOuLpOy5mOuptCAsIOyduOuNseyKpOuKlCAwIFxyXG4gICAgICAgICAgICBjb25zdCBwb3N0SW5kZXggPSBzdGF0ZS5tYWluUG9zdHMuZmluZEluZGV4KHYgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKTtcclxuICAgICAgICAgICAgLy8yLu2VtOuLuSDqsozsi5zquIAgZ2V0XHJcbiAgICAgICAgICAgIGNvbnN0IHBvc3QgPSB7IC4uLnN0YXRlLm1haW5Qb3N0c1twb3N0SW5kZXhdIH07XHJcbiAgICAgICAgICAgIC8vMy7tlbTri7kg6rKM7Iuc6riA7JeQIOuMk+q4gOuCtOyaqSDstpTqsIBcclxuICAgICAgICAgICAgcG9zdC5Db21tZW50cyA9IFtkdW1teUNvbW1lbnQoYWN0aW9uLmRhdGEuY29udGVudCksIC4uLnBvc3QuQ29tbWVudHNdO1xyXG4gICAgICAgICAgICAvLzQu7KCE7LK0IOqyjOyLnOq4gCDqtaztlbTsmKTquLBcclxuICAgICAgICAgICAgY29uc3QgbWFpblBvc3RzID0gWy4uLnN0YXRlLm1haW5Qb3N0c107XHJcbiAgICAgICAgICAgIC8vNS7soITssrQg6rKM7Iuc6riA7JeQIGdldO2VnCDtlbTri7kg6rKM7Iuc6riAIOy2lOqwgFxyXG4gICAgICAgICAgICBtYWluUG9zdHNbcG9zdEluZGV4XSA9IHBvc3Q7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIC8vNi7stpTqsIBcclxuICAgICAgICAgICAgICAgIG1haW5Qb3N0cyxcclxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnREb25lOiB0cnVlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhZGRDb21tZW50RXJyb3I6IGFjdGlvbi5lcnJvclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDogcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiLCIvL+uNlOuvuOuNsOydtO2EsCDtlajsiJggOiDtgbTrnbwtPuyEnOuyhCDsmpTssq0g7ZWY6rOgIOydkeuLteuwm+ydgCDqsrDqs7wgXHJcbmNvbnN0IGR1bW15VXNlciA9IChkYXRhKSA9PiAoe1xyXG4gICAgLy/sgqzsmqnsnKDsoIAg7ZWc66qF7JeQIOuMgO2VnCDsoJXrs7Trk6QhIOuwm+yVhOyYtCFcclxuICAgIC4uLmRhdGEsIC8vLi4uZGF0YSDsl5AgZW1haWwscGFzc3dvcmQg7J6I7J2MXHJcbiAgICBuaWNrbmFtZTogJ+2DnO2YuOywoScsXHJcbiAgICBpZDogMSwgLy/sgqzsmqnsnpAgSURcclxuICAgIFBvc3RzOiBbeyBpZDogMSB9XSwgLy/rgrTqsIAg7J6R7ISx7ZWcIOqyjOyLnOq4gCBcclxuICAgIEZvbGxvd2luZ3M6IFt7IG5pY2tuYW1lOiBcIuyerO2YuOywoVwiIH0sIHsgbmlja25hbWU6IFwi7IOB7JuQ7LChXCIgfSwgeyBuaWNrbmFtZTogXCLsoJzroZzstIhcIiB9XSxcclxuICAgIEZvbGxvd2VyczogW3sgbmlja25hbWU6IFwi7IOB7JuQ7LChXCIgfSwgeyBuaWNrbmFtZTogXCLsnqztmLjssKFcIiB9XSxcclxufSk7XHJcbi8v64W47JiI7J2066aEXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9IFwiTE9HX0lOX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gXCJMT0dfSU5fU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSBcIkxPR19JTl9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX09VVF9SRVFVRVNUID0gXCJMT0dfT1VUX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9IFwiTE9HX09VVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSBcIkxPR19PVVRfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVRVUVTVCA9IFwiU0lHTl9VUF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSBcIlNJR05fVVBfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMVVJFID0gXCJTSUdOX1VQX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCA9IFwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTID0gXCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUgPSBcIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgRk9MTE9XX1JFUVVFU1QgPSBcIkZPTExPV19SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfU1VDQ0VTUyA9IFwiRk9MTE9XX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEZPTExPV19GQUlMVVJFID0gXCJGT0xMT1dfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1JFUVVFU1QgPSBcIlVORk9MTE9XX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1NVQ0NFU1MgPSBcIlVORk9MTE9XX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX0ZBSUxVUkUgPSBcIlVORk9MTE9XX0ZBSUxVUkVcIjtcclxuXHJcbi8vcG9zdCDsl5DshJwgYWRkIFBPU1Qg7ZaI7J2EIOuVjCB1c2VyIG1lIOydmCBQb3N0cyjrgrTqsIAg7J6R7ISx7ZWcIOqyjOyLnOq4gCnsl5Ag7LaU6rCA7ZW07KSY7JW87ZWc64ukLlxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfVE9fTUUgPSBcIkFERF9QT1NUX1RPX01FXCI7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9PRl9NRSA9IFwiUkVNT1ZFX1BPU1RfT0ZfTUVcIjtcclxuXHJcbi8v64W47JiIIOyDneyEse2VqOyImFxyXG4vL+yerOyCrOyaqSDtlaAg6rGw66m0IOuPmeyggeycvOuhnCDsg53shLHtlZjsnpAuXHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHsgdHlwZTogTE9HX0lOX1JFUVVFU1QsIGRhdGEgfSk7XHJcbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKCkgPT4gKHsgdHlwZTogTE9HX09VVF9SRVFVRVNUIH0pO1xyXG5cclxuLy/stIjquLAg7IOB7YOcXHJcbmV4cG9ydCBjb25zdCBpbml0YWxTdGF0ZSA9IHtcclxuICAgIGxvZ0luTG9hZGluZzogZmFsc2UsIC8v66Gc6re47J24IOyLnOuPhOykkVxyXG4gICAgbG9nSW5Eb25lOiBmYWxzZSwgLy/roZzqt7jsnbgg7ISx6rO1LOyLpO2MqFxyXG4gICAgbG9nSW5FcnJvcjogbnVsbCxcclxuICAgIGxvZ091dExvYWRpbmc6IGZhbHNlLCAvL+uhnOq3uOyVhOybgyDsi5zrj4TspJFcclxuICAgIGxvZ091dERvbmU6IGZhbHNlLFxyXG4gICAgbG9nT3V0RXJyb3I6IG51bGwsXHJcbiAgICBzaWduVXBMb2FkaW5nOiBmYWxzZSwgLy/tmozsm5DqsIDsnoUg7Iuc64+E7KSRXHJcbiAgICBzaWduVXBEb25lOiBmYWxzZSxcclxuICAgIHNpZ25VcEVycm9yOiBudWxsLFxyXG4gICAgY2hhbmdlTmlja25hbWVMb2FkaW5nOiBmYWxzZSwgLy/ri4nrhKTsnoQg67OA6rK9IOyLnOuPhOykkVxyXG4gICAgY2hhbmdlTmlja25hbWVEb25lOiBmYWxzZSxcclxuICAgIGNoYW5nZU5pY2tuYW1lRXJyb3I6IG51bGwsXHJcbiAgICBtZTogbnVsbCxcclxuICAgIHNpZ25VcERhdGE6IHt9LFxyXG4gICAgbG9naW5EYXRhOiB7fSxcclxuXHJcbiAgICBmb2xsb3dMb2FkaW5nOiBmYWxzZSxcclxuICAgIGZvbGxvd0RvbmU6IGZhbHNlLFxyXG4gICAgZm9sbG93RXJyb3I6IG51bGwsXHJcblxyXG4gICAgdW5Gb2xsb3dMb2FkaW5nOiBmYWxzZSxcclxuICAgIHVuRm9sbG93RG9uZTogZmFsc2UsXHJcbiAgICB1bkZvbGxvd0Vycm9yOiBudWxsLFxyXG59XHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0YWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBMT0dfSU5fUkVRVUVTVDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9nSW5Mb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbG9nSW5Eb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGxvZ0luRXJyb3I6IG51bGwsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIExPR19JTl9TVUNDRVNTOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2dJbkxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbG9nSW5Eb25lOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbWU6IGR1bW15VXNlcihhY3Rpb24uZGF0YSksXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIExPR19JTl9GQUlMVVJFOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2dJbkxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbG9nSW5FcnJvcjogYWN0aW9uLmVycm9yLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBMT0dfT1VUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvZ091dExvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBsb2dPdXREb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGxvZ091dEVycm9yOiBudWxsLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBMT0dfT1VUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvZ091dExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbG9nT3V0RG9uZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG1lOiBudWxsLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBMT0dfT1VUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvZ091dExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbG9nT3V0RXJyb3I6IGFjdGlvbi5lcnJvcixcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBzaWduVXBMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc2lnblVwRG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzaWduVXBFcnJvcjogbnVsbCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAvL+uNlOuvuOuNsOydtO2EsCDstpTqsIDtlbTslbzrkIxcclxuICAgICAgICAgICAgICAgIG1lOiBkdW1teVVzZXIoYWN0aW9uLmRhdGEpLFxyXG4gICAgICAgICAgICAgICAgc2lnblVwTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzaWduVXBEb25lOiB0cnVlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBTSUdOX1VQX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHNpZ25VcExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc2lnblVwRXJyb3I6IGFjdGlvbi5lcnJvcixcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGNoYW5nZU5pY2tuYW1lTG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNoYW5nZU5pY2tuYW1lRG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VOaWNrbmFtZUVycm9yOiBudWxsLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgLy/rjZTrr7jrjbDsnbTthLAg7LaU6rCA7ZW07JW865CMXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY2hhbmdlTmlja25hbWVEb25lOiB0cnVlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfRkFJTFVSRTpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgY2hhbmdlTmlja25hbWVMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNoYW5nZU5pY2tuYW1lRXJyb3I6IGFjdGlvbi5lcnJvcixcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgQUREX1BPU1RfVE9fTUU6XHJcbiAgICAgICAgICAgIC8v6rKM7Iuc6riAIGlk66W8IGRhdGHroZwg67Cb7J2MXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG1lOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUubWUsXHJcbiAgICAgICAgICAgICAgICAgICAgUG9zdHM6IFt7IGlkOiBhY3Rpb24uZGF0YSB9LCAuLi5zdGF0ZS5tZS5Qb3N0c10sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9PRl9NRTpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbWU6IHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5tZSxcclxuICAgICAgICAgICAgICAgICAgICBQb3N0czogc3RhdGUubWUuUG9zdHMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCAhPT0gYWN0aW9uLmRhdGEpLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgRk9MTE9XX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGZvbGxvd0xvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBmb2xsb3dEb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGZvbGxvd0Vycm9yOiBudWxsLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBGT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgZm9sbG93TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBmb2xsb3dEb25lOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbWU6IHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5tZSxcclxuICAgICAgICAgICAgICAgICAgICBGb2xsb3dpbmdzOiBbeyBpZDogYWN0aW9uLmRhdGEgfSwgLi4uc3RhdGUubWUuRm9sbG93aW5nc11cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgRk9MTE9XX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGZvbGxvd0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZm9sbG93RXJyb3I6IGFjdGlvbi5lcnJvcixcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgVU5GT0xMT1dfUkVRVUVTVDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgdW5Gb2xsb3dMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdW5Gb2xsb3dEb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHVuRm9sbG93RXJyb3I6IG51bGwsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIFVORk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHVuRm9sbG93TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB1bkZvbGxvd0RvbmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBtZToge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLm1lLFxyXG4gICAgICAgICAgICAgICAgICAgIEZvbGxvd2luZ3M6IHN0YXRlLm1lLkZvbGxvd2luZ3MuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCAhPT0gYWN0aW9uLmRhdGEpLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBVTkZPTExPV19GQUlMVVJFOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB1bkZvbGxvd0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdW5Gb2xsb3dFcnJvcjogYWN0aW9uLmVycm9yLFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6IHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyIsImltcG9ydCB7IGFsbCwgZm9yayB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCBwb3N0U2FnYSBmcm9tICcuL3Bvc3QnO1xyXG5pbXBvcnQgdXNlclNhZ2EgZnJvbSAnLi91c2VyJztcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHVzZXJTYWdhKSxcclxuICAgICAgICBmb3JrKHBvc3RTYWdhKSxcclxuICAgIF0pO1xyXG59IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgYWxsLCBmb3JrLCBjYWxsLCBwdXQsIHRha2UsIHRha2VFdmVyeSwgdGFrZUxhdGVzdCwgZGVsYXkgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQgc2hvcnRpZCBmcm9tICdzaG9ydGlkJztcclxuaW1wb3J0IHtcclxuICAgIEFERF9QT1NUX1JFUVVFU1QsIEFERF9QT1NUX1NVQ0NFU1MsIEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgICBBRERfQ09NTUVOVF9SRVFVRVNULCBBRERfQ09NTUVOVF9TVUNDRVNTLCBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG4gICAgUkVNT1ZFX1BPU1RfU1VDQ0VTUywgUkVNT1ZFX1BPU1RfRkFJTFVSRSwgUkVNT1ZFX1BPU1RfUkVRVUVTVCxcclxuICAgIExPQURfUE9TVF9SRVFVRVNULCBMT0FEX1BPU1RfU1VDQ0VTUywgTE9BRF9QT1NUX0ZBSUxVUkUsXHJcbiAgICBnZW5lcmF0ZUR1bW15UG9zdFxyXG59IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5pbXBvcnQgeyBBRERfUE9TVF9UT19NRSwgUkVNT1ZFX1BPU1RfT0ZfTUUgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcbi8vIGNvbnN0IGFkZFBvc3RBUEkgPSAoZGF0YSkgPT4ge1xyXG4vLyAgICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvcG9zdCcsIGRhdGEpO1xyXG4vLyB9XHJcbi8vIGNvbnN0IGFkZENvbW1lbnRBUEkgPSAoZGF0YSkgPT4ge1xyXG4vLyAgICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvcG9zdC8ke2RhdGEucG9zdElkfS9jb21tZW50JywgZGF0YSk7XHJcbi8vIH1cclxuLy8gY29uc3QgcmVtb3ZlUG9zdEFQSSA9IChkYXRhKSA9PiB7XHJcbi8vICAgICByZXR1cm4gYXhpb3MuZGVsZXRlKCcvYXBpL3Bvc3QvJHtkYXRhLnBvc3RJZH0vY29tbWVudCcsIGRhdGEpO1xyXG4vLyB9XHJcbi8vIGNvbnN0IHJlbW92ZVBvc3RBUEkgPSAoZGF0YSkgPT4ge1xyXG4vLyAgICAgcmV0dXJuIGF4aW9zLmRlbGV0ZSgnL2FwaS9wb3N0LyR7ZGF0YS5wb3N0SWR9L2NvbW1lbnQnLCBkYXRhKTtcclxuLy8gfVxyXG4vLyBjb25zdCBsb2FkUG9zdHNBUEkgPSAoZGF0YSkgPT4ge1xyXG4vLyAgICAgLy8gICAgIHJldHVybiBheGlvcy5nZXQoJy9hcGkvcG9zdHMnLCBkYXRhKTtcclxuLy8gICAgIC8vIH1cclxuXHJcblxyXG5mdW5jdGlvbiogYWRkUG9zdChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy9jYWxsID0+IHByb21pc2UgYXdhaXQg7J2065286rOgIOyDneqwge2VmOyekCBcclxuICAgICAgICAvL3RoZW4g7ZWY7KeAIOyViuyVhOuPhCDslYzslYTsmpR+XHJcbiAgICAgICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgLy8gcmVkdXgtc2FnYSDripQg7Jes65+sIOyVoeyFmOydhCBkaXNwYXRjaCDtlaAg7IiYIOyeiOuLpC5cclxuICAgICAgICBjb25zdCBpZCA9IHNob3J0aWQuZ2VuZXJhdGUoKTtcclxuICAgICAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICAvL+uNlOuvuCBkYXRhIDpkYXRhIVxyXG4gICAgICAgICAgICBkYXRhOiB7IFxyXG4gICAgICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBhY3Rpb24uZGF0YSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX1BPU1RfVE9fTUUsXHJcbiAgICAgICAgICAgIGRhdGE6IGlkLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiByZW1vdmVQb3N0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJlbW92ZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICAvL+2YhOyerCDrjbDsnbTtg4Dsl5Ag6rKM7Iuc6riAIGlkIOyeiOydjFxyXG4gICAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX09GX01FLFxyXG4gICAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkQ29tbWVudChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRDb21tZW50QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgICAgICAgICAgLy/rjZTrr7ggZGF0YSA6ZGF0YSFcclxuICAgICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiogbG9hZFBvc3RzKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQb3N0c0FQSSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IGdlbmVyYXRlRHVtbXlQb3N0KDEwKSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoQWRkUG9zdCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoQUREX1BPU1RfUkVRVUVTVCwgYWRkUG9zdCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlUG9zdCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX1BPU1RfUkVRVUVTVCwgcmVtb3ZlUG9zdCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoQWRkQ29tbWVudCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoQUREX0NPTU1FTlRfUkVRVUVTVCwgYWRkQ29tbWVudCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFBvc3RzKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1BPU1RfUkVRVUVTVCwgbG9hZFBvc3RzKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHBvc3RTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoQWRkUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaFJlbW92ZVBvc3QpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hBZGRDb21tZW50KSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZFBvc3RzKSxcclxuICAgIF0pXHJcbn0iLCJpbXBvcnQgeyBhbGwsIGZvcmssIHB1dCwgdGFrZUxhdGVzdCwgZGVsYXkgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQge1xyXG4gICAgTE9HX0lOX1JFUVVFU1QsIExPR19JTl9TVUNDRVNTLCBMT0dfSU5fRkFJTFVSRSxcclxuICAgIExPR19PVVRfUkVRVUVTVCwgTE9HX09VVF9TVUNDRVNTLCBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgICBTSUdOX1VQX1JFUVVFU1QsIFNJR05fVVBfU1VDQ0VTUywgU0lHTl9VUF9GQUlMVVJFLFxyXG4gICAgRk9MTE9XX1JFUVVFU1QsIEZPTExPV19TVUNDRVNTLCBGT0xMT1dfRkFJTFVSRSxcclxuICAgIFVORk9MTE9XX1JFUVVFU1QsIFVORk9MTE9XX1NVQ0NFU1MsIFVORk9MTE9XX0ZBSUxVUkUsXHJcbn0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG4vLyDsoJzrhIjroIjsnbTthLAg7JWE64uYIOyjvOydmChYKVxyXG4vLyBjb25zdCBsb2dJbkFQSSA9IChkYXRhKSA9PiB7XHJcbi8vICAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9sb2dpbicsIGRhdGEpO1xyXG4vLyB9O1xyXG4vLyBjb25zdCBsb2dPdXRBUEkgPSAoKSA9PiB7XHJcbi8vICAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9sb2dvdXQnKTtcclxuLy8gfVxyXG4vL2NvbnN0IHNpZ25VcEFQSSA9ICgpPT57XHJcbi8vcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvc2lnblVwJyk7XHJcbi8vfVxyXG5mdW5jdGlvbiogbG9nSW4oYWN0aW9uKSB7XHJcbiAgICAvL2xvZ2lu7JqU7LKtIOyLpO2MqOyXvOugpCDrlYzrrLjsl5AgdHJ5e30gY2F0Y2goKTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dpbkFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19JTl9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPR19JTl9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uKiBsb2dPdXQoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nT3V0QVBJKTtcclxuICAgICAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfT1VUX1NVQ0NFU1MsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX09VVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogc2lnblVwKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHNpZ25VcEFQSSk7XHJcbiAgICAgICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogU0lHTl9VUF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICAgICAgLy8gZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogU0lHTl9VUF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogZm9sbG93KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBGT0xMT1dfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogRk9MTE9XX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24qIHVuRm9sbG93KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVTkZPTExPV19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVTkZPTExPV19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG4vL+u5hOuPmeq4sCDslaHshZgg7YGs66as7JeQ7J207YSwICjsnbTrsqTtirjrpqzsiqTrhIgg7LKY65+8IOyDneqwgSlcclxuZnVuY3Rpb24qIHdhdGNoTG9nSW4oKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPR19JTl9SRVFVRVNULCBsb2dJbik7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9nT3V0KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0dfT1VUX1JFUVVFU1QsIGxvZ091dCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoU2lnblVwKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChTSUdOX1VQX1JFUVVFU1QsIHNpZ25VcCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoRm9sbG93KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChGT0xMT1dfUkVRVUVTVCwgZm9sbG93KTtcclxuXHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoVW5Gb2xsb3coKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFVORk9MTE9XX1JFUVVFU1QsIHVuRm9sbG93KTtcclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoTG9nSW4pLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2dPdXQpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hTaWduVXApLFxyXG4gICAgICAgIGZvcmsod2F0Y2hGb2xsb3cpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hVbkZvbGxvdyksXHJcbiAgICBdKVxyXG59IiwiaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSBcIi4uL3JlZHVjZXJzXCI7XHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSBcIkByZWR1eC1zYWdhL2NvcmVcIjtcclxuaW1wb3J0IHJvb3RTYWdhIGZyb20gJy4uL3NhZ2FzJztcclxuXHJcbi8vY29tcG9zZVdpdGhEZXZUb29scyDqsJzrsJzsnpAg64+E6rWs7JeQ7IScIOuztOydtOqyjFxyXG5cclxuLy8gbmV4dC1yZWR1eC13cmFwcGVy64qUIOycoOyggOqwgCDtjpjsnbTsp4Drpbwg7JqU7LKt7ZWg65WM66eI64ukIOumrOuNleyKpCDsiqTthqDslrTrpbwg7IOd7ISx7ZW07JW8IO2VmOq4sCDrlYzrrLjsl5AgY29uZmlndXJlU3RvcmXtlajsiJjrpbwg7KCV7J2Y7ZW07IScIOuEmOq4sOuKlOqyg+ydtOuLpC5cclxuY29uc3QgbG9nZ2VyTWlkZGxld2FyZSA9ICh7IGRpc3BhdGNoLCBnZXRTdGF0ZSB9KSA9PiAobmV4dCkgPT4gKGFjdGlvbikgPT4ge1xyXG4gICAgY29uc29sZS5sb2coYWN0aW9uKTsgLy/svZjshpTsl5Ag64K06rCAIO2VmOuKlCDslaHshZjrp4jri6Qg7LCN7Z6YLlxyXG4gICAgLy8gbmV4dCDripQg7JWh7IWY7J2EIOuLpOydjCDrr7jrk6Tsm6jslrTsl5Dqsowg7KCE64us7ZWY64qUIO2VqOyImOyeheuLiOuLpC4gbmV4dChhY3Rpb24pIOydtOufsCDtmJXtg5zroZwg7IKs7Jqp7ZWp64uI64ukLlxyXG4gICAgLy8g66eM7JW9IOuLpOydjCDrr7jrk6Tsm6jslrTqsIAg7JeG64uk66m0IOumrOuTgOyEnOyXkOqyjCDslaHshZjsnYQg7KCE64us7ZW07KSN64uI64ukLiBcclxuICAgIC8v66eM7JW97JeQIG5leHQg66W8IO2YuOy2nO2VmOyngCDslYrqsowg65Cc64uk66m0IOyVoeyFmOydtCDrrLTsi5zsspjrpqzrkJjslrQg66as65OA7ISc7JeQ6rKM66GcIOyghOuLrOuQmOyngCDslYrsirXri4jri6QuXHJcbiAgICByZXR1cm4gbmV4dChhY3Rpb24pO1xyXG59XHJcbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKCkgPT4ge1xyXG4gICAgLy9kaXNwYXRjaCgpIO2bhCDsgqzqsIAgb3Ig7I297YGsIO2YuOy2nOuQjFxyXG4gICAgLy9taWRkbGV3YXJl656APyDrpqzrjZXsiqTsnZgg6riw64ql7J2EIOyXheq4gCFcclxuICAgIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcclxuICAgIGNvbnN0IG1pZGRsZXdhcmVzID0gW3NhZ2FNaWRkbGV3YXJlLCBsb2dnZXJNaWRkbGV3YXJlXTsgLy/sgqzqsIAgb3Ig7I297YGsICjrr7jrk6Tsm6jslrQp64Sj7J6QIFxyXG4gICAgLy/rpqzrjZXsiqTsnZgg6riw64ql7J20IO2ZleyepSDrkJzqsowgZW5oYW5jZXJcclxuICAgIGNvbnN0IGVuaGFuY2VyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xyXG4gICAgICAgID8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKSAvL+uwsO2PrOyaqSBcclxuICAgICAgICA6IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSkgLy/qsJzrsJzsmqlcclxuXHJcbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyLCBlbmhhbmNlcik7XHJcbiAgICBzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XHJcbiAgICByZXR1cm4gc3RvcmU7XHJcbn1cclxuXHJcbi8vY3JlYXRlV3JhcHBlciA9PiBuZXh07JeQIHJlZHV4IOy2lOqwgC5cclxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoY29uZmlndXJlU3RvcmUsIHtcclxuICAgIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByZWR1eC1zYWdhL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmFrZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW1tZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYS9lZmZlY3RzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNob3J0aWRcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==