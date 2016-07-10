"use strict";

const gulp = require("gulp");
const gutil = require("gulp-util");
const rollup = require("rollup-stream");
const source = require("vinyl-source-stream");
const babel = require("rollup-plugin-babel");

var isWatching = false;

// Compile js/app.js to /dist/app.js
gulp.task("default", () => {
  let stream = rollup({
    entry: "js/src/app.js",
    format: "cjs",
    plugins: [
      babel({
        presets: ["es2015-rollup"]
      })
    ]
  })
  stream.on('error', e => {
      console.error(`${e.stack}`)
      stream.emit('end')
  })
  .pipe(source("app.js"))
  .pipe(gulp.dest("dist"))
});

gulp.task("watch", () => gulp.watch(["js/src/", "js/src/**/*.js"], ['default']));

<% if (srcType === 'ts') { %>
var ts = require("gulp-typescript");
var tsProject = ts.createProject("ts/tsconfig.json");

gulp.task("ts", function () {
    return tsProject.src()
      .pipe(ts(tsProject))
      .js.pipe(gulp.dest("js/src"));
});

gulp.task("watch-ts", () => gulp.watch(["ts/src", "ts/src/**/*.ts"], ['ts']));
<% } %>
