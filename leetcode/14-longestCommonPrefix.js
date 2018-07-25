/**
 * 
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀，返回空字符串 ""。
 * 示例 1:
 * 输入: ["flower","flow","flight"
 * 输出: "fl"
 * 示例 2:
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 * 说明:
 * 所有输入只包含小写字母 a-z 。
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
module.exports = function longestCommonPrefix (strs) {
    let l = strs.length;
    if(!l) return '';
    if(l === 1) return strs[0];
    let base = strs[0];
    for(let i = 1; i < strs.length; i++) {
        base = pair(base, strs[i]);
    }
    return base;
};

function pair(s1, s2) {
    for(let i = 0; i < s1.length; i++) {
        if(s1[i] !== s2[i]) {
            return s1.slice(0, i);
        }
    }
    return s1;
}