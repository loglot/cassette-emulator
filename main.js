
const imports = require('./lib/imports.js')
const game = new imports()
    game.init()

exports.game= game
tapewins=[]
tapewins[0]=game.winman.makeWindow("tape")
    console.log("aaa")
exports.tick = function(){
    for(let i = 0; i<tapewins.length;i++){
        // console.log(tapewins[i].webContents)
        if(tapewins[i].webContents){
        console.log("yay")
            // console.log(JSON.stringify(game.tape))
            tapewins[i].webContents.send('draw',game.tape)
            game.tape.tick()
        }
    }

}