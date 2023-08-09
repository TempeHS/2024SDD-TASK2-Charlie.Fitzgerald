//**********************************************************************************
// written by Ben Jones															   *
//																				   *
// edited by:																	   *
// ▄████▄   ██░ ██  ▄▄▄       ██▀███   ██▓     ██▓▓█████ 						   *
// ▒██▀ ▀█  ▓██░ ██▒▒████▄    ▓██ ▒ ██▒▓██▒    ▓██▒▓█   ▀						   * 
// ▒▓█    ▄ ▒██▀▀██░▒██  ▀█▄  ▓██ ░▄█ ▒▒██░    ▒██▒▒███  						   * 
// ▒▓▓▄ ▄██▒░▓█ ░██ ░██▄▄▄▄██ ▒██▀▀█▄  ▒██░    ░██░▒▓█  ▄						   * 
// ▒ ▓███▀ ░░▓█▒░██▓ ▓█   ▓██▒░██▓ ▒██▒░██████▒░██░░▒████▒						   *
// ░ ░▒ ▒  ░ ▒ ░░▒░▒ ▒▒   ▓▒█░░ ▒▓ ░▒▓░░ ▒░▓  ░░▓  ░░ ▒░ ░						   *	
//   ░  ▒    ▒ ░▒░ ░  ▒   ▒▒ ░  ░▒ ░ ▒░░ ░ ▒  ░ ▒ ░ ░ ░  ░						   *
// ░         ░  ░░ ░  ░   ▒     ░░   ░   ░ ░    ▒ ░   ░   						   *
// ░ ░       ░  ░  ░      ░  ░   ░         ░  ░ ░     ░  ░						   *
// ░                                                      						   *
// Student boilerplate to make a OOP Rock Paper Scissors						   *
// - OOP - Const data type - Passing data into methods							   *
//																				   *
// Written 22/6/2023															   *
// License: https://github.com/TempeHS/2024SDD-WebJS-Ben.Jones/blob/main/LICENSE   *
// this rock paper scissors code was used as a template							   *
// 																				   *	
// main plan with this code is to turn this boiler plate from a rock paper scissors*
// into a tic tac toe based off of the random number generator					   *
//**********************************************************************************


let playerScore = 0;
let computerScore = 0;
//let turnCount = 0;

const numbers = document.querySelectorAll('.number')
const screen = document.getElementById('screen')

numbers.forEach(number => {
  number.addEventListener('click', function(e) {
    screen.innerHTML += e.target.innerHTML
  })
});

function gameLoop (playerClicked) {
	const randomNumber = generateRandomNumber()
	
	document.getElementById("startButton").addEventListener("click", function() {
		playerTip = "Game Started";
	});

	// utilise the randomnumber output to allow the computer to choose a square
	// convert random number outputs into a value that can be assigned into a square
	// assign outputs to squares for rng player

	playerTip = "You chose " + playerClicked;

	var b1 = document.getElementById("b1"); // test if java script reacts to HTML button being clicked
	var b2 = document.getElementById("b2");
	var b3 = document.getElementById("b3");
	var b4 = document.getElementById("b4");
	var b5 = document.getElementById("b5");
	var b6 = document.getElementById("b6");
	var b7 = document.getElementById("b7");
	var b8 = document.getElementById("b8");
	var b9 = document.getElementById("b9");

	// adds a point to turn counter when a player or computer takes a turn (not working)
	
	/*if (b1.clicked) {
		turnCount = turnCount +1;
		} else if (b2.clicked) {
		turnCount = turnCount +1;
		} else if (b3.clicked) {
		turnCount = turnCount +1;
		} else if (b4.clicked) {
		turnCount = turnCount +1;
		} else if (b5.clicked) {
		turnCount = turnCount +1;
		} else if (b6.clicked) {
		turnCount = turnCount +1;
		} else if (b7.clicked) {
		turnCount = turnCount +1;
		} else if (b8.clicked) {
		turnCount = turnCount +1;
		} else if (b9.clicked) {
		turnCount = turnCount +1;
	}*/

	// change square to X when player clicks a square

	document.getElementById("b1").addEventListener("click", function(){ 
		document.getElementById("b1").innerHTML = "X";
	});

	document.getElementById("b2").addEventListener("click", function(){ 
		document.getElementById("b2").innerHTML = "X";
	});

	document.getElementById("b3").addEventListener("click", function(){ 
		document.getElementById("b3").innerHTML = "X";
	});

	document.getElementById("b4").addEventListener("click", function(){ 
		document.getElementById("b4").innerHTML = "X";
	});

	document.getElementById("b5").addEventListener("click", function(){ 
		document.getElementById("b5").innerHTML = "X";
	});

	document.getElementById("b6").addEventListener("click", function(){ 
		document.getElementById("b6").innerHTML = "X";
	});

	document.getElementById("b7").addEventListener("click", function(){ 
		document.getElementById("b7").innerHTML = "X";
	});

	document.getElementById("b8").addEventListener("click", function(){ 
		document.getElementById("b8").innerHTML = "X";
	});

	document.getElementById("b9").addEventListener("click", function(){ 
		document.getElementById("b9").innerHTML = "X";
	});

	// AI portion of the javascript code; change square to O accordingly with the RNG output

	if (randomNumber == 1) { 
		document.getElementById("b1").innerHTML = "O";
	}

	if (randomNumber == 2) { 
		document.getElementById("b2").innerHTML = "O";
	}
	
	if (randomNumber == 3) { 
		document.getElementById("b3").innerHTML = "O";
	}

	if (randomNumber == 4) {
		document.getElementById("b4").innerHTML = "O";
	}

	if (randomNumber == 5) {
		document.getElementById("b5").innerHTML = "O";
	}

	if (randomNumber == 6) {
		document.getElementById("b6").innerHTML = "O";
	}

	if (randomNumber == 7) {
		document.getElementById("b7").innerHTML = "O";
	}

	if (randomNumber == 8) {
		document.getElementById("b8").innerHTML = "O";
	}

	if (randomNumber == 9) {
		document.getElementById("b9").innerHTML = "O";
	}

	// Clears board (working properly now)
	document.getElementById("resetButton").addEventListener("click", function() {
		b1 = document.getElementById("b1").innerHTML = "";
		b2 = document.getElementById("b2").innerHTML = "";
		b3 = document.getElementById("b3").innerHTML = "";
		b4 = document.getElementById("b4").innerHTML = "";
		b5 = document.getElementById("b5").innerHTML = "";
		b6 = document.getElementById("b6").innerHTML = "";
		b7 = document.getElementById("b7").innerHTML = "";
		b8 = document.getElementById("b8").innerHTML = "";
		b9 = document.getElementById("b9").innerHTML = "";
		//turnCount = 0;
	});	

	const computerChoice = randomNumber //for debug only
	equalityCheck (playerClicked, computerChoice);
}

// generates random number 
function generateRandomNumber () {
	const result = Math.floor((Math.random() * 9) + 1);
	return result; // tested with alert(result); and gen rand num works when a button is clicked
	//rngOutput = "randomNumberOutput = " + result;
}

// Logic part of the game

function equalityCheck (playerChoice, computerChoice) {
	// perform an equality check, update scores and output a string using concatenation that gives user feedback 

	// create if statements that detect 3 crosses or circles in a row and decide the winner
	// create logic that plots the circles by the computer (player will be crosses and computer will be circles)
	
	//let playerTip = 0; only for testing at the moment

	// Line checker, still testing, currently tells you if theres a line pattern
	
	if (document.getElementById("b1").innerHTML == "X" && document.getElementById("b2").innerHTML == "X" && document.getElementById("b3").innerHTML == "X") {
		b1 = document.getElementById("b1").innerHTML = "";
		b2 = document.getElementById("b2").innerHTML = "";
		b3 = document.getElementById("b3").innerHTML = "";
		b4 = document.getElementById("b4").innerHTML = "";
		b5 = document.getElementById("b5").innerHTML = "";
		b6 = document.getElementById("b6").innerHTML = "";
		b7 = document.getElementById("b7").innerHTML = "";
		b8 = document.getElementById("b8").innerHTML = "";
		b9 = document.getElementById("b9").innerHTML = "";
		//turnCount = 0;
		playerScore = playerScore +1;
		playerTip = "Player won!";
	} 
	if (document.getElementById("b1").innerHTML == "X" && document.getElementById("b4").innerHTML == "X" && document.getElementById("b7").innerHTML == "X") {
		b1 = document.getElementById("b1").innerHTML = "";
		b2 = document.getElementById("b2").innerHTML = "";
		b3 = document.getElementById("b3").innerHTML = "";
		b4 = document.getElementById("b4").innerHTML = "";
		b5 = document.getElementById("b5").innerHTML = "";
		b6 = document.getElementById("b6").innerHTML = "";
		b7 = document.getElementById("b7").innerHTML = "";
		b8 = document.getElementById("b8").innerHTML = "";
		b9 = document.getElementById("b9").innerHTML = "";
		//turnCount = 0;
		playerScore = playerScore +1;
		playerTip = "Player won!";
	} 
	if (document.getElementById("b1").innerHTML == "X" && document.getElementById("b5").innerHTML == "X" && document.getElementById("b9").innerHTML =="X") {
		b1 = document.getElementById("b1").innerHTML = "";
		b2 = document.getElementById("b2").innerHTML = "";
		b3 = document.getElementById("b3").innerHTML = "";
		b4 = document.getElementById("b4").innerHTML = "";
		b5 = document.getElementById("b5").innerHTML = "";
		b6 = document.getElementById("b6").innerHTML = "";
		b7 = document.getElementById("b7").innerHTML = "";
		b8 = document.getElementById("b8").innerHTML = "";
		b9 = document.getElementById("b9").innerHTML = "";
		//turnCount = 0;
		playerScore = playerScore +1;
		playerTip = "Player won!";
	}
	if (document.getElementById("b4").innerHTML == "X" && document.getElementById("b5").innerHTML == "X" && document.getElementById("b6").innerHTML == "X") {
		b1 = document.getElementById("b1").innerHTML = "";
		b2 = document.getElementById("b2").innerHTML = "";
		b3 = document.getElementById("b3").innerHTML = "";
		b4 = document.getElementById("b4").innerHTML = "";
		b5 = document.getElementById("b5").innerHTML = "";
		b6 = document.getElementById("b6").innerHTML = "";
		b7 = document.getElementById("b7").innerHTML = "";
		b8 = document.getElementById("b8").innerHTML = "";
		b9 = document.getElementById("b9").innerHTML = "";
		//turnCount = 0;
		playerScore = playerScore +1;
		playerTip = "Player won!";
	} else if (document.getElementById("b4").innerHTML == "O" && document.getElementById("b5").innerHTML == "O" && document.getElementById("b6").innerHTML == "O") {
		b1 = document.getElementById("b1").innerHTML = "";
		b2 = document.getElementById("b2").innerHTML = "";
		b3 = document.getElementById("b3").innerHTML = "";
		b4 = document.getElementById("b4").innerHTML = "";
		b5 = document.getElementById("b5").innerHTML = "";
		b6 = document.getElementById("b6").innerHTML = "";
		b7 = document.getElementById("b7").innerHTML = "";
		b8 = document.getElementById("b8").innerHTML = "";
		b9 = document.getElementById("b9").innerHTML = "";
		//turnCount = 0;
		computerScore = computerScore +1;
		playerTip = "Player won!";
	}

	// AI doesnt choose box if player has already chosen the box ID matching the rng output

	if (document.getElementById("b1").innerHTML == "X" && result == 1) {
		alert("computer and player chose square 1")
	}

	// prevent player from clicking same square twice

	if (b1.clicked && document.getElementByClass("grid-holder").innerHTML == "X") {
		alert("choose again")
	}

	// resets board when turnCount = 9 to reset board automatically on a tie

	/*if (turnCount == 9) {
		b1 = document.getElementById("b1").innerHTML = "";
		b2 = document.getElementById("b2").innerHTML = "";
		b3 = document.getElementById("b3").innerHTML = "";
		b4 = document.getElementById("b4").innerHTML = "";
		b5 = document.getElementById("b5").innerHTML = "";
		b6 = document.getElementById("b6").innerHTML = "";
		b7 = document.getElementById("b7").innerHTML = "";
		b8 = document.getElementById("b8").innerHTML = "";
		b9 = document.getElementById("b9").innerHTML = "";
		turnCount = 0;
	}*/

	// alert (playerChoice);  //for debug only
	// alert (computerChoice); //for debug only
	
	document.getElementById("playerScoreContent").innerHTML = playerScore;
	document.getElementById("computerScoreContent").innerHTML = computerScore;
	document.getElementById("tipContent").innerHTML = playerTip;
	document.getElementById("rngOutput").innerHTML = rngOutput;
	//document.getElementById("turnCount").innerHTML = turnCount;
}