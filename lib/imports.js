Tape =  require("./tape.js")
Windows= require("./windowman.js")
console.log(Tape)
console.log(Windows)
const { app} = require('electron')

module.exports = class imports{
    constructor(){
        
    }
    player = new TapePlayer()
    app=app
    ready=false
    tape = []
    winman = new Windows(this)
    init(){
        this.tape[0]=new Tape(true)
        app.whenReady().then(() => {
            this.ready=true
        })

    }
    makeTape(set=false){
        return new Tape(set)
    }   
    // container = new TapeContain()
}