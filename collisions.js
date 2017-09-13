var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

function collisionWall() {
	if(figure.x+figure.dx > canvas.width-figure.width  || figure.x+figure.dx < 0 ||  figure.y+figure.dy > canvas.height-figure.height || figure.y+figure.dy < 0) {
		figure.x = figure.defaultX;
		figure.y = figure.defaultY;
		figure.dx = figure.startDX;
		figure.defaultDX = figure.startDX;
		figure.dy = figure.startDY;
		figure.defaultDY = figure.startDY;
		alert("Ups!");
	}
}

function collisionPoint() {
	if(figure.x+figure.width > point.x && figure.x+figure.width < point.x+point.radius && figure.y+figure.height > point.y && figure.y+figure.height < point.y+point.radius) {
		score.s += 1;

			figure.dx +=0.2;
			figure.defaultDX += 0.2;
		
			figure.dy +=0.2;
			figure.defaultDY += 0.2;
		
	}
}