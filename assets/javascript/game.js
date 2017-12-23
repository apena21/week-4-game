//=================================================================

 

//                  VARIABLES

var computerTargetScore = Math.floor((Math.random() * 120) + 19);

(document.querySelector("#points").innerHTML = computerTargetScore);

console.log("The computer generated target score is: " + computerTargetScore + ".");

 

var amethystValue = Math.floor((Math.random() * 12) + 1);

console.log( "The value of an amethyst is: " + amethystValue + ".");


var brownCrystalValue = Math.floor((Math.random() * 12) + 1);

console.log( "The value of a brown crystal is: " + brownCrystalValue + ".");


var colorfulCrystalValue = Math.floor((Math.random() * 12) + 1);

console.log( "The value of a colorful crystal is: " + colorfulCrystalValue + ".");

 

var crystalRocksValue = Math.floor((Math.random() * 12) + 1);

console.log( "The value of the crystal rocks is: " + crystalRocksValue + ".");

 

// counter variable that holds the crystal total

 

var counter = 0;

var totalCounter=0;

var lossesCount =0;

var totalLosses =0;

var winsCount=0;

var totalWins=0;

 

 


 

//===================================================================

 

//                  FUNCTIONS

 


 

// Function that updates the Counter...

 

// button is clicked

// calculate a new value

// if value > computerNumber

// lossesCount ++

 

 

 

$("#amethyst" ).click(function() {

                (document.querySelector("#counter").innerHTML = counter+=amethystValue);

                console.log( "The counter increased by the amethyst value of " + amethystValue + ".");

               

                if (counter > computerTargetScore) {

                                (document.querySelector("#lossesCount").innerHTML =lossesCount++);

        console.log("You lost!  Losses increased by 1 point.");

                                resetGame();

                               

                                               

                } else if (counter === computerTargetScore) {

                                (document.querySelector ("#winsCount").innerHTML = winsCount++);

                                console.log("You won!  Wins increased by 1 point.");

        resetGame();

      

        };

});


 $("#brown_crystal" ).click(function() {

                (document.querySelector("#counter").innerHTML = counter+=brownCrystalValue);

                console.log( "The counter increased by the brown crystal value of " + brownCrystalValue + ".");

               

                if (counter > computerTargetScore) {

        (document.querySelector("#lossesCount").innerHTML = lossesCount++);

        console.log("You lost!  Losses increased by 1 point.");

                                resetGame();

                               

                                               

                } else if (counter === computerTargetScore) {

        (document.querySelector ("#winsCount").innerHTML = winsCount++);

                                console.log("You won!  Wins increased by 1 point.");

        resetGame();

     

        };

});


  $("#colorful_crystal" ).click(function() {

                (document.querySelector("#counter").innerHTML = counter+=colorfulCrystalValue);

                console.log( "The counter increased by the colorful crystal value of " + colorfulCrystalValue + ".");

               

                if (counter > computerTargetScore) {

        (document.querySelector("#lossesCount").innerHTML = lossesCount++);

        console.log("You lost!  Losses increased by 1 point.");

                                resetGame();

                               

                                               

                } else if (counter === computerTargetScore) {

        (document.querySelector ("#winsCount").innerHTML = winsCount++);

                                console.log("You won!  Wins increased by 1 point.");

        resetGame();

   

        };

});


  $("#crystal-rocks" ).click(function() {

                (document.querySelector("#counter").innerHTML = counter+=crystalRocksValue);

                console.log( "The counter increased by the crystal rocks value of " + crystalRocksValue + ".");

               

                if (counter > computerTargetScore) {

        (document.querySelector("#lossesCount").innerHTML = lossesCount++);

        console.log("You lost!  Losses increased by 1 point.");

                                resetGame();

                               

                                               

                } else if (counter === computerTargetScore) {

        (document.querySelector ("#winsCount").innerHTML = winsCount++);

                                console.log("You won!  Wins increased by 1 point.");

        resetGame();

   

        };

});


 

 

 

 

function resetGame() {

 

/*

                if (counter > computerTargetScore) {

        document.querySelector("#lossesCount").innerHTML = (+lossesCount++);

                console.log("You lost!  Losses increased by 1 point.");

                                               

                } else if (counter == computerTargetScore) {

        (document.querySelector ("#winsCount").innerHTML = winsCount++);

        console.log( "The counter increased by the amethyst value of " + amethystValue + ".");

                };

*/

                console.log("The game has reset.");

               

    // Reset target score

    computerTargetScore = Math.floor((Math.random() * 120) + 19);

    (document.querySelector("#points").innerHTML = computerTargetScore);

                console.log("The computer generated target score is: " + computerTargetScore + ".");

               

    // Reset random value for amethyst

    amethystValue = Math.floor((Math.random() * 12) + 1);

    console.log( "The new value of an amethyst is: " + amethystValue + ".");

 

    // Reset random value for the brown crystal

    brownCrystalValue = Math.floor((Math.random() * 12) + 1);

    console.log( "The new value of a brown crystal is: " + brownCrystalValue + ".");

 

    // Reset ramdom value for the colorful crystal

    colorfulCrystalValue = Math.floor((Math.random() * 12) + 1);

    console.log( "The new value of a colorful crystal is: " + colorfulCrystalValue + ".");

   

    // Reset randome vlaue for the crystal rocks

    crystalRocksValue = Math.floor((Math.random() * 12) + 1);

    console.log( "The new value of the crystal rocks is: " + crystalRocksValue + ".");

 

    //Reset counter

    document.querySelector ("#counter").innerHTML = "0";

                   

}

 

 

    /*

               

               

                var crystalValue = [

 

    {

 

        crystalName: "amethyst",

 

        src:"assets/images/amethyst-violet-crystal.jpeg",

 

                                value: crystalValue1,

 

      

 

    },

 


 

    {

 

        crystalName: "brown_crystal",

 

        src:"assets/images/brown_crystal.jpg",

 

               

 

    },

 


 

    {

 

        crystalName: "colorful_crystal",

 

        src:"assets/images/colorful_crystal.jpg",

 

      

 

    },

 


 

    {

 

        crystalName: "crystal-rocks",

 

        src:"assets/images/crystal-rocks.jpg",

 

    }

 

]

 


 


 

// crystal 1 = Amethyst

 

var crystalValue1 = 0;

 

// crystal 2 = Brown Crystal

 

var crystalValue2 = 0;

 

// crystal 3 = Colorful Crystal

 

var crystalValue3 = 0;

 

// crystal 4 = Crystal Rocks

 

var crystalValue4 = 0;

 


 

 

 


  (document.querySelector("#counter").innerHTML = counter+=brownCrystalValue);

 

  console.log( "The counter increased by the brown crystal value of " +brownCrystalValue+ ".");

 


 

  if (counter==computerTargetScore) {

 

    ( document.querySelector("#wins").innerHTML = wins++);

 

                console.log( "You won!  Wins increased by 1.");

 


 

};

 

 

 

 

 

$( "#colorful_crystal" ).click(function() {

 

  ( document.querySelector("#counter").innerHTML = counter+=colorfulCrystalValue);

 

  console.log( "The counter increased by the colorful crystal value of " +colorfulCrystalValue+ ".");

 


 

  if (counter==computerTargetScore) {

 

    ( document.querySelector("#wins").innerHTML = wins++);

 

                console.log( "You won!  Wins increased by 1.");

 

};

 


 

$( "#crystal-rocks" ).click(function() {

 

  ( document.querySelector("#counter").innerHTML = counter+=crystalRocksValue);

 

  console.log( "The counter increased by the crystal rocks value of " + crystalRocksValue+ ".");

 


 

  if (counter==computerTargetScore) {

 

    ( document.querySelector("#wins").innerHTML = wins++);

 

                console.log( "You won!  Wins increased by 1.");

 

};

 

});

 

})})});

 


// based on that new value,

// check if new value is greater than computerNumber

// if so, LOSE + reset()

 


 

/*

 

$( "#amethyst" ).click(function() {

    console.log('counter inside amethyst click is ' + counter)

    if (counter ===  computerTargetScore) {

    (document.querySelector ("#winsCount").innerHTML = winsCount++);

    resetGame();

    console.log( "You won!  Wins increased by 1 point.");

 

    } else if (counter > computerTargetScore) {

    document.querySelector ("#lossesCount").innerHTML = lossesCount++;

    resetGame();

    console.log( "You lost!  Losses increased by 1 point.");

 

    } else {

    console.log('amethystValue before assimilating with counter value is: ' + amethystValue)

    console.log('counter before assimilating with amethystValue value is: ' + counter)

   

    counter += amethystValue;

    console.log('counter after amethyst click is ' + counter)

    document.querySelector("#counter").innerHTML = counter;

    console.log( "The counter increased by the amethyst value of " + amethystValue + ".");

    };

          

});

 

*//*

 

$( "#amethyst" ).click(function() {

    if (counter === computerTargetScore) {

        (document.querySelector ("#winsCount").innerHTML = winsCount++);

        resetGame();

        console.log( "You won!  Wins increased by 1 point.");

   

        }else if (counter > computerTargetScore) {

        ( document.querySelector ("#lossesCount").innerHTML = lossesCount++);

        resetGame();

        console.log( "You lost!  Losses increased by 1 point.");

   

        }else if (counter < computerTargetScore) {

        (document.querySelector("#counter").innerHTML = counter+=amethystValue);

        console.log( "The counter increased by the amethyst value of " + amethystValue + ".");

        };

              

});

            

$( "#brown_crystal" ).click(function() {

    if (counter === computerTargetScore) {

        (document.querySelector ("#winsCount").innerHTML = winsCount++);

        resetGame();

        console.log( "You won!  Wins increased by 1 point.");

   

        }else if (counter > computerTargetScore) {

        ( document.querySelector ("#lossesCount").innerHTML = lossesCount++);

        resetGame();

        console.log( "You lost!  Losses increased by 1 point.");

   

        }else if (counter < computerTargetScore) {

        (document.querySelector("#counter").innerHTML = counter+=brownCrystalValue);

        console.log( "The counter increased by the brown crystal value of " + brownCrystalValue + ".");

        };

              

});

 

$( "#colorful_crystal" ).click(function() {

    if (counter === computerTargetScore) {

        (document.querySelector ("#winsCount").innerHTML = winsCount++);

        resetGame();

        console.log( "You won!  Wins increased by 1 point.");

   

        }else if (counter > computerTargetScore) {

        ( $("#lossesCount").text = lossesCount++);

        resetGame();

        console.log( "You lost!  Losses increased by 1 point.");

   

        }else if (counter < computerTargetScore) {

        (document.querySelector("#counter").innerHTML = counter+=colorfulCrystalValue);

        console.log( "The counter increased by the colorful crystal value of " + colorfulCrystalValue + ".");

        };

              

});

 

$( "#crystal-rocks" ).click(function() {

    if (counter === computerTargetScore) {

        (document.querySelector ("#winsCount").innerHTML = winsCount++);

        resetGame();

        console.log( "You won!  Wins increased by 1 point.");

      

        }else if (counter > computerTargetScore) {

        ( document.querySelector ("#lossesCount").innerHTML = lossesCount++);

        resetGame();

        console.log( "You lost!  Losses increased by 1 point.");

        

        }else if (counter < computerTargetScore) {

        (document.querySelector("#counter").innerHTML = counter+=crystalRocksValue);

        console.log( "The counter increased by the crystal rocks value of " + crystalRocksValue + ".");

        };

              

});

*/