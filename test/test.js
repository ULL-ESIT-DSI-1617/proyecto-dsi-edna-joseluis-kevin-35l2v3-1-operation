"use strict";

var chai = require("chai");
var assert = chai.assert;
var Operation = require("../index.js");

describe('operation', function() {
	it('2+3', function() {
		var result = Operation.operate("2+3");
		assert.match(result, /ERROR/);
	});
});
