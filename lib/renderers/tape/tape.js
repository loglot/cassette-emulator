

const canvas=document.getElementById("canvas")
const ctx = canvas.getContext("2d")
window.electronAPI.onDraw((tape) => {
        // ctx.fillStyle="#ffffff7c"
        // ctx.fillRect(0,0,100,100)
        // alert(JSON.stringify(tape))
        draw(tape)

})
        ctx.fillStyle="#ffffff7c"
        ctx.fillRect(0,0,50,100)
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
var squish=1
function draw(tape){
    canvas.width=145
    canvas.height=90
    ctx.translate(tape.width/2,0)
    if(tape.flipping){
        squish=squish/1.5
    }else{
        squish=((squish*1)+1)/2
    }
    ctx.scale(squish,1)
    ctx.translate(-tape.width/2,0)
        ctx.fillStyle="#ffffff7c"
        ctx.fillRect(tape.x,tape.y,tape.width,tape.height)
            ctx.beginPath();
        if(tape.side==1){
            ctx.arc(tape.x+(tape.height/2), tape.y+(tape.height/2), (tape.maxsize-tape.minsize)*tape.time/tape.len+tape.minsize, 0, 2 * Math.PI);
            ctx.arc(tape.x+(tape.width-(tape.height/2)), tape.y+(tape.height/2), (tape.maxsize-tape.minsize)-((tape.maxsize-tape.minsize)*tape.time/tape.len)+tape.minsize, 0, 2 * Math.PI);
            var time=tape.time

        }else{
            ctx.arc(tape.x+(tape.width-(tape.height/2)), tape.y+(tape.height/2), (tape.maxsize-tape.minsize)*tape.time/tape.len+tape.minsize, 0, 2 * Math.PI);
            ctx.arc(tape.x+(tape.height/2), tape.y+(tape.height/2), (tape.maxsize-tape.minsize)-((tape.maxsize-tape.minsize)*tape.time/tape.len)+tape.minsize, 0, 2 * Math.PI);
            var time=-tape.time
        }            
        ctx.fillStyle="#574231"
        ctx.fill();
        ctx.fillStyle="#ffffff"
        ctx.translate(tape.x+(tape.height/2),tape.y+(tape.height/2))
        ctx.rotate(time)
        ctx.fillRect(-((tape.minsize*1.5)/2),-((tape.minsize*1.5)/2),(tape.minsize*1.5),(tape.minsize*1.5))
        ctx.rotate(-time)
        ctx.translate(-(tape.x+(tape.height/2))+tape.x+(tape.width-(tape.height/2)),0)
        ctx.rotate(time)
        ctx.fillRect(-((tape.minsize*1.5)/2),-((tape.minsize*1.5)/2),(tape.minsize*1.5),(tape.minsize*1.5))
        ctx.rotate(-time)
        ctx.translate(-(tape.x+(tape.width-(tape.height/2))),-(tape.y+(tape.height/2)))
        ctx.fillStyle="#c5c5c5b7"
        ctx.fillRect(tape.x+5,tape.y+5,tape.width-10,20)
        ctx.textBaseline ="top"
        ctx.font = `bold ${20}px sans-serif`;
        ctx.fillStyle="#000000"
        ctx.fillText(tape.label[tape.side][0],tape.x+7,tape.y+5)
        ctx.textAlign ="right"
        ctx.fillText(tape.label[tape.side][1],tape.x+tape.width-10,tape.y+5)
        if(tape.displayState==2){
            ctx.fillStyle="rgba(255, 255, 255, 0.1)"
            ctx.fillRect(0,0,tape.width,tape.height)
            ctx.fillStyle="rgb(43, 43, 43)"
            ctx.fillRect(0,0,tape.width,tape.height/3)
            ctx.fillRect(0,tape.height-tape.height/3,tape.width,tape.height/3)
            ctx.fillRect(0,0,tape.width/3.5,tape.height)
            ctx.fillRect(tape.width-tape.width/3.5,0,tape.width/3.5,tape.height)

        }
        if(tape.displayState==1){
            ctx.scale(1,.5)
            ctx.fillStyle="rgba(255, 255, 255, 0.1)"
            ctx.fillRect(0,0,tape.width,tape.height)
            ctx.fillStyle="rgb(43, 43, 43)"
            ctx.fillRect(0,0,tape.width,tape.height/3)
            ctx.fillRect(0,tape.height-tape.height/3,tape.width,tape.height/3)
            ctx.fillRect(0,0,tape.width/3.5,tape.height)
            ctx.fillRect(tape.width-tape.width/3.5,0,tape.width/3.5,tape.height)

        }
    }
