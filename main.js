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
/**
 * Get keyboard input
 *
 * Mozilla says to use KeyboardEvent.key is preferred, but
 * not many browsers support it. This works on Chrome for sure.
 */
function keyEvent(event) {
	var key = event.keyCode || event.which;
	var keychar = String.fromCharCode(key);
	return key
}

/**
 * Controller and controls
 *
 * Assign controls to animals, currently the two controllers
 * function as a form of multiplayer for 2-people-1-keyobard.
 */
var controllers = {
	p1: {
		'left': 65, // a
		'right': 68 // d
	},
	p2: {
		'left': 37, // left arrow
		'right': 39, // right arrow
	}
}

/**
 * Players are synonymous with the user.
 * 
 * @class Player
 * @constructor
 */
var Player = function (options) { // How do I doc the options?
    this.username = options.username || 'Playa'
}

/**
 * Animal
 *
 * @class
 */
function Animal(genes) {
    this.size = genes.size + 'px' || 100 + 'px'
    this.hue = genes.hue + 'deg' || '0deg'
    this.img = genes.img || 'em-cat2'
	this.speed = genes.speed || 10
	this.controls = genes.controls
	this.player = genes.player
	this.html = {}
    this.position = { x: 0, y: 0 }
	
	// Set controls
	window.addEventListener('keydown', function(e) {
		console.log(keyEvent(e))
		if (keyEvent(e) === this.controls.left)
			this.move('left')
		else if (keyEvent(e) === this.controls.right)
			this.move('right')
	}.bind(this))

	// Create animal
    var animal = document.createElement('player'),
		playerIndicator = document.createElement('div'),
		img = document.createElement('i')
	
    var stylesForPlayer = {
        width: this.size,
        height: this.size,
        position: 'absolute',
        left: 0,
		bottom: 0
    }
	
	var stylesForImages = {
		filter: 'hue-rotate(' + this.hue + ')',
        webkitFilter: 'hue-rotate(' + this.hue + ')',
	}
	
    for (var prop in stylesForPlayer) {
        animal.style[prop] = stylesForPlayer[prop]
    }
	
	for (var prop in stylesForImages) {
        img.style[prop] = stylesForImages[prop]
    }
	
    img.classList.add('player__img', 'em', this.img)
	playerIndicator.classList.add('player-indicator')
	playerIndicator.innerHTML = this.player
	animal.appendChild(playerIndicator)
	animal.appendChild(img)
    this.html.player = animal
	this.html.img = img
    document.body.appendChild(animal)
}

Animal.prototype.move = function (direction) {
	if (direction == 'right') {
		this.html.img.style.transform = 'ScaleX(-1)'
		this.html.img.style.webkitTransform = 'ScaleX(-1)'
		this.position.x += this.speed
	} 
	else if (direction == 'left') {
		this.html.img.style.transform = 'ScaleX(1)'
		this.html.img.style.webkitTransform = 'ScaleX(1)'
		this.position.x -= this.speed
	}

    this.html.player.style.left = this.position.x + 'px'
}

// Animal configs

var snail = {
    size: 150,
    hue: 180,
	img: 'em-snail',
	controls: controllers.p1,
	speed: 10,
	player: 'P2'
}

var cat = {
	size: 190,
    hue: 10,
	img: 'em-cat2',
	controls: controllers.p2,
	speed: 50,
	player: 'P1'
}

var dog = {
	size: 250,
    hue: 10,
	img: 'em-dog2',
	controls: controllers.p1,
	speed: 30,
	player: 'P2'
}

var jacob = new Animal(cat)
var someDog = new Animal(dog)
//var gary = new Animal(snail)