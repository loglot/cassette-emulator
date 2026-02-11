const { app, BrowserWindow, Menu, ipcMain } = require('electron')
const path = require('node:path')
const imports = require('./lib/imports.js')
console.log(JSON.stringify(imports))
const game = new imports()
var tape=[]
const createWindow = () => {
  const win = new BrowserWindow({
    width: 150,
    height: 90,
    frame: false,
    transparent: true,
    webPreferences: {
      preload: path.join(__dirname, 'lib/renderers/tapepl.js')
    }
  })

  win.loadFile('lib/renderers/tape.html')
  return win
}

app.whenReady().then(() => {
  tape[0] = createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

function tick(){
    for(let i = 0; i<tape.length;i++){

        if(tape[i].webContents){
            // console.log(JSON.stringify(game.tape))
            tape[i].webContents.send('draw',game.tape)
        }
    }
    setTimeout(tick,100)
}
    setTimeout(tick,0)