const lengthOfLongestSubstring = require('../leetcode/3-longest-substring-no-repeat');

test('"abcabcbb" expect "abc" return length 3', () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toBe(3)
})

test('"bbbbb" expect "b" return length 1', () => {
    expect(lengthOfLongestSubstring("bbbbb")).toBe(1)
})

test('"pwwkew" expect "wke" return length 3', () => {
    expect(lengthOfLongestSubstring("pwwkew")).toBe(3)
})

test('"au" expect "au" return length 2', () => {
    expect(lengthOfLongestSubstring("au")).toBe(2)
})

test('"jbpnbwwd" expect "jbpn" return length 4', () => {
    expect(lengthOfLongestSubstring("jbpnbwwd")).toBe(4)
})

test('"" expect "" return length 0', () => {
    expect(lengthOfLongestSubstring("")).toBe(0)
})