var
    path = require('path');


function format(string) {
    var username = string.toLowerCase();
    return username.replace(/\s/g, '');
}

var defaults = (function () {
    var workingDirName = path.basename(process.cwd()),
      homeDir, osUserName, configFile, user;

    if (process.platform === 'win32') {
        homeDir = process.env.USERPROFILE;
        osUserName = process.env.USERNAME || path.basename(homeDir).toLowerCase();
    }
    else {
        homeDir = process.env.HOME || process.env.HOMEPATH;
        osUserName = homeDir && homeDir.split('/').pop() || 'root';
    }

    configFile = path.join(homeDir, '.gitconfig');
    user = {};

    if (require('fs').existsSync(configFile)) {
        user = require('iniparser').parseSync(configFile).user;
    }

    return {
        appName: workingDirName,
        userName: osUserName || format(user.name || ''),
        authorName: user.name || '',
        authorEmail: user.email || ''
    };
})();

module.exports = [{
    name: 'appName',
    message: 'What is the name of your app?',
    default: defaults.appName
}, {
    name: 'appDescription',
    message: 'What is the description?'
}, {
    name: 'appVersion',
    message: 'What is the version of your app?',
    default: '0.1.0'
}, {
    name: 'authorName',
    message: 'What is the author name?',
    default: defaults.authorName
}, {
    name: 'authorEmail',
    message: 'What is the author email?',
    default: defaults.authorEmail
}, {
    name: 'userName',
    message: 'What is the github username?',
    default: defaults.userName
}, {
    name: 'srcType',
    type: 'list',
    message: 'Which language will you use?',
    default: 'js',
    choices: ['js', 'ts', 'cljs']
}, {
    type: 'confirm',
    name: 'moveon',
    message: 'Continue?'
}];
