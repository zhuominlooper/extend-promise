//myPromise的静态方法test
var expect = require("chai").expect;
const myPromise = require("../lib/index.js");
describe("myPromise静态函数resolve测试:", function () {
  it("resolve-->普通值:", function () {
    expect(myPromise.resolve("").then((res) => {})).to.not.be.equal(undefined);
  });
  it("resolve-->prmise(resolve)值:", function () {
    expect(
      myPromise
        .resolve(
          new myPromise((resolve, reject) => {
            resolve("");
          })
        )
        .then((res) => {})
    ).to.not.be.equal(undefined);
  });
  it("resolve-->prmise(reject)值:", function () {
    expect(
      myPromise
        .resolve(
          new myPromise((resolve, reject) => {
            reject("");
          })
        )
        .then((res) => {})
    ).to.not.be.equal(undefined);
  });
});

describe("myPromise静态函数reject测试:", function () {
  it("reject-->普通值:", function () {
    expect(myPromise.reject("").then((res) => {})).to.not.be.equal(undefined);
  });
  it("reject-->prmise(resolve)值:", function () {
    expect(
      myPromise
        .reject(
          new myPromise((resolve, reject) => {
            resolve("");
          })
        )
        .then((res) => {})
    ).to.not.be.equal(undefined);
  });
  it("reject-->prmise(reject)值:", function () {
    expect(
      myPromise
        .reject(
          new myPromise((resolve, reject) => {
            reject("");
          })
        )
        .then((res) => {})
    ).to.not.be.equal(undefined);
  });
});

describe("myPromise静态函数resolveDelay测试:", function () {
  it("resolveDelay-->普通值:", function () {
    expect(myPromise.resolveDelay("", 100).then((res) => {})).to.not.be.equal(
      undefined
    );
  });
  it("resolveDelay-->prmise(resolve)值:", function () {
    expect(
      myPromise
        .resolveDelay(
          new myPromise((resolve, reject) => {
            resolve("");
          }),
          100
        )
        .then((res) => {})
    ).to.not.be.equal(undefined);
  });
  it("resolveDelay-->prmise(reject)值:", function () {
    expect(
      myPromise
        .resolveDelay(
          new myPromise((resolve, reject) => {
            reject("");
          }),
          100
        )
        .then((res) => {})
    ).to.not.be.equal(undefined);
  });
});

describe("myPromise静态函数rejectDelay测试:", function () {
  it("resolveDelay-->普通值:", function () {
    expect(myPromise.reject("", 100).then((res) => {})).to.not.be.equal(
      undefined
    );
  });
  it("resolveDelay-->prmise(resolve)值:", function () {
    expect(
      myPromise
        .resolveDelay(
          new myPromise((resolve, reject) => {
            resolve("");
          })
        )
        .then((res) => {})
    ).to.not.be.equal(undefined);
  });
  it("resolveDelay-->prmise(reject)值:", function () {
    expect(
      myPromise
        .resolveDelay(
          new myPromise((resolve, reject) => {
            reject("");
          })
        )
        .then((res) => {})
    ).to.not.be.equal(undefined);
  });
});

describe("myPromise静态函数race测试:", function () {
  it("race-->resolve:", function () {
    expect(myPromise.race([""]).then((res) => {})).to.not.be.equal(undefined);
  });
  it("race-->reject:", function () {
    expect(
      myPromise.race([myPromise.reject("")]).then((res) => {})
    ).to.not.be.equal(undefined);
  });
});

describe("myPromise静态函数all测试:", function () {
  it("all-->resolve:", function () {
    expect(myPromise.all([""]).then((res) => {})).to.not.be.equal(undefined);
  });
  it("all-->reject:", function () {
    expect(
      myPromise.all([myPromise.reject("")]).then((res) => {})
    ).to.not.be.equal(undefined);
  });
});

describe("myPromise静态函数limitAll测试:", function () {
  it("limitAll-->小于等于并发数:", function () {
    expect(myPromise.limitAll([""], 1).then((res) => {})).to.not.be.equal(
      undefined
    );
  });
  it("limitAll-->大于并发数", function () {
    expect(myPromise.limitAll(["", ""], 1).then((res) => {})).to.not.be.equal(
      undefined
    );
  });
});

describe("myPromise静态函数retry测试:", function () {
  it("retry-->resolve", function () {
    expect(myPromise.retry("", 2, 100).then((res) => {})).to.not.be.equal(
      undefined
    );
  });
  it("retry-->reject", function () {
    expect(
      myPromise.retry(new myPromise.reject(""), 2, 100).then((res) => {})
    ).to.not.be.equal(undefined);
  });
});
