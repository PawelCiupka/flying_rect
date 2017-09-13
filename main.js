function draw() {
	collisionWall();
	collisionPoint()

	controlFigure();
	drawFigure();

	pointPosition();
	drawPoint();

	drawScore();


	figure.x += figure.dx;
	figure.y += figure.dy;

	

	requestAnimationFrame(draw);
}
draw();