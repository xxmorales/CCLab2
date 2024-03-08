flaskx = 350;
flasky = 260;


let creaturex = 0;
let creaturey = 0;
let leglength = 1;
let creaturecolor;
let circlexposition = 0;
let circleyposition = 0;
let speedx = 0.3;
let speedy = 2;

function setup() {
  let cnv = createCanvas(800, 500);
  cnv.parent("p5-canvas-container") 


  console.log("junh")
  creaturecolor = color(random(200, 255), random(150, 200), random(150, 200)); // Initialize creaturecolor with a random color
}

function draw() {
  background(1, 70, 107);

  //flasks
  drawflask(flaskx, flasky);
  drawflask(flaskx - 10, flasky - 200);

  drawCreature(creaturex, creaturey); 

  if (mouseIsPressed && leglength < 50 && keyIsPressed && key === "b") {
    leglength += 0.09;
  } else if (mouseIsPressed && leglength > 50) {
    leglength = 0;
  }

  // Check if the "b" key is pressed
  if (keyIsPressed && key === "b") {
    //creaturecolor is blue
    creaturecolor = color("black");
  } else if (keyIsPressed && key === "r") {
    //  creaturecolor is red
    creaturecolor = color(255, 0, 0);
  } else {
    // Randomize creature color
    creaturecolor = color(random(200, 255), random(150, 200), random(150, 200));

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

  // Circle position
  push();
  translate(width / 2, height / 2);
  fill(255, 255, 255, 80);
  strokeWeight(3);
  stroke(random(200, 255), random(150, 200), random(150, 200));
  circle(circlexposition, circleyposition, 240);
  pop();

  push();
  stroke(255);
  strokeWeight(3);
  for (let i = 0; i < 4; i++) {
    let x = random(width);
    let y = random(height);
    point(x, y);
  }
  pop();

  function drawflask(x, y) {
    push();
    translate(x, y);
    fill("grey");
    noStroke();
    rect(0, 0, 20, 60);
    triangle(10, 30, -20, 100, 40, 100);
    pop();
  }

  push();
  stroke(0);
  strokeWeight(10);
  line(mouseX, mouseY, mouseX + 150, mouseY + 5);
  pop();

  function drawCreature(creaturex, creaturey) {
    // Generate random color for creature
    push();
    translate(width / 2, height / 2);

    //mouse changing color
    let distance = dist(
      creaturex,
      creaturey,
      mouseX - width / 2,
      mouseY - height / 2
    );

    if (distance < 10) {
      creaturecolor = color(255, 255, 0); // Change to yellow
    }

    // Draw the creature
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
}  