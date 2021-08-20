webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginRequestAction, logoutRequestAction, initalState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
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
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//더미데이터 함수 : 클라->서버 요청 하고 응답받은 결과 
var dummyUser = function dummyUser(data) {
  return _objectSpread(_objectSpread({}, data), {}, {
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
  });
}; //노예이름


var LOG_IN_REQUEST = "LOG_IN_REQUEST";
var LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
var LOG_IN_FAILURE = "LOG_IN_FAILURE";
var LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
var LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
var LOG_OUT_FAILURE = "LOG_OUT_FAILURE";
var SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
var SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
var SIGN_UP_FAILURE = "SIGN_UP_FAILURE";
var CHANGE_NICKNAME_REQUEST = "CHANGE_NICKNAME_REQUEST";
var CHANGE_NICKNAME_SUCCESS = "CHANGE_NICKNAME_SUCCESS";
var CHANGE_NICKNAME_FAILURE = "CHANGE_NICKNAME_FAILURE";
var FOLLOW_REQUEST = "FOLLOW_REQUEST";
var FOLLOW_SUCCESS = "FOLLOW_SUCCESS";
var FOLLOW_FAILURE = "FOLLOW_FAILURE";
var UNFOLLOW_REQUEST = "UNFOLLOW_REQUEST";
var UNFOLLOW_SUCCESS = "UNFOLLOW_SUCCESS";
var UNFOLLOW_FAILURE = "UNFOLLOW_FAILURE"; //post 에서 add POST 했을 때 user me 의 Posts(내가 작성한 게시글)에 추가해줘야한다.

var ADD_POST_TO_ME = "ADD_POST_TO_ME";
var REMOVE_POST_OF_ME = "REMOVE_POST_OF_ME"; //노예 생성함수
//재사용 할 거면 동적으로 생성하자.

var loginRequestAction = function loginRequestAction(data) {
  return {
    type: LOG_IN_REQUEST,
    data: data
  };
};
var logoutRequestAction = function logoutRequestAction() {
  return {
    type: LOG_OUT_REQUEST
  };
}; //초기 상태

var initalState = {
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

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initalState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

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
          }].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.me.Posts))
        })
      });

    case REMOVE_POST_OF_ME:
      return _objectSpread(_objectSpread({}, state), {}, {
        me: _objectSpread(_objectSpread({}, state.me), {}, {
          Posts: state.me.Posts.filter(function (item) {
            return item.id !== action.data;
          })
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
          }].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.me.Followings))
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
          Followings: [{
            id: action.data
          }].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.me.Followings))
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJkdW1teVVzZXIiLCJkYXRhIiwibmlja25hbWUiLCJpZCIsIlBvc3RzIiwiRm9sbG93aW5ncyIsIkZvbGxvd2VycyIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIiwiQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MiLCJDSEFOR0VfTklDS05BTUVfRkFJTFVSRSIsIkZPTExPV19SRVFVRVNUIiwiRk9MTE9XX1NVQ0NFU1MiLCJGT0xMT1dfRkFJTFVSRSIsIlVORk9MTE9XX1JFUVVFU1QiLCJVTkZPTExPV19TVUNDRVNTIiwiVU5GT0xMT1dfRkFJTFVSRSIsIkFERF9QT1NUX1RPX01FIiwiUkVNT1ZFX1BPU1RfT0ZfTUUiLCJsb2dpblJlcXVlc3RBY3Rpb24iLCJ0eXBlIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsImluaXRhbFN0YXRlIiwibG9nSW5Mb2FkaW5nIiwibG9nSW5Eb25lIiwibG9nSW5FcnJvciIsImxvZ091dExvYWRpbmciLCJsb2dPdXREb25lIiwibG9nT3V0RXJyb3IiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEVycm9yIiwiY2hhbmdlTmlja25hbWVMb2FkaW5nIiwiY2hhbmdlTmlja25hbWVEb25lIiwiY2hhbmdlTmlja25hbWVFcnJvciIsIm1lIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsImZvbGxvd0xvYWRpbmciLCJmb2xsb3dEb25lIiwiZm9sbG93RXJyb3IiLCJ1bkZvbGxvd0xvYWRpbmciLCJ1bkZvbGxvd0RvbmUiLCJ1bkZvbGxvd0Vycm9yIiwi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TUo7QUFBUyxhQUFPRixLQUFQO0FBbkpiO0FBcUpILENBdEpEOztBQXVKZUQsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjE0YzczYmVmMjYxZDgzNzFkNWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8v642U66+4642w7J207YSwIO2VqOyImCA6IO2BtOudvC0+7ISc67KEIOyalOyyrSDtlZjqs6Ag7J2R64u167Cb7J2AIOqysOqzvCBcclxuY29uc3QgZHVtbXlVc2VyID0gKGRhdGEpID0+ICh7XHJcbiAgICAvL+yCrOyaqeycoOyggCDtlZzrqoXsl5Ag64yA7ZWcIOygleuztOuTpCEg67Cb7JWE7Ji0IVxyXG4gICAgLi4uZGF0YSwgLy8uLi5kYXRhIOyXkCBlbWFpbCxwYXNzd29yZCDsnojsnYxcclxuICAgIG5pY2tuYW1lOiAn7YOc7Zi47LChJyxcclxuICAgIGlkOiAxLCAvL+yCrOyaqeyekCBJRFxyXG4gICAgUG9zdHM6IFt7IGlkOiAxIH1dLCAvL+uCtOqwgCDsnpHshLHtlZwg6rKM7Iuc6riAIFxyXG4gICAgRm9sbG93aW5nczogW3sgbmlja25hbWU6IFwi7J6s7Zi47LChXCIgfSwgeyBuaWNrbmFtZTogXCLsg4Hsm5DssKFcIiB9LCB7IG5pY2tuYW1lOiBcIuygnOuhnOy0iFwiIH1dLFxyXG4gICAgRm9sbG93ZXJzOiBbeyBuaWNrbmFtZTogXCLsg4Hsm5DssKFcIiB9LCB7IG5pY2tuYW1lOiBcIuyerO2YuOywoVwiIH1dLFxyXG59KTtcclxuLy/rhbjsmIjsnbTrpoRcclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gXCJMT0dfSU5fUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSBcIkxPR19JTl9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9IFwiTE9HX0lOX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSBcIkxPR19PVVRfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gXCJMT0dfT1VUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9IFwiTE9HX09VVF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gXCJTSUdOX1VQX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9IFwiU0lHTl9VUF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkUgPSBcIlNJR05fVVBfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUID0gXCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MgPSBcIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSA9IFwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfUkVRVUVTVCA9IFwiRk9MTE9XX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IEZPTExPV19TVUNDRVNTID0gXCJGT0xMT1dfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX0ZBSUxVUkUgPSBcIkZPTExPV19GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfUkVRVUVTVCA9IFwiVU5GT0xMT1dfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfU1VDQ0VTUyA9IFwiVU5GT0xMT1dfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfRkFJTFVSRSA9IFwiVU5GT0xMT1dfRkFJTFVSRVwiO1xyXG5cclxuLy9wb3N0IOyXkOyEnCBhZGQgUE9TVCDtlojsnYQg65WMIHVzZXIgbWUg7J2YIFBvc3RzKOuCtOqwgCDsnpHshLHtlZwg6rKM7Iuc6riAKeyXkCDstpTqsIDtlbTspJjslbztlZzri6QuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9UT19NRSA9IFwiQUREX1BPU1RfVE9fTUVcIjtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX09GX01FID0gXCJSRU1PVkVfUE9TVF9PRl9NRVwiO1xyXG5cclxuLy/rhbjsmIgg7IOd7ISx7ZWo7IiYXHJcbi8v7J6s7IKs7JqpIO2VoCDqsbDrqbQg64+Z7KCB7Jy866GcIOyDneyEse2VmOyekC5cclxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoeyB0eXBlOiBMT0dfSU5fUkVRVUVTVCwgZGF0YSB9KTtcclxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoKSA9PiAoeyB0eXBlOiBMT0dfT1VUX1JFUVVFU1QgfSk7XHJcblxyXG4vL+y0iOq4sCDsg4Htg5xcclxuZXhwb3J0IGNvbnN0IGluaXRhbFN0YXRlID0ge1xyXG4gICAgbG9nSW5Mb2FkaW5nOiBmYWxzZSwgLy/roZzqt7jsnbgg7Iuc64+E7KSRXHJcbiAgICBsb2dJbkRvbmU6IGZhbHNlLCAvL+uhnOq3uOyduCDshLHqs7Us7Iuk7YyoXHJcbiAgICBsb2dJbkVycm9yOiBudWxsLFxyXG4gICAgbG9nT3V0TG9hZGluZzogZmFsc2UsIC8v66Gc6re47JWE7JuDIOyLnOuPhOykkVxyXG4gICAgbG9nT3V0RG9uZTogZmFsc2UsXHJcbiAgICBsb2dPdXRFcnJvcjogbnVsbCxcclxuICAgIHNpZ25VcExvYWRpbmc6IGZhbHNlLCAvL+2ajOybkOqwgOyehSDsi5zrj4TspJFcclxuICAgIHNpZ25VcERvbmU6IGZhbHNlLFxyXG4gICAgc2lnblVwRXJyb3I6IG51bGwsXHJcbiAgICBjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6IGZhbHNlLCAvL+uLieuEpOyehCDrs4Dqsr0g7Iuc64+E7KSRXHJcbiAgICBjaGFuZ2VOaWNrbmFtZURvbmU6IGZhbHNlLFxyXG4gICAgY2hhbmdlTmlja25hbWVFcnJvcjogbnVsbCxcclxuICAgIG1lOiBudWxsLFxyXG4gICAgc2lnblVwRGF0YToge30sXHJcbiAgICBsb2dpbkRhdGE6IHt9LFxyXG5cclxuICAgIGZvbGxvd0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgZm9sbG93RG9uZTogZmFsc2UsXHJcbiAgICBmb2xsb3dFcnJvcjogbnVsbCxcclxuXHJcbiAgICB1bkZvbGxvd0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgdW5Gb2xsb3dEb25lOiBmYWxzZSxcclxuICAgIHVuRm9sbG93RXJyb3I6IG51bGwsXHJcbn1cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIExPR19JTl9SRVFVRVNUOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2dJbkxvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBsb2dJbkRvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbG9nSW5FcnJvcjogbnVsbCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvZ0luTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBsb2dJbkRvbmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBtZTogZHVtbXlVc2VyKGFjdGlvbi5kYXRhKSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgTE9HX0lOX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvZ0luTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBsb2dJbkVycm9yOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIExPR19PVVRfUkVRVUVTVDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9nT3V0TG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGxvZ091dERvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbG9nT3V0RXJyb3I6IG51bGwsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9nT3V0TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBsb2dPdXREb25lOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbWU6IG51bGwsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIExPR19PVVRfRkFJTFVSRTpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbG9nT3V0TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBsb2dPdXRFcnJvcjogYWN0aW9uLmVycm9yLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBTSUdOX1VQX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHNpZ25VcExvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzaWduVXBEb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHNpZ25VcEVycm9yOiBudWxsLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIC8v642U66+4642w7J207YSwIOy2lOqwgO2VtOyVvOuQjFxyXG4gICAgICAgICAgICAgICAgbWU6IGR1bW15VXNlcihhY3Rpb24uZGF0YSksXHJcbiAgICAgICAgICAgICAgICBzaWduVXBMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHNpZ25VcERvbmU6IHRydWUsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIFNJR05fVVBfRkFJTFVSRTpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgc2lnblVwTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzaWduVXBFcnJvcjogYWN0aW9uLmVycm9yLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfUkVRVUVTVDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgY2hhbmdlTmlja25hbWVMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY2hhbmdlTmlja25hbWVEb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNoYW5nZU5pY2tuYW1lRXJyb3I6IG51bGwsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAvL+uNlOuvuOuNsOydtO2EsCDstpTqsIDtlbTslbzrkIxcclxuICAgICAgICAgICAgICAgIGNoYW5nZU5pY2tuYW1lTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VOaWNrbmFtZURvbmU6IHRydWUsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY2hhbmdlTmlja25hbWVFcnJvcjogYWN0aW9uLmVycm9yLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBBRERfUE9TVF9UT19NRTpcclxuICAgICAgICAgICAgLy/qsozsi5zquIAgaWTrpbwgZGF0YeuhnCDrsJvsnYxcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbWU6IHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5tZSxcclxuICAgICAgICAgICAgICAgICAgICBQb3N0czogW3sgaWQ6IGFjdGlvbi5kYXRhIH0sIC4uLnN0YXRlLm1lLlBvc3RzXSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX09GX01FOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBtZToge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLm1lLFxyXG4gICAgICAgICAgICAgICAgICAgIFBvc3RzOiBzdGF0ZS5tZS5Qb3N0cy5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkICE9PSBhY3Rpb24uZGF0YSksXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBGT0xMT1dfUkVRVUVTVDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgZm9sbG93TG9hZGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGZvbGxvd0RvbmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZm9sbG93RXJyb3I6IG51bGwsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIEZPTExPV19TVUNDRVNTOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBmb2xsb3dMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGZvbGxvd0RvbmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBtZToge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLm1lLFxyXG4gICAgICAgICAgICAgICAgICAgIEZvbGxvd2luZ3M6IFt7IGlkOiBhY3Rpb24uZGF0YSB9LCAuLi5zdGF0ZS5tZS5Gb2xsb3dpbmdzXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBGT0xMT1dfRkFJTFVSRTpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgZm9sbG93TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBmb2xsb3dFcnJvcjogYWN0aW9uLmVycm9yLFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIGNhc2UgVU5GT0xMT1dfUkVRVUVTVDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgdW5Gb2xsb3dMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdW5Gb2xsb3dEb25lOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHVuRm9sbG93RXJyb3I6IG51bGwsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIFVORk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHVuRm9sbG93TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB1bkZvbGxvd0RvbmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBtZToge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLm1lLFxyXG4gICAgICAgICAgICAgICAgICAgIEZvbGxvd2luZ3M6IFt7IGlkOiBhY3Rpb24uZGF0YSB9LCAuLi5zdGF0ZS5tZS5Gb2xsb3dpbmdzXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBVTkZPTExPV19GQUlMVVJFOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB1bkZvbGxvd0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdW5Gb2xsb3dFcnJvcjogYWN0aW9uLmVycm9yLFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6IHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=