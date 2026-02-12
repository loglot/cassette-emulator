const { BrowserWindow, ipcMain} = require('electron')
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
    for(let i = 0; i<tapewins.length;i++){
        if(tapewins[i]){
            // console.log(tapewins[i])
            if(tapewins[i].webContents){
            // console.log(JSON.stringify(game.tape))
            tapewins[i].webContents.send('draw',game.tape[i])
            game.tape[i].tick()
            
            }
        }
    }

}
ipcMain.on('makeCassette', make)
ipcMain.on('flipCassette', (event) => {
  const webContents = event.sender; 
  const win = BrowserWindow.fromWebContents(webContents)
  game.tape[win.id-1].flip()

})
ipcMain.on('killCassette', (event) => {
  const webContents = event.sender; 
  const win = BrowserWindow.fromWebContents(webContents)
  game.tape[win.id-1]=false
  tapewins[win.id-1].close()
  tapewins[win.id-1]=false

})
async function flip(event){
  const webContents = event.sender; 
  const win = BrowserWindow.fromWebContents(webContents)
  console.log(win.id)
}
async function make(){
    // console.log(aaaa)
    game.makeTape()
    tapewins[tapewins.length]=await game.winman.makeWindow("tape")

}
async function init(){
    tapewins[0]=await game.winman.makeWindow("tape")
}