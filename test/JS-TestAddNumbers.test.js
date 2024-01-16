const assert = require('assert')
const js = require('../apiproxy/resources/jsc/JS-TestFunction.js');

test("addNumbers with integer and integer", function(){
    expect(js.addNumbers(3,4)).toBe(7);
})

test("addNumbers with float and integer", function(){
    expect(js.addNumbers(3.0,4)).toBe(7);
})

test("mutliply with float and integer", function(){
    expect(js.multiply(3.0,4)).toBe(12);
})

test("multiply with integer and integer", function(){
    expect(js.multiply(3,4)).toBe(12);
})