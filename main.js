function preload()
{
mustache=loadImage("https://i.postimg.cc/QM4XyGcg/df.png")
}
NoseY=0
NoseX=0
function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
    video= createCapture(VIDEO)
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw()
{
    image(video,0,0,300,300);
    image(clown_nose,noseX,noseY,30,30);
}
function gotPoses(results)
{
  if (results.length>0)
{
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("nose x ="  +noseX)
    console.log("nose y =" + noseY);
}
}
function modelLoaded()
{
    console.log('PoseNet is Initialized')
}
function take_snapshot(){
    save('myFilterImage.png')
}