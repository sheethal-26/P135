function setup() {
  video = createCapture(VIDEO);
  video.size(550, 500);

  canvas = createCanvas(600, 400);
  canvas.position(600, 200);
  video.position(400, 240);

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);
}

function gotPoses(results) {
  if (results.length > 0) {
    console.log(results);
  }
}
