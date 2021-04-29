var SERVE = 0;
var EXPLAIN1 = 1;
var EXPLAIN2 = 2;
var EXPLAIN3 = 3;
var EXPLAIN4 = 4;
var START = 5;
var PLAY = 6;
var END1 = 7;
var END2 = 8;
var END3 = 9;
var END4 = 10;

var bg, bgImg;
var bg1, bg1Img;
var start, startImg;
var play, playImg;
var gameOver, gameOverImg;
var restart, restartImg;

var arrow1, arrow2, arrow3, arrowImg;
var textbg1, textbg2, textbg3, textbg4, textbg5, textbg6;

var ufo, ufoImg;
var bullet, bulletImg;
var alien, alienImg;

var virus, virusImg, virusGroup;
var deadVirus, deadVirusImg, deadVirusGroup;

var clickSound, shotSound, gameOverSound;

var kills = 0;
localStorage["HighestKills"] = 0;

var gameState = SERVE;

function preload() {
  bgImg = loadImage("background.png");
  bg1Img = loadImage("background1.png")
  startImg = loadImage("start.png");
  playImg = loadImage("play.png");
  gameOverImg = loadImage("gameOver.png");
  restartImg = loadImage("restart.png")

  arrowImg = loadImage("arrow.png");

  ufoImg = loadImage("ufo.png");
  bulletImg = loadImage("bullet.png");

  virusImg = loadImage("virus.png");
  deadVirusImg = loadImage("deadVirus.png");
  deadVirusAni = loadAnimation("deadVirus.png");

  clickSound = loadSound("Click.mp3");
  shotSound = loadSound("Shot.mp3");
  gameOverSound = loadSound("Game Over.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  //backgrounds
  bg = createSprite(width/2, height/2, width, height);
  bg.addImage(bgImg);
  bg.scale = 2.0;

  bg1 = createSprite(width/2, height/2, width, height);
  bg1.addImage(bg1Img);
  bg1.scale = 2.0;
  bg1.visible = false;

  //text boxes
    //serve
  textbg1 = createSprite(width/2, height/3, 1200, 100);
  textbg1.shapeColor = color(0);

    //explain1
  textbg2 = createSprite(width/2, height/3, 1050, 300);
  textbg2.shapeColor = color(0);
  textbg2.visible = false;

    //explain2
  textbg3 = createSprite(width/2, height/3, 1200, 300);
  textbg3.shapeColor = color(0);
  textbg3.visible = false;

    //explain3
  textbg4 = createSprite(width/2, height/3, 1100, 300);
  textbg4.shapeColor = color(0);
  textbg4.visible = false;

    //explain4
  textbg5 = createSprite(width/2, height/2, 1150, 300);
  textbg5.shapeColor = color(0);
  textbg5.visible = false;

  textbg6 = createSprite(textbg5.x, textbg5.y + textbg5.height/1.5, 100, 50);
  textbg6.shapeColor = color(0);
  textbg6.visible = false;

    //start
  textbg7 = createSprite(width/2, height/2, width - 40, height - 40);
  textbg7.shapeColor = color(0);
  textbg7.visible = false;



  //serve
  start = createSprite(width/2, height/1.8, 10000, 1000);
  start.addImage(startImg);
  start.scale = 0.1;

  //explain1
  arrow1 = createSprite(textbg2.x + 450, textbg2.y + 80, 210, 210);
  arrow1.addImage(arrowImg);
  arrow1.scale = 0.4;
  arrow1.visible = false;

  //explain2
  arrow2 = createSprite(textbg3.x - 540, textbg3.y + 80, 210, 210);
  arrow2.addImage(arrowImg);
  arrow2.scale = 0.4;
  arrow2.visible = false;

  //explain3
  arrow3 = createSprite(textbg4.x + 500, textbg4.y + 100, 210, 210);
  arrow3.addImage(arrowImg);
  arrow3.scale = 0.4;
  arrow3.visible = false;

  //start
  play = createSprite(textbg6.x, textbg6.y + 100);
  play.addImage(playImg);
  play.scale = 0.3;
  play.visible = false;




  //PLAY
  ufo = createSprite(150, height/2, 256, 256);
  ufo.addImage(ufoImg);
  ufo.scale = 0.5;
  ufo.setCollider("rectangle", 0, -100, (ufo.width/2), (ufo.height/2) - 350);
  ufo.debug = false;
  ufo.visible = false;

  bulletGroup = createGroup();
  virusGroup = createGroup();
  deadVirusGroup = createGroup();

  kills = 0;

  //END
  gameOver = createSprite(width/2, height/2, 631, 325);
  gameOver.addImage(gameOverImg);
  gameOver.visible = false;

  restart = createSprite(gameOver.x, gameOver.y + gameOver.height/2 + 35, 68, 60);
  restart.addImage(restartImg);
  restart.visible = false;
}

function draw() {
  background(0);

  drawSprites();

  //SERVE
  if(gameState === SERVE) {
    textFont("Courier");
    textSize(100);
    textAlign(CENTER);
    fill(255);
    text("MISSION VIRUS - 645", textbg1.x, textbg1.y + 25);
  
    /*
    if(frameCount % 15 === 0) {
      textFont("Courier");
      textSize(80);
      textAlign(CENTER);
      fill(255);
      text("|", width/2 + 430, height/2 - 200);
    }
    */
  }



  //EXPLAIN1
  if(mousePressedOver(start) && gameState === SERVE) {
    gameState = EXPLAIN1;

    clickSound.play();
  }

  if(gameState === EXPLAIN1) {
    start.destroy();
    textbg1.destroy();

    textbg2.visible = true;
    arrow1.visible = true;

    textFont("Candara");
    textSize(45);
    textAlign(CENTER);
    fill(255);
    text("AGENT A-01! You're finally here!", textbg2.x, textbg2.y - 100);
    
    textFont("Candara");
    textSize(45);
    textAlign(CENTER);
    fill(255);
    text("Extremely sorry about not informing this beforehand,", textbg2.x, textbg2.y - 50);

    textFont("Candara");
    textSize(45);
    textAlign(CENTER);
    fill(255);
    text("but boss's assigned us with our new missions!", textbg2.x, textbg2.y);
  }



  //EXPLAIN2
  if(mousePressedOver(arrow1) && gameState === EXPLAIN1) {
    gameState = EXPLAIN2;

    clickSound.play();
  }

  if(gameState === EXPLAIN2) {
    textbg2.destroy();
    arrow1.destroy();

    textbg3.visible = true;
    arrow2.visible = true;

    textFont("Candara");
    textSize(45);
    textAlign(CENTER);
    fill(255);
    text("And yes, we know that you've just returned from a mission", textbg3.x, textbg3.y - 100);

    textFont("Candara");
    textSize(45);
    textAlign(CENTER);
    fill(255);
    text("but this was assigned by the ELITES,", textbg3.x, textbg3.y - 50);

    textFont("Candara");
    textSize(45);
    textAlign(CENTER);
    fill(255);
    text("and you know boss can't possibly say no to them,", textbg3.x, textbg3.y);

    textFont("Candara");
    textSize(45);
    textAlign(CENTER);
    fill(255);
    text("unless he wants to lose his job that is.", textbg3.x, textbg3.y + 50);
  }



  //EXPLAIN3
  if(mousePressedOver(arrow2) && gameState === EXPLAIN2) {
    gameState = EXPLAIN3;

    clickSound.play();
  }

  if(gameState === EXPLAIN3) {
    textbg3.destroy();
    arrow2.destroy();

    textbg4.visible = true;
    arrow3.visible = true;

    textFont("Candara");
    textSize(45);
    textAlign(CENTER);
    fill(255);
    text("Anyway, since you're the topmost agent,", textbg4.x, textbg4.y - 100);

    textFont("Candara");
    textSize(45);
    textAlign(CENTER);
    fill(255);
    text("this mission was assigned to you.", textbg4.x, textbg4.y - 50);

    textFont("Candara");
    textSize(45);
    textAlign(CENTER);
    fill(255);
    text("Which mission, you may ask?", textbg4.x, textbg4.y);

    textFont("Candara");
    textSize(45);
    textAlign(CENTER);
    fill(255);
    text("Unfortunately, it's the largest, most dangerous one...", textbg4.x, textbg4.y + 50);
  }



  if(mousePressedOver(arrow3) && gameState === EXPLAIN3) {
    gameState = EXPLAIN4;

    clickSound.play();
  }

  if(gameState === EXPLAIN4) {
    textbg4.destroy();
    arrow3.destroy();

    textbg5.visible = true;
    textbg6.visible = true;

    if(frameCount % 3 === 0) {
      textFont("Courier");
      textSize(80);
      textAlign(CENTER);
      fill(255);
      text("MISSION VIRUS - 645", textbg5.x, textbg5.y - 25);
    }
    if(frameCount % 5 === 0) {
      textFont("Courier");
      textSize(80);
      textAlign(CENTER);
      fill(255);
      text("MISSION VIRUS - 645", textbg5.x, textbg5.y - 25);
    }
    if(frameCount % 7 === 0) {
      textFont("Courier");
      textSize(80);
      textAlign(CENTER);
      fill(255);
      text("MISSION VIRUS - 645", textbg5.x, textbg5.y - 25);
    }

    if(frameCount % 3 === 0) {
      textFont("Courier");
      textSize(80);
      textAlign(CENTER);
      fill(255);
      text("aka, MISSION IMPOSSIBLE", textbg5.x, textbg5.y + 50);
    }
    if(frameCount % 5 === 0) {
      textFont("Courier");
      textSize(80);
      textAlign(CENTER);
      fill(255);
      text("aka, MISSION IMPOSSIBLE", textbg5.x, textbg5.y + 50);
    }
    if(frameCount % 7 === 0) {
      textFont("Courier");
      textSize(80);
      textAlign(CENTER);
      fill(255);
      text("aka, MISSION IMPOSSIBLE", textbg5.x, textbg5.y + 50);
    }

    textFont("Candara");
    textSize(30);
    textAlign(CENTER);
    fill(200);
    text("NEXT", textbg6.x, textbg6.y + 10);
  }



  //START
  if(mousePressedOver(textbg6) && gameState === EXPLAIN4) {
    gameState = START;

    clickSound.play();
  }
  
  if(gameState === START) {
    textbg5.destroy();
    textbg6.destroy();

    textbg7.visible = true;
    play.visible = true;

    textFont("Courier");
    textSize(80);
    textAlign(CENTER);
    fill(255);
    text("HOW TO PLAY:", textbg7.x, textbg7.height/6);

    textFont("Candara");
    textSize(40);
    textAlign(CENTER);
    fill(255);
    text("To move up: USE ↑ ARROW, OR THE 'W' LETTER KEY", textbg7.x, textbg7.height/6 + 100);
    
    textFont("Candara");
    textSize(40);
    textAlign(CENTER);
    fill(255);
    text("To move down: USE ↓ ARROW, OR THE 'S' LETTER KEY", textbg7.x, textbg7.height/6 + 180);
    
    textFont("Candara");
    textSize(40);
    textAlign(CENTER);
    fill(255);
    text("To shoot: USE SPACEBAR OR RIGHT CLICK", textbg7.x, textbg7.height/6 + 260);
    
    textFont("Courier");
    textSize(30);
    textAlign(CENTER);
    fill(255);
    text("AVOID SHOOTING THE DEAD VIRUS,", textbg7.x, textbg7.height/6 + 340);
    
    textFont("Courier");
    textSize(30);
    textAlign(CENTER);
    fill(255);
    text("AND MAKE SURE NOT TO BUMP INTO ANY OF THE VIRUS.", textbg7.x, textbg7.height/6 + 380);

    textFont("Courier");
    textSize(20);
    textAlign(CENTER);
    fill(255);
    text("Keep in mind, reloading the game will reset your highest kill count.", textbg7.x, textbg7.height/6 + 440);
    
    textFont("Courier");
    textSize(20);
    textAlign(CENTER);
    fill(255);
    text("Try beating your previous highscore!", textbg7.x, textbg7.height/6 + 470);
    
    textFont("Courier");
    textSize(25);
    textAlign(CENTER);
    fill(255);
    text("GOOD LUCK!", textbg7.x, textbg7.height/6 + 510);
  }



  //PLAY
  if(mousePressedOver(play) && gameState === START) {
    gameState = PLAY;

    clickSound.play();
  }

  if(gameState === PLAY) {
    bg.destroy();
    textbg7.destroy();
    play.destroy();

    bg1.visible = true;
    ufo.visible = true;
    gameOver.visible = false;
    restart.visible = false;
    
    bg1.velocityX = -(5 + 3 * kills/2);

    if(bg1.x < -2150) {
      bg1.x = bg.width/2;
    }

    textFont("Courier");
    textSize(20);
    textAlign(CENTER);
    fill(255);
    text("Kills: " + kills, width - 200, 60);

    textFont("Courier");
    textSize(20);
    textAlign(CENTER);
    fill(255);
    text("Highest Kills: " + localStorage["HighestKills"], 200, 60);

    bullet = createSprite(ufo.x, ufo.y - 50, 50, 50);
    bullet.addImage(bulletImg);
    bullet.scale = 0.01;
    bullet.lifetime = width;
    bullet.setCollider("rectangle", 0, 0, bullet.width, bullet.height);
    bullet.debug = false;
    bullet.visible = false;
    bulletGroup.add(bullet);

    virus = createSprite(width + 50, random(20, height - 20), 95, 95);
    virus.addImage(virusImg);
    virus.scale = 0.5;
    virus.velocityX = -(5 + 3 * kills/2);
    virus.lifetime = -50;
    virus.setCollider("rectangle", 0, 0, virus.width, virus.height);
    virus.debug = false;
    virusGroup.add(virus);
    
    deadVirus = createSprite(width + 50, random(20, height - 20), 95, 95);
    deadVirus.addImage(deadVirusImg);
    deadVirus.scale = 0.5;
    deadVirus.velocityX = -(5 + 3 * kills/2);
    deadVirus.lifetime = -50;
    deadVirus.setCollider("rectangle", 0, 0, deadVirus.width, deadVirus.height);
    deadVirus.debug = false;
    deadVirusGroup.add(deadVirus);

    if(frameCount % 80 !== 0) {
      virus.destroy();
    }

    if(frameCount % 100 !== 0) {
      deadVirus.destroy();
    }

    if(keyDown(38) || keyDown(87)) {
      ufo.y = ufo.y - (10 + 5 * kills/10);
      bullet.y = bullet.y - 10;

      bulletGroup.destroyEach();
    }

    if(keyDown(40) || keyDown(83)) {
      ufo.y = ufo.y + (10 + 5 * kills/10);
      bullet.y = bullet.y + 10;
      
      bulletGroup.destroyEach();
    }

    if(keyDown(32) || mousePressedOver(bg1)) {
      bullet.visible = true;
      bullet.velocityX = 30;
    }

    if(keyDown(32) && !keyDown(38) && !keyDown(40) && !keyDown(87) && !keyDown(83) || mousePressedOver(bg1) && !keyDown(38) && !keyDown(40) && !keyDown(87) && !keyDown(83)) {
      shotSound.play();
    }
    
    if(bulletGroup.collide(virusGroup)) {
      virusGroup.destroyEach();
      bulletGroup.destroyEach();

      kills = kills + 1;
    }
    
    /*
    if(bulletGroup.isTouching(virusGroup)) {
      var rand = Math.round(random(1, 7));
      switch(rand) {
        case 1: textFont("Candara");
                textSize(15);
                textAlign(CENTER);
                fill(255);
                text("YES!", 400, 60);
              break;
        case 2: textFont("Candara");
                textSize(15);
                textAlign(CENTER);
                fill(255);
                text("Perfect!", 400, 60);
              break;
        case 3: textFont("Candara");
                textSize(15);
                textAlign(CENTER);
                fill(255);
                text("Ouchie!", 400, 60);
              break;
        case 4: textFont("Candara");
                textSize(15);
                textAlign(CENTER);
                fill(255);
                text("Whoa!", 400, 60);
                break;
        case 5: textFont("Candara");
                textSize(15);
                textAlign(CENTER);
                fill(255);
                text("Bullseye!", 400, 60);
              break;
        case 6: textFont("Candara");
                textSize(15);
                textAlign(CENTER);
                fill(255);
                text("Good Shot!", 400, 60);
              break;
        case 7: textFont("Candara");
                textSize(15);
                textAlign(CENTER);
                fill(255);
                text("Damn!", 400, 60);
              break;
        case 6: textFont("Candara");
                textSize(10);
                textAlign(CENTER);
                fill(255);
                text("You're great at this!", gameOver.x, gameOver.y + 162.5);
              break;
        default: break;
      }
    }
    */

    if(ufo.collide(virusGroup)) {
      gameState = END1;

      gameOverSound.play();
    }
    
    if(ufo.collide(deadVirusGroup)) {
      gameState = END2;

      gameOverSound.play();
    }

    if(bulletGroup.collide(deadVirusGroup)) {
      gameState = END3;

      gameOverSound.play();
    }

    if(virus.x < 0) {
      gameState = END4;

      gameOverSound.play();
    }
  }

  if(gameState === END1) {
    ufo.destroy();
    bulletGroup.destroyEach();
    virusGroup.destroyEach();
    deadVirusGroup.destroyEach();

    textFont("Courier");
    textSize(30);
    textAlign(CENTER);
    fill(255);
    text("Oh no! You're ship's infected. Abort!", gameOver.x, gameOver.y - 200);

    bg1.velocityX = 0;

    gameOver.visible = true;
    restart.visible = true;
  }
  
  if(mousePressedOver(restart) && gameState === END1) {
    gameState = PLAY;

    clickSound.play();

    ufo = createSprite(150, height/2, 256, 256);
    ufo.addImage(ufoImg);
    ufo.scale = 0.5;
    ufo.setCollider("rectangle", 0, -100, (ufo.width/2), (ufo.height/2) - 350);
    ufo.debug = false;
    ufo.visible = false;

    if(localStorage["HighestKills"] < kills){
      localStorage["HighestKills"] = kills;
    }
    console.log(localStorage["HighestKills"]);

    kills = 0;
  }

  if(gameState === END2) {
    ufo.destroy();
    bulletGroup.destroyEach();
    virusGroup.destroyEach();
    deadVirusGroup.destroyEach();
    
    textFont("Courier");
    textSize(30);
    textAlign(CENTER);
    fill(255);
    text("Oh no! You're now contaminated. Abort!", gameOver.x, gameOver.y - 200);

    bg1.velocityX = 0;

    gameOver.visible = true;
    restart.visible = true;
  }
  
  if(mousePressedOver(restart) && gameState === END2) {
    gameState = PLAY;

    clickSound.play();

    ufo = createSprite(150, height/2, 256, 256);
    ufo.addImage(ufoImg);
    ufo.scale = 0.5;
    ufo.setCollider("rectangle", 0, -100, (ufo.width/2), (ufo.height/2) - 350);
    ufo.debug = false;
    ufo.visible = false;

    if(localStorage["HighestKills"] < kills) {
      localStorage["HighestKills"] = kills;
    }
    console.log(localStorage["HighestKills"]);

    kills = 0;
  }

  if(gameState === END3) {
    ufo.destroy();
    bulletGroup.destroyEach();
    virusGroup.destroyEach();
    deadVirusGroup.destroyEach();
    
    textFont("Courier");
    textSize(30);
    textAlign(CENTER);
    fill(255);
    text("Oh, you've awoken the dead...", gameOver.x, gameOver.y - 200);

    bg1.velocityX = 0;

    gameOver.visible = true;
    restart.visible = true;
  }
  
  if(mousePressedOver(restart) && gameState === END3) {
    gameState = PLAY;

    clickSound.play();

    ufo = createSprite(150, height/2, 256, 256);
    ufo.addImage(ufoImg);
    ufo.scale = 0.5;
    ufo.setCollider("rectangle", 0, -100, (ufo.width/2), (ufo.height/2) - 350);
    ufo.debug = false;
    ufo.visible = false;

    if(localStorage["HighestKills"] < kills){
      localStorage["HighestKills"] = kills;
    }
    console.log(localStorage["HighestKills"]);

    kills = 0;
  }

  if(gameState === END4) {
    ufo.destroy();
    bulletGroup.destroyEach();
    virusGroup.destroyEach();
    deadVirusGroup.destroyEach();
    
    textFont("Courier");
    textSize(30);
    textAlign(CENTER);
    fill(255);
    text("Oops! You've forgotten to shoot one!", gameOver.x, gameOver.y - 200);

    bg1.velocityX = 0;

    gameOver.visible = true;
    restart.visible = true;
  }
  
  if(mousePressedOver(restart) && gameState === END4) {
    gameState = PLAY;

    clickSound.play();
    gameOverSound.stop();

    ufo = createSprite(150, height/2, 256, 256);
    ufo.addImage(ufoImg);
    ufo.scale = 0.5;
    ufo.setCollider("rectangle", 0, -100, (ufo.width/2), (ufo.height/2) - 350);
    ufo.debug = false;
    ufo.visible = false;

    if(localStorage["HighestKills"] < kills){
      localStorage["HighestKills"] = kills;
    }
    console.log(localStorage["HighestKills"]);

    kills = 0;
  }
}
