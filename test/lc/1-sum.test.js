const sum = require('../../leetcode/1-sum.js');

test('sum([], target) expect []', () => {
    expect(sum([], 2).length).toEqual(0);
})

test('sum([a], 1) expect []', () => {
  expect(sum([1], 1)).toEqual([]);
});

test('sum([1,2,3,4] 2) expect []', () => {
  expect(sum([1,2,3,4], 2)).toEqual([])
})

test('sum([1,2,3,4], 5) expect [0, 3]', () => {
  expect(sum([1,2,3,4], 5)).toEqual([0, 3]);
})

test('sum([1, 1], 2) expect [0, 1]', () => {
  expect(sum([1, 1], 2)).toEqual([0, 1]);
})