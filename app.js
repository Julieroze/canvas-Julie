/*gets the element "mode-btn" from index.html and turns it into a simple variable that is easy to use in 
javascript. A const value cannot be changed and is fixed. */
const modeBtn = document.getElementById("mode-btn");

/*gets the element "destroy-btn" from index.html and turns it into a simple variable that is easy to use in 
javascript. A const value cannot be changed and is fixed. */
const destroyBtn = document.getElementById("destroy-btn");

/*gets the element "eraser-btn" from index.html and turns it into a simple variable that is easy to use in 
javascript. A const value cannot be changed and is fixed. */
const eraserBtn = document.getElementById("eraser-btn");


const colorOptions = Array.from(
  document.getElementsByClassName("color-option")
);

/*gets the element "color" from index.html and turns it into a simple variable that is easy to use in 
javascript. A const value cannot be changed and is fixed. */
const color = document.getElementById("color");

/*gets the element "line-width" from index.html and turns it into a simple variable that is easy to use in 
javascript. A const value cannot be changed and is fixed. */
const lineWidth = document.getElementById("line-width");

/*queryselector returns the very first element within the document that matches the one in quotes. So this code is
 telling the pc to get an element named "canvas" and we're turning it into a fixed variable with const*/
const canvas = document.querySelector("canvas");

//making a context fixed variable that returns 2d drawing functions (provides 2d rendering context for the <canvas> element)
const ctx = canvas.getContext("2d");

//sets the variable 'canvas' height to 800 pixels
canvas.width = 800;

//sets the variable 'canvas' height to 800 pixels
canvas.height = 800;

//make a constant value named "canvas_width" that will also be 800
const canvas_width = 800;

//make a constant value named "canvas_height" that will also be 800
const canvas_height = 800;

//setting the canvas.width the same as canvas_width so it's easier to code later on
canvas.width = canvas_width;

//setting the canvas.width the same as canvas_height so it's easier to code later on
canvas.height = canvas_height;

//the linewidth variable now has the same values as linewidth.value
ctx.lineWidth = lineWidth.value;

//set the painting function to false so I can't draw yet
let isPainting = false;

//let the fill function to false so nothing can be filled yet
let isFilling = false;

//for the function onMove
function onMove(event) {

  //if the isPaninting function is true/running
  if (isPainting) {

    //make the line starting point go to the x-axis and the y-axis of the mouse
    ctx.lineTo(event.offsetX, event.offsetY);

    //() -> start. Start drawing the strokes inside of the context variable (makes it 2d)
    ctx.stroke();

    //aka stop
    return;
  }

  //the line will follow the mouse (offset x and y)
  ctx.moveTo(event.offsetX, event.offsetY);
}

//when the function called startpainting ()-> starts 
function startPainting() {

  //make the isPainting true so I can draw on the canvas
  isPainting = true;
}

//when the function named cancelpainting is started
function cancelPainting() {

  //isPainting is set to false, which stops the line from getting drawn
  isPainting = false;

  ctx.beginPath();
}

//When a function named onLineWidthChange is started within event
function onLineWidthChange(event) {

  //change the linewidth to the targetted value
  ctx.lineWidth = event.target.value;
}
function onColorChange(event) {
  ctx.strokeStyle = event.target.value;
  ctx.fillStyle = event.target.value;
}
function onColorClick(event) {
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
    modeBtn.innerText = "Draw";
  }
}

//function for the fill button
function onCanvasClick() {
  if (isFilling) {
    ctx.fillRect (0,0,canvas_width,canvas_height);
  }
}

//function for the destroy button
function onDestroyClick() {
  ctx.fillStyle = "white";
  ctx.fillRect(0,0, canvas_width, canvas_height);
}

//function for the eraser
function onEraserClick() {
  ctx.strokeStyle = "white";
  isFilling = false;
  modeBtn.innerText = "Fill";
}

//add a function that will be activated when the mouse is moved
canvas.addEventListener("mousemove", onMove);

//add a function that will be activated when the mouse is moved
canvas.addEventListener("mousedown", startPainting);

//add a function that will be activated when the mouse is moved
canvas.addEventListener("mouseup", cancelPainting);

//add a function that will be activated when the mouse is moved
canvas.addEventListener("mouseleave", cancelPainting);

//add a function that will be activated when the mouse is moved
canvas.addEventListener("click", onCanvasClick);


//add a function that will be activated when the mouse is moved
lineWidth.addEventListener("change", onLineWidthChange);

//add a function that will be activated when the mouse is moved
color.addEventListener("change", onColorChange);



colorOptions.forEach((color) => color.addEventListener("click", onColorClick));
modeBtn.addEventListener("click", onModeClick);

destroyBtn.addEventListener("click", onDestroyClick);
eraserBtn.addEventListener("click", onEraserClick);