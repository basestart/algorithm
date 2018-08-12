module.exports = function (val) {
    this.val = val;
    this.next = null;
    this.toString = function () {
        return this.val;
    }
}