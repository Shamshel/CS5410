Assignment_4.engine = (function(aI, particles) {
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
    
    function GameEngine(aiOnFlag) {
	var that = {
	    grid: [],
	    gameOver: false,
	    aiON: aiOnFlag,
	    level: 0,
	    scoreSum: 0,
	    nextBlock: undefined,
	    gridWidth: 10,
	    gridHeight: 22,
	    clearedRows: 0,
	    gameAI: aI.aiJarvis(),
            saveGrid: [],
	    particles: []
	    
	},
	blockStack = [],
	moveQueue = [],
	centerBlock = {
	    dropped: true,
	    x: 0,
	    y: 0
	    
	},
	timeInterval = 500,
    timeIntLookup  = [500,450,410,360,330,290,280,260,250,240,230,230,230,225,225,225,220,220,220,215],
	accumulatedTime = 0,
	aiCount = 0,
    scoreCount = 0,
	moveIndex = 0,
	centerF = false,
	rotRight = false,
	rotRightServiced = false,
	rotLeft = false,
	rotLeftServiced = false,
	movRight = false,
	movRightServiced = false,
	movLeft = false,
	movLeftServiced = false,
	softDrp = false,
	softDrpServiced = false,
	hardDrp = false,
	hardDrpServiced = false;
	
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
	    cleanGrid();
	    var blockStack = DFSStack(x, y);
	    var point;

	    while(blockStack.length > 0){
		point = blockStack.pop();

		//delay drop
		if(that.grid[point.y+1][point.x] != undefined){
		    if(that.grid[point.y][point.x].bind.down == true){
			blockStack.unshift(point);

		    }

		}

		else{
		    that.grid[point.y+1][point.x] = that.grid[point.y][point.x];
		    that.grid[point.y][point.x] = undefined;

		}

	    }

	    cleanGrid();


	}

	function moveBlockLeft(x, y){
	    cleanGrid();

	    var blockStack = DFSStack(x, y);
	    var point;

	    while(blockStack.length > 0){
		point = blockStack.pop();

		//delay move
		if(that.grid[point.y][point.x-1] != undefined){
		    if(that.grid[point.y][point.x].bind.left == true){
			blockStack.unshift(point);

		    }

		}

		else{
		    that.grid[point.y][point.x-1] = that.grid[point.y][point.x];
		    that.grid[point.y][point.x] = undefined;

		}

	    }
	    
	    cleanGrid();

	}
	
	function moveBlockRight(x, y){
	    cleanGrid();
	    var blockStack = DFSStack(x, y);
	    var point;

	    while(blockStack.length > 0){
		point = blockStack.pop();

		//delay move
		if(that.grid[point.y][point.x+1] != undefined){
		    if(that.grid[point.y][point.x].bind.right == true){
			blockStack.unshift(point);

		    }

		}

		else{
		    that.grid[point.y][point.x+1] = that.grid[point.y][point.x];
		    that.grid[point.y][point.x] = undefined;

		}

	    }	    

	    cleanGrid();

	}

	function detectRotateBlockLeftCollision(x, y) { 
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

	    var done = false;
	    var i;

	    cleanGrid();

	    while(completeBlockStack.length > 0 && !collision){
		point = completeBlockStack.pop();

		deltaX = startX - point.x;
		deltaY = point.y - startY;

		if(that.grid[point.y][point.x].touched == 1){
		    done = true;

		    for(i = 0; i < completeBlockStack.length; i++){
			if(that.grid[completeBlockStack[i].y][completeBlockStack[i].x].touched == 0){
			    done = false;
			    break;

			}

		    }

		    if(done == true){
			//console.log("no collision detected!");
			cleanGrid();
			return false;

		    }

		}

		//check grid boundries
		else if(startY+deltaX >= that.gridHeight || startY+deltaX < 0 || startX+deltaY >= that.gridWidth || startX+deltaY < 0){
		    //console.log("edge collision detected!");
		    cleanGrid();
		    return true;

		}

		//grid point occupied
		else if(point.x != startX+deltaY && point.y != startY+deltaX && that.grid[startY+deltaX][startX+deltaY] != undefined){
		    collision = true;

		    //check if point is in the array
		    for(i = 0; i < completeBlockStack.length; i++){
			if(startX+deltaY == completeBlockStack[i].x && startY+deltaX == completeBlockStack[i].y){
			    //move the other blocks first
			    collision = false;
			    break;

			}

		    }

		    if(collision == true){
			//console.log("block collision detected!");
			cleanGrid();
			return true;

		    }

		}

		that.grid[point.y][point.x].touched = 1;
		completeBlockStack.unshift(point);
		
	    }

	    cleanGrid();
	    return false;

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

	    cleanGrid();

	}

	function detectRotateBlockRightCollision(x, y) {
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

	    var done = false;
	    var i;

	    cleanGrid();

	    while(completeBlockStack.length > 0 && !collision){
		point = completeBlockStack.pop();

		deltaX = point.x - startX;
		deltaY = startY - point.y;

		if(that.grid[point.y][point.x].touched == 1){
		    done = true;

		    for(i = 0; i < completeBlockStack.length; i++){
			if(that.grid[completeBlockStack[i].y][completeBlockStack[i].x].touched == 0){
			    done = false;
			    break;

			}

		    }

		    if(done == true){
			//console.log("no collision detected!");
			cleanGrid();
			return false;

		    }

		}

		//check grid boundries
		else if(startY+deltaX >= that.gridHeight || startY+deltaX < 0 || startX+deltaY >= that.gridWidth || startX+deltaY < 0){
		    //console.log("edge collision detected!");
		    cleanGrid();
		    return true;

		}

		//grid point occupied
		else if(point.x != startX+deltaY && point.y != startY+deltaX && that.grid[startY+deltaX][startX+deltaY] != undefined){
		    collision = true;

		    //check if point is in the array
		    for(i = 0; i < completeBlockStack.length; i++){
			if(startX+deltaY == completeBlockStack[i].x && startY+deltaX == completeBlockStack[i].y){
			    //move the other blocks first
			    collision = false;
			    break;

			}

		    }

		    if(collision == true){
			//console.log("block collision detected!");
			cleanGrid();
			return true;

		    }

		}

		that.grid[point.y][point.x].touched = 1;
		completeBlockStack.unshift(point);
		
	    }

	    cleanGrid();
	    return false;

	}

	function rotateBlockRight(x, y) {
//	    console.log("rotating ["+y+", "+x+"] right");
 
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

	    cleanGrid();

	    while(completeBlockStack.length > 0 && !collision){
		point = completeBlockStack.pop();

		deltaX = point.x - startX;
		deltaY = startY - point.y;

		//check grid boundries
		if(startY+deltaX >= that.gridHeight || startY+deltaX < 0 || startX+deltaY >= that.gridWidth || startX+deltaY < 0){
		    collision = true;

		}

		//grid point occupied
		else if(point.x != startX+deltaY && point.y != startY+deltaX && that.grid[startY+deltaX][startX+deltaY] != undefined){
		    collision = true;

		    //check if point is in the array
		    for(i = 0; i < completeBlockStack.length; i++){
			if(startX+deltaY == completeBlockStack[i].x && startY+deltaX == completeBlockStack[i].y){
			    //move the other blocks first
			    completeBlockStack.unshift(point);
			    collision = false;
			    break;

			}

		    }

		}

		//grid point unoccupied and within bounds
		else{
		    binding = that.grid[point.y][point.x].bind;

/*		    console.log("bindings:");
		    console.log("left: "+binding.left);
		    console.log("right: "+binding.right);
		    console.log("up: "+binding.up);
		    console.log("down: "+binding.down);
*/
		    //spawn new block
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

	    cleanGrid();
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

	    cleanGrid();

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

	    cleanGrid();

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

	    cleanGrid();

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

	    cleanGrid();

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

	function gravity() {
	    var filled;
	    var i,
	    j,
	    k,
	    l;

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

		    //Add to row
		    that.clearedRows++;
		    Assignment_4.playSound('media/sounds/LineFilled', 1.0, false);

		    //Increase score count
		    scoreCount++;

		    //Update Level
		    if ((that.clearedRows % 10) === 0 && that.clearedRows != 0) {
			that.level++;

                        //Increase Speed 
			if (that.level <= 19) {
			    timeInterval = timeIntLookup[that.level];
			}
			else {
			    timeInterval = timeIntLookup[19];
			}

		    }

		    for(j = 0; j < that.gridWidth; j++){
			//spawn particle on deleted block
			var pos = particles.Position();
			pos.x = j;
			pos.y = i;
			pos.vector.x = 0;
			pos.vector.y = 0;
			
			
			that.particles.push(particles.SmokeParticle());
			
			that.particles[that.particles.length-1].makeEmitter(pos, 500);

			//delete block
			that.grid[i][j] = undefined;

			if(i+1 < that.gridHeight){
			    if(that.grid[i+1][j] != undefined){
				that.grid[i+1][j].bind.up = false;

			    }   

			}   

			if(i-1 > 0){
			    if(that.grid[i-1][j] != undefined){
				that.grid[i-1][j].bind.down = false;

			    }

			}   

		    }

		    for(k = i-1; k > 0; k--){
			for(l = 0; l < that.gridWidth; l++){
			    if(that.grid[k][l] != undefined){
				var currentBlock = {
				    x: l,
				    y: k,
				    dropped: false

				};

				while(currentBlock.dropped == false){
				    if(detectLowestEdgeCollision(currentBlock.x, currentBlock.y) == false){
					//console.log("dropping ["+currentBlock.y+", "+currentBlock.x+"]");
					dropBlock(currentBlock.x, currentBlock.y);
					currentBlock.y = currentBlock.y+1;
					
				    }
				    
				    else{
					currentBlock.dropped = true;
					//console.log("block ["+currentBlock.y+", "+currentBlock.x+"]  dropped!");
					Assignment_4.playSound('media/sounds/SFX_PieceTouchDown', 1.0,false);
					
				    }

				}

			    }

			}

		    }

		    //scan from the bottom of the grid to detect chain reactions
		    i = 0;

		}

		//ADD TO TOTAL SCORE
		//One Lines Cleared
		if (scoreCount === 1) {
		    that.scoreSum += 40 * (that.level + 1);
		}
		//Two Lines Cleared
		else if (scoreCount === 2) {
		    that.scoreSum += 100 * (that.level + 1);
		}
		//Three Lines Cleared
		else if (scoreCount === 3) {
		    that.scoreSum += 300 * (that.level + 1);
		}
		//Four Lines Cleared
		else if (scoreCount >= 4) {
		    that.scoreSum += 1200 * (that.level + 1);
		}

		//Reset Score Count
		scoreCount = 0;
		

	    } //END OF "if(accumulatedTime >= timeInterval)"

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

	    //spawn particles at location of emitter particles
	    for(i = that.particles.length-1; i >= 0; i--){
		if(that.particles[i].getEmitter()){
		    var result = that.particles[i].spawnParticles(1, 100);
		    that.particles = that.particles.concat(result);
		    
		}
		
	    }
	    
	    //update particle positions
	    for(i = 0; i < that.particles.length; i++){
		//console.log("i: "+i);
		if(that.particles != false){
		    //console.log("particle "+i+" is "+that.particles[i]);
		    //var pos = that.particles[i].getPosition();
		    //console.log("particle "+i+" is at ["+pos.y+", "+pos.x+"]");
		    that.particles[i].update(elapsedTime);
		    
		}
		
	    }
	    
	    //remove dead particles
	    for(i = that.particles.length-1; i > -1; i--){
		if(that.particles[i].getTTL() <= 0 && !that.particles[i].getImmortal()){
		    that.particles.splice(i, 1);
		    
		}
		
	    }

	    //rotation guards
	    if(rotRight == false){
		rotRightServiced = false;

	    }

	    else if(rotRightServiced == true){
		rotRight = false;

	    }

	    if(rotLeft == false){
		rotLeftServiced = false;

	    }

	    else if(rotLeftServiced == true){
		rotLeft = false;

	    }

	    //drop guards
	    if(softDrp == false){
		softDrpServiced = false;

	    }

	    else if(softDrpServiced == true){
		softDrp = false;

	    }

	    if(hardDrp == false){
		hardDrpServiced = false;

	    }

	    else if(hardDrpServiced == true){
		hardDrp = false;

	    }

	    //movement guards
	    if(movLeft == false){
		movLeftServiced = false;

	    }

	    else if(movLeftServiced == true){
		movLeft = false;

	    }

	    if(movRight == false){
		movRightServiced = false;

	    }

	    else if(movRightServiced == true){
		movRight = false;

	    }

	    if(accumulatedTime < timeInterval/4){
		return;
		
	    }

	    //check if block has dropped and copy in a new one
	    if(centerBlock.dropped == true){
		    var newBlock = undefined;
		    var i;
		    var j;
		    var k;
		    var l;
		
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
					//spawn particle on this block
					

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

	    if (that.aiON === true && accumulatedTime >= timeInterval) {
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
	        else if (that.gameAI.moves[0].move[0] === rotateBlockRight) {
	            Assignment_4.playSound('media/sounds/SFX_PieceRotateLR', 1.0, false);
	        }
	        else if (that.gameAI.moves[0].move[0] === rotateBlockLeft) {
	            Assignment_4.playSound('media/sounds/SFX_PieceRotateLR', 1.0, false);
	        }


	        cleanGrid();

	        //Remove Used Move
	        that.gameAI.moves[0].move.splice(0, 1);

	        if (that.gameAI.moves[0].move.length === 0) {
	            that.gameAI.moves.length = 0;
	        }

	    }

	    //move
	    if(movRight == true && movLeft == false){
		if(detectRightMostEdgeCollision(centerBlock.x, centerBlock.y) == false){
		    moveBlockRight(centerBlock.x, centerBlock.y);
		    centerBlock.x = centerBlock.x + 1;

		    //Leave commented
		    //Assignment_4.playSound('media/sounds/SFX_PieceMoveLR', 1.0,false);
		    
		}

		movRightServiced = true;
		
	    }
	    
	    else if(movLeft == true && movRight == false){
		if(detectLeftMostEdgeCollision(centerBlock.x, centerBlock.y) == false){
		    moveBlockLeft(centerBlock.x, centerBlock.y);
		    centerBlock.x = centerBlock.x - 1;
		    
		    //Leave commented
		    //Assignment_4.playSound('media/sounds/SFX_PieceMoveLR', 1.0,false);
		}

		movLeftServiced = true;
		
	    }
	    
	    //rotate
	    if(rotRight == true && rotLeft == false){
		if(detectRotateBlockRightCollision(centerBlock.x, centerBlock.y) == false){
		    rotateBlockRight(centerBlock.x, centerBlock.y);

		}

		rotRightServiced = true;
		Assignment_4.playSound('media/sounds/SFX_PieceRotateLR', 1.0,false);
		
	    }
	    
	    else if(rotLeft == true && rotRight == false){
		if(detectRotateBlockLeftCollision(centerBlock.x, centerBlock.y) == false){
		    rotateBlockLeft(centerBlock.x, centerBlock.y);

		}
		
		rotLeftServiced = true;
		Assignment_4.playSound('media/sounds/SFX_PieceRotateLR', 1.0,false);
		
	    }

	    //drop
	    if(softDrp == true && hardDrp == false){
		if(detectLowestEdgeCollision(centerBlock.x, centerBlock.y) == false){
		    dropBlock(centerBlock.x, centerBlock.y);
		    centerBlock.y = centerBlock.y+1;

		}

		else{
		    centerBlock.dropped = true;
		    Assignment_4.playSound('media/sounds/SFX_PieceTouchDown', 1.0,false);
		
		}

		gravity();

		softDrpServiced = true;
		
	    }

	    
	    
	    else if(hardDrp == true && softDrp == false){
		while(centerBlock.dropped == false){
		    if(detectLowestEdgeCollision(centerBlock.x, centerBlock.y) == false){
			dropBlock(centerBlock.x, centerBlock.y);
			centerBlock.y = centerBlock.y+1;
			
		    }
		    
		    else{
			centerBlock.dropped = true;

			gravity();
            
            //Do not need this sound, leave commented
		    //Assignment_4.playSound('media/sounds/SFX_PieceHardDrop', 1.0,false);
			
		    }

		}

		hardDrpServiced = true;

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
		        dropBlock(centerBlock.x, centerBlock.y);
		        centerBlock.y = centerBlock.y+1;
		    
		    }
		
		    else{
		        centerBlock.dropped = true;
		        Assignment_4.playSound('media/sounds/SFX_PieceTouchDown', 1.0,false);

		        gravity();

		    }	    
		    
	    }
	    
	} //END OF "that.update"
	
	return that;
	
    }
    
    return {
	GameEngine: GameEngine
	
    };
    
}(Assignment_4.sovlerAI, Assignment_4.particles));

