noseX=0;
noseY=0;

difference=0;
rightWristX=0;
leftWristX=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(600,400);
    canvas.position(750,320);

    poseNet=ml5.poseNet(video, modelLoaded());
    poseNet.on('pose', gotPoses);
}

function draw(){
    background("#0000FF");
    
    document.getElementById("font_size").innerHTML="The Font size is " + difference + " px.";

    stroke('black');
    text('Adithya', noseX, noseY);
    textSize(difference-200);
}

function modelLoaded(){
    console.log("PoseNet is initialised");
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("Nose X = "+noseX+" Nose Y = "+noseY);

        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
        console.log("Left Wrist X = " + leftWristX + " Right Wrist X = " + rightWristX + " Difference = " + difference);
    }
}
