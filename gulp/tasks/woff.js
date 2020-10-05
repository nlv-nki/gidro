module.exports = function () {
  $.gulp.task('woff', () => {
      return $.gulp.src('./source/fonts/**/*.{woff,woff2}')
          .pipe($.gulp.dest('./public/fonts/'));
  });
};

