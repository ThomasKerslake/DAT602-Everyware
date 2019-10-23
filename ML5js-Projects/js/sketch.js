let mobilenet;

let penguin;

function modelReady() {
	console.log('Model is ready');
	mobilenet.classify(penguin, gotResults);
}

function gotResults(err, data) {
	if (err) {
		console.error(err);
	} else {
		console.log(data);
		createDiv('Label: ' + data[0].label);
		createDiv('Confidence: ' + nf(data[0].confidence, 0, 2));
	}
}

function imageReady() {
	image(penguin, 0, 0, width, height);
}

function setup() {
	var canvas = createCanvas(700, 700);
	penguin = createImg('images/penguin.jpg', imageReady);
	penguin.hide();
	background(231, 255, 255);
	canvas.class('myCanvas');
	canvas.parent('myContainer');
	mobilenet = ml5.imageClassifier('MobileNet', modelReady);
}
