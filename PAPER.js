class Paper{
    constructor(){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
            
        }
        this.x =x;
		this.y=y;
		this.radius=r
		this.image=loadImage("paper.png");
		this.body=Bodies.circle(this.x, this.y, (this.radius-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var paperPosition=this.body.position;		

			push()
			translate(paperPosition.x, paperPosition.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.r, this.r)
			//ellipse(0,0,this.r, this.r);
			pop()
			
	}

}

    