flaskx = 700;
flasky = 260;

let creaturex = 0;
let creaturey = 0;
let leglength = 0.2;
let creaturecolor;
let circlexposition = 0;
let circleyposition = 0;
let speedx = 0.3;
let speedy = 2;

let magnification = 3; // Adjust magnification factor as needed
let magnifiedwidth, magnifiedheight;

function setup() {
  let cnv = createCanvas(800, 500);
  cnv.parent("p5-canvas-container") 


  console.log("junh")
  creaturecolor = "black";
}

function draw() {
  background(1, 70, 107);

  let angle = 30;
  let angleRad = radians(angle);

  //flasks
  flask1 = drawflask(flaskx, flasky, "rgb(9,80,170)", "B");
  flask2 = drawflask(flaskx - 10, flasky - 200, "rgb(141,1,1)", "R");
  flask3 = drawflask(flaskx - 60, flasky - 100, "#A09D9D", "G");
  flask4 = drawflask(flaskx - 90, flasky - 250, "rgb(245,245,191)", "Y");
  flask5 = drawflask(flaskx - 90, flasky + 100, "rgb(248,251,245))", "W");

  drawCreature(creaturex, creaturey);

  if (mouseIsPressed && leglength < 50 && keyIsPressed && key === "b") {
    leglength += 0.3;
  } else if (mouseIsPressed && leglength > 50) {
    leglength = 0;
  }

  // Check if the "b" key is pressed
  if (keyIsPressed && key === "b") {
    //creaturecolor is blue
    creaturecolor = color("rgb(9,80,170)");
  } else if (keyIsPressed && key === "r") {
    //  creaturecolor is red
    creaturecolor = color("rgb(141,1,1)");
  } else if (keyIsPressed && key === "g") {
    //  creaturecolor is grey
    creaturecolor = color("#A09D9D");
  } else if (keyIsPressed && key === "y") {
    //  creaturecolor is yellow
    creaturecolor = color("rgb(245,245,191)");
  } else if (keyIsPressed && key === "w") {
    //  creaturecolor is white
    creaturecolor = color("rgb(241,241,235)");
  } else {
    // Randomize creature color
    creaturecolor = color("black");

    // Move creature
    if (creaturex < -100 || creaturex > 100) {
      speedx *= -1;
    }
    if (creaturey < -100 || creaturey > 100) {
      speedy *= -1;
    }
    creaturex += speedx;
    creaturey += speedy;
  }

  push();
  stroke(255);
  strokeWeight(3);
  for (let i = 0; i < 4; i++) {
    let x = random(width);
    let y = random(height);
    point(x, y);
  }
  pop();

  function drawflask(x, y, flaskcolor, label) {
    push();
    translate(x, y);
    fill(flaskcolor);
    noStroke();
    rect(0, 0, 20, 60);
    triangle(10, 30, -20, 100, 40, 100);
    //label
    textSize(25);
    fill(0);
    textStyle(BOLD);
    textFont("Courier New");
    text(label, -5, 90);
    pop();
  }

    // Circle position
  push();
  translate(width / 2, height / 2);
  fill(255, 255, 255, 80);
  strokeWeight(3);
  stroke(random(200, 255), random(150, 200), random(150, 200));
  circle(circlexposition, circleyposition, 300);
  pop();

  
  //lamp
  fill(50); //
  rect(90, 300, 160, 20);
  fill(100); // Light gray color
  rect(150, 60, 20, 150);
  fill(100); //
  rect(150, 200, 40, 100);
  fill(100); //
  rect(135, 320, 80, 20);
  push();
  fill(0);
  translate(150, -80);
  rotate(angleRad);
  rect(30, 80, 110, 40);
  fill("rgb(236,236,192)");
  circle(210, 100, 100);
  pop();

  function drawCreature(creaturex, creaturey) {
    push();
    translate(width / 2, height / 2);

    //mouse changing color
    let distance = dist(
      creaturex,
      creaturey,
      mouseX - width / 2,
      mouseY - height / 2
    );

//creature
    for (let i = 0; i < 80; i++) {
      stroke(creaturecolor);
      line(
        creaturex,
        creaturey,
        random(creaturex - leglength, creaturex + leglength),
        random(creaturey - leglength, creaturey + leglength)
      );
    }
    pop();
  }

  push();
  translate(30, -160);
  triangle(230, 350, 170, 220, 320, 220);
  pop();

  //magnifying glass
  magnifiedwidth = 100; //size
  magnifiedheight = 100; //size
  let magnifiedX = mouseX - magnifiedwidth / 2;
  let magnifiedY = mouseY - magnifiedheight / 2;
  let magnifiedArea = get(
    magnifiedX,
    magnifiedY,
    magnifiedwidth,
    magnifiedheight
  );
  //magnified area
  push();
  translate(mouseX, mouseY);
  scale(magnification);
  image(magnifiedArea, -magnifiedwidth / 2, -magnifiedheight / 2); //place mouse in the center
  pop();

  //text
  fill(255);
    textFont("Courier New");
  text("Find the floating bacteria", 30, 390);
  text("Test out different chemicals", 30, 410);
  text("Press the bacteria to see which chemical will help it grow", 30, 430);
  text("Don't over feed it!", 30, 450);
}
