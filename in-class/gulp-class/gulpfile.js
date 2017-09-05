const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');

gulp.task('default', function() {
	//console.log("Look at me, gulping!");
	gulp.task('default', function() {
		gulp.watch('sass/**/*.scss', ['styles']);
		gulp.watch('src/**/*.js', ['scripts']);
	});
});

gulp.task('styles', function() {
	gulp.src('sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./css/'));
});

gulp.task('scripts', function() {
	return gulp.src('src/**/*.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('dist'));
});