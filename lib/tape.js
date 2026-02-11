export class Tape{
    x=0
    y=0
    width=145
    height=90
    len=150
    time=0
    maxsize=40
    minsize=7
    side="a"
    constructor(){
        
    }
    draw(ctx){
        if(this.time<this.len){
            this.time+=.1
        }
        ctx.fillStyle="#fff"
        ctx.fillRect(this.x,this.y,this.width,this.height)
        ctx.beginPath();
        ctx.arc(this.x+(this.height/2), this.y+(this.height/2), (this.maxsize-this.minsize)*this.time/this.len+this.minsize, 0, 2 * Math.PI);
        ctx.arc(this.x+(this.width-(this.height/2)), this.y+(this.height/2), (this.maxsize-this.minsize)-((this.maxsize-this.minsize)*this.time/this.len)+this.minsize, 0, 2 * Math.PI);
        ctx.fillStyle="#574231"
        ctx.fill();
        ctx.fillStyle="#ffffff"
        ctx.translate(this.x+(this.height/2),this.y+(this.height/2))
        ctx.rotate(this.time)
        ctx.fillRect(-(this.minsize/2),-(this.minsize/2),this.minsize,this.minsize)
        ctx.rotate(-this.time)
        ctx.translate(-(this.x+(this.height/2))+this.x+(this.width-(this.height/2)),0)
        ctx.rotate(this.time)
        ctx.fillRect(-(this.minsize/2),-(this.minsize/2),this.minsize,this.minsize)
        ctx.rotate(-this.time)
        ctx.translate(-(this.x+(this.width-(this.height/2))),-(this.y+(this.height/2)))
        ctx.fillStyle="#c5c5c5"
        ctx.fillRect(this.x+5,this.y+5,this.width-10,20)
    }
}