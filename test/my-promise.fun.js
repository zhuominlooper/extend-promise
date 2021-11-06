//myPromise的构造函数test
const myPromise = require("../lib/index.js");
var expect = require("chai").expect;
describe("myPromise构造函数测试:", function () {
  it("resolve:", function () {
    expect(
      new myPromise((resolve, reject) => {
        resolve("");
      }).then((res) => {})
    ).to.not.be.equal(undefined);
  });
  it("resolve:", function () {
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
