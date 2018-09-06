import gulp from 'gulp';
import babel from 'gulp-babel';
import bs from 'browser-sync';
import runSequence from 'run-sequence';
import uglify from 'gulp-uglify';
import less from 'gulp-less';
import cached from 'gulp-cached';
import progeny from 'gulp-progeny';
import debug from 'gulp-debug';
import plumber from 'gulp-plumber';
import postcss from 'gulp-postcss';
import LessPluginCleanCSS from 'less-plugin-clean-css';
import LessPluginAutoPrefix from 'less-plugin-autoprefix';
import px2rem from 'postcss-px2rem';
import cssnano from 'cssnano';
import imageMin from 'gulp-imagemin';
import changed from 'gulp-changed';
import gulpif from 'gulp-if';
// const eslint = require('gulp-eslint');

const BUILD = {};
BUILD.DEST = './dest/';
BUILD.SRC = {};
BUILD.SRC.ROOT = './src';
BUILD.SRC.CSS = [`${BUILD.SRC.ROOT}/**/*.less`];
BUILD.SRC.JS = [`${BUILD.SRC.ROOT}/**/*.js`];
BUILD.SRC.IMAGE = [`${BUILD.SRC.ROOT}/**/images/*`];
BUILD.SRC.WATCH = [...BUILD.SRC.CSS, ...BUILD.SRC.JS, ...BUILD.SRC.IMAGE];

function isProduction() {
  return process.env.NODE_ENV === 'production';
}

gulp.task('jsTask', () => {
  const confTaskName = 'js';
  gulp.src(BUILD.SRC.JS)
    .pipe(gulpif(!isProduction(), changed(BUILD.DEST)))
    .pipe(debug({ title: `🚌 ...  ${confTaskName}:` }))
    .pipe(babel())
    .pipe(gulpif(isProduction(), uglify()))
    .pipe(gulp.dest(BUILD.DEST));
});

gulp.task('lessTask', () => {
  const cleancss = new LessPluginCleanCSS({
	  advanced: true,
  });
  const autoprefix = new LessPluginAutoPrefix({
	  browsers: ['last 5 versions'],
	  cascade: true,
  });
  const confTaskName = 'less';
  gulp.src(BUILD.SRC.CSS)
    .pipe(plumber())
    .pipe(cached(confTaskName))
    .pipe(progeny())
    .pipe(debug({ title: `🚌 ...  ${confTaskName}:` }))
    .pipe(less({ plugins: [autoprefix, cleancss] }))
    .pipe(postcss([px2rem({ remUnit: 75 })]))
    .pipe(postcss([cssnano({ preset: 'default' })]))
    .pipe(gulp.dest(BUILD.DEST));
});

gulp.task('imageTask', () => {
  gulp.src(BUILD.SRC.IMAGE)
    .pipe(gulpif(!isProduction(), changed(BUILD.DEST)))
    .pipe(imageMin({ progressive: true }))
    .pipe(gulp.dest(BUILD.DEST));
});

const devTasks = ['jsTask', 'lessTask', 'imageTask'];

gulp.task('dev', devTasks, () => {
  const { reload } = bs;
  bs({
    files: BUILD.SRC.WATCH,
    server: {
      baseDir: './',
      directory: true,
    },
  });
  gulp.watch(BUILD.SRC.WATCH).on('change', () => {
    runSequence('jsTask', 'lessTask', 'imageTask', reload);
  });
});

gulp.task('default', devTasks);

