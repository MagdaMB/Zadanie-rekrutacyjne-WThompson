const gulp = require('gulp');
const concat = require("gulp-concat");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer  = require("gulp-autoprefixer");

gulp.task('js', function () {
    return gulp.src('js/*.js')
        .pipe(concat('script.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task("style", function () {
    return gulp.src('style/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(
            sass({
                outputStyle: "compressed"
            }).on("error", sass.logError)
        )
        .pipe(autoprefixer())
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("dist/css"));
});