var gulp = require('gulp'),
	imagemin = require('gulp-imagemin'),
	htmlReplace = require('gulp-html-replace'),
	uglify = require('gulp-uglify'),
	usemin = require('gulp-usemin'),
	cssmin = require('gulp-cssmin');

// Minificando imagens
gulp.task('build-img', function(){
	gulp.src('img/*')
		.pipe(imagemin())
		.pipe(gulp.dest('img'));
});
	
// Concatenando e Minificando 
gulp.task('usemin', function(){
	gulp.src('index.html')
		.pipe(usemin({
			'js' : [uglify],
			'css' : [cssmin]
		}))
		.pipe(gulp.dest(''));
});

