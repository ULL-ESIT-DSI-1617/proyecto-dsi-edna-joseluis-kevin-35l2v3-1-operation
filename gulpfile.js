var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('default', ['test']);

gulp.task('debug', shell.task('node --inspect --debug-brk operation.js'));

gulp.task('run', shell.task('node operation.js'));

gulp.task('test', shell.task('./node_modules/karma/bin/karma start --single-run --browsers Chrome,Firefox'));

gulp.task('doc', shell.task('documentation build operation.js -f html -o docs'));
