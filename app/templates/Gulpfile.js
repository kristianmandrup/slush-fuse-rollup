"use strict";

const gulp = require("gulp");
const gutil = require("gulp-util");
const rollup = require("rollup-stream");
const source = require("vinyl-source-stream");
const babel = require("rollup-plugin-babel");

var isWatching = false;

// Compile js/src/app.js to /dist/app.js
gulp.task("default", () => {
  let stream = rollup({
    entry: "./js/src/app.js",
    sourceMap: true,
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

  // point to the entry file.
  .pipe(source('app.js', './js/src'))

  // buffer the output. most gulp plugins, including gulp-sourcemaps, don't support streams.
  .pipe(buffer())

  // tell gulp-sourcemaps to load the inline sourcemap produced by rollup-stream.
  .pipe(sourcemaps.init({loadMaps: true}))

      // transform the code further here.

  // if you want to output with a different name from the input file, use gulp-rename here.
  //.pipe(rename('index.js'))

  // write the sourcemap alongside the output file.
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('./dist'))
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
