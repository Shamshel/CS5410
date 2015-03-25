Assignment_4.menu = (function() {
	'use strict';

	//---------------------------------------------------
	//menu objects
	//---------------------------------------------------
	
	//loosely based on tutorial from
	//http://www.iguanademos.com/Jare/docs/html5/Lessons/Lesson4/
	
	function MenuItem(string, fontSize, position, width, drawBorder) {
	    var that = {
	        text: string,
	        size: fontSize,
	        y: position,
	        selected: false,
	        clicked: false,
            border: drawBorder
	    };
			if(that.border){
				var normalColor = 'lightblue';
				var selectedColor = 'white';
				
			}
			
			else{
				var normalColor = 'white';
				var selectedColor = 'lightblue';
				
			}

            //Border vars
		var borderX,
            borderY,
            borderW,
            borderH,
            borderR;
		
		that.mouseOver = function(e, elapsedTime) {
			if(e.clientY < that.y && e.clientY > that.y-that.size){
				that.selected = true;
				
			}
			
			else{
				that.selected = false;
				that.clicked = false;
				
			}
			
		};
		
		that.click = function(e, elapsedTime) {
			if(that.selected){
				that.clicked = true;
				//console.log(that.text+" clicked!");
				
			}
			
		};
		

		that.render = function(context) {
			context.save();

			context.textAlign = 'center';
			
			if(that.selected){
				context.fillStyle = selectedColor;
				
			}
			
			else{
				context.fillStyle = normalColor;
				
			}
			
			context.font = Math.floor(that.size).toString() + "px Arial";
			
		    //Border for menu items
		    //-------------------------------------------------------------------------------

			if (that.border === true) {
			    borderX = (width / 2 - (context.measureText(that.text).width / 2)) - 10;
			    borderY = that.y - (context.measureText('M').width) - (context.measureText('M').width / 2);
			    borderW = context.measureText(that.text).width + 20;
			    borderH = (context.measureText('M').width) * 2 + (context.measureText('M').width / 2);
			    borderR = 20;

			    if (that.text !== '') {
			        roundRect(borderX, borderY, borderW, borderH, borderR, context);
			    }
			}
		    //-------------------------------------------------------------------------------

			context.strokeStyle = 'black';
			context.lineWidth = 2;
			context.strokeText(that.text, width/2, that.y);
			context.fillText(that.text, width/2, that.y);
			
			//console.log('rendered string '+that.text+' with a font of '+context.font+' and a color of '+context.fillStyle+'to position x:'+context.canvas.width/2+' y: '+that.y);
			
			context.restore();
			
		};
		
		return that;
		
	}
	
	function Menu(title, items, footer, top, width, height, borderF) {
		var titleSize = 80,
			footerSize = 14,
			itemSize = 40,
			that = {
			title : MenuItem(title, titleSize, 60, width,borderF),
			items : [],
			footer : MenuItem(footer, footerSize, (top+height)-footerSize, width,borderF)
			
		};
		
		var space = (height-(titleSize+footerSize))/items.length;
		var i = 0;
		
		for(i = 0; i < items.length; i++){
			that.items.push(MenuItem(items[i], itemSize, top+(space*(i+1)), width,borderF));
			//console.log(space);
			//console.log(top+(space*(i+1)));
			
		}
		
		that.update = function(elapsedTime){
			that.title.update(elapsedTime);
			
			for(i = 0; i<that.items.length; i++){
				that.items[i].update(elapsedTime);
				
			}
			
			that.footer.update(elapsedTime);
			
		};
		
		that.render = function(context){
			that.title.render(context);
			
			for(i = 0; i<that.items.length; i++){
				that.items[i].render(context);
				
			}
			
			that.footer.render(context);
			
		};
		
		return that;
		
	}

    //---------------------------------------------------
    //Function used to draw rounded Rectangles
    //Not sure where to put this function
    //---------------------------------------------------
	function roundRect(x, y, w, h, radius, context) {
	    var r = x + w;
	    var b = y + h;
	    context.save();
	    context.beginPath();
	    context.strokeStyle = 'darkblue';
	    context.fillStyle = 'blue';
	    context.lineWidth = "6";
	    context.moveTo(x + radius, y);
	    context.lineTo(r - radius, y);
	    context.quadraticCurveTo(r, y, r, y + radius);
	    context.lineTo(r, y + h - radius);
	    context.quadraticCurveTo(r, b, r - radius, b);
	    context.lineTo(x + radius, b);
	    context.quadraticCurveTo(x, b, x, b - radius);
	    context.lineTo(x, y + radius);
	    context.quadraticCurveTo(x, y, x + radius, y);
	    context.fill();
	    context.stroke();
	    context.restore();
	}
	
	//---------------------------------------------------
	//menu objects
	//---------------------------------------------------
	
	return {
		Menu : Menu,
		MenuItem : MenuItem
		
	};
	
}());