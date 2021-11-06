const _STATUS_PENGDING_ = "pengding";
const _STATUS_RESOLVE_ = "resolved";
const _STATUS_REJECT_ = "rejected";

//构造函数初始化部分
// 1.传入执行器
// 2.初始化状态和缓存区
// 3.初始化reject和resolve方法
// 4.执行传入的执行器
function MyPromise(executor) {
  const slef = this;
  if (
    !["[object Function]", "[object AsyncFunction]"].includes(
      Object.prototype.toString.call(executor)
    )
  ) {
    throw new Error("执行器请传入一个函数");
  }
  this.status = _STATUS_PENGDING_; //初始状态
  this.value = null; //初始值
  this.callbacks = []; //保存回调函数的数组

  this.resolve = function (value) {
    if (slef.status !== _STATUS_PENGDING_) return;
    slef.status = _STATUS_RESOLVE_; //成功
    slef.value = value;
    setTimeout(() => {
      if (slef.callbacks.length) {
        slef.callbacks.forEach((funObj) => {
          funObj["onResolved"](slef.value);
        });
      }
    });
  };

  this.reject = function (value) {
    if (slef.status !== _STATUS_PENGDING_) return;
    slef.status = _STATUS_REJECT_; //失败
    slef.value = value;
    setTimeout(() => {
      if (slef.callbacks.length) {
        slef.callbacks.forEach((funObj) => {
          funObj["onRejected"](slef.value);
        });
      }
    });
  };
  try {
    executor(slef.resolve, slef.reject);
  } catch (error) {
    slef.reject(error);
  }
}

// 核心的then方法，主要实现链式调用的关键
MyPromise.prototype.then = function (onResolved, onRejected) {
  const self = this;
  onResolved = typeof onResolved === "function" ? onResolved : (value) => value; //保证值往下传递
  onRejected =
    typeof onRejected === "function"
      ? onRejected
      : (reason) => {
          throw reason;
        }; //实现异常穿透
  return new MyPromise((resolve, reject) => {
    function handle(callback) {
      try {
        const result = callback(self.value);
        if (result instanceof MyPromise) {
          result.then(
            (value) => resolve(value),
            (reason) => reject(reason)
          );
        } else {
          resolve(result);
        }
      } catch (error) {
        reject(error);
      }
    }
    if (self.status === _STATUS_PENGDING_) {
      //pengding
      self.callbacks.push({
        onResolved(val) {
          handle(onResolved);
        },
        onRejected(reason) {
          handle(onRejected);
        },
      });
    } else if (self.status === _STATUS_RESOLVE_) {
      // resolved
      setTimeout(() => {
        handle(onResolved);
      });
    } else {
      //rejected
      setTimeout(() => {
        handle(onRejected);
      });
    }
  });
};

//捕捉异常
MyPromise.prototype.catch = function (onRejected) {
  return this.then(undefined, onRejected);
};

//finally函数的实现
MyPromise.prototype.finally = function (callback) {
  if (
    !["[object Function]", "[object AsyncFunction]"].includes(
      Object.prototype.toString.call(callback)
    )
  ) {
    throw new Error("执行器请传入一个函数");
  }
  callback();
};

MyPromise.resolve = function (value) {
  return new MyPromise((resolve, reject) => {
    if (value instanceof MyPromise) {
      value.then(
        (res) => resolve(res),
        (reason) => reject(reason)
      );
    } else {
      resolve(value);
    }
  });
};

MyPromise.reject = function (value) {
  return new MyPromise((resolve, reject) => {
    reject(value);
  });
};

//可以延迟执行resolve
MyPromise.resolveDelay = function (value, time = 0) {
  return new MyPromise((resolve, reject) => {
    setTimeout(() => {
      if (value instanceof MyPromise) {
        value.then(
          (res) => resolve(res),
          (reason) => reject(reason)
        );
      } else {
        resolve(value);
      }
    }, time || 0);
  });
};

//可以延迟执行reject
MyPromise.rejectDelay = function (value, time = 0) {
  return new MyPromise((resolve, reject) => {
    setTimeout(() => {
      reject(value);
    }, time);
  });
};

MyPromise.race = function (promiseArr) {
  return new MyPromise((resolve, reject) => {
    promiseArr.forEach((p) => {
      MyPromise.resolve(p).then(
        (value) => {
          resolve(value);
        },
        (reason) => {
          reject(reason);
        }
      );
    });
  });
};

MyPromise.all = function (promiseArr) {
  let values = [];
  let index = 0;
  return new MyPromise((resolve, reject) => {
    promiseArr.forEach((p, i) => {
      MyPromise.resolve(p).then(
        (value) => {
          index++;
          values[i] = value;
          if (index === promiseArr.length) {
            resolve(values);
          }
        },
        (reason) => {
          reject(reason);
        }
      );
    });
  });
};

MyPromise.limitAll = function (promiseArr, limitCount = 1) {
  return new MyPromise(async (resolve, reject) => {
    if (promiseArr.length <= limitCount) {
      MyPromise.all(promiseArr).then(
        (res) => {
          resolve(res);
        },
        (reason) => {
          reject(reason);
        }
      );
    } else {
      let values = [];
      let count = promiseArr.length;
      handleLimit = (spliceArr) => {
        let cacheValue = [];
        let index = 0;
        return new Promise((res, rej) => {
          spliceArr.forEach((p, i) => {
            Promise.resolve(p).then(
              (value) => {
                index++;
                cacheValue[i] = value;
                if (index === spliceArr.length) {
                  res(cacheValue);
                }
              },
              (reason) => {
                rej(reason);
              }
            );
          });
        });
      };
      do {
        try {
          let spliceArr = promiseArr.splice(0, limitCount);
          const result = await handleLimit(spliceArr);
          values.push(...result);
          if (count === values.length) {
            resolve(values);
          }
        } catch (err) {
          reject(err);
        }
      } while (promiseArr.length);
    }
  });
};

MyPromise.retry = function (promise, retryCount = 1, time = 1000) {
  return new MyPromise((resolve, reject) => {
    function handle() {
      return Promise.resolve(promise)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          console.log(err);
          retryCount--;
          if (!retryCount) {
            return reject(err);
          }
          setTimeout(() => {
            handle();
          }, time);
        });
    }
    handle();
  });
};
module.exports = MyPromise;
module.exports.default = MyPromise;
