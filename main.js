#!/usr/bin/env node

console.log('Will you run this script?');

// print process.argv
process.argv.forEach(function (val, index, array) {
    console.log(index + ': ' + val);
  });