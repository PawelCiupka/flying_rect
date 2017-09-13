var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var figure = {
	width: 15,
	height: 15,
	color: "#500",
	x: canvas.width/2,
	dx: 0,
	defaultX: canvas.width/2,
	defaultDX: 2,
	startDX: 2,
	y: canvas.height/2,
	dy: 0,
	defaultY: canvas.height/2,
	defaultDY: 2,
	startDY: 2
};

var point = {
	radius: 15,
	color: "#f45641",
	x: canvas.width/2, 
	y: canvas.height/2,
	i: 0,
	ifPT: false,
	time: 0
};

var score = {
	s: 0,
	style: "32px Dosis",
	color: "#000",
	x: 8, 
	y: 20
};

function drawFigure() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.beginPath();
	ctx.rect(figure.x, figure.y, figure.width, figure.height);
	ctx.fillStyle = figure.color;
	ctx.fill();
	ctx.closePath();
}

function drawPoint() {
	ctx.beginPath();
	ctx.arc(point.x, point.y, point.radius, 0, Math.PI*2);
	ctx.fillStyle = point.color;
	ctx.fill();
	ctx.closePath();
}

function drawScore() {
	ctx.beginPath();
	ctx.font = "16px Dosis";
	ctx.fillStyle = score.color;
	ctx.fillText("Score: "+score.s, 8, 20);
	ctx.closePath();
}

function checkPointTime() {
	ctx.beginPath();
	ctx.font = "16px Dosis";
	ctx.fillStyle = "#red";
	ctx.fillText("I: "+point.i+" | pointTime: "+point.time, 70, 20);
	ctx.closePath();
}