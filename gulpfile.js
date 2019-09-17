const gulp = require("gulp");
const sass = require("gulp-sass");

sass.compiler = require("node-sass");

gulp.task("scss", () => {
  return gulp
    .src("./src/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("dist"));
});

gulp.task("start", () => {
  gulp.watch("./src/**/*.scss").on("change", gulp.series("scss"));
});

gulp.task("build", gulp.series("scss"));
