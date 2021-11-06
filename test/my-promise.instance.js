//myPromise的实例函数test
const myPromise = require("../lib/index.js");
var expect = require("chai").expect;
describe("myPromise实例函数then测试:", function () {
  it("callback:", function () {
    expect(
      new myPromise((resolve, reject) => {
        setTimeout(() => {
          resolve("");
        });
      }).then("", "")
    ).to.not.be.equal(undefined);
  });
  it("pengding状态:", function () {
    expect(
      new myPromise((resolve, reject) => {
        setTimeout(() => {
          resolve("");
        });
      }).then(
        (res) => {},
        (reason) => {}
      )
    ).to.not.be.equal(undefined);
  });

  it("resolve状态:", function () {
    expect(
      new myPromise((resolve, reject) => {
        resolve("");
      }).then(
        (res) => {},
        (resaon) => {}
      )
    ).to.not.be.equal(undefined);
  });
  it("reject状态:", function () {
    expect(
      new myPromise((resolve, reject) => {
        reject("");
      }).then(
        (res) => {},
        (resaon) => {}
      )
    ).to.not.be.equal(undefined);
  });
});
describe("myPromise实例函数catch测试:", function () {
  it("catch:", function () {
    expect(
      new myPromise((resolve, reject) => {
        reject("");
      })
        .then((res) => {})
        .catch((err) => {})
    ).to.not.be.equal(undefined);
  });
});

describe("myPromise实例函数finally测试:", function () {
  it("finally:", function () {
    expect(
      new myPromise((resolve, reject) => {
        reject("");
      })
        .then((res) => {})
        .finally((err) => {})
    ).to.be.undefined;
  });
});
