//=================================================================
//                  VARIABLES


var computerTargetScore = Math.floor((Math.random() * 120) + 19);
console.log("The computer generated target score is: " + computerTargetScore);

var crystalValue = [
    {
        crystalName: "amethyst",
        crystalValue1: "",

    },

    {
        crystalName: "brown_crystal",
        crystalValue2: "",
        
    },

    {
        crystalName: "colorful_crystal",
        crystalValue3: "",

    },

    {
        crystalName: "crystal-rocks",
        crystalValue4: "",
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


//===================================================================
//                  FUNCTIONS

// Function that updates the Target Score...
function UpdateTargetScore() {
//  Print Target Score to UI
  document.querySelector("#points").innerHTML = computerTargetScore;
}
UpdateTargetScore();

//}

//TargetScore(); 
// This function is run the first time a user clicks on the amethyst crystal; 
// create an onClick event that triggers an on click event.

// Create a for loop to create crystals for every numberOption.
for (var i = 0; i < crystalValue.length; i++) {

// code to generate a random value for each crystal and to add the value to the counter:

function UpdateCrystalValue() {
    $(".crystal-image").on( "click", function () {
        crystalValue1 = Math.floor((Math.random() * 12) + 1);
        counter+=crystalValue1;
        document.querySelector("#counter").innerHTML = crystalValue1;

        crystalValue2 = Math.floor((Math.random() * 12) + 1);
        counter+=crystalValue2;
        document.querySelector("#counter").innerHTML = crystalValue2;

        crystalValue3 = Math.floor((Math.random() * 12) + 1);
        counter+=crystalValue3;
        document.querySelector("#counter").innerHTML = crystalValue3;

        crystalValue4 = Math.floor((Math.random() * 12) + 1);
        counter+=crystalValue4;
        document.querySelector("#counter").innerHTML = crystalValue4;

});
console.log( "The value of an amethyst is " + crystalValue1 );
console.log( "The value of a brown crystal is " + crystalValue2 );
console.log( "The value of a colorful crystal is " + crystalValue3 );
console.log( "The value of a crystal rock is " + crystalValue4 );
};
};
UpdateCrystalValue()

/*
// code to generate a random value for the amethyst and to add the value to the counter
$("#amethyst").on( "click", function() {
    crystalValue1 = Math.floor((Math.random() * 12) + 1);
    counter+=crystalValue1;
    document.querySelector("#counter").innerHTML = crystalValue1;
    // below code makes the randomly generated value stick, but you cannot re-click the image
    //$( "#amethyst" ).unbind( "click" );

    console.log( "The value of an amethyst is " + crystalValue1 );
  });

  
  // code to generate a random value for the brown crystal and to add the value to the counter
  $("#brown_crystal").on( "click", function() {
    crystalValue2 = Math.floor((Math.random() * 12) + 1);
    counter+=crystalValue2;
    document.querySelector("#counter").innerHTML = crystalValue2;
    // below code makes the randomly generated value stick, but you cannot re-click the image
    //$( "#brown_crystal" ).unbind( "click" );

    console.log( "The value of a brown crystal is " + crystalValue2 );
  });


  // code to generate a random value for the colorful crystal and to add the value to the counter
  $("#colorful_crystal").on( "click", function() {
    crystalValue3 = Math.floor((Math.random() * 12) + 1);
    counter+=crystalValue3;
    document.querySelector("#counter").innerHTML = crystalValue3;
    // below code makes the randomly generated value stick, but you cannot re-click the image
    //$( "#colorful_crystal" ).unbind( "click" );

    console.log( "The value of a colorful crystal is " + crystalValue3 );
  });

  // code to generate a random value for the crystal rocks and to add the value to the counter
  $("#crystal-rocks").on( "click", function() {
    crystalValue4 = Math.floor((Math.random() * 12) + 1);
    counter+=crystalValue4;
    document.querySelector("#counter").innerHTML = crystalValue4;
    // below code makes the randomly generated value stick, but you cannot re-click the image
    //$( "#crystal-rocks" ).unbind( "click" );

    console.log( "The value of a crystal rock is " + crystalValue4 );
  });
})


  //                SECOND ATTEMPT
//=============================================================================
//                  VARIABLES




*/