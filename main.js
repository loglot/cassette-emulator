const { ipcMain} = require('electron')
const imports = require('./lib/imports.js')
const game = new imports()
    game.init()
tapewins=[]
time=0
exports.game= game
    console.log("aaa")
exports.tick = function(){
    time++
    if(time>10 && tapewins[0]==undefined){
        init()
        time=0
    }
            game.tape.tick()
    for(let i = 0; i<tapewins.length;i++){
        if(tapewins[i]&&tapewins[i].webContents){
            // console.log(JSON.stringify(game.tape))
            tapewins[i].webContents.send('draw',game.tape)
        }
    }

}
ipcMain.on('makeCassette', make)
async function make(){
    // console.log(aaaa)
    tapewins[tapewins.length]=await game.winman.makeWindow("tape")

}
async function init(){
    tapewins[0]=await game.winman.makeWindow("tape")
}