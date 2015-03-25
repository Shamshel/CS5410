Assignment_4.game = (function(menu, frame, input) {
	'use strict';
	
	//taken from CS5410 examples
	//
	// Place a 'clear' function on the Canvas prototype, this makes it a part
	// of the canvas, rather than making a function that calls and does it.
	CanvasRenderingContext2D.prototype.clear = function() {
		this.save();
		this.setTransform(1, 0, 0, 1, 0, 0);
		this.clearRect(0, 0, canvas.width, canvas.height);
		this.restore();
	};
	
	if(frame == null){
		console.log("frame is null!")
		
	}
	
	var canvas = document.getElementById('content');
	var	context = canvas.getContext('2d');
	var mouse = input.Mouse();
	var keyboard = input.Keyboard();
	var gameFrame = frame.Frame();
	
	function Game() {
		var timestamp = 0,
			gameStack = [],
			that = {


			};

		that.collectInput = function(elapsedTime) {
			mouse.update(elapsedTime);
			keyboard.update(elapsedTime);

		};

		that.update = function(elapsedTime) {
			if(gameStack[gameStack.length-1].dead){
				gameStack.pop();
				
			}
			
			var result = gameStack[gameStack.length-1].update(elapsedTime);
			if(result != null){
				gameStack[gameStack.length] = result;
				
			}

		};

		that.render = function() {
			context.clear();
			
			gameFrame.render(context);
			
			gameStack[gameStack.length-1].render(context);


		};

		that.gameLoop = function(time) {
			var elapsedTime = time - timestamp;
			timestamp = time;

			that.collectInput(elapsedTime);
			that.update(elapsedTime);
			that.render();
			requestAnimationFrame(that.gameLoop);

		}

		that.initialize = function() {
			//the main menu should be the base state
			console.log("initializing game!");
			gameFrame.initialize(context);
			gameStack[gameStack.length] = MainMenuState(gameFrame);
			
			requestAnimationFrame(that.gameLoop);

		}

		return that;

	}
	
	function MainMenuState(gameFrame) {
		var that = {
				mainMenu : menu.Menu('', ['Current Keybindings'], '', 100, gameFrame.width, gameFrame.height-100, true),
				dead : false
			
			};
		
		that.update = function(elapsedTime) {
			mouse = input.Mouse();
		
			for(var i = 0; i < that.mainMenu.items.length; i++){
				mouse.registerCommand('mousemove', that.mainMenu.items[i].mouseOver);
				mouse.registerCommand('mousedown', that.mainMenu.items[i].click);
				
			}
			
			var result = null;
			
			//display keybindings
			if(that.mainMenu.items[0].clicked == true){
				//console.log("display keybindings!");
				
				that.mainMenu.items[0].selected = false;
				that.mainMenu.items[0].clicked = false;
				
				result = DisplayKeybindingMenuState(gameFrame);
				
			}
			
			return result;
			
		};
		
		that.render = function(context) {
			//context.drawImage(backgroundImage.image, 0, 0, (canvas.width-1)/1.5, ((canvas.height-1)/1.125)+100);
		    that.mainMenu.render(context);
		};
		
		return that;
		
	}

	function DisplayKeybindingMenuState(gameFrame) {
		var controls = ['left', 'right', 'rotate left', 'rotate right', 'soft drop', 'hard drop'];
		
		var that = {
					menu : menu.Menu('Click to change key', controls, 'return', 100, gameFrame.width, gameFrame.height-100, false),
					dead : false
			
				};
		
		that.update = function(elapsedTime) {
			mouse = input.Mouse();
	
			for(var i = 0; i < that.menu.items.length; i++){
				mouse.registerCommand('mousemove', that.menu.items[i].mouseOver);
				mouse.registerCommand('mousedown', that.menu.items[i].click);
				
			}
			
			mouse.registerCommand('mousemove', that.menu.footer.mouseOver);
			mouse.registerCommand('mousedown', that.menu.footer.click);
			
			var result = null;
			
			window.removeEventListener('keydown', input.changeLeft);
			window.removeEventListener('keydown', input.changeRight);
			window.removeEventListener('keydown', input.changeRotateLeft);
			window.removeEventListener('keydown', input.changeRotateRight);
			window.removeEventListener('keydown', input.changeDown);
			window.removeEventListener('keydown', input.changeUp);
			

			
			//left
			if(that.menu.items[0].clicked == true){
				that.menu.items[0].selected = false;
				that.menu.items[0].clicked = false;
				
				window.addEventListener('keydown', input.changeLeft);
				
				result = ChangeKeyBindingState(gameFrame, 'left');
				
				window.addEventListener('keydown', result.cleanup);
				
			}
			
			//right
			if(that.menu.items[1].clicked == true){
				that.menu.items[1].selected = false;
				that.menu.items[1].clicked = false;
				
				window.addEventListener('keydown', input.changeRight);
				
				result = ChangeKeyBindingState(gameFrame, 'right');
				
				window.addEventListener('keydown', result.cleanup);
				
			}
			
			//rotate left
			if(that.menu.items[2].clicked == true){
				that.menu.items[2].selected = false;
				that.menu.items[2].clicked = false;
				
				window.addEventListener('keydown', input.changeRotateLeft);
				
				result = ChangeKeyBindingState(gameFrame, 'rotate left');
				
				window.addEventListener('keydown', result.cleanup);
				
			}
			
			//rotate right
			if(that.menu.items[3].clicked == true){
				that.menu.items[3].selected = false;
				that.menu.items[3].clicked = false;
				
				window.addEventListener('keydown', input.changeRotateRight);
				
				result = ChangeKeyBindingState(gameFrame, 'rotate right');
				
				window.addEventListener('keydown', result.cleanup);
				
			}
			
			//soft drop
			if(that.menu.items[4].clicked == true){
				that.menu.items[4].selected = false;
				that.menu.items[4].clicked = false;
				
				window.addEventListener('keydown', input.changeDown);
				
				result = ChangeKeyBindingState(gameFrame, 'soft drop');
				
				window.addEventListener('keydown', result.cleanup);
				
			}
			
			//hard drop
			if(that.menu.items[5].clicked == true){
				that.menu.items[5].selected = false;
				that.menu.items[5].clicked = false;
				
				window.addEventListener('keydown', input.changeUp);
				
				result = ChangeKeyBindingState(gameFrame, 'hard drop');
				
				window.addEventListener('keydown', result.cleanup);
				
			}
			
			//return 
			if(that.menu.footer.clicked == true){
				that.dead = true;
				
			}
			
			return result;
			
		};
		
		that.render = function(context) {
			//left
			if(input.controls.newKeyLeft === undefined){
				that.menu.items[0].text = controls[0]+": "+input.KeyTranslation[input.controls.prevKeyLeft.toString()];
				
			}
			
			else{
				that.menu.items[0].text = controls[0]+": "+input.KeyTranslation[input.controls.newKeyLeft.toString()];
				
			}
		
			//right
			if(input.controls.newKeyRight === undefined){
				that.menu.items[1].text = controls[1]+": "+input.KeyTranslation[input.controls.prevKeyRight.toString()];
				
			}
			
			else{
				that.menu.items[1].text = controls[1]+": "+input.KeyTranslation[input.controls.newKeyRight.toString()];
				
			}
			
			//rotate left
			if(input.controls.newKeyRotateLeft === undefined){
				that.menu.items[2].text = controls[2]+": "+input.KeyTranslation[input.controls.prevKeyRotateLeft.toString()];
				
			}
			
			else{
				that.menu.items[2].text = controls[2]+": "+input.KeyTranslation[input.controls.newKeyRotateLeft.toString()];
				
			}
			
			//rotate right
			if(input.controls.newKeyRotateRight === undefined){
				that.menu.items[3].text = controls[3]+": "+input.KeyTranslation[input.controls.prevKeyRotateRight.toString()];
				
			}
			
			else{
				that.menu.items[3].text = controls[3]+": "+input.KeyTranslation[input.controls.newKeyRotateRight.toString()];
				
			}
			
			//soft drop
			if(input.controls.newKeyDown === undefined){
				that.menu.items[4].text = controls[4]+": "+input.KeyTranslation[input.controls.prevKeyDown.toString()];
				
			}
			
			else{
				that.menu.items[4].text = controls[4]+": "+input.KeyTranslation[input.controls.newKeyDown.toString()];
				
			}
			
			//hard drop
			if(input.controls.newKeyUp === undefined){
				that.menu.items[5].text = controls[5]+": "+input.KeyTranslation[input.controls.prevKeyUp.toString()];
				
			}
			
			else{
				that.menu.items[5].text = controls[5]+": "+input.KeyTranslation[input.controls.newKeyUp.toString()];
				
			}
			
			that.menu.render(context);
			
		};
		
		return that;
		
	}
	
	function ChangeKeyBindingState(gameFrame, item) {
		var that = {
				menu : menu.Menu('press key to change', [item], 'return', 100, gameFrame.width, gameFrame.height-100, false),
				dead : false
			
			};
			
		that.update = function(elapsedTime) {
			mouse = input.Mouse();
			
			mouse.registerCommand('mousemove', that.menu.footer.mouseOver);
			mouse.registerCommand('mousedown', that.menu.footer.click);
			
			var result = null;
			
			if(that.menu.footer.clicked == true){
				//console.log("display keybindings!");
				that.dead = true;
				
			}
			
			return result;
			
		};
		
		that.cleanup = function(e) {
			that.dead = true;
			
		}
		
		that.render = function(context) {
			that.menu.render(context);
			
		};	
		
		
		return that;
		
	}
	
	return {
		Game : Game,
		MainMenuState : MainMenuState
		
	};
	
}(Assignment_4.menu, Assignment_4.frame, Assignment_4.input));