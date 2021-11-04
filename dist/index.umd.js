(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["myPromise"] = factory();
	else
		root["myPromise"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar _STATUS_PENGDING_ = \"pengding\";\nvar _STATUS_RESOLVE_ = \"resolved\";\nvar _STATUS_REJECT_ = \"rejected\"; //构造函数初始化部分\n// 1.传入执行器\n// 2.初始化状态和缓存区\n// 3.初始化reject和resolve方法\n// 4.执行传入的执行器\n\nfunction MyPromise(executor) {\n  var slef = this;\n\n  if (![\"[object Function]\", \"[object AsyncFunction]\"].includes(Object.prototype.toString.call(executor))) {\n    throw new Error(\"执行器请传入一个函数\");\n  }\n\n  this.status = _STATUS_PENGDING_; //初始状态\n\n  this.value = null; //初始值\n\n  this.callbacks = []; //保存回调函数的数组\n\n  this.resolve = function (value) {\n    if (slef.status !== _STATUS_PENGDING_) return;\n    slef.status = _STATUS_RESOLVE_; //成功\n\n    slef.value = value;\n    setTimeout(function () {\n      if (slef.callbacks.length) {\n        slef.callbacks.forEach(function (funObj) {\n          funObj[\"onResolved\"](slef.value);\n        });\n      }\n    });\n  };\n\n  this.reject = function (value) {\n    if (slef.status !== _STATUS_PENGDING_) return;\n    slef.status = _STATUS_REJECT_; //失败\n\n    slef.value = value;\n    setTimeout(function () {\n      if (slef.callbacks.length) {\n        slef.callbacks.forEach(function (funObj) {\n          funObj[\"onRejected\"](slef.value);\n        });\n      }\n    });\n  };\n\n  try {\n    executor(slef.resolve, slef.reject);\n  } catch (error) {\n    slef.reject(error);\n  }\n} // 核心的then方法，主要实现链式调用的关键\n\n\nMyPromise.prototype.then = function (_onResolved, _onRejected) {\n  var self = this;\n  _onResolved = typeof _onResolved === \"function\" ? _onResolved : function (value) {\n    return value;\n  }; //保证值往下传递\n\n  _onRejected = typeof _onRejected === \"function\" ? _onRejected : function (reason) {\n    throw reason;\n  }; //实现异常穿透\n\n  return new MyPromise(function (resolve, reject) {\n    function handle(callback) {\n      try {\n        var result = callback(self.value);\n\n        if (result instanceof MyPromise) {\n          result.then(function (value) {\n            return resolve(value);\n          }, function (reason) {\n            return reject(reason);\n          });\n        } else {\n          resolve(result);\n        }\n      } catch (error) {\n        reject(error);\n      }\n    }\n\n    if (self.status === _STATUS_PENGDING_) {\n      //pengding\n      self.callbacks.push({\n        onResolved: function onResolved(val) {\n          handle(_onResolved);\n        },\n        onRejected: function onRejected(reason) {\n          handle(_onRejected);\n        }\n      });\n    } else if (self.status === _STATUS_RESOLVE_) {\n      // resolved\n      setTimeout(function () {\n        handle(_onResolved);\n      });\n    } else {\n      //rejected\n      setTimeout(function () {\n        handle(_onRejected);\n      });\n    }\n  });\n}; //捕捉异常\n\n\nMyPromise.prototype[\"catch\"] = function (onRejected) {\n  return this.then(undefined, onRejected);\n};\n\nMyPromise.resolve = function (value) {\n  return new MyPromise(function (resolve, reject) {\n    if (value instanceof MyPromise) {\n      value.then(function (res) {\n        return resolve(res);\n      }, function (reason) {\n        return reject(reason);\n      });\n    } else {\n      resolve(value);\n    }\n  });\n};\n\nMyPromise.reject = function (value) {\n  return new MyPromise(function (resolve, reject) {\n    reject(value);\n  });\n}; //可以延迟执行resolve\n\n\nMyPromise.resolveDelay = function (value) {\n  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  return new MyPromise(function (resolve, reject) {\n    setTimeout(function () {\n      if (value instanceof MyPromise) {\n        value.then(function (res) {\n          return resolve(res);\n        }, function (reason) {\n          return reject(reason);\n        });\n      } else {\n        resolve(value);\n      }\n    }, time || 0);\n  });\n}; //可以延迟执行reject\n\n\nMyPromise.rejectDelay = function (value) {\n  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  return new MyPromise(function (resolve, reject) {\n    setTimeout(function () {\n      reject(value);\n    }, time);\n  });\n};\n\nMyPromise.race = function (promiseArr) {\n  return new MyPromise(function (resolve, reject) {\n    promiseArr.forEach(function (p) {\n      MyPromise.resolve(p).then(function (value) {\n        resolve(value);\n      }, function (reason) {\n        reject(reason);\n      });\n    });\n  });\n};\n\nMyPromise.all = function (promiseArr) {\n  var values = [];\n  var index = 0;\n  return new MyPromise(function (resolve, reject) {\n    promiseArr.forEach(function (p, i) {\n      MyPromise.resolve(p).then(function (value) {\n        index++;\n        values[i] = value;\n\n        if (index === promiseArr.length) {\n          resolve(values);\n        }\n      }, function (reason) {\n        reject(reason);\n      });\n    });\n  });\n};\n\nMyPromise.limitAll = function (promiseArr) {\n  var limitCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;\n  return new MyPromise( /*#__PURE__*/function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resolve, reject) {\n      var values, count, spliceArr, result;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              if (!(promiseArr.length <= limitCount)) {\n                _context.next = 4;\n                break;\n              }\n\n              MyPromise.all(promiseArr).then(function (res) {\n                resolve(res);\n              }, function (reason) {\n                reject(reason);\n              });\n              _context.next = 20;\n              break;\n\n            case 4:\n              values = [];\n              count = promiseArr.length;\n\n              handleLimit = function handleLimit(spliceArr) {\n                var cacheValue = [];\n                var index = 0;\n                return new Promise(function (res, rej) {\n                  spliceArr.forEach(function (p, i) {\n                    Promise.resolve(p).then(function (value) {\n                      index++;\n                      cacheValue[i] = value;\n\n                      if (index === spliceArr.length) {\n                        res(cacheValue);\n                      }\n                    }, function (reason) {\n                      rej(reason);\n                    });\n                  });\n                });\n              };\n\n            case 7:\n              _context.prev = 7;\n              spliceArr = promiseArr.splice(0, limitCount);\n              _context.next = 11;\n              return handleLimit(spliceArr);\n\n            case 11:\n              result = _context.sent;\n              values.push.apply(values, _toConsumableArray(result));\n\n              if (count === values.length) {\n                resolve(values);\n              }\n\n              _context.next = 19;\n              break;\n\n            case 16:\n              _context.prev = 16;\n              _context.t0 = _context[\"catch\"](7);\n              reject(_context.t0);\n\n            case 19:\n              if (promiseArr.length) {\n                _context.next = 7;\n                break;\n              }\n\n            case 20:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[7, 16]]);\n    }));\n\n    return function (_x, _x2) {\n      return _ref.apply(this, arguments);\n    };\n  }());\n};\n\nMyPromise.retry = function (promise) {\n  var retryCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;\n  var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1000;\n  return new MyPromise(function (resolve, reject) {\n    function handle() {\n      return Promise.resolve(promise).then(function (res) {\n        resolve(res);\n      })[\"catch\"](function (err) {\n        console.log(err);\n        retryCount--;\n\n        if (!retryCount) {\n          return reject(err);\n        }\n\n        setTimeout(function () {\n          handle();\n        }, time);\n      });\n    }\n\n    handle();\n  });\n};\n\nmodule.exports = MyPromise;\n\n//# sourceURL=webpack://myPromise/./lib/index.js?");

/***/ })

/******/ });
});