// Game of life - Alejandro José Uría Álvarez

// ------------------------------- Variables -------------------------------

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var bh = 640;
var bw = 1280;

var ph = 16;
var pw = 16;

var nx = bw/pw;
var ny = bh/ph;

canvas.height = bh;
canvas.width = bw;
canvas.style.border = "1px solid";

var mouseIsDown = false;
var mouseIsMoving = false;

// Add click listener to create active cells
if(!mouseIsMoving){canvas.addEventListener('click', onClick);}

// Mouse follower to paint blocks by holding
canvas.addEventListener('mousedown', function(){mouseIsDown = true});
canvas.addEventListener('mouseup', function(){mouseIsDown = false});
canvas.addEventListener('mousemove', function(){
  mouseIsMoving = true;
  if(mouseIsDown){
    paintOnHold(event);
  }
  mouseIsMoving = false;
})

// -------------------------- Graphical functions --------------------------

function drawBoard(){
  // Vertical lines
  for(var x = pw; x < bw; x+=pw){
    ctx.moveTo(x + 0.5, 0);
    ctx.lineTo(x + 0.5, bh);
  }
  // Horizontal lines
  for(var y = ph; y < bh; y+=ph){
    ctx.moveTo(0, y + 0.5);
    ctx.lineTo(bw, y + 0.5);
  }
  ctx.stroke();
};

function fillBlock(i,j){
  ctx.fillStyle="#000000";
  ctx.fillRect(j*pw, i*ph, pw, ph);
};

function clearBlock(i,j){
  ctx.fillStyle="#ffffff";
  ctx.fillRect(j*pw + 1, i*ph + 1, pw - 1, ph - 1);
};

function updateGraphics(){
  for(var i = 0; i < ny; i++){
    for(var j = 0; j < nx; j++){
      if(cells[i][j] == 1){
        fillBlock(i,j);
      }else{
        clearBlock(i,j);
      }
    }
  }
};

// --------------------------- Logical functions ---------------------------

function initCells(){
  var cells = [];
  for(var i = 0; i < ny; i+=1){
    cells[i] = [];
    for(var j = 0; j < nx; j+=1){
      cells[i][j] = 0;
    }
  }
  return cells;
};

function clearBoard(){
  // Clears both the cell state matrix and the graphics
  // States
  cells = initCells();
  // Graphics
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBoard();
  document.getElementById('ngen').innerHTML = 'Generation #';

  // To break current iteration
  location.reload();
};

function start(){
  var niter = document.getElementById("generations").value;
  var timestep = document.getElementById("timestep").value*1000;
  for(var i = 1; i <= niter; i += 1){
    (function(i) { setTimeout(function() {
      updateCells();
      updateGraphics();
      document.getElementById("ngen").innerHTML = "Generation " + i.toString();
      }, timestep*i);
    })(i);
  };
};

function onClick(event){
  var xpos = event.pageX - canvas.offsetLeft;
  var ypos = event.pageY - canvas.offsetTop;

  var j = Math.floor(xpos/pw);
  var i = Math.floor(ypos/ph);

  // Update graphics and cells matrix
  var state = cells[i][j];
  if(state == 0){
    fillBlock(i,j);
    cells[i][j] = 1;
  }
  else{
    clearBlock(i,j);
    cells[i][j] = 0;
  }
};

function paintOnHold(event){
    var xpos = event.pageX - canvas.offsetLeft;
    var ypos = event.pageY - canvas.offsetTop;

    var j = Math.floor(xpos/pw);
    var i = Math.floor(ypos/ph);

    var j = Math.floor(xpos/pw);
    var i = Math.floor(ypos/ph);

    fillBlock(i,j);
    cells[i][j] = 1;
};

function aliveNeigh(i,j){
  var count = 0;
  for(var mx =-1; mx <= 1; mx++){
    for(var my =-1; my<= 1; my++){
      if(mx == 0 & my == 0){
        continue;
      }
      var auxY = i + my;
      var auxX = j + mx;

      // Periodic Boundary Conditions
      if(auxY == -1){ auxY = ny - 1;}
      else if(auxY == ny){ auxY = 0;}
      if(auxX == -1){ auxX = nx - 1;}
      else if(auxX == nx){ auxX = 0;}

      if(cells[auxY][auxX] == 1){
        count++;
      }
    }
  }
  return count;
};

function updateCells(){
  // Evolution of the cellular automaton, using Conrad's rules for the
  // game of life
  // 1 means alive, 0 means dead
  var auxCells = initCells();

  for(var i = 0; i < ny; i++){
    for(var j = 0; j < nx; j++){
      // Alive cells
      if(cells[i][j] == 1){
        if(aliveNeigh(i,j) == 2 || aliveNeigh(i,j) == 3){
          auxCells[i][j] = 1;
        }
      }
      // Dead cells
      else{
        if(aliveNeigh(i,j) == 3){
          auxCells[i][j] = 1;
        }
      }
    }
  }
  // Overwrite cell matrix with the next one
  cells = auxCells;
};

drawBoard();
var cells = initCells();
