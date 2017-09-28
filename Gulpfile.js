'use strict';

const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

function getTask(task) {
  return require('./gulp-tasks/' + task)(gulp, plugins);
}

gulp.task('db-update', getTask('db-update'));
