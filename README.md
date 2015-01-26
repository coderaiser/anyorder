# Anyorder

Call function with any order of arguments.

## What for?

`Anyorder` could be used when order of parameters need to be other then
it is. It's not very common situation, but sometimes it could be useful.
For example to avoid [boolean trap](http://ariya.ofilabs.com/2011/08/hall-of-api-shame-boolean-trap.html "hall of api shame: boolean trap") in `addEventListener`.

## How to use?
In `node.js`:
```js
var anyorder    = require('anyorder'),
    fs          = require('fs'),
    read        = anyorder('function, string', fs.readFile);
    
read(function(error, data) {
}, 'README.md');
```

In `browser`:
```js
var addListener = window.addEventListener.bind(window),
    add         = anyorder('string, function, boolean', addListener);
    
add('load', true, function(event) {
    console.log(event);
});
```

## License

MIT
