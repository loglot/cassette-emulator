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
    tick(){
        this.time+=.1
    }
    flip(){
        this.side=(this.side+1)%2
    }
}