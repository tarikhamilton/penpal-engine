var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat')

gulp.task('sass', function() {
    gulp.src('stylesheets/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('.'))
})

gulp.task('js', function() {
    gulp.src('src/**/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('.'))
})

gulp.task('default', function() {
    gulp.watch(['stylesheets/**/*.scss', 'src/**/*.js'], ['sass', 'js'])
})