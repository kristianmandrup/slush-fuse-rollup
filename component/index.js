var gulp = require('gulp'),
    install = require('gulp-install'),
    conflict = require('gulp-conflict'),
    template = require('gulp-template'),
    rename = require('gulp-rename'),
    ignore = require('gulp-ignore'),
    _ = require('underscore.string'),
    inquirer = require('inquirer'),
    path = require('path');

gulp.task('component', function (done) {
    var prompts = [{
        name: 'name',
        type: 'text',
        message: 'What is the name of your component?'
    }, {
        name: 'description',
        message: 'What is the description?'
    }, {
        name: 'viewModel',
        type: 'confirm',
        message: 'Does the component view have a model?',
        default: true
    }, {
        type: 'confirm',
        name: 'moveon',
        message: 'Continue?'
    }];

    //Ask
    inquirer.prompt(prompts,
        function (answers) {
            if (!answers.moveon) {
                return done();
            }
            answers.className = _.classify(answers.name);
            gulp.src(__dirname + '/templates/**')
                .pipe(template(answers))
                // .pipe(ignore.exclude(answers.viewModel))
                .pipe(rename(function (file) {
                    if (file.basename[0] === '_') {
                        file.basename = answers.className + file.basename.slice(1);
                    }
                }))
                .pipe(conflict('./'))
                .pipe(gulp.dest('./'))
                .pipe(install())
                .on('end', function () {
                    done();
                });
        });
});
