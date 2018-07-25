/**
 * 
 *给定一个二叉树，返回它的中序 遍历。 
 示例:
 输入: [1,null,2,3]
   1
    \
     2
    /
   3

 输出: [1,3,2]
 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
 */

 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

module.exports = function inorderTraversal (root) {
    function travs(node) {
        if(!node || !node.val) {
            return []
        }
        if(node.left) {
            travs(node.left);
        }
        res.push(node.val);
        if(node.right) {
            travs(node.right);
        }
    }
    let res = [];
    travs(root);
    return res;
};