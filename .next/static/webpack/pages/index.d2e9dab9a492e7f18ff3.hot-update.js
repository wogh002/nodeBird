webpackHotUpdate_N_E("pages/index",{

/***/ "./components/postCard.jsx":
/*!*********************************!*\
  !*** ./components/postCard.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _postImages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./postImages */ "./components/postImages.jsx");
/* harmony import */ var _commentForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./commentForm */ "./components/commentForm.jsx");
/* harmony import */ var _postCardContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./postCardContent */ "./components/postCardContent.jsx");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\Users\\dlals\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\node-bird\\components\\postCard.jsx",
    _this = undefined,
    _s = $RefreshSig$();













var PostCard = function PostCard(_ref) {
  _s();

  var post = _ref.post;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      liked = _useState[0],
      setLiked = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      commentFormOpened = _useState2[0],
      setCommentFormOpened = _useState2[1]; //me?.id; 옵셔널체이닝 문법 me && me.id 동일 없으면 undefined 들어감


  var id = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    var _state$user$me;

    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  });

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.post;
  }),
      removePostLoading = _useSelector.removePostLoading; //내가 로그인 한 상태라면 me 가 존재.


  var onToggleLike = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    return setLiked(function (prev) {
      return !prev;
    });
  }, []);
  var onToggleComment = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    return setCommentFormOpened(function (prev) {
      return !prev;
    });
  }, []);
  var onRemovePost = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_8__["REMOVE_POST_REQUEST"],
      data: post.id
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      cover: post.Images[0] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_postImages__WEBPACK_IMPORTED_MODULE_5__["default"], {
        images: post.Images
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 42
      }, _this),
      actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["RetweetOutlined"], {}, "retweet", false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 21
      }, _this), liked ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["HeartTwoTone"], {
        twoToneColor: "#eb2f96 ",
        onClick: onToggleLike
      }, "heart", false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 27
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["HeartOutlined"], {
        onClick: onToggleLike
      }, "heart", false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 27
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["MessageOutlined"], {
        onClick: onToggleComment
      }, "comment", false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 21
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
        content: function content() {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"].Group, {
            children: id && post.User.id === id ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["Fragment"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
                children: "\uC218\uC815"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 41
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
                type: "danger",
                loading: removePostLoading,
                onClick: onRemovePost,
                children: "\uC0AD\uC81C"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 41
              }, _this)]
            }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
              children: "\uC2E0\uACE0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 35
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 25
          }, _this);
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["EllipsisOutlined"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 25
        }, _this)
      }, "more", false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 21
      }, _this)],
      extra: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(FollowButton, {
        post: post
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 24
      }, _this),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
        avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
          children: post.User.nickname[0]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 33
        }, _this),
        title: post.User.nickname,
        description: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_postCardContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
          postData: post.content
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 38
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 21
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, _this), commentFormOpened && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(_commentForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
        post: post
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 25
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["List"], {
        header: "".concat(post.Comments.length, " \uAC1C\uC758 \uB313\uAE00"),
        itemLayout: "horizontal",
        dataSource: post.Comments,
        renderItem: function renderItem(item) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Comment"], {
              author: item.User.nickname,
              avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
                children: item.User.nickname[0]
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 49
              }, _this),
              content: item.content
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 37
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 33
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 25
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 9
  }, _this);
};

_s(PostCard, "QAKM0woin01E6sfzW//Gv6udQas=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
});

_c = PostCard;
PostCard.propTypes = {
  //속성 자세하게 적어줄경우 shape 사용하자
  post: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
    content: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
    User: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
    Images: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object),
    //객체들의 배열 arrayOf
    Comments: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object)
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PostCard);

var _c;

$RefreshReg$(_c, "PostCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0Q2FyZC5qc3giXSwibmFtZXMiOlsiUG9zdENhcmQiLCJwb3N0IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVN0YXRlIiwibGlrZWQiLCJzZXRMaWtlZCIsImNvbW1lbnRGb3JtT3BlbmVkIiwic2V0Q29tbWVudEZvcm1PcGVuZWQiLCJpZCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJyZW1vdmVQb3N0TG9hZGluZyIsIm9uVG9nZ2xlTGlrZSIsInVzZUNhbGxiYWNrIiwicHJldiIsIm9uVG9nZ2xlQ29tbWVudCIsIm9uUmVtb3ZlUG9zdCIsInR5cGUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiZGF0YSIsIkltYWdlcyIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJDb21tZW50cyIsImxlbmd0aCIsIml0ZW0iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsIm51bWJlciIsInN0cmluZyIsIm9iamVjdCIsImFycmF5T2YiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBQ0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBYztBQUFBOztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUMzQixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUVBLGtCQUEwQkMsc0RBQVEsQ0FBQyxLQUFELENBQWxDO0FBQUEsTUFBT0MsS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBQ0EsbUJBQWtERixzREFBUSxDQUFDLEtBQUQsQ0FBMUQ7QUFBQSxNQUFPRyxpQkFBUDtBQUFBLE1BQTBCQyxvQkFBMUIsaUJBSjJCLENBSzNCOzs7QUFDQSxNQUFNQyxFQUFFLEdBQUdDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFB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QUE2RU1BLFFBQVEsQ0FBQzhCLFNBQVQsR0FBcUI7QUFDakI7QUFDQTdCLE1BQUksRUFBRThCLGlEQUFTLENBQUNDLEtBQVYsQ0FBZ0I7QUFDdEJ2QixNQUFFLEVBQUVzQixpREFBUyxDQUFDRSxNQURRO0FBRTFCUCxXQUFPLEVBQUVLLGlEQUFTLENBQUNHLE1BRk87QUFHMUJWLFFBQUksRUFBRU8saURBQVMsQ0FBQ0ksTUFIVTtBQUkxQlosVUFBTSxFQUFFUSxpREFBUyxDQUFDSyxPQUFWLENBQWtCTCxpREFBUyxDQUFDSSxNQUE1QixDQUprQjtBQUsxQjtBQUNBUixZQUFRLEVBQUVJLGlEQUFTLENBQUNLLE9BQVYsQ0FBa0JMLGlEQUFTLENBQUNJLE1BQTVCO0FBTmdCLEdBQWhCLEVBT2ZFO0FBVDBCLENBQXJCO0FBV2VyQyx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kMmU5ZGFiOWE0OTJlN2YxOGZmMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ2FyZCwgQnV0dG9uLCBQb3BvdmVyLCBMaXN0LCBDb21tZW50LCBBdmF0YXIgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBFbGxpcHNpc091dGxpbmVkLCBIZWFydE91dGxpbmVkLCBNZXNzYWdlT3V0bGluZWQsIFJldHdlZXRPdXRsaW5lZCwgSGVhcnRUd29Ub25lIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBQb3N0SW1hZ2VzIGZyb20gJy4vcG9zdEltYWdlcyc7XHJcbmltcG9ydCBDb21tZW50Rm9ybSBmcm9tICcuL2NvbW1lbnRGb3JtJztcclxuaW1wb3J0IFBvc3RDYXJkQ29udGVudCBmcm9tICcuL3Bvc3RDYXJkQ29udGVudCc7XHJcbmltcG9ydCB7IFJFTU9WRV9QT1NUX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuY29uc3QgUG9zdENhcmQgPSAoeyBwb3N0IH0pID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICBjb25zdCBbbGlrZWQsIHNldExpa2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtjb21tZW50Rm9ybU9wZW5lZCwgc2V0Q29tbWVudEZvcm1PcGVuZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgLy9tZT8uaWQ7IOyYteyFlOuEkOyytOydtOuLnSDrrLjrspUgbWUgJiYgbWUuaWQg64+Z7J28IOyXhuycvOuptCB1bmRlZmluZWQg65Ok7Ja06rCQXHJcbiAgICBjb25zdCBpZCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5tZT8uaWQpO1xyXG4gICAgY29uc3QgeyByZW1vdmVQb3N0TG9hZGluZyB9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucG9zdCk7XHJcbiAgICAvL+uCtOqwgCDroZzqt7jsnbgg7ZWcIOyDge2DnOudvOuptCBtZSDqsIAg7KG07J6sLlxyXG4gICAgY29uc3Qgb25Ub2dnbGVMaWtlID0gdXNlQ2FsbGJhY2soKCkgPT4gc2V0TGlrZWQoKHByZXYpID0+ICFwcmV2KSwgW10pO1xyXG4gICAgY29uc3Qgb25Ub2dnbGVDb21tZW50ID0gdXNlQ2FsbGJhY2soKCkgPT4gc2V0Q29tbWVudEZvcm1PcGVuZWQocHJldiA9PiAhcHJldiksIFtdKTtcclxuICAgIGNvbnN0IG9uUmVtb3ZlUG9zdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX1JFUVVFU1QsXHJcbiAgICAgICAgICAgIGRhdGE6IHBvc3QuaWQsXHJcbiAgICAgICAgfSlcclxuICAgIH0sIFtdKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgIGNvdmVyPXtwb3N0LkltYWdlc1swXSAmJiA8UG9zdEltYWdlcyBpbWFnZXM9e3Bvc3QuSW1hZ2VzfSAvPn1cclxuICAgICAgICAgICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgICAgICAgICAgICA8UmV0d2VldE91dGxpbmVkIGtleT1cInJldHdlZXRcIiAvPixcclxuICAgICAgICAgICAgICAgICAgICBsaWtlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IDxIZWFydFR3b1RvbmUgdHdvVG9uZUNvbG9yPVwiI2ViMmY5NiBcIiBrZXk9XCJoZWFydFwiIG9uQ2xpY2s9e29uVG9nZ2xlTGlrZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOiA8SGVhcnRPdXRsaW5lZCBrZXk9XCJoZWFydFwiIG9uQ2xpY2s9e29uVG9nZ2xlTGlrZX0gLz4sXHJcbiAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2VPdXRsaW5lZCBrZXk9XCJjb21tZW50XCIgb25DbGljaz17b25Ub2dnbGVDb21tZW50fSAvPixcclxuICAgICAgICAgICAgICAgICAgICA8UG9wb3ZlciBrZXk9XCJtb3JlXCIgY29udGVudD17KCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIOyImOyglSzsgq3soJwg67KE7Yq8IOuztOydtOugpOuptCDroZzqt7jsnbjtlbTslbzrkJjqs6Ag6rKM7Iuc6riAIOyekeyEse2VnCDsnKDsoIBpZOqwgCDqsJnslYTslbztlaguXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDtmITsnqwgbWUuaWQgPT09MSwgMSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpZCAmJiBwb3N0LlVzZXIuaWQgPT09IGlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uPuyImOyglTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFJFTU9WRV9QT1NUX1JFUVVFU1QgZGF0YSA6IHBvc3QuaWQgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJkYW5nZXJcIiBsb2FkaW5nPXtyZW1vdmVQb3N0TG9hZGluZ30gb25DbGljaz17b25SZW1vdmVQb3N0fT7sgq3soJw8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPEJ1dHRvbj7si6Dqs6A8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxFbGxpcHNpc091dGxpbmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Qb3BvdmVyPlxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgIGV4dHJhPXs8Rm9sbG93QnV0dG9uIHBvc3Q9e3Bvc3R9Lz59XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC5NZXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhcj17PEF2YXRhcj57cG9zdC5Vc2VyLm5pY2tuYW1lWzBdfTwvQXZhdGFyPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3Bvc3QuVXNlci5uaWNrbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249ezxQb3N0Q2FyZENvbnRlbnQgcG9zdERhdGE9e3Bvc3QuY29udGVudH0gLz59XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICB7Y29tbWVudEZvcm1PcGVuZWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb21tZW50Rm9ybSBwb3N0PXtwb3N0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXtgJHtwb3N0LkNvbW1lbnRzLmxlbmd0aH0g6rCc7J2YIOuMk+q4gGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtTGF5b3V0PVwiaG9yaXpvbnRhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtwb3N0LkNvbW1lbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVySXRlbT17aXRlbSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9yPXtpdGVtLlVzZXIubmlja25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXI9ezxBdmF0YXI+e2l0ZW0uVXNlci5uaWNrbmFtZVswXX08L0F2YXRhcj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtpdGVtLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2ID5cclxuICAgICAgICAgICAgKVxyXG59XHJcbiAgICAgICAgICAgIFBvc3RDYXJkLnByb3BUeXBlcyA9IHtcclxuICAgICAgICAgICAgICAgIC8v7IaN7ISxIOyekOyEuO2VmOqyjCDsoIHslrTspITqsr3smrAgc2hhcGUg7IKs7Jqp7ZWY7J6QXHJcbiAgICAgICAgICAgICAgICBwb3N0OiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICAgICAgICAgICAgaWQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgICAgIFVzZXI6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICAgICAgICAgIEltYWdlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbiAgICAgICAgICAgIC8v6rCd7LK065Ok7J2YIOuwsOyXtCBhcnJheU9mXHJcbiAgICAgICAgICAgIENvbW1lbnRzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICAgIH0pLmlzUmVxdWlyZWQsXHJcbn1cclxuICAgICAgICAgICAgZXhwb3J0IGRlZmF1bHQgUG9zdENhcmQ7Il0sInNvdXJjZVJvb3QiOiIifQ==