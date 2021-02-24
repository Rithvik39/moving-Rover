canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

var nasa_imgs_array=["nasa_1.jpeg","nasa_2.jpg","nasa_3.jpg","nasa_4.jpg","nasa_5.jpg"];
var change_new_random_img= Math.floor(Math.random()*5); 

var background_img= nasa_imgs_array[change_new_random_img];
console.log("background image =" + background_img);
var rover_img= "rover.png";
rover_width= 100;
rover_height= 90;
rover_x= 10;
rover_y= 10;

function add(){
    background_imgTag= new Image();
    background_imgTag.onload= upload_background;
    background_imgTag.src= background_img;

    rover_Tag= new Image();
    rover_Tag.onload= upload_rover;
    rover_Tag.src= rover_img;
  }

  function upload_background(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
  }

  function upload_rover(){
      ctx.drawImage(rover_Tag,rover_x,rover_y,rover_width,rover_height);
  }

  window.addEventListener("keydown", my_keydown);
  function my_keydown(e){
      key_pressed= e.keyCode;
      console.log(key_pressed);

      if(key_pressed=="39"){
          right();
          console.log("right arrow is pressed");
      }
      if(key_pressed=="37"){
          left();
        console.log("left arrow is pressed");
    }
    if(key_pressed=="38"){
          up();
        console.log("up arrow is pressed");
    }
    if(key_pressed=="40"){
          down();
        console.log("down arrow is pressed");
    } 
  }

  function right(){
      if(rover_x<= 700){
          rover_x= rover_x + 10;
          console.log("When right arrow key is preesed, x=" + rover_x + "y=" + rover_y);
          upload_background();
          upload_rover();
      }
  }

  function left(){
    if(rover_x >= 0){
        rover_x= rover_x - 10;
        console.log("When left arrow key is preesed, x=" + rover_x + "y=" + rover_y);
        upload_background();
        upload_rover();
    }
}

function up(){
    if(rover_y >= 0){
        rover_y= rover_y - 10;
        console.log("When up arrow key is preesed, x=" + rover_x + "y=" + rover_y);
        upload_background();
        upload_rover();
    }
}

function down(){
    if(rover_y <= 500){
        rover_y= rover_y + 10;
        console.log("When down arrow key is preesed, x=" + rover_x + "y=" + rover_y);
        upload_background();
        upload_rover();
    }
}


