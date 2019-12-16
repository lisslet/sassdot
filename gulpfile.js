const pump = require('pump');
const gulp = require('gulp');
const {task} = gulp;
const sass = require('gulp-dart-sass');
const debug = require('gulp-debug');


function importTask(name){
	const module = require('./tasks/' + name);
	return module(gulp);
}

task('package:version-update', importTask('version-update'));

task('sass:compile-test', done => {
	return pump(
		gulp.src('./scss/**/*.scss'),
		debug(),
		sass().on('error', sass.logError),
		gulp.dest('./dist')
	);
});
