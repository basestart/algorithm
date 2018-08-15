const longestCommonPrefix = require('../../leetcode/14-longestCommonPrefix');

test('input [] expect to equal ""', () => {
    expect(longestCommonPrefix([])).toEqual("");
})

test('input ["abcdefg"] expect to equal "abcdefg"', () => {
    expect(longestCommonPrefix(["abcdefg"])).toEqual("abcdefg");
})

test('input ["", "a"] expect to equal ""', () => {
    expect(longestCommonPrefix(["", "a"])).toEqual("");
})

test('input ["aaa", "a"] expect to equal "a"', () => {
    expect(longestCommonPrefix(["aaa", "a"])).toEqual("a");
})

test('input ["dog", "racecar", "car"] expect to equal ""', () => {
    expect(longestCommonPrefix(["dog", "racecar", "car"])).toEqual("")
})

test('input ["flower","flow","flight"] expect to equal "fl"', () => {
    expect(longestCommonPrefix(["flower","flow","flight"])).toEqual("fl")
})