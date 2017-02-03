var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var minifyCSS = require('gulp-minify-css');

gulp.task('script', function(){

	gulp.src('src/js/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(concat('script.min.js'))
		.pipe(uglify())
		// carpeta dist
		.pipe(gulp.dest('dist/js/'));
});

gulp.task('style', function(){
	gulp.src( 'src/css/*.css')
		.pipe(minifyCSS())
		.pipe(concat('style.min.css'))
		.pipe(gulp.dest('dist/css/'));
});


gulp.task('default', ['script', 'style']);