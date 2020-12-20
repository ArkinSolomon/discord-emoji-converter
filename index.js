/*
 * Main file, contains all exports.
 */

//Require modules
const fs = require('fs');
const path = require('path');

//Load emojis into memory
const emojis = JSON.parse(fs.readFileSync(path.join(__dirname, 'emojis.json'), 'utf8'));
module.exports = emojis;
