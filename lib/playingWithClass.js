'use strict';

const chalk = require('chalk');

class Playing {
    tagYourIt() {
        console.log(chalk.magenta("Tag your it"));
    }
}

module.exports = new Playing();