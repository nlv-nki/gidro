let svgSprite = require('gulp-svg-sprite'),
    debug = require('gulp-debug'),
    replace = require('gulp-replace'),
    cheerio = require('gulp-cheerio');
module.exports = function () {
  $.gulp.task('sprites', () => {
        return $.gulp.src($.projectPaths.sprites.src)
        .pipe(cheerio({
          run: function ($) {
              $('[fill]').removeAttr('fill');
              $('[stroke]').removeAttr('stroke');
             $('[style]').removeAttr('style');
          },
          parserOptions: {xmlMode: true}
      }))
        .pipe(svgSprite({
          shape: {
            dest: "intermediate-svg"
          },
          mode: {
              stack: {
                  sprite: "../sprite.svg"
              }
          }
      }))
      .pipe(replace('&gt;', '>'))
      .pipe($.gulp.dest($.projectPaths.sprites.dist))
      console.log($.projectPaths.sprites.dist)
      .pipe(debug({
          "title": "Sprites"
      }))
      .on("end", $.browserSync.reload);
    });
};
