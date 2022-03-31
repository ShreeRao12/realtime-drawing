noseX  = 0;
noseY = 0;
leftWristX =0;
rightWristX = 0;
difference = 0; 

function setup()
{
canvas = createCanvas(550, 500);

canvas.position(800, 90);

video = createCapture(VIDEO);
video.size(550, 500);
video.position(100, 90);

poseNet = ml5.poseNet(video, modelLoaded);

poseNet.on('pose', gotPoses);
}

function draw()
{
    background("gray");
    fill("red");
    stroke("black");
    square(noseX, noseY, difference);
    document.getElementById("side").innerHTML = "Size of the square = "+difference;
}

function modelLoaded()
{
 console.log("model loaded!");
}

function gotPoses(results)
{
    if(results.length > 0){
      console.log(results);
      noseX = results[0].pose.nose.x;
      noseY = results[0].pose.nose.y;
      console.log("noseX = "+noseX+" noseY = "+noseY);

      leftWristX = results[0].pose.leftWrist.x;
      rightWristX = results[0].pose.rightWrist.x;
      difference = Math.floor(leftWristX - rightWristX);
      console.log("leftWristX = "+leftWristX+" rightWristX = "+rightWristX+" difference = "+difference);
    }
}
