import { imports } from "./lib/imports.js";
const canvas=document.getElementById("canvas")
const ctx = canvas.getContext("2d")
var game=new imports()
canvas.width=150
canvas.height=90
function tick(){
    game.tape.draw(ctx)
    requestAnimationFrame(tick)
}
requestAnimationFrame(tick)