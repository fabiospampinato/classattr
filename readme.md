# ClassAttr

A `classList`-like API that's purely based on the reading/writing the class attribute.

## WHY?!

Because apparently touching the `classList` API for a node causes a `DOMTokenList` to be allocated for that node indefinitely. Like you may be asking the `classList` API to delete a class from a node that perhaps doesn't even classes to begin with, and that will still allocate a `DOMTokenList` for that node, which sounds like nonsense to me, that's what this little module is meant to address. You probably don't need it.

## Install

```sh
npm install --save classattr
```

## Usage

It works just like the `classList` API.

```ts
import ClassAttr from 'classattr';

const element = document.body;

ClassAttr.add ( element, 'foo', 'bar', 'baz' );

ClassAttr.contains ( element, 'foo' ); // => true
ClassAttr.contains ( element, 'foo2' ); // => false

ClassAttr.remove ( element, 'bar' );

ClassAttr.toggle ( element, 'baz' );
ClassAttr.toggle ( element, 'baz' );
ClassAttr.toggle ( element, 'baz', true );
ClassAttr.toggle ( element, 'baz', false );
```

## License

MIT © Fabio Spampinato
