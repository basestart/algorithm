/**
 * 
 * 给定两个非空链表来表示两个非负整数。位数按照逆序方式存储，它们的每个节点只存储单个数字。将两数相加返回一个新的链表。

 * 你可以假设除了数字 0 之外，这两个数字都不会以零开头。

 * 示例：

 * 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 * 输出：7 -> 0 -> 8
 * 原因：342 + 465 = 807
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

module.exports = function addTwoNumbers(l1, l2, carry) {
    carry = carry || 0;
    let [v1, v2] = [l1.val, l2.val];
    let resNode = new ListNode((v1 + v2 + carry) % 10);
    let nextcarry = v1 + v2 + carry - 9 > 0 ? 1 : 0;
    if(l1.next || l2.next || nextcarry) {
        l1 = l1.next || new ListNode(0);
        l2 = l2.next || new ListNode(0);
        resNode.next = addTwoNumbers(l1, l2, nextcarry);
    };
    return resNode;
};
