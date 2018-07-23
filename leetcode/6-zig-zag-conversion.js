/**
 * 将字符串 "PAYPALISHIRING" 以Z字形排列成给定的行数：
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 * 之后从左往右，逐行读取字符："PAHNAPLSIIGYIR"
 * 实现一个将字符串进行指定行数变换的函数:
 * string convert(string s, int numRows);
 *  示例 1:
 * 输入: s = "PAYPALISHIRING", numRows = 3
 * 输出: "PAHNAPLSIIGYIR"
 * 示例 2:
 * 输入: s = "PAYPALISHIRING", numRows = 4
 * 输出: "PINALSIGYAHRPI"
 * 解释:
 * P     I    N
 * A   L S  I G
 * Y A   H R
 * P     I
 */

 /**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
module.exports = function convert (s, numRows) {
    if(numRows <= 1) {
        return s;
    }
    let str = '';
    let step = (numRows - 1) * 2;
    let obj = {};
    for(let i = 0; i < numRows; i++) {
        obj[i] = '';
    }
    for(let i = 0; i < s.length; i++){
        let key = i % step;
        if(key > step / 2) {
            key = step / 2 - i % (step / 2);
        }
        obj[key] += s[i];
    }
    for(let i = 0; i < numRows; i++) {
        str += obj[i];
    }
    return str
};