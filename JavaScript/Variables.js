

var canvas = document.createElement("canvas");
var context = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 600;
document.body.appendChild(canvas);
document.onkeydown = function(key) {
  move(key.keyCode);
}

var kirbyReady = false;
var kirby = new Image();
kirby.onLoad = function() {
  kirbyReady = true;
}
kirbyObject = {}
kirby.src = "http://vignette3.wikia.nocookie.net/spritechronicles/images/5/5c/Kirby.png/revision/latest?cb=20101010225540"

kirbyObject.x = 300;
kirbyObject.y = 300;

var upKey = 38;
var downKey = 40;
var leftKey = 37;
var rightKey = 39;
var move = function(key) {
  if (key == upKey) {
    kirbyObject.y -= 50;
    console.log(kirbyObject.y);
    
  }else if(key == downKey{
      kirby object.y -= 50
      console.log(kirbyObject.y)
      
  }
  // MORE DIRECTIONS!!!
}

var Reset = function() {
	context.clearRect(0, 0, canvas.width, canvas.height);
}

var gravity = function() {
	var kGravityScale = 1;
  var kGroundHeight = 300;
  if (kirbyObject.y < canvas.height - kGroundHeight) {
  	kirbyObject.y += kGravityScale;
  }
}

var render = function() {
	Reset();
	gravity();
  context.drawImage(kirby, kirbyObject.x, kirbyObject.y);
}

var main = function() {

  render();
  window.requestAnimationFrame(main)
}

main();
