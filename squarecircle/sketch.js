class Agent {
  constructor(x, y, size, vx, vy) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.vx = vx;
    this.vy = vy;
  }

  move(campo) {
    
    if (this.x + this.vx < 0 || this.x + this.vx + this.size > campo.width_) {
      this.vx *= -1;
    }

    
    if (this.y + this.vy < 0 || this.y + this.vy + this.size > campo.height_) {
      this.vy *= -1; 
    }

    this.x += this.vx;
    this.y += this.vy;
  }

  draw() {
    rect(this.x, this.y, this.size, this.size);
  }
}

class Campo {
  constructor(width_, height_) {
    this.width_ = width_;
    this.height_ = height_;
  }

  draw() {
    rect(0, 0, this.width_, this.height_);
  }
}

class World {
  constructor(field, agent) {
    this.field = field;
    this.agent = agent;
  }

  step() {
    this.agent.move(this.field);
  }

  draw() {
    this.field.draw();
    this.agent.draw();
  }
}

let world;

function setup() {
  createCanvas(400, 400);
  bloco = new Agent(10, 10, 50, 1, 1);
  campo = new Campo(200, 300);
  world = new World(campo, bloco);
}

function draw() {
  background(0);
  world.draw();
  world.step();
}
const squareType = 0;
const circleType = 1;

const horizType = 0;
const vertType = 1;

let shapes = [];


class Movement {
  move(obj) {
  }
}

class HorizontalMovement extends Movement {
  move(obj) {
    obj.x += 1;
    if (obj.x > width) {
      obj.x = 0;
    }
  }
}

class VerticalMovement extends Movement {
  move(obj) {
    obj.y += 1;
    if (obj.y > height) {
      obj.y = 0;
    }
  }
}

class Shape {
  constructor(x, y, movement) {
    this.x = x;
    this.y = y;
    this.movement = movement;
  }

  update() {
    this.movement.move(this);
  }

  display() {
  }
}

class Square extends Shape {
  display() {
    square(this.x, this.y, 10);
  }
}

class Circle extends Shape {
  display() {
    circle(this.x, this.y, 10);
  }
}

class ShapeBuilder {
  constructor() {
    this.shapeType = squareType;
    this.movementType = vertType;
  }

  setShape(shapeType) {
    if (shapeType === squareType) {
      this.shapeType = squareType;
    } else if (shapeType === circleType) {
      this.shapeType = circleType;
    }
  }

  setMovement(movementType) {
        if (movementType === horizType) {
      this.movementType = horizType;
    } else if (movementType === vertType) {
      this.movementType = vertType;
    }
  }

  buildShape(x, y) {
    let movement;
    if (this.movementType === horizType) {
      movement = new HorizontalMovement();
    } else if (this.movementType === vertType) {
      movement = new VerticalMovement();
    }

    if (this.shapeType === squareType) {
      return new Square(x, y, movement);
    } else if (this.shapeType === circleType) {
      return new Circle(x, y, movement);
    }
  }
}
let shapeBuilder = new ShapeBuilder();
function setup() {
  createCanvas(400, 400);
  let button = createButton("Quadrado");
  button.mousePressed(createSquare);
  button = createButton("Círculo");
  button.mousePressed(createCircle);
  button = createButton("Horizontal");
  button.mousePressed(createHorizMov);
  button = createButton("Vertical");
  button.mousePressed(createVertMov);
}

function draw() {
  background(220);
  for (let shape of shapes) {
    shape.update();
    shape.display();
  }
}

function mouseClicked() {
  if (mouseY > height) return;
  let shape = shapeBuilder.buildShape(mouseX, mouseY);
  shapes.push(shape);
}

function createSquare() {
  shapeBuilder.setShape(squareType);
}

function createCircle() {
  shapeBuilder.setShape(circleType);
}

function createHorizMov() {
  shapeBuilder.setMovement(horizType);
}

function createVertMov() {
  shapeBuilder.setMovement(vertType);
}
