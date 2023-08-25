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
// 14/8/23, 5:30 PM; rng generating numbers twice still not solved, tictactoe data now is in javascript rather than checking the HTML file, previous issues still not solved.
// 24/8/23 12:25 PM; rng problems listed above solved, the 3rd square that is clicked by rng or player does not get changed to X or O (needs fixing asap)

// initial variables
let playerScore = 0;
let computerScore = 0;
let rngOutput = 0;
let turnCount = 0;

let gridArray = [0,1,2,3,4,5,6,7,8]; // array for line check

// chunk of code that runs when a button is clicked
function gameLoop (playerClicked) {

	// utilise the randomnumber output to allow the computer to choose a square
	// convert random number outputs into a value that can be assigned into a square
	// assign outputs to squares for rng player

	playerTip = "You chose " + playerClicked;
	
	gridLogger = gridArray; // log the tictactoe board array updates in the console

	let b1 = document.getElementById("b1"); // test if java script reacts to HTML button being clicked
	let b2 = document.getElementById("b2");
	let b3 = document.getElementById("b3");
	let b4 = document.getElementById("b4");
	let b5 = document.getElementById("b5");
	let b6 = document.getElementById("b6");
	let b7 = document.getElementById("b7");
	let b8 = document.getElementById("b8");
	let b9 = document.getElementById("b9");

	// adds a point to turn counter when a player or computer takes a turn 
	if (playerClicked) {
		turnCount = turnCount +1;
	}

	playerClicked = rngPlayerTurn(); // without this the rng will do nothing, essentially makes the rng take a turn when the player clicks a square
	
	// Clears board (working properly now)
	document.getElementById("resetButton").addEventListener("click", function() {
		gameReset();
	});
	
	equalityCheck (playerClicked);
}

// main gameloop that now handles all the player and rng turns
function gameLoop1 (playerSquareClick) {
	document.getElementById(playerSquareClick).innerHTML = "X";
	gridArray[document.getElementById(playerSquareClick).value]='X';
	lineCheck();
	gameLoop(playerSquareClick);
	document.getElementById(playerSquareClick).disabled = true;
	equalityCheck (playerSquareClick);
}

function rngPlayerTurn () {
	const randomNumber = generateRandomNumber();

	// AI portion of the javascript code; change square to O accordingly with the RNG output

	if (randomNumber == 1) { 
		if (gridArray[0] == 'X' || gridArray[0] == 'O') {
			rngPlayerTurn();
		} else {
			document.getElementById("b1").innerHTML = "O";
			rngOutput = "rng output: " + 1;
			gridArray[0]='O';
			lineCheck();
			document.getElementById("b1").disabled = true;
		}
	}

	if (randomNumber == 2) { 
		if (gridArray[1] == 'X' || gridArray[1] == 'O') {
			rngPlayerTurn();
		} else {
			document.getElementById("b2").innerHTML = "O";
			rngOutput = "rng output: " + 1;
			gridArray[1]='O';
			lineCheck();
			document.getElementById("b2").disabled = true;
		}
	}
	
	if (randomNumber == 3) { 
		if (gridArray[2] == 'X' || gridArray[2] == 'O') {
			rngPlayerTurn();
		} else {
			document.getElementById("b3").innerHTML = "O";
			rngOutput = "rng output: " + 1;
			gridArray[2]='O';
			lineCheck();
			document.getElementById("b3").disabled = true;
		}
	}

	if (randomNumber == 4) {
		if (gridArray[3] == 'X' || gridArray[3] == 'O') {
			rngPlayerTurn();
		} else {
			document.getElementById("b4").innerHTML = "O";
			rngOutput = "rng output: " + 1;
			gridArray[3]='O';
			lineCheck();
			document.getElementById("b4").disabled = true;
		}
	}

	if (randomNumber == 5) {
		if (gridArray[4] == 'X' || gridArray[4] == 'O') {
			rngPlayerTurn();
		} else {
			document.getElementById("b5").innerHTML = "O";
			rngOutput = "rng output: " + 1;
			gridArray[4]='O';
			lineCheck();
			document.getElementById("b5").disabled = true;
		}
	}

	if (randomNumber == 6) {
		if (gridArray[5] == 'X' || gridArray[5] == 'O') {
			rngPlayerTurn();
		} else {
			document.getElementById("b6").innerHTML = "O";
			rngOutput = "rng output: " + 1;
			gridArray[5]='O';
			lineCheck();
			document.getElementById("b6").disabled = true;
		}
	}

	if (randomNumber == 7) {
		if (gridArray[6] == 'X' || gridArray[6] == 'O') {
			rngPlayerTurn();
		} else {
			document.getElementById("b7").innerHTML = "O";
			rngOutput = "rng output: " + 1;
			gridArray[6]='O';
			lineCheck();
			document.getElementById("b7").disabled = true;
		}
	}

	if (randomNumber == 8) {
		if (gridArray[7] == 'X' || gridArray[7] == 'O') {
			rngPlayerTurn();
		} else {
			document.getElementById("b8").innerHTML = "O";
			rngOutput = "rng output: " + 1;
			gridArray[7]='O';
			lineCheck();
			document.getElementById("b8").disabled = true;
		}
	}

	if (randomNumber == 9) {
		if (gridArray[8] == 'X' || gridArray[8] == 'O') {
			rngPlayerTurn();
		} else {
			document.getElementById("b9").innerHTML = "O";
			rngOutput = "rng output: " + 1;
			gridArray[8]='O';
			lineCheck();
			document.getElementById("b9").disabled = true;
		}
	}
	const computerChoice = randomNumber //for debug only
	equalityCheck (computerChoice);
}

// generates random number, the heart of the low minded computer player.
function generateRandomNumber () {
	const result = (Math.floor(Math.random() * 8) +1); // rng works fine for the moment but code needs to be put in place to prevent any code from using duplicated outputs
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
	document.getElementById("b1").disabled = false;
	document.getElementById("b2").disabled = false;
	document.getElementById("b3").disabled = false;
	document.getElementById("b4").disabled = false;
	document.getElementById("b5").disabled = false;
	document.getElementById("b6").disabled = false;
	document.getElementById("b7").disabled = false;
	document.getElementById("b8").disabled = false;
	document.getElementById("b9").disabled = false;
	turnCount = 0;
	rngOutput = 0;
	gridArray = [0,1,2,3,4,5,6,7,8];
	//window.location.reload(true); //resets page
}

// allows javascript to wait a set amount of time in ms before executing the next line of code (for debug at the moment)
function wait(ms){
	var start = new Date().getTime();
	var end = start;
	while(end < start + ms) {
	  end = new Date().getTime();
   }
 } 

// Logic part of the game

function lineCheck () {
	// Line checker, currently works great but still needs some improvement, currently tells you if theres a line pattern

	//straight line
	if (gridArray[0]=='X' && gridArray[1]=='X' && gridArray[2]=='X') {
		playerScore = playerScore +1;
		playerTip = "Player won!";
		wait(1000);
		gameReset();
	} else if (gridArray[0]=='O' && gridArray[1]=='O' && gridArray[2]=='O') {
		computerScore = computerScore +1;
		playerTip = "Computer Won!";
		wait(1000);
		gameReset();
	}
	if (gridArray[3]=='X' && gridArray[4]=='X' && gridArray[5]=='X') {
		playerScore = playerScore +1;
		playerTip = "Player won!";
		wait(1000);
		gameReset();
	} else if (gridArray[3]=='O' && gridArray[4]=='O' && gridArray[5]=='O') {
		computerScore = computerScore +1;
		playerTip = "Computer Won!";
		wait(1000);
		gameReset();
	}
	if (gridArray[6]=='X' && gridArray[6]=='X' && gridArray[8]=='X') {
		playerScore = playerScore +1;
		playerTip = "Player won!";
		wait(1000);
		gameReset();
	} else if (gridArray[6]=='O' && gridArray[6]=='O' && gridArray[8]=='O') {
		computerScore = computerScore +1;
		playerTip = "Computer Won!";
		wait(1000);
		gameReset();
	}

	//diagonal
	if (gridArray[0]=='X' && gridArray[4]=='X' && gridArray[8]=='X') {
		playerScore = playerScore +1;
		playerTip = "Player won!";
		wait(1000);
		gameReset();
	} else if (gridArray[0]=='O' && gridArray[4]=='O' && gridArray[8]=='O') {
		computerScore = computerScore +1;
		playerTip = "Computer Won!";
		wait(1000);
		gameReset();
	}
	if (gridArray[2]=='X' && gridArray[4]=='X' && gridArray[6]=='X') {
		playerScore = playerScore +1;
		playerTip = "Player won!";
		wait(1000);
		gameReset();
	} else if (gridArray[2]=='O' && gridArray[4]=='O' && gridArray[6]=='O') {
		computerScore = computerScore +1;
		playerTip = "Computer Won!";
		wait(1000);
		gameReset();
	}

	//downwards and upwards
	if (gridArray[0]=='X' && gridArray[3]=='X' && gridArray[6]=='X') {
		playerScore = playerScore +1;
		playerTip = "Player won!";
		wait(1000);
		gameReset();
	} else if (gridArray[0]=='O' && gridArray[3]=='O' && gridArray[6]=='O') {
		computerScore = computerScore +1;
		playerTip = "Computer Won!";
		wait(1000);
		gameReset();
	}
	if (gridArray[1]=='X' && gridArray[4]=='X' && gridArray[7]=='X') {
		playerScore = playerScore +1;
		playerTip = "Player won!";
		wait(1000);
		gameReset();
	} else if (gridArray[1]=='O' && gridArray[4]=='O' && gridArray[7]=='O') {
		computerScore = computerScore +1;
		playerTip = "Computer Won!";
		wait(1000);
		gameReset();
	}
	if (gridArray[2]=='X' && gridArray[5]=='X' && gridArray[8]=='X') {
		playerScore = playerScore +1;
		playerTip = "Player won!";
		wait(1000);
		gameReset();
	} else if (gridArray[2]=='O' && gridArray[5]=='O' && gridArray[8]=='O') {
		computerScore = computerScore +1;
		playerTip = "Computer Won!";
		wait(1000);
		gameReset();
	}
}

function equalityCheck (playerChoice, computerChoice) {
	// perform an equality check, update scores and output a string using concatenation that gives user feedback 

	// create if statements that detect 3 crosses or circles in a row and decide the winner
	// create logic that plots the circles by the computer (player will be crosses and computer will be circles)
	
	//let playerTip = 0; // only for testing at the moment

	// resets board when turnCount = 9 to reset board automatically on a tie

	if (turnCount == 9) {
		playerTip = "Tie! Go Again.";
		wait(1000);
		gameReset();
	}

	// alert (playerChoice);  //for debug only
	// alert (computerChoice); //for debug only
	

	document.getElementById("playerScoreContent").innerHTML = playerScore;
	document.getElementById("computerScoreContent").innerHTML = computerScore;
	document.getElementById("tipContent").innerHTML = playerTip;
	document.getElementById("turnCount").innerHTML = turnCount; // testing only, displays how many times the computer or player has taken a turn and resets on 9 when no one wins
	document.getElementById("rngOutput").innerHTML = rngOutput;
	document.getElementById("gridLogger").innerHTML = gridLogger;
}
