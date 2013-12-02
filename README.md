getsetmixin
===========

Simple map like mixin for objects. This was designed to emulate the
behaviour of express configuration methods (.get, .set).

## Usage

```js
var object = { xxx: true };

require('getsetmixin')(object);

// no conflicts
object.get('xxx'); // => undefined

// chainable
object.set('xxx', 1).
       set('yyy', 2);

object.get('xxx'); // => 1
object.get('yyy'); // => 2
```
