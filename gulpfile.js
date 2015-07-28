var gulp = require("gulp");
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var babelify = require("babelify");
var browserify = require('browserify');
var eslint = require('gulp-eslint');

var application = './src/application.jsx';

gulp.task("prod", ['lint'], function () {
  browserify({
      entries: application,
    })
    .transform(babelify)
    .bundle()
    .pipe(source('application.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('./'));
});

gulp.task("dev", function() {
  browserify({
      entries: application,
      debug: true
    })
    .transform(babelify)
    .bundle()
    .pipe(source('application.js'))
    .pipe(gulp.dest('./'));
});

gulp.task('lint', function () {
  return gulp.src(['./**/*.jsx', './**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task('watch', ['dev'], function(){
	gulp.watch(path, ['dev'])
});
