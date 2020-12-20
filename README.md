# Discord Emoji Converter
Module to convert Discord emoji shortcodes (ex: "`:grinning:`" to "`😀`") to emoji characters, and vice versa.

This may work for other platforms, however they are built according to Discord's emoji shortcodes, which are not standard. This does **not** work for custom server emojis.

## Documentation

### Functions

#### converter.getEmoji(shortcode)

This function converts a given shortcode to an emoji character and returns it. It takes one argument: `shortcode`, which is the emoji shortcode of the emoji to get. If the given shortcode does not exist, that is, it does not match to an emoji character, it will throw an `EmojiError`.

#### converter.getShortcode(emoji[, addColons=true])

This function converts a given emoji character and returns the shortcode of the given emoji. It takes an argument `emoji` which is a string of the emoji character to get the shortcode of. It also takes an optional argument `addColons`, which, if false, will not add colons to either side of the shortcode. By default, it is set to true. If the given value for `emoji` is not mapped to a short code, it will throw an `EmojiError`.

### Constants

#### converter.emojis

This constant is the main data object with shortcodes (not including colons) as keys, and emoji characters as values. Found in [emojis.json](https://github.com/ArkinSolomon/discord-emoji-converter/blob/master/emojis.json).

### Errors

#### converter.EmojiError

This error is a generic error message class, taking a single argument: `message`, which is a string representing the message of the new error. The default value is `''`. Basically, it's `Error` but called `EmojiError`.

## Credits

The [data.json](https://github.com/ArkinSolomon/discord-emoji-converter/blob/master/data.json) is a modified and minified version of a JSON file scraped and created by [kangalioo](https://github.com/kangalioo) and the full, unmodified file can be found [here](https://gist.github.com/kangalioo/5e0f19e8145587c05e219597fbd2d352).

## License

Licensed under the MIT License. View license [here](https://github.com/ArkinSolomon/discord-emoji-converter/blob/master/LICENSE).
