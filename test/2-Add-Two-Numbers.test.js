const addTwoNumbers = require('../leetcode/2-Add-Two-Numbers');

test ('addTwoNumbers((2 -> 4 -> 3) + (5 -> 6 -> 4)) expect 7 -> 0 -> 8', () => {
    expect(addTwoNumbers({
        val: 2, next: {
            val: 4,
            next: {
                val: 3,
                next: null
            }
        }
    }, {
        val: 5,
        next: {
            val: 6,
            next: {
                val: 4,
                next: null
            }
        }
    })).toEqual({
        val: 7,
        next: {
            val: 0,
            next: {
                val: 8,
                next: null
            }
        }
    });
})

test('addTwoNumbers(0->1, 0->9) expect 0->0->1', () => {
    expect(addTwoNumbers({
        val: 0,
        next: {
            val: 1,
            next: null
        }
    }, {
        val: 0,
        next: {
            val: 9,
            next: null
        }
    })).toEqual({
        val: 0,
        next: {
            val: 0,
            next: {
                val: 1,
                next: null
            }
        }
    })
})