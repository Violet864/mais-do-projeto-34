class Ball{
    constructor(x, y){
        let options = {
            restitution: 0.8
          };
      
          this.body = Bodies.circle(x, y, options);
          
      
          World.add(world, this.body);
    }

    show() {
        var pos = this.body.position;
        push();
        rotate(angle);
        ellipseMode(CENTER);
        ellipse(0, 0);
        pop();
      }
}