function setup() {
  createCanvas(600, 600);
  noLoop();
}

function draw() {
  const baseY = 420;//Signifies ground floor of project

  const cycle = random(['day', 'night']);//Decides day or night
  drawBackground(cycle);

  //Draws Mountains
  let mountainX = -40;//Where mountains start
  while (mountainX < width) {
    const w = random(100, 200);//Decides width of mountain
    const h = random(100, 300);//Decides height of mountain
    drawMountain(mountainX, baseY, w, h,cycle);//Makes perameters of mountains
    mountainX += w * 0.3;//How often mountains overlap
  }

  //Draws Plants
  let plantX = 0;//Sets how far plants can generate
  while (plantX < width) {
    const plantType = random(['grass', 'bush', 'tree']);//Picks random plant to generate
    if (plantType === 'grass') drawGrass(plantX, height * 0.7,cycle);
    else if (plantType === 'bush') drawBush(plantX, height * 0.7,cycle);
    else drawTree(plantX, height * 0.7,cycle);
    plantX += random(60, 120);//Picks how many pixels apart plants are generated from 60-120 pixels across the screen
  }

  // Draw Buildings and Lamp Posts
  for (let x = 0; x < width; x += 100) {//Generates building every 100px apart
    const type = random(['house', 'skyscraper', 'lamp']);//Randomly selects building
    if (type === 'house') drawHouse(x, height * 0.725, cycle);
    else if (type === 'skyscraper') drawSkyscraper(x + 10, height * 0.725, cycle);
    else drawLampPost(x + 10, height * 0.725, cycle);
  }

  //Draws Lakes
  for (let lakeX = 0; lakeX < width; lakeX += random(100, 400)) {
    drawLake(lakeX,cycle);
  }
}

function drawBackground(cycle) {
  
  //Draw Background Based on Night or Day
  noStroke();
  if (cycle === 'day') {
    //Day
    background('rgb(112,166,226)');
    fill('rgb(14,139,14)');
    rect(0, 420, width, height - 420);
    fill('rgb(165,163,163)');
    rect(0, 435, width, 40);
    
    //Sun
    fill('yellow');
    ellipse(500, 100, 160);
  } else {
    //Night
    background('black');
    fill('rgb(3,105,3)');
    rect(0, 420, width, height - 420);
    fill('rgb(96,96,96)');
    rect(0, 435, width, 40);

    //Moon
    fill('white');
    ellipse(500, 100, 160);
  }
}

function drawGrass(x, yBase,cycle) {//Draws Grass
  if (cycle === 'day') {
    stroke('darkgreen');
  }else{
    stroke('rgb(3,57,3)');
  }
  strokeWeight(2);
  line(x, yBase + 5, x, yBase - 20);
  line(x, yBase + 5, x - 5, yBase - 25);
  line(x, yBase + 5, x + 5, yBase - 25);
  line(x, yBase + 5, x - 10, yBase - 20);
  line(x, yBase + 5, x + 10, yBase - 20);
  line(x, yBase + 5, x - 7, yBase - 15);
  line(x, yBase + 5, x + 7, yBase - 5);
}

function drawBush(x, yBase,cycle) {//Draws Bushes
  noStroke();
  if (cycle === 'day') {
    fill('green');
  }else{
    fill('rgb(1,69,1)');
  }
  ellipse(x + 10, yBase, 25, 25);
  ellipse(x + 40, yBase, 25, 25);
  ellipse(x + 25, yBase, 30, 30);
  ellipse(x + 25, yBase - 10, 20, 20);
  ellipse(x + 25, yBase - 25, 30, 30);
  ellipse(x + 15, yBase - 15, 25, 25);
  ellipse(x + 35, yBase - 15, 25, 25);
}

function drawTree(x, yBase,cycle) {//Draws Trees
  if (cycle === 'day') {
    stroke('rgb(79,56,5)');
  }else{
    stroke('rgb(51,36,3)');
  }
  strokeWeight(14);
  line(x, yBase, x, yBase - 130);

  strokeWeight(10);
  line(x, yBase - 130, x + 52, yBase - 156);
  line(x + 52, yBase - 156, x + 69, yBase - 173);
  line(x + 52, yBase - 156, x + 65, yBase - 148);
  line(x, yBase - 130, x - 43, yBase - 173);
  line(x - 43, yBase - 173, x - 61, yBase - 191);
  line(x - 43, yBase - 173, x - 52, yBase - 166);

  strokeWeight(8);
  line(x, yBase - 130, x, yBase - 217);

  strokeWeight(6);
  line(x, yBase - 173, x - 17, yBase - 199);
  line(x - 17, yBase - 199, x - 26, yBase - 208);
  line(x, yBase - 191, x + 17, yBase - 208);
  line(x + 17, yBase - 208, x + 26, yBase - 217);

  strokeWeight(4);
  line(x, yBase - 217, x - 17, yBase - 234);
  line(x - 17, yBase - 234, x - 26, yBase - 241);
  line(x, yBase - 217, x + 17, yBase - 234);
  line(x + 17, yBase - 234, x + 26, yBase - 241);

  noStroke();
  if (cycle === 'day') {
    fill('green');
  }else{
    fill('rgb(2,64,2)');
  }
  ellipse(x + 69, yBase - 173, 43, 43);
  ellipse(x + 65, yBase - 148, 43, 43);
  ellipse(x - 61, yBase - 191, 43, 43);
  ellipse(x - 52, yBase - 166, 43, 43);
  ellipse(x - 26, yBase - 208, 43, 43);
  ellipse(x + 26, yBase - 217, 43, 43);
  ellipse(x - 26, yBase - 241, 43, 43);
  ellipse(x + 26, yBase - 241, 43, 43);
  ellipse(x, yBase - 255, 43, 43);
}

function drawMountain(baseX, baseY, baseWidth, height,cycle) {//Draws Mountain
  const x1 = baseX;
  const y1 = baseY;
  const x2 = baseX + baseWidth * 0.3;
  const y2 = baseY - height * random(0.7, 1);
  const x3 = baseX + baseWidth * 0.7;
  const y3 = baseY - height * random(0.7, 1);
  const x4 = baseX + baseWidth;
  const y4 = baseY;

  if (cycle === 'day') {//Mountain Color
    fill('rgb(94,138,187)');
  }else{
    fill('rgb(35,35,35)');
  }
  noStroke();
  quad(x1, y1, x2, y2, x3, y3, x4, y4);
}

function drawHouse(x, y, cycle) {
  noStroke();

  // House base color
  if (cycle === 'day') {
    fill('#A29E72');
  } else {
    fill('#664422');
  }
  rect(x, y - 60, 80, 60);

  // Roof color
  if (cycle === 'day') {
    fill('brown');
  } else {
    fill('#442200');
  }
  triangle(x, y - 60, x + 40, y - 100, x + 80, y - 60);

  // Door color
  if (cycle === 'day') {
    fill('rgb(138,114,46)');
  } else {
    fill('rgb(90,75,29)');
  }
  rect(x + 30, y - 30, 20, 30);

  // Window color
  if (cycle === 'day') {
    fill('rgb(255,255,255)');
  } else {
    fill('#F4F099');
  }
  rect(x + 10, y - 50, 15, 15);
  rect(x + 55, y - 50, 15, 15);
}

function drawSkyscraper(x, y, cycle) {
  noStroke();

  // Building color
  if (cycle === 'day') {
    fill('#999');
  } else {
    fill('#333');
  }
  rect(x, y - 200, 60, 200);

  // Window colors
  for (let i = y - 180; i < y; i += 30) {
    for (let j = x + 5; j < x + 60; j += 20) {
      if (cycle === 'day') {
        fill('white');
      } else {
        fill('#FEF59D');
      }
      rect(j, i, 10, 15);
    }
  }
}

function drawLampPost(x, y, cycle) {
  if (cycle === 'day') {
    stroke('rgb(165,165,165)');
  } else {
    stroke('rgb(98,98,98)');
  }
  strokeWeight(6);
  line(x, y, x, y - 60);

  noStroke();

  // Lamp head color
  if (cycle === 'day') {
    fill('#ccc');
  } else {
    fill('#FEF59D');
  }
  ellipse(x, y - 65, 20, 20);
}

function drawLake(x,cycle) {// Note: fix so lakes form one
  const lakeWidth = random(100, 250);
  const lakeHeight = random(70, 80);
  const yBase = random(520, 600);

  noStroke();
  if (cycle === 'day') {
    fill('rgb(68,152,234)');
  } else {
    fill('rgb(22,93,163)');
  }
  ellipse(x + lakeWidth / 2, yBase, lakeWidth, lakeHeight);
}
