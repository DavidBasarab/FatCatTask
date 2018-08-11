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

        const miles = 18;
        const calculateFeet = miles => miles * 5280;

        console.log(chalk `
                    There are {bold 5280 feet} in a mile.
                    In {bold ${miles} miles}, there are {green.bold ${calculateFeet(miles)} feet}.
                    `);
    }
}

module.exports = new Playing();