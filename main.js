function draw() {
	collisionWall();
	drawFigure();
	controlFigure();
	figure.x += figure.dx;
	figure.y += figure.dy;

	

	requestAnimationFrame(draw);
}
draw();