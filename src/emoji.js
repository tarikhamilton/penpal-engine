/**
 * Emoji
 * 
 * @class Emoji
 * @constructor
 */

var emoji = function (options) {
    /**
     * @property orientation
     * @type String
     * @required
     */
    this.orientation = options.orientation || return 'Not going to fly, emoji.orientation is required.'
}