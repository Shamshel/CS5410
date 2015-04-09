Assignment_4.particles = (function() {
    'use strict';

    console.log("initializing particles!");

    //---------------------------------------------------
    //physics and rendering objects
    //---------------------------------------------------
    
    //Acceleration object
    function Acceleration(){
	var that = {
	    x : 0,
	    y : 0,
	    rotation : 0
	    
	};
	
	that.setAcceleration = function(x, y, rotation){
	    that.x = x;
	    that.y = y;
	    that.rotation = rotation;
	    
	};
	
	that.random = function(maxAcceleration, maxRotation){
	    that.x = maxAcceleration*Math.random();
	    that.y = maxAcceleration*Math.random();
	    that.rotation = maxAcceleration*Math.random();
	    
	    if(Math.random() > 0.5){
		that.x = that.x*(-1);
		
	    }
	    
	    if(Math.random() > 0.5){
		that.y = that.y*(-1);
		
	    }
	    
	    if(Math.random() > 0.5){
		that.rotation = that.rotation*(-1);
		
	    }
	    
	};

	that.randomVectored = function(vector, maxAcceleration, maxRotation){
	    that.x = maxAcceleration*Math.random();
	    that.y = maxAcceleration*Math.random();
	    that.rotation = maxRotation*Math.random();

	    that.x = (vector.x > 0) ? that.x : that.x*-1;
	    that.y = (vector.y > 0) ? that.y : that.y*-1;
	    that.rotation = (vector.rotation > 0) ? that.rotation : that.rotation*-1;

	};
	
	return that;
	
    };
    
    //Vector object
    function Vector(){
	var that = {
	    acceleration : Acceleration(),
	    x : 0,
	    y : 0,
	    rotation : 0,
	    maxVelocity : 141.4
	    
	};
	
	that.random = function(maxVelocity, maxRotation){
	    that.x = maxVelocity*Math.random();
	    //that.y = maxVelocity*Math.random();
	    that.rotation = 50*Math.random();
	    
	    if(Math.random() > 0.5){
		that.x = that.x*(-1);
		
	    }
	    
	    if(Math.random() > 0.5){
		that.y = that.y*(-1);
		
	    }
	    
	    if(Math.random() > 0.5){
		that.rotation = that.rotation*(-1);
		
	    }
	    
	};
	
	that.randomAcceleration = function(maxAcceleration, maxRotation){
	    that.acceleration.randomVectored(that, maxAcceleration, maxRotation);
	    
	};
	
	that.update = function(elapsedTime){
	    that.x += that.acceleration.x*(elapsedTime/1000);
	    that.y += that.acceleration.y*(elapsedTime/1000);
	    that.rotation += that.acceleration.rotation*(elapsedTime/1000);
	    
	    //console.log("vector: x: "+that.x+" y: "+that.y);
	    
	    if(that.x > that.maxVelocity){
		that.x = that.maxVelocity;
		
	    }
	    
	    if(that.y > that.maxVelocity){
		that.y = that.maxVelocity;
		
	    }
	    
	};
	
	return that;
	
    };
    
    //Position object
    function Position(){
	var that = {
	    vector : Vector(),
	    x : 0,
	    y : 0,
	    rotation : 0
	    
	};
	
	that.update = function(elapsedTime) {
	    that.vector.update(elapsedTime);
	    
	    that.x += that.vector.x*(elapsedTime/1000);
	    that.y += that.vector.y*(elapsedTime/1000);
	    that.rotation += that.vector.rotation*(elapsedTime/10000);
	    
	};
	
	that.randomLocation = function(frame, max){
	    that.x = Math.round(frame.border.width*Math.random());
	    that.y = Math.round(frame.border.height*Math.random());
	    that.rotation = Math.round((max)*Math.random());
	    
	    that.vector.random(max, max);
	    
	};
	
	that.randomVector = function(position, max){
	    that.x = position.x;
	    that.y = position.y;
	    that.rotation = position.rotation;
	    
	    that.vector.random(max, max);
	    
	};
	
	that.randomAcceleration = function(maxAcceleration, maxRotation){
	    that.vector.randomAcceleration(maxAcceleration, maxRotation);
	    
	};
	
	return that;
	
    };

    //Game Object interface
    function GameObject(){
	var that = {
	    position : Position(),
	    hitBoxRadius : 0
	    
	};
	
	that.getPosition = function(){
	    return that.position;
	    
	};
	
	that.setPosition = function(position){
	    that.position = position;
	};
	
	that.getHitBoxRadius = function(){
	    return that.hitBoxRadius;
	    
	};
	
	that.detectCollision = function(gameObject){
	    var result = false;
	    var thisObjectPos = that.getPosition();
	    var otherObjectPos = gameObject.getPosition();
	    var distance = Math.sqrt(Math.pow(thisObjectPos.x - otherObjectPos.x, 2)+Math.pow(thisObjectPos.y - otherObjectPos.y, 2));
	    var hitDistance = that.hitBoxRadius+gameObject.getHitBoxRadius();
	    //console.log("distance from target: "+distance);
	    //console.log("hit radius: "+hitDistance);
	    if(distance <= hitDistance)
	    {
		result = true;
		
	    }
	    
	    return result;

	};
	
	return that;
	
    };

    //particle object interface
    function Particle(){
	//each particle is, in turn, a particle emitter, spawn as a stationary, immortal emitter		
	var that = {
	    base : GameObject(),
	    timeToLive : 0,
	    emitter : true,
	    immortal : true
	    
	};
	
	that.setTTL = function(TTL){
	    that.immortal = false;
	    that.timeToLive = TTL;

	};
	
	that.spawnParticles = function(position, numberOfParticles, maxTTL){
	    var result = [],
	    i = 0;
	    
	    for(i = 0; i < numberOfParticles; i++){
		result.push(Particle());
		result[i].base.position.randomVector(position, 1);
		result[i].base.position.randomAcceleration(0, 0);
		result[i].immortal = false;
		result[i].emitter = false;
		result[i].timeToLive = maxTTL*Math.random();
		
	    }
	    
	    return result;
	    
	};
	
	that.makeEmitter = function(position, TTL){
	    //console.log("setting particle to position x: "+position.x+" y: "+position.y);
	    that.base.setPosition(position);
	    that.setTTL(TTL);
	    
	};
	
	that.update = function(elapsedTime){
	    that.timeToLive -= elapsedTime;
	    
	    that.base.position.update(elapsedTime);
	    
	};
	
	//initialize to random position, random vector
	that.randomLocation = function(bounds, max){
	    that.base.position.randomLocation(bounds, max);
	    
	};
	
	//initialize to known position, randomize the vector
	that.randomVector = function(position, max){
	    that.base.position.randomVector(position, max);
	    
	};
	
	that.getPosition = function(){
	    return that.base.position;
	    
	};
	
	that.setPosition = function(position){
	    that.base.setPosition(position);
	    
	};
	
	return that;
	
    };
    
    //Smoke Particle object class
    function SmokeParticle(){
	var that = {
	    image : Assignment_4.images['media/smoke.png'],
	    size : {
		width : 83,
		height : 75
		
	    },
	    scale : 0.5,
	    base : Particle()
	    
	};
	
	that.render = function(context){
	    
	    var pos = that.getPosition();

	    context.save();
	    
	    context.translate(pos.x, pos.y);
	    context.rotate(pos.rotation);
	    //context.translate(-pos.y, -pos.x);
	    
	    context.drawImage(
		that.image, 
		    -1*(that.size.width/2)*that.scale, 
		    -1*(that.size.height/2)*that.scale,
		that.size.width*that.scale, that.size.height*that.scale);
	    
	    /*
	      context.beginPath();
	      
	      context.arc(Math.round(pos.x), Math.round(pos.y), 5, 0, 2*Math.PI);
	      
	      context.closePath();
	      
	      context.fillStyle = "grey";
	      context.fill();
	      
	      context.strokeStyle = "black";
	      context.stroke();
	    */
	    
	    context.restore();
	    
	};
	
	that.update = function(elapsedTime){
	    that.base.update(elapsedTime);
	    
	};
	
	that.randomLocation = function(bounds, max){
	    that.base.randomLocation(bounds, max);
	    
	};
	
	that.randomVector = function(position, max){
	    that.base.randomVector(position, max);
	    
	};
	
	that.getTTL = function(){
	    return that.base.timeToLive;
	    
	};

	that.getEmitter = function(){
	    return that.base.emitter;

	};
	
	that.makeEmitter = function(position, TTL){
	    that.base.makeEmitter(position, TTL);
	    
	};
	
	that.getImmortal = function(){
	    return that.base.immortal;
	    
	};
	
	that.getPosition = function(){
	    return that.base.getPosition();
	    
	};
	
	that.setPosition = function(position){
	    that.base.setPosition(position);
	    
	};
	
	that.spawnParticles = function(numberOfParticles, maxTTL){
	    var temp = that.base.spawnParticles(that.getPosition(), numberOfParticles, maxTTL),
	    result = [],
	    i = 0;
	    
	    for(i = 0; i < temp.length; i++){
		result.push(SmokeParticle());
		result[result.length-1].base = temp[i];
		
	    }
	    
	    return result;
	    
	};
	
	return that;
	
    };
    
    function FireParticle(){
	var that = {
	    base : Particle(),
	    image : Assignment_4.images['media/fire.png'],
	    size : {
		width : 256,
		height : 256
		
	    },
	    scale : 0.1
	    
	};
	
	that.render = function(context){
	    
	    var pos = that.getPosition();

	    context.save();
	    
	    context.translate(pos.x, pos.y);
	    context.rotate(pos.rotation);
	    //context.translate(-pos.y, -pos.x);
	    
	    context.drawImage(
		that.image, 
		    -1*(that.size.width/2)*that.scale, 
		    -1*(that.size.height/2)*that.scale,
		that.size.width*that.scale, that.size.height*that.scale);
	    
	    /*
	      context.beginPath();
	      
	      context.arc(Math.round(pos.x), Math.round(pos.y), 5, 0, 2*Math.PI);
	      
	      context.closePath();
	      
	      context.fillStyle = "orange";
	      context.fill();
	      
	      context.strokeStyle = "grey";
	      context.stroke();
	    */
	    
	    context.restore();
	    
	    
	};
	
	that.update = function(elapsedTime){
	    that.base.update(elapsedTime);
	    
	};
	
	that.randomLocation = function(bounds, max){
	    that.base.randomLocation(bounds, max);
	    
	};
	
	that.randomVector = function(position, max){
	    that.base.randomVector(position, max);
	    
	};
	
	that.getTTL = function(){
	    return that.base.timeToLive;
	    
	};

	that.getEmitter = function(){
	    return that.base.emitter;

	};
	
	that.makeEmitter = function(position, TTL){
	    that.base.makeEmitter(position, TTL);
	    
	};
	
	that.getImmortal = function(){
	    return that.base.immortal;
	    
	};
	
	that.getPosition = function(){
	    return that.base.getPosition();
	    
	};
	
	that.setPosition = function(position){
	    that.base.setPosition(position);
	    
	};
	
	that.spawnParticles = function(numberOfParticles, maxTTL){
	    var temp = that.base.spawnParticles(that.getPosition(), numberOfParticles, maxTTL),
	    result = [],
	    i = 0;
	    
	    for(i = 0; i < temp.length; i++){
		result.push(FireParticle());
		result[result.length-1].base = temp[i];
		
	    }
	    
	    return result;
	    
	};
	
	return that;
	
    };

    return {
	Acceleration : Acceleration,
	Vector : Vector,
	Position : Position,
	Particle : Particle,
	SmokeParticle : SmokeParticle,
	FireParticle : FireParticle

    };

}());

