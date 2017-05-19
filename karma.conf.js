// Karma configuration
// Generated on Fri May 19 2017 00:02:35 GMT+0100 (Hora de verano GMT)

module.exports = function(config) {
	var options = {

		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: '',


		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['mocha', 'chai'],
		
		
		client: {
			mocha: {
				ui: 'tdd'
			}
		},


		// list of files / patterns to load in the browser
		files: [
		  'operation.js',
		  'tests/*.js',
		  'tests/*.html'
		],


		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {
			'tests/*.html': ['html2js']
		},


		// list of files to exclude
		exclude: [
		],


		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['progress'],


		// web server port
		port: 9876,


		// enable / disable colors in the output (reporters and logs)
		colors: true,


		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,


		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,


		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: [
			'Chrome',
			'Firefox'
		],
		
		
		// If browser does not capture in given timeout [ms], kill it
		captureTimeout: 60000,


		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: false,

		// Concurrency level
		// how many browser should be started simultaneous
		concurrency: Infinity
	};
	
	if (process.env.TRAVIS) {
		options.customLaunchers = {
			Chrome_travis_ci: {
				base: 'Chrome',
				flags: ['--no-sandbox']
			}
		};
		options.browsers = [
			'Chrome_travis_ci',
			'Firefox'
		];
	}
  
  config.set(options);
};
