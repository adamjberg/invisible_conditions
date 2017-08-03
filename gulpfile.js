var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var pug = require('gulp-pug');

gulp.task('html', function () {
  return gulp.src([
    'templates/index.pug',
    'templates/be-a-mentor.pug',
    'templates/support-us.pug',
    'templates/team.pug'
  ])
    .pipe(pug({
      // Your options in here. 
    }))
    .pipe(gulp.dest('public'));
});

gulp.task('sass', function () {
  return gulp.src('scss/**/*.scss')
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
    '!js/register.js'
  ])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('public/js'));

  gulp.src(['js/register.js'])
    .pipe(concat('register.js'))
    .pipe(gulp.dest('public/js'));
});

gulp.task('php', function () {
  gulp.src([
    'server/registration/*.php'
  ])
    .pipe(gulp.dest('public'));
})

gulp.task('default', ['html', 'sass', 'js', 'php']);

