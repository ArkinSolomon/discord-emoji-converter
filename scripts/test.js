/*
 * Use mocha to run tests and ensure package is working properly.
 */
const assert = require('assert');
const path = require('path')

//Import this package files
const converter = require(path.resolve(__dirname, '..', 'index.js'));

//Get a few emojis manually
describe('Get emojis manually', function () {
  it('Should output "💖"', function () {
    assert.equal(converter.emojis['sparkling_heart'], '💖');
  });
  it('Should output "🤘🏿"', function () {
    assert.equal(converter.emojis['metal_tone5'], '🤘🏿');
  });
  it('Should output "😁"', function () {
    assert.equal(converter.emojis['grin'], '😁');
  });
  it('Should output "😆"', function () {
    assert.equal(converter.emojis['laughing'], '😆');
  });
  it('Should output "😆"', function () {
    assert.equal(converter.emojis['satisfied'], '😆');
  });
  it('Should output "🇹🇱"', function () {
    assert.equal(converter.emojis['flag_tl'], '🇹🇱');
  });
});

//Get a few emojis with functions
describe('Get emojis with functions', function () {
  it('Should output "👏🏼"', function () {
    assert.equal(converter.getEmoji('clap_tone2'), '👏🏼');
  });
  it('Should output "🍿"', function () {
    assert.equal(converter.getEmoji(':popcorn:'), '🍿');
  });
  it('Should output "🤣"', function () {
    assert.equal(converter.getEmoji('rOFl'), '🤣');
  });
  it('Should output "😭"', function () {
    assert.equal(converter.getEmoji('   :sob:  '), '😭');
  });
  it('Should output "😔"', function () {
    assert.equal(converter.getEmoji('pensive  '), '😔');
  });
  it('Should output "🌶️"', function () {
    assert.equal(converter.emojis['hot_pepper'], '🌶️');
  });
});

//Get some shortcodes with functions
describe('Get shortcodes with functions', function () {
  it('Should output ":smiley:"', function () {
    assert.equal(converter.getShortcode('😃'), ':smiley:');
  });
  it('Should output ":sob:"', function () {
    assert.equal(converter.getShortcode(' 😭      '), ':sob:');
  });
  it('Should output "sob"', function () {
    assert.equal(converter.getShortcode('😭      ', false), 'sob');
  });
  it('Should output "angry"', function () {
    assert.equal(converter.getShortcode('😠', false), 'angry');
  });
  it('Should output ":joy:"', function () {
    assert.equal(converter.getShortcode('      😂  '), ':joy:');
  });
});

//Emojify some strings
describe('Emojify some strings', function () {
  it('Should output "The quick brown 🟫 fox 🦊  jumped over the :lazy: dog 🐶"', function () {
    assert.equal(converter.emojify('The quick brown :brown_square: fox :fox:  jumped over the :lazy: dog :dog:'), 'The quick brown 🟫 fox 🦊  jumped over the :lazy: dog 🐶');
  });
  it('Should output "The doggo :doggo: is cute"', function () {
    assert.equal(converter.emojify('The doggo :doggo: is cute'), 'The doggo :doggo: is cute');
  });
  it('Should output "😆"', function () {
    assert.equal(converter.emojify(':satisfied:'), '😆');
  });
  it('Should only convert the first shortcode on the last line', function () {
    assert.equal(converter.emojify('==\n  Boy   \n:boi:\n:boy:boy:\n=='), '==\n  Boy   \n:boi:\n👦boy:\n==');
  });
});

//Throw an EmojiError for an emoji that doesn't exist
describe('Throw an EmojiError for an emoji that doesn\'t exist', function () {
  it('Should throw an EmojiError saying that the emoji doesn\'t exist', function () {
    assert.throws(() => converter.getEmoji('i_dont_exist'), converter.EmojiError, 'Shortcode doesn\'t exist');
  });
});

//Throw an EmojiError for an shortcode that doesn't exist
describe('Throw an EmojiError for an shortcode that doesn\'t exist', function () {
  it('Should throw an EmojiError saying that the shortcode doesn\'t exist', function () {
    assert.throws(() => converter.getShortcode('=)'), converter.EmojiError, 'Emoji doesn\'t exist');
  });
  it('Should throw an EmojiError saying that the shortcode doesn\'t exist', function () {
    assert.throws(() => converter.getShortcode(':borger:'), converter.EmojiError, 'Emoji doesn\'t exist');
  });
});
