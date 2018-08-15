let linkList = require('../../ds/linkList');

test('get an init val linkList() get {pHead: null, pEnd: null}', () => {
    let node = new linkList();
    expect(node.pHead).toEqual(null);
    expect(node.pEnd).toEqual(null);
})

test('apend 1', () => {
    let node = new linkList();
    node.append(1);
    expect(node.pHead.val).toBe(1);
    expect(node.pEnd.val).toBe(1);
})

test('prepend 1', () => {
    let node = new linkList();
    node.prepend(1);
    expect(node.pHead.val).toBe(1);
    expect(node.pEnd.val).toBe(1);
})

test('apend 1, 2', () => {
    let node = new linkList();
    node.append(1);
    node.append(2);
    expect(node.pHead.val).toBe(1);
    expect(node.pEnd.val).toBe(2);
})

test('apend 1, 2, and prepend 3', () => {
    let node = new linkList();
    node.append(1);
    node.append(2);
    node.prepend(3);
    expect(node.pHead.val).toBe(3);
    expect(node.pEnd.val).toBe(2);
    expect(node.pHead.next.val).toBe(1);
})

test('apend 1, 2, and delete 2', () => {
    let node = new linkList();
    node.append(1);
    node.append(2);
    node.delete(2);
    expect(node.pHead.val).toBe(1);
    expect(node.pEnd.val).toBe(1);
})

test('delete 2', () => {
    let node = new linkList();
    let res = node.delete(2);
    expect(res).toBe(null);
})

test('apend 1, and delete 1', () => {
    let node = new linkList();
    node.append(1);
    node.delete(2);
    expect(node.pHead.val).toBe(1);
    expect(node.pEnd.val).toBe(1);
    node.delete(1);
    expect(node.pHead).toBe(null);
    expect(node.pEnd).toBe(null);
})

test('apend 1, 2, 3, and delete 3', () => {
    let node = new linkList();
    node.append(1);
    node.append(2);
    node.append(3);
    node.delete(4);
    expect(node.pHead.val).toBe(1);
    expect(node.pEnd.val).toBe(3);
    node.delete(3);
    expect(node.pHead.val).toBe(1);
    expect(node.pEnd.val).toBe(2);
})

test('apend 1, 2, and toArray [1, 2]', () => {
    let node = new linkList();
    node.append(1);
    node.append(2);
    let arr = node.toArray();
    expect(arr).toEqual([1, 2]);
})

test('apend 1, 2, and find 1, find 3', () => {
    let node = new linkList();
    node.append(1);
    node.append(2);
    let f1 = node.find(1);
    let f3 = node.find(3);
    expect(f1).toBe(true);
    expect(f3).toBe(false);
})