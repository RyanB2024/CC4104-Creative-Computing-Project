let balls = [];//Ball Function
let particles = [];//For Fire

function setup() {
  createCanvas(400, 400);
}

function draw() {

  //Gets Real Time Value
  let now = new Date();
  let sec = now.getSeconds();
  let min = now.getMinutes();
  let hour = now.getHours();
  
  background('lightgrey');
  stroke(1);
  
  //Chemistry Stand Outline
  fill('grey');
  stroke('black')
  rect(0,310,24,10)
  rect(0,310,10,90)
  rect(390,305,24,90)
  rect(370,305,50,15)
  rect(277,305,51,15)
  rect(25,367,12,25)
  rect(25,322,12,11)
  rect(293,367,12,25)
  rect(263,367,12,50)
  rect(263,322,12,12)
  rect(0,390,400,10)
  
  //Beaker --> Horizontal Bar
  stroke('black')
  if (min >= 1) {// Chooses what to fill pipe depending on time
  fill('#03A9F4');
  rect(25,320,5,15);
} else {
  noFill();
  rect(25,320,5,15);
}

  //Horizontal Bar --> Boiling Flask
  if (min >= 59 && sec >= 45) {// Chooses what to fill pipe depending on time
  fill('#03A9F4');
  rect(307, 345, 20, 10);
} else {
  noFill();
  rect(307, 345, 20, 10);
}
  
  //Boiling Flask --> Vertical Bar
  if (min <= 0 && sec >= 30) {// Chooses what to fill pipe depending on time
  fill('#9E9E9E');
  rect(348,320,5,8);
} else {
  noFill();
  rect(348,320,5,8);
}
  
  //Boiling Flask
  if (min <= 0 && sec <= 15) {// Chooses what to fill flask depending on time
  fill('#03A9F4');
  circle(350,350,45);
} else {
  noFill();
  circle(350,350,45);
}
  
  //Water Dropper Outline
  noFill();
  strokeWeight(2)
  stroke(0)
  quad(162,-10,167,50,182,50,188,-10)
  
  //Fire
  if (min <= 0 && sec <= 15) {
    particles.push({ x: 351, y: 383, vy: random(-1, -3) });//Creates and updates fire particles

    for (let i = particles.length - 1; i >= 0; i--) {
      let p = particles[i];
      p.y += p.vy;

    fill(255, 150, 0);
    noStroke();
    ellipse(p.x, p.y, 10);

    if (p.y < 365) particles.splice(i, 1);//Gets rid of fire, when too high
  }
}  
  
  //Igniter Outline
  fill('grey');
  stroke('black')
  rect(340,385,20,5)
  rect(340,380,2,10)
  rect(350,380,2,10)
  rect(360,380,2,10)
  
  //Water Fill inside Beaker
  let fillHeight = map(sec, 0, 60, 0, 250); //Used to learn mapping (https://p5js.org/reference/p5/map/)
  noStroke();
  fill('#03A9F4');
  rect(25, 320 - fillHeight, 250, fillHeight);

  //Beaker Outline
  noFill();
  stroke(0);
  strokeWeight(2);
  rect(25, 70, 250, 250);
  
  //Create new ball
function createBall(x, y) {
  return { x: x, y: y, vy: 0 };
}

  //Ball Drop
  if (frameCount % 60 === 0) {//Create Ball every Second
    balls.push(createBall(175, 0));//Start Ball Position
  }

  //Draws Ball
  fill('#03A9F4');
  noStroke();
  
  for (let i = balls.length - 1; i >= 0; i--) {
    let b = balls[i];
    b.vy += 0.3;//Apply gravity
    b.y += b.vy;//Update Position based on Velocity

    let bottomY = 320;//Beaker Floor
    if (b.y + 6 >= bottomY) {
      balls.splice(i, 1);//Removes ball if it passes floor
    } else {
      ellipse(b.x, b.y, 12);//Draws ball with diameter of 12
    }
  }

  //Horizontal Progress Bar
  noStroke();
  fill('#03A9F4');
  let filledWidth = map(min, 0, 60, 0, 280); //Used to learn mapping (https://p5js.org/reference/p5/map/)
  rect(25, 335, filledWidth, 30);
  noFill();
  stroke(0);
  strokeWeight(2);
  rect(25, 335, 280, 30);
  stroke('rgb(150,48,48)');
  strokeWeight(2);
  for (let i of [15, 30, 45]) {//Calculates line ticks on vertical bar only for 15,30,45 loops
  let x = 25 + (i * 280) / 60;
  line(x, 358, x, 363);
  }
  
  //Beaker Measurment Lines
  stroke('rgb(150,48,48)');
  for (let i of [15, 30, 45]) {//Calculates line ticks on vertical bar only for 15,30,45 loops
  let y = 70 + (i * 250) / 60;
  line(27, y, 45, y);
  }

  //Vertical Progress Bar
  noStroke();
  let filledHeight = map(hour, 0, 24, 0, 250); //Used to learn mapping     (https://p5js.org/reference/p5/map/)
  fill(150);
  rect(330, 70, 40, filledHeight);

  //Outline of the vertical bar
  noFill();
  stroke(0);
  strokeWeight(2);
  rect(330, 70, 40, 250);

  //Hour Marker
  stroke('rgb(150,48,48)');
  strokeWeight(1);
  for (let i = 0; i <= 24; i++) {//Calculates line ticks on vertical bar
    let y = 70 + (i * 250) / 24;
    line(330, y, 340, y);
  }
}