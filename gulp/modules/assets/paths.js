const { distPath, srcPath } = {
  distPath: 'dist/',
  srcPath: 'src/'
};

module.exports = {
  distPath,
  srcPath,
  clean: distPath,
  deployFiles: distPath + '**/*',
  images: {
    src: srcPath + 'img/**/*.{jpg,png,svg}',
    dist: distPath + 'img',
    svg: srcPath + 'img/**/*.svg',
    png: srcPath + 'img/**/*.png',
    jpeg: srcPath + 'img/**/*.{jpg,jpeg}',
    webp: distPath + 'img',
  },
  dist: {
    html: distPath,
    css: distPath + 'css',
    js: distPath + 'js',
    images: distPath + 'img',
    assets: distPath + 'assets',
  },
  dev: {
    pug: srcPath + 'pug/*.pug',
    scss: srcPath + 'scss/**/*.scss',
    js: srcPath + 'js/*.js',
    images: srcPath + 'img/**/*',
    assets: srcPath + 'assets/**/*',
    ignores: [srcPath + 'img/**/*.{svg,ico}'],
  },
  watch: {
    pug: srcPath + 'pug/**/*.pug',
    scss: srcPath + 'scss/**/*.scss',
    js: srcPath + 'js/**/*.js',
    fonts: srcPath + 'fonts/**/*.{eot,ttf,woff,woff2,svg}',
    images: srcPath + 'img/**/*.{jpg,png,svg}',
    assets: srcPath + 'assets/**/*',
  },
};
