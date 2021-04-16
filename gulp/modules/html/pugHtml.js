const gulp = require('gulp');
const paths = require('../assets/paths');

const plumber = require('gulp-plumber');
const pugLinter = require('gulp-pug-linter');
const pug = require('gulp-pug');
const htmlhint = require('gulp-htmlhint');
const pugLintStylish = require('puglint-stylish');

const pugHtml = (cb) => {
  return gulp
    .src(paths.dev.pug)
    .pipe(plumber())
    .pipe(pugLinter({ reporter: pugLintStylish }))
    .pipe(
      pug({
        pretty: true,
      })
    )
    .pipe(htmlhint())
    .pipe(htmlhint.reporter())
    .pipe(gulp.dest(paths.dist.html));
};

module.exports = pugHtml;
