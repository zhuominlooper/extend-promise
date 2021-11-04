## **extend-promise-fun**

[![Build Status](https://app.travis-ci.com/zhuominlooper/extend-promise.svg?branch=main)](https://github.com/zhuominlooper/extend-promise)
[![npm downloads](https://img.shields.io/npm/dm/extend-promise-fun.svg)](https://www.npmjs.com/package/extend-promise-fun)
[![npm version](https://img.shields.io/npm/v/extend-promise-fun.svg)](https://www.npmjs.com/package/extend-promise-fun)
![node](https://img.shields.io/badge/node%40latest-%3E%3D%206.0.0-brightgreen)

[![check Status](https://img.shields.io/badge/checks-passing-brightgreen)](https://github.com/zhuominlooper/2021-javascript/pulls)
[![tests Status](https://img.shields.io/badge/test-passing-brightgreen)](https://coveralls.io/github/zhuominlooper/2021-javascript)
[![Coverage Status](https://coveralls.io/repos/github/zhuominlooper/extend-promise/badge.svg?branch=main)](https://coveralls.io/github/zhuominlooper/extend-promise?branch=main)

![gitter chat](https://img.shields.io/gitter/room/mzabriskie/extend-promise-fun.svg)
![license](https://img.shields.io/badge/license-MIT-green)
[![author](https://img.shields.io/badge/author-looper.zhuo-orange)](https://github.com/zhuominlooper)

---

## **NPM Installation**

- 全局安装:npm i -g extend-promise-fun
- 本地安装:npm i extend-promise-fun -D
- 产线安装:npm i extend-promise-fun -S

---

## **CDN Installation**

```javascript
<script src="https://cdn.jsdelivr.net/npm/extend-promise-fun/dist/index.umd.min.js"></script>
```



## **Browser Support**

| ![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Latest ✔                                                                                 | Latest ✔                                                                                    | Latest ✔                                                                                 | Latest ✔                                                                              | Latest ✔                                                                           | 11 ✔                                                                                                                         |

---

## **Example**

```javascript
nodeJs：
const myPromise = require("extend-promise");
myPromise.resolve('promise').then(res=>{
      console.log('res',res)
  })
```

```javascript
ES6：
import myPromise from "extend-promise";
myPromise.resolve('promise').then(res=>{
      console.log('res',res)
  })
```

---

```javascript
window：
 <script src="https://cdn.jsdelivr.net/npm/extend-promise-fun/dist/index.umd.min.js"></script>
window['myPromise'].resolve('promise').then(res=>{
      console.log('res',res)
  })
```

---

## **License**

### MIT

---

## **Npm DevDependents**

```javascript
@babel/cli
@babel/core
@babel/preset-env
babel-loader
chai
cross-env
eslint
eslint-config-airbnb-basees
lint-plugin-import
jest
mocha
mochawesome
webpack
webpack-cli
nyc
```

---

## **Engineering**

 <img src="https://user-gold-cdn.xitu.io/2018/5/13/163583bef8f07f05?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" width=556 height=256 />


## **Collaborators**

### **[looper.zhuo](https://github.com/zhuominlooper)**

---
