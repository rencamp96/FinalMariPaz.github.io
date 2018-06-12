function Particle() {
  this.x = random(width);
  this.y = random(height);
  this.r = random(5,10);

  this.vx = random(1, 10);
  this.vy = random(1, 10);;
  this.xdir = int(random(2)) * 2 - 1;
  this.ydir = int(random(2)) * 2 - 1;
  
  this.lifespan = 2;

  this.displayParticle = function() {
    //background(0,0,0,100);
    noStroke();
    fill(255,this.lifespan);
    push();
    translate(this.x, this.y);
    ellipse(0, 0, this.r, this.r);
    pop();
  }

  this.updateParticle = function() {
   // print(this.vx);
    this.x += this.vx * this.xdir;
    this.y += this.vy * this.ydir;
    this.lifespan -= 2;
     
    if (this.x > width || this.x < 0) {
      this.xdir *= (-1);
    }
    if (this.y > height || this.y < 0) {
      this.ydir *= (-1);
    }
  }
}