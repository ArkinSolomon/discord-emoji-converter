/*
 * This file simply contains a custom error class for catching emoji errors.
 */

//Custom error class
class EmojiError extends Error {

  //Basic class constructor
  constructor(message=''){
    super(message);
    this.name = 'EmojiError';
  }
}
module.exports.EmojiError = EmojiError;
