const climbStairs = require('../leetcode/70-climbing-stairs');

test('expect climbStaris(0) to be 0', () => {
    expect(climbStairs(0)).toBe(0);
})

test('expect climbStaris(-1) to be 0', () => {
    expect(climbStairs(-1)).toBe(0);
})

test('expect climbStaris(1) to be 1', () => {
    expect(climbStairs(1)).toBe(1);
})

test('expect climbStaris(2) to be 2', () => {
    expect(climbStairs(2)).toBe(2);
})

test('expect climbStaris(3) to be 3', () => {
    expect(climbStairs(3)).toBe(3);
})

test('expect climbStaris(5) to be 8', () => {
    expect(climbStairs(5)).toBe(8);
})