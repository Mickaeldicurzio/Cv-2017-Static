/**
 * Configuration for assets-builder, based on gulp-task-maker
 * Guide: https://github.com/fvsch/gulp-task-maker/blob/master/doc/configuring-tasks.md
 */

const gtm = require("gulp-task-maker");

gtm.load("gulp-scripts", {
  sass: {
    src: ["src/css/*.css", "src/sass/*.scss"],
    watch: "src/**/*.{css,scss}",
    dest: "dist/sass.css"
  },

  minjs: {
    src: ["node_modules/jquery/dist/jquery.min.js", "src/js/*.js"],
    dest: "test/dist/minjs.js",
    watch: "test/src/js/*.js"
  }
});
