"use strict";

global.$ = {
    path: {
        task: require('./gulp/tasks.js')
    },

    projectPaths : {
      views: {
        src: [
            "./source/views/index.html",
            "./source/views/pages/*.html"
        ],
        dist: "./public/",
        watch: [
            "./source/blocks/**/*.html",
            "./source/views/**/*.html"
        ]
    },
        styles: {
            src: "./source/styles/",
            dist: "./public/css/",
            watch: [
                "./source/blocks/**/*.scss",
                "./source/styles/**/*.scss"
            ]
        },

        scripts: {
            src: "./source/scripts/main.js",
            dist: "./public/js/",
            watch: [
                "./source/blocks/**/*.js",
                "./source/scripts/**/*.js"
            ]
        },

         images: {
            src: [
                "./source/pictures/**/*.{jpg,jpeg,png,gif,tiff,svg}",
                "!./source/pictures/favicon/*.{jpg,jpeg,png,gif,tiff}"
            ],
            dist: "./public/img/",
            watch: "./source/pictures/**/*.{jpg,jpeg,png,gif,svg}"
        },

           sprites: {
            src: [
                "./source/pictures/svg/sprite/*.svg",
            ],

            dist: "./public/img/svg/sprite/",
            watch: [
                "./source/pictures/svg/sprite/*.svg",
            ]
        },

        svg: {
          src: [
              "./source/pictures/svg/*.svg",
          ],
          dist: "./public/img/svg/",
          watch: [
              "./source/pictures/svg/*.svg",
          ]
      },


            favicons: {
            src: "./source/pictures/favicons/*.{jpg,jpeg,png,gif,tiff}",
            dist: "./public/img/favicons/"
        },

         fonts: {
            src: "./source/fonts/*.{ttf,otf}",
            dist: "./public/fonts/",
            watch: "./source/fonts/**/*.{woff,woff2}"
        },
    },

    gulp: require('gulp'),
    browserSync: require('browser-sync').create(),
    del: require('del')
};

$.path.task.forEach(function (taskPath) {
    require(taskPath)();
});

$.gulp.task('dev', $.gulp.series(
    'clean',
    $.gulp.parallel(
        'html',
        'fonts',
        'woff',
        'styles',
        'images',
        'scripts',
        'sprites',
        'svg'
    )
));
$.gulp.task('default', $.gulp.series(
    'dev',
    $.gulp.parallel(
        'watch',
        'serve'
    )
));
