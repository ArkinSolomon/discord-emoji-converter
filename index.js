/*
 * Main file, contains all exports.
 */

//Require modules
const fs = require('fs');
const path = require('path');
const {EmojiError} = require(path.join(__dirname, 'emojiError.js'))

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
    throw new EmojiError('Emoji doesn\'t exist');
  }

  //Return it if it does exist
  return emoji;
};

//Get the shortcode of an emoji with or without colons
module.exports.getShortcode = (emoji, addColons = true) => {
  emoji = emoji.trim();

  //Check if a shortcode exists for the given character
  var shortcode = Object.keys(emojis).find(k => emojis[k] === emoji);
  if (typeof shortcode === 'undefined'){
    throw new EmojiError('Shortcode doesn\'t exist');
  }

  //If a shortcode exists, return it (add colons if requested)
  return addColons ? `:${shortcode}:` : shortcode;
};

//Take a string and convert all shortcodes in it to emoji characters
module.exports.emojify = str => {

  //Get all shortcodes
  var shortcodes = str.match(/:[^\s:]+:/g);

  //Replace the shortcodes
  for (let shortcode of shortcodes){
    try{
      str = str.replace(shortcode, module.exports.getEmoji(shortcode));
    }catch(e){

      //Handle error
      if (e instanceof EmojiError){
        continue;
      }else{
        throw e;
      }
    }
  }

  return str;
}

//Export error
module.exports.EmojiError = EmojiError;
