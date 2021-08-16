webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPostRequestAction, addCommentRequestAction, initalState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
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
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_2__);



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
      id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
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
      id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
      nickname: '재호쨩'
    }
  };
}; //노예이름


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
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initalState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJkdW1teVBvc3QiLCJkYXRhIiwiaWQiLCJjb250ZW50IiwiVXNlciIsInNob3J0SWQiLCJnZW5lcmF0ZSIsIm5pY2tuYW1lIiwiSW1hZ2VzIiwiQ29tbWVudHMiLCJkdW1teUNvbW1lbnQiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJhZGRQb3N0UmVxdWVzdEFjdGlvbiIsInR5cGUiLCJhZGRDb21tZW50UmVxdWVzdEFjdGlvbiIsImluaXRhbFN0YXRlIiwibWFpblBvc3RzIiwic3JjIiwiaW1hZ2VQYXRocyIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyb3IiLCJyZW1vdmVQb3N0TG9hZGluZyIsInJlbW92ZVBvc3REb25lIiwicmVtb3ZlUG9zdEVycm9yIiwiYWRkQ29tbWVudExvYWRpbmciLCJhZGRDb21tZW50RG9uZSIsImFkZENvbW1lbnRFcnJvciIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsImVycm9yIiwiZmlsdGVyIiwiaXRlbSIsInBvc3RJbmRleCIsImZpbmRJbmRleCIsInYiLCJwb3N0SWQiLCJwb3N0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsSUFBRDtBQUFBLFNBQVc7QUFDekJDLE1BQUUsRUFBRUQsSUFBSSxDQUFDQyxFQURnQjtBQUNaO0FBQ2JDLFdBQU8sRUFBRUYsSUFBSSxDQUFDRSxPQUZXO0FB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QUxwQjs7QUFPSixTQUFLZixtQkFBTDtBQUNJLDZDQUNPa0IsS0FEUDtBQUVJSix5QkFBaUIsRUFBRSxLQUZ2QjtBQUdJRSx1QkFBZSxFQUFFRyxNQUFNLENBQUNDO0FBSDVCOztBQUtKO0FBQVMsYUFBT0YsS0FBUDtBQXBGYjtBQXdGSCxDQXpGRDs7QUEwRmVELHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmRjYzc0MGYzYzYyYTBkOTA4YWZiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2hvcnRJZCBmcm9tICdzaG9ydGlkJztcclxuXHJcbmNvbnN0IGR1bW15UG9zdCA9IChkYXRhKSA9PiAoe1xyXG4gICAgaWQ6IGRhdGEuaWQsIC8v6rKM7Iuc6riAIElEXHJcbiAgICBjb250ZW50OiBkYXRhLmNvbnRlbnQsIC8v6rKM7Iuc6riAIOuCtOyaqVxyXG4gICAgVXNlcjogeyAvL+qyjOyLnOq4gCDsnpHshLHtlZwg7Jyg7KCAIOygleuztCAoaWQs64uJ64Sk7J6EKVxyXG4gICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgbmlja25hbWU6ICfrjZTrr7jtj6zsiqTtirjsl5Ag7J6I64qUIOuLieuEpOyehCDsoJzroZzstIgnLFxyXG4gICAgfSxcclxuICAgIEltYWdlczogW10sXHJcbiAgICBDb21tZW50czogW10sXHJcbn0pXHJcbmNvbnN0IGR1bW15Q29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG4gICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSwgLy/rjJPquIAgSURcclxuICAgIGNvbnRlbnQ6IGRhdGEsXHJcbiAgICBVc2VyOiB7IC8v64yT6riAIOyTtCDsnKDsoIAg7KCV67O0XHJcbiAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICBuaWNrbmFtZTogJ+yerO2YuOyoqScsXHJcbiAgICB9LFxyXG59KTtcclxuXHJcbi8v64W47JiI7J2066aEXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gXCJBRERfUE9TVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gXCJBRERfUE9TVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gXCJBRERfUE9TVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9IFwiUkVNT1ZFX1BPU1RfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9IFwiUkVNT1ZFX1BPU1RfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRSA9IFwiUkVNT1ZFX1BPU1RfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSBcIkFERF9DT01NRU5UX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSBcIkFERF9DT01NRU5UX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSBcIkFERF9DT01NRU5UX0ZBSUxVUkVcIjtcclxuXHJcbi8v64W47JiIIOyDneyEse2VqOyImFxyXG4vL+uPmeyggeycvOuhnCDsg53shLHtlZjripTqsbQg7J6s7IKs7Jqp6rCA64ql7ISx7J20IOuGkuydgOqyg+uTpC5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3RSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7IHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsIGRhdGEgfSk7XHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50UmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoeyB0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULCBkYXRhIH0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRhbFN0YXRlID0ge1xyXG4gICAgLy/rjZTrr7jrjbDsnbTthLDrpbwg66eM65Ok7J6QIFxyXG4gICAgLy8g7ISc67KE7Kq97JeQ7IScIOuNsOydtO2EsOulvCDrgpjtlZzthYwg7Ja065a76rKMIOuztOuCvOqxtOyngCDrr7jrpqwg66y87Ja067O07J6QLlxyXG4gICAgLy9pZCBjb250ZW50IOydtOufsOqxtCDshozrrLjsnpDsnbjrjbAgIC0+IOqyjOyLnOq4gChwb3N0KeyekOyytOydmCDsho3shLFcclxuICAgIC8vVXNlcixJbWFnZXMsQ29tbWVudHMg64qUIOyZnCDrjIDrrLjsnpDrg5A/XHJcbiAgICAvL0RCIOyLnO2AhOudvOydtOymiOuekSDqtIDqs4TqsIAg7J6I7J2MIFxyXG4gICAgLy9pZCBjb250ZW50IOuKlCDqsozsi5zquIAg7J6Q7LK07J2YIOyGjeyEseydtOuLpC5cclxuICAgIC8vVXNlcixJbWFnZXMsQ29tbWVudHMg7KCV67O0KHBvc3QpIOyZgCDri6TrpbjsoJXrs7TsmYDsnZgg6rSA6rOE6rCAIOyeiOycvOuptCDrjIDrrLjsnpDroZxcclxuICAgIG1haW5Qb3N0czogW3tcclxuICAgICAgICAvL+qyjOyLnOq4gCBpZFxyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIGNvbnRlbnQ6IFwi7LKrIOuyiOynuCDqsozsi5zquIAgI+2VtOyLnO2DnOq3uCAj7J217Iqk7ZSE66CI7IqkXCIsXHJcbiAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICAvL+qyjOyLnOq4gChwb3N0KSDsnpHshLHsnpDtlZwg7Jyg7KCAIOygleuztCAtPiBpZCAs64uJ64Sk7J6EIFxyXG4gICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgbmlja25hbWU6ICfsoJzroZzstIgnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgSW1hZ2VzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgICAgICBzcmM6ICdodHRwczovL3NlYXJjaC5wc3RhdGljLm5ldC9jb21tb24vP3NyYz1odHRwJTNBJTJGJTJGYmxvZ2ZpbGVzLm5hdmVyLm5ldCUyRk1qQXlNVEEzTXpCZk9ETWclMkZNREF4TmpJM05qRXhNalkyTlRjNC42eTFZQWtGLXo2NTJaY011ZC1HUHdIM0ppbVZwdU1TTEJDd3hOWjc3TkRnZy5HMm1scjFDWV9jR3hkc3pyQ1dVN3NRQVdEd21aamVscEJDYnNrRWgzenY4Zy5KUEVHLmhkZ2xieXMlMkYyMSUyNUEzJTI1QUQwNyUyNUEzJTI1QUQzMCUyNUEzJTI1QUQwOSUyNUEzJTI1QUQzNyUyNUEzJTI1QUQ1MiUyNUEzJTI1QUQ4NzclMjVBMyUyNURGZGVjby5qcGcmdHlwZT1hMzQwJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgICAgIHNyYzogJ2h0dHBzOi8vc2VhcmNoLnBzdGF0aWMubmV0L2NvbW1vbi8/c3JjPWh0dHAlM0ElMkYlMkZibG9nZmlsZXMubmF2ZXIubmV0JTJGTWpBeU1UQTNNekJmT0RNZyUyRk1EQXhOakkzTmpFeE1qWTJOVGM0LjZ5MVlBa0YtejY1MlpjTXVkLUdQd0gzSmltVnB1TVNMQkN3eE5aNzdORGdnLkcybWxyMUNZX2NHeGRzenJDV1U3c1FBV0R3bVpqZWxwQkNic2tFaDN6djhnLkpQRUcuaGRnbGJ5cyUyRjIxJTI1QTMlMjVBRDA3JTI1QTMlMjVBRDMwJTI1QTMlMjVBRDA5JTI1QTMlMjVBRDM3JTI1QTMlMjVBRDUyJTI1QTMlMjVBRDg3NyUyNUEzJTI1REZkZWNvLmpwZyZ0eXBlPWEzNDAnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgc3JjOiAnaHR0cHM6Ly9zZWFyY2gucHN0YXRpYy5uZXQvY29tbW9uLz9zcmM9aHR0cCUzQSUyRiUyRmJsb2dmaWxlcy5uYXZlci5uZXQlMkZNakF5TVRBM016QmZPRE1nJTJGTURBeE5qSTNOakV4TWpZMk5UYzQuNnkxWUFrRi16NjUyWmNNdWQtR1B3SDNKaW1WcHVNU0xCQ3d4Tlo3N05EZ2cuRzJtbHIxQ1lfY0d4ZHN6ckNXVTdzUUFXRHdtWmplbHBCQ2Jza0VoM3p2OGcuSlBFRy5oZGdsYnlzJTJGMjElMjVBMyUyNUFEMDclMjVBMyUyNUFEMzAlMjVBMyUyNUFEMDklMjVBMyUyNUFEMzclMjVBMyUyNUFENTIlMjVBMyUyNUFEODc3JTI1QTMlMjVERmRlY28uanBnJnR5cGU9YTM0MCcsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIENvbW1lbnRzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAn7Jqw7JmAIOqwnOygle2MkOydtCDrgpjsmZTqtbDsmpR+JyxcclxuICAgICAgICAgICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgIG5pY2tuYW1lOiAnbmVybycsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogJ+ydtOqxsCDssLgg7Iug6riw7ZWcIOuMk+q4gOydtOq1sOyalCcsXHJcbiAgICAgICAgICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgICAgICAgICBuaWNrbmFtZTogJ2hveWEnLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXVxyXG4gICAgfV0sXHJcbiAgICAvL+ydtOuvuOyngCDsl4XroZzrk5ztlZjrqbQg6rK966GcIOyMk+yehCBpbWFnZVBhdGhzIOyXkCBcclxuICAgIGltYWdlUGF0aHM6IFtdLFxyXG4gICAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgYWRkUG9zdEVycm9yOiBudWxsLFxyXG4gICAgcmVtb3ZlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgcmVtb3ZlUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgcmVtb3ZlUG9zdEVycm9yOiBudWxsLFxyXG4gICAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gICAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gICAgYWRkQ29tbWVudEVycm9yOiBudWxsLFxyXG5cclxufVxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDoge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhZGRQb3N0TG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3REb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3RFcnJvcjogbnVsbCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIC8v642U66+4642w7J207YSwIO2BtOudvC0+7ISc67KEIOyalOyyre2VmOqzoCDsnZHri7XsnZgg6rCSXHJcbiAgICAgICAgICAgICAgICBtYWluUG9zdHM6IFtkdW1teVBvc3QoYWN0aW9uLmRhdGEpLCAuLi5zdGF0ZS5tYWluUG9zdHNdLFxyXG4gICAgICAgICAgICAgICAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYWRkUG9zdERvbmU6IHRydWUsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3RFcnJvcjogYWN0aW9uLmVycm9yXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX1JFUVVFU1Q6IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlUG9zdExvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICByZW1vdmVQb3N0RG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICByZW1vdmVQb3N0RXJyb3I6IG51bGwsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAvL2FjdGlvbi5kYXRh7JeQ64qUIO2YhOyerCDsgq3soJzrsoTtirwg64iE66W4IOqyjOyLnOq4gCBpZCDrk6TslrTsnojsnYxcclxuICAgICAgICAgICAgICAgIG1haW5Qb3N0czogc3RhdGUubWFpblBvc3RzLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgIT09IGFjdGlvbi5kYXRhKSxcclxuICAgICAgICAgICAgICAgIHJlbW92ZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHJlbW92ZVBvc3REb25lOiB0cnVlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICByZW1vdmVQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICByZW1vdmVQb3N0RXJyb3I6IGFjdGlvbi5lcnJvclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhZGRDb21tZW50TG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnREb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnRFcnJvcjogbnVsbCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzpcclxuICAgICAgICAgICAgLy/tmITsnqwgYWN0aW9uLmRhdGEgPT4g6rKM7Iuc6riAIGlkLCDsnKDsoIAgaWQgLCDrjJPquIAg64K07JqpIOyeiOydjFxyXG4gICAgICAgICAgICAvL+u2iOuzgOyEseydhCDsp4DsvJzspJjslbztlZzri6QgLi4uXHJcbiAgICAgICAgICAgIC8v67aI67OA7ISx7J2YIO2VteyLrCDsnYAg4piFXHJcbiAgICAgICAgICAgIC8vIOuwlOuAjOuKlCDqsoPrp4wg7IOI66Gc7Jq0IOqwneyytOuhnCDqtZDssrTtlZzri6QuIOuCmOuouOyngOuKlCDssLjsobDrpbwg7Jyg7KeA7ZWc64ukLlxyXG4gICAgICAgICAgICAvL+qyjOyLnOq4gOydgCDsg4jroZwg7JO465WM66eI64ukIOyDiOuhnCDqsJ3ssrQg7LaU6rCA6rCA65Cc64ukIC0+IG1haW5Qb3N0czogW2R1bW15UG9zdChhY3Rpb24uZGF0YSksIC4uLnN0YXRlLm1haW5Qb3N0c10sXHJcblxyXG4gICAgICAgICAgICAvL+uqqe2RnCA6IOqyjOyLnOq4gOyXkCDsnojripQg64yT6riA7JeQIOuMk+q4gCDrgrTsmqnsnYQg7LaU6rCA7ZW07JW87ZWc64ukLlxyXG4gICAgICAgICAgICAvLzEu64yT6riAIOqwneyytOyXkCDsoJHqt7ztlZjroKTrqbQg6rKM7Iuc6riA7J2EIOuovOyggCDssL7qs6Ag7KCR6re87ZW07JW87ZWc64ukICjqsozsi5zquIAgaWTrpbwg7Ya17ZW07IScIOywvuydhOqxsOyehClcclxuICAgICAgICAgICAgLy9pbmRleCDripQgMOuyiOyngOu2gO2EsOyLnOyekS4gLT4g64K06rCAIDHrsojqsozsi5zquIDsl5Ag7J6R7ISx7ZaI64uk7LmY66m0ICwg7J24642x7Iqk64qUIDAgXHJcbiAgICAgICAgICAgIGNvbnN0IHBvc3RJbmRleCA9IHN0YXRlLm1haW5Qb3N0cy5maW5kSW5kZXgodiA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWQpO1xyXG4gICAgICAgICAgICAvLzIu7ZW064u5IOqyjOyLnOq4gCBnZXRcclxuICAgICAgICAgICAgY29uc3QgcG9zdCA9IHsgLi4uc3RhdGUubWFpblBvc3RzW3Bvc3RJbmRleF0gfTtcclxuICAgICAgICAgICAgLy8zLu2VtOuLuSDqsozsi5zquIDsl5Ag64yT6riA64K07JqpIOy2lOqwgFxyXG4gICAgICAgICAgICBwb3N0LkNvbW1lbnRzID0gW2R1bW15Q29tbWVudChhY3Rpb24uZGF0YS5jb250ZW50KSwgLi4ucG9zdC5Db21tZW50c107XHJcbiAgICAgICAgICAgIC8vNC7soITssrQg6rKM7Iuc6riAIOq1rO2VtOyYpOq4sFxyXG4gICAgICAgICAgICBjb25zdCBtYWluUG9zdHMgPSBbLi4uc3RhdGUubWFpblBvc3RzXTtcclxuICAgICAgICAgICAgLy81LuyghOyytCDqsozsi5zquIDsl5AgZ2V07ZWcIO2VtOuLuSDqsozsi5zquIAg7LaU6rCAXHJcbiAgICAgICAgICAgIG1haW5Qb3N0c1twb3N0SW5kZXhdID0gcG9zdDtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgLy82Luy2lOqwgFxyXG4gICAgICAgICAgICAgICAgbWFpblBvc3RzLFxyXG4gICAgICAgICAgICAgICAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYWRkQ29tbWVudERvbmU6IHRydWUsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnRFcnJvcjogYWN0aW9uLmVycm9yXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OiByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=