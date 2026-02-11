Tape =  require("./tape.js")
Windows= require("./windowman.js")
console.log(Tape)
console.log(Windows)
const { app} = require('electron')

module.exports = class imports{
    constructor(){
        
    }
    // player = new TapePlayer()
    tape = new Tape()
    winman = new Windows()
    app=app
    ready=false
    init(){
        app.whenReady().then(() => {
            this.ready=true
        })

    }
    // container = new TapeContain()
}