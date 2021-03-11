class Ball {
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }

        this.image = loadImage("567-5670575_flying-superhero-png-clipart-flying-superhero-transparent-png.png");
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        strokeWeight(4)
        stroke("black")
        fill("green")
        ellipse( 0, 0, this.width, this.height);
        pop();
      }
}