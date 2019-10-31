console.log('ml5 version:', ml5.version);

var classifier;
var featureExtractor;
var elt;
var video;

function setup() {
  // createCanvas(400, 400);
  noCanvas();
  
  video = createCapture(VIDEO);
  
  featureExtractor = ml5.featureExtractor('MobileNet', modelReady);
  elt = createP('Loading...');

  classifier = featureExtractor.classification(video);
  //classifier.classify(img, gotResult);

  let btn1 = createButton('type1');
  btn1.mousePressed(function(){
	console.log('Addedimage to thing1');
	classifier.addImage('Thing1');
});

  let btn2 = createButton('type2');
  btn2.mousePressed(function(){
	console.log('Addedimage to thing2');
	classifier.addImage('Thing2');
});

let trainBtn = createButton('train');
trainBtn.mousePressed(function(){
  console.log('Starting training...');
  classifier.train(whileTraining);
});
}

function whileTraining(loss){
	if (loss){
	console.log(loss);
	}else{
		//fin training
		classifier.classify(gotResult);
	}
}

function modelReady() {
 // classifier.predict(gotResult);
}

function gotResult(err, results) {
  //console.log(results);
  
  elt.html(results[0].label);
  
  classifier.classify(gotResult);
}

function draw() {
  // background(0);
  // image(img, 0, 0);
}