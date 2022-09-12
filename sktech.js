x1 = 350;
x2 = 350;
score = 0;
loadGame = true;
loseGame = false;
loadImg = true;
winGame = false;
showScore = true;
showBlackScreen = false;
showDirections = false;
bNotPressed = true;
dockPosT1 = 150;
dockPosT2 = 150;
dockPosT3 = 150;
dockPosT4 = 150;
rectFillR = 255;
rectFillG = 0;
rectFillB = 0;
buttonRFill1 = 0;
buttonGFill1 = 0;
buttonBFill1 = 255;
buttonRFill2 = 0;
buttonGFill2 = 0;
buttonBFill2 = 255;
buttonRFill3 = 0;
buttonGFill3 = 0;
buttonBFill3 = 255;
startGame = false;
boatMove = false;

function setup() {
  createCanvas(400, 400);
  bg = loadImage('ezgif.com-gif-maker.gif');

  img = loadImage('topdown_yacht_sprite_by_tdeleeuw_d8bz1mk-fullview.png');

}

function draw() {

  if (mouseX > 117.5 && mouseX < 282.5 && mouseY > 205 && mouseY < 265 && mouseIsPressed) {

    startGame = true;

  }
  if (mouseX > 117.5 && mouseX < 282.5 && mouseY > 275 && mouseY < 325 && mouseIsPressed) {
    showDirections = true;

  }

  background(bg);
  stroke(0);
  rectMode(CENTER);
  fill(buttonRFill1, buttonGFill1, buttonBFill1);
  rect(200, 230, 165, 50);
  fill(buttonRFill2, buttonGFill2, buttonBFill2);
  rect(200, 300, 165, 50);
  fill(0);
  textSize(31);
  noStroke();
  text('Swervy Boat', 110, 160);
  text('Start Game', 120, 240);
  text('Directions', 130, 310);
  stroke(0);
  if (mouseX > 117.5 && mouseX < 282.5 && mouseY > 205 && mouseY < 265) {

    buttonRFill1 = 200;
    buttonGFill1 = 200;
    buttonBFill1 = 255;
  } else {
    buttonRFill1 = 0;
    buttonGFill1 = 0;
    buttonBFill1 = 255;
  }

  if (mouseX > 117.5 && mouseX < 282.5 && mouseY > 275 && mouseY < 325) {

    buttonRFill2 = 200;
    buttonGFill2 = 200;
    buttonBFill2 = 255;
  } else {
    buttonRFill2 = 0;
    buttonGFill2 = 0;
    buttonBFill2 = 255;


  }

  if (startGame) {
    image(img, 0, 0);
    background(bg);

    if (boatMove) {
      boatX=boatOriginalPosX(mouseX);
      boatY=boatOriginalPosY(mouseY);
      boatY = constrain(boatY, -40, 350);
      x1 -= 3;
      x2 -= 3;
    } else {
      boatX = 100;
      boatY = 100;
    }

    rectMode(CORNERS);
    fill(142, 37, 37);
    leftPier(x1, 0, dockPosT1);
    leftPier(x1, 400, abs(dockPosT2 - 400));
    rightPier(x2, 0, dockPosT3);
    rightPier(x2, 400, abs(dockPosT4 - 400));

    for (ladderPos3 = 0; ladderPos3 < dockPosT3; ladderPos3 += 20) {
      rectMode(CORNER);
      rect(x2 + 275, ladderPos3, 50, 16);
    }

    for (ladderPos4 = 400; ladderPos4 > abs(dockPosT4 - 400); ladderPos4 -= 20) {
      rectMode(CORNER);
      rect(x2 + 275, ladderPos4, 50, 16);
    }

    for (ladderPos1 = 0; ladderPos1 < dockPosT1; ladderPos1 += 20) {
      rectMode(CORNER);
      rect(x1 + 75, ladderPos1, 50, 16);
    }

    for (ladderPos2 = 400; ladderPos2 > abs(dockPosT2 - 400); ladderPos2 -= 20) {
      rectMode(CORNER);
      rect(x1 + 75, ladderPos2, 50, 16);
    }

    if (x1 < -125) {
      x1 = 350;
    }

    if (x2 < -325) {
      x2 = 150;

    }

    if (x1 == -124) {
      dockPosT1 = random(100, 300);
      dockPosT2 = 400 - dockPosT1 - 60;
    }
    if (x2 == -324) {
      dockPosT3 = random(100, 300);
      dockPosT4 = 400 - dockPosT3 - 60;

    }

    if (bNotPressed == false) {
      //if (mouseX < x1 + 25) {

        if (mouseX > x1 && mouseY < dockPosT1 && mouseX < (x1 + 50) && mouseY > 0) {
         //if (boatX > x1-300 && boatY < dockPosT1 && boatX < (x1 -350) && boatY > 0) {
          loseGame = true;
        } else {
          looseGame = false;
        }

        if (mouseX > (x2 + 200) && mouseY < dockPosT3 && mouseX < (x2 + 250)&& mouseY > 0) {
          loseGame = true;
        } else {
          looseGame = false;
        }

        if (mouseX > x1 && mouseY > abs(dockPosT2 - 400) && mouseX < (x1 + 50) && mouseY < 400) {
          loseGame = true;
        } else {
          looseGame = false;
        }

        if (mouseX > (x2 + 200) && mouseY > abs(dockPosT4 - 400) && mouseX < (x2 + 250) && mouseY < 400) {
          loseGame = true;
        } else {
          looseGame = false;
        }

      //}

    }

    if (bNotPressed == false) {
      if (mouseX > x1 + 50) {

        if (mouseX + 50 > x1 && mouseY < dockPosT1 - 10 && mouseX < (x1 + 100) && mouseY > 0) {
          loseGame = true;
        } else {
          looseGame = false;
        }

        if (mouseX > (x2 + 250) && mouseY < dockPosT3 - 10 && mouseX < (x2 + 300) && mouseY > 0) {
          loseGame = true;
        } else {
          looseGame = false;
        }

        if (mouseX > x1 + 50 && mouseY > abs(dockPosT2 - 400) - 30 && mouseX < (x1 + 100) && mouseY < 400) {
          loseGame = true;
        } else {
          looseGame = false;
        }

        if (mouseX > (x2 + 240) && mouseY > abs(dockPosT4 - 400) - 30 && mouseX < (x2 + 350) && mouseY < 400) {
          loseGame = true;
        } else {
          looseGame = false;
        }


      }

    }

    if (boatMove) {
      if (mouseX > (x1 + 4) && mouseX < (x1 + 8)) {
        score++;
      }

      if (mouseX > (x2 + 266) && mouseX < (x2 + 270)) {
        score++;
      }
    }

    if (loseGame) {
      score = 0;
      boatX = 0;
      boatY = 0;
      background(0);
      text('You Lost', 135, 160);
      loadImg = false;
      showScore = false;
      boatMove = false;
      showBlackScreen = true;
      bNotPressed = true;
      textSize(32);


      if (mouseX > 117.5 && mouseX < 282.5 && mouseY > 205 && mouseY < 265) {

        rectFillR = 255;
        rectFillG = 204;
        rectFillB = 204;
      } else {
        rectFillR = 255;
        rectFillG = 0;
        rectFillB = 0;
      }
      if (mouseX > 117.5 && mouseX < 282.5 && mouseY > 205 && mouseY < 265 && mouseIsPressed) {

        loseGame = false;
        loadImg = true;
        showScore = true;
        x1 = 350;
        x2 = 350;
      }
      rectMode(CENTER);
      fill(rectFillR, rectFillG, rectFillB);
      rect(200, 230, 165, 50);
      fill(0);
      text('Play Again', 120, 240);
    }


    if (score >= 30) {
      winGame = true;
    }

    if (winGame) {
      score = 0;
      boatX = 0;
      boatY = 0;
      boatMove = false;
      background(0);
      stroke(0, 255, 0);
      fill(0, 255, 0);
      text('You Won', 135, 160);
      loadImg = false;
      showScore = false;
      loseGame = false
      showBlackScreen = true;
      bNotPressed = true;
      textSize(32);


      if (mouseX > 117.5 && mouseX < 282.5 && mouseY > 205 && mouseY < 265) {

        rectFillR = 204;
        rectFillG = 255;
        rectFillB = 204;
      } else {
        rectFillR = 0;
        rectFillG = 255;
        rectFillB = 0;
      }
      if (mouseX > 117.5 && mouseX < 282.5 && mouseY > 205 && mouseY < 265 && mouseIsPressed) {

        winGame = false;
        loadImg = true;
        showScore = true;
        x1 = 200;
        x2 = 200;
        showBlackScreen = false
      }
      rectMode(CENTER);
      fill(rectFillR, rectFillG, rectFillB);
      rect(200, 230, 165, 50);
      fill(0);
      text('Play Again', 120, 240);
    } else {
      stroke(0);
    }

    rectMode(CORNER);

    if (loseGame || winGame) {
      fill('#000000');
      stroke(0);

    } else {
      fill('#c2b280');
    }
    rect(0, 0, 400, 20);
    rect(0, 380, 400, 380);
    fill(255);
    textSize(32);
    fill(0);

    if (showScore) {
      text('Score:', 10, 30)
      text(score, 105, 30);
    }

    boatX = constrain(boatX, 100, 400);
    
    if (loadImg) {
      image(img, boatX, boatY, 80, 50);
    }


    if (bNotPressed) {
      textSize(14);
      text('press the "B" key to begin', 50, 300);
    }


  }

  if (showDirections) {
    fill(255);
    stroke(0);
    rectMode(CENTER);
    rect(200, 200, 400, 400);
    textSize(16);
    fill(0);
    noStroke();
    text('The objective of the game is to make the boat move forward through a river without touching the docks. If you get past a set of docks, you earn a point. Once you earn 30 points, you win the game. If you crash into a dock, you lose and have to restart from the beginning. The boat follows the users mouse cursor. Press"B" to begin the movement of the boat.', 195, 480, 300, 600);
    stroke(0);
    fill(buttonRFill3, buttonGFill3, buttonBFill3);
    rect(200, 100, 165, 50);
    fill(0);
    noStroke(0);
    textSize(32);
    text('Back', 162, 110);
    stroke(0);
    if (mouseX > 117.5 && mouseX < 282.5 && mouseY > 75 && mouseY < 125 && mouseIsPressed) {
      showDirections = false;

    }

    if (mouseX > 117.5 && mouseX < 282.5 && mouseY > 75 && mouseY < 125) {

      buttonRFill3 = 200;
      buttonGFill3 = 200;
      buttonBFill3 = 255;
    } else {
      buttonRFill3 = 0;
      buttonGFill3 = 0;
      buttonBFill3 = 255;


    }

  }
}

function leftPier(coordinate1, coordinate2, dockPos) {
  rect(75 + coordinate1, coordinate2, 85 + coordinate1, dockPos);
  rect(115 + coordinate1, coordinate2, 125 + coordinate1, dockPos);

}

function rightPier(coordinate1, coordinate2, dockPos) {
  rect(275 + coordinate1, coordinate2, 285 + coordinate1, dockPos);
  rect(315 + coordinate1, coordinate2, 325 + coordinate1, dockPos);

}

function keyPressed() {
  if (keyCode == 66) {
    boatMove = true;
    bNotPressed = false;
  } else if (keyCode != 66) {
    boatMove = false;
    bNotPressed = true;
  }
}

function boatOriginalPosX(x){
  boatX= x;
  return boatX;
  
}

function boatOriginalPosY(y){
  boatY = y;
  return boatY;
  
}