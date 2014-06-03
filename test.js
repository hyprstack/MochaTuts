var assert = require('assert');  // node module
var C = require('../cash.js');  // our module

describe('Cash Register', function () {
	describe('Module C', function() {

		//the 'it' method here takes two parameters; the first is the humanly readable mesage when the test fails;
		//the second is the function that is called to test our module
		
		it('it should have a getChange Method', function() {
			assert.equal(typeof C, 'object');   //here we test to see if 'C' is an 'object'
			assert.equal(typeof C.getChange, 'function');   //here we test to see is 'C.getChange' is a function
		});
		it('getChange(210, 300) should equal [50,20,20]', function() {  //here we test the result of 'C.getChange' when values are passed to it
			assert.deepEqual(C.getChange(210,300), [50,20,20]);
		});
		it('getChange(1487, 10000) should equal [5000, 2000, 1000, 500, 10, 2, 1 ]', function() {
			assert.deepEqual(C.getChange(1487, 10000), [5000, 2000, 1000, 500, 10, 2, 1]);
		})
	})
})
