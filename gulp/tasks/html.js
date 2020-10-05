let rigger = require('gulp-rigger'),
    htmlPATH = {
        "input": "./source/pages/",
        "ouput": "./public/"
    };

module.exports = function () {
    $.gulp.task('html', () => {
        return $.gulp.src(htmlPATH.input + '*.html')
            .pipe(rigger())
            .pipe($.gulp.dest(htmlPATH.ouput))
            .pipe($.browserSync.reload({
                stream: true
            }))
    });
};
