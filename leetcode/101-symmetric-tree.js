/**
 * 给定一个二叉树，检查它是否是镜像对称的。
 * 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
 *     1
 *    / \
 *   2   2
 *  / \ / \
 * 3  4 4  3 
 * 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
 *   1
 *  / \
 * 2   2
 *  \   \
 *   3    3
 * 说明:
 * 如果你可以运用递归和迭代两种方法解决这个问题，会很加分。
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
 * @return {boolean}
 */
module.exports = function isSymmetric (root) {
    return comp(root, root)
};

function comp(l, r) {
    if(!l && !r) return true;
    if(!!l ^ !!r) return false;
    if(l.val !== r.val) {
        return false;
    }
    if(!!l.left ^ !! r.right || !!l.right ^ !! r.left) {
        return false;
    }
    return comp(l.left, r.right) && comp(l.right, r.left);
}