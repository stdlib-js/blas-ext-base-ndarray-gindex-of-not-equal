/** @license Apache-2.0 */

'use strict';

/**
* Return the first index of an element in a one-dimensional ndarray which is not equal to a specified search element.
*
* @module @stdlib/blas-ext-base-ndarray-gindex-of-not-equal
*
* @example
* var vector = require( '@stdlib/ndarray-vector-ctor' );
* var scalar2ndarray = require( '@stdlib/ndarray-from-scalar' );
* var gindexOfNotEqual = require( '@stdlib/blas-ext-base-ndarray-gindex-of-not-equal' );
*
* var x = vector( [ 1.0, 1.0, 3.0 ], 'generic' );
*
* var searchElement = scalar2ndarray( 1.0, {
*     'dtype': 'generic'
* });
*
* var v = gindexOfNotEqual( [ x, searchElement ] );
* // returns 2
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
