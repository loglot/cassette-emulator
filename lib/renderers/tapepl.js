const { contextBridge, ipcRenderer } = require('electron/renderer')

contextBridge.exposeInMainWorld('electronAPI', {
  onDraw: (callback) => ipcRenderer.on('draw', (_event,tape) => callback(tape)),
  make: (value) => ipcRenderer.send('makeCassette'),
  flip: (value) => ipcRenderer.send('flipCassette')
})


