class Box {

    constructor(x,y,width,height,color) {
      var options_box = {
          isStatic : true
      }

      this.body = Bodies.rectangle(x,y,width,height,options_box);
      this.width = width;
      this.height = height;
      this.color = color;

      World.add(world,this.body);
        
    }

    display(){
      strokeWeight(0);
      var pos = this.body.position;
      rectMode(CENTER);
      fill(this.color);
      rect(pos.x, pos.y, this.width, this.height);
    }
}