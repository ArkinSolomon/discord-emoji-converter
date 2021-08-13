/*
 * This file simply contains a custom error class for catching emoji errors.
 */

/**
 * @typedef {Error} EmojiError Any errors thrown by this npm module will be of this type.
 */
class EmojiError extends Error {

  /**
   * Create a new EmojiError. The default message is blank.
   * 
   * @constructor
   * @param {string} [message=] The error message.
   */
  constructor(message=''){
    super(message);
    this.name = 'EmojiError';
  }
}
module.exports.EmojiError = EmojiError;
