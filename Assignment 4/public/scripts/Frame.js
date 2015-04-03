Assignment_4.frame = (function() {
	'use strict';
	
	console.log("initializing frame!");

	//Border object
	function Border(){
		var that = {
			x : 0,
			y : 0,
			height : 0,
			width : 0,
			thickness : 0
			
		};
		
		that.initialize = function(x, y, width, height) {
			that.x = x;
			that.y = y;
			that.height = height;
			that.width = width;
			
		};
		
		that.render = function(context) {
		    context.save();

			context.beginPath();
			context.lineWidth = '6';
			context.strokeStyle = 'black';
			context.rect(that.x, that.y, that.width, that.height);
			
			context.stroke();
			
			//draw white background
			context.fillStyle = 'lightblue';
			context.fillRect(that.x, that.y, that.width, that.height);
			
			context.restore();
			
		};
		
		return that;
		
	}

    //NextBlock Border object
	function nextBlockBorder() {
	    var that = {
	        x: 0,
	        y: 0,
	        height: 0,
	        width: 0,
	        thickness: 0

	    };

	    that.initialize = function (x, y, width, height) {
	        that.x = x;
	        that.y = y;
	        that.height = height;
	        that.width = width;

	    };

	    that.render = function (context) {
	        context.save();

	        context.beginPath();
	        context.lineWidth = '6';
	        context.strokeStyle = 'black';
	        context.rect(that.x, that.y, that.width, that.height);

	        context.stroke();

	        //draw background
	        context.fillStyle = 'lightblue';
	        context.fillRect(that.x, that.y, that.width, that.height);

	        //Draw Text
	        context.font = '20px Arial';
	        context.textAlign = 'center';
	        context.fillStyle = 'black';
	        context.fillText("Next Block", (that.x + (that.width / 2)), (that.y + (that.height / 8)));

	        context.restore();

	    };

	    return that;

	}

    //Info Border object
	function infoBorder() {
	    var that = {
	        x: 0,
	        y: 0,
	        height: 0,
	        width: 0,
	        thickness: 0

	    };

	    that.initialize = function (x, y, width, height) {
	        that.x = x;
	        that.y = y;
	        that.height = height;
	        that.width = width;

	    };

	    that.render = function (context) {
	        context.save();

	        context.beginPath();
	        context.lineWidth = '6';
	        context.strokeStyle = 'black';
	        context.rect(that.x, that.y, that.width, that.height);

	        context.stroke();

	        //draw white background
	        context.fillStyle = 'lightblue';
	        context.fillRect(that.x, that.y, that.width, that.height);
            
	        //Draw Text
	        context.font = '20px Arial';
	        context.textAlign = 'center';
	        context.fillStyle = 'black';
	        context.fillText("Time", (that.x + (that.width / 2)), (that.y + (that.height / 10)));
	        context.fillText("Score", (that.x + (that.width / 2)), (that.y + (that.height / 2.5)));
	        context.fillText("Lines", (that.x + (that.width / 2)), (that.y + (2 * (that.height / 2.5))) - (that.height / 10));

	        //Draw Text Boxes
	        Assignment_4.menu.roundRect((that.x + (that.width / 8)), (that.y + (that.height / 10))+(that.height/20), (that.width * (3 / 4)), (that.height * (15 / 100)), 15, 'darkblue', 'darkblue', context);
	        Assignment_4.menu.roundRect((that.x + (that.width / 8)), (that.y + (that.height / 2.5))+(that.height / 20), (that.width * (3 / 4)), (that.height * (15 / 100)), 15, 'darkblue', 'darkblue', context);
	        Assignment_4.menu.roundRect((that.x + (that.width / 8)), (that.y + (2 * (that.height / 2.5))) - (that.height / 10) + (that.height / 20), (that.width * (3 / 4)), (that.height * (15 / 100)), 15, 'darkblue', 'darkblue', context);

	        context.restore();

	    };

	    return that;

	}
	
	//Frame object
	function Frame(){
		var that = {
			height : 0,
			width : 0,
			border: Border(),
			nextBlock: nextBlockBorder(),
			info: infoBorder(),
			renderBorder : false,
			image: {
				src : Assignment_4.images['media/Tetris.png'],
				x : 0,
				y : 0,
				width : 0,
				height : 0,
				imageWidth : 640,
				imageHeight : 600
				
			}
			
		};
		
		that.initialize = function(context){
			context.canvas.width = window.innerWidth;
			context.canvas.height = window.innerHeight - 5;
			
			that.width = context.canvas.width;
			
			//set screen to a 4:3 size
			that.height = Math.round(that.width*(3/4));
			
			if(that.height > context.canvas.height){
				that.height = context.canvas.height;
				that.width = Math.round(that.height*(4/3));
				
			}
	
			//center background image
			if(that.width < that.image.imageWidth){
				that.image.width = that.width;
				
			}
			
			else{
				that.image.width = that.image.imageWidth;
				
			}
			
			if(that.height < that.image.height){
				that.image.height = that.height;
				that.image.y = 0;
				
			}
			
			else{
				//that.image.height = that.image.imageHeight;
				that.image.height = that.height;
				that.image.width = that.height*(that.image.imageWidth/that.image.imageHeight);
				that.image.y = (that.height/2)-(that.image.height/2);
			
			}
			
			that.image.x = that.width/2-(that.image.width/2);			
			
			//center internal border
			that.border.initialize(that.width / 4, that.height / 8, that.width * (1 / 4), that.height * (3 / 4));

		    //center nextBlock border
			that.nextBlock.initialize(that.width / 1.8, that.height / 8, that.width * (1 / 4), that.height * (1 / 4));

		    //center info border
			that.info.initialize(that.width / 1.8, that.height / 2.5, that.width * (1 / 4), that.height * (1 / 2.5));
			
		};
		
		that.render = function(context){
			//render background image
			context.drawImage(that.image.src, that.image.x, that.image.y, that.image.width, that.image.height);
				
			//render internal border
			if(that.renderBorder == true){
			    that.border.render(context);
			    that.nextBlock.render(context);
			    that.info.render(context);
				
			}
		    
		};
		
		return that;
		
	}
	
	return {
		Frame : Frame,
		Border: Border,
		nextBlockBorder: nextBlockBorder,
		infoBorder: infoBorder
		
	};
	
}());