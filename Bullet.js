class Bullet {
    constructor(x,y){
        this.x = spaceCraft.x;
        this.y = spaceCraft.y;
        this.width =50;
        this.height = 50;
        this.image = loadImage("bulletImage");
    }
}
show()
{
 rect(this.x,this.y,this.width,this.height);
}