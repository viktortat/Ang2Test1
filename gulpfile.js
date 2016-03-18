//https://github.com/viktortat/ng2_play
//npm i --save-dev gulp gulp-sourcemaps gulp-typescript gulp-tslint browser-sync superstatic del fs

var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    tsc = require('gulp-typescript'),
    tslint = require('gulp-tslint'),
    browserSync = require('browser-sync'),
    superstatic = require('superstatic'),
    del = require('del'),
    fs = require("fs");

const reload = browserSync.reload;

//eval("var project = " + fs.readFileSync("./project.json"));
var tsProject = tsc.createProject('tsconfig.json');
var config = require('./gulp.config')();


const paths = {
    dist: 'built',
    distFiles: 'built/**/*',
    srcFiles: 'app/**/*',
    srcTsFiles: 'app/**/*.ts',
}

// clean the contents of the distribution directory
gulp.task('clean', function () {
    return del(paths.distFiles);
});

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

// copy dependencies
gulp.task('copy:libs-js', ['clean'], function() {
    return gulp.src([
            'bower_lib/bootstrap/dist/js/bootstrap.min.js',
            'bower_lib/jquery/dist/jquery.min.js',
            'node_modules/angular2/bundles/angular2-polyfills.js',
            'node_modules/systemjs/dist/system.src.js',
            'node_modules/rxjs/bundles/Rx.js',
            'node_modules/angular2/bundles/angular2.dev.js'
        ])
        .pipe(gulp.dest('built/lib'))
});
gulp.task('copy:libs',['copy:libs-js'], function() {
    return gulp.src([
            'bower_lib/bootstrap/dist/css/bootstrap.min.css',
            'bower_lib/bootstrap/dist/css/bootstrap-theme.min.css',
            'bower_lib/normalize-css/normalize.css'
        ])
        .pipe(gulp.dest('built/libCss'))
});


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