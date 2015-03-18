	//---------------------------------------------------
	//menu objects
	//---------------------------------------------------
	
	//loosely based on tutorial from
	//http://www.iguanademos.com/Jare/docs/html5/Lessons/Lesson4/
	
	function MenuItem(string, fontSize, position, width) {
		var that = {
			text : string,
			size : fontSize,
			y : position,
			selected : false,
			clicked : false
			
		},
			normalColor = 'orange',
			selectedColor = 'white';
		
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
			
			context.font = Math.floor(that.size).toString() + "px Times New Roman";
			
			context.strokeStyle = 'black';
			context.lineWidth = 2;
			context.strokeText(that.text, width/2, that.y);
			context.fillText(that.text, width/2, that.y);
			
			//console.log('rendered string '+that.text+' with a font of '+context.font+' and a color of '+context.fillStyle+'to position x:'+context.canvas.width/2+' y: '+that.y);
			
			context.restore();
			
		};
		
		return that;
		
	};
	
	function Menu(title, items, footer, top, width, height) {
		var titleSize = 80,
			footerSize = 14,
			itemSize = 40,
			that = {
			title : MenuItem(title, titleSize, 60, width),
			items : [],
			footer : MenuItem(footer, footerSize, (top+height)-footerSize, width)
			
		};
		
		var space = (height-(titleSize+footerSize))/items.length;
		var i = 0;
		
		for(i = 0; i < items.length; i++){
			that.items.push(MenuItem(items[i], itemSize, top+(space*(i+1)), width));
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
	//menu objects
	//---------------------------------------------------