var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
      livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['*.html', './slides/*.md'], function() {
    gulp.src(['*.html', './slides/*.md']).pipe(connect.reload());
  });
});

gulp.task('default', ['connect', 'watch']);
