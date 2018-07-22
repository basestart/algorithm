

module.exports = function findMedianSortedArrays (nums1, nums2) {
    let [l1, l2] = [nums1.length, nums2.length];
    if(l1 > l2) [num1, nums2, l1, l2] = [nums2, nums1, l2, l1];
    let total = l1 + l2;
    let lstart = 0;
    let end = l1 - 1;
    let pos = ((lstart + end + 1) / 2 - 1) ^ 0;
    let npos = ((total + 1) / 2) - pos - 2;
    while(pos >= 0 && pos <= end) {
        let [left, right] = [Math.max(nums1[pos], nums2[npos]), Math.max(nums1[pos + 1], nums2[npos + 1])];
        if (left <= right) {
            if(total % 2) {
                return left;
            } else {
                return (left + rght) / 2;
            }
        } else {
            if(nums1[pos] > nums2[npos]) {
                end = pos - 1;    
                pos = ((lstart + end + 1) / 2 - 1) ^ 0;
                npos = ((total + 1) / 2) - pos - 2;
            } else {
                lstart = pos + 1;
                pos = ((lstart + end + 1) / 2 - 1) ^ 0;
                npos = ((total + 1) / 2) - pos - 2;
            }
        }
    }
}