const gNode = require('./node');

 module.exports = class linkLList {
    constructor () {
        this.pHead = null;
        this.pEnd = null;
    }
    append (val) {
        if(val === undefined) {
            throw new Error('please input a valid value');
        }
        if(!this.pHead) {
            this.pHead = this.pEnd = new gNode(val)
        } else {
            let node = new gNode(val);
            this.pEnd.next = node;
            this.pEnd = node;
        }
    }
    prepend (val) {
        if(!this.pHead) {
            this.pHead = this.pEnd = new gNode(val)
        } else {
            let node = new gNode(val);
            node.next = this.pHead;
            this.pHead = node;
        }
    }
    delete (val) {
        let node = this.pHead;
        if(!node) {
            return null;
        }

        if(!node.next) {
            if (node.val === val) {
                this.pHead = this.pEnd = null;
                return node;
            } else {
                return null;
            }
        } else {
            while(node.next.next) {
                let tmp = node.next;
                if(tmp.val === val) {
                    node.next = tmp.next;
                    return tmp;
                } else {
                    node = node.next;
                }
            }
            if(node.next.val === val) {
                this.pEnd = node;
                return node.next;
            } else {
                return null;
            }
        }
    }

    find (val) {
        let node = this.pHead;
        if(!node) return false;
        while(node) {
            if(node.val === val)  return true;
            node = node.next;
        }
        return false
    }
    toArray () {
        let node = this.pHead;
        let arr = [];
        while(node) {
            arr.push(node.val);
            node = node.next;
        }
        return arr;
    }
 }