//https://github.com/viktortat/ng2_play
var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    tsc = require('gulp-typescript'),
    tslint = require('gulp-tslint'),
    fs = require("fs");

//eval("var project = " + fs.readFileSync("./project.json"));
var tsProject = tsc.createProject('tsconfig.json');
var config = require('./gulp.config')();

var browserSync = require('browser-sync');
var superstatic = require('superstatic');

/*
var paths = {
    bower: "./bower_lib/",
    nodemod: "./node_modules/",
    lib: "./" + project.webroot + "/built/"
};

gulp.task("clean", function (cb) {
    rimraf(paths.lib, cb);
});
*/

gulp.task('ts-lint', function() {
    return gulp.src(config.allTs)
        .pipe(tslint())
        .pipe(tslint.report('prose', {
            emitError: false
        }));
})

gulp.task('compile-ts', function() {
    var sourceTsFiles = [
        config.allTs
    ];

    var tsResult = gulp
        .src(sourceTsFiles)
        .pipe(sourcemaps.init())
        .pipe(tsc(tsProject));

    return tsResult.js
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.tsOutputPath));
});

gulp.task('serve', ['ts-lint', 'compile-ts'], function() {

    gulp.watch([config.allTs], ['ts-lint', 'compile-ts']);

    browserSync({
        port: 3000,
        files: ['index.html', '**/*.js'],
        injectChanges: true,
        logFileChanges: false,
        logLevel: 'silent',
        notify: true,
        reloadDelay: 0,
        server: {
            baseDir: ['./'],
            middleware: superstatic({ debug: false})
        }
    });
});

gulp.task('default', ['serve']);