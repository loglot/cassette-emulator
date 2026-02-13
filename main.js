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
            
            }
            var pwp = playerwin.getBounds();
            var twp = tape[0].getBounds();
            if(tape[1].set){
                if(game.player.latch){
                    tape[0].setBounds({ x: pwp.x+10, y: pwp.y+10 })
                    tape[0].setIgnoreMouseEvents(true)
                    tape[1].displayState=2
                    tape[1].tick()
                }else{
                    if((Math.abs((pwp.x-10)-twp.x)>50||Math.abs((pwp.y+10)-twp.y)>50)){
                        tape[1].set=false
                        tape[1].displayState=0
                    }else{
                        tape[0].setBounds({ x: pwp.x+10, y: pwp.y+10 })
                        tape[0].setIgnoreMouseEvents(false)
                        tape[1].displayState=1

                    }

                }
            }else{
                if(Math.abs(((pwp.x-10)-twp.x)<10&&Math.abs((pwp.y+10)-twp.y)<10)&&!game.player.latch){
                    tape[1].set=true
                }else{
                    tape[0].setIgnoreMouseEvents(false)
                    tape[1].displayState=0
                }

            }
        }
    }

}



ipcMain.on('latchPlayer', ()=>{game.player.latch=!game.player.latch})
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