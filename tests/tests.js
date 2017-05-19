var assert = chai.assert;

suite('operation', function() {
	setup(function() {
		if (typeof __html__ !== 'undefined') {
			document.body.innerHTML = __html__['tests/index.html'];
			original = document.getElementById('original');
			operated = document.getElementById('converted');
		}
	});
	
	test('2+3', function() {
		original = '2+3';
		main();
		assert.match(operated, /ERROR/);
	});
});
