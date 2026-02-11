const { contextBridge, ipcRenderer } = require('electron/renderer')

contextBridge.exposeInMainWorld('electronAPI', {
  onDraw: (callback) => ipcRenderer.on('draw', (_event,tape) => callback(tape)),
  counterValue: (value) => ipcRenderer.send('counter-value', value)
})


