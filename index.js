/*
 * Main file, contains all exports.
 */

//Require modules
const fs = require('fs');
const path = require('path');
const { EmojiError } = require(path.resolve(__dirname, 'emojiError.js'));

//Load emojis into memory
const emojis = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'emojis.json'), 'utf8'));
module.exports.emojis = emojis;

/**
 * Get an emoji character as a string with a given shortcode.
 * 
 * @param {string} shortcode The shortcode of the emoji to get.
 * @returns {string} The emoji character.
 * @throws {EmojiError} Throws an emoji error if the shortcode doesnt exist.
 */
module.exports.getEmoji = shortcode => {
  shortcode = shortcode.trim().toLowerCase();

  //Remove colons if there are any
  shortcode = shortcode.replace(/:/g, '');

  //Check if the emoji character exists
  var emoji = emojis[shortcode];
  if (typeof emoji === 'undefined') {
    throw new EmojiError('Shortcode doesn\'t exist');
  }

  //Return it if it does exist
  return emoji;
};

/**
 * Get the shortcode of an emoji character with or without colons.
 * 
 * @param {string} emoji The emoji character to get the shortcode of.
 * @param {boolean} [addColons=true] Add colons to the shortcode when it is returned. 
 * @returns {string} The shortcode of the emoji character provided.
 * @throws {EmojiError} Throws an emoji error if the emoji doesnt exist.
 */
module.exports.getShortcode = (emoji, addColons = true) => {
  emoji = emoji.trim();

  //Check if a shortcode exists for the given character
  var shortcode = Object.keys(emojis).find(k => emojis[k] === emoji);
  if (typeof shortcode === 'undefined') {
    throw new EmojiError('Emoji doesn\'t exist');
  }

  //If a shortcode exists, return it (add colons if requested)
  return addColons ? `:${shortcode}:` : shortcode;
};

/**
 * Take a given string and convert all shortcodes found in it to emoji characters. If no shortcodes are found, it returns the original string. If two short codes are on either side of a single colon, the first shortcode will be converted, not the second.
 * 
 * @param {string} str The string to convert all shortcodes to emojis.
 * @returns {string} The string after converting all shortcodes within it to emojis.
 */
module.exports.emojify = str => {

  //Get all shortcodes
  var shortcodes = str.match(/:[^\s:]+:/g) || [];

  //Replace the shortcodes
  for (let shortcode of shortcodes) {
    try {
      str = str.replace(shortcode, module.exports.getEmoji(shortcode));
    } catch (e) {

      //Ignore errors
      continue;
    }
  }

  return str;
}

//Export error
module.exports.EmojiError = EmojiError;
