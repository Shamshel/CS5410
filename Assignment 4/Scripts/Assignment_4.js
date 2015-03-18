function Game() {
	var canvas = document.getElementById('content'),
		context = canvas.getContext('2d'),
		timestamp = 0,
		mainMenu = 0;


	that = {


	};

	that.collectInput = function(elapsedTime) {


	};

	that.update = function(elapsedTime) {


	};

	that.render = function() {
		mainMenu.render(context);


	};

	that.gameLoop = function(time) {
		var elapsedTime = time - timestamp;
		timestamp = time;

		that.collectInput(elapsedTime);
		that.update(elapsedTime);
		that.render();
		requestAnimationFrame(that.gameLoop);

	}

	that.initalize = function() {
		//Menu(title, items[], footer, top, width, height)
		mainMenu = Menu('Test!', ['item 1', 'item 2', 'item 3'], 'item 4', 100, context.canvas.width, context.canvas.height-100);

		requestAnimationFrame(that.gameLoop);

	}

	return that;

}

Assignment_4.initialize= function() {
	var thisGame = Game();

	thisGame.initalize();

};