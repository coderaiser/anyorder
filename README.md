# Anyorder

Call function with any order of arguments.

## What for?

`Anyorder` could be used when order of parameters need to be other then it is. It's not very common situation, but sometimes it could be useful.
For example to avoid [boolean trap](http://ariya.ofilabs.com/2011/08/hall-of-api-shame-boolean-trap.html "hall of api shame: boolean trap") in `addEventListener`.

## How to use?
In `node.js`:
```js
const anyorder = require('anyorder');
const fs = require('fs');
const read = anyorder('function, string', fs.readFile);

read((error, data) => {
    console.log(error || data)
}, 'README.md');
```

In `browser`:
```js
const addListener = window.addEventListener.bind(window);
const add = anyorder('string, function, boolean', addListener);

add('load', true, (event) => {
    console.log(event);
});
```

## Environments

In old `node.js` environments that supports `es5` only, `anyorder` could be used with:

```js
var anyorder = require('anyorder/legacy');
```

## License

MIT

