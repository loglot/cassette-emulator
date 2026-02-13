

const canvas=document.getElementById("canvas")
const ctx = canvas.getContext("2d")
window.electronAPI.onDraw((tape) => {
        // ctx.fillStyle="#ffffff7c"
        // ctx.fillRect(0,0,100,100)
        // alert(JSON.stringify(tape))
        draw(tape)

})
kd.A.press(function () {
    window.electronAPI.make()
});
kd.F.press(function () {
    window.electronAPI.flip()
});
kd.K.press(function () {
    window.electronAPI.kill()
});
canvas.addEventListener("mousedown", function (evt) {
    
  if (evt.button === 2) {
        window.electronAPI.flip()
  }
  if (evt.button === 3) {
        window.electronAPI.kill()
  }
});
function draw(player){
    canvas.width=165
    canvas.height=140
        ctx.fillStyle="#161616ff"
    ctx.fillRect(0,0,165,140)
        ctx.fillStyle="#0d0d0dff"
    ctx.fillRect(10,10,145,90)

}
draw()