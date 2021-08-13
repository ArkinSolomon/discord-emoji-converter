/*
 * Running this file will generate `emojis.json` from `data.json`. Run this file
 * if for some reason `emojis.json` does not exist, otherwise, the module
 * will not work.
 */

//Require modules
const fs = require('fs');
const path = require('path');

//Read data into memory
const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'data.json'), 'utf8'));
var emojis = {};

//Loop through all emojis
for (let emoji of data.emojis){

  //Loop through all names for the emoji
  for (let name of emoji.names){
    emojis[name] = emoji.surrogates
  }

  //If the emoji has diversity, loop through all children
  if (typeof emoji.hasDiversity !== 'undefined' && emoji.hasDiversity){
    for (let childEmoji of emoji.diversityChildren){

      //Loop through all child names
      for (let childEmojiName of childEmoji.names){
        emojis[childEmojiName] = childEmoji.surrogates;
      }
    }
  }
}

//Write the data to `emojis.json`
fs.writeFileSync(path.join(__dirname, 'emojis.json'), JSON.stringify(emojis), 'utf8');
