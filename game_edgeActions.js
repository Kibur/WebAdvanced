/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes
var score = 0;
var scores = new Array();
var stageRef;

const GAME_INIT = 0;
const GAME_STARTED = 1;
const GAME_OVER = 2;

var gameStatus = GAME_INIT;

var carsSymb = new Array();
var cars = new Array();

var intervalID = 0;

var player;

var checkPoint = 1;

var playerName = "Pol";

  function getBlood(sym, xPlayer, yPlayer) {
    var blood = sym.getSymbol("Symb_Blood");

    blood.getSymbolElement().css({
      "left": (xPlayer - 30) + "px",
      "top": (yPlayer - 34) + "px"
    });
    blood.play(0);
  }

  function showScores() {
    stageRef.$("txtBoard").html("");

    for (var i = 0; i < scores.length; i++) {
      $('<p>' + scores[i].Player + ': ' + scores[i].Score + '</p><br />').appendTo('.Scoreboard').css({
        marginTop: -10,
        marginBottom: -10
      });
    }
  }

  function loadScores() {
    $.ajax({
      url: 'php/select_scores.php',
      type: 'get',
      dataType: 'json',
      data: '',
      success: function(data) {
        scores = data;

        showScores();
      }
    });
  }

  function dead(sym, xPlayer, yPlayer, carId) {
    clearInterval(intervalID);

    getBlood(sym, xPlayer, yPlayer);

    player.stop();
    carsSymb[carId].stop();

    console.log(playerName.attr("value") + " is dead");

    gameStatus = GAME_OVER;

    sym.$("frame").show();
    sym.$("frame").animate({
      top: 255
    }, 750);

    sym.$("lblTitle").show();
    sym.$("lblTitle").animate({
      top: 255
    }, 750);

    sym.$("lblScoreboard").show();
    sym.$("lblScoreboard").animate({
      top: 350
    }, 750);

    sym.getSymbol("Symb_SaveButton").getSymbolElement().show();
    sym.getSymbol("Symb_SaveButton").getSymbolElement().animate({
      top: 545
    }, 750);

    sym.$("txtBoard").show();
    sym.$("txtBoard").animate({
      top: 400
    }, 750);

    sym.getSymbol("Symb_AgainButton").getSymbolElement().show();
    sym.getSymbol("Symb_AgainButton").getSymbolElement().animate({
      top: 545
    }, 750);

    loadScores();
  }

  function checkCollision(sym) {
    console.log("Checking for collision");

    var xPlayer = player.getSymbolElement().position().left;
    var yPlayer = player.getSymbolElement().position().top;

    // Bottom side
    if ((yPlayer <= 700 && yPlayer >= 630) && (xPlayer <= Math.ceil(cars[7].offset().left + 100) && xPlayer > Math.floor(cars[7].offset().left))) {
      dead(sym, xPlayer, yPlayer, 7);
    }

    if ((yPlayer <= 630 && yPlayer >= 560) && (xPlayer <= Math.ceil(cars[6].offset().left + 100) && xPlayer > Math.floor(cars[6].offset().left))) {
      dead(sym, xPlayer, yPlayer, 6);
    }

    if ((yPlayer <= 560 && yPlayer >= 485) && (xPlayer <= Math.ceil(cars[5].offset().left + 100) && xPlayer > Math.floor(cars[5].offset().left))) {
      dead(sym, xPlayer, yPlayer, 5);
    }

    if ((yPlayer <= 485 && yPlayer >= 415) && (xPlayer <= Math.ceil(cars[4].offset().left + 100) && xPlayer > Math.floor(cars[4].offset().left))) {
      dead(sym, xPlayer, yPlayer, 4);
    }

    // Top side
    if ((yPlayer <= 365 && yPlayer >= 305) && (xPlayer <= Math.ceil(cars[3].offset().left + 100) && xPlayer > Math.floor(cars[3].offset().left))) {
      dead(sym, xPlayer, yPlayer, 3);
    }

    if ((yPlayer <= 305 && yPlayer >= 245) && (xPlayer <= Math.ceil(cars[2].offset().left + 100) && xPlayer > Math.floor(cars[2].offset().left))) {
      dead(sym, xPlayer, yPlayer, 2);
    }

    if ((yPlayer <= 245 && yPlayer >= 165) && (xPlayer <= Math.ceil(cars[1].offset().left + 100) && xPlayer > Math.floor(cars[1].offset().left))) {
      dead(sym, xPlayer, yPlayer, 1);
    }

    if ((yPlayer <= 165 && yPlayer >= 100) && (xPlayer <= Math.ceil(cars[0].offset().left + 100) && xPlayer > Math.floor(cars[0].offset().left))) {
      dead(sym, xPlayer, yPlayer, 0);
    }
  }

  function moveDown(down, speed) {
    player.play("stand_down");
    player.getSymbolElement().animate({
      top: down + 'px'
    }, speed);
  }

  function moveRight(right, speed) {
    player.play("stand_right");
    player.getSymbolElement().animate({
      left: right + 'px'
    }, speed);
  }

  function moveUp(top, speed) {
    player.play("stand_up");
    player.getSymbolElement().animate({
      top: top + 'px'
    }, speed);
  }

  function moveLeft(left, speed) {
    player.play("stand_left");
    player.getSymbolElement().animate({
      left: left + 'px'
    }, speed);
  }

  function IsLimitRight(right) {
    if (right >= 480) {
      return true;
    }
    else {
      return false;
    }
  }

  function IsLimitLeft(left) {
    if (left <= 0) {
      return true;
    }
    else {
      return false;
    }
  }

  function IsLimitDown(down) {
    if (down >= 800) {
      return true;
    }
    else {
      return false;
    }
  }

  function IsLimitTop(top) {
    if (top <= 0) {
      return true;
    }
    else {
      return false;
    }
  }

  function setScore(sym) {
    console.log("Setting score");

    var yPlayer = sym.getSymbol("Symb_Player").getSymbolElement().position().top;

    // Grass
    if ((yPlayer <= 415 && yPlayer >= 365) && checkPoint == 1) {
      console.log("Grass");

      score += checkPoint * 10;
      checkPoint++;
    }

    // Top side
    if ((yPlayer <= 166 && yPlayer >= 0) && checkPoint == 2) {
      console.log("Top");

      score += checkPoint * 10;
      checkPoint++;
    }

    // Grass again
    if ((yPlayer <= 415 && yPlayer >= 365) && checkPoint == 3) {
      console.log("Grass again");

      score += checkPoint * 10;
      checkPoint++;
    }

    // Bottom side
    if ((yPlayer <= 800 && yPlayer >= 701) && checkPoint == 4) {
      console.log("Bottom");

      score += checkPoint * 20;
      checkPoint = 1;
    }

    sym.$("lblScore").html(score);
  }

  function spawnCar(sym) {
    if (gameStatus == GAME_STARTED) {
      // Mazda_RX8, Dodge_Charger, Citroen_C4, Chevrolet_Crossfire
      // Chevrolet_Camaro, Audi_S5, Audi_R8, Audi_A2

      var car1 = sym.getSymbol("Symb_Car1");
      var car2 = sym.getSymbol("Symb_Car2");
      var car3 = sym.getSymbol("Symb_Car3");
      var car4 = sym.getSymbol("Symb_Car4");

      var car5 = sym.getSymbol("Symb_Car5");
      var car6 = sym.getSymbol("Symb_Car6");
      var car7 = sym.getSymbol("Symb_Car7");
      var car8 = sym.getSymbol("Symb_Car8");

      var allCarsSymb = new Array(
        car1, car2, car3, car4,
        car5, car6, car7, car8
        );

      carsSymb = allCarsSymb;

      var allCars = new Array(
        car1.$("Mazda_RX8"), car2.$("Dodge_Charger"), car3.$("Citroen_C4"), car4.$("Chevrolet_Crossfire"),
        car5.$("Chevrolet_Camaro"), car6.$("Audi_S5"), car7.$("Audi_R8"), car8.$("Audi_A2")
        );

      cars = allCars;

      intervalID = setInterval(function() {
        checkCollision(sym);
      }, 100);
    }
  }

  function initGame(sym) {
    console.log("Initialize game");

    setTimeout(function() {spawnCar(sym)}, 100);

    sym.$("lblScore").show();

    setScore(sym);
  }

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // insert code to be run when the symbol is created here
         stageRef = sym;
      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // insert code to be run when the composition is fully loaded here
         var inputField = stageRef.$("txtInput");
         
         playerName = $("<input />").attr({
         	'type':'text',
         	'value':'Insert name here',
         	'id':'txtName'
         });

         playerName.appendTo(inputField);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================

   //Edge symbol: 'Symb_Player'
   (function(symbolName) {
      $(document).keydown(function(e){
        player = stageRef.getSymbol("Symb_Player");
        var distance = 65;
        var speed = 900;

        var left = player.getSymbolElement().position().left;
        var top = player.getSymbolElement().position().top;
        var right = left;
        var down = top;

        console.log("--Player position--")
        console.log("x: " + left);
        console.log("y: " + top);

        if (gameStatus == GAME_STARTED) {
          if (e.keyCode == 37) {
            console.log("left pressed");
            
            left -= distance;

            if (IsLimitLeft(left)) {
              left = 0;

              moveLeft(left, speed);

              setScore(stageRef);
            }
            else {
              moveLeft(left, speed);

              setScore(stageRef);
            }

            return false;
          }

          if (e.keyCode == 38) {
            console.log("up pressed");

            top -= distance;

            if (IsLimitTop(top)) {
              top = 0;

              moveUp(top, speed);

              setScore(stageRef);

              return false;
            }
            else {
              moveUp(top, speed);

              setScore(stageRef);
            }

            return true;
          }

          if (e.keyCode == 39) {
            console.log("right pressed");

            right += distance;

            if (IsLimitRight(right)) {
              right = 480 - 35;

              moveRight(right, speed);

              setScore(stageRef);
            }
            else {
              moveRight(right, speed);

              setScore(stageRef);
            }

            return false;
          }

          if (e.keyCode == 40) {
            console.log("down pressed");

            down += distance;

            if (IsLimitDown(down)) {
              down = 800 - 35;

              moveDown(down, speed);

              setScore(stageRef);

              return false;
            }
            else {
              moveDown(down, speed);

              setScore(stageRef);
            }

            return true;
          }
        }
    });

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         // insert code here
         // stop the timeline at the given position (ms or label)
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         sym.stop();
         // insert code here

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2750, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3750, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("Symb_Player");
   //Edge symbol end:'Symb_Player'

   //=========================================================
   
   //Edge symbol: 'Symb_Car1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // play the timeline from the given position (ms or label)
         sym.play(0);
         // insert code here

      });
      //Edge binding end

   })("Symb_Car1");
   //Edge symbol end:'Symb_Car1'

   //=========================================================
   
   //Edge symbol: 'Symb_Car2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         // insert code here
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("Symb_Car2");
   //Edge symbol end:'Symb_Car2'

   //=========================================================
   
   //Edge symbol: 'Symb_Car3'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         // insert code here
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("Symb_Car3");
   //Edge symbol end:'Symb_Car3'

   //=========================================================
   
   //Edge symbol: 'Symb_Car4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         // insert code here
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("Symb_Car4");
   //Edge symbol end:'Symb_Car4'

   //=========================================================
   
   //Edge symbol: 'Symb_Car5'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // insert code here
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("Symb_Car5");
   //Edge symbol end:'Symb_Car5'

   //=========================================================
   
   //Edge symbol: 'Symb_Car6'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3250, function(sym, e) {
         // insert code here
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("Symb_Car6");
   //Edge symbol end:'Symb_Car6'

   //=========================================================
   
   //Edge symbol: 'Symb_Car7'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         // insert code here
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("Symb_Car7");
   //Edge symbol end:'Symb_Car7'

   //=========================================================
   
   //Edge symbol: 'Symb_Car8'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // insert code here
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("Symb_Car8");
   //Edge symbol end:'Symb_Car8'

   //=========================================================
   
   //Edge symbol: 'Symb_Blood'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 529, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("Symb_Blood");
   //Edge symbol end:'Symb_Blood'

   //=========================================================
   
   //Edge symbol: 'Symb_StartButton'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_pushbutton_spritesheet}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.stop("pressed");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_pushbutton_spritesheet}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_pushbutton_spritesheet}", "click", function(sym, e) {
         // insert code for mouse click here
         if (gameStatus == GAME_INIT) {
            // intro
            initGame(stageRef);
            stageRef.$("lblTitle").animate({
              top: 800
            }, 750);

            stageRef.$("lblName").animate({
              top: 800
            }, 750);

            stageRef.$("txtInput").animate({
              top: 800
            }, 750);

            stageRef.$("lblTapToStart").animate({
              top: 800
            }, 750);

            stageRef.getSymbol("Symb_StartButton").getSymbolElement().animate({
              top: 800
            }, 750);

            stageRef.$("frame").animate({
              top: 800
            }, 750);

            setTimeout(function() {
              stageRef.$("lblTitle").hide();
              stageRef.$("lblTapToStart").hide();
              stageRef.getSymbol("Symb_StartButton").getSymbolElement().hide();
              stageRef.$("frame").hide();
              stageRef.$("lblName").hide();
              stageRef.$("txtInput").hide();
            }, 1000);

            console.log(playerName.attr("value"));
         
            gameStatus = GAME_STARTED;
         }
      });
      //Edge binding end

   })("Symb_StartButton");
   //Edge symbol end:'Symb_StartButton'

   //=========================================================
   
   //Edge symbol: 'Symb_Button'
   (function(symbolName) {   
   
   })("Symb_Button");
   //Edge symbol end:'Symb_Button'

   //=========================================================
   
   //Edge symbol: 'Symb_SaveButton'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_button_spritesheet}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.stop("pressed");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button_spritesheet}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button_spritesheet}", "click", function(sym, e) {
         // insert code for mouse click here
         // Insert player name and score into database

         var data = playerName.attr("value") + "_" + score;

         $.ajax({
          url: 'php/insert_score.php',
          data: 'data=' + data,
          type: 'post',
          success: function() {
            console.log("Saved");
            loadScores();
          }
         })
      });
      //Edge binding end

   })("Symb_SaveButton");
   //Edge symbol end:'Symb_SaveButton'

   //=========================================================
   
   //Edge symbol: 'Symb_AgainButton'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_button_again_spritesheet}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.stop("pressed");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button_again_spritesheet}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         sym.stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_button_again_spritesheet}", "click", function(sym, e) {
         // insert code for mouse click here
         gameStatus = GAME_INIT;

         window.open("game.html", "_self");
      });
      //Edge binding end

   })("Symb_AgainButton");
   //Edge symbol end:'Symb_AgainButton'

})(jQuery, AdobeEdge, "EDGE-93573414");