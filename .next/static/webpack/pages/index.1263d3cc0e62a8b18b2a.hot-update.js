webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPostRequestAction, addCommentRequestAction, initalState, generateDummyPost, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_REQUEST", function() { return LOAD_POST_REQUEST; });
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
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! faker */ "./node_modules/faker/index.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_4__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var dummyPost = function dummyPost(data) {
  return {
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
  };
};

var dummyComment = function dummyComment(data) {
  return {
    id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
    //댓글 ID
    content: data,
    User: {
      //댓글 쓴 유저 정보
      id: 1,
      nickname: '재호쨩'
    }
  };
}; //노예이름.


var LOAD_POST_REQUEST = "LOAD_POST_REQUEST";
var LOAD_POST_SUCCESS = "LOAD_POST_SUCCESS";
var LOAD_POST_FAILURE = "LOAD_POST_FAILURE";
var ADD_POST_REQUEST = "ADD_POST_REQUEST";
var ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
var ADD_POST_FAILURE = "ADD_POST_FAILURE";
var REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
var REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
var REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE";
var ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
var ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
var ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE"; //노예 생성함수
//동적으로 생성하는건 재사용가능성이 높은것들.

var addPostRequestAction = function addPostRequestAction(data) {
  return {
    type: ADD_POST_REQUEST,
    data: data
  };
};
var addCommentRequestAction = function addCommentRequestAction(data) {
  return {
    type: ADD_COMMENT_REQUEST,
    data: data
  };
};
var initalState = {
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
      id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
      src: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA3MzBfODMg%2FMDAxNjI3NjExMjY2NTc4.6y1YAkF-z652ZcMud-GPwH3JimVpuMSLBCwxNZ77NDgg.G2mlr1CY_cGxdszrCWU7sQAWDwmZjelpBCbskEh3zv8g.JPEG.hdglbys%2F21%25A3%25AD07%25A3%25AD30%25A3%25AD09%25A3%25AD37%25A3%25AD52%25A3%25AD877%25A3%25DFdeco.jpg&type=a340'
    }, {
      id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
      src: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA3MzBfODMg%2FMDAxNjI3NjExMjY2NTc4.6y1YAkF-z652ZcMud-GPwH3JimVpuMSLBCwxNZ77NDgg.G2mlr1CY_cGxdszrCWU7sQAWDwmZjelpBCbskEh3zv8g.JPEG.hdglbys%2F21%25A3%25AD07%25A3%25AD30%25A3%25AD09%25A3%25AD37%25A3%25AD52%25A3%25AD877%25A3%25DFdeco.jpg&type=a340'
    }, {
      id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
      src: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA3MzBfODMg%2FMDAxNjI3NjExMjY2NTc4.6y1YAkF-z652ZcMud-GPwH3JimVpuMSLBCwxNZ77NDgg.G2mlr1CY_cGxdszrCWU7sQAWDwmZjelpBCbskEh3zv8g.JPEG.hdglbys%2F21%25A3%25AD07%25A3%25AD30%25A3%25AD09%25A3%25AD37%25A3%25AD52%25A3%25AD877%25A3%25DFdeco.jpg&type=a340'
    }],
    Comments: [{
      id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
      content: '우와 개정판이 나왔군요~',
      User: {
        id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
        nickname: 'nero'
      }
    }, {
      id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
      content: '이거 참 신기한 댓글이군요',
      User: {
        id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
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
var generateDummyPost = function generateDummyPost(number) {
  return Array(number).fill().map(function () {
    return {
      id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
      User: {
        id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
        nickname: faker__WEBPACK_IMPORTED_MODULE_4___default.a.name.findName()
      },
      content: faker__WEBPACK_IMPORTED_MODULE_4___default.a.lorem.paragraph(),
      Images: [{
        src: faker__WEBPACK_IMPORTED_MODULE_4___default.a.image.image()
      }],
      Comments: [{
        id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
        content: faker__WEBPACK_IMPORTED_MODULE_4___default.a.lorem.sentence(),
        User: {
          id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
          nickname: faker__WEBPACK_IMPORTED_MODULE_4___default.a.name.findName()
        }
      }]
    };
  });
}; // initalState.mainPosts = initalState.mainPosts.concat(generateDummyPost(10));

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initalState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

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
        mainPosts: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(action.data), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.mainPosts)),
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
        mainPosts: [dummyPost(action.data)].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.mainPosts)),
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
        mainPosts: state.mainPosts.filter(function (item) {
          return item.id !== action.data;
        }),
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
      var postIndex = state.mainPosts.findIndex(function (v) {
        return v.id === action.data.postId;
      }); //2.해당 게시글 get

      var post = _objectSpread({}, state.mainPosts[postIndex]); //3.해당 게시글에 댓글내용 추가


      post.Comments = [dummyComment(action.data.content)].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(post.Comments)); //4.전체 게시글 구해오기

      var mainPosts = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.mainPosts); //5.전체 게시글에 get한 해당 게시글 추가


      mainPosts[postIndex] = post;
      return _objectSpread(_objectSpread({}, state), {}, {
        //6.추가
        mainPosts: mainPosts,
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

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJkdW1teVBvc3QiLCJkYXRhIiwiaWQiLCJjb250ZW50IiwiVXNlciIsIm5pY2tuYW1lIiwiSW1hZ2VzIiwiQ29tbWVudHMiLCJkdW1teUNvbW1lbnQiLCJzaG9ydElkIiwiZ2VuZXJhdGUiLCJMT0FEX1BPU1RfUkVRVUVTVCIsIkxPQURfUE9TVF9TVUNDRVNTIiwiTE9BRF9QT1NUX0ZBSUxVUkUiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJhZGRQb3N0UmVxdWVzdEFjdGlvbiIsInR5cGUiLCJhZGRDb21tZW50UmVxdWVzdEFjdGlvbiIsImluaXRhbFN0YXRlIiwibWFpblBvc3RzIiwic3JjIiwiaW1hZ2VQYXRocyIsImxvYWRQb3N0TG9hZGluZyIsImxvYWRQb3N0RG9uZSIsImxvYWRQb3N0RXJyb3IiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwicmVtb3ZlUG9zdExvYWRpbmciLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJoYXNNb3JlUG9zdCIsImdlbmVyYXRlRHVtbXlQb3N0IiwibnVtYmVyIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiZmFrZXIiLCJuYW1lIiwiZmluZE5hbWUiLCJsb3JlbSIsInBhcmFncmFwaCIsImltYWdlIiwic2VudGVuY2UiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJsZW5ndGgiLCJlcnJvciIsImZpbHRlciIsIml0ZW0iLCJwb3N0SW5kZXgiLCJmaW5kSW5kZXgiLCJ2IiwicG9zdElkIiwicG9zdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsSUFBRDtBQUFBLFNBQVc7QUFDekJDLE1BQUUsRUFBRUQsSUFBSSxDQUFDQyxFQURnQjtBQUNaO0FBQ2JDLFdBQU8sRUFBRUYsSUFBSSxDQUFDRSxPQUZXO0FBRUY7QUFDdkJDLFFBQUksRUFBRTtBQUFFO0FBQ0pGLFFBQUUsRUFBRSxDQURGO0FBRUZHLGNBQVEsRUFBRTtBQUZSLEtBSG1CO0FBT3pCQyxVQUFNLEVBQUUsRUFQaUI7QUFRekJDLFlBQVEsRUFBRTtBQVJlLEdBQVg7QUFBQSxDQUFsQjs7QUFVQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDUCxJQUFEO0FBQUEsU0FBVztBQUM1QkMsTUFBRSxFQUFFTyw4Q0FBTyxDQUFDQyxRQUFSLEVBRHdCO0FBQ0o7QUFDeEJQLFdBQU8sRUFBRUYsSUFGbUI7QUFHNUJHLFFBQUksRUFBRTtBQUFFO0FBQ0pGLFFBQUUsRUFBRSxDQURGO0FBRUZHLGNBQVEsRUFBRTtBQUZSO0FBSHNCLEdBQVg7QUFBQSxDQUFyQixDLENBU0E7OztBQUNPLElBQU1NLGlCQUFpQixHQUFHLG1CQUExQjtBQUNBLElBQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUNBLElBQU1DLGlCQUFpQixHQUFHLG1CQUExQjtBQUVBLElBQU1DLGdCQUFnQixHQUFHLGtCQUF6QjtBQUNBLElBQU1DLGdCQUFnQixHQUFHLGtCQUF6QjtBQUNBLElBQU1DLGdCQUFnQixHQUFHLGtCQUF6QjtBQUVBLElBQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLElBQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLElBQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUVBLElBQU1DLG1C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b3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNob3J0SWQgZnJvbSAnc2hvcnRpZCc7XHJcbmltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcclxuaW1wb3J0IGZha2VyIGZyb20gJ2Zha2VyJztcclxuXHJcblxyXG5jb25zdCBkdW1teVBvc3QgPSAoZGF0YSkgPT4gKHtcclxuICAgIGlkOiBkYXRhLmlkLCAvL+qyjOyLnOq4gCBJRFxyXG4gICAgY29udGVudDogZGF0YS5jb250ZW50LCAvL+qyjOyLnOq4gCDrgrTsmqlcclxuICAgIFVzZXI6IHsgLy/qsozsi5zquIAg7J6R7ISx7ZWcIOycoOyggCDsoJXrs7QgKGlkLOuLieuEpOyehClcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBuaWNrbmFtZTogJ+uNlOuvuO2PrOyKpO2KuOyXkCDsnojripQg64uJ64Sk7J6EIOygnOuhnOy0iCcsXHJcbiAgICB9LFxyXG4gICAgSW1hZ2VzOiBbXSxcclxuICAgIENvbW1lbnRzOiBbXSxcclxufSlcclxuY29uc3QgZHVtbXlDb21tZW50ID0gKGRhdGEpID0+ICh7XHJcbiAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLCAvL+uMk+q4gCBJRFxyXG4gICAgY29udGVudDogZGF0YSxcclxuICAgIFVzZXI6IHsgLy/rjJPquIAg7JO0IOycoOyggCDsoJXrs7RcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBuaWNrbmFtZTogJ+yerO2YuOyoqScsXHJcbiAgICB9LFxyXG59KTtcclxuXHJcbi8v64W47JiI7J2066aELlxyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX1JFUVVFU1QgPSBcIkxPQURfUE9TVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfU1VDQ0VTUyA9IFwiTE9BRF9QT1NUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9GQUlMVVJFID0gXCJMT0FEX1BPU1RfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSBcIkFERF9QT1NUX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSBcIkFERF9QT1NUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSBcIkFERF9QT1NUX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9SRVFVRVNUID0gXCJSRU1PVkVfUE9TVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9TVUNDRVNTID0gXCJSRU1PVkVfUE9TVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gXCJSRU1PVkVfUE9TVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9IFwiQUREX0NPTU1FTlRfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9IFwiQUREX0NPTU1FTlRfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9IFwiQUREX0NPTU1FTlRfRkFJTFVSRVwiO1xyXG5cclxuLy/rhbjsmIgg7IOd7ISx7ZWo7IiYXHJcbi8v64+Z7KCB7Jy866GcIOyDneyEse2VmOuKlOqxtCDsnqzsgqzsmqnqsIDriqXshLHsnbQg64aS7J2A6rKD65OkLlxyXG5leHBvcnQgY29uc3QgYWRkUG9zdFJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHsgdHlwZTogQUREX1BPU1RfUkVRVUVTVCwgZGF0YSB9KTtcclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnRSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7IHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsIGRhdGEgfSk7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGFsU3RhdGUgPSB7XHJcbiAgICAvL+uNlOuvuOuNsOydtO2EsOulvCDrp4zrk6TsnpAgXHJcbiAgICAvLyDshJzrsoTsqr3sl5DshJwg642w7J207YSw66W8IOuCmO2VnO2FjCDslrTrlrvqsowg67O064K86rG07KeAIOuvuOumrCDrrLzslrTrs7TsnpAuXHJcbiAgICAvL2lkIGNvbnRlbnQg7J2065+w6rG0IOyGjOusuOyekOyduOuNsCAgLT4g6rKM7Iuc6riAKHBvc3Qp7J6Q7LK07J2YIOyGjeyEsVxyXG4gICAgLy9Vc2VyLEltYWdlcyxDb21tZW50cyDripQg7JmcIOuMgOusuOyekOuDkD9cclxuICAgIC8vREIg7Iuc7YCE65287J207KaI656RIOq0gOqzhOqwgCDsnojsnYwgXHJcbiAgICAvL2lkIGNvbnRlbnQg64qUIOqyjOyLnOq4gCDsnpDssrTsnZgg7IaN7ISx7J2064ukLlxyXG4gICAgLy9Vc2VyLEltYWdlcyxDb21tZW50cyDsoJXrs7QocG9zdCkg7JmAIOuLpOuluOygleuztOyZgOydmCDqtIDqs4TqsIAg7J6I7Jy866m0IOuMgOusuOyekOuhnFxyXG4gICAgbWFpblBvc3RzOiBbe1xyXG4gICAgICAgIC8v6rKM7Iuc6riAIGlkXHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgY29udGVudDogXCLssqsg67KI7Ke4IOqyjOyLnOq4gCAj7ZW07Iuc7YOc6re4ICPsnbXsiqTtlITroIjsiqRcIixcclxuICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgIC8v6rKM7Iuc6riAKHBvc3QpIOyekeyEseyekO2VnCDsnKDsoIAg7KCV67O0IC0+IGlkICzri4nrhKTsnoQgXHJcbiAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICBuaWNrbmFtZTogJ+ygnOuhnOy0iCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBJbWFnZXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgICAgIHNyYzogJ2h0dHBzOi8vc2VhcmNoLnBzdGF0aWMubmV0L2NvbW1vbi8/c3JjPWh0dHAlM0ElMkYlMkZibG9nZmlsZXMubmF2ZXIubmV0JTJGTWpBeU1UQTNNekJmT0RNZyUyRk1EQXhOakkzTmpFeE1qWTJOVGM0LjZ5MVlBa0YtejY1MlpjTXVkLUdQd0gzSmltVnB1TVNMQkN3eE5aNzdORGdnLkcybWxyMUNZX2NHeGRzenJDV1U3c1FBV0R3bVpqZWxwQkNic2tFaDN6djhnLkpQRUcuaGRnbGJ5cyUyRjIxJTI1QTMlMjVBRDA3JTI1QTMlMjVBRDMwJTI1QTMlMjVBRDA5JTI1QTMlMjVBRDM3JTI1QTMlMjVBRDUyJTI1QTMlMjVBRDg3NyUyNUEzJTI1REZkZWNvLmpwZyZ0eXBlPWEzNDAnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgc3JjOiAnaHR0cHM6Ly9zZWFyY2gucHN0YXRpYy5uZXQvY29tbW9uLz9zcmM9aHR0cCUzQSUyRiUyRmJsb2dmaWxlcy5uYXZlci5uZXQlMkZNakF5TVRBM016QmZPRE1nJTJGTURBeE5qSTNOakV4TWpZMk5UYzQuNnkxWUFrRi16NjUyWmNNdWQtR1B3SDNKaW1WcHVNU0xCQ3d4Tlo3N05EZ2cuRzJtbHIxQ1lfY0d4ZHN6ckNXVTdzUUFXRHdtWmplbHBCQ2Jza0VoM3p2OGcuSlBFRy5oZGdsYnlzJTJGMjElMjVBMyUyNUFEMDclMjVBMyUyNUFEMzAlMjVBMyUyNUFEMDklMjVBMyUyNUFEMzclMjVBMyUyNUFENTIlMjVBMyUyNUFEODc3JTI1QTMlMjVERmRlY28uanBnJnR5cGU9YTM0MCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgICAgICBzcmM6ICdodHRwczovL3NlYXJjaC5wc3RhdGljLm5ldC9jb21tb24vP3NyYz1odHRwJTNBJTJGJTJGYmxvZ2ZpbGVzLm5hdmVyLm5ldCUyRk1qQXlNVEEzTXpCZk9ETWclMkZNREF4TmpJM05qRXhNalkyTlRjNC42eTFZQWtGLXo2NTJaY011ZC1HUHdIM0ppbVZwdU1TTEJDd3hOWjc3TkRnZy5HMm1scjFDWV9jR3hkc3pyQ1dVN3NRQVdEd21aamVscEJDYnNrRWgzenY4Zy5KUEVHLmhkZ2xieXMlMkYyMSUyNUEzJTI1QUQwNyUyNUEzJTI1QUQzMCUyNUEzJTI1QUQwOSUyNUEzJTI1QUQzNyUyNUEzJTI1QUQ1MiUyNUEzJTI1QUQ4NzclMjVBMyUyNURGZGVjby5qcGcmdHlwZT1hMzQwJyxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgQ29tbWVudHM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfsmrDsmYAg6rCc7KCV7YyQ7J20IOuCmOyZlOq1sOyalH4nLFxyXG4gICAgICAgICAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgICAgICAgICAgbmlja25hbWU6ICduZXJvJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAn7J206rGwIOywuCDsi6DquLDtlZwg64yT6riA7J206rWw7JqUJyxcclxuICAgICAgICAgICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgIG5pY2tuYW1lOiAnaG95YScsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdXHJcbiAgICB9XSxcclxuICAgIC8v7J2066+47KeAIOyXheuhnOuTnO2VmOuptCDqsr3roZwg7IyT7J6EIGltYWdlUGF0aHMg7JeQIFxyXG4gICAgaW1hZ2VQYXRoczogW10sXHJcbiAgICBsb2FkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgbG9hZFBvc3REb25lOiBmYWxzZSxcclxuICAgIGxvYWRQb3N0RXJyb3I6IG51bGwsXHJcbiAgICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICBhZGRQb3N0RG9uZTogZmFsc2UsXHJcbiAgICBhZGRQb3N0RXJyb3I6IG51bGwsXHJcbiAgICByZW1vdmVQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICByZW1vdmVQb3N0RG9uZTogZmFsc2UsXHJcbiAgICByZW1vdmVQb3N0RXJyb3I6IG51bGwsXHJcbiAgICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgICBhZGRDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgICBhZGRDb21tZW50RXJyb3I6IG51bGwsXHJcbiAgICBoYXNNb3JlUG9zdDogdHJ1ZSwgLy/rrLTtlZwg7Iqk7YGs66GkIO2VoOqxtOuNsCBmYWxzZSDrqbQg642UIOydtOyDgSDslYjqsIDsoLjsmKTquLAuXHJcbn1cclxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlRHVtbXlQb3N0ID0gKG51bWJlcikgPT4ge1xyXG4gICAgcmV0dXJuIEFycmF5KG51bWJlcikuZmlsbCgpLm1hcCgoKSA9PiAoe1xyXG4gICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICBuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udGVudDogZmFrZXIubG9yZW0ucGFyYWdyYXBoKCksXHJcbiAgICAgICAgSW1hZ2VzOiBbe1xyXG4gICAgICAgICAgICBzcmM6IGZha2VyLmltYWdlLmltYWdlKCksXHJcbiAgICAgICAgfV0sXHJcbiAgICAgICAgQ29tbWVudHM6IFt7XHJcbiAgICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IGZha2VyLmxvcmVtLnNlbnRlbmNlKCksXHJcbiAgICAgICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgICAgICBuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH1dLFxyXG4gICAgfSkpXHJcbn1cclxuLy8gaW5pdGFsU3RhdGUubWFpblBvc3RzID0gaW5pdGFsU3RhdGUubWFpblBvc3RzLmNvbmNhdChnZW5lcmF0ZUR1bW15UG9zdCgxMCkpO1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIExPQURfUE9TVF9SRVFVRVNUOiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvYWRQb3N0TG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGxvYWRQb3N0RG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBsb2FkUG9zdEVycm9yOiBudWxsLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTE9BRF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIC8vIG1haW5Qb3N0czogYWN0aW9uLmRhdGEuY29uY2F0KHN0YXRlLm1haW5Qb3N0cyksXHJcbiAgICAgICAgICAgICAgICBtYWluUG9zdHM6IFsuLi5hY3Rpb24uZGF0YSwgLi4uc3RhdGUubWFpblBvc3RzXSxcclxuICAgICAgICAgICAgICAgIGxvYWRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBsb2FkUG9zdERvbmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBoYXNNb3JlUG9zdDogc3RhdGUubWFpblBvc3RzLmxlbmd0aCA8IDUwLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBMT0FEX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9hZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGxvYWRQb3N0RXJyb3I6IGFjdGlvbi5lcnJvclxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDoge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhZGRQb3N0TG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3REb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3RFcnJvcjogbnVsbCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIC8v642U66+4642w7J207YSwIO2BtOudvC0+7ISc67KEIOyalOyyre2VmOqzoCDsnZHri7XsnZgg6rCSXHJcbiAgICAgICAgICAgICAgICBtYWluUG9zdHM6IFtkdW1teVBvc3QoYWN0aW9uLmRhdGEpLCAuLi5zdGF0ZS5tYWluUG9zdHNdLFxyXG4gICAgICAgICAgICAgICAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYWRkUG9zdERvbmU6IHRydWUsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3RFcnJvcjogYWN0aW9uLmVycm9yXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX1JFUVVFU1Q6IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlUG9zdExvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICByZW1vdmVQb3N0RG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICByZW1vdmVQb3N0RXJyb3I6IG51bGwsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAvL2FjdGlvbi5kYXRh7JeQ64qUIO2YhOyerCDsgq3soJzrsoTtirwg64iE66W4IOqyjOyLnOq4gCBpZCDrk6TslrTsnojsnYxcclxuICAgICAgICAgICAgICAgIG1haW5Qb3N0czogc3RhdGUubWFpblBvc3RzLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgIT09IGFjdGlvbi5kYXRhKSxcclxuICAgICAgICAgICAgICAgIHJlbW92ZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHJlbW92ZVBvc3REb25lOiB0cnVlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICByZW1vdmVQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICByZW1vdmVQb3N0RXJyb3I6IGFjdGlvbi5lcnJvclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhZGRDb21tZW50TG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnREb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnRFcnJvcjogbnVsbCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzpcclxuICAgICAgICAgICAgLy/tmITsnqwgYWN0aW9uLmRhdGEgPT4g6rKM7Iuc6riAIGlkLCDsnKDsoIAgaWQgLCDrjJPquIAg64K07JqpIOyeiOydjFxyXG4gICAgICAgICAgICAvL+u2iOuzgOyEseydhCDsp4DsvJzspJjslbztlZzri6QgLi4uXHJcbiAgICAgICAgICAgIC8v67aI67OA7ISx7J2YIO2VteyLrCDsnYAg4piFXHJcbiAgICAgICAgICAgIC8vIOuwlOuAjOuKlCDqsoPrp4wg7IOI66Gc7Jq0IOqwneyytOuhnCDqtZDssrTtlZzri6QuIOuCmOuouOyngOuKlCDssLjsobDrpbwg7Jyg7KeA7ZWc64ukLlxyXG4gICAgICAgICAgICAvL+qyjOyLnOq4gOydgCDsg4jroZwg7JO465WM66eI64ukIOyDiOuhnCDqsJ3ssrQg7LaU6rCA6rCA65Cc64ukIC0+IG1haW5Qb3N0czogW2R1bW15UG9zdChhY3Rpb24uZGF0YSksIC4uLnN0YXRlLm1haW5Qb3N0c10sXHJcblxyXG4gICAgICAgICAgICAvL+uqqe2RnCA6IOqyjOyLnOq4gOyXkCDsnojripQg64yT6riA7JeQIOuMk+q4gCDrgrTsmqnsnYQg7LaU6rCA7ZW07JW87ZWc64ukLlxyXG4gICAgICAgICAgICAvLzEu64yT6riAIOqwneyytOyXkCDsoJHqt7ztlZjroKTrqbQg6rKM7Iuc6riA7J2EIOuovOyggCDssL7qs6Ag7KCR6re87ZW07JW87ZWc64ukICjqsozsi5zquIAgaWTrpbwg7Ya17ZW07IScIOywvuydhOqxsOyehClcclxuICAgICAgICAgICAgLy9pbmRleCDripQgMOuyiOyngOu2gO2EsOyLnOyekS4gLT4g64K06rCAIDHrsojqsozsi5zquIDsl5Ag7J6R7ISx7ZaI64uk7LmY66m0ICwg7J24642x7Iqk64qUIDAgXHJcbiAgICAgICAgICAgIGNvbnN0IHBvc3RJbmRleCA9IHN0YXRlLm1haW5Qb3N0cy5maW5kSW5kZXgodiA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWQpO1xyXG4gICAgICAgICAgICAvLzIu7ZW064u5IOqyjOyLnOq4gCBnZXRcclxuICAgICAgICAgICAgY29uc3QgcG9zdCA9IHsgLi4uc3RhdGUubWFpblBvc3RzW3Bvc3RJbmRleF0gfTtcclxuICAgICAgICAgICAgLy8zLu2VtOuLuSDqsozsi5zquIDsl5Ag64yT6riA64K07JqpIOy2lOqwgFxyXG4gICAgICAgICAgICBwb3N0LkNvbW1lbnRzID0gW2R1bW15Q29tbWVudChhY3Rpb24uZGF0YS5jb250ZW50KSwgLi4ucG9zdC5Db21tZW50c107XHJcbiAgICAgICAgICAgIC8vNC7soITssrQg6rKM7Iuc6riAIOq1rO2VtOyYpOq4sFxyXG4gICAgICAgICAgICBjb25zdCBtYWluUG9zdHMgPSBbLi4uc3RhdGUubWFpblBvc3RzXTtcclxuICAgICAgICAgICAgLy81LuyghOyytCDqsozsi5zquIDsl5AgZ2V07ZWcIO2VtOuLuSDqsozsi5zquIAg7LaU6rCAXHJcbiAgICAgICAgICAgIG1haW5Qb3N0c1twb3N0SW5kZXhdID0gcG9zdDtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgLy82Luy2lOqwgFxyXG4gICAgICAgICAgICAgICAgbWFpblBvc3RzLFxyXG4gICAgICAgICAgICAgICAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYWRkQ29tbWVudERvbmU6IHRydWUsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnRFcnJvcjogYWN0aW9uLmVycm9yXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OiByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=