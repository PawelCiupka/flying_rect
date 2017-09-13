var i = 1;
var ifPointTime = false;
var pointTime;

function draw() {
	collisionWall();
	collisionPoint()

	controlFigure();
	drawFigure();

	randomPoint();
	checkPointTime();

	drawScore();


	figure.x += figure.dx;
	figure.y += figure.dy;

	

	requestAnimationFrame(draw);
}
draw();