var gulp        = require('gulp'),
    name        = require('gulp-rename'),
    rework      = require('gulp-rework'),
    reworkNPM   = require('rework-npm'),
    reworkVars  = require('rework-vars'),
    includer    = require('gulp-htmlincluder'),
    classPrefix = require('rework-class-prefix'),
    media       = require('rework-custom-media'),
    size        = require('gulp-size'),
    md          = require('gulp-markdown'),
    pdf         = require('gulp-html-pdf'),
    sass        = require('gulp-sass'),
    gutil = require('gulp-util');

gulp.task('md', function() {
  return gulp.src('md/index.md')
    .pipe(md())
    .pipe(name('-markdown.html'))
    .pipe(gulp.dest('html'));
});

gulp.task('html', ['md', 'css'], function() {
  gulp.src('html/*.html')
    .pipe(includer())
    .pipe(gulp.dest('./'));
});

gulp.task('css', function() {
  return gulp.src('index.scss')
    .pipe(sass())
    .pipe(rework(reworkNPM(), media(), reworkVars()))
    .pipe(size({ gzip: true, showFiles: true }))
    .pipe(name('main.css'))
    .pipe(gulp.dest('css'));
});

gulp.task('pdf', ['md', 'css', 'html'], function() {
   return gulp.src('index.html')
  .pipe(pdf({
    "border": "0",
    "base": "file:///Users/harrisnp/resume-builder/"
  }))
  .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
  gulp.watch(['*.md', '*.scss'], function() {
    gulp.start('default');
  });
});

gulp.task('default', ['md', 'css', 'html', 'watch']);
