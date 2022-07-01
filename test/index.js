
/* IMPORT */

import {describe} from 'fava';
import ClassAttr from '../dist/index.js';

/* MAIN */

describe ( 'ClassAttr', it => {

  it ( 'works', t => {

    class Element {
      className = '';
      getAttribute ( name ) {
        return this.className;
      }
      setAttribute ( name, value ) {
        this.className = value;
      }
    }

    const element = new Element ();

    ClassAttr.add ( element, 'foo' );

    t.is ( ClassAttr.contains ( element, 'foo' ), true );

    ClassAttr.add ( element, 'foo', 'bar', 'baz' );

    t.is ( ClassAttr.contains ( element, 'foo' ), true );
    t.is ( ClassAttr.contains ( element, 'bar' ), true );
    t.is ( ClassAttr.contains ( element, 'baz' ), true );

    ClassAttr.remove ( element, 'foo' );

    t.is ( ClassAttr.contains ( element, 'foo' ), false );
    t.is ( ClassAttr.contains ( element, 'bar' ), true );
    t.is ( ClassAttr.contains ( element, 'baz' ), true );

    ClassAttr.remove ( element, 'bar', 'baz' );

    t.is ( ClassAttr.contains ( element, 'foo' ), false );
    t.is ( ClassAttr.contains ( element, 'bar' ), false );
    t.is ( ClassAttr.contains ( element, 'baz' ), false );

    ClassAttr.toggle ( element, 'foo' );

    t.is ( ClassAttr.contains ( element, 'foo' ), true );

    ClassAttr.toggle ( element, 'foo', true );

    t.is ( ClassAttr.contains ( element, 'foo' ), true );

    ClassAttr.toggle ( element, 'foo' );

    t.is ( ClassAttr.contains ( element, 'foo' ), false );

    ClassAttr.toggle ( element, 'foo', false );

    t.is ( ClassAttr.contains ( element, 'foo' ), false );

  });

});
