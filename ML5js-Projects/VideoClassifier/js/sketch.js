let mobilenet;

function setup() {
	var canvas = createCanvas(700, 700);
	canvas.class('myCanvas');
	canvas.parent('myContainer');
	mobilenet = ml5.imageClassifier('MobileNet', modelReady);
}
