let plumber = require('gulp-plumber'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    csso = require('gulp-csso'),
    csscomb = require('gulp-csscomb'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require('gulp-rename'),
    gcmq = require('gulp-group-css-media-queries'),
    viewPATH = {
        "input": "./source/views/",
        "ouput": "./public/"
    };

module.exports = function () {
    $.gulp.task('views', () => {
        return $.gulp.src(viewPATH.input + '*.{html,htm}')
            .pipe(plumber())
            .pipe(sourcemaps.init())
            .pipe(csscomb())
            .pipe(sass())
            .pipe(autoprefixer())
            .pipe(gcmq())
            .pipe(sourcemaps.write())
            .pipe($.gulp.dest(viewPATH.ouput))
            .on('end', $.browserSync.reload)
            .pipe(csso())
            .pipe(rename({suffix: '.min'}))
            .pipe($.gulp.dest(viewPATH.ouput));
    });
};
