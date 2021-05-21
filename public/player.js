class Player{
  constructor(x, y, id, name, rdy) {
    this.pos = createVector(x, y);
    this.dir = 0;
    this.radius = 5 * scale;
    this.speed = 2 * scale;
    this.vel = createVector();
    this.uname = name;
    this.id = id;
    this.ready = rdy;
  }
  getID(){
    return this.id;
  }
  setID(id) {
    this.id = id;
  }
  setUname(name) {
    this.uname = name;
  }
  getUname() {
    return this.uname;
  }
  setPos(x,y){
    this.pos.x = x;
    this.pos.y = y;
  }

  getPos() {
    return this.pos;
  }
  getDir() {
    return this.dir;
  }
  move(dx, dy) {
    if (dx == 0 && dy == 0) { return; }
    let angle = Math.atan2(-dy, dx);

    this.vel.x = this.speed * Math.cos(angle + (this.dir * PI / 180));
    this.vel.y = this.speed * Math.sin(angle + (this.dir * PI / 180));

    this.pos.add(this.vel);
  }
  setSpeed(n) {
    if (n == 1) {
      this.speed = 1 * scale;
    } else if (n == 2) {
      this.speed = 2 * scale;
    }

  }
  changeDir(n) {
    this.dir += n;
  }

  checkCollision() {
    let player = {
      radius: this.radius,
      center: this.pos,
    };
    for (let wall of walls) {
      var line = {
        p1: createVector(wall[0], wall[1]),
        p2: createVector(wall[2], wall[3]),
      }
      let points = inteceptCircleLineSeg(player, line);

      if (points.length > 0) {
        if (line.p1.x != line.p2.x) {
          this.pos.y += -1 * this.vel.y
        }
        if (line.p1.y != line.p2.y) {
          this.pos.x += -1 * this.vel.x
        }

      }

    }
  }
}