"use strict";

var chai = require("chai");
var assert = chai.assert;
// var Operation = require("../operation.js");

describe('operation', function() {
	it('2+3', function() {
		console.log(Operation);
		var result = Operation.operate("2+3");
		assert.match(result, /ERROR/);
	});
});
