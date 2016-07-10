var gulp = require('gulp'),
    install = require('gulp-install'),
    conflict = require('gulp-conflict'),
    template = require('gulp-template'),
    rename = require('gulp-rename'),
    _ = require('underscore.string'),
    inquirer = require('inquirer');

var prompts = require('./prompts');

gulp.task('default', function (done) {

    //Ask
    inquirer.prompt(prompts,
        function (answers) {
            if (!answers.moveon) {
                return done();
            }
            answers.e = {};
            answers.appNameSlug = _.slugify(answers.appName);
            gulp.src(__dirname + '/templates/**')
                .pipe(template(answers))
                .pipe(rename(function (file) {
                    if (file.basename[0] === '_') {
                        file.basename = '.' + file.basename.slice(1);
                    }
                }))
                .pipe(conflict('./'))
                .pipe(gulp.dest('./'))
                .pipe(install())
                .on('end', function () {
                    done();
                });

            var ts = answers.useTs ? 'ts-' : '';
            var dest = ts + 'src';
            var dir = __dirname + '/source/' + dest + '/**';
            gulp.src(dir)
                .pipe(template(answers))
                .pipe(conflict('./' + dest))
                .pipe(gulp.dest('./' + dest))
                .pipe(install())
                .on('end', function () {
                    done();
                });
        });
});
