//*********************************************************************************
// written by:																   
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
// Student boilerplate to make a OOP Rock Paper Scissors (orignally written by ben jones)						   
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
// 28/8/23 12:20 PM; adding console.log to log most of everything that happens in console to debug, reset button needs to be resized
// 30/8/23 12:28 PM; final day of working on this project, squares left disabled after game reset fixed, playerTip not updating to player won stll needs to be fixed.

// initial variables
let playerScore = 0;
let computerScore = 0;
let rngOutput = 0;
let playerTip = 0;
let turnCount = 0;
let gridLogger = 0;
let gridArray = [0,1,2,3,4,5,6,7,8]; // array for line check
let allowRandomNumber = true; // Initially, allow the function to generate random numbers (chat gpt made this)
let gameIsRunning = false;

// function that runs when a button is clicked (mostly replaced by gameLoop1)
function gameLoop (playerClicked) {

	// utilise the randomnumber output to allow the computer to choose a square
	// convert random number outputs into a value that can be assigned into a square
	// assign outputs to squares for rng player

	playerTip = "You chose " + playerClicked;
	gridLogger = gridArray; // log the tictactoe board array updates in the console
	
	console.log("is the game running?, asks the curious coder. " + gameIsRunning + "!, javascript replies")

	// adds a point to turn counter when a player or computer takes a turn 
	if (playerClicked) {
		turnCount = turnCount +1;
	}

	// Clears board (working properly now)
	document.getElementById("resetButton").addEventListener("click", function() {
		gameReset();
	});
	console.log("generateRandomNumber executed and gave output (" + generateRandomNumber() +")");
	equalityCheck (playerClicked);
}

// main gameloop that now handles all the player and rng turns
function gameLoop1 (playerSquareClick) {
	document.getElementById(playerSquareClick).innerHTML = "X";
	gridArray[document.getElementById(playerSquareClick).value]='X';
	gameLoop(playerSquareClick);
	lineCheck();
	rngPlayerTurn();
	document.getElementById(playerSquareClick).disabled = true;
	equalityCheck (playerSquareClick);
	console.log("gameLoop1 player clicked ("+ playerSquareClick +")");
	allowRandomNumber = true; // Enable random number generation when a square is clicked (chat gpt suggestion)
	gameIsRunning = true;
}

var intervalId = window.setInterval(function(){
	initialGameBoardFix();
  }, 100);

function initialGameBoardFix () {
	if (turnCount == 0) {
		document.getElementById("b1").disabled = false;
		document.getElementById("b2").disabled = false;
		document.getElementById("b3").disabled = false;
		document.getElementById("b4").disabled = false;
		document.getElementById("b5").disabled = false;
		document.getElementById("b6").disabled = false;
		document.getElementById("b7").disabled = false;
		document.getElementById("b8").disabled = false;
		document.getElementById("b9").disabled = false;
		console.log("disabled Element fix")
	} else if (gameIsRunning == false) {
		document.getElementById("b1").disabled = false;
		document.getElementById("b2").disabled = false;
		document.getElementById("b3").disabled = false;
		document.getElementById("b4").disabled = false;
		document.getElementById("b5").disabled = false;
		document.getElementById("b6").disabled = false;
		document.getElementById("b7").disabled = false;
		document.getElementById("b8").disabled = false;
		document.getElementById("b9").disabled = false;
		console.log("disabled Element fix")
	}
}

function rngPlayerTurn () {
	const randomNumber = generateRandomNumber();
	// AI portion of the javascript code; change square to O accordingly with the RNG output
	if (randomNumber == 1) { 
		if (gridArray[0] == 'X' || gridArray[0] == 'O') {
			rngPlayerTurn();
			console.log("rngPlayerTurn, JS found the same square was already executed.");
		} else {
			turnCount = turnCount +1;
			document.getElementById("b1").innerHTML = "O";
			rngOutput = "rng output: " + 1;
			gridArray[0]='O';
			lineCheck();
			document.getElementById("b1").disabled = true;
			console.log("rngPlayerTurn html button label change");
		}
	}
	
	if (randomNumber == 2) { 
		if (gridArray[1] == 'X' || gridArray[1] == 'O') {
			rngPlayerTurn();
			console.log("rngPlayerTurn, JS found the same square was already executed.");
		} else {
			turnCount = turnCount +1;
			document.getElementById("b2").innerHTML = "O";
			rngOutput = "rng output: " + 1;
			gridArray[1]='O';
			lineCheck();
			document.getElementById("b2").disabled = true;
			console.log("rngPlayerTurn html button label change");
		}
	}
	
	if (randomNumber == 3) { 
		if (gridArray[2] == 'X' || gridArray[2] == 'O') {
			rngPlayerTurn();
			console.log("rngPlayerTurn, JS found the same square was already executed.");
		} else {
			turnCount = turnCount +1;
			document.getElementById("b3").innerHTML = "O";
			rngOutput = "rng output: " + 1;
			gridArray[2]='O';
			lineCheck();
			document.getElementById("b3").disabled = true;
			console.log("rngPlayerTurn html button label change");
		}
	}
	
	if (randomNumber == 4) {
		if (gridArray[3] == 'X' || gridArray[3] == 'O') {
			rngPlayerTurn();
			console.log("rngPlayerTurn, JS found the same square was already executed.");
		} else {
			turnCount = turnCount +1;
			document.getElementById("b4").innerHTML = "O";
			rngOutput = "rng output: " + 1;
			gridArray[3]='O';
			lineCheck();
			document.getElementById("b4").disabled = true;
			console.log("rngPlayerTurn html button label change");
		}
	}
	
	if (randomNumber == 5) {
		if (gridArray[4] == 'X' || gridArray[4] == 'O') {
			rngPlayerTurn();
			console.log("rngPlayerTurn, JS found the same square was already executed.");
		} else {
			turnCount = turnCount +1;
			document.getElementById("b5").innerHTML = "O";
			rngOutput = "rng output: " + 1;
			gridArray[4]='O';
			lineCheck();
			document.getElementById("b5").disabled = true;
			console.log("rngPlayerTurn html button label change");
		}
	}

	if (randomNumber == 6) {
		if (gridArray[5] == 'X' || gridArray[5] == 'O') {
			rngPlayerTurn();
			console.log("rngPlayerTurn, JS found the same square was already executed.");
		} else {
			turnCount = turnCount +1;
			document.getElementById("b6").innerHTML = "O";
			rngOutput = "rng output: " + 1;
			gridArray[5]='O';
			lineCheck();
			document.getElementById("b6").disabled = true;
			console.log("rngPlayerTurn html button label change");
		}
	}

	if (randomNumber == 7) {
		if (gridArray[6] == 'X' || gridArray[6] == 'O') {
			rngPlayerTurn();
			console.log("rngPlayerTurn, JS found the same square was already executed.");
		} else {
			turnCount = turnCount +1;
			document.getElementById("b7").innerHTML = "O";
			rngOutput = "rng output: " + 1;
			gridArray[6]='O';
			lineCheck();
			document.getElementById("b7").disabled = true;
			console.log("rngPlayerTurn html button label change");
		}
	}

	if (randomNumber == 8) {
		if (gridArray[7] == 'X' || gridArray[7] == 'O') {
			rngPlayerTurn();
			console.log("rngPlayerTurn, JS found the same square was already executed.");
		} else {
			turnCount = turnCount +1;
			document.getElementById("b8").innerHTML = "O";
			rngOutput = "rng output: " + 1;
			gridArray[7]='O';
			lineCheck();
			document.getElementById("b8").disabled = true;
			console.log("rngPlayerTurn html button label change");
		}
	}

	if (randomNumber == 9) {
		if (gridArray[8] == 'X' || gridArray[8] == 'O') {
			rngPlayerTurn();
			console.log("rngPlayerTurn, JS found the same square was already executed.");
		} else {
			turnCount = turnCount +1;
			document.getElementById("b9").innerHTML = "O";
			rngOutput = "rng output: " + 1;
			gridArray[8]='O';
			lineCheck();
			document.getElementById("b9").disabled = true;
			console.log("rngPlayerTurn html button label change");
		}
	}
	const computerChoice = randomNumber; //for debug only
	equalityCheck (computerChoice);
}

// generates random number, the heart of the low minded computer player.
function generateRandomNumber () {
	if (allowRandomNumber) {
		const result = (Math.floor(Math.random() * 8) +1); // rng works fine for the moment but code needs to be put in place to prevent any code from using duplicated outputs
		return result; // tested with alert(result); and gen rand num works when a button is clicked
	}
}

// game reset
function gameReset () {
	gameIsRunning = false;
	document.getElementById("b1").innerHTML = "";
	document.getElementById("b2").innerHTML = "";
	document.getElementById("b3").innerHTML = "";
	document.getElementById("b4").innerHTML = "";
	document.getElementById("b5").innerHTML = "";
	document.getElementById("b6").innerHTML = "";
	document.getElementById("b7").innerHTML = "";
	document.getElementById("b8").innerHTML = "";
	document.getElementById("b9").innerHTML = "";
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
	console.log("gameReset executed, gameboard is cleared")
	allowRandomNumber = false; // chatGPT suggestion
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
		console.log("lineCheck detected a lineup");
		allowRandomNumber = false; // chatGPT allow random number function
		playerTip = "Player won!"; // does not change playerTip as of right now
		playerScore = playerScore +1;
		wait(1000);
		gameReset();
	} else if (gridArray[0]=='O' && gridArray[1]=='O' && gridArray[2]=='O') {
		console.log("lineCheck detected a lineup");
		allowRandomNumber = false; // chatGPT allow random number function
		computerScore = computerScore +1;
		playerTip = "Computer Won!";
		wait(1000);
		gameReset();
	}
	if (gridArray[3]=='X' && gridArray[4]=='X' && gridArray[5]=='X') {
		console.log("lineCheck detected a lineup");
		allowRandomNumber = false; // chatGPT allow random number function
		playerTip = "Player won!"; // does not change playerTip as of right now
		playerScore = playerScore +1;
		wait(1000);
		gameReset();
	} else if (gridArray[3]=='O' && gridArray[4]=='O' && gridArray[5]=='O') {
		console.log("lineCheck detected a lineup");
		allowRandomNumber = false; // chatGPT allow random number function
		computerScore = computerScore +1;
		playerTip = "Computer Won!";
		wait(1000);
		gameReset();
	}
	if (gridArray[6]=='X' && gridArray[7]=='X' && gridArray[8]=='X') {
		console.log("lineCheck detected a lineup");
		allowRandomNumber = false; // chatGPT allow random number function
		playerTip = "Player won!"; // does not change playerTip as of right now
		playerScore = playerScore +1;
		wait(1000);
		gameReset();
	} else if (gridArray[6]=='O' && gridArray[7]=='O' && gridArray[8]=='O') {
		console.log("lineCheck detected a lineup");
		allowRandomNumber = false; // chatGPT allow random number function
		computerScore = computerScore +1;
		playerTip = "Computer Won!";
		wait(1000);
		gameReset();
	}

	//diagonal
	if (gridArray[0]=='X' && gridArray[4]=='X' && gridArray[8]=='X') {
		console.log("lineCheck detected a lineup");
		allowRandomNumber = false; // chatGPT allow random number function
		playerTip = "Player won!"; // does not change playerTip as of right now
		playerScore = playerScore +1;
		wait(1000);
		gameReset();
	} else if (gridArray[0]=='O' && gridArray[4]=='O' && gridArray[8]=='O') {
		console.log("lineCheck detected a lineup");
		allowRandomNumber = false; // chatGPT allow random number function
		computerScore = computerScore +1;
		playerTip = "Computer Won!";
		wait(1000);
		gameReset();
	}
	if (gridArray[2]=='X' && gridArray[4]=='X' && gridArray[6]=='X') {
		console.log("lineCheck detected a lineup");
		allowRandomNumber = false; // chatGPT allow random number function
		playerTip = "Player won!"; // does not change playerTip as of right now
		playerScore = playerScore +1;
		wait(1000);
		gameReset();
	} else if (gridArray[2]=='O' && gridArray[4]=='O' && gridArray[6]=='O') {
		console.log("lineCheck detected a lineup");
		allowRandomNumber = false; // chatGPT allow random number function
		computerScore = computerScore +1;
		playerTip = "Computer Won!";
		wait(1000);
		gameReset();
	}

	//downwards and upwards
	if (gridArray[0]=='X' && gridArray[3]=='X' && gridArray[6]=='X') {
		console.log("lineCheck detected a lineup");
		allowRandomNumber = false; // chatGPT allow random number function
		playerTip = "Player won!"; // does not change playerTip as of right now
		playerScore = playerScore +1;
		wait(1000);
		gameReset();
	} else if (gridArray[0]=='O' && gridArray[3]=='O' && gridArray[6]=='O') {
		console.log("lineCheck detected a lineup");
		allowRandomNumber = false; // chatGPT allow random number function
		computerScore = computerScore +1;
		playerTip = "Computer Won!";
		wait(1000);
		gameReset();
	}
	if (gridArray[1]=='X' && gridArray[4]=='X' && gridArray[7]=='X') {
		console.log("lineCheck detected a lineup");
		allowRandomNumber = false; // chatGPT allow random number function
		playerTip = "Player won!"; // does not change playerTip as of right now
		playerScore = playerScore +1;
		wait(1000);
		gameReset();
	} else if (gridArray[1]=='O' && gridArray[4]=='O' && gridArray[7]=='O') {
		console.log("lineCheck detected a lineup");
		allowRandomNumber = false; // chatGPT allow random number function
		computerScore = computerScore +1;
		playerTip = "Computer Won!";
		wait(1000);
		gameReset();
	}
	if (gridArray[2]=='X' && gridArray[5]=='X' && gridArray[8]=='X') {
		console.log("lineCheck detected a lineup");
		allowRandomNumber = false; // chatGPT allow random number function
		playerTip = "Player won!"; // does not change playerTip as of right now
		playerScore = playerScore +1;
		wait(1000);
		gameReset();
	} else if (gridArray[2]=='O' && gridArray[5]=='O' && gridArray[8]=='O') {
		console.log("lineCheck detected a lineup");
		allowRandomNumber = false; // chatGPT allow random number function
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

	// resets board when turnCount = 9 to reset board automatically on a tie

	if (turnCount == 9) {
		playerTip = "Tie! Go Again.";
		allowRandomNumber = false;
		gameIsRunning = false;
		wait(1000);
		gameReset();
	}

	document.getElementById("playerScoreContent").innerHTML = playerScore;
	document.getElementById("computerScoreContent").innerHTML = computerScore;
	document.getElementById("tipContent").innerHTML = playerTip;
	document.getElementById("turnCount").innerHTML = turnCount; // testing only, displays how many times the computer or player has taken a turn and resets on 9 when no one wins
	document.getElementById("rngOutput").innerHTML = rngOutput;
	document.getElementById("gridLogger").innerHTML = gridLogger;
}