/**
 * Emoji
 * 
 * @class Emoji
 * @constructor
 */
var Emoji = function (options) {
    var options = options || {},
        required = []
    /**
     * Whether the emoji moves left-to-right or in all directions.
     * 
     * @property movementType
     * @type String
     * @required
     */
    this.movementType = options.movementType || null
    
    /**
     * Initial facing direction.
     * 
     * @property initialFacingDirection
     * @type String
     * @required
     */
    this.initialFacingDirection = options.initialFacingDirection || null
    
    /**
     * Emoji CSS handle
     * 
     * @property img
     * @type String
     * @required
     */
    this.img = options.img || null
    
    // Check if required properties are met
    
    required['movementType'] = this.movementType
    required['initialFacingDirection'] = this.initialFacingDirection
    required['img'] = this.img

    for (var prop in required) {
        if (required[prop] === null)
            console.log(prop + ' is a required property for Emoji.')
    } 
    
    // Create emoji HTML
    
    var animal = document.createElement('player'),
		playerIndicator = document.createElement('div'),
		img = document.createElement('i')
}

var test = new Emoji({
    img: 'em-cat2',
    movementType: 'side',
    initialFacingDirection: 'left'
})