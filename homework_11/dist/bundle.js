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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
const addtion = (x, y) => {
  return Number(x) + Number(y);
};
const subtraction = (x, y) => {
  return x - y;
};
const division = (x, y) => {
  return x / y;
};
const multiplication = (x, y) => {
  return x * y;
};

/* harmony default export */ __webpack_exports__["default"] = ({
  addtion: addtion,
  subtraction: subtraction,
  division: division,
  multiplication: multiplication
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
let calc = document.querySelector('.calculator');

let form = document.createElement('form');
form.className = 'calc_form';

calc.appendChild(form);

let firstNum = document.createElement('div');
firstNum.className = 'calc_row';
form.appendChild(firstNum);

let numOne = document.createElement('input');
numOne.className = 'calc_display';
numOne.setAttribute('placeholder', 'Please, enter first number');
numOne.setAttribute('type', 'number');
firstNum.appendChild(numOne);

let secondNum = document.createElement('div');
secondNum.className = 'calc_row';
form.appendChild(secondNum);

let numTwo = document.createElement('input');
numTwo.setAttribute('placeholder', 'Please, enter second number');
numTwo.setAttribute('type', 'number');
numTwo.className = 'calc_display';
secondNum.appendChild(numTwo);

let action = document.createElement('div');
action.className = 'calc_row';
form.appendChild(action);

let btnAdd = document.createElement('button');
btnAdd.className = 'calc_key calc_plas';
btnAdd.textContent = '+';
action.appendChild(btnAdd);

let btnMinus = document.createElement('button');
btnMinus.className = 'calc_key calc_minus';
btnMinus.textContent = '-';
action.appendChild(btnMinus);

let btnMult = document.createElement('button');
btnMult.className = 'calc_key calc_x';
btnMult.textContent = 'x';
action.appendChild(btnMult);

let btnDivision = document.createElement('button');
btnDivision.className = 'calc_key calc_division';
btnDivision.textContent = '/';
action.appendChild(btnDivision);

/* harmony default export */ __webpack_exports__["default"] = ({
  numOne: numOne,
  numTwo: numTwo,
  btnAdd: btnAdd,
  btnMinus: btnMinus,
  btnMult: btnMult,
  btnDivision: btnDivision
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
__webpack_require__(1);
module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__calculating_module__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interface_module__ = __webpack_require__(1);



__WEBPACK_IMPORTED_MODULE_1__interface_module__["default"].btnAdd.addEventListener('click', () => {
  alert(__WEBPACK_IMPORTED_MODULE_0__calculating_module__["default"].addtion(__WEBPACK_IMPORTED_MODULE_1__interface_module__["default"].numOne.value, __WEBPACK_IMPORTED_MODULE_1__interface_module__["default"].numTwo.value));
});
__WEBPACK_IMPORTED_MODULE_1__interface_module__["default"].btnMinus.addEventListener('click', () => {
  alert(__WEBPACK_IMPORTED_MODULE_0__calculating_module__["default"].subtraction(__WEBPACK_IMPORTED_MODULE_1__interface_module__["default"].numOne.value, __WEBPACK_IMPORTED_MODULE_1__interface_module__["default"].numTwo.value));
});

__WEBPACK_IMPORTED_MODULE_1__interface_module__["default"].btnMult.addEventListener('click', () => {
  alert(__WEBPACK_IMPORTED_MODULE_0__calculating_module__["default"].multiplication(__WEBPACK_IMPORTED_MODULE_1__interface_module__["default"].numOne.value, __WEBPACK_IMPORTED_MODULE_1__interface_module__["default"].numTwo.value));
});

__WEBPACK_IMPORTED_MODULE_1__interface_module__["default"].btnDivision.addEventListener('click', () => {
  alert(__WEBPACK_IMPORTED_MODULE_0__calculating_module__["default"].division(__WEBPACK_IMPORTED_MODULE_1__interface_module__["default"].numOne.value, __WEBPACK_IMPORTED_MODULE_1__interface_module__["default"].numTwo.value));
});

/***/ })
/******/ ]);