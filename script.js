//*********************************************************************************
// written by Ben Jones															   
//																				   
// edited by:																	   
// ▄████▄   ██░ ██  ▄▄▄       ██▀███   ██▓     ██▓▓█████ 						   
// ▒██▀ ▀█  ▓██░ ██▒▒████▄    ▓██ ▒ ██▒▓██▒    ▓██▒▓█   ▀						    
// ▒▓█    ▄ ▒██▀▀██░▒██  ▀█▄  ▓██ ░▄█ ▒▒██░    ▒██▒▒███  						    
// ▒▓▓▄ ▄██▒░▓█ ░██ ░██▄▄▄▄██ ▒██▀▀█▄  ▒██░    ░██░▒▓█  ▄						    
// ▒ ▓███▀ ░░▓█▒░██▓ ▓█   ▓██▒░██▓ ▒██▒░██████▒░██░░▒████▒						   
// ░ ░▒ ▒  ░ ▒ ░░▒░▒ ▒▒   ▓▒█░░ ▒▓ ░▒▓░░ ▒░▓  ░░▓  ░░ ▒░ ░						   	
//   ░  ▒    ▒ ░▒░ ░  ▒   ▒▒ ░  ░▒ ░ ▒░░ ░ ▒  ░ ▒ ░ ░ ░  ░						   
// ░         ░  ░░ ░  ░   ▒     ░░   ░   ░ ░    ▒ ░   ░   						   
// ░ ░       ░  ░  ░      ░  ░   ░         ░  ░ ░     ░  ░						   
// ░                                                      						   
// Student boilerplate to make a OOP Rock Paper Scissors						   
// - OOP - Const data type - Passing data into methods							   
//																				   
// Written 22/6/2023															   
// License: https://github.com/TempeHS/2024SDD-WebJS-Ben.Jones/blob/main/LICENSE   
// this rock paper scissors code was used as a template							   
// 																				   	
// main plan with this code is to turn this boiler plate from a rock paper scissors
// into a tic tac toe based off of the random number generator					   
//*********************************************************************************

// NOTES: 
// 11/8/23, 10:50 AM; current issues, RNG generates the same number twice, when game is reset rng doesnt start until player (X) clicks a square twice


let playerScore = 0;
let computerScore = 0;
let rngOutput = 0;
let turnCount = 0;


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
		gameReset();
		turnCount = turnCount -1;
	});

	// utilise the randomnumber output to allow the computer to choose a square
	// convert random number outputs into a value that can be assigned into a square
	// assign outputs to squares for rng player

	playerTip = "You chose " + playerClicked;

	let b1 = document.getElementById("b1"); // test if java script reacts to HTML button being clicked
	let b2 = document.getElementById("b2");
	let b3 = document.getElementById("b3");
	let b4 = document.getElementById("b4");
	let b5 = document.getElementById("b5");
	let b6 = document.getElementById("b6");
	let b7 = document.getElementById("b7");
	let b8 = document.getElementById("b8");
	let b9 = document.getElementById("b9");

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

	if (playerClicked) {
		turnCount = turnCount +1;
	}
	
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
		rngOutput = "rng output: " + 1;
	}

	if (randomNumber == 2) { 
		document.getElementById("b2").innerHTML = "O";
		rngOutput = "rng output: " + 2;
	}
	
	if (randomNumber == 3) { 
		document.getElementById("b3").innerHTML = "O";
		rngOutput = "rng output: " + 3;
	}

	if (randomNumber == 4) {
		document.getElementById("b4").innerHTML = "O";
		rngOutput = "rng output: " + 4;
	}

	if (randomNumber == 5) {
		document.getElementById("b5").innerHTML = "O";
		rngOutput = "rng output: " + 5;
	}

	if (randomNumber == 6) {
		document.getElementById("b6").innerHTML = "O";
		rngOutput = "rng output: " + 6;
	}

	if (randomNumber == 7) {
		document.getElementById("b7").innerHTML = "O";
		rngOutput = "rng output: " + 7;
	}

	if (randomNumber == 8) {
		document.getElementById("b8").innerHTML = "O";
		rngOutput = "rng output: " + 8;
	}

	if (randomNumber == 9) {
		document.getElementById("b9").innerHTML = "O";
		rngOutput = "rng output: " + 9;
	}

	// Clears board (working properly now)
	document.getElementById("resetButton").addEventListener("click", function() {
		gameReset();
	});	

	const computerChoice = randomNumber //for debug only
	equalityCheck (playerClicked, computerChoice);
}

// generates random number 
function generateRandomNumber () {
	const result = Math.floor((Math.random() * 9) +1); // rng works fine for the moment but code needs to be put in place to prevent any code from using duplicated outputs
	return result; // tested with alert(result); and gen rand num works when a button is clicked
}

function gameReset () {
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
	rngOutput = 0;
}

// Logic part of the game

function equalityCheck (playerChoice, computerChoice) {
	// perform an equality check, update scores and output a string using concatenation that gives user feedback 

	// create if statements that detect 3 crosses or circles in a row and decide the winner
	// create logic that plots the circles by the computer (player will be crosses and computer will be circles)
	
	//let playerTip = 0; // only for testing at the moment

	// Line checker, still testing, currently tells you if theres a line pattern

	// straight line (left to right), 1,2,3 or 4,5,6 or 7,8,9
	if (document.getElementById("b1").innerHTML == "X" && document.getElementById("b2").innerHTML == "X" && document.getElementById("b3").innerHTML == "X") {
		playerScore = playerScore +1;
		playerTip = "Player won!";
		gameReset();
	} else if (document.getElementById("b1").innerHTML == "0" && document.getElementById("b2").innerHTML == "O" && document.getElementById("b3").innerHTML == "X") {
		computerScore = computerScore +1;
		playerTip = "Computer Won!";
		gameReset();
	}
	if (document.getElementById("b4").innerHTML == "X" && document.getElementById("b5").innerHTML == "X" && document.getElementById("b6").innerHTML == "X") {
		playerScore = playerScore +1;
		playerTip = "Player won!";
		gameReset();
	} else if (document.getElementById("b4").innerHTML == "O" && document.getElementById("b5").innerHTML == "O" && document.getElementById("b6").innerHTML == "O") {
		computerScore = computerScore +1;
		playerTip = "Computer won!";
		gameReset();
	}
	if (document.getElementById("b7").innerHTML == "X" && document.getElementById("b8").innerHTML == "X" && document.getElementById("b9").innerHTML == "X") {
		playerScore = playerScore +1;
		playerTip = "Player won!";
		gameReset();
	} else if (document.getElementById("b7").innerHTML == "O" && document.getElementById("b8").innerHTML == "O" && document.getElementById("b9").innerHTML == "O") {
		computerScore = computerScore +1;
		playerTip = "Computer won!";
		gameReset();
	}
	// straight line win (downwards), 1,4,7 or 2,5,8 or 3,6,9
	if (document.getElementById("b1").innerHTML == "X" && document.getElementById("b4").innerHTML == "X" && document.getElementById("b7").innerHTML == "X") {
		playerScore = playerScore +1;
		playerTip = "Player won!";
		gameReset();
	} else if (document.getElementById("b1").innerHTML == "O" && document.getElementById("b4").innerHTML == "O" && document.getElementById("b7").innerHTML == "O") {
		playerScore = playerScore +1;
		playerTip = "Computer won!";
		gameReset();
	}
	if (document.getElementById("b2").innerHTML == "X" && document.getElementById("b5").innerHTML == "X" && document.getElementById("b8").innerHTML == "X") {
		playerScore = playerScore +1;
		playerTip = "Player won!";
		gameReset();
	} else if (document.getElementById("b2").innerHTML == "O" && document.getElementById("b5").innerHTML == "O" && document.getElementById("b8").innerHTML == "O") {
		playerScore = playerScore +1;
		playerTip = "Computer won!";
		gameReset();
	}
	if (document.getElementById("b3").innerHTML == "X" && document.getElementById("b6").innerHTML == "X" && document.getElementById("b9").innerHTML == "X") {
		playerScore = playerScore +1;
		playerTip = "Player won!";
		gameReset();
	} else if (document.getElementById("b3").innerHTML == "O" && document.getElementById("b6").innerHTML == "O" && document.getElementById("b9").innerHTML == "O") {
		playerScore = playerScore +1;
		playerTip = "Computer won!";
		gameReset();
	}	
	// diagonal line win, 1,5,9 or 3,5,7
	if (document.getElementById("b1").innerHTML == "X" && document.getElementById("b5").innerHTML == "X" && document.getElementById("b9").innerHTML =="X") {
		playerScore = playerScore +1;
		playerTip = "Player won!";
		gameReset();
	} else if (document.getElementById("b1").innerHTML == "O" && document.getElementById("b5").innerHTML == "O" && document.getElementById("b9").innerHTML =="O") {
		computerScore = computerScore +1;
		playerTip = "Computer won!";
		gameReset();
	}
	if (document.getElementById("b3").innerHTML == "X" && document.getElementById("b5").innerHTML == "X" && document.getElementById("b7").innerHTML =="X") {
		playerScore = playerScore +1;
		playerTip = "Player won!";
		gameReset();
	} else if (document.getElementById("b3").innerHTML == "O" && document.getElementById("b5").innerHTML == "O" && document.getElementById("b7").innerHTML =="O") {
		computerScore = computerScore +1;
		playerTip = "Computer won!";
		gameReset();
	}
	

	// AI doesnt choose box if player has already chosen the box ID matching the rng output

	if (document.getElementById("b1").innerHTML == "X" && generateRandomNumber == 1) {
		alert("computer choice is changed")
		generateRandomNumber = generateRandomNumber +1;
		// make random number generator run again if rng output is equal to player choice value
	}

	// prevent player from clicking same square twice

	if (generateRandomNumber == 1 && b1.clicked) {
		document.getElementById("b1").innerHTML = "O";
		// stop random number generator from generating number until player clicks another empty button
	}
	if (generateRandomNumber == 2 && b2.clicked) {
		document.getElementById("b2").innerHTML = "O";
		// stop random number generator from generating number until player clicks another empty button
	}
	if (generateRandomNumber == 3 && b3.clicked) {
		document.getElementById("b3").innerHTML = "O";
		// stop random number generator from generating number until player clicks another empty button
	}
	if (generateRandomNumber == 4 && b4.clicked) {
		document.getElementById("b4").innerHTML = "O";
		// stop random number generator from generating number until player clicks another empty button
	}
	if (generateRandomNumber == 5 && b5.clicked) {
		document.getElementById("b5").innerHTML = "O";
		// stop random number generator from generating number until player clicks another empty button
	}
	if (generateRandomNumber == 6 && b6.clicked) {
		document.getElementById("b6").innerHTML = "O";
		// stop random number generator from generating number until player clicks another empty button
	}
	if (generateRandomNumber == 7 && b7.clicked) {
		document.getElementById("b7").innerHTML = "O";
		// stop random number generator from generating number until player clicks another empty button
	}
	if (generateRandomNumber == 8 && b8.clicked) {
		document.getElementById("b8").innerHTML = "O";
		// stop random number generator from generating number until player clicks another empty button
	}
	if (generateRandomNumber == 9 && b9.clicked) {
		document.getElementById("b9").innerHTML = "O";
		// stop random number generator from generating number until player clicks another empty button
	}

	if (b1.clicked && generateRandomNumber == 1) {
		document.getElementById("b1").innerHTML = "X";
		// stop random number generator from generating number until player clicks another empty button
	}
	if (b2.clicked && generateRandomNumber == 2) {
		document.getElementById("b2").innerHTML = "X";
		// stop random number generator from generating number until player clicks another empty button
	}
	if (b3.clicked && generateRandomNumber == 3) {
		document.getElementById("b3").innerHTML = "X";
		// stop random number generator from generating number until player clicks another empty button
	}
	if (b4.clicked && generateRandomNumber == 4) {
		document.getElementById("b4").innerHTML = "X";
		// stop random number generator from generating number until player clicks another empty button
	}
	if (b5.clicked && generateRandomNumber == 5) {
		document.getElementById("b5").innerHTML = "X";
		// stop random number generator from generating number until player clicks another empty button
	}
	if (b6.clicked && generateRandomNumber == 6) {
		document.getElementById("b6").innerHTML = "X";
		// stop random number generator from generating number until player clicks another empty button
	}
	if (b7.clicked && generateRandomNumber == 7) {
		document.getElementById("b7").innerHTML = "X";
		// stop random number generator from generating number until player clicks another empty button
	}
	if (b8.clicked && generateRandomNumber == 8) {
		document.getElementById("b8").innerHTML = "X";
		// stop random number generator from generating number until player clicks another empty button
	}
	if (b9.clicked && generateRandomNumber == 9) {
		document.getElementById("b9").innerHTML = "X";
		// stop random number generator from generating number until player clicks another empty button
	}

	// resets board when turnCount = 9 to reset board automatically on a tie

	if (turnCount == 9) {
		gameReset();
	}

	// alert (playerChoice);  //for debug only
	// alert (computerChoice); //for debug only
	
	document.getElementById("playerScoreContent").innerHTML = playerScore;
	document.getElementById("computerScoreContent").innerHTML = computerScore;
	document.getElementById("tipContent").innerHTML = playerTip;
	document.getElementById("turnCount").innerHTML = turnCount; // testing only, displays how many times the computer or player has taken a turn and resets on 9 when no one wins
	document.getElementById("rngOutput").innerHTML = rngOutput;
}