#!/usr/bin/env node

'use strict';

const playing = require('./lib/playingWithClass');

function printArgs() {
    // print process.argv
    process.argv.forEach(function (val, index, array) {
        console.log(index + ': ' + val);
    });
}

console.log('Will you run this script?');

playing.tagYourIt();

