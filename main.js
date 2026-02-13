const { BrowserWindow, ipcMain} = require('electron')
const imports = require('./lib/imports.js')
const game = new imports()
    game.init()
var tapewins=new Set()
var playerwin
time=0
exports.game= game
    console.log("aaa")
exports.tick = function(){
    time++
    if(time>10 && playerwin==undefined){
        init()
        time=0
    }
    // console.log((tapewins))
    for(const tape of tapewins){
        if(tape){
            // console.log(tape)
            if(tape[0].webContents){
                tape[0].webContents.send('draw',tape[1])
                tape[1].tick()
            
            }
            if(tape[1].set){
                    var pwp = playerwin.getBounds();
                    tape[0].setBounds({ x: pwp.x+10, y: pwp.y+10 })
                    tape[0].setIgnoreMouseEvents(true)
                    // playerwin.setAlwaysOnTop(true)
                    // tape.setAlwaysOnTop(true)
            }else{
                tape[0].setIgnoreMouseEvents(false)

            }
        }
    }

}



ipcMain.on('makeCassette', make)

onTapeIpc("flip",(tape)=>{
    tape[1].flip()
})
onTapeIpc("kill",(tape)=>{
    tape[0].close()
    tapewins.delete(tape)
})




async function make(){
    tapewins.add([await game.winman.makeWindow("tape",playerwin),game.makeTape()])

}
async function init(){
    playerwin=await game.winman.makeWindow("player")
    tapewins.add([await game.winman.makeWindow("tape",playerwin),game.makeTape(true)])
    // tapewins.add(await game.winman.makeWindow("tape",playerwin))
}


function onTapeIpc(name, func){
    ipcMain.on(`${name}Cassette`, (event) => {
        const webContents = event.sender; 
        const win = BrowserWindow.fromWebContents(webContents)
        tapewins.forEach((tape)=>{
            if(tape[0].id==win.id){
                func(tape)
            }
        })
    })
}



const electron = require("electron");
electron.app.on("before-quit", (event) => {
    tapewins=new Set()
})