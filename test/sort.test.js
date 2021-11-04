const Fun = require("../lib/sort.js");
var expect = require("chai").expect;
describe("counterfeitSort函数测试:", function () {
  it("result:", function () {
    expect(Fun.counterfeitSort([3, 2, 1]).arr).to.be.deep.equal([1, 2, 3]);
  });
  it("result:", function () {
    expect(Fun.counterfeitSort("")).to.not.be.equal([1, 2, 3]);
  });
  it("result:", function () {
    expect(Fun.counterfeitSort([])).to.not.be.equal([1, 2, 3]);
  });
  it("result:", function () {
    expect(Fun.counterfeitSort(["1", "looper"])).to.not.be.equal([1, 2, 3]);
  });
});
