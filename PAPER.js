class Paper {

    constructor(x,y,diameter){
        var options_paper = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }

        this.body = Bodies.circle(x,y,diameter,options_paper);
        this.radius = diameter/2;
        this.image = loadImage("Sprites/CrumpledPaper.png");

        World.add(world, this.body);
    }

    display(){
     var pos = this.body.position;
     fill("lightyellow");
     ellipseMode(RADIUS);
     image(this.image, pos.x, pos.y, this.radius + 50, this.radius + 50);
    }
}