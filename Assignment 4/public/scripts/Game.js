Assignment_4.game = (function(engine, menu, frame, input) {
	'use strict';

	console.log("initializing game!");
	
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
	
	var canvas = document.getElementById('content');
	var	context = canvas.getContext('2d');
	var mouse = input.Mouse();
	var keyboard = input.Keyboard();
	var gameFrame = frame.Frame();

    var curHighScores = [],
        gameOver = false,
        indexHS;

	function getHighScores(data) {
	    for (indexHS = 0; indexHS < data.length; indexHS++) {
	        curHighScores[indexHS] = data[indexHS].score;
	    }
	}
	
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
			else if (gameStack[gameStack.length - 1].gameOverDead) {
			    gameStack.pop();
			    gameStack.pop();
			}
			
			var result = gameStack[gameStack.length-1].update(elapsedTime);
			if(result != undefined){
				gameStack[gameStack.length] = result;
				
			}

		};

		that.render = function () {
			context.clear();
			
			gameFrame.render(context);
			
			gameStack[gameStack.length - 1].render(context);


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
			gameFrame.initialize(context);
			gameStack[gameStack.length] = MainMenuState(gameFrame);

            //Request High Scores
			Assignment_4.getScore(getHighScores);
			
			requestAnimationFrame(that.gameLoop);

		}

		return that;

	}
    //--------------------------------------------------------------
    //
    //          Main Menu State
    //
    //--------------------------------------------------------------
	function MainMenuState(gameFrame) {
		var that = {
				mainMenu : menu.Menu('', ['New Game', 'Configure Controls', 'High Scores', 'Credits'], '', 100, gameFrame.width, gameFrame.height-100, true),
				dead : false
			
			};
		
		that.update = function(elapsedTime) {
			mouse = input.Mouse();
		
			for(var i = 0; i < that.mainMenu.items.length; i++){
				mouse.registerCommand('mousemove', that.mainMenu.items[i].mouseOver);
				mouse.registerCommand('mousedown', that.mainMenu.items[i].click);
				
			}
			
			var result = undefined;
			
			//display keybindings
			if(that.mainMenu.items[0].clicked == true){
				//console.log("display keybindings!");
				
				that.mainMenu.items[0].selected = false;
				that.mainMenu.items[0].clicked = false;
				
                //TODO: Make it reapeat while in Game Play Menu State
				Assignment_4.playSound('media/sounds/TetrisSong', 0.05);

				result = DisplayGamePlayMenuState(gameFrame);
				
			}

		    //display keybindings
			else if (that.mainMenu.items[1].clicked == true) {
			    //console.log("display keybindings!");

			    that.mainMenu.items[1].selected = false;
			    that.mainMenu.items[1].clicked = false;

			    Assignment_4.playSound('media/sounds/arcadeSound', 0.75);

			    result = DisplayKeybindingMenuState(gameFrame);

			}

			else if (that.mainMenu.items[2].clicked == true) {
			    //console.log("display keybindings!");

			    that.mainMenu.items[2].selected = false;
			    that.mainMenu.items[2].clicked = false;

			    Assignment_4.playSound('media/sounds/arcadeSound', 0.75);

			    result = DisplayHighScoresMenuState(gameFrame);

			}
			
			else if (that.mainMenu.items[3].clicked == true) {
			    //console.log("display keybindings!");

			    that.mainMenu.items[3].selected = false;
			    that.mainMenu.items[3].clicked = false;

			    Assignment_4.playSound('media/sounds/arcadeSound', 0.75);

			    result = DisplayCreditsMenuState(gameFrame);

			}

			return result;
			
		};
		
		that.render = function(context) {
			//context.drawImage(backgroundImage.image, 0, 0, (canvas.width-1)/1.5, ((canvas.height-1)/1.125)+100);
		    that.mainMenu.render(context);
		};
		
		return that;
		
	}

    //--------------------------------------------------------------
    //          GAME PLAY MENU
    //
    //              --> Sub Menu of: 'MainMenuState'
    //--------------------------------------------------------------
	function DisplayGamePlayMenuState(gameFrame) {
	    var that = {
				gameEngine: engine.GameEngine(),
				gridPxHeight: 0,
				gridPxWidth: 0,
				gameSec: 0,
                gameMin: 0,
				secCount: 0,
                minCount: 0,
				curScore: 0,
				lines: 0,
				infoX: gameFrame.info.x,
				infoY: gameFrame.info.y,
                infoW: gameFrame.info.width,
                infoH: gameFrame.info.height,
                nextbX: gameFrame.nextBlock.x,
                nextbY: gameFrame.nextBlock.y,
                nextbW: gameFrame.nextBlock.width,
                nextbH: gameFrame.nextBlock.height
			};
        // Register UP
	    if (input.controls.changeUp == true) {

	        keyboard.unRegisterCommand(input.controls.prevKeyUp, that.gameEngine.hardDrop);
	        keyboard.registerCommand(input.controls.newKeyUp, that.gameEngine.hardDrop);
	        input.controls.changeUp == false;
	    }

	    else {
	        keyboard.registerCommand(input.controls.prevKeyUp, that.gameEngine.hardDrop);

	    }
	    // Register DOWN
	    if (input.controls.changeDown == true) {

	        keyboard.unRegisterCommand(input.controls.prevKeyDown, that.gameEngine.softDrop);
	        keyboard.registerCommand(input.controls.newKeyDown, that.gameEngine.softDrop);
	        input.controls.changeDown == false;
	    }

	    else {
	        keyboard.registerCommand(input.controls.prevKeyDown, that.gameEngine.softDrop);

	    }
	    // Register LEFT
	    if (input.controls.changeLeft == true) {

	        keyboard.unRegisterCommand(input.controls.prevKeyLeft, that.gameEngine.moveLeft);
	        keyboard.registerCommand(input.controls.newKeyLeft, that.gameEngine.moveLeft);
	        input.controls.changeLeft == false;
	    }

	    else {
	        keyboard.registerCommand(input.controls.prevKeyLeft, that.gameEngine.moveLeft);

	    }
	    // Register RIGHT
		if(input.controls.changeRight == true){

		    keyboard.unRegisterCommand(input.controls.prevKeyRight, that.gameEngine.moveRight);
		    keyboard.registerCommand(input.controls.newKeyRight, that.gameEngine.moveRight);
		    input.controls.changeRight == false;
		}
		
		else{
			keyboard.registerCommand(input.controls.prevKeyRight, that.gameEngine.moveRight);
		
		}
	    // Register RotateLeft
		if (input.controls.changeRotateLeft == true) {

			keyboard.unRegisterCommand(input.controls.prevKeyRotateLeft, that.gameEngine.rotateLeft);
			keyboard.registerCommand(input.controls.newKeyRotateLeft, that.gameEngine.rotateLeft);
			input.controls.changeRotateLeft == false;
		}
		
		else{
		    keyboard.registerCommand(input.controls.prevKeyRotateLeft, that.gameEngine.rotateLeft);
		
		}
		
	    // Register RotateRight
		if (input.controls.changeRotateRight == true) {

		    keyboard.unRegisterCommand(input.controls.prevKeyRotateRight, that.gameEngine.rotateRight);
		    keyboard.registerCommand(input.controls.newKeyRotateRight, that.gameEngine.rotateRight);
		    input.controls.changeRotateRight == false;
		}

		else {
		    keyboard.registerCommand(input.controls.prevKeyRotateRight, that.gameEngine.rotateRight);

		}
			
		var i,
			j;
			
		that.gridPxHeight = (gameFrame.border.height/that.gameEngine.gridHeight);
		that.gridPxWidth = (gameFrame.border.width/that.gameEngine.gridWidth);
			
		//console.log("border width: "+gameFrame.border.width+" border height: "+gameFrame.border.height);
		//console.log("grid height: "+that.gameEngine.gridHeight+" width: "+that.gameEngine.gridWidth);
			
		gameFrame.renderBorder = true;

	    that.update = function (elapsedTime) {
            
	        var result = undefined;

	        that.gameEngine.update(elapsedTime);
            
	        //Update Game Time
	        that.secCount += (elapsedTime / 1000);
	        if (that.secCount >= 1) {
	            that.gameSec++;
	            that.secCount = 0;
	            if (that.gameSec > 59) {
	                that.gameMin++;
	                that.gameSec = 0;
	            }
	        }

	        //FOR DEBUGGING HIGH SCORES ONLY
	        if (that.gameMin > 0) {
	            gameOver = true;
	            gameFrame.renderBorder = false;
	            result = DisplayGameOver(gameFrame, that.curScore);
	            Assignment_4.addScore(that.curScore);
	            Assignment_4.stopSound('media/sounds/TetrisSong');
	            Assignment_4.playSound('media/sounds/SFX_GameOver',1.0);
	        }

	        //TO DO: Update Current Score
	        that.curScore = that.gameEngine.scoreSum;
	        //TO DO: Update # of Lines
			that.lines = that.gameEngine.clearedRows;
			
	        return result;

	    }

	    that.render = function (context) {
			//console.log("rendering!");
			context.save();
			
			for(i = 0; i < that.gameEngine.gridHeight; i++){
				for(j = 0; j < that.gameEngine.gridWidth; j++){
					//console.log("testing at ("+i+", "+j+")");
					
					if(that.gameEngine.grid[i][j] != undefined){
						//console.log("drawing at x: "+gameFrame.border.x+(that.gridPxWidth*j)+" y: "+gameFrame.border.y+(that.gridPxHeight*i));
						//console.log("image src: "+that.gameEngine.grid[i][j].image);
						context.drawImage(that.gameEngine.grid[i][j].image, gameFrame.border.x+(that.gridPxWidth*j), gameFrame.border.y+(that.gridPxHeight*i), that.gridPxWidth, that.gridPxHeight);
						
					}
					
				}
				
			}

	        //Render Next Block
			if (that.gameEngine.nextBlock != undefined) {
			    for (i = 0; i < 2; i++) {
			        for (j = 0; j < 4; j++) {
			            if (that.gameEngine.nextBlock.grid[i][j] != undefined) {
			                context.drawImage(that.gameEngine.nextBlock.grid[i][j].image, (that.nextbX + (that.nextbW / 3) + (that.gridPxWidth * j)), (that.nextbY + (that.nextbH / 3) + (that.gridPxHeight * i)), that.gridPxWidth, that.gridPxHeight);
			            }
			        }
			    }
			}
		    
	        //Render Time
			context.font = '28px Arial';
			context.textAlign = 'center';
			context.fillStyle = 'lightblue';
			if (that.gameSec < 10) {
			    context.fillText(that.gameMin + ':0' + that.gameSec, (that.infoX + (that.infoW / 2)), (that.infoY + (that.infoH / 10)) + (that.infoH / 20) + ((that.infoH * (15 / 100)) / 1.5));
			}
			else {
			    context.fillText(that.gameMin + ':' + that.gameSec, (that.infoX + (that.infoW / 2)), (that.infoY + (that.infoH / 10)) + (that.infoH / 20) + ((that.infoH * (15 / 100)) / 1.5));
			}

	        //Render Current Score
			context.fillText(that.curScore, (that.infoX + (that.infoW / 2)), (that.infoY + (that.infoH / 2.5)) + (that.infoH / 20) + ((that.infoH * (15 / 100)) / 1.5));

	        //Render # of Lines
			context.fillText(that.lines, (that.infoX + (that.infoW / 2)), (that.infoY + (2 * (that.infoH / 2.5))) - (that.infoH / 10) + (that.infoH / 20) + ((that.infoH * (15 / 100)) / 1.5));

			context.restore();
		
	    }

	    return that;
	}

    //--------------------------------------------------------------
    //          Display Game Over State
    //
    //              --> Sub Menu of: 'DisplayGamePlayMenuState'
    //--------------------------------------------------------------

	function DisplayGameOver(gameFrame, curScore) {
	    var gameOverScore = ['','Current Score: ' + curScore, '',''];

	    var that = {
	        menu: menu.Menu('Game Over', gameOverScore, 'return', 100, gameFrame.width, gameFrame.height - 100, false),
	        gameOverDead: false

	    };

	    that.update = function (elapsedTime) {
	        mouse = input.Mouse();

	        mouse.registerCommand('mousemove', that.menu.footer.mouseOver);
	        mouse.registerCommand('mousedown', that.menu.footer.click);

	        var result = undefined;

	        //return 
	        if (that.menu.footer.clicked == true) {
	            that.gameOverDead = true;

	            Assignment_4.getScore(getHighScores);
	            Assignment_4.playSound('media/sounds/plopp', 1.0);
	        }

	        return result;

	    };

	    that.render = function (context) {

	        that.menu.render(context);

	    };

	    return that;

	}

    //--------------------------------------------------------------
    //          Display Keybinding Menu State
    //
    //              --> Sub Menu of: 'MainMenuState'
    //--------------------------------------------------------------
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
			
			var result = undefined;
			
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

				Assignment_4.playSound('media/sounds/arcadeSound', 0.75);
				
			}
			
			//right
			if(that.menu.items[1].clicked == true){
				that.menu.items[1].selected = false;
				that.menu.items[1].clicked = false;
				
				window.addEventListener('keydown', input.changeRight);
				
				result = ChangeKeyBindingState(gameFrame, 'right');
				
				window.addEventListener('keydown', result.cleanup);
				
				Assignment_4.playSound('media/sounds/arcadeSound', 0.75);
			}
			
			//rotate left
			if(that.menu.items[2].clicked == true){
				that.menu.items[2].selected = false;
				that.menu.items[2].clicked = false;
				
				window.addEventListener('keydown', input.changeRotateLeft);
				
				result = ChangeKeyBindingState(gameFrame, 'rotate left');
				
				window.addEventListener('keydown', result.cleanup);
				
				Assignment_4.playSound('media/sounds/arcadeSound', 0.75);
			}
			
			//rotate right
			if(that.menu.items[3].clicked == true){
				that.menu.items[3].selected = false;
				that.menu.items[3].clicked = false;
				
				window.addEventListener('keydown', input.changeRotateRight);
				
				result = ChangeKeyBindingState(gameFrame, 'rotate right');
				
				window.addEventListener('keydown', result.cleanup);
				
				Assignment_4.playSound('media/sounds/arcadeSound', 0.75);
			}
			
			//soft drop
			if(that.menu.items[4].clicked == true){
				that.menu.items[4].selected = false;
				that.menu.items[4].clicked = false;
				
				window.addEventListener('keydown', input.changeDown);
				
				result = ChangeKeyBindingState(gameFrame, 'soft drop');
				
				window.addEventListener('keydown', result.cleanup);
				
				Assignment_4.playSound('media/sounds/arcadeSound', 0.75);
			}
			
			//hard drop
			if(that.menu.items[5].clicked == true){
				that.menu.items[5].selected = false;
				that.menu.items[5].clicked = false;
				
				window.addEventListener('keydown', input.changeUp);
				
				result = ChangeKeyBindingState(gameFrame, 'hard drop');
				
				window.addEventListener('keydown', result.cleanup);
				
				Assignment_4.playSound('media/sounds/arcadeSound', 0.75);
			}
			
			//return 
			if(that.menu.footer.clicked == true){
				that.dead = true;
				Assignment_4.playSound('media/sounds/plopp', 1.0);
			}
			
			return result;
			
		};
		
		that.render = function (context) {
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
	
    //--------------------------------------------------------------
    //          Change Key Binding State
    //
    //              --> Sub Menu of: 'DisplayKeybindingMenuState'
    //--------------------------------------------------------------
	function ChangeKeyBindingState(gameFrame, item) {
		var that = {
				menu : menu.Menu('press key to change', [item], 'return', 100, gameFrame.width, gameFrame.height-100, false),
				dead : false
			
			};
			
		that.update = function(elapsedTime) {
			mouse = input.Mouse();
			
			mouse.registerCommand('mousemove', that.menu.footer.mouseOver);
			mouse.registerCommand('mousedown', that.menu.footer.click);
			
			var result = undefined;
			
			if(that.menu.footer.clicked == true){
				//console.log("display keybindings!");
			    that.dead = true;
			    Assignment_4.playSound('media/sounds/plopp', 1.0);
				
			}
			
			return result;
			
		};
		
		that.cleanup = function(e) {
			that.dead = true;
			
		}
		
		that.render = function (context) {
		    that.menu.render(context);
			
		};	
		
		
		return that;
		
	}

    //--------------------------------------------------------------
    //          Display High Scores Menu State
    //
    //              --> Sub Menu of: 'MainMenuState'
    //--------------------------------------------------------------

	function DisplayHighScoresMenuState(gameFrame) {

	    var highScoreList = ['1st: ' + curHighScores[0], '2nd: ' + curHighScores[1], '3rd: ' + curHighScores[2], '4th: ' + curHighScores[3], '5th: ' + curHighScores[4], '6th: ' + curHighScores[5], '7th: ' + curHighScores[6], '8th: ' + curHighScores[7], '9th: ' + curHighScores[8], '10th: ' + curHighScores[9]];

	    var that = {
	        menu: menu.Menu('High Scores', highScoreList, 'return', 100, gameFrame.width, gameFrame.height - 100, false),
	        dead: false
	    };

	    that.update = function (elapsedTime) {
	        mouse = input.Mouse();

	        mouse.registerCommand('mousemove', that.menu.footer.mouseOver);
	        mouse.registerCommand('mousedown', that.menu.footer.click);

	        var result = undefined;

	        //return 
	        if (that.menu.footer.clicked == true) {
	            that.dead = true;
	            Assignment_4.playSound('media/sounds/plopp', 1.0);

	        }

	        return result;

	    };

	    that.render = function (context) {
	
	        that.menu.render(context);

	    };

	    return that;

	}

    //--------------------------------------------------------------
    //          Display Credits Menu State
    //
    //              --> Sub Menu of: 'MainMenuState'
    //--------------------------------------------------------------

	function DisplayCreditsMenuState(gameFrame) {
	    var credNames = ['','Cody Herndon','&', 'Justin Cox','', 'For CS 5410'];

	    var that = {
	        menu: menu.Menu('Created By:', credNames, 'return', 100, gameFrame.width, gameFrame.height - 100, false),
	        dead: false

	    };

	    that.update = function (elapsedTime) {
	        mouse = input.Mouse();

	        mouse.registerCommand('mousemove', that.menu.footer.mouseOver);
	        mouse.registerCommand('mousedown', that.menu.footer.click);

	        var result = undefined;

	        //return 
	        if (that.menu.footer.clicked == true) {
	            that.dead = true;
	            Assignment_4.playSound('media/sounds/plopp', 1.0);
	        }

	        return result;

	    };

	    that.render = function (context) {

	        that.menu.render(context);

	    };

	    return that;

	}
	
	return {
		Game : Game
		
	};
	
}(Assignment_4.engine, Assignment_4.menu, Assignment_4.frame, Assignment_4.input));