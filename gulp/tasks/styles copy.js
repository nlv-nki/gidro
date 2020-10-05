let plumber = require('gulp-plumber'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    csso = require('gulp-csso'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require('gulp-rename'),
    postcss = require("gulp-postcss"),
    gcmq = require('gulp-group-css-media-queries'),
    cleanCSS = require('gulp-clean-css');



    stylesPATH = {
        "input": "./source/styles/",
        "ouput": "./public/css/"
    };

module.exports = function () {
  $.gulp.task('styles', () => {
      return $.gulp.src(stylesPATH.input + '*.{sass,scss}')
          .pipe(plumber())
          .pipe(sourcemaps.init())
          .pipe(sass())
          .pipe(postcss([
            autoprefixer()
          ]))
          .pipe(autoprefixer())
     //     .pipe(gcmq())
      //    .on('end', $.browserSync.reload)
          .pipe(csso())
          .pipe(rename({suffix: '.min'}))
          .pipe(plumber.stop())
          .pipe(sourcemaps.write("./maps/"))
          .pipe($.gulp.dest(stylesPATH.ouput))
          .pipe($.browserSync.stream());

});
};
