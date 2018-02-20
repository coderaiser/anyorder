'use strict';

module.exports = (str, fn) => {
    check(str, fn);
    
    const func = (...args) => {
        const result = [];
        const types = str.split(', ');
        
        types.map((name) => {
            args.some((arg) => {
                const is = type(arg) === name;
                
                if (is)
                    result.push(arg);
                
                return is;
            });
        });
        
        return fn(...result);
    };
    
    return func;
}

function type(variable) {
    const regExp = /\s([a-zA-Z]+)/;
    const str = {}.toString.call(variable);
    const typeBig = str.match(regExp)[1];
    
    return typeBig.toLowerCase();
}

function check(str, fn) {
    if (!str)
        throw Error('str could not be empty!');
    
    if (!fn)
        throw Error('fn could not be empty!');
}

