const { BrowserWindow, ipcMain} = require('electron')
const path = require('node:path')
module.exports = class Windows{
    sizes={
        tape:[145,90],
        player:[165,140]
    }
    game
    constructor(game){
        this.game=game
        console.log(game)
    }
    async makeWindow(type,parent,game=this.game,sizes=this.sizes){
        sleep(100)
        if(game.ready){
            var properties={
                width: sizes[type][0],
                height: sizes[type][1],
                frame: false,
                transparent: true,
                resizable: false,
                webPreferences: {
                    preload: path.join(__dirname, `../lib/renderers/${type}/${type}pl.js`)
                }
            }
            if(parent){
                properties.parent=parent
            }
            const win = new BrowserWindow(properties)

            win.loadFile(`lib/renderers/${type}/${type}.html`)
            // console.log(yay)
            return win

        }
    }
}
function stringify(val, depth, replacer, space) {
    depth = isNaN(+depth) ? 1 : depth;
    function _build(key, val, depth, o, a) { // (JSON.stringify() has it's own rules, which we respect here by using it for property iteration)
        return !val || typeof val != 'object' ? val : (a=Array.isArray(val), JSON.stringify(val, function(k,v){ if (a || depth > 0) { if (replacer) v=replacer(k,v); if (!k) return (a=Array.isArray(v),val=v); !o && (o=a?[]:{}); o[k] = _build(k, v, a?depth:depth-1); } }), o||(a?[]:{}));
    }
    return JSON.stringify(_build('', val, depth), null, space);
}
// Source - https://stackoverflow.com/a/39914235
// Posted by Dan Dascalescu, modified by community. See post 'Timeline' for change history
// Retrieved 2026-02-11, License - CC BY-SA 4.0

const sleep = ms => new Promise(r => setTimeout(r, ms));
