const convert = require('../../leetcode/6-zig-zag-conversion');

test('convert("", 1) to be ""', () => {
    expect(convert("", 1)).toBe("")
})

test('convert("PAYPALISHIRING", 0) to be "PAYPALISHIRING"', () => {
    expect(convert("PAYPALISHIRING", 0)).toBe("PAYPALISHIRING")
})

test('convert("PAYPALISHIRING", 1) to be "PAYPALISHIRING"', () => {
    expect(convert("PAYPALISHIRING", 1)).toBe("PAYPALISHIRING")
})

test('convert("PAYPALISHIRING", 3) to be "PAHNAPLSIIGYIR"', () => {
    expect(convert("PAYPALISHIRING", 3)).toBe("PAHNAPLSIIGYIR")
})

test('convert("PAYPALISHIRING", 4) to be "PINALSIGYAHRPI"', () => {
    expect(convert("PAYPALISHIRING", 4)).toBe("PINALSIGYAHRPI")
})