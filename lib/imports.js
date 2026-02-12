Tape =  require("./tape.js")
Windows= require("./windowman.js")
console.log(Tape)
console.log(Windows)
const { app} = require('electron')

module.exports = class imports{
    constructor(){
        
    }
    // player = new TapePlayer()
    app=app
    ready=false
    tape = new Tape()
    winman = new Windows(this)
    init(){
        app.whenReady().then(() => {
            this.ready=true
        })

    }
    // container = new TapeContain()
}