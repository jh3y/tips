var gulp = require('gulp'),
  plumber = require('gulp-plumber'),
  watch = require('gulp-watch'),
  connect = require('gulp-connect'),
  less = require('gulp-less'),
  sass = require('gulp-sass'),
  jade = require('gulp-jade'),
  minify = require('gulp-minify-css'),
  rename = require('gulp-rename'),
  sources = {
    jade: 'src/jade/**/*.jade',
    less: 'src/less/**/*.less'
  },
  destinations = {
    dev: 'out/',
    overwatch: 'out/**/*.*',
    css: 'out/css/'
  };

gulp.task('serve', function(event) {
  connect.server({
    root: destinations.dev,
    port: 1987,
    livereload: true
  });
  watch({glob: destinations.overwatch})
    .pipe(connect.reload());
});
gulp.task('less:compile', function(event) {
  return gulp.src(sources.less)
    .pipe(less())
    .pipe(gulp.dest(destinations.css));
});
gulp.task('less:watch', function(event) {
  watch({glob: sources.less}, ['less:compile']);
});
gulp.task('jade:compile', function(event) {
  return gulp.src(sources.jade)
    .pipe(jade())
    .pipe(gulp.dest(destinations.dev));
});
gulp.task('jade:watch', function(event) {
  watch({glob: sources.jade}, ['jade:compile']);
});
gulp.task('dev', ['serve', 'less:watch', 'jade:watch']);
gulp.task('default', ['dev']);
