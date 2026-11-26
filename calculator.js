// 计算器：实现加、减、乘、除四种运算

/** 加法 */
export function add(a, b) {
  return a + b;
}

/** 减法 */
export function subtract(a, b) {
  return a - b;
}

/** 乘法 */
export function multiply(a, b) {
  return a * b;
}

/** 除法；除数为 0 时抛出错误 */
export function divide(a, b) {
  if (b === 0) {
    throw new RangeError('除数不能为 0');
  }
  return a / b;
}
