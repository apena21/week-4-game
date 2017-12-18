/*
var link = document.getElementById('getNumber'); 
link.onclick = getNumber; 

function getNumber() {
    var minNumber = 1; // le minimum
    var maxNumber = 100; // le maximum
    var randomnumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber); // la fonction magique
    $('#result').html(randomnumber);
    return false;
}   
*/


/*
function targetScore(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
  }
  var result = range(19, 120); // [9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
  console.log(result);
*/


var computerTargetScore = Math.floor((Math.random() * 120) + 19);
console.log("The computer generated target score is: " + computerTargetScore);



var crystalValue1 = 0;
//Math.floor((Math.random() * 12) + 1);
//console.log("The amethyst value is: " +computerTargetScore);
var crystalValue2 = 0;
var crystalValue3 = 0;


//===================================================================
//                  FUNCTIONS

// Function that updates the Target Score...
function UpdateTargetScore() {
  //  document.querySelector("points").innerHTML = computerTargetScore;
  document.querySelector("#points").innerHTML = computerTargetScore;
}
UpdateTargetScore();

//}

//TargetScore(); 
// This function is run whenever the userclicks on the amethyst crystal; 
// create an onClick event that triggers an on click event.



$("#amethyst").on( "click", function() {
    crystalValue1 = Math.floor((Math.random() * 12) + 1);


    console.log( "The value of an amethyst is " + crystalValue1 );
  });


/*  $("#amethyst").on("click", function(clickAmethyst) {
    
            // ... we trigger an alert.
            alert("I've been clicked!");
            for (crystalValue1)
            do {
                crystalValue1 = Math.floor((Math.random() * 12) + 1);
            } while(crystalValue1 === crystalValue2);
            console.log("The amethyst value is: " +computerTargetScore);

console.log("The value of an amethyst is " + clickAmethyst);            
  });

  /*
for (crystalValue1)
do {
    crystalValue1 = Math.floor((Math.random() * 12) + 1);
} while(crystalValue1 === crystalValue2);
console.log("The amethyst value is: " +computerTargetScore);

do {
    crystalValue2 = Math.floor((Math.random() * 12) + 1);
} while(crystalValue2 === crystalValue3);
console.log("The brown cyrstal's value is: " +computerTargetScore);

/*
var crystalValue2 = Math.floor((Math.random() * 12) + 1);
console.log("The brown crystal's value is: " +computerTargetScore);

var crystalValue3 = Math.floor((Math.random() * 12) + 1);
console.log("The colorful crystal's value is: " +computerTargetScore);

var crystalValue3 = Math.floor((Math.random() * 12) + 1);
console.log("The crystal rock's value is: " +computerTargetScore);

// FUNCTIONS
// ==========================================================================
 
// This function is run whenever the user presses a key.

/*
document.onkeyup = function(event) {
    
            console.log("target score is: " + randomTargetScore);
}
*/