//Require modules
const fs = require('fs');
const path = require('path');

//Load JSON data files into memory
const emojis = JSON.parse(fs.readFileSync(path.join(__dirname, 'emojis.json')));
module.exports.emojis = emojis;
