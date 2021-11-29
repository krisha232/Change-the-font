nose_X = 0;
nose_Y = 0;
difference = 0;

leftWristX = 0;
rightWristY = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550,550);
    video.position(10,20);

    canvas =  createCanvas(600,440);
    canvas.position(600,80);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function gotPoses(results) {
    if (results.length > 0) 
    { console.log(results);} 
     leftWristX = results[0].pose.leftWrist.x;
     rightWristY = results[0].pose.rightWrist.x;

     difference = floor(leftWristX - rightWristY);
     console.log(" left wrist = " + leftWristX + " right wrist = " + rightWristY + " difference =  " +  difference);
}

function modelLoaded() {
    console.log('poseNet is intialized');
}


function draw(){
  background('purple');
  textSize(difference);
  fill('white');
  text('Krisha',50,400);

}