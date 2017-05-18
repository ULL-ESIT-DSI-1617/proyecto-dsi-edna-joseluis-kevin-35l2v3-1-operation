"use strict";

var assert = chai.assert;

suite('operation', function() {
	test('2+3', function() {
		original.value = '2+3';
		main();
		assert.match(operated.innerHTML, /ERROR/);
	});
});
