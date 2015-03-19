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
				'preload!scripts/Assignment_4.js',
				'preload!scripts/Menu.js'
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
			console.log('Preloading complete!');
			Assignment_4.initialize();
		}
	};
	
	return resource;
});