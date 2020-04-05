const gulp = require("gulp");
const sass = require("gulp-sass");
const exec = require("child_process").exec;


/** JS COMPLIATION **/

/* runs `npm run build` script (webpack build) */
gulp.task("build:js", function(cb) {
  exec("npm run build", function(err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

/* watch js directories for changes */
gulp.task("watch:js", function() {
  gulp.watch(
    [
      "app/src/**/*",
      "!app/src/scss/**/*"
  ],
  gulp.series("build:js"));
});

/** SASS COMPILATION **/

/* compiles all sass files into main.css */
gulp.task("build:sass", function(cb) {
  gulp
    .src("./app/src/assets/scss/**/*.scss")
    .pipe(sass(/*{ outputStyle: 'compressed' }*/).on("error", sass.logError))
    .pipe(gulp.dest("./app/public/css"));
  cb();
});

/* watch scss directory for changes */
gulp.task("watch:sass", function(cb) {
  gulp.watch("./app/src/assets/scss/**/*",
  gulp.series("build:sass"));
  cb();
});
