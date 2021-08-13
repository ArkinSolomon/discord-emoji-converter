/*
 * Running this file will generate `emojis.json` from `data.json`. Run this file
 * to update the emojis with the latest _snapshot.json file from
 * https://github.com/amethyst-studio/discord-emoji, assuming the module is up
 * to date.
 */

//Require modules
const fs = require('fs');
const path = require('path');
const discordEmoji = require('discord-emoji')

//The output object
var emojis = {};

//Get all of the categories and assign each entry in each category to the emojis variable
const categories = Object.keys(discordEmoji);
for (let category of categories){
  const categoryData = discordEmoji[category];
  for (let entry of Object.entries(categoryData)){
    emojis[entry[0]] = entry[1];
  }
}

//Write the data to `emojis.json`
fs.writeFileSync(path.join(__dirname, 'emojis.json'), JSON.stringify(emojis), 'utf8');
