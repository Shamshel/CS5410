Assignment_4.engine = (function() {
	'use strict';
	
	console.log("initializing engine!");
	
	function BlueBlock() {
		var that = {
				image: Assignment_4.images['Media/blueBlock.png'],
				touched: 0,
				bind : {
					left: false,
					right: false,
					up: false,
					down: false
					
				}
				
			};
			
		return that;
		
	}
	
	function GreenBlock() {
		var that = {
				image: Assignment_4.images['Media/greenBlock.png'],
				touched: 0,
				bind : {
					left: false,
					right: false,
					up: false,
					down: false
					
				}
				
			};
			
		return that;
		
	}
	
	function LightBlueBlock() {
		var that = {
				image: Assignment_4.images['Media/lightBlueBlock.png'],
				touched: 0,
				bind : {
					left: false,
					right: false,
					up: false,
					down: false
					
				}
				
			};
			
		return that;
		
	}
	
	function OrangeBlock() {
		var that = {
				image: Assignment_4.images['Media/orangeBlock.png'],
				touched: 0,
				bind : {
					left: false,
					right: false,
					up: false,
					down: false
					
				}
				
			};
			
		return that;
		
	}
	
	function PinkBlock() {
		var that = {
				image: Assignment_4.images['Media/pinkBlock.png'],
				touched: 0,
				bind : {
					left: false,
					right: false,
					up: false,
					down: false
					
				}
				
			};
			
		return that;
		
	}
	
	function RedBlock() {
		var that = {
				image: Assignment_4.images['Media/redBlock.png'],
				touched: 0,
				bind : {
					left: false,
					right: false,
					up: false,
					down: false
					
				}
				
			};
		
		return that;
		
	}
	
	function YellowBlock() {
		var that = {
				image: Assignment_4.images['Media/yellowBlock.png'],
				touched: 0,
				bind : {
					left: false,
					right: false,
					up: false,
					down: false
					
				}
				
			};
			
		return that;
		
	}
	
	//names taken from http://tetris.wikia.com/wiki/Tetromino
	//each block fits in a 2x4 grid
	function StraightTet() {
		//light blue
		var that = {
				grid: [[undefined, undefined, undefined, undefined], [LightBlueBlock(), LightBlueBlock(), LightBlueBlock(), LightBlueBlock()]]
			
			};
			
		var i;
			
		//bind blocks
		for(i = 0; i < that.grid[0].length-1; i++){
			//bind left to right
			that.grid[1][i].bind.right = true;
			
			//bind right to left
			that.grid[1][i+1].bind.left = true;
			
			
		}
		
		return that;
		
	}
	
	function SquareTet() {
		//yellow
		var that = {
				grid: [[undefined, YellowBlock(), YellowBlock(), undefined], [undefined, YellowBlock(), YellowBlock(), undefined]]
			
			};
			
		var i;
		
		//bind top left
		that.grid[0][1].bind.right = true;
		that.grid[0][1].bind.down = true;
		
		//bind top right
		that.grid[0][2].bind.left = true;
		that.grid[0][2].bind.down = true;
		
		//bind bottom left
		that.grid[1][1].bind.right = true;
		that.grid[1][1].bind.up = true;
		
		//bind bottom right
		that.grid[1][2].bind.left = true;
		that.grid[1][2].bind.up = true;
		
		return that;
		
	}
	
	function TTurnTet() {
		//pink
		var that = {
				grid: [[undefined, PinkBlock(), undefined, undefined], [PinkBlock(), PinkBlock(), PinkBlock(), undefined]]
			
			};
			
		//bind top
		that.grid[0][1].bind.down = true;
		
		//bind bottom left
		that.grid[1][0].bind.right = true;
		
		//bind bottom middle
		that.grid[1][1].bind.up = true;
		that.grid[1][1].bind.left = true;
		that.grid[1][1].bind.right = true;
		
		//bind bottom right
		that.grid[1][2].bind.left = true;
		
		return that;
		
	}
	
	function InvSkewTet() {
		//green
		var that = {
				grid: [[undefined, GreenBlock(), GreenBlock(), undefined], [GreenBlock(), GreenBlock(), undefined, undefined]]
			
			};
			
		//bind top left
		that.grid[0][1].bind.right = true;
		that.grid[0][1].bind.down = true;
		
		//bind top right
		that.grid[0][2].bind.left = true;
		
		//bind bottom left
		that.grid[1][0].bind.right = true;
		
		//bind bottom right
		that.grid[1][1].bind.left = true;
		that.grid[1][1].bind.up = true;
		
		return that;
		
	}
	
	function OutSkewTet() {
		//red
		var that = {
				grid: [[RedBlock(), RedBlock(), undefined, undefined], [undefined, RedBlock(), RedBlock(), undefined]]
			
			};
		
		//bind top left
		that.grid[0][0].bind.right = true;
		
		//bind top right
		that.grid[0][1].bind.left = true;
		that.grid[0][1].bind.down = true;
		
		//bind bottom left
		that.grid[1][1].bind.right = true;
		that.grid[1][1].bind.up = true;
		
		
		//bind bottom right
		that.grid[1][2].bind.left = true;
		
		return that;
		
	}
	
	function OutJTet() {
		//orange
		var that = {
		    grid: [[undefined, undefined, OrangeBlock(), undefined], [OrangeBlock(), OrangeBlock(), OrangeBlock(), undefined]]
			
			};
		
		//bind top block
		that.grid[0][2].bind.down = true;
		
		//bind bottom left
		that.grid[1][0].bind.right = true;
		
		//bind bottom middle
		that.grid[1][1].bind.left = true;
		that.grid[1][1].bind.right = true;
		
		//bind bottom right
		that.grid[1][2].bind.left = true;
		that.grid[1][2].bind.up = true;
		
		return that;
		
	}
	
	function InvLTet() {
		//blue
		var that = {
				grid: [[BlueBlock(), undefined, undefined, undefined], [BlueBlock(), BlueBlock(), BlueBlock(), undefined]]
			
			};
		
		//bind top block
		that.grid[0][0].bind.down = true;
		
		//bind bottom left
		that.grid[1][0].bind.right = true;
		that.grid[1][0].bind.up = true;
		
		//bind bottom middle
		that.grid[1][1].bind.left = true;
		that.grid[1][1].bind.right = true;
		
		//bind bottom right
		that.grid[1][2].bind.left = true;
		
		return that;
		
	}
	
	function GameEngine() {
		var that = {
				grid: [],
				gameOver: false,
				level: 1,
				score: 0,
				nextBlock: undefined,
				gridWidth: 10,
				gridHeight: 22
			
			},
			blockStack = [],
			moveQueue = [],
			centerBlock = {
				dropped: true,
				x: 0,
				y: 0
				
			},
			timeInterval = 1000,
			accumulatedTime = 0,
			rotRight = false,
			rotLeft = false,
			movRight = false,
			movLeft = false,
			softDrp = false,
			hardDrp = false;
			
		var i,
			j;
		
		//build game grid
		for(i = 0; i < that.gridHeight; i++){
			//push new row array
			that.grid.push([]);
			for(j = 0; j < that.gridWidth; j++){
				//push element into row array
				that.grid[i].push(undefined);
				
			}
			
		}
		
		//returns a random block
		function spawnBlock() {
		    var blockNum = Math.floor(Math.random()*7);
			var result = undefined;
			
			if(blockNum == 0){
				console.log("spawning StraightTet");
				result = StraightTet();
				
			}
			
			else if(blockNum == 1){
				console.log("spawning SquareTet");
				result = SquareTet();
				
			}
			
			else if(blockNum == 2){
				console.log("spawning TTurnTet");
				result = TTurnTet();
				
			}
			
			else if(blockNum == 3){
				console.log("spawning InvSkewTet");
				result = InvSkewTet();
				
			}
			
			else if(blockNum == 4){
				console.log("spawning OutSkewTet");
				result = OutSkewTet();
				
			}
			
			else if(blockNum == 5){
				console.log("spawning InvLTet");
				result = InvLTet();
				
			}
			
			else{
				console.log("spawning OutJTet");
				result = OutJTet();
				
			}
			
			return result;
			
		}
		
		function dropBlock(x, y){
			//DFS
			console.log("dropping ("+x+", "+y+")");
			that.grid[y][x].touched = 1;
			
			if(that.grid[y+1][x] == undefined){
				//drop this block
				that.grid[y + 1][x] = that.grid[y][x];
				that.grid[y][x] = undefined;
			
				if(that.grid[y+1][x].bind.right == true && x+1 < that.gridWidth){
					if(that.grid[y][x+1] != undefined && that.grid[y][x+1].touched != 1){
						dropBlock(x+1, y);
					
					}
				
				}
			
				if(that.grid[y+1][x].bind.left == true && x-1 >= 0){
					if(that.grid[y][x-1] != undefined && that.grid[y][x-1].touched != 1){
						dropBlock(x-1, y);
					
					}
				
				}			
			
				if(that.grid[y+1][x].bind.up == true && y-1 >= 0){
					if(that.grid[y-1][x] != undefined && that.grid[y-1][x].touched != 1){
						dropBlock(x, y-1);
					
					}
					
				}
				
			}
			
			else{
				if(that.grid[y][x].bind.down == true && y+1 < that.gridHeight){
					if(that.grid[y+1][x] != undefined && that.grid[y+1][x].touched != 1){
						dropBlock(x, y+1);
					
					}
				
				}
			
				if(that.grid[y][x].bind.right == true && x+1 < that.gridWidth){
					if(that.grid[y][x+1] != undefined && that.grid[y][x+1].touched != 1){
						dropBlock(x+1, y);
					
					}
				
				}
			
				if(that.grid[y][x].bind.left == true && x-1 >= 0){
					if(that.grid[y][x-1] != undefined && that.grid[y][x-1].touched != 1){
						dropBlock(x-1, y);
					
					}
				
				}
			
				//drop this block
				that.grid[y + 1][x] = that.grid[y][x];
				that.grid[y][x] = undefined;
			
			
				if(that.grid[y+1][x].bind.up == true && y-1 >= 0){
					if(that.grid[y-1][x] != undefined && that.grid[y-1][x].touched != 1){
						dropBlock(x, y-1);
					
					}
					
				}
				
			}
			
		}
		
		function moveBlockLeft(x, y) {
			console.log("moving ("+x+", "+y+") left");
			that.grid[y][x].touched = 1;
			
			if(that.grid[y][x-1] == undefined){
				that.grid[y][x-1] = that.grid[y][x];
				that.grid[y][x] = undefined;
				
				if(that.grid[y][x-1].bind.down == true && y+1 < that.gridHeight){
					if(that.grid[y+1][x] != undefined && that.grid[y+1][x].touched != 1){
						moveBlockLeft(x, y+1);
					
					}
				
				}
			
				if(that.grid[y][x-1].bind.up == true && y-1 >= 0){
					if(that.grid[y-1][x] != undefined && that.grid[y-1][x].touched != 1){
						moveBlockLeft(x, y-1);
					
					}
				
				}
			
				if(that.grid[y][x-1].bind.left == true && x-1 >= 0){
					if(that.grid[y][x-1] != undefined && that.grid[y][x-1].touched != 1){
						moveBlockLeft(x-1, y);
					
					}
				
				}
			
				if(that.grid[y][x-1].bind.right == true && x+1 < that.gridWidth){
					if(that.grid[y][x+1] != undefined && that.grid[y][x+1].touched != 1){
						moveBlockLeft(x+1, y);
					
					}
				
				}
				
			}
			
			else{
				if(that.grid[y][x].bind.down == true && y+1 < that.gridHeight){
					if(that.grid[y+1][x] != undefined && that.grid[y+1][x].touched != 1){
						moveBlockLeft(x, y+1);
					
					}
				
				}
			
				if(that.grid[y][x].bind.up == true && y-1 >= 0){
					if(that.grid[y-1][x] != undefined && that.grid[y-1][x].touched != 1){
						moveBlockLeft(x, y-1);
					
					}
				
				}
			
				if(that.grid[y][x].bind.left == true && x-1 >= 0){
					if(that.grid[y][x-1] != undefined && that.grid[y][x-1].touched != 1){
						moveBlockLeft(x-1, y);
					
					}
				
				}
			
				//move this block
				that.grid[y][x-1] = that.grid[y][x];
				that.grid[y][x] = undefined;
				
				if(that.grid[y][x-1].bind.right == true && x+1 < that.gridWidth){
					if(that.grid[y][x+1] != undefined && that.grid[y][x+1].touched != 1){
						moveBlockLeft(x+1, y);
					
					}
				
				}
				
			}
			
		}
		
		function moveBlockRight(x, y) {
			console.log("moving ("+x+", "+y+") right");
			that.grid[y][x].touched = 1;
			
			if(that.grid[y][x+1] == undefined){
				that.grid[y][x+1] = that.grid[y][x];
				that.grid[y][x] = undefined;
				
				if(that.grid[y][x+1].bind.down == true && y+1 < that.gridHeight){
					if(that.grid[y+1][x] != undefined && that.grid[y+1][x].touched != 1){
						moveBlockRight(x, y+1);
					
					}
				
				}
			
				if(that.grid[y][x+1].bind.up == true && y-1 >= 0){
					if(that.grid[y-1][x] != undefined && that.grid[y-1][x].touched != 1){
						moveBlockRight(x, y-1);
					
					}
				
				}
			
				if(that.grid[y][x+1].bind.left == true && x-1 >= 0){
					if(that.grid[y][x-1] != undefined && that.grid[y][x-1].touched != 1){
						moveBlockRight(x-1, y);
					
					}
				
				}
				
			}
			
			else{
				if(that.grid[y][x].bind.down == true && y+1 < that.gridHeight){
					if(that.grid[y+1][x] != undefined && that.grid[y+1][x].touched != 1){
						moveBlockRight(x, y+1);
					
					}
				
				}
			
				if(that.grid[y][x].bind.up == true && y-1 >= 0){
					if(that.grid[y-1][x] != undefined && that.grid[y-1][x].touched != 1){
						moveBlockRight(x, y-1);
					
					}
				
				}
				
				if(that.grid[y][x].bind.right == true && x+1 < that.gridWidth){
					if(that.grid[y][x+1] != undefined && that.grid[y][x+1].touched != 1){
						moveBlockRight(x+1, y);
					
					}
				
				}
			
				//move this block
				that.grid[y][x+1] = that.grid[y][x];
				that.grid[y][x] = undefined;
				
				if(that.grid[y][x+1].bind.left == true && x-1 >= 0){
					if(that.grid[y][x-1] != undefined && that.grid[y][x-1].touched != 1){
						moveBlockRight(x-1, y);
					
					}
				
				}
				
			}
			
		}
		
		function rotateBlockLeft(x, y) {
			console.log("rotating ("+x+", "+y+") left");
			
		}
		
		function rotateBlockRight(x, y) {
			console.log("rotating ("+x+", "+y+") right");
			
		}
		
		function cleanGrid(){
			var i,
				j;
			for(i = 0; i < that.gridHeight; i++){
				for(j = 0; j < that.gridWidth; j++){
					if(that.grid[i][j] != undefined){
						that.grid[i][j].touched = 0;
						
					}
					
				}
				
			}
			
		}
		
		function detectLeftMostEdgeCollision(startX, startY){
			var found = false;
			var moved;
			var thisX = startX;
			var thisY = startY;
			
			while(found == false){
				moved = false;
				
				//move down left
				if(that.grid[thisY][thisX].bind.left == true && that.grid[thisY][thisX-1] != undefined){
					moved = true;
					thisX = thisX-1;
					
				}
				
				else if(that.grid[thisY][thisX].bind.down == true && that.grid[thisY+1][thisX] != undefined){
					moved = true;
					thisY = thisY+1;
					
				}
				
				if(moved == false){
					found = true;
					
				}
				
			}
			
			if(thisX-1 < 0){
				return true;
				
			}
			
			else if(that.grid[thisY][thisX-1] != undefined){
				return true;
				
			}
			
			return false;
			
		}
		
		function detectRightMostEdgeCollision(startX, startY){
			var found = false;
			var moved;
			var thisX = startX;
			var thisY = startY;
			
			while(found == false){
				moved = false;
				
				//move right down
				if(that.grid[thisY][thisX].bind.right == true && that.grid[thisY][thisX+1] != undefined){
					moved = true;
					thisX = thisX+1;
					
				}
				
				else if(that.grid[thisY][thisX].bind.down == true && that.grid[thisY+1][thisX] != undefined){
					moved = true;
					thisY = thisY+1;
					
				}
				
				if(moved == false){
					found = true;
					
				}
				
			}
			
			if(thisX+1 >= that.gridWidth){
				return true;
				
			}
			
			else if(that.grid[thisY][thisX+1] != undefined){
				return true;
				
			}
			
			return false;
			
		}
		
		function detectLowestEdgeCollision(startX, startY){
			var found = false;
			var moved;
			var thisX = startX;
			var thisY = startY;
			
			var blockStack = [];
			
			blockStack.push({
				x: startX,
				y: startY
				
			});
			
			while(blockStack.length != 0){
				var point = blockStack.pop();
				if(that.grid[point.y][point.x].touched == 0){
					that.grid[point.y][point.x].touched = 1;
					
					if(that.grid[point.y][point.x].bind.down == false){
						//detect bottom edge of grid
						if(point.y+1 >= that.gridHeight){
							return true;
							
						}
						
						//detect block below this one
						if(that.grid[point.y+1][point.x] != undefined){
							return true;
							
						}
						
					}
					
					if(that.grid[point.y][point.x].bind.down == true && (point.y+1) < that.gridHeight){
						if(that.grid[point.y+1][point.x] != undefined){
							blockStack.push({
								x: point.x,
								y: point.y+1
						
							});
							
						}
						
					}
					
					if(that.grid[point.y][point.x].bind.up == true && (point.y-1) >= 0){
						if(that.grid[point.y-1][point.x] != undefined){
							blockStack.push({
								x: point.x,
								y: point.y-1
						
							});
							
						}
						
					}
					
					if(that.grid[point.y][point.x].bind.right == true && (point.x+1) < that.gridWidth){
						if(that.grid[point.y][point.x+1] != undefined){
							blockStack.push({
								x: point.x+1,
								y: point.y
						
							});
							
						}
						
					}
					
					if(that.grid[point.y][point.x].bind.left == true && (point.x-1) >= 0){
						if(that.grid[point.y][point.x-1] != undefined){
							blockStack.push({
								x: point.x-1,
								y: point.y
						
							});
							
						}
						
					}
					
				}
				
			}
			
			return false;
			
		}
		
		//user controls
		that.rotateRight = function(elapsedTime) {
			//console.log("rotate right!");
			rotRight = true;
			
		}
		
		that.rotateLeft = function(elapsedTime) {
			//console.log("rotate left!");
			rotLeft = true;
			
		}
		
		that.moveLeft = function(elapsedTime) {
			//console.log("move left!");
			movLeft = true;
			
		}
		
		that.moveRight = function(elaspedTime) {
			//console.log("move right!");
			movRight = true;
			
		}
		
		that.softDrop = function(elapsedTime) {
			//console.log("soft drop!");
			softDrp = true;
			
		}
		
		that.hardDrop = function(elapsedTime) {
			//console.log("hard drop!");
			hardDrp = true;
			
		}
		
		that.update = function(elapsedTime) {
			//console.log("updating at time "+elapsedTime);
			accumulatedTime += elapsedTime;
			if(accumulatedTime < timeInterval){
				return;
				
			}
			
			accumulatedTime = 0;
			
			//console.log("passed time interval!");
			
			//check if block has dropped and copy in a new one
			if(centerBlock.dropped == true){
				var newBlock = undefined;
				var i;
				var j;
				
				if(blockStack.length < 1){
					blockStack.push(spawnBlock());
					blockStack.push(spawnBlock());
					
				}
				
				newBlock = blockStack.pop();
				
				//center block at top of grid
				centerBlock.x = 4;
				centerBlock.y = 1;	
				
				//copy block into grid
				for(i = 0; i < 2; i++){
					for(j = 3; j < 7; j++){
						if(newBlock.grid[i][j-3] != undefined){
							//console.log("copying y:"+i+" x:"+j);
							that.grid[i][j] = newBlock.grid[i][j-3];
							
							
						}
						
					}
					
				}
				
				centerBlock.dropped = false;
				
			}
			
			if(blockStack.length < 1){
				blockStack.push(spawnBlock());
				
			}
			
			//rotate
			if(rotRight == true && rotLeft == false){
				
				
			}
			
			else if(rotLeft == true && rotRight == false){
				
				
			}
			
			//move
			if(movRight == true && movLeft == false){
				if(detectRightMostEdgeCollision(centerBlock.x, centerBlock.y) == false){
					cleanGrid();
					moveBlockRight(centerBlock.x, centerBlock.y);
					centerBlock.x = centerBlock.x+1;
					cleanGrid();
					
				}
				
			}
			
			else if(movLeft == true && movRight == false){
				if(detectLeftMostEdgeCollision(centerBlock.x, centerBlock.y) == false){
					cleanGrid();
					moveBlockLeft(centerBlock.x, centerBlock.y);
					centerBlock.x = centerBlock.x-1;
					cleanGrid();
					
				}
				
			}
			
			//drop
			if(softDrp == true && hardDrp == false){
				if(detectLowestEdgeCollision(centerBlock.x, centerBlock.y) == false){
					cleanGrid();
					dropBlock(centerBlock.x, centerBlock.y);
					centerBlock.y = centerBlock.y+1;
					cleanGrid();
					
				}
				
			}
			
			else if(hardDrp == true && softDrp == false){
				
				
			}
			
			//reset user inputs
			rotRight = false;
			rotLeft = false;
			movRight = false;
			movLeft = false;
			softDrp = false;
			hardDrp = false;
			
			//drop block by gravity				
			if(detectLowestEdgeCollision(centerBlock.x, centerBlock.y) == false){
				cleanGrid();
				dropBlock(centerBlock.x, centerBlock.y);
				centerBlock.y = centerBlock.y+1;
				cleanGrid();
					
			}
			
			else{
				centerBlock.dropped = true;
				
			}
			
			
			
		}
			
		return that;
		
	}
	
	return {
		GameEngine: GameEngine
		
	};
	
}());