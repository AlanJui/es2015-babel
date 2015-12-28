var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('build-html', function () {
	return gulp.src('src/index.html')
		.pipe(gulp.dest('dist'));
})

gulp.task('default', ['build-html'], function () {
	return gulp.src('src/app.js')
		.pipe(babel())	
		.pipe(gulp.dest('dist'));
});