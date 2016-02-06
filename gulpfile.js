var gulp = require('gulp'),
    sass = require('gulp-sass')

gulp.task('sass', function() {
    gulp.src('stylesheets/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('.'))
})

gulp.task('default', function() {
    gulp.watch('stylesheets/**/*.scss', ['sass'])
})