nose_x = 0;
nose_y = 0;

difference = 0;

right_wrist_x = 0;
left_wrist_x = 0;


function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNET = ml5.poseNet(video, modelLoaded);
    poseNET.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("Model is Loaded!!!");
}

function gotPoses(result){
    if (result.length > 0)
    {
        console.log(result);
        nose_x = result[0].pose.nose.x;
        nose_y = result[0].pose.nose.y;
        console.log("nose_x = " + nose_x + " , nose_y = " + nose_y);

        left_wrist_x = result[0].pose.leftWrist.x;
        right_wrist_x = result[0].pose.rightWrist.x;

        difference = left_wrist_x - right_wrist_x;
        console.log("left wrist x = " + left_wrist_x + ", right wrist x = " + right_wrist_x + ", difference = " + difference);
    }
}

function draw(){
    background('#969A97');

    document.getElementById("square_side").innerHTML = "Width and Height of the name will be = " + difference + "px"
    textSize(32);
    text('Hridansh', nose_x, nose_y, difference);
    fill(245, 245, 245);
}


