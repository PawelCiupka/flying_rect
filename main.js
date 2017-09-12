function draw() {
	drawFigure();
	figure.x += figure.dx;
	figure.y += figure.dy;

	if(leftPressed) {
		if(!rightPressed){
			if(figure.dx > 0) {
				figure.dx = -figure.dx;
			}
			else if(figure.dx == 0) {
				figure.dx += -figure.defaultDX;
			}
			else {
				figure.dx = figure.dx;
			}
			figure.dy = 0;
		}
	}

	if(upPressed) {
		if(!downPressed){
			if(figure.dy > 0) {
				figure.dy = -figure.dy;
			}
			else if(figure.dy == 0) {
				figure.dy += -figure.defaultDY;
			}
			else {
				figure.dy = figure.dy;
			}
			figure.dx = 0;
		}
	}

	if(rightPressed) {
		if(!leftPressed){
			if(figure.dx < 0) {
				figure.dx = -figure.dx;
			}
			else if(figure.dx == 0) {
				figure.dx += figure.defaultDX;
			}
			else {
				figure.dx = figure.dx;
			}
			figure.dy = 0;
		}
	}

	if(downPressed) {
		if(!upPressed){
			if(figure.dy < 0) {
				figure.dy = -figure.dy;
			}
			else if(figure.dy == 0) {
				figure.dy += figure.defaultDY;
			}
			else {
				figure.dy = figure.dy;
			}
			figure.dx = 0;
		}
	}

	requestAnimationFrame(draw);
}
draw();