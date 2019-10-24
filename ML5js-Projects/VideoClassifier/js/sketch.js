let mobilenet;

let video;

var a = '';
var b = '';

var element1, element2;


function modelReady() {
	console.log('Model is ready');
	mobilenet.classify(gotResults);
}

function gotResults(err, data) {
	if (err) {
		console.error(err);
	} else {
		a = data[0].label;
		b = nf(data[0].confidence, 0, 2);
		mobilenet.classify(gotResults);
	}
}

function setup() {
	var canvas = createCanvas(700, 700);
	video = createCapture(VIDEO);
	video.hide();
	background(231, 255, 255);
	canvas.class('myCanvas');
	canvas.parent('myContainer');
	element1 = createP('loading...');
	element2 = createP('loading...');
	mobilenet = ml5.imageClassifier('MobileNet', video, modelReady);
}

function draw(){
	image(video,0,0);
	element1.html('Label: ' + a);
	element2.html('Confidence: ' + b);
}