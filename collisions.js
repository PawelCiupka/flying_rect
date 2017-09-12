var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

function collisionWall() {
	if(figure.x+figure.dx > canvas.width-figure.width  || figure.x+figure.dx < 0 ||  figure.y+figure.dy > canvas.height-figure.height || figure.y+figure.dy < 0) {
		figure.x = figure.defaultX;
		figure.y = figure.defaultY;
		alert("Ups!");
	}
}