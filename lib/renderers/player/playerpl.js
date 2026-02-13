const { contextBridge, ipcRenderer } = require('electron/renderer')

contextBridge.exposeInMainWorld('electronAPI', {
  onDraw: (callback) => ipcRenderer.on('draw', (_event,tape) => callback(tape)),
  latch: (value) => ipcRenderer.send('latchPlayer'),
  flip: (value) => ipcRenderer.send('flipCassette'),
  kill: (value) => ipcRenderer.send('killCassette')
})


