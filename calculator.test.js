import { test } from 'node:test';
import assert from 'node:assert/strict';
import { add, subtract, multiply } from './calculator.js';

// ---------- add ----------
test('add: 正数相加', () => {
  assert.equal(add(2, 3), 5);
});

test('add: 负数相加', () => {
  assert.equal(add(-2, -3), -5);
});

test('add: 正负混合', () => {
  assert.equal(add(-2, 5), 3);
});

test('add: 加零', () => {
  assert.equal(add(0, 7), 7);
});

test('add: 小数（浮点容差）', () => {
  assert.ok(Math.abs(add(0.1, 0.2) - 0.3) < 1e-9);
});

// ---------- subtract ----------
test('subtract: 正数相减', () => {
  assert.equal(subtract(5, 3), 2);
});

test('subtract: 结果为负', () => {
  assert.equal(subtract(3, 5), -2);
});

test('subtract: 减零', () => {
  assert.equal(subtract(7, 0), 7);
});

test('subtract: 负数相减', () => {
  assert.equal(subtract(-2, -3), 1);
});

// ---------- multiply ----------
test('multiply: 正数相乘', () => {
  assert.equal(multiply(3, 4), 12);
});

test('multiply: 含负数', () => {
  assert.equal(multiply(-3, 4), -12);
});

test('multiply: 两负数得正', () => {
  assert.equal(multiply(-3, -4), 12);
});

test('multiply: 乘零', () => {
  assert.equal(multiply(0, 99), 0);
});

test('multiply: 乘一', () => {
  assert.equal(multiply(7, 1), 7);
});

test('multiply: 小数（浮点容差）', () => {
  assert.ok(Math.abs(multiply(0.1, 0.2) - 0.02) < 1e-9);
});
