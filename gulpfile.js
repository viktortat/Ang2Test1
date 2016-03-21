//https://github.com/viktortat/ng2_play
//npm i --save-dev gulp gulp-sourcemaps gulp-typescript gulp-tslint browser-sync superstatic del fs

var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    tsc = require('gulp-typescript'),
    tslint = require('gulp-tslint'),
    //browserSync = require('browser-sync'),
    connect = require('gulp-connect'),
    superstatic = require('superstatic'),
    del = require('del'),
    fs = require("fs");

//const reload = browserSync.reload;

var tsProject = tsc.createProject('tsconfig.json');
var config = require('./gulp.config')();


const paths = {
    dist: 'built',
    distFiles: 'built/**/*',
    bower: "./bower_lib",
    nodemod: "./node_modules",
    srcFiles: 'app/**/*',
    srcTsFiles: 'app/**/*.ts',
    allTs: './app/**/*.ts',
    tsOutputPath: './built/app'
}

// clean the contents of the distribution directory
gulp.task('clean', function () {
    return del(paths.distFiles);
});

// copy dependencies
gulp.task('copy:libs-js', ['clean'], function() {
    return gulp.src([
            paths.bower + '/bootstrap/dist/js/bootstrap.min.js',
            paths.bower + '/jquery/dist/jquery.min.js',
            paths.nodemod + '/angular2/bundles/angular2-polyfills.js',
            paths.nodemod + '/systemjs/dist/system.src.js',
            paths.nodemod + '/rxjs/bundles/Rx.js',
            paths.nodemod + '/angular2/bundles/angular2.dev.js'
        ])
        .pipe(gulp.dest(paths.dist+'/lib'))
});
gulp.task('copy:libs',['copy:libs-js'], function() {
    return gulp.src([
            paths.bower + '/bootstrap/dist/css/bootstrap.min.css',
            paths.bower + '/bootstrap/dist/css/bootstrap-theme.min.css',
            paths.bower + '/normalize-css/normalize.css'
        ])
        .pipe(gulp.dest(paths.dist + '/libCss'))
});

gulp.task('ts-lint', function() {
    return gulp.src(paths.allTs)
        .pipe(tslint())
        .pipe(tslint.report('prose', {
            emitError: false
        }));
})


gulp.task('compile-ts', function() {
    var tsResult = gulp
        .src(paths.allTs)
        .pipe(sourcemaps.init())
        .pipe(tsc(tsProject));

    return tsResult.js
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.tsOutputPath))
//        .pipe(reload({stream:true}));

/*    var tsResult = gulp
        .src(sourceTsFiles)
        .pipe(sourcemaps.init())
        .pipe(tsc({
            module: "amd",
            target: "ES5",
            declarationFiles: false,
            emitError: false,
            emitDecoratorMetadata: true,
            outDir : config.tsOutputPath
        }));

    return tsResult.js
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.tsOutputPath))
        .pipe(reload({stream:true}));*/
});









//eval("var project = " + fs.readFileSync("./project.json"));

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





/*
gulp.task('serve', ['ts-lint', 'compile-ts'], function() {

    gulp.watch([paths.allTs], ['ts-lint', 'compile-ts']);

    browserSync({
        port: 3000,
        files: ['index.html', '**!/!*.js'],
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
*/


gulp.task('server',function(){
    connect.server({
        basename:[__dirname],
        port:3000,
        livereload:true
    });
});

gulp.task('reload',function(){
    gulp.src('./!*.html')
        .pipe(connect.reload());
});

gulp.task('default', ['server'],function(){
    gulp.watch([paths.allTs], ['ts-lint', 'compile-ts']);
    gulp.watch(['./app/!*.map'],['reload']);
});

