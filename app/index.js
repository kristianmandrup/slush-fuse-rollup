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
            var srcType = answers.srcType;
            answers.e = {};
            answers.appNameSlug = _.slugify(answers.appName);
            answers.className = _.camelize(answers.appNameSlug);

            gulp.src(__dirname + '/templates/**')
                .pipe(template(answers))
                .pipe(rename(function (file) {
                    console.log('file', file);
                    if (file.basename[0] === '_') {
                        file.basename = '.' + file.basename.slice(1);
                    }

                    if (file.basename.match(/App/) ) {
                        file.basename = answers.appNameSlug;
                    }

                    if (file.extname === '.ux') {
                        file.basename = _.classify(file.basename);
                    }
                }))
                .pipe(conflict('./'))
                .pipe(gulp.dest('./'))
                .pipe(install())
                .on('end', function () {
                    done();
                });

            var dir = __dirname + '/' + srcType + '/**';
            gulp.src(dir)
                .pipe(template(answers))
                .pipe(conflict('./' + srcType))
                .pipe(gulp.dest('./' + srcType))
                .pipe(install())
                .on('end', function () {
                    done();
                });
        });
});
