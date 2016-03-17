$(document).ready(function(){





console.log("ji");

var canvas = document.createElement("canvas");
var context = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 600;
document.body.appendChild(canvas);
document.onkeydown = function(key) {
  move(key.keyCode);
};
context.fillRect(20,20,20,20);


var kirbyReady = false;
var kirby = new Image();
kirby.onLoad = function() {
  kirbyReady = true;
};
kirbyObject = {};
kirby.src = "http://vignette3.wikia.nocookie.net/spritechronicles/images/5/5c/Kirby.png/revision/latest?cb=20101010225540";

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
    
  }else if(key == downKey){
      kirbyObject.y += 50;
      console.log(kirbyObject.y);
      
  }else if(key == leftKey){
      kirbyObject.x -= 50;
    
  }else if(key == rightKey){
     kirbyObject.x += 50;
    
  }
  // MORE DIRECTIONS!!!
};

//$(document).keydown(function(e){
  
var SheikReady = false;
var Sheik= new Image();
Sheik.onLoad =function(){
  SheikReady = true;
};
SheikObject = {};
Sheik.src = "http://rs713.pbsrc.com/albums/ww131/jamiegoodwin89/Forums/Brawl-Sheik.gif~c200";

SheikObject.x=300;
SheikObject.y=300;

var upKey = 38;
var downKey = 40;
var leftKey = 37;
var rightKey = 39;
var move = function(key) {
  if (key == upKey) {
    SheikObject.y -= 50;
    console.log(SheikObject.y);
    
  }else if(key == downKey){
      SheikObject.y += 50;
      console.log(SheikObject.y);
      
  }else if(key == leftKey){
      SheikObject.x -= 50;
    
  }else if(key == rightKey){
     SheikObject.x += 50;
    
  }
  // MORE DIRECTIONS!!!
};


  
  if(KirbyObject.x-SheikObject.x >=150 || KirbyObject.x-SheikObject.x <=-150);
  
  console.log("Smack");
  
  
  
  
  

                   
                   
                   
                   
                   
                   
                   

var Reset = function() {
	context.clearRect(0, 0, canvas.width, canvas.height);
};

var gravity = function() {
	var kGravityScale = 1;
  var kGroundHeight = 300;
  if (kirbyObject.y < canvas.height - kGroundHeight) {
  	kirbyObject.y += kGravityScale;
  }
};

var render = function() {
	Reset();
	gravity();
  context.drawImage(kirby, kirbyObject.x, kirbyObject.y);
  context.fillRect(0,450,600,20);
};

var main = function() {

  render();
  window.requestAnimationFrame(main);
};

main();
});