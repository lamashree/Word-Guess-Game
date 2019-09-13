
// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
var computerWords = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho ",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",];

 // Creating variables to hold the number of wins, losses, and ties. They start at 0.

 var wins = 0;
 var losses = 0;
 
 var lettersGuessed = [""];
 var guessWord = computerWords[Math.floor(Math.random() * computerWords.length)];
 var guessesLeft = computerWords.length + 5;


var reset = function() {
    console.log("this game is being reset");
    lettersGuessed = [""];
}


 document.onkeyup = function(event) {
       // Determines which key was pressed.
    var userGuess = event.key;
    lettersGuessed.push(userGuess);
    document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
    // console.log(lettersGuessed);
    guessesLeft--
    console.log(guessesLeft);
if (guessesLeft==0){
    console.log('YOU ARE GOING TO RESET THE GAME')
    guessesLeft = 10;
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    reset();
}
if (userGuess==guessWord) {
console.log("this if statement is working fine");
 }
 else {
console.log("this if statement is not working")
 }
 }
 if (userGuess==lettersGuessed) {
     wins++
 }
 else (userGuess==lettersGuessed 
    losses++);
 


/*function addListeners() {
    document.getElementById("mybutton").on("click", started);
}
function myFunction(event) {
    var x = event.keyCode || event.keyCode;
    document.getElementById("mybutton").innerhtml;

    console.log(addListeners);
    var mybutton = 0;
    var wins = 0;
    var wordGuess = 0;
    var Numberguessremaining = 9;
    var words = [
        "Alabama",
        "Alaska",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "Florida",
        "Georgia",
        "Hawaii",
        "Idaho ",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming",
    ];
    guessesleft = 9;
    var lettersGuessed = [];
    var youGuess = event.key;
    lettersGuessed.push(youGuess);

    function getItem() {
        document.getElementById("wordGuess").innerhtml = words[Math.floor(Math.random() * words.length)];
    };

        document.onkeypress = function (evt) {
            var evt = evt || window.event,
                charCode = evt.keyCode || evt.which,
                lettersGuessed = String.fromCharCode(charCode);
                alert("user pressed Enter");
            document.getElementById("lettersGuessed"),innerhtml = lettersGuessed;
            document.getElementById("guessesLeft").innerhtml = guessesLeft;

            guessesLeft--;
            if (guessesLeft === -1) {
                alert("You Loose!");
            }
            };
console.log("guessleft")*/

