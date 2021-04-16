/* eslint-disable */
const gulp = require('gulp');
const { series, parallel } = gulp;

// modules
const pugHtml = require('./gulp/modules/html/pugHtml');
const { styleDev, styleProd } = require('./gulp/modules/styles/sass');
const clean = require('./gulp/modules/common/clean');
const { serve } = require('./gulp/modules/common/serve');
const { scriptDev, scriptProd } = require('./gulp/modules/js/scripts');
const {
  copyImages,
  webp,
  imagesMinJpeg,
  imagesMinSvg,
  imagesMinPng,
} = require('./gulp/modules/images/images');
const copyFiles = require('./gulp/modules/assets/files');
const deploy = require('./gulp/modules/common/deploy-ftp');

// images task
const imagesDev = series(copyImages, webp);
const imagesProd = series(series(imagesMinJpeg, imagesMinPng, imagesMinSvg), webp);

// build task
const build = series(
  clean,
  copyFiles,
  parallel(pugHtml, styleProd, scriptProd),
  imagesProd
);

// tasks
exports.styles = parallel(styleProd, pugHtml);
exports.images = imagesProd;
exports.scripts = scriptProd;
exports.files = copyFiles;

exports.dev = series(clean, pugHtml, styleDev, scriptDev, imagesDev, copyFiles, serve);
exports.deploy = series(build, deploy);
exports.build = build;
