#!/usr/bin/env node

// Grab all available arguements
const [,, ...args] = process.argv;

// Print text and all available arguements
console.log(`Hello World ${args}`);