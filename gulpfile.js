'use strict';

var gulp         = require('gulp'),
    sourcemaps   = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    sass         = require('gulp-sass'),
    concat       = require('gulp-concat'),
    jshint       = require('gulp-jshint'),
    imagemin     = require('gulp-imagemin'),
    flatten      = require('gulp-flatten'),
    filter       = require('gulp-filter'),
    watch        = require('gulp-watch'),
    batch        = require('gulp-batch');


gulp.task('stylesheets', function(){
  return gulp.src('lib/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}))
        .on('error', function handleError(err) {
          console.error(err.toString());
          this.emit('end');
        })
        .pipe(autoprefixer())
        .pipe(concat('application.min.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('public/stylesheets'));
});

gulp.task('scripts', function () {
  return gulp.src(['lib/**/*.js', 'app.js', 'config.js', 'middlewares.js', 'modules.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('images', function () {
  return gulp.src('lib/*/images/**/*')
        .pipe(imagemin({
          optimizationLevel: 3,
          progressive: true,
          interlaced: true
        }))
        .pipe(gulp.dest('public/images'));
});

// gulp.task('fonts', function () {
//   return gulp.src($.mainBowerFiles())
//         .pipe(filter('**/*.{eot,svg,ttf,woff}'))
//         .pipe(flatten())
//         .pipe(gulp.dest('public/fonts'));
// });

gulp.task('build', ['stylesheets', 'scripts', 'images']);

gulp.task('default', function() {
  watch('lib/**/*.scss', batch(function(events, done){
    gulp.start('stylesheets', done);
  }));

  watch(['lib/**/*.js', 'app.js', 'config.js', 'middlewares.js', 'modules.js'], batch(function(events, done){
    gulp.start('scripts', done);
  }));

  watch('lib/*/images/**/*', batch(function(events, done){
    gulp.start('images', done);
  }));
});
