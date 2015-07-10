$(document).ready(function(){
	
	newGame();  // Start new game when page loads. Must come before ".new" click function. Otherwise the call to newGame() won't work.

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	// Start new game, without reloading page, when user clicks +NEWGAME.
  	$(".new").click(function() {
  		newGame();
  	});


$("#guessButton").on("click", function(e) {
  	e.preventDefault();
  	if (correctGuess === true) {
  		$("#feedback").text("Please click +NEW GAME to start again. You've already won this game.");
  	} else {
		var userGuess = $('#userGuess').val();  // set variable to user's entry in userGuess field
  		console.log("userGuess" + userGuess);
  		if (+userGuess >= 1 && +userGuess <= 100) {
			$("#guessList").append("<li>" + userGuess + "</li>");  // add user's guesses to li in guessList
			numberOfGuesses ++;  // increment count by 1 & update counter on game output
			$("#count").text(numberOfGuesses);
			testAnswer(+userGuess, secretNumber);  // Call comparison function to check user's guess against random generated number
  		} else {
  			$("#feedback").text("Please enter a number between 1 and 100.");
  		};
	};
	
  	$("#userGuess").val('');  // Reset userGuess field 
  	});
});

// =========================

// Global variables
var secretNumber;
var numberOfGuesses;
var correctGuess = false;

// Runs when page is loaded. Reset game and user Also called by +NEWGAME button, whithou reloading page.
var newGame = function() {
	document.getElementById("userGuess").focus();	// Place cursor in user input field
	secretNumber = randomizer(1, 100);				// Call random number generator
	console.log("secretNumber:" + secretNumber);
	numberOfGuesses = 0;							// Reset number of guess & correct guess variables
	correctGuess = false;
	$("#feedback").text("Make your Guess!");		// Reset game information presented to user
	$("#count").text(numberOfGuesses);
	$("#guessList").children().remove();
};

function randomizer(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// ==========================


var testAnswer = function(guessedNum, correctNum) {
	if (guessedNum === correctNum){
		$("#feedback").text("Great job! You guessed it!");
		correctGuess = true;
	}
	else {
		var difference = Math.abs(guessedNum - correctNum);
		if (difference < 10) {
			$("#feedback").text("You're very hot!");
		} else if (difference < 20) {
			$("#feedback").text("You're hot!");
		} else if (difference < 30) {
			$("#feedback").text("You're Warm!");
		} else if (difference < 50) {
			$("#feedback").text("You're Cold!");
		} else {
			$("#feedback").text("You're Ice cold!");
		}
	}
};


// ==========================



