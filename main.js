import { imports } from "./lib/imports.js";
const canvas=document.getElementById("canvas")
const ctx = canvas.getContext("2d")
var game=new imports()
canvas.width=150
canvas.height=90
function tick(){
canvas.width=150
canvas.height=90
    game.tape.draw(ctx)
    requestAnimationFrame(tick)
    if(Math.random()*1000>998){
        game.tape.flip()
    }
}
requestAnimationFrame(tick)