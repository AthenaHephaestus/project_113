function preload(){
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(150, 150);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image (video, 230, 150, 220, 200);
    
    fill (0, 255, 0);
    stroke(0, 255, 0);
    circle(100, 50, 80);

    circle(550, 50, 80);

    circle(550, 425, 80);

    circle(100, 425, 80);

    fill(0, 0, 255);
    stroke(0, 0, 255);
    rect(90, 40, 460, 20);


    rect(90, 40, 20, 400);

    rect(550, 40, 20, 400);

    rect(90, 420, 460, 20)
}

function take_snapshot()
{
    save("ya_photo.png")
}