#!/usr/bin/env node

'use strict';

const playing = require('./lib/playingWithChalk');
const program = require('commander');

//https://www.npmjs.com/package/commander
//https://github.com/tj/commander.js/tree/master/examples

// program
//     .version("0.0.1")
//     .command("install [name]", "do install stuff")
//     .action(function (name, theName) {
//         console.log("No actions");
//         console.log(name);
//         console.log(theName);
//         return true;
//     })
//     .parse(process.argv);

program
    .version('0.0.1')
    .command('rmdir <dir> [otherDirs...]')
    .action(function (dir, otherDirs) {
        console.log('rmdir %s', dir);
        if (otherDirs) {
            otherDirs.forEach(function (oDir) {
                console.log('rmdir %s', oDir);
            });
        }
    });

program
    .command("mkdir <dir> [otherDirs...]")
    .action(function (dir, otherDirs) {
        console.log('make!!!!!!!! %s', dir);
        if (otherDirs) {
            otherDirs.forEach(function (oDir) {
                console.log('rmdir %s', oDir);
            });
        }
    });

program
    .command("install")
    .action(function () {
        console.log('Will this do the install');
    });

program.parse(process.argv);

var NO_COMMAND_SPECIFIED = program.args.length === 0;

// Handle it however you like
if (NO_COMMAND_SPECIFIED) {
    console.log("This is a default action");
}