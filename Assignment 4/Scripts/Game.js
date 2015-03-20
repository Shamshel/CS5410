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
				mainMenu : menu.Menu('Milestone 1 Menu', ['Current Keybindings'], '', 100, gameFrame.width, gameFrame.height-100),
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
			that.mainMenu.render(context);
			
		};
		
		return that;
		
	}

	function DisplayKeybindingMenuState(gameFrame) {
		var controls = ['left', 'right', 'rotate left', 'rotate right', 'soft drop', 'hard drop'];
		
		var that = {
					menu : menu.Menu('Click to change key', controls, 'return', 100, gameFrame.width, gameFrame.height-100),
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
			
			window.removeEventListener('keydown', input.changeLeft);
			window.addEventListener('keydown', input.changeRight);
			window.addEventListener('keydown', input.changeRotateLeft);
			window.addEventListener('keydown', input.changeRotateRight);
			window.addEventListener('keydown', input.changeDown);
			window.addEventListener('keydown', input.changeUp);
			
			var result = null;
			
			//left
			if(that.menu.items[0].clicked == true){
				that.menu.items[0].selected = false;
				that.menu.items[0].clicked = false;
				
				window.addEventListener('keydown', input.changeLeft);
				
				result = ChangeKeyBindingState(gameFrame, that.menu.items[0].text);
				
			}
			
			//right
			if(that.menu.items[1].clicked == true){
				that.menu.items[1].selected = false;
				that.menu.items[1].clicked = false;
				
				window.addEventListener('keydown', input.changeRight);
				
				result = ChangeKeyBindingState(gameFrame, that.menu.items[1].text);
				
			}
			
			//rotate left
			if(that.menu.items[2].clicked == true){
				that.menu.items[2].selected = false;
				that.menu.items[2].clicked = false;
				
				window.addEventListener('keydown', input.changeRotateLeft);
				
				result = ChangeKeyBindingState(gameFrame, that.menu.items[2].text);
				
			}
			
			//rotate right
			if(that.menu.items[3].clicked == true){
				that.menu.items[3].selected = false;
				that.menu.items[3].clicked = false;
				
				window.addEventListener('keydown', input.changeRotateRight);
				
				result = ChangeKeyBindingState(gameFrame, that.menu.items[3].text);
				
			}
			
			//soft drop
			if(that.menu.items[4].clicked == true){
				that.menu.items[4].selected = false;
				that.menu.items[4].clicked = false;
				
				window.addEventListener('keydown', input.changeDown);
				
				result = ChangeKeyBindingState(gameFrame, that.menu.items[4].text);
				
			}
			
			//hard drop
			if(that.menu.items[5].clicked == true){
				that.menu.items[5].selected = false;
				that.menu.items[5].clicked = false;
				
				window.addEventListener('keydown', input.changeUp);
				
				result = ChangeKeyBindingState(gameFrame, that.menu.items[5].text);
				
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
				that.menu.items[0].text = controls[0]+": "+input.controls.prevKeyLeft;
				
			}
			
			else{
				that.menu.items[0].text = controls[0]+": "+input.controls.newKeyLeft;
				
			}
		
			//right
			if(input.controls.newKeyRight === undefined){
				that.menu.items[1].text = controls[1]+": "+input.controls.prevKeyRight;
				
			}
			
			else{
				that.menu.items[1].text = controls[1]+": "+input.controls.newKeyRight;
				
			}
			
			//rotate left
			if(input.controls.newKeyRotateLeft === undefined){
				that.menu.items[2].text = controls[2]+": "+input.controls.prevKeyRotateLeft;
				
			}
			
			else{
				that.menu.items[2].text = controls[2]+": "+input.controls.newKeyRotateLeft;
				
			}
			
			//rotate right
			if(input.controls.newKeyRotateRight === undefined){
				that.menu.items[3].text = controls[3]+": "+input.controls.prevKeyRotateRight;
				
			}
			
			else{
				that.menu.items[3].text = controls[3]+": "+input.controls.newKeyRotateRight;
				
			}
			
			//soft drop
			if(input.controls.newKeyDown === undefined){
				that.menu.items[4].text = controls[4]+": "+input.controls.prevKeyDown;
				
			}
			
			else{
				that.menu.items[4].text = controls[4]+": "+input.controls.newKeyDown;
				
			}
			
			//hard drop
			if(input.controls.newKeyUp === undefined){
				that.menu.items[5].text = controls[5]+": "+input.controls.prevKeyUp;
				
			}
			
			else{
				that.menu.items[5].text = controls[5]+": "+input.controls.newKeyUp;
				
			}
			
			that.menu.render(context);
			
		};
		
		return that;
		
	}
	
	function ChangeKeyBindingState(gameFrame, item) {
		var that = {
				menu : menu.Menu('press key to change', [item], 'cancel', 100, gameFrame.width, gameFrame.height-100),
				dead : false
			
			};
			
		that.update = function(elapsedTime) {
			mouse = input.Mouse();
			
			mouse.registerCommand('mousemove', that.menu.footer.mouseOver);
			mouse.registerCommand('mousedown', that.menu.footer.click);
			
			var result = null;
			
			//change 
			if(that.menu.footer.clicked == true){
				//console.log("display keybindings!");
				that.dead = true;
				
			}
			
			return result;
			
		};
		
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