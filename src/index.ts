
/* IMPORT */

import type {Target} from './types';

/* HELPERS */

const hasWhitespace = ( str: string ): boolean => str.includes ( ' ' );
const attr2arr = ( str: string ): string[] => str.split ( ' ' ).filter ( Boolean );
const attr2set = ( attr: string ): Set<string> => new Set ( attr2arr ( attr ) );
const set2attr = ( set: Set<string> ): string => Array.from ( set ).join ( ' ' );
const attr2target = ( target: Target, attr: string ): void => target.setAttribute ( 'class', attr );
const target2attr = ( target: Target ): string => target.getAttribute ( 'class' ) || '';
const validateToken = ( token: string ): void => { if ( hasWhitespace ( token ) ) throw new Error ( 'Tokens can not contain whitespace characters' ); };
const validateTokens = ( tokens: string[] ): void => tokens.forEach ( validateToken );

/* MAIN */

const ClassAttr = {

  /* API */

  add: ( target: Target, ...tokens: string[] ): void => {

    if ( !tokens.length ) return;

    validateTokens ( tokens );

    const attr = target2attr ( target );
    const set = attr2set ( attr );
    const size = set.size;

    tokens.forEach ( token => set.add ( token ) );

    const sizeNext = set.size;

    if ( size === sizeNext ) return;

    const attrNext = set2attr ( set );

    attr2target ( target, attrNext );

  },

  contains: ( target: Target, token: string ): boolean => {

    const attr = target2attr ( target );

    if ( !attr ) return false;
    if ( !attr.includes ( token ) ) return false;

    const set = attr2set ( attr );

    return set.has ( token );

  },

  remove: ( target: Target, ...tokens: string[] ): void => {

    if ( !tokens.length ) return;

    const attr = target2attr ( target );

    if ( !attr ) return;

    validateTokens ( tokens );

    const set = attr2set ( attr );
    const size = set.size;

    if ( !size ) return;

    tokens.forEach ( token => set.delete ( token ) );

    const sizeNext = set.size;

    if ( size === sizeNext ) return;

    const attrNext = set2attr ( set );

    attr2target ( target, attrNext );

  },

  toggle: ( target: Target, token: string, force?: boolean ): void => {

    const attr = target2attr ( target );

    if ( !attr && force === false ) return;

    validateToken ( token );

    const set = attr2set ( attr );
    const size = set.size;

    force = ( force === undefined ) ? !set.has ( token ) : force;

    force ? set.add ( token ) : set.delete ( token );

    const sizeNext = set.size;

    if ( size === sizeNext ) return;

    const attrNext = set2attr ( set );

    attr2target ( target, attrNext );

  }

}

/* EXPORT */

export default ClassAttr;
