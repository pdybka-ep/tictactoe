var gulp   = require('gulp');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass   = require('gulp-sass');
var bump   = require('gulp-bump');
var git    = require('gulp-git');

gulp.task('styles', function () {
  gulp.src('./scss/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest('./css'));
});

gulp.task('scripts', function () {
  gulp.src('./js')
    .pipe(concat('postman.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./js'));
});

gulp.task('default', ['styles', 'scripts']);


gulp.task('bump', function () {
  return gulp.src('./bower.json')
    .pipe(bump())
    .pipe(gulp.dest('./'));
});

// experimenting...
// gulp.task('add', ['bump'], function () {
//   return gulp.src('./*')
//     .pipe(git.add());
// });

// gulp.task('commit', ['bump', 'add'], function () {
//   return gulp.src('./*')
//     .pipe(git.commit('Bump version.'));
// });

// gulp.task('tag', ['bump', 'add', 'commit'], function (done) {
//   git.tag('v1.0.3', 'v1.0.3', {}. done);
// });

// gulp.task('push', ['bump', 'add', 'commit', 'tag'], function () {
//   git.push('origin', 'master', { args: ' --tags' });
// });
