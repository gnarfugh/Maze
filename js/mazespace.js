"use strict";

function Mazespace(directions){
	for(var i=0;i<directions.length;i++){
		this[directions[i]] = false;
	}
}

Mazespace.prototype.setWall = function(direction){
	this[direction] = true;
}