var gulp = require('gulp'),
  plumber = require('gulp-plumber'),
  watch = require('gulp-watch'),
  connect = require('gulp-connect'),
  less = require('gulp-less'),
  sass = require('gulp-sass'),
  jade = require('gulp-jade'),
  autoprefix = require('gulp-autoprefixer'),
  minify = require('gulp-minify-css'),
  rename = require('gulp-rename'),
  concat = require('gulp-concat'),
  sources = {
    jade: 'src/jade/**/*.jade',
    less: 'src/less/**/*.less',
    license: 'src/text/**/*.txt'
  },
  env = 'out/',
  destinations = {
    dev: 'out/',
    overwatch: 'out/**/*.*',
    css: env + 'css/'
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
  return gulp.src([sources.license, sources.less])
    .pipe(concat('tips.less'))
    .pipe(less())
    .pipe(autoprefix([
      'last 3 versions',
      'Blackberry 10',
      'Android 3',
      'Android 4'
    ]))
    .pipe(gulp.dest(destinations.css))
    .pipe(minify())
    .pipe(rename({
      suffix: '.min'
    }))
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
gulp.task('dist', ['less:compile'], function(event) {
  return gulp.src('out/css/**/*.css')
    .pipe(gulp.dest('dist/'));
});
gulp.task('dev', ['serve', 'less:watch', 'jade:watch']);
gulp.task('default', ['dev']);
