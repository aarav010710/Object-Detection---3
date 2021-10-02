function preload()
{
    img = loadImage('electronic.jpeg');
}

function setup()
{
    canvas = createCanvas(380, 380);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("status").innerHTML = "Status - Detecting Objects";
}

function draw()
{
    image(img, 0,0, 380, 380);
}

function backe()
{
    window.location = "home.html";
}

img = "";
status_detection = "";
objects = [];

function modelloaded()
{
    console.log("CocoSsd is loaded!!");
    status_detection = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error , results)
{
    if(error)
    {
        console.log(error);
    }

    console.log(results);
    objects = results;

}