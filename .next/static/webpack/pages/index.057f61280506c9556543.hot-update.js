webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: addPost, initalState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initalState", function() { return initalState; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//노예이름
//게시글 작성
var ADD_POST = "ADD_POST"; //노예 생성함수

var addPost = function addPost() {
  return {
    type: ADD_POST
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
    //게시글의 id ,내용
    id: 1,
    content: "첫 번째 게시글 #해시태그 #익스프레스",
    User: {
      //게시글 작성자의 정보 -> id ,닉네임 
      id: 'ekem159',
      nickname: '제로초'
    },
    Images: [{
      src: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA3MzBfODMg%2FMDAxNjI3NjExMjY2NTc4.6y1YAkF-z652ZcMud-GPwH3JimVpuMSLBCwxNZ77NDgg.G2mlr1CY_cGxdszrCWU7sQAWDwmZjelpBCbskEh3zv8g.JPEG.hdglbys%2F21%25A3%25AD07%25A3%25AD30%25A3%25AD09%25A3%25AD37%25A3%25AD52%25A3%25AD877%25A3%25DFdeco.jpg&type=a340'
    }, {
      src: 'heeeeee'
    }, {
      src: 'hhhhhhhhhhhhh'
    }],
    Comments: [{
      User: {
        nickname: 'nero'
      },
      content: '우와 개정판이 나왔군요~'
    }, {
      User: {
        nickname: 'hero'
      },
      content: '얼른  !!!! 사고싶어요~!'
    }]
  }],
  //이미지 업로드하면 경로 쌓임 imagePaths 에 
  imagePaths: [],
  postAdded: false
};
var dummyPost = {
  id: 2,
  content: '더미데이터',
  User: {
    id: 1,
    nickname: '제로초'
  },
  Images: [],
  Comments: []
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initalState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_POST:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          mainPosts: [dummyPost].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.mainPosts)),
          postAdded: true
        });
      }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJBRERfUE9TVCIsImFkZFBvc3QiLCJ0eXBlIiwiaW5pdGFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsImNvbnRlbnQiLCJVc2VyIiwibmlja25hbWUiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50cyIsImltYWdlUGF0aHMiLCJwb3N0QWRkZWQiLCJkdW1teVBvc3QiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsSUFBTUEsUUFBUSxHQUFHLFVBQWpCLEMsQ0FFQTs7QUFDTyxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLFNBQU87QUFBRUMsUUFBSSxFQUFFRjtBQUFSLEdBQVA7QUFBQSxDQUFoQjtBQUVBLElBQU1HLFdBQVcsR0FBRztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQyxXQUFTLEVBQUUsQ0FBQztBQUNSO0FBQ0FDLE1BQUUsRUFBRSxDQUZJO0FBR1JDLFdBQU8sRUFBRSx1QkFIRDtBQUlSQyxRQUFJLEVBQUU7QUFDRjtBQUNBRixRQUFFLEVBQUUsU0FGRjtBQUdGRyxjQUFRLEVBQUU7QUFIUixLQUpFO0FBU1JDLFVBQU0sRUFBRSxDQUNKO0FBQ0lDLFNBQUcsRUFBRTtBQURULEtBREksRUFJSjtBQUNJQSxTQUFHLEVBQUU7QUFEVCxLQUpJLEVBT0o7QUFDSUEsU0FBRyxFQUFFO0FBRFQsS0FQSSxDQVRBO0FBb0JSQyxZQUFRLEVBQUUsQ0FDTjtBQUNJSixVQUFJLEVBQUU7QUFDRkMsZ0JBQVEsRUFBRTtBQURSLE9BRFY7QUFJSUYsYUFBTyxFQUFFO0FBSmIsS0FETSxFQU9OO0FBQ0lDLFVBQUksRUFBRTtBQUNGQyxnQkFBUSxFQUFFO0FBRFIsT0FEVjtBQUlJRixhQUFPLEVBQUU7QUFKYixLQVBNO0FBcEJGLEdBQUQsQ0FSWTtBQTJDdkI7QUFDQU0sWUFBVSxFQUFFLEVBNUNXO0FBNkN2QkMsV0FBUyxFQUFFO0FBN0NZLENBQXBCO0FBK0NQLElBQU1DLFNBQVMsR0FBRztBQUNkVCxJQUFFLEVBQUUsQ0FEVTtBQUVkQyxTQUFPLEVBQUUsT0FGSztBQUdkQyxNQUFJLEVBQUU7QUFDRkYsTUFBRSxFQUFFLENBREY7QUFFRkcsWUFBUSxFQUFFO0FBRlIsR0FIUTtBQU9kQyxRQUFNLEVBQUUsRUFQTTtBQVFkRSxVQUFRLEVBQUU7QUFSSSxDQUFsQjs7QUFVQSxJQUFNSSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFpQztBQUFBLE1BQWhDQyxLQUFnQyx1RUFBeEJiLFdBQXdCO0FBQUEsTUFBWGMsTUFBVzs7QUFDN0MsVUFBUUEsTUFBTSxDQUFDZixJQUFmO0FBQ0ksU0FBS0YsUUFBTDtBQUFlO0FBQ1gsK0NBQ09nQixLQURQO0FBRUlaLG1CQUFTLEdBQUdVLFNBQUgsc0dBQWlCRSxLQUFLLENBQUNaLFNBQXZCLEVBRmI7QUFHSVMsbUJBQVMsRUFBRTtBQUhmO0FBS0g7O0FBQ0Q7QUFBUyxhQUFPRyxLQUFQO0FBUmI7QUFVSCxDQVhEOztBQVllRCxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wNTdmNjEyODA1MDZjOTU1NjU0My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy/rhbjsmIjsnbTrpoRcclxuLy/qsozsi5zquIAg7J6R7ISxXHJcbmNvbnN0IEFERF9QT1NUID0gXCJBRERfUE9TVFwiO1xyXG5cclxuLy/rhbjsmIgg7IOd7ISx7ZWo7IiYXHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0ID0gKCkgPT4gKHsgdHlwZTogQUREX1BPU1QgfSk7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGFsU3RhdGUgPSB7XHJcbiAgICAvL+uNlOuvuOuNsOydtO2EsOulvCDrp4zrk6TsnpAgXHJcbiAgICAvLyDshJzrsoTsqr3sl5DshJwg642w7J207YSw66W8IOuCmO2VnO2FjCDslrTrlrvqsowg67O064K86rG07KeAIOuvuOumrCDrrLzslrTrs7TsnpAuXHJcbiAgICAvL2lkIGNvbnRlbnQg7J2065+w6rG0IOyGjOusuOyekOyduOuNsCAgLT4g6rKM7Iuc6riAKHBvc3Qp7J6Q7LK07J2YIOyGjeyEsVxyXG4gICAgLy9Vc2VyLEltYWdlcyxDb21tZW50cyDripQg7JmcIOuMgOusuOyekOuDkD9cclxuICAgIC8vREIg7Iuc7YCE65287J207KaI656RIOq0gOqzhOqwgCDsnojsnYwgXHJcbiAgICAvL2lkIGNvbnRlbnQg64qUIOqyjOyLnOq4gCDsnpDssrTsnZgg7IaN7ISx7J2064ukLlxyXG4gICAgLy9Vc2VyLEltYWdlcyxDb21tZW50cyDsoJXrs7QocG9zdCkg7JmAIOuLpOuluOygleuztOyZgOydmCDqtIDqs4TqsIAg7J6I7Jy866m0IOuMgOusuOyekOuhnFxyXG4gICAgbWFpblBvc3RzOiBbe1xyXG4gICAgICAgIC8v6rKM7Iuc6riA7J2YIGlkICzrgrTsmqlcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBjb250ZW50OiBcIuyyqyDrsojsp7gg6rKM7Iuc6riAICPtlbTsi5ztg5zqt7ggI+ydteyKpO2UhOugiOyKpFwiLFxyXG4gICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgLy/qsozsi5zquIAg7J6R7ISx7J6Q7J2YIOygleuztCAtPiBpZCAs64uJ64Sk7J6EIFxyXG4gICAgICAgICAgICBpZDogJ2VrZW0xNTknLFxyXG4gICAgICAgICAgICBuaWNrbmFtZTogJ+ygnOuhnOy0iCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBJbWFnZXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc3JjOiAnaHR0cHM6Ly9zZWFyY2gucHN0YXRpYy5uZXQvY29tbW9uLz9zcmM9aHR0cCUzQSUyRiUyRmJsb2dmaWxlcy5uYXZlci5uZXQlMkZNakF5TVRBM016QmZPRE1nJTJGTURBeE5qSTNOakV4TWpZMk5UYzQuNnkxWUFrRi16NjUyWmNNdWQtR1B3SDNKaW1WcHVNU0xCQ3d4Tlo3N05EZ2cuRzJtbHIxQ1lfY0d4ZHN6ckNXVTdzUUFXRHdtWmplbHBCQ2Jza0VoM3p2OGcuSlBFRy5oZGdsYnlzJTJGMjElMjVBMyUyNUFEMDclMjVBMyUyNUFEMzAlMjVBMyUyNUFEMDklMjVBMyUyNUFEMzclMjVBMyUyNUFENTIlMjVBMyUyNUFEODc3JTI1QTMlMjVERmRlY28uanBnJnR5cGU9YTM0MCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNyYzogJ2hlZWVlZWUnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzcmM6ICdoaGhoaGhoaGhoaGhoJyxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgQ29tbWVudHM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIG5pY2tuYW1lOiAnbmVybycsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogJ+yasOyZgCDqsJzsoJXtjJDsnbQg64KY7JmU6rWw7JqUficsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICBuaWNrbmFtZTogJ2hlcm8nLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfslrzrpbggICEhISEg7IKs6rOg7Iu27Ja07JqUfiEnLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfV0sXHJcbiAgICAvL+ydtOuvuOyngCDsl4XroZzrk5ztlZjrqbQg6rK966GcIOyMk+yehCBpbWFnZVBhdGhzIOyXkCBcclxuICAgIGltYWdlUGF0aHM6IFtdLFxyXG4gICAgcG9zdEFkZGVkOiBmYWxzZSxcclxufVxyXG5jb25zdCBkdW1teVBvc3QgPSB7XHJcbiAgICBpZDogMixcclxuICAgIGNvbnRlbnQ6ICfrjZTrr7jrjbDsnbTthLAnLFxyXG4gICAgVXNlcjoge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIG5pY2tuYW1lOiAn7KCc66Gc7LSIJyxcclxuICAgIH0sXHJcbiAgICBJbWFnZXM6IFtdLFxyXG4gICAgQ29tbWVudHM6IFtdLFxyXG59XHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0YWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBBRERfUE9TVDoge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBtYWluUG9zdHM6IFtkdW1teVBvc3QsIC4uLnN0YXRlLm1haW5Qb3N0c10sXHJcbiAgICAgICAgICAgICAgICBwb3N0QWRkZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDogcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==