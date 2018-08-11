#!/usr/bin/env node
 //https://github.com/chalk/chalk
'use strict';

const playing = require('./lib/playingWithChalk');
const program = require('commander');

program
    .version('0.1.0')
    .option('-p, --peppers', 'Add peppers')
    .option('-P, --pineapple', 'Add pineapple')
    .option('-b, --bbq-sauce', 'Add bbq sauce')
    .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
    .parse(process.argv);

function printArgs() {
    // print process.argv
    process.argv.forEach(function (val, index, array) {
        console.log(index + ': ' + val);
    });
}

console.log('you ordered a pizza with:');

if (program.peppers) console.log('  - peppers');
if (program.pineapple) console.log('  - pineapple');
if (program.bbqSauce) console.log('  - bbq');

console.log('  - %s cheese', program.cheese);

//console.log('Will you run this script?');

//playing.tagYourIt();