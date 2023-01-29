const colorOptions = Array.from(
  document.getElementsByClassName("color-options")
);

const lineWidth = document.getElementById("line-width")
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = lineWidth.value;
let isPainting = false;


function onMove(event){
    if(isPainting) {
    
     ctx.lineTo(event.offsetX, event.offsetY);
     ctx.stroke();
     return
    }
    ctx.moveTo(event.offsetX, event.offsetY);
}


function startPainting(){
  isPainting = true;
  ctx.beginPath();
}

function CancelPainting(){
  isPainting = false;
  
}

function onLineWidthChange(event) {
    ctx.lineWidth=event.target.value
}

function onColorClick(event){
  const colorValue = event.target.dataset.color;
  ctx.strokeStyle = colorValue;
  ctx.fillStyle = colorValue;
  color.vakue = colorValue;
}

canvas.addEventListener("mousemove", onMove)
canvas.addEventListener("mousedown", startPainting)
canvas.addEventListener("mouseup", CancelPainting)
canvas.addEventListener("mouseleave", CancelPainting)
lineWidth.addEventListener("change", onLineWidthChange)

colorOptions.forEach((color) => color.addEventListener ("click", onColorClick));

