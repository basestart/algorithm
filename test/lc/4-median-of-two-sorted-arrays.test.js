const findMedianSortedArrays = require('../../leetcode/4-median-of-two-sorted-arrays');

test('expect findMedianSortedArrays([1, 3], [2]) to be 2.0', () => {
    expect(findMedianSortedArrays([1, 3], [2])).toBe(2);
})

test('expect findMedianSortedArrays([2, ,2 ,2 ,2], [2, 2]) to be 2.0', () => {
    expect(findMedianSortedArrays([2, ,2 ,2 ,2], [2, 2])).toBe(2);
})

test('expect findMedianSortedArrays([1, 2], [3, 4]) to be 2.5', () => {
    expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5);
})

test('expect findMedianSortedArrays([1, 4, 5, 6], [2, 3, 7, 8]) to be 4.5', () => {
    expect(findMedianSortedArrays([1, 4, 5, 6], [2, 3, 7, 8])).toBe(4.5);
})

test('expect findMedianSortedArrays([], [1, 2, 3, 4]) to be 2.5', () => {
    expect(findMedianSortedArrays([], [1, 2, 3, 4])).toBe(2.5);
})

test('expect findMedianSortedArrays([1, 2, 4], [3, 5, 6, 7]) to be 4', () => {
    expect(findMedianSortedArrays([1, 2, 4], [3, 5, 6, 7])).toBe(4);
})

test('expect findMedianSortedArrays([1, 2, 3, 5], [4, 6, 7, 8]) to be 4.5', () => {
    expect(findMedianSortedArrays([1, 2, 3, 5], [4, 6, 7, 8])).toBe(4.5);
})

test('expect findMedianSortedArrays([1, 5, 6, 7], [2, 3, 4, 8, 9]) to be 5', () => {
    expect(findMedianSortedArrays([1, 5, 6, 7], [2, 3, 4, 8, 9])).toBe(5);
})