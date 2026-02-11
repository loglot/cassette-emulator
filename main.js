
const imports = require('./lib/imports.js')
const game = new imports()

exports.game= game

exports.tick = function(tapewins){
    for(let i = 0; i<tapewins.length;i++){

        if(tapewins[i].webContents){
            // console.log(JSON.stringify(game.tape))
            tapewins[i].webContents.send('draw',game.tape)
            game.tape.tick()
        }
    }

}