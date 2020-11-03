var sun,sun_image;
var mercury,mercury_image;
var venus, venus_image;
var earth,earth_image;
var mars,mars_image;
var jupiter,jupiter_image;
var saturn,saturn_image;
var uranus,uranus_image;




function preload(){
  sun_image = loadImage("TheSun.png");
  mercury_image = loadImage("Mercury.png");
  venus_image = loadImage("venus.png");
  earth_image = loadImage("globe.jpg");
  mars_image = loadImage("mars.png");
  jupiter_image = loadImage("Jupiter.png");
  saturn_image = loadImage("saturn.png.webp");
  uranus_image = loadImage("uranus.png")
 
}


function setup() {
  createCanvas(1200,500);

  sun = createSprite(600,250,50, 50);
  sun.setCollider("circle",0,0,350);
  sun.addImage("sun", sun_image);
  sun.scale = 0.1;
 
 
  
  
  mercury = createSprite(750,200,50,50);
  mercury.setCollider("circle",0,0,20);
  mercury.addImage("Mercury",mercury_image);
  mercury.scale= 0.02;
 
  
  venus = createSprite(450,230,50,50);
  venus.setCollider("circle",0,0,20);
  venus.addImage("Venus",venus_image);
  venus.scale = 0.32;



  //earth = createSprite(600,95,50,50);

 // earth.addImage("Earth",earth_image);
  //earth.scale = 0.5;


  mars = createSprite(800,430,50,50);
  mars.setCollider("circle",0,0,20);
  mars.addImage("Mars",mars_image);
  mars.scale =  0.6;

  jupiter =createSprite(860,300,50,50);
  jupiter.setCollider("circle",0,0,20);
  jupiter.addImage("Jupiter",jupiter_image);
  jupiter.scale = 0.3;

  saturn = createSprite(350,390,50,50);
  saturn.setCollider("circle",0,0,20);
  saturn.addImage("Saturn",saturn_image);
  saturn.scale = 0.1;

  uranus = createSprite(720,290,50,50);
  uranus.setCollider("circle",0,0,20);
  uranus.addImage("Uranus",uranus_image);
  uranus.scale = 0.4;

}

function draw() {
  background(0); 

 rotate(PI/2);
  
  if(frameCount % 25 === 0){
    sun.scale  = sun.scale + 0.01;
  }

  if(sun.collide(mercury)){
    mercury.destroy();
  }

  if(sun.collide(venus)){
    venus.destroy();
  }

 

  if(sun.collide(mars)){
    mars.destroy();
  }

  if(sun.collide(jupiter)){
    jupiter.destroy();
  }

  if(sun.collide(saturn)){
    saturn.destroy();
  }

  if(sun.collide(uranus)){
    uranus.destroy();
  }

  
  drawSprites();
}