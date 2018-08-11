#!/usr/bin/env node
//https://github.com/chalk/chalk
'use strict';

const playing = require('./lib/playingWithChalk');

function printArgs() {
    // print process.argv
    process.argv.forEach(function (val, index, array) {
        console.log(index + ': ' + val);
    });
}

console.log('Will you run this script?');

playing.tagYourIt();

