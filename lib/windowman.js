const { app, BrowserWindow} = require('electron')
const path = require('node:path')
module.exports = class Windows{
    sizes={
        tape:[150,90]
    }
    constructor(){
        
    }
    makeWindow(type){
        if(this.game.ready){
            const win = new BrowserWindow({
                width: this.sizes[type][0],
                height: this.sizes[type][1],
                frame: false,
                transparent: true,
                resizable: false,
                webPreferences: {
                    preload: path.join(__dirname, `lib/renderers/${type}pl.js`)
                }
            })

            win.loadFile(`lib/renderers/${type}.html`)
            // console.log(yay)
            return win

        }else{
    setTimeout(ticker,100)

        }
    }
}