/*
 * Basic tests used to... well test...
 */

//Import modules
const fs = require('fs');
const path = require('path');
const {emojis, getEmoji, getShortcode} = require(path.join(__dirname, 'index.js'));

//Get a few emojis manually
console.log(emojis['sparkling_heart']);
console.log(emojis['metal_tone5']);
console.log(emojis['smiling_imp']);
console.log(emojis['grin']);
console.log(emojis['laughing']);
console.log(emojis['satisfied']);

//Get a few emojis with functions
console.log(getEmoji('clap_tone2'));
console.log(getEmoji(':popcorn:'));
console.log(getEmoji('rOFl'));
console.log(getEmoji('   :sob:  '));
console.log(getEmoji('pensive  '));

//Get some shortcodes with functions
console.log(getShortcode('😃'));
console.log(getShortcode('😭      '));
console.log(getShortcode('😭      ', false));
console.log(getShortcode('😠', false));
console.log(getShortcode('      😂  '));

//Emoji that don't exist
try{
  console.log(getEmoji('i_dont_exist'));
}catch(e){
  console.error(e);
}

//Short code that doesn't exist
try{
  console.log(getEmoji('=)'));
}catch(e){
  console.error(e);
}
