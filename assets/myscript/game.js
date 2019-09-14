// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
var computerWords = ["a", "b", "c", ];

// Creating variables to hold the number of wins, losses, and ties. They start at 0.

var wins = 0;
var losses = 0;

var lettersGuessed = [""];
var guessWord = computerWords[Math.floor(Math.random() * computerWords.length)];
var guessesLeft = guessWord.length + 5;


var reset = function () {
	console.log("this game is being reset");
	lettersGuessed = [""];
}


document.onkeyup = function (event) {
	// Determines which key was pressed.
	var userGuess = event.key;
    console.log(lettersGuessed.length);
    console.log(guessesLeft);
    console.log(lettersGuessed);
    lettersGuessed.push(userGuess)
	document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
	if (guessesLeft == 0) {
		console.log('YOU ARE GOING TO RESET THE GAME')
		guessesLeft = 10;
		losses++;
		document.getElementById("guessesLeft").innerHTML = guessesLeft;
		reset();
	}

	console.log("this if statement is not working");
	if (userGuess == guessWord) {
		//("#wins++");
		wins++;
		console.log(wins);
		///lettersGuessed.push(wins);
		document.getElementById("wins").innerHTML = wins
	} else {
		guessesLeft--;
		document.getElementById("losses").innerHTML = losses
	}
}

// wins.textContent = "wins: " + wins;
// losses.textContent = "losses: " + losses;

console.log(wins);
console.log(losses);
// function soretrack()