webpackHotUpdate_N_E("pages/_app",{

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
        console.log('쨥쟙');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJkdW1teVBvc3QiLCJkYXRhIiwiaWQiLCJjb250ZW50IiwiVXNlciIsIm5pY2tuYW1lIiwiSW1hZ2VzIiwiQ29tbWVudHMiLCJkdW1teUNvbW1lbnQiLCJzaG9ydElkIiwiZ2VuZXJhdGUiLCJMT0FEX1BPU1RfUkVRVUVTVCIsIkxPQURfUE9TVF9TVUNDRVNTIiwiTE9BRF9QT1NUX0ZBSUxVUkUiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJhZGRQb3N0UmVxdWVzdEFjdGlvbiIsInR5cGUiLCJhZGRDb21tZW50UmVxdWVzdEFjdGlvbiIsImluaXRhbFN0YXRlIiwibWFpblBvc3RzIiwic3JjIiwiaW1hZ2VQYXRocyIsImxvYWRQb3N0TG9hZGluZyIsImxvYWRQb3N0RG9uZSIsImxvYWRQb3N0RXJyb3IiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwicmVtb3ZlUG9zdExvYWRpbmciLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJoYXNNb3JlUG9zdCIsImdlbmVyYXRlRHVtbXlQb3N0IiwibnVtYmVyIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiZmFrZXIiLCJuYW1lIiwiZmluZE5hbWUiLCJsb3JlbSIsInBhcmFncmFwaCIsImltYWdlIiwic2VudGVuY2UiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwiZXJyb3IiLCJmaWx0ZXIiLCJpdGVtIiwicG9zdEluZGV4IiwiZmluZEluZGV4IiwidiIsInBvc3RJZCIsInBvc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUdBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLElBQUQ7QUFBQSxTQUFXO0FBQ3pCQyxNQUFFLEVBQUVELElBQUksQ0FBQ0MsRUFEZ0I7QUFDWjtBQUNiQyxXQUFPLEVBQUVGLElBQUksQ0FBQ0UsT0FGVztBQUVGO0FBQ3ZCQyxRQUFJLEVBQUU7QUFBRTtBQUNKRixRQUFFLEVBQUUsQ0FERjtBQUVGRyxjQUFRLEVBQUU7QUFGUixLQUhtQjtBQU96QkMsVUFBTSxFQUFFLEVBUGlCO0FBUXpCQyxZQUFRLEVBQUU7QUFSZSxHQUFYO0FBQUEsQ0FBbEI7O0FBVUEsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ1AsSUFBRDtBQUFBLFNBQVc7QUFDNUJDLE1BQUUsRUFBRU8sOENBQU8sQ0FBQ0MsUUFBUixFQUR3QjtBQUNKO0FBQ3hCUCxXQUFPLEVBQUVGLElBRm1CO0FBRzVCRyxRQUFJLEVBQUU7QUFBRTtBQUNKRixRQUFFLEVBQUUsQ0FERjtBQUVGRyxjQUFRLEVBQUU7QUFGUjtBQUhzQixHQUFYO0FBQUEsQ0FBckIsQyxDQVNBOzs7QUFDTyxJQUFNTSxpQkFBaUIsR0FBRyxtQkFBMUI7QUFDQSxJQUFNQyxpQkFBaUIsR0FBRyxtQkFBMUI7QUFDQSxJQUFNQyxpQkFBaUIsR0FBRyxtQkFBMUI7QUFFQSxJQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFFQSxJQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxJQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxJQUFNQyxtQkFBbUIsR0FBRyxxQkFB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dGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjQyMGM5MzdkNmQ4Y2VlMzk4NjAwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2hvcnRJZCBmcm9tICdzaG9ydGlkJztcclxuaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInO1xyXG5pbXBvcnQgZmFrZXIgZnJvbSAnZmFrZXInO1xyXG5cclxuXHJcbmNvbnN0IGR1bW15UG9zdCA9IChkYXRhKSA9PiAoe1xyXG4gICAgaWQ6IGRhdGEuaWQsIC8v6rKM7Iuc6riAIElEXHJcbiAgICBjb250ZW50OiBkYXRhLmNvbnRlbnQsIC8v6rKM7Iuc6riAIOuCtOyaqVxyXG4gICAgVXNlcjogeyAvL+qyjOyLnOq4gCDsnpHshLHtlZwg7Jyg7KCAIOygleuztCAoaWQs64uJ64Sk7J6EKVxyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIG5pY2tuYW1lOiAn642U66+47Y+s7Iqk7Yq47JeQIOyeiOuKlCDri4nrhKTsnoQg7KCc66Gc7LSIJyxcclxuICAgIH0sXHJcbiAgICBJbWFnZXM6IFtdLFxyXG4gICAgQ29tbWVudHM6IFtdLFxyXG59KVxyXG5jb25zdCBkdW1teUNvbW1lbnQgPSAoZGF0YSkgPT4gKHtcclxuICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksIC8v64yT6riAIElEXHJcbiAgICBjb250ZW50OiBkYXRhLFxyXG4gICAgVXNlcjogeyAvL+uMk+q4gCDsk7Qg7Jyg7KCAIOygleuztFxyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIG5pY2tuYW1lOiAn7J6s7Zi47KipJyxcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuLy/rhbjsmIjsnbTrpoQuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfUkVRVUVTVCA9IFwiTE9BRF9QT1NUX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9TVUNDRVNTID0gXCJMT0FEX1BPU1RfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX0ZBSUxVUkUgPSBcIkxPQURfUE9TVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9IFwiQUREX1BPU1RfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9IFwiQUREX1BPU1RfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9IFwiQUREX1BPU1RfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1JFUVVFU1QgPSBcIlJFTU9WRV9QT1NUX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1MgPSBcIlJFTU9WRV9QT1NUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX0ZBSUxVUkUgPSBcIlJFTU9WRV9QT1NUX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gXCJBRERfQ09NTUVOVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gXCJBRERfQ09NTUVOVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMVVJFID0gXCJBRERfQ09NTUVOVF9GQUlMVVJFXCI7XHJcblxyXG4vL+uFuOyYiCDsg53shLHtlajsiJhcclxuLy/rj5nsoIHsnLzroZwg7IOd7ISx7ZWY64qU6rG0IOyerOyCrOyaqeqwgOuKpeyEseydtCDrhpLsnYDqsoPrk6QuXHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0UmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoeyB0eXBlOiBBRERfUE9TVF9SRVFVRVNULCBkYXRhIH0pO1xyXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudFJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHsgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCwgZGF0YSB9KTtcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0YWxTdGF0ZSA9IHtcclxuICAgIC8v642U66+4642w7J207YSw66W8IOunjOuTpOyekCBcclxuICAgIC8vIOyEnOuyhOyqveyXkOyEnCDrjbDsnbTthLDrpbwg64KY7ZWc7YWMIOyWtOuWu+qyjCDrs7TrgrzqsbTsp4Ag66+466asIOusvOyWtOuztOyekC5cclxuICAgIC8vaWQgY29udGVudCDsnbTrn7DqsbQg7IaM66y47J6Q7J24642wICAtPiDqsozsi5zquIAocG9zdCnsnpDssrTsnZgg7IaN7ISxXHJcbiAgICAvL1VzZXIsSW1hZ2VzLENvbW1lbnRzIOuKlCDsmZwg64yA66y47J6Q64OQP1xyXG4gICAgLy9EQiDsi5ztgITrnbzsnbTspojrnpEg6rSA6rOE6rCAIOyeiOydjCBcclxuICAgIC8vaWQgY29udGVudCDripQg6rKM7Iuc6riAIOyekOyytOydmCDsho3shLHsnbTri6QuXHJcbiAgICAvL1VzZXIsSW1hZ2VzLENvbW1lbnRzIOygleuztChwb3N0KSDsmYAg64uk66W47KCV67O07JmA7J2YIOq0gOqzhOqwgCDsnojsnLzrqbQg64yA66y47J6Q66GcXHJcbiAgICBtYWluUG9zdHM6IFt7XHJcbiAgICAgICAgLy/qsozsi5zquIAgaWRcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBjb250ZW50OiBcIuyyqyDrsojsp7gg6rKM7Iuc6riAICPtlbTsi5ztg5zqt7ggI+ydteyKpO2UhOugiOyKpFwiLFxyXG4gICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgLy/qsozsi5zquIAocG9zdCkg7J6R7ISx7J6Q7ZWcIOycoOyggCDsoJXrs7QgLT4gaWQgLOuLieuEpOyehCBcclxuICAgICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICAgIG5pY2tuYW1lOiAn7KCc66Gc7LSIJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIEltYWdlczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgc3JjOiAnaHR0cHM6Ly9zZWFyY2gucHN0YXRpYy5uZXQvY29tbW9uLz9zcmM9aHR0cCUzQSUyRiUyRmJsb2dmaWxlcy5uYXZlci5uZXQlMkZNakF5TVRBM016QmZPRE1nJTJGTURBeE5qSTNOakV4TWpZMk5UYzQuNnkxWUFrRi16NjUyWmNNdWQtR1B3SDNKaW1WcHVNU0xCQ3d4Tlo3N05EZ2cuRzJtbHIxQ1lfY0d4ZHN6ckNXVTdzUUFXRHdtWmplbHBCQ2Jza0VoM3p2OGcuSlBFRy5oZGdsYnlzJTJGMjElMjVBMyUyNUFEMDclMjVBMyUyNUFEMzAlMjVBMyUyNUFEMDklMjVBMyUyNUFEMzclMjVBMyUyNUFENTIlMjVBMyUyNUFEODc3JTI1QTMlMjVERmRlY28uanBnJnR5cGU9YTM0MCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgICAgICBzcmM6ICdodHRwczovL3NlYXJjaC5wc3RhdGljLm5ldC9jb21tb24vP3NyYz1odHRwJTNBJTJGJTJGYmxvZ2ZpbGVzLm5hdmVyLm5ldCUyRk1qQXlNVEEzTXpCZk9ETWclMkZNREF4TmpJM05qRXhNalkyTlRjNC42eTFZQWtGLXo2NTJaY011ZC1HUHdIM0ppbVZwdU1TTEJDd3hOWjc3TkRnZy5HMm1scjFDWV9jR3hkc3pyQ1dVN3NRQVdEd21aamVscEJDYnNrRWgzenY4Zy5KUEVHLmhkZ2xieXMlMkYyMSUyNUEzJTI1QUQwNyUyNUEzJTI1QUQzMCUyNUEzJTI1QUQwOSUyNUEzJTI1QUQzNyUyNUEzJTI1QUQ1MiUyNUEzJTI1QUQ4NzclMjVBMyUyNURGZGVjby5qcGcmdHlwZT1hMzQwJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgICAgIHNyYzogJ2h0dHBzOi8vc2VhcmNoLnBzdGF0aWMubmV0L2NvbW1vbi8/c3JjPWh0dHAlM0ElMkYlMkZibG9nZmlsZXMubmF2ZXIubmV0JTJGTWpBeU1UQTNNekJmT0RNZyUyRk1EQXhOakkzTmpFeE1qWTJOVGM0LjZ5MVlBa0YtejY1MlpjTXVkLUdQd0gzSmltVnB1TVNMQkN3eE5aNzdORGdnLkcybWxyMUNZX2NHeGRzenJDV1U3c1FBV0R3bVpqZWxwQkNic2tFaDN6djhnLkpQRUcuaGRnbGJ5cyUyRjIxJTI1QTMlMjVBRDA3JTI1QTMlMjVBRDMwJTI1QTMlMjVBRDA5JTI1QTMlMjVBRDM3JTI1QTMlMjVBRDUyJTI1QTMlMjVBRDg3NyUyNUEzJTI1REZkZWNvLmpwZyZ0eXBlPWEzNDAnLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBDb21tZW50czogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogJ+yasOyZgCDqsJzsoJXtjJDsnbQg64KY7JmU6rWw7JqUficsXHJcbiAgICAgICAgICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgICAgICAgICBuaWNrbmFtZTogJ25lcm8nLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfsnbTqsbAg7LC4IOyLoOq4sO2VnCDrjJPquIDsnbTqtbDsmpQnLFxyXG4gICAgICAgICAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgICAgICAgICAgbmlja25hbWU6ICdob3lhJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF1cclxuICAgIH1dLFxyXG4gICAgLy/snbTrr7jsp4Ag7JeF66Gc65Oc7ZWY66m0IOqyveuhnCDsjJPsnoQgaW1hZ2VQYXRocyDsl5AgXHJcbiAgICBpbWFnZVBhdGhzOiBbXSxcclxuICAgIGxvYWRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICBsb2FkUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgbG9hZFBvc3RFcnJvcjogbnVsbCxcclxuICAgIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgIGFkZFBvc3REb25lOiBmYWxzZSxcclxuICAgIGFkZFBvc3RFcnJvcjogbnVsbCxcclxuICAgIHJlbW92ZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgIHJlbW92ZVBvc3REb25lOiBmYWxzZSxcclxuICAgIHJlbW92ZVBvc3RFcnJvcjogbnVsbCxcclxuICAgIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICAgIGFkZENvbW1lbnREb25lOiBmYWxzZSxcclxuICAgIGFkZENvbW1lbnRFcnJvcjogbnVsbCxcclxuICAgIGhhc01vcmVQb3N0OiB0cnVlLCAvL+ustO2VnCDsiqTtgazroaQg7ZWg6rG0642wIGZhbHNlIOuptCDrjZQg7J207IOBIOyViOqwgOyguOyYpOq4sC5cclxufVxyXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVEdW1teVBvc3QgPSAobnVtYmVyKSA9PiB7XHJcbiAgICByZXR1cm4gQXJyYXkobnVtYmVyKS5maWxsKCkubWFwKCgpID0+ICh7XHJcbiAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICAgIG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250ZW50OiBmYWtlci5sb3JlbS5wYXJhZ3JhcGgoKSxcclxuICAgICAgICBJbWFnZXM6IFt7XHJcbiAgICAgICAgICAgIHNyYzogZmFrZXIuaW1hZ2UuaW1hZ2UoKSxcclxuICAgICAgICB9XSxcclxuICAgICAgICBDb21tZW50czogW3tcclxuICAgICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgY29udGVudDogZmFrZXIubG9yZW0uc2VudGVuY2UoKSxcclxuICAgICAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgICAgIG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfV0sXHJcbiAgICB9KSlcclxufVxyXG4vLyBpbml0YWxTdGF0ZS5tYWluUG9zdHMgPSBpbml0YWxTdGF0ZS5tYWluUG9zdHMuY29uY2F0KGdlbmVyYXRlRHVtbXlQb3N0KDEwKSk7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgTE9BRF9QT1NUX1JFUVVFU1Q6IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+yopeyfmScpO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2FkUG9zdExvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBsb2FkUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbG9hZFBvc3RFcnJvcjogbnVsbCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIExPQURfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAvLyBtYWluUG9zdHM6IGFjdGlvbi5kYXRhLmNvbmNhdChzdGF0ZS5tYWluUG9zdHMpLFxyXG4gICAgICAgICAgICAgICAgbWFpblBvc3RzOiBbLi4uYWN0aW9uLmRhdGEsIC4uLnN0YXRlLm1haW5Qb3N0c10sXHJcbiAgICAgICAgICAgICAgICBsb2FkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbG9hZFBvc3REb25lOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaGFzTW9yZVBvc3Q6IHN0YXRlLm1haW5Qb3N0cy5sZW5ndGggPCA1MCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTE9BRF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvYWRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBsb2FkUG9zdEVycm9yOiBhY3Rpb24uZXJyb3JcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYWRkUG9zdExvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhZGRQb3N0RG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhZGRQb3N0RXJyb3I6IG51bGwsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAvL+uNlOuvuOuNsOydtO2EsCDtgbTrnbwtPuyEnOuyhCDsmpTssq3tlZjqs6Ag7J2R64u17J2YIOqwklxyXG4gICAgICAgICAgICAgICAgbWFpblBvc3RzOiBbZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSwgLi4uc3RhdGUubWFpblBvc3RzXSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFkZFBvc3REb25lOiB0cnVlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhZGRQb3N0RXJyb3I6IGFjdGlvbi5lcnJvclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUOiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHJlbW92ZVBvc3RMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlUG9zdEVycm9yOiBudWxsLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgLy9hY3Rpb24uZGF0YeyXkOuKlCDtmITsnqwg7IKt7KCc67KE7Yq8IOuIhOuluCDqsozsi5zquIAgaWQg65Ok7Ja07J6I7J2MXHJcbiAgICAgICAgICAgICAgICBtYWluUG9zdHM6IHN0YXRlLm1haW5Qb3N0cy5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkICE9PSBhY3Rpb24uZGF0YSksXHJcbiAgICAgICAgICAgICAgICByZW1vdmVQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICByZW1vdmVQb3N0RG9uZTogdHJ1ZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgcmVtb3ZlUG9zdEVycm9yOiBhY3Rpb24uZXJyb3JcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYWRkQ29tbWVudExvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhZGRDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhZGRDb21tZW50RXJyb3I6IG51bGwsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIC8v7ZiE7J6sIGFjdGlvbi5kYXRhID0+IOqyjOyLnOq4gCBpZCwg7Jyg7KCAIGlkICwg64yT6riAIOuCtOyaqSDsnojsnYxcclxuICAgICAgICAgICAgLy/rtojrs4DshLHsnYQg7KeA7Lyc7KSY7JW87ZWc64ukIC4uLlxyXG4gICAgICAgICAgICAvL+u2iOuzgOyEseydmCDtlbXsi6wg7J2AIOKYhVxyXG4gICAgICAgICAgICAvLyDrsJTrgIzripQg6rKD66eMIOyDiOuhnOyatCDqsJ3ssrTroZwg6rWQ7LK07ZWc64ukLiDrgpjrqLjsp4DripQg7LC47KGw66W8IOycoOyngO2VnOuLpC5cclxuICAgICAgICAgICAgLy/qsozsi5zquIDsnYAg7IOI66GcIOyTuOuVjOuniOuLpCDsg4jroZwg6rCd7LK0IOy2lOqwgOqwgOuQnOuLpCAtPiBtYWluUG9zdHM6IFtkdW1teVBvc3QoYWN0aW9uLmRhdGEpLCAuLi5zdGF0ZS5tYWluUG9zdHNdLFxyXG5cclxuICAgICAgICAgICAgLy/rqqntkZwgOiDqsozsi5zquIDsl5Ag7J6I64qUIOuMk+q4gOyXkCDrjJPquIAg64K07Jqp7J2EIOy2lOqwgO2VtOyVvO2VnOuLpC5cclxuICAgICAgICAgICAgLy8xLuuMk+q4gCDqsJ3ssrTsl5Ag7KCR6re87ZWY66Ck66m0IOqyjOyLnOq4gOydhCDrqLzsoIAg7LC+6rOgIOygkeq3vO2VtOyVvO2VnOuLpCAo6rKM7Iuc6riAIGlk66W8IO2Gte2VtOyEnCDssL7snYTqsbDsnoQpXHJcbiAgICAgICAgICAgIC8vaW5kZXgg64qUIDDrsojsp4DrtoDthLDsi5zsnpEuIC0+IOuCtOqwgCAx67KI6rKM7Iuc6riA7JeQIOyekeyEse2WiOuLpOy5mOuptCAsIOyduOuNseyKpOuKlCAwIFxyXG4gICAgICAgICAgICBjb25zdCBwb3N0SW5kZXggPSBzdGF0ZS5tYWluUG9zdHMuZmluZEluZGV4KHYgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKTtcclxuICAgICAgICAgICAgLy8yLu2VtOuLuSDqsozsi5zquIAgZ2V0XHJcbiAgICAgICAgICAgIGNvbnN0IHBvc3QgPSB7IC4uLnN0YXRlLm1haW5Qb3N0c1twb3N0SW5kZXhdIH07XHJcbiAgICAgICAgICAgIC8vMy7tlbTri7kg6rKM7Iuc6riA7JeQIOuMk+q4gOuCtOyaqSDstpTqsIBcclxuICAgICAgICAgICAgcG9zdC5Db21tZW50cyA9IFtkdW1teUNvbW1lbnQoYWN0aW9uLmRhdGEuY29udGVudCksIC4uLnBvc3QuQ29tbWVudHNdO1xyXG4gICAgICAgICAgICAvLzQu7KCE7LK0IOqyjOyLnOq4gCDqtaztlbTsmKTquLBcclxuICAgICAgICAgICAgY29uc3QgbWFpblBvc3RzID0gWy4uLnN0YXRlLm1haW5Qb3N0c107XHJcbiAgICAgICAgICAgIC8vNS7soITssrQg6rKM7Iuc6riA7JeQIGdldO2VnCDtlbTri7kg6rKM7Iuc6riAIOy2lOqwgFxyXG4gICAgICAgICAgICBtYWluUG9zdHNbcG9zdEluZGV4XSA9IHBvc3Q7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIC8vNi7stpTqsIBcclxuICAgICAgICAgICAgICAgIG1haW5Qb3N0cyxcclxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFkZENvbW1lbnREb25lOiB0cnVlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhZGRDb21tZW50RXJyb3I6IGFjdGlvbi5lcnJvclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDogcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9