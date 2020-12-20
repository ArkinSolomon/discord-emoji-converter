/*
 * Basic tests used to... well test...
 */

//Import modules
const fs = require('fs');
const path = require('path');
const {emojis, getEmoji} = require(path.join(__dirname, 'index.js'));

//Get a few emojis manually
console.log(emojis['sparkling_heart']);
console.log(emojis['metal_tone5']);
console.log(emojis['smiling_imp']);
console.log(emojis['grin']);
console.log(emojis['laughing']);
console.log(emojis['satisfied']);

//Get a few emojis with functions
console.log(getEmoji('clap_tone2'));
