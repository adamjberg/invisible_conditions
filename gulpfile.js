var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var pug = require('gulp-pug');

const pugFiles = [
  'templates/**/*.pug'
]

gulp.task('html', function () {
  return gulp.src(pugFiles)
    .pipe(pug({
      // Your options in here. 
    }))
    .pipe(gulp.dest('public'));
});

gulp.task('html:w', function () {
  return gulp.watch(pugFiles, ['html']);
})

gulp.task('sass', function () {
  return gulp.src(['scss/**/*.scss'])
    .pipe(sourcemaps.init())  // Process the original sources
    .pipe(sass())
    .pipe(sourcemaps.write()) // Add the map to modified source.
    .pipe(gulp.dest('public/css'));
});

gulp.task('sass:w', function () {
  return gulp.watch('scss/*.scss', ['sass']);
});

gulp.task('js', function () {
  gulp.src([
    'node_modules/instafeed.js/instafeed.min.js',
    'js/**/*.js',
  ])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('public/js'));
});

gulp.task('js:w', function () {
  return gulp.watch('js/*.js', ['js']);
});

gulp.task('php', function () {
  gulp.src([
    'server/registration/*.php'
  ])
    .pipe(gulp.dest('public'));
});

gulp.task('php:w', function () {
  return gulp.watch('server/registration/*.php', ['php'])
});

gulp.task('default', ['html', 'sass', 'js', 'php', 'html:w', 'sass:w', 'js:w', 'php:w']);

