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
