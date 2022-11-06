difference = 0;

 function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(1200,600);
    canvas.position(560,125);

    pose_net = ml5.poseNet(video,modelLoaded);
    pose_net.on("pose",gotPoses);
 }

 function modelLoaded(){
    console.log("MODEL IS ACTIVE")
 }

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        left_wrist_x = results[0].pose.leftWrist.x;
        right_wrist_x = results[0].pose.rightWrist.x;

        difference = Math.floor(left_wrist_x - right_wrist_x);
        }
}
function draw(){
   background("#57f8a7");
   textSize(difference);
   fill("#ffae00");
   text("AADITTIYA",50 ,400);

}