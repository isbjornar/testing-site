const gulp = require("gulp"),
  watch = require("gulp-watch");

gulp.task("default", () => {
  console.log("I am a gulp task!");
});

gulp.task("html", () => {
  console.log("this does something to html");
});

gulp.task("styles", () => {
  console.log("this does something to css");
});

gulp.task("watch", () => {
  watch("./app/index.html", () => {
    gulp.start("html");
  });

  watch("./app/assets/styles/**/*.css", () => {
    gulp.start("styles");
  });
});
