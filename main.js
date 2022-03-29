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
}

function modelLoaded()
{
 console.log("model loaded!");
}

function gotPoses(results)
{
    if(results.length > 0){
      console.log(results);
    }
}
