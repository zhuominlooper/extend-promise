import { MyPromise } from "./index.d";

/**
 * promise的构造函数
 * @param executor function
 * @returns void | function
 */
export interface MyPromise<T = Function> {
  (executor: T): void | T;
}

/*
实例方法的定义接口类
*/
export class MyPromiseInstance {
  /**
   * promise的then实现方法
   * @param onResolved function
   * @param onRejected function
   * @returns MyPromise
   */
  then<T = Function, R = MyPromise>(
    onResolved?: T | undefined,
    onRejected?: T | undefined
  ): R;

  /**
   * promise的resolve实现方法
   * @param value any
   * @returns MyPromise
   */
  resolve<T = any, R = MyPromise>(value?: T): R;

  /**
   * promise的reject实现方法
   * @param value any
   * @returns MyPromise
   */
  reject<T = any, R = MyPromise>(value?: T): R;

  /**
   * promise的resolveDelay实现方法
   * @param value any
   * @param time Number
   * @returns MyPromise
   */
  resolveDelay<T = any, R = MyPromise>(value?: T, time?: Number): R;

  /**
   * promise的rejectDelay实现方法
   * @param value any
   * @param time Number
   * @returns MyPromise
   */
  rejectDelay<T = any, R = MyPromise>(value?: T, time?: Number): R;

  /**
   * promise的rejectDelay实现方法
   * @param cb Function
   * @returns viod
   */
  finally<T = Function>(cb: T): viod;
}

/*
实例静态方法的定义接口类
*/
export interface MyPromiseStatic extends MyPromiseInstance {
  /**
   * promise的race实现方法
   * @param promiseArr Array<myPromise>
   * @returns MyPromise
   */
  race<R = MyPromise, T = Array<R>>(promiseArr?: T): R;

  /**
   * promise的all实现方法
   * @param promiseArr Array<myPromise>
   * @returns MyPromise
   */
  all<R = MyPromise, T = Array<R>>(promiseArr?: T): R;

  /**
   * promise的limitAll限制并发请求实现方法
   * @param promiseArr Array<myPromise>
   * @param limitCount Number
   * @returns MyPromise
   */
  limitAll<R = MyPromise, T = Array<R>>(promiseArr?: T, limitCount?: Number): R;

  /**
   * promise的retry请求重试实现方法
   * @param promise myPromise
   * @param retryCount Number
   * @param time Number
   * @returns MyPromise
   */
  retry<R = MyPromise>(promise?: R, retryCount?: Number, time?: Number): R;
}

declare const MyPromise: MyPromiseStatic;

export default MyPromise;
