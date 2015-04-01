//copied from example files in CS5410
var Assignment_4 = {
	images : {},
	
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
	resource.autoCallback = function(e) {
		if (isImage) {
			var image = new Image();
			image.src = resource.url;
			Assignment_4.images[resource.url] = image;
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
