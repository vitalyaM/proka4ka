const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const cached = require('gulp-cached');
const dependents = require('gulp-dependents');
const cleanCSS = require('gulp-clean-css');
const gulpStylelint = require('gulp-stylelint');
const rename = require('gulp-rename');
const browserSync = require('browser-sync');
const paths = require('../assets/paths');

const plugins = [
  autoprefixer({
    overrideBrowserslist: ['last 10 version'],
  }),
];

const styleDev = () => {
  return gulp
    .src(paths.dev.scss)
    .pipe(plumber())
    .pipe(
      gulpStylelint({
        failAfterError: false,
        // auto fix bugs - default: false
        // fix: true,
        reporters: [
          {
            formatter: 'string',
            console: true,
          },
        ],
      })
    )
    .pipe(cached('scss'))
    .pipe(dependents())
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(sourcemaps.write({ includeContent: false }))
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(
      rename({
        suffix: '.min',
      })
    )
    .pipe(postcss(plugins))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.dist.css))
    .pipe(browserSync.stream());
};

const styleProd = () => {
  return gulp
    .src(paths.dev.scss)
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(postcss(plugins))
    .pipe(
      cleanCSS(
        {
          debug: true,
          compatibility: '*',
        },
        (details) => {
          console.log(
            `${details.name}: Original size:${details.stats.originalSize} - Minified size: ${details.stats.minifiedSize}`
          );
        }
      )
    )
    .pipe(
      rename({
        suffix: '.min',
      })
    )
    .pipe(gulp.dest(paths.dist.css));
};

module.exports = { styleDev, styleProd };
