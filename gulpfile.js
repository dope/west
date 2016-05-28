var gulp   = require('gulp');
var sass   = require('gulp-sass');
var uglify = require('gulp-uglify');
var prefix = require('gulp-autoprefixer');
var rename = require('gulp-rename');

gulp.task('sass', function() {
    gulp.src('src/west.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(prefix('last 2 versions', '> 1%', 'ie 8', 'Android 2', 'Firefox ESR'))
    .pipe(gulp.dest('src/dist'))
    gulp.src('src/west.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest('src/dist'))
});

gulp.task('scripts', function() {
    gulp.src('src/west.js')
    .pipe(uglify())
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest('src/dist'))
});

/* Build Assets */
gulp.task('default', ['sass', 'scripts']);


/* Watch Assets */
gulp.task('watch', ['sass'], function () {
    gulp.watch("src/*.scss", ['sass']);
    gulp.watch("src/*.js", ['scripts']);
});
