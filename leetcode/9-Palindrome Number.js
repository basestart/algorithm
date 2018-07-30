module.exports = function isPalindrome (x) {
    let t = x + '';
    let l = t.length;
    for(let i = 0; i < ((l / 2) ^ 0); ++i) {
        if(t[i] !== t[l - 1 - i]) {
            return false;
        }
    };
    return true;
};