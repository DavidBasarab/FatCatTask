#!/usr/bin/env node
 
'use strict';

const playing = require('./lib/playingWithChalk');
const program = require('commander');

//https://www.npmjs.com/package/commander
//https://github.com/tj/commander.js/tree/master/examples

// program
//     .version('0.1.0')
//     .option('-p, --peppers', 'Add peppers')
//     .option('-P, --pineapple', 'Add pineapple')
//     .option('-b, --bbq-sauce', 'Add bbq sauce')
//     .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
//     .parse(process.argv);

function printArgs() {
    // print process.argv
    process.argv.forEach(function (val, index, array) {
        console.log(index + ': ' + val);
    });
}

// console.log('you ordered a pizza with:');

// if (program.peppers) console.log('  - peppers');
// if (program.pineapple) console.log('  - pineapple');
// if (program.bbqSauce) console.log('  - bbq');

// console.log('  - %s cheese', program.cheese);

//console.log('Will you run this script?');

//playing.tagYourIt();

function range(val) {
    return val.split('..').map(Number);
  }
   
  function list(val) {
    return val.split(',');
  }
   
  function collect(val, memo) {
    memo.push(val);
    return memo;
  }
   
  function increaseVerbosity(v, total) {
    return total + 1;
  }
   
  program
    .version('0.1.0')
    .usage('[options] <file ...>')
    .option('-i, --integer <n>', 'An integer argument', parseInt)
    .option('-f, --float <n>', 'A float argument', parseFloat)
    .option('-r, --range <a>..<b>', 'A range', range)
    .option('-l, --list <items>', 'A list', list)
    .option('-o, --optional [value]', 'An optional value')
    .option('-c, --collect [value]', 'A repeatable value', collect, [])
    .option('-v, --verbose', 'A value that can be increased', increaseVerbosity, 0)
    .parse(process.argv);
   
  console.log(' int: %j', program.integer);
  console.log(' float: %j', program.float);
  console.log(' optional: %j', program.optional);
  program.range = program.range || [];
  console.log(' range: %j..%j', program.range[0], program.range[1]);
  console.log(' list: %j', program.list);
  console.log(' collect: %j', program.collect);
  console.log(' verbosity: %j', program.verbose);
  console.log(' args: %j', program.args);