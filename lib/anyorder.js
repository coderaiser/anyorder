(function(global) {
    'use strict';
    
    if (typeof module !== 'undefined' && module.exports)
        module.exports = anyorder;
    else
        global.anyorder = anyorder;
    
    function anyorder(str, fn) {
        var func;
        
        check(str, fn);
        
        func    = function() {
            var args    = [],
                arr     = str.split(', ');
            
            [].forEach.call(arguments, function(arg) {
                arr.some(function(name) {
                    var is = type(arg) === name;
                    
                    if (is)
                        args.push(arg);
                    
                    return is;
                });
            });
            
            fn.apply(null, args);
        };
        
        return func;
    }
    
    function type(variable) {
        var regExp      = new RegExp('\\s([a-zA-Z]+)'),
            str         = {}.toString.call(variable),
            typeBig     = str.match(regExp)[1],
            result      = typeBig.toLowerCase();
        
        return result;
    }
    
    function check(str, fn) {
        if (!str)
            throw(Error('str could not be empty!'));
        
        if (!fn)
            throw(Error('fn could not be empty!'));
    }
    
})(this);
