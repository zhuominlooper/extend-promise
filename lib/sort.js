// 此方法会记录一套完整的排序算法(冒泡，快速，归并...)
const chalk = require("chalk");
const warning = chalk.bold.yellow;

// 1.冒泡排序
function counterfeitSort(data) {
  let arr = [];
  if (!Array.isArray(data)) {
    console.log(warning(`请传入数组类型数据`));
  } else if (data.length === 0) {
    console.log(warning(`不能传入空数组`));
  } else if (data.some((x) => typeof x !== "number")) {
    console.log(warning(`数组中的每个元素只能是number类型`));
  } else {
    for (let i = 0; i < data.length; i++) {
      let changeNum;
      for (let j = i; j < data.length; j++) {
        if (data[i] > data[j]) {
          changeNum = data[i];
          data[i] = data[j];
          data[j] = changeNum;
        }
      }
    }
    arr = [...data];
  }
  return {
    arr,
    sortName: "冒泡排序",
    complexRate: "n*n",
  };
}

module.exports = {
  counterfeitSort,
};
