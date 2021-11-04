/**
 * promise的构造函数
 * @param executor function
 * @returns void | function
 */
export interface MyPromise<T = Function> {
  (executor: T): void | T;
}

/**
 * promise的then实现方法
 * @param onResolved function
 * @param onRejected function
 * @returns MyPromise
 */
export interface then<T = Function, R = MyPromise> {
  (onResolved?: T | undefined, onRejected?: T | undefined): R;
}

/**
 * promise的resolve实现方法
 * @param value any
 * @returns MyPromise
 */
export interface resolve<T = any, R = MyPromise> {
  (value?: T): R;
}

/**
 * promise的reject实现方法
 * @param value any
 * @returns MyPromise
 */
export interface reject<T = any, R = MyPromise> {
  (value?: T): R;
}

/**
 * promise的resolveDelay实现方法
 * @param value any
 * @param time Number
 * @returns MyPromise
 */
export interface resolveDelay<T = any, R = MyPromise> {
  (value?: T, time?: Number): R;
}

/**
 * promise的rejectDelay实现方法
 * @param value any
 * @param time Number
 * @returns MyPromise
 */
export interface rejectDelay<T = any, R = MyPromise> {
  (value?: T, time?: Number): R;
}

/**
 * promise的race实现方法
 * @param promiseArr Array<myPromise>
 * @returns MyPromise
 */
export interface race<R = MyPromise, T = Array<R>> {
  (promiseArr?: T): R;
}

/**
 * promise的all实现方法
 * @param promiseArr Array<myPromise>
 * @returns MyPromise
 */
export interface all<R = MyPromise, T = Array<R>> {
  (promiseArr?: T): R;
}

/**
 * promise的limitAll限制并发请求实现方法
 * @param promiseArr Array<myPromise>
 * @param limitCount Number
 * @returns MyPromise
 */
export interface limitAll<R = MyPromise, T = Array<R>> {
  (promiseArr?: T, limitCount?: Number): R;
}

/**
 * promise的retry请求重试实现方法
 * @param promise myPromise
 * @param retryCount Number
 * @param time Number
 * @returns MyPromise
 */
export interface retry<R = MyPromise> {
  (promise?: R, retryCount?: Number, time?: Number): R;
}
