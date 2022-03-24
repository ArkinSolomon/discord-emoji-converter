/**
 * This script builds a .min.js file which contains all of the emoji data as a
 * single file which can be served in the browser.
 */
const path = require('path');
const fs = require('fs');
const { minify } = require("terser");

//Get the js file
const indexPath = path.resolve(__dirname, '..', 'index.js');
var output = fs.readFileSync(indexPath, 'utf8');

//Super hacky, just replace all the require and input statments, probably could be automatted, but it's not worth it for a small project
const emojiError = fs.readFileSync(path.resolve(__dirname, '..', 'emojiError.js'), 'utf8');
const emojisJson = fs.readFileSync(path.resolve(__dirname, '..', 'emojis.json'), 'utf8');
output = '"use strict";\nconst converter = {};\n' + output
  .replace("const fs = require('fs');", '')
  .replace("const {EmojiError} = require('./emojiError.js');", emojiError.replace('module.exports.EmojiError = EmojiError;', ''))
  .replace("JSON.parse(fs.readFileSync('./emojis.json', 'utf8'))", emojisJson)
  .replace(/module\.exports/g, 'converter')

  //Remove comments
  .replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '')

  //Remove multiple spaces
  .replace(/^$[\n\r]*/gm, '');
output += "export default converter;"

//The output files
const outputDir = path.resolve(__dirname, '..', 'dist');
const normalPath = path.join(outputDir, 'discord-emoji-converter.js');
const minifiedPath = path.join(outputDir, 'discord-emoji-converter.min.js');

if (!fs.existsSync(outputDir))
  fs.mkdirSync(outputDir);
fs.writeFileSync(normalPath, output, 'utf8');

minify(output).then(result => {
  fs.writeFileSync(minifiedPath, result.code, 'utf8');
})
  .catch(console.error);
