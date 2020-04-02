const gulp = require("gulp");
const sass = require("gulp-sass");
const exec = require("child_process").exec;


/** WEBPACK BUILD **/

/* runs `npm run build` script */
gulp.task("webpack:build", function(cb) {
  exec("npm run build", function(err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});


/**  WATCH **/

/* watches all assets for changes and runs sub-tasks */
gulp.task("watch", function() {
  gulp.watch(
    [
      "app/**/*",
      "!app/public/js/*"
  ],
  gulp.series("webpack:build"));
});
