module.exports = class Tape{
    x=0
    y=0
    width=145
    height=90
    len=150
    time=0
    maxsize=40
    minsize=10
    set=true
    side=0
    label=[[`test ${Math.floor(Math.random()*100)}`,"A"],["test","B"]]
    constructor(set=false){
        this.set=set
    }
    tick(){
        if(this.time<this.len){

            this.time+=.1
        }
    }
    flip(){
        this.side=(this.side+1)%2
    }
}