const rotate = require('../../leetcode/48-rotate-image');

test(`rotate[] to be []`, () => {
    expect(rotate([])).toEqual([]);
})

test('rotate [[1, 2], [3, 4]] to be [[3, 1], [4, 2]]', () => {
    expect(rotate([[1, 2], [3, 4]])).toEqual([[3, 1], [4, 2]]);
})

test(`rotate [
    [1, 2, 3],
    [4, 5, 6], 
    [7, 8, 9]
] tobe [
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3]
]`, () => {
    expect(rotate([
        [1, 2, 3],
        [4, 5, 6], 
        [7, 8, 9]
    ])).toEqual([
        [7, 4, 1],
        [8, 5, 2],
        [9, 6, 3]
    ])
})