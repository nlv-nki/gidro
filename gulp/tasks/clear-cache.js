var  cache = require('gulp-cache')
module.exports = function () {
  $.gulp.task('clear-cache', done => {
    cache.clearAll()
    done();
  });
};

