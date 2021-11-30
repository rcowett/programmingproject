var bunny=157;
//The setup function only happens once
function setup() {
  createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(173,216,230); //an RGB color for the canvas' background
  fill (242,223,219)
  ellipse (bunny,390,100,35)
  bunny=bunny+0.7;
  fill(110,60,16)
  rect(120,250,70,160) // a rectangle
  stroke(244,204,233)
  fill(3,125,18)
  ellipse (155,250,125,125)
 
  rect(0,400,500)
fill(232,211,38)
  ellipse(350,80,70,70)

}

function mousePressed(){
  bunny=157;
}