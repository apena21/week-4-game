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
var lossesCount = 0;
var totalLosses = 0;
var winsCount=0;
var totalWins=0;
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

 

*/

 

 

//===================================================================

//                  FUNCTIONS

 

//THE CODE BELOW WORKS!!!!

 

// Function that updates the Counter...

 

 

$( "#amethyst" ).click(function() {
    if (counter === computerTargetScore) {
    (document.querySelector ("#winsCount").innerHTML = winsCount++);
    console.log( "You won!  Wins increased by 1 point.");

    }else if (counter > computerTargetScore) {
    ( document.querySelector ("#lossesCount").innerHTML = lossesCount++);
    console.log( "You lost!  Losses increased by 1 point.");

    }else if (counter < computerTargetScore) {
    (document.querySelector("#counter").innerHTML = counter+=amethystValue);
    console.log( "The counter increased by the amethyst value of " + amethystValue + ".");
    };
           
});

 

              /* 

                  

$( "#brown_crystal" ).click(function() {

  ( document.querySelector("#counter").innerHTML = counter+=brownCrystalValue);

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

 

 

*/