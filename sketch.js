var Player
var canvas
var PlayButton,PlayButtonImage ,Lvl ,Title
var gameState = "Start"
var WallForLvl1_1, WallForLvl1_2,WallForLvl1_3, BatForLvl1,BatImage, SpikesForLvl1, BOSSForlvl1,BOSSForlvl1Image
var WallForLvl1_4, WallForLvl1_5, IdkHowToMakeTheBossFight
var Edges
var Tutorial,TutorialImage
var TitleImage


function preload(){
    TutorialImage = loadImage("A.png")
    TitleImage = loadImage("I CHEATED THE SITE.png")
    PlayButtonImage = loadImage("PlayButton.png")
    BatImage = loadImage("BAT.gif")
    BOSSForlvl1Image = loadImage("unnamed.png")
}



function setup(){
   
   createCanvas(displayWidth,displayHeight-115)
   Player = createSprite(200,200,20,20)
   PlayButton = createSprite(displayWidth/2,displayHeight/2)
   PlayButton.shapeColor = "green"
   Tutorial = createSprite(200,500,1,1)
   Tutorial.shapeColor = "black"
   Title = createSprite(displayWidth/2,displayHeight/2-270)
   Title.shapeColor = "red"
   Lvl = createSprite(displayWidth/2,displayHeight-300)
   Lvl.shapeColor = "blue"
   
   
   WallForLvl1_1 = createSprite(400,202,20,500)
   WallForLvl1_2 = createSprite(600,200,20,500)
   WallForLvl1_3 = createSprite(600,650,20,280)
   WallForLvl1_4 = createSprite(850,300,500,20)
   WallForLvl1_5 = createSprite(850,520,500,20)
   WallForLvl1_6 = createSprite(400,500,20,500)
   BatForLvl1 = createSprite(870,400,40,40)
   BOSSForlvl1 = createSprite(690,200,40,40)

   WallForLvl1_1.velocityY = 7
   BatForLvl1.velocityY = 4
    
   Player.visible = false
   BOSSForlvl1.visible = false

}

function draw(){
    background("black")

    Edges=createEdgeSprites();

    Title.addImage(TitleImage)
    PlayButton.addImage(PlayButtonImage)
    //BatForLvl1.addImage(BatImage)
    Title.scale = 0.7
    PlayButton.scale = 0.2
 

    WallForLvl1_2.visible = false
    WallForLvl1_3.visible = false
    WallForLvl1_4.visible = false
    WallForLvl1_5.visible = false
    WallForLvl1_6.visible = false
    BatForLvl1.visible = false

    WallForLvl1_1.visible = false
    PlayButton.visible = true

     if(WallForLvl1_1.isTouching(Edges[3])){
         WallForLvl1_1.velocityY = -7
     }
    
     if(WallForLvl1_1.isTouching(Edges[2])){
      WallForLvl1_1.velocityY = 7
  }

  if(BatForLvl1.isTouching(WallForLvl1_5)){
    BatForLvl1.velocityY = -4
}

if(BatForLvl1.isTouching(WallForLvl1_4)){
  BatForLvl1.velocityY = 4
}

     if(mousePressedOver(PlayButton)){
       gameState = "Lvl1"
     }
     
     if(gameState === "Lvl1"){
       Title.visible = false
       PlayButton.destroy()
       Lvl.visible = false
       WallForLvl1_1.visible = true
       WallForLvl1_2.visible = true
       WallForLvl1_3.visible = true
       WallForLvl1_4.visible = true
       WallForLvl1_5.visible = true
       WallForLvl1_6.visible = true
       BatForLvl1.visible = true
       BOSSForlvl1.visible = true
       
       
     }

     if(gameState === "Lvl1"){
        Tutorial.addImage(TutorialImage)
        Tutorial.scale = 0.2
        BOSSForlvl1.addImage(BOSSForlvl1Image)
        BOSSForlvl1.scale = 0.5
        

        fill("white")
        textSize(24)
        textFont("Comic Sans MS")
        text("Press Arrow Keys To Move",60,400)


      

        if(Player.isTouching(Edges[1])||Player.isTouching(Edges[0])||Player.isTouching(Edges[2])||Player.isTouching(Edges[3])){
          gameState = "DieLoser"
          console.log(gameState)
        }

        if(gameState === "DieLoser"){
          PlayButton.destroy()
        }

        Player.visible = true
     }


     if(keyDown(UP_ARROW)){
       Player.velocityY= -7
       Player.velocityX = 0
     }

     if(keyDown(DOWN_ARROW)){
      Player.velocityY= 7
      Player.velocityX = 0
    }

    if(keyDown(LEFT_ARROW)){
      Player.velocityX= -7
      Player.velocityY = 0
    }
    
    if(keyDown(RIGHT_ARROW)){
      Player.velocityX= 7
      Player.velocityY = 0
    }

    if(gameState === "DieLoser"){
      Player.visible = false
      WallForLvl1_1.visible = false
      WallForLvl1_2.visible = false
      WallForLvl1_3.visible = false
      Tutorial.visible = false
      WallForLvl1_4.visible = false
      WallForLvl1_5.visible = false
      WallForLvl1_6.visible = false
    }

     console.log(mouseY)
    drawSprites()
}   



