var waterIm,factoryIm,skyIm
var test
var gamestate=0
var manIm,work,workIm
var animal1,an1,an2,an3,an4,an5,an6,animal2,animal3,animal4,animal5,animal6
var toy1,toy2,toy3,toy4,toy1img,toy2img,toy3img,toy4img
var bckgrnd,s1




function preload() {
  waterIm = loadImage("./pic/water.png");
 factoryIm = loadImage("./pic/factory.png");
skyIm = loadImage("./pic/sky.png");
manIm = loadImage("./pic/man.png");
an1=loadImage("./pic/toto.png");
an2=loadImage("./pic/oct.png");
an3=loadImage("./pic/fish1.png");
an4=loadImage("./pic/fish 2.png");
an5=loadImage("./pic/whale1.png");
an6=loadImage("./pic/crab.png");
workIm=loadImage("./pic/mch.png")
toy1img=loadImage("./pic/toys/duck.png")
toy2img=loadImage("./pic/toys/play.png")
toy3img=loadImage("./pic/toys/rocket.png")
toy4img=loadImage("./pic/toys/train.png")
s1=loadSound("./sound/ssad.mp4")
}

function setup() {
  background(180)
  createCanvas(windowWidth,windowHeight);
  test= createSprite(520,400,100,100);
  
  test.addImage("boy",manIm)
  test.scale=0.5
  toy1=new Toy(windowWidth/2+100,305)
  toy1.image(toy1img)
  toy1.scales(0.2)

  toy2=new Toy(windowWidth/2+250,280)
  toy2.image(toy2img)
  toy2.scales(0.2)

  toy3=new Toy(windowWidth/2+300,310)
  toy3.image(toy3img)
  toy3.scales(0.2)

  toy4=new Toy(windowWidth/2+350,390)
  toy4.image(toy4img)
  toy4.scales(0.2)

}


function draw() {
   //background("black");

  var y =Math.random(round(300,height-300))
  var x =Math.random(round(300,width-300))

  //creating object for aquatic animals
  animal1=new Sea(200,300)
  animal2= new Sea(750,100)
  animal3= new Sea(200,500)
  animal4= new Sea(800,500)
  animal5= new Sea(1000,200)
  animal6= new Sea(1200,400)

  //creating factory toys
 
 // toy2=new Toy()
     // toy3=new Toy()
     // toy4=new Toy()

     bckgrnd=createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight)
     bckgrnd.addImage("cc",workIm)
 
     bckgrnd.visible=false
 //0 gamestate
   if(gamestate==0){
   
     //factory
     dis();
     background(factoryIm);
     dissappeartoyimg()
    //console.log(gamestate)
    fill("black")
    textSize(20)
      text("Hi! I am Bob.This is my toy manufacturing factory",2,300)
     fill("red")
     textSize(30)
     text(" PRESS ENTER KEY ",windowWidth-350,windowHeight/2-200)
     bckgrnd.visible=false
   }
 
   //1 gamestate
   if(gamestate==1){
     //water state
     dissappeartoyimg()
     appear();
     background(waterIm);
     //s1.play()
     bckgrnd.visible=false
     fill("white")
     textSize(20)
       text("AHH! you like plastic toys. ",5,100)
       text(":( See water animals are sad due to water pollution caused by factory.",5,115)
       textSize(20)
       text("PRESS UPARROW KEY to check smoke ",windowWidth-400,windowHeight/2-200)
   } 
 
 //2 gamestate 

 if(gamestate==2){
//sky state
  background(skyIm)
  dissappeartoyimg()
  dis();
  bckgrnd.visible=false
  fill("white")
  textSize(20)
    text("OHH! Ozone layer is getting effected too because of Air pollution caused by factory,Are u still happy with plastic toys ? ",10,100)
}
//toys forming in factory state
if(gamestate==3){
 // background(workIm)
 background("brown")
  
 bckgrnd.visible=true
  fill("white")
  textSize(20)
  //text(mouseX + ","+mouseY,mouseX,mouseY)
  
  text("Hi! I am building Plastic toys for you",10,100)

  text("Factory is disposing garbage inside sea and smoke above in sky",10,30)
  text("To check garbage disposed properly press DOWN ARROW and to check Smoke press UP ARROW",10,50)
  
  test.x=800
bckgrnd.depth=test.depth
  test.depth=bckgrnd.depth+1
  //test.visible=false
  dis()
  appeartoyimg()
  toy1.velocity()
  toy2.velocity()
  toy3.velocity()
  toy4.velocity()
  
 // addtoyimg()
  
  //background("white")
}

var ran =Math.round(random(1,6))
var rand=Math.round(random(1,6))

var imgname="an"+ran
animal1.image(an1)
animal2.image(an2)
animal2.scales(0.5)
animal3.image(an3)
animal3.scales(0.2)
animal4.image(an4)
animal5.image(an5)
animal6.image(an6)
animal6.scales(0.5)


   
drawSprites();
dis()
 
bckgrnd.visible=false

 }

 function keyPressed(){
  if(keyCode==DOWN_ARROW){
    gamestate=1
    
      }
      console.log(gamestate);

      if(keyCode==UP_ARROW){
        gamestate=2
      }
    console.log("test");
    if(keyCode==13){
      gamestate=3
    }}
    function dis()
    {
     animal1.disappers();
     animal2.disappers();
     animal3.disappers();
     animal4.disappers();
     animal5.disappers();
     animal6.disappers();
     
    }
    function appear()
    {
      animal1.app()
     animal2.app()
     animal3.app()
     animal4.app()
     animal5.app()
     animal6.app()
    }
    function dissappeartoyimg()
    {toy1.disappers()
      toy2.disappers()
      toy3.disappers()
      toy4.disappers()
    }
    function appeartoyimg()
    {toy1.appers()
      toy2.appers()
      toy3.appers()
      toy4.appers()
    }
