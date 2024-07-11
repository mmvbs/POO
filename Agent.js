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
