//copied from example files in CS5410
var Assignment_4 = {
    images: {},
    sounds: {},
	
	status : {
			preloadRequest : 0,
			preloadComplete : 0
		
	}
	
};

//------------------------------------------------------------------
//
// Wait until the browser 'onload' is called before starting to load
// any external resources.  This is needed because a lot of JS code
// will want to refer to the HTML document.
//
//------------------------------------------------------------------
window.addEventListener('load', function() {
    console.log('Loading resources...');

    Assignment_4.audioExt = '';
    //
    // Find out which kind of audio support we have
    if (Modernizr.audio.mp3 === 'probably') {
        console.log('We have MP3 support');
        Assignment_4.audioExt = 'mp3';
    }
    else if (Modernizr.audio.wav === 'probably') {
        console.log('We have WAV support');
        Assignment_4.audioExt = 'wav';
    }

	Modernizr.load([
		{
			load : [
                'preload!media/Tetris.png',
                'preload!media/blueBlock.png',
				'preload!media/greenBlock.png',
				'preload!media/lightBlueBlock.png',
				'preload!media/orangeBlock.png',
				'preload!media/pinkBlock.png',
				'preload!media/redBlock.png',
				'preload!media/yellowBlock.png',
                'preload!scripts/soundPlayer.js',
				'preload!media/sounds/arcadeSound.' + Assignment_4.audioExt,
                'preload!media/sounds/plopp.' + Assignment_4.audioExt,
				'preload!media/sounds/TetrisSong.' + Assignment_4.audioExt,
                'preload!media/sounds/SFX_ButtonHover.' + Assignment_4.audioExt,
                'preload!media/sounds/SFX_PieceMoveLR.' + Assignment_4.audioExt,
                'preload!media/sounds/SFX_PieceTouchDown.' + Assignment_4.audioExt,
                'preload!scripts/inputHighScores.js',
                'preload!scripts/Menu.js',
				'preload!scripts/Input.js',
				'preload!scripts/Frame.js',
				'preload!scripts/Engine.js',
				'preload!scripts/Game.js',
				'preload!scripts/Assignment_4.js'
			],
			complete : function() {
				console.log('All files requested for loading...');
			}
		}
	]);
}, false);

//
// Extend yepnope with our own 'preload' prefix that...
// * Tracks how many have been requested to load
// * Tracks how many have been loaded
// * Places images into the 'images' object
yepnope.addPrefix('preload', function(resource) {
	console.log('preloading: ' + resource.url);
	
	Assignment_4.status.preloadRequest += 1;
	var isImage = /.+\.(jpg|png|gif)$/i.test(resource.url);
	resource.noexec = isImage;
	var isSound = /.+\.(mp3|wav)$/i.test(resource.url);
	resource.noexec = isSound;

	resource.autoCallback = function(e) {
		if (isImage) {
			var image = new Image();
			image.src = resource.url;
			Assignment_4.images[resource.url] = image;
		}

		else if (isSound) {
		    var sound = new Audio(resource.url);
		    console.log(resource.url);
		    Assignment_4.sounds[resource.url] = sound;
		}
		
		Assignment_4.status.preloadComplete += 1;
		
		//
		// When everything has finished preloading, go ahead and start the game
		if (Assignment_4.status.preloadComplete === Assignment_4.status.preloadRequest) {
			if(Assignment_4.frame == null){
				console.log("frame is undefined!");
				
			}
			console.log('Preloading complete!');
			Assignment_4.initialize(Assignment_4.game);
		}
	};
	
	return resource;
});
