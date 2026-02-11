module.exports = class Tape{
    x=0
    y=0
    width=145
    height=90
    len=150
    time=0
    maxsize=40
    minsize=7
    side=0
    label=[["test","A"],["test","B"]]
    constructor(){
        
    }
    flip(){
        this.side=(this.side+1)%2
    }
    draw(ctx){
        ctx.fillStyle="#ffffff7c"
        ctx.fillRect(this.x,this.y,this.width,this.height)
            ctx.beginPath();
        if(this.side==0){
            if(this.time<this.len){
                this.time+=.1
            }else{
                // this.flip()
            }
            ctx.arc(this.x+(this.height/2), this.y+(this.height/2), (this.maxsize-this.minsize)*this.time/this.len+this.minsize, 0, 2 * Math.PI);
            ctx.arc(this.x+(this.width-(this.height/2)), this.y+(this.height/2), (this.maxsize-this.minsize)-((this.maxsize-this.minsize)*this.time/this.len)+this.minsize, 0, 2 * Math.PI);
            var time=this.time

        }else{
            if(this.time>0){
                this.time-=.1
            }else{
                // this.flip()
            }
            ctx.arc(this.x+(this.width-(this.height/2)), this.y+(this.height/2), (this.maxsize-this.minsize)*this.time/this.len+this.minsize, 0, 2 * Math.PI);
            ctx.arc(this.x+(this.height/2), this.y+(this.height/2), (this.maxsize-this.minsize)-((this.maxsize-this.minsize)*this.time/this.len)+this.minsize, 0, 2 * Math.PI);
            var time=-this.time
        }            
        ctx.fillStyle="#574231"
        ctx.fill();
        ctx.fillStyle="#ffffff"
        ctx.translate(this.x+(this.height/2),this.y+(this.height/2))
        ctx.rotate(time)
        ctx.fillRect(-(this.minsize/2),-(this.minsize/2),this.minsize,this.minsize)
        ctx.rotate(-time)
        ctx.translate(-(this.x+(this.height/2))+this.x+(this.width-(this.height/2)),0)
        ctx.rotate(time)
        ctx.fillRect(-(this.minsize/2),-(this.minsize/2),this.minsize,this.minsize)
        ctx.rotate(-time)
        ctx.translate(-(this.x+(this.width-(this.height/2))),-(this.y+(this.height/2)))
        ctx.fillStyle="#c5c5c5"
        ctx.fillRect(this.x+5,this.y+5,this.width-10,20)
        ctx.textBaseline ="top"
        ctx.font = `bold ${20}px sans-serif`;
        ctx.fillStyle="#000000"
        ctx.fillText(this.label[this.side][0],this.x+7,this.y+5)
        ctx.textAlign ="right"
        ctx.fillText(this.label[this.side][1],this.x+this.width-10,this.y+5)
    }
}