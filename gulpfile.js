var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var pug = require('gulp-pug');

gulp.task('html', function() {
  return gulp.src('templates/*.pug')
  .pipe(pug({
    // Your options in here. 
  }))
  .pipe(gulp.dest('public'));
});

gulp.task('sass', function() {
  return gulp.src('scss/**/*.scss')
    .pipe(sourcemaps.init())  // Process the original sources
      .pipe(sass())
    .pipe(sourcemaps.write()) // Add the map to modified source.
    .pipe(gulp.dest('public/css'));
});

gulp.task('js', function () {
  gulp.src('js/**/*.js')
    .pipe(concat('app.js'))
    .pipe(gulp.dest('public/js'));
});

gulp.task('default', ['html', 'sass', 'js']);

