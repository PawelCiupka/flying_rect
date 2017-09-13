var leftPressed = false;
var upPressed = false;
var rightPressed = false;
var downPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
	if(e.keyCode == 37) {
		leftPressed = true;
	}

	if(e.keyCode == 38) {
		upPressed = true;
	}

	if(e.keyCode == 39) {
		rightPressed = true;
	}

	if(e.keyCode == 40) {
		downPressed = true;
	}
}

function keyUpHandler(e) {
	if(e.keyCode == 37) {
		leftPressed = false;
	}

	if(e.keyCode == 38) {
		upPressed = false;
	}

	if(e.keyCode == 39) {
		rightPressed = false;
	}

	if(e.keyCode == 40) {
		downPressed = false;
	}
}

function controlFigure() {
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
}

function pointPosition() {
	point.x = Math.floor(Math.random() * canvas.width);
	point.y = Math.floor(Math.random() * canvas.height);
}