/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/domManager/domMananger.js":
/*!***************************************!*\
  !*** ./src/domManager/domMananger.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ domManager)
/* harmony export */ });
function domManager({
  tagName = 'div',
  text = null,
  classes = null,
  attributes = null,
  events = null,
  children = null,
}) {
  const el = document.createElement(tagName);
  if (classes !== null) {
    el.classList.add(...classes);
  }

  if (text !== null) {
    el.textContent = text;
  }

  if (attributes !== null) {
    attributes.map((attr) => {
      const objKey = Object.keys(attr);
      const objValue = Object.values(attr);
      return el.setAttribute(objKey, objValue);
    });
  }

  if (children !== null) {
    children.map((x) => el.appendChild(x));
  }

  if (events !== null) {
    events.map(({ type, handler }) => el.addEventListener(type, handler));
  }
  return el;
}


/***/ }),

/***/ "./src/fetch/fetchCurrent.js":
/*!***********************************!*\
  !*** ./src/fetch/fetchCurrent.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ myFetchCurrent)
/* harmony export */ });
async function myFetchCurrent(city) {
  const k = "6f7162b3707366bc6e23b2888f875c1b";
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${k}`,
      { mode: 'cors' },
    );
    if (!response.ok) {
      throw new Error(`http request error ${response.status}`);
    }
    const parseResponse = await response.json();
    console.log(parseResponse);
  } catch (err) {
    console.log(err);
  }
}


/***/ }),

/***/ "./src/fetch/fetchFiveDay.js":
/*!***********************************!*\
  !*** ./src/fetch/fetchFiveDay.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ myFetchFiveDay)
/* harmony export */ });
async function myFetchFiveDay(city) {
  const k = "6f7162b3707366bc6e23b2888f875c1b";
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${k}`,
      { mode: 'cors' },
    );
    if (!response.ok) {
      throw new Error(`http request error ${response.status}`);
    }
    const parseResponse = await response.json();
    console.log(parseResponse);
  } catch (err) {
    console.log(err);
  }
}

// returns an object with 40 items.
// every 8 items is a new day. 40/3 = 8
// somehow parse the info to give us the high and low for each day
// sort through the 8 items for that day and find the low and high


/***/ }),

/***/ "./src/view/inputForm.js":
/*!*******************************!*\
  !*** ./src/view/inputForm.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ myInputForm)
/* harmony export */ });
/* harmony import */ var _domManager_domMananger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domManager/domMananger */ "./src/domManager/domMananger.js");
/* harmony import */ var _fetch_fetchCurrent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fetch/fetchCurrent */ "./src/fetch/fetchCurrent.js");



function myInputForm() {
  function submitHandler(e) {
    e.preventDefault();
    console.log(e);
    const userInput = e.target.childNodes[0].value;
    (0,_fetch_fetchCurrent__WEBPACK_IMPORTED_MODULE_1__["default"])(userInput);
  }

  const formWithInput = (0,_domManager_domMananger__WEBPACK_IMPORTED_MODULE_0__["default"])({
    tagName: 'form',
    attributes: [{ id: 'cityForm' }],
    events: [{ type: 'submit', handler: submitHandler }],
    children: [
      // I want to target this child
      (0,_domManager_domMananger__WEBPACK_IMPORTED_MODULE_0__["default"])({
        tagName: 'input',
        text: 'input',
        attributes: [{ id: 'cityInput' }, { placeholder: 'city' }],
      }),
    ],
  });
  return formWithInput;
}

// export default function myInputForm() {
//   const mything = (e) => {
//     e.preventDefault();
//     console.log(e);
//     // console.log(myFetchFiveDay())
//   };
//   function makeFormInput() {
// const formWithInput = domManager({
//   tagName: 'form',
//   attributes: [{ id: 'cityForm' }],
//   events: [{ type: 'submit', handler: mything }],
//   children: [
//     domManager({
//       tagName: 'input',
//       text: 'input',
//       attributes: [{ id: 'cityInput' }, { placeholder: 'city' }],
//     }),
//   ],
// });
//     return { formWithInput, child: formWithInput.querySelector('#cityInput') };
//   }
// const formWithInput = domManager({
//   tagName: 'form',
//   attributes: [{ id: 'cityForm' }],
//   events: [{ type: 'submit', handler: mything }],
//   children: [
//     domManager({
//       tagName: 'input',
//       text: 'input',
//       attributes: [{ id: 'cityInput' }, { placeholder: 'city' }],
//     }),
//   ],
// });
//   return formWithInput;
// }


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fetch_fetchFiveDay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch/fetchFiveDay */ "./src/fetch/fetchFiveDay.js");
/* harmony import */ var _view_inputForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/inputForm */ "./src/view/inputForm.js");



const myApp = () => {
  const app = {
    init() {
      // this.runFetch();
    },
    runFetch() {
      (0,_fetch_fetchFiveDay__WEBPACK_IMPORTED_MODULE_0__["default"])('Texas');
    },
  };
  return app.init();
};
myApp();

const container = document.querySelector('#container');
const myform = (0,_view_inputForm__WEBPACK_IMPORTED_MODULE_1__["default"])();
container.appendChild(myform);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLGVBQWU7QUFDakM7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNqQ2U7QUFDZixZQUFZLGtDQUFlO0FBQzNCO0FBQ0E7QUFDQSwyREFBMkQsS0FBSyxTQUFTLEVBQUU7QUFDM0UsUUFBUSxjQUFjO0FBQ3RCO0FBQ0E7QUFDQSw0Q0FBNEMsZ0JBQWdCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2ZlO0FBQ2YsWUFBWSxrQ0FBZTtBQUMzQjtBQUNBO0FBQ0EsNERBQTRELEtBQUssU0FBUyxFQUFFO0FBQzVFLFFBQVEsY0FBYztBQUN0QjtBQUNBO0FBQ0EsNENBQTRDLGdCQUFnQjtBQUM1RDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCbUQ7QUFDQTs7QUFFcEM7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksK0RBQWM7QUFDbEI7O0FBRUEsd0JBQXdCLG1FQUFVO0FBQ2xDO0FBQ0EsbUJBQW1CLGdCQUFnQjtBQUNuQyxlQUFlLHdDQUF3QztBQUN2RDtBQUNBO0FBQ0EsTUFBTSxtRUFBVTtBQUNoQjtBQUNBO0FBQ0EsdUJBQXVCLGlCQUFpQixJQUFJLHFCQUFxQjtBQUNqRSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsZ0JBQWdCO0FBQ3BDLGdCQUFnQixrQ0FBa0M7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCLElBQUkscUJBQXFCO0FBQ2xFLFFBQVE7QUFDUjtBQUNBLElBQUk7QUFDSixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGdCQUFnQjtBQUNwQyxnQkFBZ0Isa0NBQWtDO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQixJQUFJLHFCQUFxQjtBQUNsRSxRQUFRO0FBQ1I7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7Ozs7OztVQzdEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05rRDtBQUNQOztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLE1BQU0sK0RBQWM7QUFDcEIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSwyREFBVztBQUMxQiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJhcHB2MS8uL3NyYy9kb21NYW5hZ2VyL2RvbU1hbmFuZ2VyLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHB2MS8uL3NyYy9mZXRjaC9mZXRjaEN1cnJlbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcHYxLy4vc3JjL2ZldGNoL2ZldGNoRml2ZURheS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwdjEvLi9zcmMvdmlldy9pbnB1dEZvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcHYxL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXJhcHB2MS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcHYxL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcHYxL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcHYxLy4vc3JjL3NjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkb21NYW5hZ2VyKHtcbiAgdGFnTmFtZSA9ICdkaXYnLFxuICB0ZXh0ID0gbnVsbCxcbiAgY2xhc3NlcyA9IG51bGwsXG4gIGF0dHJpYnV0ZXMgPSBudWxsLFxuICBldmVudHMgPSBudWxsLFxuICBjaGlsZHJlbiA9IG51bGwsXG59KSB7XG4gIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcbiAgaWYgKGNsYXNzZXMgIT09IG51bGwpIHtcbiAgICBlbC5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzZXMpO1xuICB9XG5cbiAgaWYgKHRleHQgIT09IG51bGwpIHtcbiAgICBlbC50ZXh0Q29udGVudCA9IHRleHQ7XG4gIH1cblxuICBpZiAoYXR0cmlidXRlcyAhPT0gbnVsbCkge1xuICAgIGF0dHJpYnV0ZXMubWFwKChhdHRyKSA9PiB7XG4gICAgICBjb25zdCBvYmpLZXkgPSBPYmplY3Qua2V5cyhhdHRyKTtcbiAgICAgIGNvbnN0IG9ialZhbHVlID0gT2JqZWN0LnZhbHVlcyhhdHRyKTtcbiAgICAgIHJldHVybiBlbC5zZXRBdHRyaWJ1dGUob2JqS2V5LCBvYmpWYWx1ZSk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAoY2hpbGRyZW4gIT09IG51bGwpIHtcbiAgICBjaGlsZHJlbi5tYXAoKHgpID0+IGVsLmFwcGVuZENoaWxkKHgpKTtcbiAgfVxuXG4gIGlmIChldmVudHMgIT09IG51bGwpIHtcbiAgICBldmVudHMubWFwKCh7IHR5cGUsIGhhbmRsZXIgfSkgPT4gZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyKSk7XG4gIH1cbiAgcmV0dXJuIGVsO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gbXlGZXRjaEN1cnJlbnQoY2l0eSkge1xuICBjb25zdCBrID0gcHJvY2Vzcy5lbnYua2V5O1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JmFwcGlkPSR7a31gLFxuICAgICAgeyBtb2RlOiAnY29ycycgfSxcbiAgICApO1xuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgaHR0cCByZXF1ZXN0IGVycm9yICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgIH1cbiAgICBjb25zdCBwYXJzZVJlc3BvbnNlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKHBhcnNlUmVzcG9uc2UpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBteUZldGNoRml2ZURheShjaXR5KSB7XG4gIGNvbnN0IGsgPSBwcm9jZXNzLmVudi5rZXk7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/cT0ke2NpdHl9JmFwcGlkPSR7a31gLFxuICAgICAgeyBtb2RlOiAnY29ycycgfSxcbiAgICApO1xuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgaHR0cCByZXF1ZXN0IGVycm9yICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgIH1cbiAgICBjb25zdCBwYXJzZVJlc3BvbnNlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKHBhcnNlUmVzcG9uc2UpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xuICB9XG59XG5cbi8vIHJldHVybnMgYW4gb2JqZWN0IHdpdGggNDAgaXRlbXMuXG4vLyBldmVyeSA4IGl0ZW1zIGlzIGEgbmV3IGRheS4gNDAvMyA9IDhcbi8vIHNvbWVob3cgcGFyc2UgdGhlIGluZm8gdG8gZ2l2ZSB1cyB0aGUgaGlnaCBhbmQgbG93IGZvciBlYWNoIGRheVxuLy8gc29ydCB0aHJvdWdoIHRoZSA4IGl0ZW1zIGZvciB0aGF0IGRheSBhbmQgZmluZCB0aGUgbG93IGFuZCBoaWdoXG4iLCJpbXBvcnQgZG9tTWFuYWdlciBmcm9tICcuLi9kb21NYW5hZ2VyL2RvbU1hbmFuZ2VyJztcbmltcG9ydCBteUZldGNoQ3VycmVudCBmcm9tICcuLi9mZXRjaC9mZXRjaEN1cnJlbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBteUlucHV0Rm9ybSgpIHtcbiAgZnVuY3Rpb24gc3VibWl0SGFuZGxlcihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIGNvbnN0IHVzZXJJbnB1dCA9IGUudGFyZ2V0LmNoaWxkTm9kZXNbMF0udmFsdWU7XG4gICAgbXlGZXRjaEN1cnJlbnQodXNlcklucHV0KTtcbiAgfVxuXG4gIGNvbnN0IGZvcm1XaXRoSW5wdXQgPSBkb21NYW5hZ2VyKHtcbiAgICB0YWdOYW1lOiAnZm9ybScsXG4gICAgYXR0cmlidXRlczogW3sgaWQ6ICdjaXR5Rm9ybScgfV0sXG4gICAgZXZlbnRzOiBbeyB0eXBlOiAnc3VibWl0JywgaGFuZGxlcjogc3VibWl0SGFuZGxlciB9XSxcbiAgICBjaGlsZHJlbjogW1xuICAgICAgLy8gSSB3YW50IHRvIHRhcmdldCB0aGlzIGNoaWxkXG4gICAgICBkb21NYW5hZ2VyKHtcbiAgICAgICAgdGFnTmFtZTogJ2lucHV0JyxcbiAgICAgICAgdGV4dDogJ2lucHV0JyxcbiAgICAgICAgYXR0cmlidXRlczogW3sgaWQ6ICdjaXR5SW5wdXQnIH0sIHsgcGxhY2Vob2xkZXI6ICdjaXR5JyB9XSxcbiAgICAgIH0pLFxuICAgIF0sXG4gIH0pO1xuICByZXR1cm4gZm9ybVdpdGhJbnB1dDtcbn1cblxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbXlJbnB1dEZvcm0oKSB7XG4vLyAgIGNvbnN0IG15dGhpbmcgPSAoZSkgPT4ge1xuLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vICAgICBjb25zb2xlLmxvZyhlKTtcbi8vICAgICAvLyBjb25zb2xlLmxvZyhteUZldGNoRml2ZURheSgpKVxuLy8gICB9O1xuLy8gICBmdW5jdGlvbiBtYWtlRm9ybUlucHV0KCkge1xuLy8gY29uc3QgZm9ybVdpdGhJbnB1dCA9IGRvbU1hbmFnZXIoe1xuLy8gICB0YWdOYW1lOiAnZm9ybScsXG4vLyAgIGF0dHJpYnV0ZXM6IFt7IGlkOiAnY2l0eUZvcm0nIH1dLFxuLy8gICBldmVudHM6IFt7IHR5cGU6ICdzdWJtaXQnLCBoYW5kbGVyOiBteXRoaW5nIH1dLFxuLy8gICBjaGlsZHJlbjogW1xuLy8gICAgIGRvbU1hbmFnZXIoe1xuLy8gICAgICAgdGFnTmFtZTogJ2lucHV0Jyxcbi8vICAgICAgIHRleHQ6ICdpbnB1dCcsXG4vLyAgICAgICBhdHRyaWJ1dGVzOiBbeyBpZDogJ2NpdHlJbnB1dCcgfSwgeyBwbGFjZWhvbGRlcjogJ2NpdHknIH1dLFxuLy8gICAgIH0pLFxuLy8gICBdLFxuLy8gfSk7XG4vLyAgICAgcmV0dXJuIHsgZm9ybVdpdGhJbnB1dCwgY2hpbGQ6IGZvcm1XaXRoSW5wdXQucXVlcnlTZWxlY3RvcignI2NpdHlJbnB1dCcpIH07XG4vLyAgIH1cbi8vIGNvbnN0IGZvcm1XaXRoSW5wdXQgPSBkb21NYW5hZ2VyKHtcbi8vICAgdGFnTmFtZTogJ2Zvcm0nLFxuLy8gICBhdHRyaWJ1dGVzOiBbeyBpZDogJ2NpdHlGb3JtJyB9XSxcbi8vICAgZXZlbnRzOiBbeyB0eXBlOiAnc3VibWl0JywgaGFuZGxlcjogbXl0aGluZyB9XSxcbi8vICAgY2hpbGRyZW46IFtcbi8vICAgICBkb21NYW5hZ2VyKHtcbi8vICAgICAgIHRhZ05hbWU6ICdpbnB1dCcsXG4vLyAgICAgICB0ZXh0OiAnaW5wdXQnLFxuLy8gICAgICAgYXR0cmlidXRlczogW3sgaWQ6ICdjaXR5SW5wdXQnIH0sIHsgcGxhY2Vob2xkZXI6ICdjaXR5JyB9XSxcbi8vICAgICB9KSxcbi8vICAgXSxcbi8vIH0pO1xuLy8gICByZXR1cm4gZm9ybVdpdGhJbnB1dDtcbi8vIH1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IG15RmV0Y2hGaXZlRGF5IGZyb20gJy4vZmV0Y2gvZmV0Y2hGaXZlRGF5JztcbmltcG9ydCBteUlucHV0Rm9ybSBmcm9tICcuL3ZpZXcvaW5wdXRGb3JtJztcblxuY29uc3QgbXlBcHAgPSAoKSA9PiB7XG4gIGNvbnN0IGFwcCA9IHtcbiAgICBpbml0KCkge1xuICAgICAgLy8gdGhpcy5ydW5GZXRjaCgpO1xuICAgIH0sXG4gICAgcnVuRmV0Y2goKSB7XG4gICAgICBteUZldGNoRml2ZURheSgnVGV4YXMnKTtcbiAgICB9LFxuICB9O1xuICByZXR1cm4gYXBwLmluaXQoKTtcbn07XG5teUFwcCgpO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbmVyJyk7XG5jb25zdCBteWZvcm0gPSBteUlucHV0Rm9ybSgpO1xuY29udGFpbmVyLmFwcGVuZENoaWxkKG15Zm9ybSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=