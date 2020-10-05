var concat = require('gulp-concat');
var gulp = require('gulp');


module.exports = function () {
  gulp.task('scss', function() {
    return gulp.src([
                     'source/styles/utils/**/*.scss',
                      'source/styles/vendor/**/*.scss',
                      'source/blocks/**/*.scss',
                      '!source/blocks/**/modules.scss',
                      '!source/blocks/**/components.scss',
                      '!source/styles/vendor/_libs.scss',
                      '!source/styles/utils/_mixins.scss',
                      '!source/styles/styles.scss' ])

      .pipe(concat('style.scss'))
      .pipe(gulp.dest('source/styles'));
  });
};
