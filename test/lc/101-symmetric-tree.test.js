const isSymmetric = require('../../leetcode/101-symmetric-tree');

test('expect input [1,2,2,3,4,4,3] to equal true', () => {
    expect(isSymmetric({
        val: 1,
        left: {
            val: 2,
            left: {
                val: 3,
                left: null,
                right: null
            },
            right: {
                val: 4,
                left: null,
                right: null
            }
        },
        right: {
            val: 2,
            left: {
                val: 4,
                left: null,
                righ: null
            },
            right: {
                val: 3,
                left: null,
                right: null
            }
        }
    })).toBe(true)
})

test('expect input [1,2,2,null,3,null,3] to equal false', () => {
    expect(isSymmetric({
        val: 1,
        left: {
            val: 2,
            left: null,
            right: {
                val: 3,
                left: null,
                right: null
            }
        },
        right: {
            val: 2,
            left: null,
            right: {
                val: 3,
                left: null,
                right: null
            }
        }
    })).toBe(false)
})

test('expect input [null] to equal true', () => {
    expect(isSymmetric(null)).toBe(true)
})

test('expect input [1] to equal true', () => {
    expect(isSymmetric({
        val: 1,
        left: null,
        right: null
    })).toBe(true)
})