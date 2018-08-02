/**
 * 给定一个二叉树，返回其按层次遍历的节点值。 （即逐层地，从左到右访问所有节点）。
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
module.exports = function levelOrder (root) {
    if(!root) return []
    let arr = [];
    let res = [];
    arr.push({...root, l: 0});
    let len = arr.length;
    while(len) {
        let cur = arr.pop()
        let index = cur.l;
        res[index] = res[index] || [];
        res[index].push(cur.val);
        if(cur.left) {
            cur.left.l = index + 1;
            arr.unshift(cur.left)
        }
        if(cur.right) {
            cur.right.l = index + 1;
            arr.unshift(cur.right)
        }
        len = arr.length;
    }
    return res;
};