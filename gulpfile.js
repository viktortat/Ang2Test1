//https://github.com/viktortat/ng2_play

var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var tsc = require('gulp-typescript');

<<<<<<< HEAD
var tslint = require('gulp-tslint');
=======
//    tslint = require('gulp-tslint');
>>>>>>> origin/master

var tsProject = tsc.createProject('tsconfig.json');
var config = require('./gulp.config')();

var browserSync = require('browser-sync');
var superstatic = require('superstatic');

<<<<<<< HEAD

=======
/*
>>>>>>> origin/master
gulp.task('ts-lint', function() {
    return gulp.src(config.allTs)
        .pipe(tslint())
        .pipe(tslint.report('prose', {
            emitError: false
        }));
})
<<<<<<< HEAD

=======
*/
>>>>>>> origin/master

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

<<<<<<< HEAD
gulp.task('serve', ['compile-ts'], function() {

    gulp.watch([config.allTs], [ 'compile-ts']);

    browserSync({
        port: 3006,
=======
gulp.task('serve', ['ts-lint', 'compile-ts'], function() {

    gulp.watch([config.allTs], ['ts-lint', 'compile-ts']);

    browserSync({
        port: 3000,
>>>>>>> origin/master
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