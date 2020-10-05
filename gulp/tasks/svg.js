let svgmin = require('gulp-svgmin'),
    cheerio = require('gulp-cheerio'),
    replace = require('gulp-replace'),
    browsersync = require('browser-sync'),
    debug = require('gulp-debug');

    module.exports = function () {
      $.gulp.task('svg', () => {
          return $.gulp.src($.projectPaths.svg.src)
              .pipe(svgmin({
                  js2svg: {
                      pretty: true
                  }
              }))
              .pipe(cheerio({
                  run: function ($) {
                    //  $('[fill]').removeAttr('fill');
                    //  $('[stroke]').removeAttr('stroke');
                    //  $('[style]').removeAttr('style');
                  },
                  parserOptions: {xmlMode: true}
              }))
              .pipe(replace('&gt;', '>'))

              .pipe($.gulp.dest($.projectPaths.svg.dist))
              .pipe(debug({
                "title": "svg single"
            }))
              .on("end", browsersync.reload);
      });
  };
