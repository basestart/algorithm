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