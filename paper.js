class paper
{
	constructor(x,y)
	{
		
        var options={
			isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2			
			}
        this.x=x;
		this.y=y;
		this.paperWidth=200;
		this.paperHeight=213;
		
		
		this.image=loadImage("paper.png")
		this.body=Bodies.rectangle(x, y, width, height , options);
 		
        World.add(world, this.body);

		
		

		
		
		
	}
	display()
	{
      var paperPos=this.body.position;			

			

      push()
      translate(paperPos.x, paperPos.y);
      rectMode(CENTER)
      //strokeWeight(4);
      fill(128,128,128)
      rect(0,0,this.w, this.h);
      pop()
			
	}

}