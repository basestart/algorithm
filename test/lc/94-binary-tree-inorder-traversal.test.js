const inorderTraversal = require('../../leetcode/94-binary-tree-inorder-traversal');

test('input [] expect to equal []', () => {
    expect(inorderTraversal(null)).toEqual([]);
})

test('input [1, null, 2, 3] expect to equal [1, 3, 2]', () => {
    expect(inorderTraversal({
        val: 1,
        left: null,
        right: {
            val: 2,
            left: {
                val: 3,
                left: null,
                right: null
            },
            right: null
        }  
    })).toEqual([1, 3, 2]);
})