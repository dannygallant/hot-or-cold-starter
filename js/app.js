
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	newGame();  // Start new game when page loads

});

// Start a new game when user clicks +New Game button - class .new 
// $(".new").onclick=newGame(); 	
// Can't get this to work from here, but if I add to the HTML in the <li> it works

function newGame() {
	// Clear #guessList
	var randomNumber = randomizer(1, 100);
	console.log(randomNumber);
};

function randomizer(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};



