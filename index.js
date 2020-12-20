/*
 * Main file, contains all exports.
 */

//Require modules
const fs = require('fs');
const path = require('path');

//Load emojis into memory
const emojis = JSON.parse(fs.readFileSync(path.join(__dirname, 'emojis.json'), 'utf8'));
module.exports.emojis = emojis;

//Get an emoji character from a shortcode
module.exports.getEmoji = shortcode => {
  shortcode = shortcode.trim().toLowerCase();

  //Remove colons if there are any
  shortcode = shortcode.replace(/:/g, '');

  //Check if the emoji character exists
  var emoji = emojis[shortcode];
  if (typeof emoji === 'undefined'){
    throw new Error('Emoji doesn\'t exist');
  }

  //Return it if it does exist
  return emoji;
};
