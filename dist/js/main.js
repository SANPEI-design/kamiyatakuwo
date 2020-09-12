/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/_includes/data.js":
/*!*******************************!*\
  !*** ./src/_includes/data.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar quizData = {\n  question: ['かみやたくをの言葉を選びなさい', 'かみやたくを以外の言葉を選びなさい'],\n  numberList: ['イ', 'ロ', 'ハ', 'ニ'],\n  kamiyaWordList: ['kamiyaaaa', 'kamiyabbb', 'kamiyaccc', 'kamiyaddd', 'kamiyaeee', 'kamiyafff', 'kamiyaggg'],\n  othersWordList: ['otheraaa', 'otherbbb', 'otherccc', 'otherddd', 'othereee', 'otherfff', 'otherggg']\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (quizData);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvX2luY2x1ZGVzL2RhdGEuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvX2luY2x1ZGVzL2RhdGEuanM/MmVjZSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBxdWl6RGF0YSA9IHtcbiAgcXVlc3Rpb246IFtcbiAgICAn44GL44G/44KE44Gf44GP44KS44Gu6KiA6JGJ44KS6YG444Gz44Gq44GV44GEJyxcbiAgICAn44GL44G/44KE44Gf44GP44KS5Lul5aSW44Gu6KiA6JGJ44KS6YG444Gz44Gq44GV44GEJ1xuICBdLFxuICBudW1iZXJMaXN0OiBbXG4gICAgJ+OCpCcsXG4gICAgJ+ODrScsXG4gICAgJ+ODjycsXG4gICAgJ+ODiydcbiAgXSxcbiAga2FtaXlhV29yZExpc3Q6IFtcbiAgICAna2FtaXlhYWFhJyxcbiAgICAna2FtaXlhYmJiJyxcbiAgICAna2FtaXlhY2NjJyxcbiAgICAna2FtaXlhZGRkJyxcbiAgICAna2FtaXlhZWVlJyxcbiAgICAna2FtaXlhZmZmJyxcbiAgICAna2FtaXlhZ2dnJyxcbiAgXSxcbiAgb3RoZXJzV29yZExpc3Q6IFtcbiAgICAnb3RoZXJhYWEnLFxuICAgICdvdGhlcmJiYicsXG4gICAgJ290aGVyY2NjJyxcbiAgICAnb3RoZXJkZGQnLFxuICAgICdvdGhlcmVlZScsXG4gICAgJ290aGVyZmZmJyxcbiAgICAnb3RoZXJnZ2cnLFxuICBdXG59XG5cbmV4cG9ydCBkZWZhdWx0IHF1aXpEYXRhIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFJQTtBQU1BO0FBU0E7QUFwQkE7QUErQkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/_includes/data.js\n");

/***/ }),

/***/ "./src/js/component/modal.js":
/*!***********************************!*\
  !*** ./src/js/component/modal.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Modal = /*#__PURE__*/function () {\n  function Modal(targetDOM) {\n    _classCallCheck(this, Modal);\n\n    this.init();\n    this.setParameters(targetDOM);\n    this.bindEvent();\n  }\n\n  _createClass(Modal, [{\n    key: \"init\",\n    value: function init() {\n      this.createElement();\n    }\n  }, {\n    key: \"setParameters\",\n    value: function setParameters(targetDOM) {\n      this.html = document.querySelector('html');\n      this.body = document.querySelector('body');\n      this.trigger = targetDOM;\n    }\n  }, {\n    key: \"bindEvent\",\n    value: function bindEvent() {\n      var _this = this;\n\n      this.trigger.addEventListener('click', function (e) {\n        e.preventDefault();\n\n        _this.appendElement();\n      });\n      this.modal.addEventListener('click', function (e) {\n        e.preventDefault();\n\n        _this.removeElement();\n      });\n      this.modalContent.addEventListener('click', function (e) {\n        e.stopPropagation();\n      });\n    }\n  }, {\n    key: \"createElement\",\n    value: function createElement() {\n      this.modal = document.createElement('div');\n      this.modal.classList.add('modal');\n      this.modalContent = document.createElement('div');\n      this.modalContent.classList.add('modal__content');\n      this.modalTitle = document.createElement('p');\n      this.modalTitle.classList.add('modal__title', 'text-large');\n      this.modalTitle.textContent = '正解';\n      this.modalNumber = document.createElement('p');\n      this.modalNumber.classList.add('modal__number');\n      this.modalText = document.createElement('p');\n      this.modalText.classList.add('modal__text');\n      this.modalButtonArea = document.createElement('div');\n      this.modalButtonArea.classList.add('modal__button-area', 'button-area');\n      this.modalButton = document.createElement('button');\n      this.modalButton.classList.add('button');\n      this.modalButton.setAttribute('type', 'button');\n      this.modalButton.textContent = '次の問題';\n    }\n  }, {\n    key: \"appendElement\",\n    value: function appendElement() {\n      this.modal.appendChild(this.modalContent);\n      this.modalContent.appendChild(this.modalTitle);\n      this.modalContent.appendChild(this.modalNumber);\n      this.modalContent.appendChild(this.modalText);\n      this.modalContent.appendChild(this.modalButtonArea);\n      this.modalButtonArea.appendChild(this.modalButton);\n      this.body.insertBefore(this.modal, this.body.firstChild);\n    }\n  }, {\n    key: \"removeElement\",\n    value: function removeElement() {\n      this.modal.remove();\n    }\n  }]);\n\n  return Modal;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY29tcG9uZW50L21vZGFsLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudC9tb2RhbC5qcz9hNmU0Il0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE1vZGFsIHtcbiAgY29uc3RydWN0b3IodGFyZ2V0RE9NKSB7XG4gICAgdGhpcy5pbml0KClcbiAgICB0aGlzLnNldFBhcmFtZXRlcnModGFyZ2V0RE9NKVxuICAgIHRoaXMuYmluZEV2ZW50KClcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5jcmVhdGVFbGVtZW50KClcbiAgfVxuXG4gIHNldFBhcmFtZXRlcnModGFyZ2V0RE9NKSB7XG4gICAgdGhpcy5odG1sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpXG4gICAgdGhpcy5ib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG4gICAgdGhpcy50cmlnZ2VyID0gdGFyZ2V0RE9NXG4gIH1cblxuICBiaW5kRXZlbnQoKSB7XG4gICAgdGhpcy50cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgIHRoaXMuYXBwZW5kRWxlbWVudCgpXG4gICAgfSlcblxuICAgIHRoaXMubW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgdGhpcy5yZW1vdmVFbGVtZW50KClcbiAgICB9KVxuXG4gICAgdGhpcy5tb2RhbENvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlRWxlbWVudCgpIHtcbiAgICB0aGlzLm1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsJylcbiAgICB0aGlzLm1vZGFsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGhpcy5tb2RhbENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbW9kYWxfX2NvbnRlbnQnKVxuICAgIHRoaXMubW9kYWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHRoaXMubW9kYWxUaXRsZS5jbGFzc0xpc3QuYWRkKCdtb2RhbF9fdGl0bGUnLCAndGV4dC1sYXJnZScpXG4gICAgdGhpcy5tb2RhbFRpdGxlLnRleHRDb250ZW50ID0gJ+ato+inoydcbiAgICB0aGlzLm1vZGFsTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgdGhpcy5tb2RhbE51bWJlci5jbGFzc0xpc3QuYWRkKCdtb2RhbF9fbnVtYmVyJylcbiAgICB0aGlzLm1vZGFsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHRoaXMubW9kYWxUZXh0LmNsYXNzTGlzdC5hZGQoJ21vZGFsX190ZXh0JylcbiAgICB0aGlzLm1vZGFsQnV0dG9uQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGhpcy5tb2RhbEJ1dHRvbkFyZWEuY2xhc3NMaXN0LmFkZCgnbW9kYWxfX2J1dHRvbi1hcmVhJywgJ2J1dHRvbi1hcmVhJylcbiAgICB0aGlzLm1vZGFsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICB0aGlzLm1vZGFsQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicpXG4gICAgdGhpcy5tb2RhbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcbiAgICB0aGlzLm1vZGFsQnV0dG9uLnRleHRDb250ZW50ID0gJ+asoeOBruWVj+mhjCdcbiAgfVxuXG4gIGFwcGVuZEVsZW1lbnQoKSB7XG4gICAgdGhpcy5tb2RhbC5hcHBlbmRDaGlsZCh0aGlzLm1vZGFsQ29udGVudClcbiAgICB0aGlzLm1vZGFsQ29udGVudC5hcHBlbmRDaGlsZCh0aGlzLm1vZGFsVGl0bGUpXG4gICAgdGhpcy5tb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQodGhpcy5tb2RhbE51bWJlcilcbiAgICB0aGlzLm1vZGFsQ29udGVudC5hcHBlbmRDaGlsZCh0aGlzLm1vZGFsVGV4dClcbiAgICB0aGlzLm1vZGFsQ29udGVudC5hcHBlbmRDaGlsZCh0aGlzLm1vZGFsQnV0dG9uQXJlYSlcbiAgICB0aGlzLm1vZGFsQnV0dG9uQXJlYS5hcHBlbmRDaGlsZCh0aGlzLm1vZGFsQnV0dG9uKVxuICAgIHRoaXMuYm9keS5pbnNlcnRCZWZvcmUodGhpcy5tb2RhbCwgdGhpcy5ib2R5LmZpcnN0Q2hpbGQpICAgIFxuICB9XG5cbiAgcmVtb3ZlRWxlbWVudCgpIHtcbiAgICB0aGlzLm1vZGFsLnJlbW92ZSgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kYWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7QUFHQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/component/modal.js\n");

/***/ }),

/***/ "./src/js/component/quiz.js":
/*!**********************************!*\
  !*** ./src/js/component/quiz.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _includes_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_includes/data */ \"./src/_includes/data.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Quiz = /*#__PURE__*/function () {\n  function Quiz(targetDOM) {\n    _classCallCheck(this, Quiz);\n\n    this.setParameters(targetDOM);\n    this.bindEvent();\n  }\n\n  _createClass(Quiz, [{\n    key: \"setParameters\",\n    value: function setParameters(targetDOM) {\n      this.answerDOMList = targetDOM.querySelectorAll('.js-answer');\n    }\n  }, {\n    key: \"bindEvent\",\n    value: function bindEvent() {\n      this.appendElement();\n      this.storeSession();\n    } // クイズデータ処理\n\n  }, {\n    key: \"init\",\n    value: function init() {\n      // 言葉の数\n      var kamiyaWordLength = _includes_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].kamiyaWordList.length;\n      var othersWordLength = _includes_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].othersWordList.length; // 残りの言葉の数が両方とも3以下だと終了（＝「結果を見る」）\n      // 残りの言葉の数が片方0だと終了（＝「結果を見る」）\n      // 残りの言葉の数が多い方が「ハズレの質問文」「ランダム関数の引数を3」\n      // かみやたくをの言葉のランダム選択\n\n      var randomKamiyaWordList = this.selectRandom(_includes_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].kamiyaWordList, 3);\n      console.log(randomKamiyaWordList); // それ以外の言葉のランダム選択\n\n      var randomOthersWordList = this.selectRandom(_includes_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].othersWordList, 1);\n      console.log(randomOthersWordList); // かみやたくをの言葉とそれ以外の言葉をシャッフルした配列を作る（キーも作る）\n\n      var randomWordList = {};\n      randomKamiyaWordList.forEach(function (value) {\n        var number = randomKamiyaWordList.indexOf(value);\n        randomWordList[\"miss\".concat(number)] = value;\n      });\n      randomOthersWordList.forEach(function (value) {\n        randomWordList['correct'] = value;\n      }); // シャッフルした配列\n\n      return this.shuffle(randomWordList);\n    } // ランダムに要素を取得（元の配列も削除される）\n\n  }, {\n    key: \"selectRandom\",\n    value: function selectRandom(array, num) {\n      var newArray = [];\n\n      while (newArray.length < num && array.length > 0) {\n        var randomNumber = Math.floor(Math.random() * array.length);\n        newArray.push(array[randomNumber]);\n        array.splice(randomNumber, 1);\n      }\n\n      return newArray;\n    } // シャッフル\n\n  }, {\n    key: \"shuffle\",\n    value: function shuffle(array) {\n      var object = Object.entries(array);\n      var shuffledObject = this.selectRandom(object, object.length);\n      var newArray = Object.fromEntries(shuffledObject);\n      return newArray;\n    } // DOMを生成\n\n  }, {\n    key: \"createElement\",\n    value: function createElement() {\n      this.number = document.createElement('p');\n      this.number.classList.add('card__number', 'text-large');\n      this.text = document.createElement('p');\n      this.text.classList.add('card__text');\n    } // DOMを追加\n\n  }, {\n    key: \"appendElement\",\n    value: function appendElement() {\n      var _this = this;\n\n      var shuffledData = this.init();\n      console.log(shuffledData);\n      var answerList = Object.values(shuffledData);\n      var numberList = _includes_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['numberList'];\n      this.answerDOMList.forEach(function (dom, index) {\n        _this.createElement();\n\n        var fragment = document.createDocumentFragment();\n        fragment.appendChild(_this.number);\n        fragment.appendChild(_this.text);\n        _this.number.textContent = numberList[index];\n        _this.text.textContent = answerList[index];\n        dom.appendChild(fragment);\n      });\n    } // セッションストレージに保存\n\n  }, {\n    key: \"storeSession\",\n    value: function storeSession() {\n      var shuffledData = this.init();\n      sessionStorage.setItem('answerList', JSON.stringify(shuffledData));\n    }\n  }]);\n\n  return Quiz;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Quiz);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY29tcG9uZW50L3F1aXouanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50L3F1aXouanM/MTdhYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcXVpekRhdGEgZnJvbSAnLi4vLi4vX2luY2x1ZGVzL2RhdGEnXG5cbmNsYXNzIFF1aXoge1xuICBjb25zdHJ1Y3Rvcih0YXJnZXRET00pIHtcbiAgICB0aGlzLnNldFBhcmFtZXRlcnModGFyZ2V0RE9NKVxuICAgIHRoaXMuYmluZEV2ZW50KClcbiAgfVxuXG4gIHNldFBhcmFtZXRlcnModGFyZ2V0RE9NKSB7XG4gICAgdGhpcy5hbnN3ZXJET01MaXN0ID0gdGFyZ2V0RE9NLnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1hbnN3ZXInKVxuICB9XG5cbiAgYmluZEV2ZW50KCkge1xuICAgIHRoaXMuYXBwZW5kRWxlbWVudCgpXG4gICAgdGhpcy5zdG9yZVNlc3Npb24oKVxuICB9XG5cbiAgLy8g44Kv44Kk44K644OH44O844K/5Yem55CGXG4gIGluaXQoKSB7XG4gICAgLy8g6KiA6JGJ44Gu5pWwXG4gICAgY29uc3Qga2FtaXlhV29yZExlbmd0aCA9IHF1aXpEYXRhLmthbWl5YVdvcmRMaXN0Lmxlbmd0aFxuICAgIGNvbnN0IG90aGVyc1dvcmRMZW5ndGggPSBxdWl6RGF0YS5vdGhlcnNXb3JkTGlzdC5sZW5ndGhcblxuICAgIC8vIOaui+OCiuOBruiogOiRieOBruaVsOOBjOS4oeaWueOBqOOCgjPku6XkuIvjgaDjgajntYLkuobvvIjvvJ3jgIzntZDmnpzjgpLopovjgovjgI3vvIlcbiAgICAvLyDmrovjgorjga7oqIDokYnjga7mlbDjgYzniYfmlrkw44Gg44Go57WC5LqG77yI77yd44CM57WQ5p6c44KS6KaL44KL44CN77yJXG5cbiAgICAvLyDmrovjgorjga7oqIDokYnjga7mlbDjgYzlpJrjgYTmlrnjgYzjgIzjg4/jgrrjg6zjga7os6rllY/mlofjgI3jgIzjg6njg7Pjg4Djg6DplqLmlbDjga7lvJXmlbDjgpIz44CNXG5cbiAgICAvLyDjgYvjgb/jgoTjgZ/jgY/jgpLjga7oqIDokYnjga7jg6njg7Pjg4Djg6Dpgbjmip5cbiAgICBjb25zdCByYW5kb21LYW1peWFXb3JkTGlzdCA9IHRoaXMuc2VsZWN0UmFuZG9tKHF1aXpEYXRhLmthbWl5YVdvcmRMaXN0LCAzKVxuICAgIGNvbnNvbGUubG9nKHJhbmRvbUthbWl5YVdvcmRMaXN0KVxuXG4gICAgLy8g44Gd44KM5Lul5aSW44Gu6KiA6JGJ44Gu44Op44Oz44OA44Og6YG45oqeXG4gICAgY29uc3QgcmFuZG9tT3RoZXJzV29yZExpc3QgPSB0aGlzLnNlbGVjdFJhbmRvbShxdWl6RGF0YS5vdGhlcnNXb3JkTGlzdCwgMSlcbiAgICBjb25zb2xlLmxvZyhyYW5kb21PdGhlcnNXb3JkTGlzdClcblxuICAgIC8vIOOBi+OBv+OChOOBn+OBj+OCkuOBruiogOiRieOBqOOBneOCjOS7peWkluOBruiogOiRieOCkuOCt+ODo+ODg+ODleODq+OBl+OBn+mFjeWIl+OCkuS9nOOCi++8iOOCreODvOOCguS9nOOCi++8iVxuICAgIGNvbnN0IHJhbmRvbVdvcmRMaXN0ID0ge31cbiAgICByYW5kb21LYW1peWFXb3JkTGlzdC5mb3JFYWNoKHZhbHVlID0+IHtcbiAgICAgIGNvbnN0IG51bWJlciA9IHJhbmRvbUthbWl5YVdvcmRMaXN0LmluZGV4T2YodmFsdWUpXG4gICAgICByYW5kb21Xb3JkTGlzdFtgbWlzcyR7bnVtYmVyfWBdID0gdmFsdWVcbiAgICB9KVxuICAgIHJhbmRvbU90aGVyc1dvcmRMaXN0LmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgcmFuZG9tV29yZExpc3RbJ2NvcnJlY3QnXSA9IHZhbHVlXG4gICAgfSlcblxuICAgIC8vIOOCt+ODo+ODg+ODleODq+OBl+OBn+mFjeWIl1xuICAgIHJldHVybiB0aGlzLnNodWZmbGUocmFuZG9tV29yZExpc3QpXG4gIH1cblxuICAvLyDjg6njg7Pjg4Djg6DjgavopoHntKDjgpLlj5blvpfvvIjlhYPjga7phY3liJfjgoLliYrpmaTjgZXjgozjgovvvIlcbiAgc2VsZWN0UmFuZG9tKGFycmF5LCBudW0pIHtcbiAgICBjb25zdCBuZXdBcnJheSA9IFtdXG5cbiAgICB3aGlsZShuZXdBcnJheS5sZW5ndGggPCBudW0gJiYgYXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgcmFuZG9tTnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyYXkubGVuZ3RoKVxuICAgICAgbmV3QXJyYXkucHVzaChhcnJheVtyYW5kb21OdW1iZXJdKVxuICAgICAgYXJyYXkuc3BsaWNlKHJhbmRvbU51bWJlciwgMSlcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3QXJyYXlcbiAgfVxuXG4gIC8vIOOCt+ODo+ODg+ODleODq1xuICBzaHVmZmxlKGFycmF5KSB7XG4gICAgY29uc3Qgb2JqZWN0ID0gT2JqZWN0LmVudHJpZXMoYXJyYXkpXG4gICAgY29uc3Qgc2h1ZmZsZWRPYmplY3QgPSB0aGlzLnNlbGVjdFJhbmRvbShvYmplY3QsIG9iamVjdC5sZW5ndGgpXG4gICAgY29uc3QgbmV3QXJyYXkgPSBPYmplY3QuZnJvbUVudHJpZXMoc2h1ZmZsZWRPYmplY3QpXG5cbiAgICByZXR1cm4gbmV3QXJyYXlcbiAgfVxuXG4gIC8vIERPTeOCkueUn+aIkFxuICBjcmVhdGVFbGVtZW50KCkge1xuICAgIHRoaXMubnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgdGhpcy5udW1iZXIuY2xhc3NMaXN0LmFkZCgnY2FyZF9fbnVtYmVyJywgJ3RleHQtbGFyZ2UnKVxuICAgIHRoaXMudGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHRoaXMudGV4dC5jbGFzc0xpc3QuYWRkKCdjYXJkX190ZXh0JylcbiAgfVxuXG4gIC8vIERPTeOCkui/veWKoFxuICBhcHBlbmRFbGVtZW50KCkge1xuICAgIGNvbnN0IHNodWZmbGVkRGF0YSA9IHRoaXMuaW5pdCgpXG4gICAgY29uc29sZS5sb2coc2h1ZmZsZWREYXRhKVxuICAgIGNvbnN0IGFuc3dlckxpc3QgPSBPYmplY3QudmFsdWVzKHNodWZmbGVkRGF0YSlcbiAgICBjb25zdCBudW1iZXJMaXN0ID0gcXVpekRhdGFbJ251bWJlckxpc3QnXVxuXG4gICAgdGhpcy5hbnN3ZXJET01MaXN0LmZvckVhY2goKGRvbSwgaW5kZXgpID0+IHtcbiAgICAgIHRoaXMuY3JlYXRlRWxlbWVudCgpXG4gICAgICBcbiAgICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpXG4gICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZCh0aGlzLm51bWJlcilcbiAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKHRoaXMudGV4dClcblxuICAgICAgdGhpcy5udW1iZXIudGV4dENvbnRlbnQgPSBudW1iZXJMaXN0W2luZGV4XVxuICAgICAgdGhpcy50ZXh0LnRleHRDb250ZW50ID0gYW5zd2VyTGlzdFtpbmRleF1cblxuICAgICAgZG9tLmFwcGVuZENoaWxkKGZyYWdtZW50KVxuICAgIH0pXG4gIH1cblxuICAvLyDjgrvjg4Pjgrfjg6fjg7Pjgrnjg4jjg6zjg7zjgrjjgavkv53lrZhcbiAgc3RvcmVTZXNzaW9uKCkge1xuICAgIGNvbnN0IHNodWZmbGVkRGF0YSA9IHRoaXMuaW5pdCgpXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnYW5zd2VyTGlzdCcsIEpTT04uc3RyaW5naWZ5KHNodWZmbGVkRGF0YSkpXG4gIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBRdWl6Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUlBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/component/quiz.js\n");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _component_quiz__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/quiz */ \"./src/js/component/quiz.js\");\n/* harmony import */ var _component_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/modal */ \"./src/js/component/modal.js\");\n// import Answer from './component/answer'\n\n // 必要な機能\n\n/*\nクイズを生成する機能\n  【済】DOM\n  配列\n  関数\n回答判定機能\n戻る機能\n正解率を計算する機能\n結果を生成する機能\n【済】モーダル機能\n */\n\nvar QUIZ_DOMS = document.querySelectorAll('.js-quiz');\n\nif (QUIZ_DOMS.length > 0) {\n  QUIZ_DOMS.forEach(function (dom) {\n    new _component_quiz__WEBPACK_IMPORTED_MODULE_0__[\"default\"](dom);\n  }); // 【！】クリックできるかどうか判定必要\n\n  var ANSWER_DOMS = document.querySelectorAll('.js-answer');\n\n  if (ANSWER_DOMS.length > 0) {\n    ANSWER_DOMS.forEach(function (dom) {\n      dom.addEventListener('click', function (e) {\n        console.log('click', e);\n      });\n    });\n  }\n} // クイズ\n// const ANSWER_DOMS = document.querySelectorAll('.js-answer')\n// if(ANSWER_DOMS.length > 0) {\n//   ANSWER_DOMS.forEach(dom => {\n//     new Answer(dom)\n//   })\n// }\n// モーダル\n\n\nvar MODAL_DOMS = document.querySelectorAll('.js-modal');\n\nif (MODAL_DOMS.length > 0) {\n  MODAL_DOMS.forEach(function (dom) {\n    new _component_modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"](dom);\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanM/N2JhNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgQW5zd2VyIGZyb20gJy4vY29tcG9uZW50L2Fuc3dlcidcbmltcG9ydCBRdWl6IGZyb20gJy4vY29tcG9uZW50L3F1aXonXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi9jb21wb25lbnQvbW9kYWwnXG5cbi8vIOW/heimgeOBquapn+iDvVxuLypcbuOCr+OCpOOCuuOCkueUn+aIkOOBmeOCi+apn+iDvVxuICDjgJDmuIjjgJFET01cbiAg6YWN5YiXXG4gIOmWouaVsFxu5Zue562U5Yik5a6a5qmf6IO9XG7miLvjgovmqZ/og71cbuato+ino+eOh+OCkuioiOeul+OBmeOCi+apn+iDvVxu57WQ5p6c44KS55Sf5oiQ44GZ44KL5qmf6IO9XG7jgJDmuIjjgJHjg6Ljg7zjg4Djg6vmqZ/og71cbiAqL1xuXG5jb25zdCBRVUlaX0RPTVMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtcXVpeicpXG5pZihRVUlaX0RPTVMubGVuZ3RoID4gMCkge1xuICBRVUlaX0RPTVMuZm9yRWFjaChkb20gPT4ge1xuICAgIG5ldyBRdWl6KGRvbSlcbiAgfSlcblxuICAvLyDjgJDvvIHjgJHjgq/jg6rjg4Pjgq/jgafjgY3jgovjgYvjganjgYbjgYvliKTlrprlv4XopoFcbiAgY29uc3QgQU5TV0VSX0RPTVMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtYW5zd2VyJylcbiAgaWYoQU5TV0VSX0RPTVMubGVuZ3RoID4gMCkge1xuICAgIEFOU1dFUl9ET01TLmZvckVhY2goZG9tID0+IHtcbiAgICAgIGRvbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnY2xpY2snLCBlKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5cblxuLy8g44Kv44Kk44K6XG4vLyBjb25zdCBBTlNXRVJfRE9NUyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1hbnN3ZXInKVxuLy8gaWYoQU5TV0VSX0RPTVMubGVuZ3RoID4gMCkge1xuLy8gICBBTlNXRVJfRE9NUy5mb3JFYWNoKGRvbSA9PiB7XG4vLyAgICAgbmV3IEFuc3dlcihkb20pXG4vLyAgIH0pXG4vLyB9XG5cblxuLy8g44Oi44O844OA44OrXG5jb25zdCBNT0RBTF9ET01TID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLW1vZGFsJylcbmlmKE1PREFMX0RPTVMubGVuZ3RoID4gMCkge1xuICBNT0RBTF9ET01TLmZvckVhY2goZG9tID0+IHtcbiAgICBuZXcgTW9kYWwoZG9tKVxuICB9KVxufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7O0FBWUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/index.js\n");

/***/ })

/******/ });