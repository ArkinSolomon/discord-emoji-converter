/*
 * Basic tests used to... well test...
 */

//Import modules
const fs = require('fs');
const path = require('path');
const converter = require(path.join(__dirname, 'index.js'));

//Get a few emojis manually
console.log(converter.emojis['sparkling_heart']);
console.log(converter.emojis['metal_tone5']);
console.log(converter.emojis['smiling_imp']);
console.log(converter.emojis['grin']);
console.log(converter.emojis['laughing']);
console.log(converter.emojis['satisfied']);

//Get a few emojis with functions
console.log(converter.getEmoji('clap_tone2'));
console.log(converter.getEmoji(':popcorn:'));
console.log(converter.getEmoji('rOFl'));
console.log(converter.getEmoji('   :sob:  '));
console.log(converter.getEmoji('pensive  '));

//Get some shortcodes with functions
console.log(converter.getShortcode('😃'));
console.log(converter.getShortcode('😭      '));
console.log(converter.getShortcode('😭      ', false));
console.log(converter.getShortcode('😠', false));
console.log(converter.getShortcode('      😂  '));

//Emojify some strings
console.log(converter.emojify('The quick brown :brown_square: fox :fox:  jumped over the :lazy: dog :dog:'));
console.log(converter.emojify('The doggo :doggo: is cute'));
console.log(converter.emojify(':satisfied:'));
console.log(converter.emojify('==\n  b o i   \n:boi:\n:boy:boy:\n=='));

//Try an emoji that doesn't exist
try{
  console.log(converter.getEmoji('i_dont_exist'));
}catch(e){
  console.error(e);
}

//Try a shortcode that doesn't exist
try{
  console.log(converter.getEmoji('=)'));
}catch(e){
  console.error(e);
}
