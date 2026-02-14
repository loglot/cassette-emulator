

const canvas=document.getElementById("canvas")
const ctx = canvas.getContext("2d")
window.electronAPI.onDraw((tape) => {
        // ctx.fillStyle="#ffffff7c"
        // ctx.fillRect(0,0,100,100)
        draw(tape)

})
kd.L.press(function () {
    window.electronAPI.latch()
});
function draw(player){
    canvas.width=165
    canvas.height=140
        ctx.fillStyle="#161616ff"
    ctx.fillRect(0,0,165,140)
        ctx.fillStyle="#0d0d0dff"
    ctx.fillRect(10,10,145,90)

    for(let i = 0; i<6;i++){
        ctx.fillStyle="#292929ff"
        ctx.fillRect(10+25*i,120,20,20)

    }

        ctx.translate(10,10)
        if(player&&!player.latch){
            ctx.scale(1,.5)

        }
        ctx.fillStyle="rgba(31, 31, 31, 1)"
        ctx.fillRect(0,0,145,90/3)
        ctx.fillRect(0,90-90/3,145,90/3)
        ctx.fillRect(0,0,145/3.5,90)
        ctx.fillRect(145-145/3.5,0,145/3.5,90)

        
}
draw()