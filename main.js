import { imports } from "./lib/imports.js";
const canvas=document.getElementById("canvas")
const ctx = canvas.getContext("2d")
var game=new imports()
canvas.width=500
canvas.height=500
function tick(){
    game.tape.draw(ctx)
    requestAnimationFrame(tick)
}
requestAnimationFrame(tick)