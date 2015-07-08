
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});


function newGame() {
	var randomNumber = randomizer(1, 100);
	console.log(randomNumber);
};

function randomizer(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};



