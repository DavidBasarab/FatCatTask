'use strict';

const chalk = require('chalk');
const log = console.log;
const warning = chalk.keyword('green');
const error = chalk.bold.green;

class Playing {
    tagYourIt() {
        log(chalk.magenta("Tag your it"));
        log(error("YOU DUDE"));
        log(warning("YOU DUDE"));
    }
}

module.exports = new Playing();