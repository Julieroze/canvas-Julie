const modeBtn = document.getElementById("mode-btn");
const destroyBtn = document.getElementById("destroy-btn");
const eraserBtn = document.getElementById("eraser-btn");
const colorOptions = Array.from(
  document.getElementsByClassName("color-options")
);

const lineWidth = document.getElementById("line-width")
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const color = document.getElementById("color");
const canvas_width = 800;
const canvas_height = 800;
canvas.width = canvas_width;
canvas.height = canvas_height;
ctx.lineWidth = lineWidth.value;
let isPainting = false;
let isFilling = false;


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

function onColorChange(event) {
  const FreeColor = event.target.value;
  ctx.strokeStyle = FreeColor;
  ctx.fillStyle = FreeColor;
  
}

function onColorClick(event){
  const colorValue = event.target.dataset.color;
  ctx.strokeStyle = colorValue;
  ctx.fillStyle = colorValue;
  color.value = colorValue;
}

function onModeClick () {
  if (isFilling) {
    isFilling = false;
    modeBtn.innerText = "Fill";
  } else {
    isFilling = true;
    modeBtn.innerText = "Draw"
  }
}

function onCanvasClick() {
  if (isFilling) {
    ctx.fillRect (0, 0, canvas_width, canvas_height);
  }
}

function onDestroyClick() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas_width, canvas_height);
}

function onEraserClick() {
  ctx.strokeStyle = "white";
  isFilling = false;
  modeBtn.innerText = "Fill"
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", CancelPainting);
canvas.addEventListener("mouseleave", CancelPainting);
canvas.addEventListener("click", onCanvasClick);
color.addEventListener("change", onColorChange);
lineWidth.addEventListener("change", onLineWidthChange);


colorOptions.forEach((color) => color.addEventListener ("click", onColorClick));
modeBtn.addEventListener("click", onModeClick);

destroyBtn.addEventListener("click", onDestroyClick)
eraserBtn.addEventListener("click", onEraserClick)