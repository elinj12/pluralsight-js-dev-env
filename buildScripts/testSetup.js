//This file isn't transpiled, so must use CommonJS and ES5

// Register babel to transpile befgore our tests run
require('babel-register')();

// Disable webpack featuers that Mocha doesn't understand.
// Treat .css as a empty function.
require.extensions['.css'] = function() {};
