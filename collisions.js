var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


function collisionWall() {
	if(figure.x+figure.dx > canvas.width-figure.radius/2  || figure.x+figure.dx < figure.radius/2 ||  figure.y+figure.dy > canvas.height-figure.radius/2 || figure.y+figure.dy < figure.radius/2) {
		figure.x = figure.defaultX;
		figure.y = figure.defaultY;
		figure.dx = figure.startDX;
		figure.defaultDX = figure.startDX;
		figure.dy = figure.startDY;
		figure.defaultDY = figure.startDY;
		alert("Ups :( zakończyłeś grę z wynikiem: "+score.s);
		document.location.reload();
	}
}

function collisionPoint() {
	if(figure.x > point.x-point.radius-figure.radius/2 && figure.x < point.x+point.radius+figure.radius/2 && figure.y > point.y-point.radius-figure.radius/2 && figure.y < point.y+point.radius+figure.radius/2) {

		if(point.status == 0) {
			score.s += 0;
		}
		else if(point.status == 1) {
			score.s += 1;
		}
		point.status = 0;


		if(figure.dx == 0) {
			figure.defaultDX += figure.acceleration;
		}
		else {
			figure.defaultDX += figure.acceleration;
			if(figure.dx > 0) {
				figure.dx += figure.acceleration;
			}
			else {
				figure.dx -= figure.acceleration; 
			}
		}

		if(figure.dy == 0) {
			figure.defaultDY += figure.acceleration;
		}
		else {
			figure.defaultDY += figure.acceleration;
			if(figure.dy > 0) {
				figure.dy += figure.acceleration;
			}
			else {
				figure.dy -= figure.acceleration; 
			}
		}



		
		
	}
}