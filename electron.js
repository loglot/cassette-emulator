const { app, BrowserWindow } = require('electron')
const path = require('node:path')
const {tick,game} = require('./main.js')
var tape=[]
const createWindow = () => {
  const win = new BrowserWindow({
    width: 150,
    height: 90,
    frame: false,
    transparent: true,
    resizable: false,
    webPreferences: {
      preload: path.join(__dirname, 'lib/renderers/tapepl.js')
    }
  })

  win.loadFile('lib/renderers/tape.html')
  return win
}

app.whenReady().then(() => {
  // tape[0] = createWindow()
  app.on('activate', () => {
    ticker()
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

function ticker(){
    tick(tape)
    setTimeout(ticker,100)
}