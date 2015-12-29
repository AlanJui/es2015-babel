var gulp = require('gulp');
var sass = require('gulp-sass');
var fs = require('fs');
var del = require('del');
var browserify = require('browserify');
var babelify = require('babelify');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync').create();

gulp.task('build-clean', function () {
	return del(['dist']);
});

gulp.task('build-html', function () {
	return gulp.src('src/**/*.html')
		.pipe(gulp.dest('dist'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('build-scripts', function() {
	return browserify({debug: true})
		.transform(babelify)
		.require('src/app.js', {entry: true})
		.bundle()
		.on('error', function(err) {console.log('Error: ' + err.message); })
		.pipe(fs.createWriteStream('dist/bundle.js'));
});

gulp.task('watch-scripts', ['build-scripts'], browserSync.reload);

gulp.task('build-styles', function () {
	// return gulp.src('src/styles/app.css')
	// 	.pipe(gulp.dest('dist'));
	return gulp.src('src/styles/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('dist'))
		.pipe(browserSync.stream());
});

gulp.task('build', function (callback) {
	runSequence(
		'build-clean',
		'build-styles',
		'build-scripts',
		'build-html',
		callback
	);
});

gulp.task('serve', ['build'], function () {
	browserSync.init({
		server: {
			baseDir: 'dist'
		}
	});

	gulp.watch('src/styles/**/*.scss', ['build-styles']);

	gulp.watch('src/**/*.html', ['build-html']);

	gulp.watch('src/**/*.js', ['watch-scripts']);
});

gulp.task('default', ['serve']);