'use strict';

const test = require('tape');
const anyorder = require('..');

test('anyorder: no args', (t) => {
    t.throws(anyorder, /str could not be empty!/, 'should throw when no args');
    t.end();
});

test('anyorder: no args', (t) => {
    const fn = () => anyorder('hello');
    
    t.throws(fn, /fn could not be empty!/, 'should throw when no args');
    t.end();
});

test('anyorder: no args', (t) => {
    const fn = anyorder('string, number', (str, number) => `${str} ${number}`);
    const result = fn(5, 'hello');
    
    t.equal(result, 'hello 5', 'should equal');
    t.end();
});

