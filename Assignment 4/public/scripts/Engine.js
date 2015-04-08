Assignment_4.engine = (function(aI) {
    'use strict';
    
    console.log("initializing engine!");
    
    function BlueBlock() {
	var that = {
	    image: Assignment_4.images['media/blueBlock.png'],
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
	    image: Assignment_4.images['media/greenBlock.png'],
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
	    image: Assignment_4.images['media/lightBlueBlock.png'],
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
	    image: Assignment_4.images['media/orangeBlock.png'],
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
	    image: Assignment_4.images['media/pinkBlock.png'],
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
	    image: Assignment_4.images['media/redBlock.png'],
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
	    image: Assignment_4.images['media/yellowBlock.png'],
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

	that.grid[1][0].bind.right = true;
	
	that.grid[1][1].bind.left = true;
	that.grid[1][1].bind.right = true;

	that.grid[1][2].bind.left = true;
	that.grid[1][2].bind.right = true;

	that.grid[1][3].bind.left = true;
	
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
	    aiON: true,
	    level: 1,
	    scoreSum: 0,
	    nextBlock: undefined,
	    gridWidth: 10,
	    gridHeight: 22,
	    clearedRows: 0,
	    gameAI: aI.aiJarvis(),
        saveGrid: []
	    
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
    aiCount = 0,
    moveIndex = 0,
    centerF = false,
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

	for (i = 0; i < that.gridHeight; i++) {
	    //push new row array
	    that.saveGrid.push([]);
	    for (j = 0; j < that.gridWidth; j++) {
	        //push element into row array
	        that.saveGrid[i].push(undefined);

	    }

	}
	
	//returns a random block
	function spawnBlock() {
	    var blockNum = Math.floor(Math.random()*7);
	    var result = undefined;
	    
	    if(blockNum == 0){
		//console.log("spawning StraightTet");
		result = StraightTet();
		
	    }
	    
	    else if(blockNum == 1){
		//console.log("spawning SquareTet");
		result = SquareTet();
		
	    }
	    
	    else if(blockNum == 2){
		//console.log("spawning TTurnTet");
		result = TTurnTet();
		
	    }
	    
	    else if(blockNum == 3){
		//console.log("spawning InvSkewTet");
		result = InvSkewTet();
		
	    }
	    
	    else if(blockNum == 4){
		//console.log("spawning OutSkewTet");
		result = OutSkewTet();
		
	    }
	    
	    else if(blockNum == 5){
		//console.log("spawning InvLTet");
		result = InvLTet();
		
	    }
	    
	    else{
		//console.log("spawning OutJTet");
		result = OutJTet();
		
	    }

	    //result = StraightTet();
	    
	    return result;
	    
	}

	function DFSStack(x, y){
	    var blockStack = [];
	    var result = [];

	    cleanGrid();

	    blockStack.push({
		x: x,
		y: y
		
	    });

	    result.push({
		x: x,
		y: y
		
	    });

	    
	    //console.log("starting at: ("+startX+", "+startY+")");

	    while(blockStack.length > 0){
		var point = blockStack.pop();

		if(that.grid[point.y][point.x].touched == 0){
		    that.grid[point.y][point.x].touched = 1;
		    
		    //console.log("touching point  ("+point.x+", "+(point.y)+")");

		    if(that.grid[point.y][point.x].bind.down == true && (point.y+1) < that.gridHeight){
			if(that.grid[point.y+1][point.x] != undefined){
			    blockStack.push({
				x: point.x,
				y: point.y+1
				
			    });
			    
			    //console.log("pushing down  ("+point.x+", "+(point.y+1)+")");

			    result.push({
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

			    //console.log("pushing up ("+point.x+", "+(point.y-1)+")");

			    result.push({
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

			    //console.log("pushing right ("+(point.x+1)+", "+point.y+")");
			    
			    result.push({
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
			    
			    //console.log("pushing left ("+(point.x-1)+", "+point.y+")");

			    result.push({
				x: point.x-1,
				y: point.y
				
			    });

			}
			
		    }
		    
		}

		//item was added to stack more than once
		else{
		    //console.log("point ("+(point.x)+", "+point.y+") already touched");

		    var i;
		    for(i = 0; i < result.length; i++){
			if(point.x == result[i].x && point.y == result[i].y){
			    //console.log("popping ("+(point.x)+", "+point.y+")");
			    result.splice(i, 1);

			    break;

			}

		    }

		}
		
	    }

	    return result;

	}
	
	function dropBlock(x, y){
	    //DFS
	    //console.log("dropping ("+x+", "+y+")");
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
	    //console.log("moving ("+x+", "+y+") left");
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
	    //console.log("moving ("+x+", "+y+") right");
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
	    //console.log("rotating ["+y+", "+x+"] left");
 
	    var startX = x;
	    var startY = y;

	    var moved;
	    var thisX = startX;
	    var thisY = startY;
	    
	    var completeBlockStack = DFSStack(x, y);
	    var collision = false;

	    var point = undefined;

	    var binding = undefined;

	    var deltaX = 0;
	    var deltaY = 0;

	    var temp = false;

	    var i;

/*	    for(i = 0; i < completeBlockStack.length; i++){
		console.log("point "+i+": ["+completeBlockStack[i].y+", "+completeBlockStack[i].x+"]");
		
	    }*/

	    cleanGrid();

	    while(completeBlockStack.length > 0 && !collision){
		//console.log("stack length: "+completeBlockStack.length);
		point = completeBlockStack.pop();

		deltaX = startX - point.x;
		deltaY = point.y - startY;

		//console.log("moving ["+deltaY+", "+deltaX+"]");

		//check grid boundries
		if(startY+deltaX >= that.gridHeight || startY+deltaX < 0 || startX+deltaY >= that.gridWidth || startX+deltaY < 0){
		    //console.log("edge collision occured!");
		    collision = true;

		}

		//grid point occupied
		else if(point.x != startX+deltaY && point.y != startY+deltaX && that.grid[startY+deltaX][startX+deltaY] != undefined){
		    //console.log("grid point occupied!");
		    collision = true;

		    //check if point is in the array
		    var i;
		    for(i = 0; i < completeBlockStack.length; i++){
			if(startX+deltaY == completeBlockStack[i].x && startY+deltaX == completeBlockStack[i].y){
			    //console.log("move from ["+point.y+", "+point.x+"] to ["+(startY+deltaX)+", "+(startX+deltaY)+"] delayed");
			    //move the other blocks first
			    //completeBlockStack.push(point);
			    completeBlockStack.unshift(point);
			    collision = false;
			    break;

			}

		    }

		}

		//grid point unoccupied and within bounds
		else{
		    //console.log("moving ["+point.y+", "+point.x+"] to ["+(startY+deltaX)+", "+(startX+deltaY)+"]");

		    binding = that.grid[point.y][point.x].bind;

/*		    console.log("bindings:");
		    console.log("left: "+binding.left);
		    console.log("right: "+binding.right);
		    console.log("up: "+binding.up);
		    console.log("down: "+binding.down);
*/
		    //spawn new block
		    //!@#$! javascript object copy is not deep.
		    if(that.grid[point.y][point.x].image == Assignment_4.images['media/blueBlock.png']){
			that.grid[startY+deltaX][startX+deltaY] = BlueBlock();

		    }

		    if(that.grid[point.y][point.x].image == Assignment_4.images['media/greenBlock.png']){
			that.grid[startY+deltaX][startX+deltaY] = GreenBlock();

		    }

		    if(that.grid[point.y][point.x].image == Assignment_4.images['media/lightBlueBlock.png']){
			that.grid[startY+deltaX][startX+deltaY] = LightBlueBlock();

		    }

		    if(that.grid[point.y][point.x].image == Assignment_4.images['media/orangeBlock.png']){
			that.grid[startY+deltaX][startX+deltaY] = OrangeBlock();

		    }

		    if(that.grid[point.y][point.x].image == Assignment_4.images['media/pinkBlock.png']){
			that.grid[startY+deltaX][startX+deltaY] = PinkBlock();

		    }

		    if(that.grid[point.y][point.x].image == Assignment_4.images['media/redBlock.png']){
			that.grid[startY+deltaX][startX+deltaY] = RedBlock();

		    }

		    if(that.grid[point.y][point.x].image == Assignment_4.images['media/yellowBlock.png']){
			that.grid[startY+deltaX][startX+deltaY] = YellowBlock();

		    }

		    that.grid[startY+deltaX][startX+deltaY].bind.left = binding.up;
		    that.grid[startY+deltaX][startX+deltaY].bind.right = binding.down;
		    that.grid[startY+deltaX][startX+deltaY].bind.up = binding.right;
		    that.grid[startY+deltaX][startX+deltaY].bind.down = binding.left;

//		    console.log("moving ["+deltaY+", "+deltaX+"] to ["+deltaX+", "+deltaY+"]");

/*		    console.log("bindings:");
		    console.log("left: "+that.grid[startY+deltaX][startX+deltaY].bind.left);
		    console.log("right: "+that.grid[startY+deltaX][startX+deltaY].bind.right);
		    console.log("up: "+that.grid[startY+deltaX][startX+deltaY].bind.up);
		    console.log("down: "+that.grid[startY+deltaX][startX+deltaY].bind.down);
*/
		    if(deltaX != 0 || deltaY != 0){
//			console.log("clearing ["+point.y+", "+point.x+"]");
			that.grid[point.y][point.x] = undefined;

		    }

		    //console.log();

		}
		
	    }

	}

	function rotateBlockRight(x, y) {
	    console.log("rotating ["+y+", "+x+"] right");
 
	    var startX = x;
	    var startY = y;

	    var moved;
	    var thisX = startX;
	    var thisY = startY;
	    
	    var completeBlockStack = DFSStack(x, y);
	    var collision = false;

	    var point = undefined;

	    var binding = undefined;

	    var deltaX = 0;
	    var deltaY = 0;

	    var temp = false;

	    var i;

	    for(i = 0; i < completeBlockStack.length; i++){
		//console.log("point "+i+": ["+completeBlockStack[i].y+", "+completeBlockStack[i].x+"]");
		
	    }

	    cleanGrid();

	    while(completeBlockStack.length > 0 && !collision){
		//console.log("stack length: "+completeBlockStack.length);
		point = completeBlockStack.pop();

		deltaX = point.x - startX;
		deltaY = startY - point.y;

		//console.log("moving ["+deltaY+", "+deltaX+"]");

		//check grid boundries
		if(startY+deltaX >= that.gridHeight || startY+deltaX < 0 || startX+deltaY >= that.gridWidth || startX+deltaY < 0){
		    //console.log("edge collision occured!");
		    collision = true;

		}

		//grid point occupied
		else if(point.x != startX+deltaY && point.y != startY+deltaX && that.grid[startY+deltaX][startX+deltaY] != undefined){
		    //console.log("grid point occupied!");
		    collision = true;

		    //check if point is in the array
		    var i;
		    for(i = 0; i < completeBlockStack.length; i++){
			if(startX+deltaY == completeBlockStack[i].x && startY+deltaX == completeBlockStack[i].y){
			    //console.log("move from ["+point.y+", "+point.x+"] to ["+(startY+deltaX)+", "+(startX+deltaY)+"] delayed");
			    //move the other blocks first
			    //completeBlockStack.push(point);
			    completeBlockStack.unshift(point);
			    collision = false;
			    break;

			}

		    }

		}

		//grid point unoccupied and within bounds
		else{
		    //console.log("moving ["+point.y+", "+point.x+"] to ["+(startY+deltaX)+", "+(startX+deltaY)+"]");

		    binding = that.grid[point.y][point.x].bind;

/*		    console.log("bindings:");
		    console.log("left: "+binding.left);
		    console.log("right: "+binding.right);
		    console.log("up: "+binding.up);
		    console.log("down: "+binding.down);
*/
		    //spawn new block
		    //!@#$! javascript object copy is not deep.
		    if(that.grid[point.y][point.x].image == Assignment_4.images['media/blueBlock.png']){
			that.grid[startY+deltaX][startX+deltaY] = BlueBlock();

		    }

		    if(that.grid[point.y][point.x].image == Assignment_4.images['media/greenBlock.png']){
			that.grid[startY+deltaX][startX+deltaY] = GreenBlock();

		    }

		    if(that.grid[point.y][point.x].image == Assignment_4.images['media/lightBlueBlock.png']){
			that.grid[startY+deltaX][startX+deltaY] = LightBlueBlock();

		    }

		    if(that.grid[point.y][point.x].image == Assignment_4.images['media/orangeBlock.png']){
			that.grid[startY+deltaX][startX+deltaY] = OrangeBlock();

		    }

		    if(that.grid[point.y][point.x].image == Assignment_4.images['media/pinkBlock.png']){
			that.grid[startY+deltaX][startX+deltaY] = PinkBlock();

		    }

		    if(that.grid[point.y][point.x].image == Assignment_4.images['media/redBlock.png']){
			that.grid[startY+deltaX][startX+deltaY] = RedBlock();

		    }

		    if(that.grid[point.y][point.x].image == Assignment_4.images['media/yellowBlock.png']){
			that.grid[startY+deltaX][startX+deltaY] = YellowBlock();

		    }

		    that.grid[startY+deltaX][startX+deltaY].bind.right = binding.up;
		    that.grid[startY+deltaX][startX+deltaY].bind.left = binding.down;
		    that.grid[startY+deltaX][startX+deltaY].bind.down = binding.right;
		    that.grid[startY+deltaX][startX+deltaY].bind.up = binding.left;

		    //console.log("moving ["+deltaY+", "+deltaX+"] to ["+deltaX+", "+deltaY+"]");

		    /*console.log("bindings:");
		    console.log("left: "+that.grid[startY+deltaX][startX+deltaY].bind.left);
		    console.log("right: "+that.grid[startY+deltaX][startX+deltaY].bind.right);
		    console.log("up: "+that.grid[startY+deltaX][startX+deltaY].bind.up);
		    console.log("down: "+that.grid[startY+deltaX][startX+deltaY].bind.down);
*/
		    if(deltaX != 0 || deltaY != 0){
			//console.log("clearing ["+point.y+", "+point.x+"]");
			that.grid[point.y][point.x] = undefined;

		    }
		    
		    //console.log();

		}
		
	    }

	    //console.log("right rotation complete.");

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
	
	function detectLeftMostEdgeCollision(x, y){
	    var blockStack = DFSStack(x, y);
	    var i;

	    for(i = 0; i < blockStack.length; i++){
		if(blockStack[i].x-1 < 0){
		    return true;

		}

		if(that.grid[blockStack[i].y][blockStack[i].x].bind.left == false && that.grid[blockStack[i].y][blockStack[i].x-1] != undefined){
		    return true;
		}

	    }

	    return false;
	    
	}

	function detectRightMostEdgeCollision(x, y){
	    var blockStack = DFSStack(x, y);
	    var i;

	    for(i = 0; i < blockStack.length; i++){
		if(blockStack[i].x+1 >= that.gridWidth){
		    return true;

		}

		if(that.grid[blockStack[i].y][blockStack[i].x].bind.right == false && that.grid[blockStack[i].y][blockStack[i].x+1] != undefined){
		    return true;
		}

	    }

	    return false;
	    
	}
	
	function detectLowestEdgeCollision(x, y){
	    var blockStack = DFSStack(x, y);
	    var i;

	    for(i = 0; i < blockStack.length; i++){
		//console.log("testing: "+blockStack[i].y);

		if(blockStack[i].y+1 >= that.gridHeight){
		    //console.log("lowest edge: "+(blockStack[i].y));
		    return true;

		}

		else if(that.grid[blockStack[i].y][blockStack[i].x].bind.down == false && that.grid[blockStack[i].y+1][blockStack[i].x] != undefined){
		    return true;
		}

	    }

	    return false;

	}

	function hardDrop(x,y) {
	    while (centerBlock.dropped == false) {
	        if (detectLowestEdgeCollision(centerBlock.x, centerBlock.y) == false) {
	            cleanGrid();
	            dropBlock(centerBlock.x, centerBlock.y);
	            centerBlock.y = centerBlock.y + 1;
	            cleanGrid();

	        }

	        else {
	            centerBlock.dropped = true;

	        }

	    }
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
	    
	    //console.log("passed time interval!");
	    
	    //check if block has dropped and copy in a new one
	    if(centerBlock.dropped == true){
		    var newBlock = undefined;
		    var i;
		    var j;
		    var k;
		    var l;

		    var filled;
		
		    if(blockStack.length == 0){
			    blockStack.push(spawnBlock());
			    blockStack.push(spawnBlock());
		    }
				
		    newBlock = blockStack.pop();

		    if (blockStack.length < 1) {
			    blockStack.push(spawnBlock());
			    blockStack.push(spawnBlock());
		    }

		    //Assign Next Block for Display Purposes
		    that.nextBlock = blockStack[blockStack.length - 1];

		    //center block at top of grid
		    centerBlock.x = 4;
		    centerBlock.y = 1;

		    //check if centerd block is overlapped by old block (game over)
		    if(that.grid[centerBlock.y][centerBlock.x] != undefined){
		        that.gameOver = true;
		        return;

		    }

	        //Save grid state before new block comes
		    for (i = 0; i < that.gridHeight; i++) {
		        for (j = 0; j < that.gridWidth; j++) {
		            if (that.grid[i][j] == undefined) {
		                that.saveGrid[i][j] = undefined;
		            }
		            else {
		                that.saveGrid[i][j] = 1;
		            }
		        }
		    }


		    //copy block into grid
		    for(i = 0; i < 2; i++){
		        for(j = 3; j < 7; j++){
			    if(newBlock.grid[i][j-3] != undefined){
			        //console.log("copying y:"+i+" x:"+j);
			        that.grid[i][j] = newBlock.grid[i][j-3];
			    
			    
			    }
			
		        }
		    
		    }
            
		    if (that.aiON === true) {
		        centerBlock.dropped = false;

		        //--------------------------------------------------------------
		        //
		        //           AI CODE
		        //
		        //--------------------------------------------------------------

		        //--------------------------------------------------------------
		        //     Rotation 0 Left Moves
		        //--------------------------------------------------------------
		        that.gameAI.moveChosen = false;

		        aiCount = 0;
		        while (detectLeftMostEdgeCollision(centerBlock.x, centerBlock.y) == false) {

		            aiCount++;

		            //Move block left
		            cleanGrid();
		            moveBlockLeft(centerBlock.x, centerBlock.y);
		            centerBlock.x = centerBlock.x - 1;
		            cleanGrid();

		            //Hard drop block
		            hardDrop(centerBlock.x, centerBlock.y);

		            //Score current grid
		            that.gameAI.scoreGrid(that.grid);

		            for (i = 0; i < (aiCount - 1) ; i++) {
		                that.gameAI.moves[moveIndex].move.push(moveBlockLeft);
		            }

		            that.gameAI.moves[moveIndex].move.push(moveBlockLeft);
		            that.gameAI.moves[moveIndex].move.push(hardDrop);

		            //Clear dropped block
		            for (i = 0; i < that.gridHeight; i++) {
		                for (j = 0; j < that.gridWidth; j++) {
		                    if (that.saveGrid[i][j] == undefined) {
		                        that.grid[i][j] = undefined;
		                    }
		                }
		            }

		            //Reset block to center with (centerBlock.x -1)
		            centerBlock.x = 4 - aiCount;
		            centerBlock.y = 1;

		            //copy block into grid
		            for (i = 0; i < 2; i++) {
		                for (j = 3; j < 7; j++) {
		                    if (newBlock.grid[i][j - 3] != undefined) {
		                        //console.log("copying y:"+i+" x:"+j);
		                        that.grid[i][j - aiCount] = newBlock.grid[i][j - 3];


		                    }

		                }

		            }

		            moveIndex++;

		            centerBlock.dropped = false;
		            //REPEAT
		        }

		        //--------------------------------------------------------------
		        //     RESET TO CENTER
		        //--------------------------------------------------------------
		        //Clear dropped block
		        for (i = 0; i < that.gridHeight; i++) {
		            for (j = 0; j < that.gridWidth; j++) {
		                if (that.saveGrid[i][j] == undefined) {
		                    that.grid[i][j] = undefined;
		                }
		            }
		        }

		        //Reset block to center with (centerBlock.x -1)
		        centerBlock.x = 4;
		        centerBlock.y = 1;

		        aiCount = 0;

		        //copy block into grid
		        for (i = 0; i < 2; i++) {
		            for (j = 3; j < 7; j++) {
		                if (newBlock.grid[i][j - 3] != undefined) {
		                    //console.log("copying y:"+i+" x:"+j);
		                    that.grid[i][j - aiCount] = newBlock.grid[i][j - 3];


		                }

		            }

		        }
		        //--------------------------------------------------------------
		        //     Rotation 0 Right Moves
		        //--------------------------------------------------------------
		        centerF = false;
		        while (detectRightMostEdgeCollision(centerBlock.x, centerBlock.y) == false) {

		            if (centerF == true) {
		                aiCount++;

		                //Move block right
		                cleanGrid();
		                moveBlockRight(centerBlock.x, centerBlock.y);
		                centerBlock.x = centerBlock.x + 1;
		                cleanGrid();

		            }

		            //Hard drop block
		            hardDrop(centerBlock.x, centerBlock.y);

		            //Score current grid
		            that.gameAI.scoreGrid(that.grid);

		            for (i = 0; i < (aiCount) ; i++) {
		                that.gameAI.moves[moveIndex].move.push(moveBlockRight);
		            }

		            that.gameAI.moves[moveIndex].move.push(hardDrop);

		            //Clear dropped block
		            for (i = 0; i < that.gridHeight; i++) {
		                for (j = 0; j < that.gridWidth; j++) {
		                    if (that.saveGrid[i][j] == undefined) {
		                        that.grid[i][j] = undefined;
		                    }
		                }
		            }

		            //Reset block to center with (centerBlock.x -1)
		            centerBlock.x = 4 + aiCount;
		            centerBlock.y = 1;

		            //copy block into grid
		            for (i = 0; i < 2; i++) {
		                for (j = 3; j < 7; j++) {
		                    if (newBlock.grid[i][j - 3] != undefined) {
		                        //console.log("copying y:"+i+" x:"+j);
		                        that.grid[i][j + aiCount] = newBlock.grid[i][j - 3];


		                    }

		                }

		            }

		            moveIndex++;

		            centerF = true;
		            centerBlock.dropped = false;
		            //REPEAT
		        }

		        //--------------------------------------------------------------
		        //     RESET TO CENTER
		        //--------------------------------------------------------------

		        //Clear dropped block
		        for (i = 0; i < that.gridHeight; i++) {
		            for (j = 0; j < that.gridWidth; j++) {
		                if (that.saveGrid[i][j] == undefined) {
		                    that.grid[i][j] = undefined;
		                }
		            }
		        }

		        //Reset block to center with (centerBlock.x -1)
		        centerBlock.x = 4;
		        centerBlock.y = 1;

		        aiCount = 0;

		        //copy block into grid
		        for (i = 0; i < 2; i++) {
		            for (j = 3; j < 7; j++) {
		                if (newBlock.grid[i][j - 3] != undefined) {
		                    //console.log("copying y:"+i+" x:"+j);
		                    that.grid[i][j - aiCount] = newBlock.grid[i][j - 3];


		                }

		            }

		        }

		        //--------------------------------------------------------------
		        //     Rotation 1 Left Moves
		        //--------------------------------------------------------------
		        while (detectLeftMostEdgeCollision(centerBlock.x, centerBlock.y) == false) {

		            aiCount++;

		            if (aiCount === 1) {
		                //Rotate Right
		                cleanGrid();
		                rotateBlockRight(centerBlock.x, centerBlock.y);
		                cleanGrid();
		            }

		            //Move block left
		            cleanGrid();
		            moveBlockLeft(centerBlock.x, centerBlock.y);
		            centerBlock.x = centerBlock.x - 1;
		            cleanGrid();

		            //Hard drop block
		            hardDrop(centerBlock.x, centerBlock.y);

		            //Score current grid
		            that.gameAI.scoreGrid(that.grid);

		            that.gameAI.moves[moveIndex].move.push(rotateBlockRight);

		            for (i = 0; i < (aiCount - 1) ; i++) {
		                that.gameAI.moves[moveIndex].move.push(moveBlockLeft);
		            }

		            that.gameAI.moves[moveIndex].move.push(moveBlockLeft);
		            that.gameAI.moves[moveIndex].move.push(hardDrop);

		            //Clear dropped block
		            for (i = 0; i < that.gridHeight; i++) {
		                for (j = 0; j < that.gridWidth; j++) {
		                    if (that.saveGrid[i][j] == undefined) {
		                        that.grid[i][j] = undefined;
		                    }
		                }
		            }

		            //Reset block to center with (centerBlock.x - aiCount)
		            centerBlock.x = 4;
		            centerBlock.y = 1;

		            //copy block into grid
		            for (i = 0; i < 2; i++) {
		                for (j = 3; j < 7; j++) {
		                    if (newBlock.grid[i][j - 3] != undefined) {
		                        //console.log("copying y:"+i+" x:"+j);
		                        that.grid[i][j] = newBlock.grid[i][j - 3];


		                    }

		                }

		            }



		            //Rotate Right
		            cleanGrid();
		            rotateBlockRight(centerBlock.x, centerBlock.y);
		            cleanGrid();

		            for (i = 0; i < aiCount; i++) {
		                //Move block left
		                cleanGrid();
		                moveBlockLeft(centerBlock.x, centerBlock.y);
		                centerBlock.x = centerBlock.x - 1;
		                cleanGrid();
		            }

		            moveIndex++;

		            centerBlock.dropped = false;
		            //REPEAT
		        }

		        //--------------------------------------------------------------
		        //     RESET TO CENTER
		        //--------------------------------------------------------------

		        //Clear dropped block
		        for (i = 0; i < that.gridHeight; i++) {
		            for (j = 0; j < that.gridWidth; j++) {
		                if (that.saveGrid[i][j] == undefined) {
		                    that.grid[i][j] = undefined;
		                }
		            }
		        }

		        //Reset block to center with (centerBlock.x -1)
		        centerBlock.x = 4;
		        centerBlock.y = 1;

		        aiCount = 0;

		        //copy block into grid
		        for (i = 0; i < 2; i++) {
		            for (j = 3; j < 7; j++) {
		                if (newBlock.grid[i][j - 3] != undefined) {
		                    //console.log("copying y:"+i+" x:"+j);
		                    that.grid[i][j - aiCount] = newBlock.grid[i][j - 3];


		                }

		            }

		        }
		        //--------------------------------------------------------------
		        //     Rotation 1 Right Moves
		        //--------------------------------------------------------------
		        centerF = false;
		        while (detectRightMostEdgeCollision(centerBlock.x, centerBlock.y) == false) {

		            if (centerF == true) {
		                aiCount++;

		                //Move block right
		                cleanGrid();
		                moveBlockRight(centerBlock.x, centerBlock.y);
		                centerBlock.x = centerBlock.x + 1;
		                cleanGrid();

		            }

		            if (aiCount === 0) {
		                //Rotate Right
		                cleanGrid();
		                rotateBlockRight(centerBlock.x, centerBlock.y);
		                cleanGrid();
		            }

		            //Hard drop block
		            hardDrop(centerBlock.x, centerBlock.y);

		            //Score current grid
		            that.gameAI.scoreGrid(that.grid);

		            that.gameAI.moves[moveIndex].move.push(rotateBlockRight);

		            for (i = 0; i < (aiCount) ; i++) {
		                that.gameAI.moves[moveIndex].move.push(moveBlockRight);
		            }

		            that.gameAI.moves[moveIndex].move.push(hardDrop);

		            //Clear dropped block
		            for (i = 0; i < that.gridHeight; i++) {
		                for (j = 0; j < that.gridWidth; j++) {
		                    if (that.saveGrid[i][j] == undefined) {
		                        that.grid[i][j] = undefined;
		                    }
		                }
		            }

		            //Reset block to center with (centerBlock.x -1)
		            centerBlock.x = 4;
		            centerBlock.y = 1;

		            //copy block into grid
		            for (i = 0; i < 2; i++) {
		                for (j = 3; j < 7; j++) {
		                    if (newBlock.grid[i][j - 3] != undefined) {
		                        //console.log("copying y:"+i+" x:"+j);
		                        that.grid[i][j] = newBlock.grid[i][j - 3];


		                    }

		                }

		            }

		            //Rotate Right
		            cleanGrid();
		            rotateBlockRight(centerBlock.x, centerBlock.y);
		            cleanGrid();

		            for (i = 0; i < aiCount; i++) {
		                //Move block left
		                cleanGrid();
		                moveBlockRight(centerBlock.x, centerBlock.y);
		                centerBlock.x = centerBlock.x + 1;
		                cleanGrid();
		            }

		            moveIndex++;
		            centerF = true;
		            centerBlock.dropped = false;
		            //REPEAT
		        }

		        //--------------------------------------------------------------
		        //     RESET TO CENTER
		        //--------------------------------------------------------------

		        //Clear dropped block
		        for (i = 0; i < that.gridHeight; i++) {
		            for (j = 0; j < that.gridWidth; j++) {
		                if (that.saveGrid[i][j] == undefined) {
		                    that.grid[i][j] = undefined;
		                }
		            }
		        }

		        //Reset block to center with (centerBlock.x -1)
		        centerBlock.x = 4;
		        centerBlock.y = 1;

		        aiCount = 0;

		        //copy block into grid
		        for (i = 0; i < 2; i++) {
		            for (j = 3; j < 7; j++) {
		                if (newBlock.grid[i][j - 3] != undefined) {
		                    //console.log("copying y:"+i+" x:"+j);
		                    that.grid[i][j - aiCount] = newBlock.grid[i][j - 3];


		                }

		            }

		        }
		        //--------------------------------------------------------------
		        //     Rotation 2 Left Moves
		        //--------------------------------------------------------------
		        while (detectLeftMostEdgeCollision(centerBlock.x, centerBlock.y) == false) {

		            aiCount++;

		            if (aiCount === 1) {
		                //Rotate Right
		                cleanGrid();
		                rotateBlockRight(centerBlock.x, centerBlock.y);
		                cleanGrid();

		                //Rotate Right
		                cleanGrid();
		                rotateBlockRight(centerBlock.x, centerBlock.y);
		                cleanGrid();
		            }

		            //Move block left
		            cleanGrid();
		            moveBlockLeft(centerBlock.x, centerBlock.y);
		            centerBlock.x = centerBlock.x - 1;
		            cleanGrid();

		            //Hard drop block
		            hardDrop(centerBlock.x, centerBlock.y);

		            //Score current grid
		            that.gameAI.scoreGrid(that.grid);

		            that.gameAI.moves[moveIndex].move.push(rotateBlockRight);
		            that.gameAI.moves[moveIndex].move.push(rotateBlockRight);

		            for (i = 0; i < (aiCount - 1) ; i++) {
		                that.gameAI.moves[moveIndex].move.push(moveBlockLeft);
		            }

		            that.gameAI.moves[moveIndex].move.push(moveBlockLeft);
		            that.gameAI.moves[moveIndex].move.push(hardDrop);

		            //Clear dropped block
		            for (i = 0; i < that.gridHeight; i++) {
		                for (j = 0; j < that.gridWidth; j++) {
		                    if (that.saveGrid[i][j] == undefined) {
		                        that.grid[i][j] = undefined;
		                    }
		                }
		            }

		            //Reset block to center with (centerBlock.x - aiCount)
		            centerBlock.x = 4;
		            centerBlock.y = 1;

		            //copy block into grid
		            for (i = 0; i < 2; i++) {
		                for (j = 3; j < 7; j++) {
		                    if (newBlock.grid[i][j - 3] != undefined) {
		                        //console.log("copying y:"+i+" x:"+j);
		                        that.grid[i][j] = newBlock.grid[i][j - 3];


		                    }

		                }

		            }



		            //Rotate Right
		            cleanGrid();
		            rotateBlockRight(centerBlock.x, centerBlock.y);
		            cleanGrid();

		            //Rotate Right
		            cleanGrid();
		            rotateBlockRight(centerBlock.x, centerBlock.y);
		            cleanGrid();

		            for (i = 0; i < aiCount; i++) {
		                //Move block left
		                cleanGrid();
		                moveBlockLeft(centerBlock.x, centerBlock.y);
		                centerBlock.x = centerBlock.x - 1;
		                cleanGrid();
		            }

		            moveIndex++;

		            centerBlock.dropped = false;
		            //REPEAT
		        }

		        //--------------------------------------------------------------
		        //     RESET TO CENTER
		        //--------------------------------------------------------------

		        //Clear dropped block
		        for (i = 0; i < that.gridHeight; i++) {
		            for (j = 0; j < that.gridWidth; j++) {
		                if (that.saveGrid[i][j] == undefined) {
		                    that.grid[i][j] = undefined;
		                }
		            }
		        }

		        //Reset block to center with (centerBlock.x -1)
		        centerBlock.x = 4;
		        centerBlock.y = 1;

		        aiCount = 0;

		        //copy block into grid
		        for (i = 0; i < 2; i++) {
		            for (j = 3; j < 7; j++) {
		                if (newBlock.grid[i][j - 3] != undefined) {
		                    //console.log("copying y:"+i+" x:"+j);
		                    that.grid[i][j - aiCount] = newBlock.grid[i][j - 3];


		                }

		            }

		        }
		        //--------------------------------------------------------------
		        //     Rotation 2 Right Moves
		        //--------------------------------------------------------------
		        centerF = false;
		        while (detectRightMostEdgeCollision(centerBlock.x, centerBlock.y) == false) {

		            if (centerF == true) {
		                aiCount++;

		                //Move block right
		                cleanGrid();
		                moveBlockRight(centerBlock.x, centerBlock.y);
		                centerBlock.x = centerBlock.x + 1;
		                cleanGrid();

		            }

		            if (aiCount === 0) {
		                //Rotate Right
		                cleanGrid();
		                rotateBlockRight(centerBlock.x, centerBlock.y);
		                cleanGrid();

		                //Rotate Right
		                cleanGrid();
		                rotateBlockRight(centerBlock.x, centerBlock.y);
		                cleanGrid();
		            }

		            //Hard drop block
		            hardDrop(centerBlock.x, centerBlock.y);

		            //Score current grid
		            that.gameAI.scoreGrid(that.grid);

		            that.gameAI.moves[moveIndex].move.push(rotateBlockRight);
		            that.gameAI.moves[moveIndex].move.push(rotateBlockRight);

		            for (i = 0; i < (aiCount) ; i++) {
		                that.gameAI.moves[moveIndex].move.push(moveBlockRight);
		            }

		            that.gameAI.moves[moveIndex].move.push(hardDrop);

		            //Clear dropped block
		            for (i = 0; i < that.gridHeight; i++) {
		                for (j = 0; j < that.gridWidth; j++) {
		                    if (that.saveGrid[i][j] == undefined) {
		                        that.grid[i][j] = undefined;
		                    }
		                }
		            }

		            //Reset block to center with (centerBlock.x -1)
		            centerBlock.x = 4;
		            centerBlock.y = 1;

		            //copy block into grid
		            for (i = 0; i < 2; i++) {
		                for (j = 3; j < 7; j++) {
		                    if (newBlock.grid[i][j - 3] != undefined) {
		                        //console.log("copying y:"+i+" x:"+j);
		                        that.grid[i][j] = newBlock.grid[i][j - 3];


		                    }

		                }

		            }

		            //Rotate Right
		            cleanGrid();
		            rotateBlockRight(centerBlock.x, centerBlock.y);
		            cleanGrid();

		            //Rotate Right
		            cleanGrid();
		            rotateBlockRight(centerBlock.x, centerBlock.y);
		            cleanGrid();

		            for (i = 0; i < aiCount; i++) {
		                //Move block left
		                cleanGrid();
		                moveBlockRight(centerBlock.x, centerBlock.y);
		                centerBlock.x = centerBlock.x + 1;
		                cleanGrid();
		            }

		            moveIndex++;
		            centerF = true;
		            centerBlock.dropped = false;
		            //REPEAT
		        }

		        //--------------------------------------------------------------
		        //     RESET TO CENTER
		        //--------------------------------------------------------------

		        //Clear dropped block
		        for (i = 0; i < that.gridHeight; i++) {
		            for (j = 0; j < that.gridWidth; j++) {
		                if (that.saveGrid[i][j] == undefined) {
		                    that.grid[i][j] = undefined;
		                }
		            }
		        }

		        //Reset block to center with (centerBlock.x -1)
		        centerBlock.x = 4;
		        centerBlock.y = 1;

		        aiCount = 0;

		        //copy block into grid
		        for (i = 0; i < 2; i++) {
		            for (j = 3; j < 7; j++) {
		                if (newBlock.grid[i][j - 3] != undefined) {
		                    //console.log("copying y:"+i+" x:"+j);
		                    that.grid[i][j - aiCount] = newBlock.grid[i][j - 3];


		                }

		            }

		        }

		        //--------------------------------------------------------------
		        //     Rotation 3 Left Moves
		        //--------------------------------------------------------------
		        while (detectLeftMostEdgeCollision(centerBlock.x, centerBlock.y) == false) {

		            aiCount++;

		            if (aiCount === 1) {
		                //Rotate Left
		                cleanGrid();
		                rotateBlockLeft(centerBlock.x, centerBlock.y);
		                cleanGrid();
		            }

		            //Move block left
		            cleanGrid();
		            moveBlockLeft(centerBlock.x, centerBlock.y);
		            centerBlock.x = centerBlock.x - 1;
		            cleanGrid();

		            //Hard drop block
		            hardDrop(centerBlock.x, centerBlock.y);

		            //Score current grid
		            that.gameAI.scoreGrid(that.grid);

		            that.gameAI.moves[moveIndex].move.push(rotateBlockLeft);

		            for (i = 0; i < (aiCount - 1) ; i++) {
		                that.gameAI.moves[moveIndex].move.push(moveBlockLeft);
		            }

		            that.gameAI.moves[moveIndex].move.push(moveBlockLeft);
		            that.gameAI.moves[moveIndex].move.push(hardDrop);

		            //Clear dropped block
		            for (i = 0; i < that.gridHeight; i++) {
		                for (j = 0; j < that.gridWidth; j++) {
		                    if (that.saveGrid[i][j] == undefined) {
		                        that.grid[i][j] = undefined;
		                    }
		                }
		            }

		            //Reset block to center with (centerBlock.x - aiCount)
		            centerBlock.x = 4;
		            centerBlock.y = 1;

		            //copy block into grid
		            for (i = 0; i < 2; i++) {
		                for (j = 3; j < 7; j++) {
		                    if (newBlock.grid[i][j - 3] != undefined) {
		                        //console.log("copying y:"+i+" x:"+j);
		                        that.grid[i][j] = newBlock.grid[i][j - 3];


		                    }

		                }

		            }



		            //Rotate Left
		            cleanGrid();
		            rotateBlockLeft(centerBlock.x, centerBlock.y);
		            cleanGrid();

		            for (i = 0; i < aiCount; i++) {
		                //Move block left
		                cleanGrid();
		                moveBlockLeft(centerBlock.x, centerBlock.y);
		                centerBlock.x = centerBlock.x - 1;
		                cleanGrid();
		            }

		            moveIndex++;

		            centerBlock.dropped = false;
		            //REPEAT
		        }

		        //--------------------------------------------------------------
		        //     RESET TO CENTER
		        //--------------------------------------------------------------

		        //Clear dropped block
		        for (i = 0; i < that.gridHeight; i++) {
		            for (j = 0; j < that.gridWidth; j++) {
		                if (that.saveGrid[i][j] == undefined) {
		                    that.grid[i][j] = undefined;
		                }
		            }
		        }

		        //Reset block to center with (centerBlock.x -1)
		        centerBlock.x = 4;
		        centerBlock.y = 1;

		        aiCount = 0;

		        //copy block into grid
		        for (i = 0; i < 2; i++) {
		            for (j = 3; j < 7; j++) {
		                if (newBlock.grid[i][j - 3] != undefined) {
		                    //console.log("copying y:"+i+" x:"+j);
		                    that.grid[i][j - aiCount] = newBlock.grid[i][j - 3];


		                }

		            }

		        }
		        //--------------------------------------------------------------
		        //     Rotation 3 Right Moves
		        //--------------------------------------------------------------
		        centerF = false;
		        while (detectRightMostEdgeCollision(centerBlock.x, centerBlock.y) == false) {

		            if (centerF == true) {
		                aiCount++;

		                //Move block right
		                cleanGrid();
		                moveBlockRight(centerBlock.x, centerBlock.y);
		                centerBlock.x = centerBlock.x + 1;
		                cleanGrid();

		            }

		            if (aiCount === 0) {
		                //Rotate Left
		                cleanGrid();
		                rotateBlockLeft(centerBlock.x, centerBlock.y);
		                cleanGrid();
		            }

		            //Hard drop block
		            hardDrop(centerBlock.x, centerBlock.y);

		            //Score current grid
		            that.gameAI.scoreGrid(that.grid);

		            that.gameAI.moves[moveIndex].move.push(rotateBlockLeft);

		            for (i = 0; i < (aiCount) ; i++) {
		                that.gameAI.moves[moveIndex].move.push(moveBlockRight);
		            }

		            that.gameAI.moves[moveIndex].move.push(hardDrop);

		            //Clear dropped block
		            for (i = 0; i < that.gridHeight; i++) {
		                for (j = 0; j < that.gridWidth; j++) {
		                    if (that.saveGrid[i][j] == undefined) {
		                        that.grid[i][j] = undefined;
		                    }
		                }
		            }

		            //Reset block to center with (centerBlock.x -1)
		            centerBlock.x = 4;
		            centerBlock.y = 1;

		            //copy block into grid
		            for (i = 0; i < 2; i++) {
		                for (j = 3; j < 7; j++) {
		                    if (newBlock.grid[i][j - 3] != undefined) {
		                        //console.log("copying y:"+i+" x:"+j);
		                        that.grid[i][j] = newBlock.grid[i][j - 3];


		                    }

		                }

		            }

		            //Rotate Left
		            cleanGrid();
		            rotateBlockLeft(centerBlock.x, centerBlock.y);
		            cleanGrid();

		            for (i = 0; i < aiCount; i++) {
		                //Move block left
		                cleanGrid();
		                moveBlockRight(centerBlock.x, centerBlock.y);
		                centerBlock.x = centerBlock.x + 1;
		                cleanGrid();
		            }

		            moveIndex++;
		            centerF = true;
		            centerBlock.dropped = false;
		            //REPEAT
		        }
		        //--------------------------------------------------------------
		        //  FINAL RESET TO CENTER
		        //--------------------------------------------------------------

		        moveIndex = 0;

		        //Clear dropped block
		        for (i = 0; i < that.gridHeight; i++) {
		            for (j = 0; j < that.gridWidth; j++) {
		                if (that.saveGrid[i][j] == undefined) {
		                    that.grid[i][j] = undefined;
		                }
		            }
		        }

		        //Reset block to center with (centerBlock.x -1)
		        centerBlock.x = 4;
		        centerBlock.y = 1;

		        //copy block into grid
		        for (i = 0; i < 2; i++) {
		            for (j = 3; j < 7; j++) {
		                if (newBlock.grid[i][j - 3] != undefined) {
		                    //console.log("copying y:"+i+" x:"+j);
		                    that.grid[i][j] = newBlock.grid[i][j - 3];


		                }

		            }

		        }

		        //--------------------------------------------------------------
		        //     Compare Moves and Choose Best Move
		        //--------------------------------------------------------------

		        that.gameAI.compareMoves();

		        //--------------------------------------------------------------
		        //     END OF AI MOVE DECISION CODE
		        //--------------------------------------------------------------

		    } //END OF IF STATEMENT FOR aiON

		    centerBlock.dropped = false;
		
	    } // END OF if(centerBlock.dropped == true){
	    
	    if(blockStack.length < 1){
		blockStack.push(spawnBlock());
		
	    }

	    if (that.aiON === true) {
	        //--------------------------------------------------------------
	        //     If AI MODE, AI Will Choose Moves
	        //--------------------------------------------------------------

	        //Run Movement Function
	        cleanGrid();
	        that.gameAI.moves[0].move[0](centerBlock.x, centerBlock.y);
	        if (that.gameAI.moves[0].move[0] === moveBlockLeft) {
	            centerBlock.x = centerBlock.x - 1;
	        }
	        else if (that.gameAI.moves[0].move[0] === moveBlockRight) {
	            centerBlock.x = centerBlock.x + 1;
	        }
	        cleanGrid();

	        //Remove Used Move
	        that.gameAI.moves[0].move.splice(0, 1);

	        if (that.gameAI.moves[0].move.length === 0) {
	            that.gameAI.moves.length = 0;
	        }

	    }

	    //rotate
	    if(rotRight == true && rotLeft == false){
		cleanGrid();
		rotateBlockRight(centerBlock.x, centerBlock.y);
		cleanGrid();
		
		//Assignment_4.playSound('media/sounds/SFX_PieceRotateLR', 1.0);
		
	    }
	    
	    else if(rotLeft == true && rotRight == false){
		cleanGrid();
		rotateBlockLeft(centerBlock.x, centerBlock.y);
		cleanGrid();		
		
		//Assignment_4.playSound('media/sounds/SFX_PieceRotateLR', 1.0);
		
	    }
	    
	    //move
	    if(movRight == true && movLeft == false){
		if(detectRightMostEdgeCollision(centerBlock.x, centerBlock.y) == false){
		    cleanGrid();
		    moveBlockRight(centerBlock.x, centerBlock.y);
		    centerBlock.x = centerBlock.x + 1;
		    cleanGrid();

		    //Assignment_4.playSound('media/sounds/SFX_PieceMoveLR', 1.0);
		    
		}
		
	    }
	    
	    else if(movLeft == true && movRight == false){
		if(detectLeftMostEdgeCollision(centerBlock.x, centerBlock.y) == false){
		    cleanGrid();
		    moveBlockLeft(centerBlock.x, centerBlock.y);
		    centerBlock.x = centerBlock.x - 1;
		    cleanGrid();
		    
		    //Assignment_4.playSound('media/sounds/SFX_PieceMoveLR', 1.0);
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

		else{
		    centerBlock.dropped = true;
		    //Assignment_4.playSound('media/sounds/SFX_PieceTouchDown', 1.0);
		
		}
		
	    }

	    
	    
	    else if(hardDrp == true && softDrp == false){
		while(centerBlock.dropped == false){
		    if(detectLowestEdgeCollision(centerBlock.x, centerBlock.y) == false){
			cleanGrid();
			dropBlock(centerBlock.x, centerBlock.y);
			centerBlock.y = centerBlock.y+1;
			cleanGrid();
			
		    }
		    
		    else{
			centerBlock.dropped = true;
			//Assignment_4.playSound('media/sounds/SFX_PieceHardDrop', 1.0);
			
		    }

		}
		
	    }
	    
	    //reset user inputs
	    rotRight = false;
	    rotLeft = false;
	    movRight = false;
	    movLeft = false;
	    softDrp = false;
	    hardDrp = false;
	
	    if(accumulatedTime >= timeInterval){
    
		accumulatedTime = 0;

		//drop block by gravity				
		if(detectLowestEdgeCollision(centerBlock.x, centerBlock.y) == false && centerBlock.dropped == false){
		    cleanGrid();
		    dropBlock(centerBlock.x, centerBlock.y);
		    centerBlock.y = centerBlock.y+1;
		    cleanGrid();
		    
		}
		
		else{
		    centerBlock.dropped = true;
		    //Assignment_4.playSound('media/sounds/SFX_PieceTouchDown', 1.0);
		    
		}

		//check for filled row
		for(i = 0; i < that.gridHeight; i++){
		    filled = true;

		    for(j = 0; j < that.gridWidth; j++){
			if(that.grid[i][j] == undefined){
			    filled = false;
			    break;
			    
			}

		    }

		    //clear filled row
		    if(filled == true){
			for(j = 0; j < that.gridWidth; j++){
			    if(i+1 < that.gridHeight && that.grid[i+1][j] != undefined){
				that.grid[i+1][j].bind.up = false;

			    }

			    if(i-1 > 0 && that.grid[i-1][j] != undefined){
				that.grid[i-1][j].bind.down = false;

			    }

			    that.grid[i][j] = undefined;

			}

			that.clearedRows = that.clearedRows+1;
			that.scoreSum += 100;

			//Assignment_4.playSound('media/sounds/LineFilled', 1.0);
			
			//move down all above
			for(l = 0; l < that.gridWidth; l++){
			    if(that.grid[i-1][l] != undefined){
				cleanGrid();
				dropBlock(l, i-1);
				cleanGrid();

			    }

			}
			

			/*
			  for(k = i-1; k > 0; k--){
			  for(l = 0; l < that.gridWidth; l++){
			  if(that.grid[k][l] != undefined){
			  var currentBlock = {
			  x: l,
			  y: k,
			  dropped: false

			  };
			  var temp;

			  while(currentBlock.dropped == false){
			  if(detectLowestEdgeCollision(currentBlock.x, currentBlock.y) == false){
			  cleanGrid();
			  //console.log("dropping ["+currentBlock.y+", "+currentBlock.x+"]");
			  dropBlock(currentBlock.x, currentBlock.y);
			  currentBlock.y = currentBlock.y+1;
			  cleanGrid();
			  
			  }
			  
			  else{
			  currentBlock.dropped = true;
			  console.log("block ["+currentBlock.y+", "+currentBlock.x+"]  dropped!");
			  Assignment_4.playSound('media/sounds/SFX_PieceTouchDown', 1.0);
			  
			  }

			  }

			  }

			  }

			  }

			*/

		    }

		}	    
	    
	    }
		
	}
	
	return that;
	
    }
    
    return {
	GameEngine: GameEngine
	
    };
    
}(Assignment_4.sovlerAI));
