$(document).ready(function() {


  console.log("ji");

  var canvas = document.createElement("canvas");
  var context = canvas.getContext("2d");
  canvas.width = 600;
  canvas.height = 600;
  document.body.appendChild(canvas);
  document.onkeydown = function(key) {
    touch(key.keyCode);

    movesheik(key.keyCode);
    movekirby(key.keyCode);
    console.log(kirbyObject.x - sheikObject.x)
    console.log(kirbyObject.y - sheikObject.y)
  };
  context.fillRect(20, 20, 20, 20);


  var kirbyReady = false;
  var kirby = new Image();
  kirby.onLoad = function() {
    kirbyReady = true;
  };
  var kirbyObject = {};
  kirby.src = "http://vignette3.wikia.nocookie.net/spritechronicles/images/5/5c/Kirby.png/revision/latest?cb=20101010225540";

  kirbyObject.x = 300;
  kirbyObject.y = 300;

  var upKey = 38;
  var downKey = 40;
  var leftKey = 37;
  var rightKey = 39;
  var movekirby = function(key) {
    if (key == upKey) {
      kirbyObject.y -= 38;
      console.log(kirbyObject.y);

    }
    else if (key == downKey) {
      kirbyObject.y += 40;
      console.log(kirbyObject.y);

    }
    else if (key == leftKey) {
      kirbyObject.x -= 37;

    }
    else if (key == rightKey) {
      kirbyObject.x += 39;

    }
    // MORE DIRECTIONS!!!
  };

  //$(document).keydown(function(e){

  var sheikReady = false;
  var sheik = new Image();
  sheik.onLoad = function() {
    sheikReady = true;
  };
  var sheikObject = {};
  sheik.src = "http://rs274.pbsrc.com/albums/jj273/Brawlkurosaki/abysswolf%20sprites/thsheik.gif~c200";

  sheikObject.x = 100;
  sheikObject.y = 100;

  var up_Key = 87;
  var down_Key = 83;
  var left_Key = 65;
  var right_Key = 68;
  var movesheik = function(key) {
    if (key === up_Key) {
      sheikObject.y -= 87;
      console.log(sheikObject.y);

    }
    else if (key === down_Key) {
      sheikObject.y += 83;

    }
    else if (key === left_Key) {
      sheikObject.x -= 65;

    }
    else if (key === right_Key) {
      sheikObject.x += 68;

    }
    // MORE DIRECTIONS!!!
  };


  /* 
     if (kirbyObject.x - sheikObject.x >=-110 && kirbyObject.x - sheikObject.x <= 120){
      
       console.log("Smack");
     
       }
      
     */
  var sheik_Attack_key = 49;
  var Kirby_Attack_key = 17;



  var fight = function(key) {
    if (key === sheik_Attack_key)
      console.log("Honk");
  }



  var kirbyStock = 3


  var touch = function() {
    if (kirbyObject.x - sheikObject.x >= -110 && kirbyObject.x - sheikObject.x <= 120 /*&& key ===enter_key*/ ) {

     
      kirbyStock = kirbyStock - 1;

       RemoveLife();

    }


  };

var RemoveLife = function(){
  
     console.log("Kirby has " + kirbyStock + " left");

      console.log(kirbyStockImage,kirbyStockImage2,kirbyStockImage3);
      
         debugger;
      
     if(kirbyStock < 3){
        
       kirbyStockImage.remove();
        
      }
  
  
};







  var Reset = function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  var gravity = function() {
    var kGravityScale = 1;
    var kGroundHeight = 300;
    if (kirbyObject.y < canvas.height - kGroundHeight) {
      kirbyObject.y += kGravityScale;
    }
    if (sheikObject.y < canvas.height - kGroundHeight) {
      sheikObject.y += 1.5;

    }



  };



  var kirbyDamage = 10
  var sheikDamage = 8



  var kirbyStockImage = new Image();
  kirbyStockImage.src = "http://i454.photobucket.com/albums/qq262/Starscreamer95/SmashBrosKirby.png"
  var kirbyStockImage2 = new Image();
  kirbyStockImage2.src = "http://i454.photobucket.com/albums/qq262/Starscreamer95/SmashBrosKirby.png"
  var kirbyStockImage3 = new Image();
  kirbyStockImage3.src = "http://i454.photobucket.com/albums/qq262/Starscreamer95/SmashBrosKirby.png"




  var sheikStockImage = new Image();
  sheikStockImage.src = "http://vignette1.wikia.nocookie.net/supersmashbrosfanon/images/6/64/271px-HW_Sheik.png/revision/latest?cb=20140825133505"
  var sheikStockImage2 = new Image();
  sheikStockImage2.src = "http://vignette1.wikia.nocookie.net/supersmashbrosfanon/images/6/64/271px-HW_Sheik.png/revision/latest?cb=20140825133505"
  var sheikStockImage3 = new Image();
  sheikStockImage3.src = "http://vignette1.wikia.nocookie.net/supersmashbrosfanon/images/6/64/271px-HW_Sheik.png/revision/latest?cb=20140825133505"

  // var fight = function(){


  //   if 



  // }






  var render = function() {
    Reset();
    gravity();
    context.drawImage(kirby, kirbyObject.x, kirbyObject.y);
    context.drawImage(sheik, sheikObject.x, sheikObject.y);
    context.drawImage(kirbyStockImage, 0, 0, 80, 80);
    context.drawImage(kirbyStockImage2, 90, 0, 80, 80);
    context.drawImage(kirbyStockImage3, 180, 0, 80, 80);
    context.drawImage(sheikStockImage, 270, 0, 80, 80);
    context.drawImage(sheikStockImage2, 360, 0, 80, 80);
    context.drawImage(sheikStockImage3, 450, 0, 80, 80);
    context.fillRect(0, 450, 600, 20);
  };






  var main = function() {


    render();
    window.requestAnimationFrame(main);

  }


  main();

});