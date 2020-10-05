// module.exports = function () {
//   $.gulp.task('fonts', () => {
//       return $.gulp.src('./source/fonts/**/*.*')
//           .pipe($.gulp.dest('./public/fonts/'));
//   });
// };





let fontfacegen = require('fontfacegen');
let map = require('map-stream');


module.exports = function () {
  $.gulp.task('fonts', () => {

    return $.gulp.src("./source/fonts/*.{ttf,otf}")
    .pipe(map(function(file, cb) {
      fontfacegen({
        source: file.path,
        dest: './public/fonts/',
        collate: true

      });
      cb(null, file);
    }));


  });
};


