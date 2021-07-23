var bg,bg2;
var play1;
var playbg;
var player,playerImage;
var playermoveleft;
var obstacle,o1,o2;
var positive,op1,op2,op3;
var positiveGroup,negativeGroup;
var gameState="intro";
function preload(){
    bg=loadImage("images/bg1.png")
    bg2=loadImage("images/bg road 4.png")
    playerImage=loadAnimation("images/back.png")
playermoveleft=loadAnimation("images/back.png","images/left leg.png","images/right lrg.png")
o1=loadImage("images/crowd.png")
op1=loadImage("images/hand wash.png")
o2=loadImage("images/obstacle.png")
op2=loadImage("images/social distancing.png")
op3=loadImage("images/wear mask.png")
}
function setup(){
    createCanvas(windowWidth,windowHeight)
    play1= createSprite(windowWidth/2+150,windowHeight/2+180,250,100);
    play1.visible=false
playbg=createSprite(windowWidth/2-130,windowHeight/2+90,800,400)
playbg.scale=1.7
playbg.addImage(bg2)
playbg.visible=false

player=createSprite(windowWidth/2-100,windowHeight/2+300)
player.addAnimation("leftmove",playermoveleft)
positiveGroup=new Group()
negativeGroup=new Group()



player.scale=2
}
function draw(){
    background("aqua")
   
    if (gameState==="intro"){
        background("orange")
       image(bg,windowWidth/2-850,windowHeight/2-410,width,height)
       // fill("blue")
       //textSize(40)
        //text("GO CORONA GO ",windowWidth/2-150,windowHeight/2-250)
       // fill("red")
       play1.visible=false
       playbg.visible=false
       player.visible=false
      fill("yellow")
        textSize(30)
        text("𝔻𝔼𝕊𝕀𝔾ℕ𝔼𝔻 𝔹𝕐 𝕊ℕ𝔼ℍ𝔸 𝕄 ℝ𝔸𝕁ℙ𝕌ℝ𝕆ℍ𝕀𝕋",windowWidth/2-0.5,windowHeight/2+280)
        fill("purple")
        text("[ℙℝ𝔼𝕊𝕊 𝔸ℝℝ𝕆𝕎 𝕂𝔼𝕐 𝕋𝕆 𝕄𝕆𝕍𝔼]",windowWidth/2-0.5,windowHeight/2+320)
        fill("blue")
        text ("ℂ𝕃𝕀ℂ𝕂 ℙ𝕃𝔸𝕐 𝕋𝕆 𝕊𝕋𝔸ℝ𝕋",windowWidth/2-0.5,windowHeight/2+360)
        //text("press space to start",windowWidth/2-250,windowHeight/2+200)
      
        //button.position(800, 500,300,500);
        
        if(mousePressedOver(play1)){
            gameState="play"
        }

    }

    if(gameState=="play"){
       playbg.visible=true
       player.visible=true
       playbg.velocityY=4
       Obstaclepositive()
       Obstaclenegative()
        
        if(keyDown("left")){
         // player.addAnimation("leftmove",playermoveleft) 
          player.changeAnimation("leftmove",playermoveleft)
            player.x=player.x-2
            
        }
        if(keyDown("right")){
           // player.addAnimation("leftmove",playermoveleft) 
            player.changeAnimation("leftmove",playermoveleft)
            player.x=player.x+2
            
        }
        if(playbg.y>700){
            playbg.y=height/3
        }
       
    }
    drawSprites()
}
function Obstaclepositive(){
    if(frameCount%200==0){
        positive=createSprite(200,random(windowHeight/2,windowHeight-100),10,50)
        positive.velocityX=4
        var num=Math.round(random(1,3))
        console.log(num)
        switch(num){
            case 1:positive.addImage(op1)
            break;
            case 2 :positive.addImage(op2)
            break;
            case 3:positive.addImage(op3)
            break;

        }
        positive.lifetime=windowWidth/4
        player.depth=positive.depth
        player.depth+=1
      
positiveGroup.add(positive)
    }
   

}
function Obstaclenegative(){
    if(frameCount%200==0){
        obstacle=createSprite(random(windowWidth/2-500,windowWidth/2+500),random(windowHeight/2-100,windowHeight/2+200))
        obstacle.velocityX=-4
        var num1=Math.round(random(1,2))
        console.log(num1)
        switch(num1){
            case 1:obstacle.addImage(o1)
            break;
            case 2 :obstacle.addImage(o2)
            break;
           

        }
        obstacle.lifetime=windowWidth/4
        player.depth=obstacle.depth
        player.depth+=1
        negativeGroup.add(obstacle)
    }
    
   

}