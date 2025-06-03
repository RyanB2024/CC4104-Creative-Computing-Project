let palette; //Array of colors for drawing lines
let field = []; //2D array for angles
let cols, rows; //Number of columns and rows on the canvas
let scale = 10; //Grid resolution
let zoff = 100; //Z-offset for noise
let focalPoints = []; //Array of attractor/repelling points

function setup() {
  createCanvas(600, 600);
  noLoop();
  noiseDetail(4, 0.5);

  let allColors = [
    '#E63946', '#354675', '#A8DADC', '#457B9D', '#1D3557',
    '#F72585', '#B5179E', '#7209B7', '#560BAD', '#480CA8',
    '#06D6A0', '#1B9AAA', '#EF476F', '#FFC43D', '#F4F1DE',
    '#264653', '#2A9D8F', '#E9C46A', '#F4A261', '#E76F51',
    '#D8F3DC', '#B7E4C7', '#95D5B2', '#74C69D', '#52B788'
  ]; //Possible selection of colors

  palette = shuffle(allColors).slice(0, 4); //Picks 4 random colors

  //Calculates number of rows and columns base on canvas and scale
  cols = floor(width / scale);
  rows = floor(height / scale);

  //Creates interaction points
  for (let i = 0; i < 3; i++) {//Creates number of points
    focalPoints.push({
      pos: createVector(random(width), random(height)),
      attract: random([true, false])
    });
  }

  //Generates flow field
  for (let y = 0; y < rows; y++) {
    field[y] = [];
    for (let x = 0; x < cols; x++) {
      let px = x * scale;
      let py = y * scale;
      let baseAngle = noise(x * 0.01, y * 0.01, zoff) * TWO_PI;

      let finalAngle = baseAngle;

      // Blend influence of each focal point
      focalPoints.forEach(fp => {
        let toFocal = p5.Vector.sub(fp.pos, createVector(px, py));
        let angleToFocal = fp.attract ? toFocal.heading() : toFocal.heading() + PI;
        finalAngle = lerpAngle(finalAngle, angleToFocal, 0.3);
      });

      field[y][x] = [finalAngle];
    }
  }

  background(255);
  noFill();

  for (let i = 0; i < 30000; i++) {//Draws number of lines
    drawFlowLine(random(width) + random(-2, 2), random(height) + random(-2, 2), random(50, 150));
  }
}

function drawFlowLine(x, y, len) {
  let c = color(random(palette)); //Variable for random color palette
  c.setAlpha(100);
  stroke(c);
  strokeWeight(random(0.1, 50));//Randomly assigns line weight between 0.1-50
  beginShape();
  for (let i = 0; i < len; i++) {
    vertex(x, y);
    let col = floor(constrain(x / scale, 0, cols - 1));
    let row = floor(constrain(y / scale, 0, rows - 1));
    let [angle] = field[row][col];
    let v = p5.Vector.fromAngle(angle).mult(1.5);
    x += v.x;
    y += v.y;
    if (x < 0 || x > width || y < 0 || y > height) break;
  }
  endShape();
}

// Smooth interpolation between angles
function lerpAngle(a, b, t) {
  let diff = b - a;
  if (abs(diff) > PI) {//Makes sure the two angles take smoothest route to each other
    if (b > a) a += TWO_PI;
    else b += TWO_PI;
  }
  return a + (b - a) * t;
}