Assignment_4.frame = (function() {
	'use strict';

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
			context.strokeStyle = 'yellow';
			context.rect(that.x, that.y, that.width, that.height);
			
			context.stroke();
			
			//draw black background
			context.fillStyle = 'black';
			context.fillRect(that.x, that.y, that.width, that.height);
			
			context.restore();
			
		};
		
		return that;
		
	}
	
	//Frame object
	function Frame(){
		var that = {
			height : 0,
			width : 0,
			border : Border(),
			renderBorder : false,
			image: {
				src : Assignment_4.images['Media/Tetris.png'],
				x : 0,
				y : 0,
				width : 0,
				height : 0,
				imageWidth : 480,
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
			that.border.initialize(that.width/8, that.height/8, that.width*(3/4), that.height*(3/4));
			
		};
		
		that.render = function(context){
			//render background image
			context.drawImage(that.image.src, that.image.x, that.image.y, that.image.width, that.image.height);
				
			//render background border	
		    //that.border.render(context);
		    
		};
		
		return that;
		
	}
	
	return {
		Frame : Frame,
		Border : Border
		
	};
	
}());