var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var figure = {
	width: 15,
	height: 15,
	color: "#696",
	x: canvas.width/2,
	dx: 0,
	defaultX: canvas.width/2,
	defaultDX: 2,
	y: canvas.height/2,
	dy: 0,
	defaultY: canvas.height/2,
	defaultDY: 2
	
};

function drawFigure() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.beginPath();
	ctx.rect(figure.x, figure.y, figure.width, figure.height);
	ctx.fillStyle = figure.color;
	ctx.fill();
	ctx.closePath();
}