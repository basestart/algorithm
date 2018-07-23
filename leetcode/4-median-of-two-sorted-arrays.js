/**
 * 
 * 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2 。

 * 请找出这两个有序数组的中位数。要求算法的时间复杂度为 O(log (m+n)) 。

 * 示例 1:

 * nums1 = [1, 3]
 * nums2 = [2]

 * 中位数是 2.0
 * 示例 2:

 * nums1 = [1, 2]
 * nums2 = [3, 4]

 * 中位数是 (2 + 3)/2 = 2.5
 * 
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

 // 时间复杂度有待优化
module.exports = function findMedianSortedArrays (nums1, nums2) {
	let total = nums1.length + nums2.length;
    let arr = nums1.concat(nums2).sort((v1, v2) => (v1 - v2));
    return total % 2 ? arr[(total - 1) / 2] : (arr[total / 2] + arr[total / 2 - 1]) / 2;
}