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
	
	// array for line check 0=(empty space), 10=X, 11=O 
	let gridArray = [1,2,3,4,5,6,7,8,9];
	
 	console.log(gridArray);

	// change square to X when player clicks a square

	document.getElementById("b1").addEventListener("click", function(){ 
		document.getElementById("b1").innerHTML = "X";
		gridArray[1]='X';
	});

	document.getElementById("b2").addEventListener("click", function(){ 
		document.getElementById("b2").innerHTML = "X";
		gridArray[2]='X';
	});

	document.getElementById("b3").addEventListener("click", function(){ 
		document.getElementById("b3").innerHTML = "X";
		gridArray[3]='X';
	});

	document.getElementById("b4").addEventListener("click", function(){ 
		document.getElementById("b4").innerHTML = "X";
		gridArray[4]='X';		
	});

	document.getElementById("b5").addEventListener("click", function(){ 
		document.getElementById("b5").innerHTML = "X";
		gridArray[5]='X';		
	});

	document.getElementById("b6").addEventListener("click", function(){ 
		document.getElementById("b6").innerHTML = "X";
		gridArray[6]='X';
	});

	document.getElementById("b7").addEventListener("click", function(){ 
		document.getElementById("b7").innerHTML = "X";
		gridArray[7]='X';
	});

	document.getElementById("b8").addEventListener("click", function(){ 
		document.getElementById("b8").innerHTML = "X";
		gridArray[8]='X';
	});

	document.getElementById("b9").addEventListener("click", function(){ 
		document.getElementById("b9").innerHTML = "X";
		gridArray[9]='X';
	});

	// AI portion of the javascript code; change square to O accordingly with the RNG output

	if (randomNumber == 1) { 
		document.getElementById("b1").innerHTML = "O";
		rngOutput = "rng output: " + 1;
		gridArray[1]='O';
	}

	if (randomNumber == 2) { 
		document.getElementById("b2").innerHTML = "O";
		rngOutput = "rng output: " + 2;
		gridArray[2]='O';
	}
	
	if (randomNumber == 3) { 
		document.getElementById("b3").innerHTML = "O";
		rngOutput = "rng output: " + 3;
		gridArray[3]='O';
	}

	if (randomNumber == 4) {
		document.getElementById("b4").innerHTML = "O";
		rngOutput = "rng output: " + 4;
		gridArray[4]='O';
	}

	if (randomNumber == 5) {
		document.getElementById("b5").innerHTML = "O";
		rngOutput = "rng output: " + 5;
		gridArray[5]='O';
	}

	if (randomNumber == 6) {
		document.getElementById("b6").innerHTML = "O";
		rngOutput = "rng output: " + 6;	
		gridArray[6]='O';
	}

	if (randomNumber == 7) {
		document.getElementById("b7").innerHTML = "O";
		rngOutput = "rng output: " + 7;
		gridArray[7]='O';
	}

	if (randomNumber == 8) {
		document.getElementById("b8").innerHTML = "O";
		rngOutput = "rng output: " + 8;
		gridArray[8]='O';
	}

	if (randomNumber == 9) {
		document.getElementById("b9").innerHTML = "O";
		rngOutput = "rng output: " + 9;
		gridArray[9]='O';		
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

	//straight line
	if (gridArray[1]=='X' && gridArray[2]=='X' && gridArray[3]=='X') {
		playerScore = playerScore +1;
		playerTip = "Player won!";
		gameReset();
	} else if (gridArray[1]=='O' && gridArray[2]=='O' && gridArray[3]=='O') {
		computerScore = computerScore +1;
		playerTip = "Computer Won!";
		gameReset();
	}
	if (gridArray[4]=='X' && gridArray[5]=='X' && gridArray[6]=='X') {
		playerScore = playerScore +1;
		playerTip = "Player won!";
		gameReset();
	} else if (gridArray[4]=='O' && gridArray[5]=='O' && gridArray[6]=='O') {
		computerScore = computerScore +1;
		playerTip = "Computer Won!";
		gameReset();
	}
	if (gridArray[7]=='X' && gridArray[8]=='X' && gridArray[9]=='X') {
		playerScore = playerScore +1;
		playerTip = "Player won!";
		gameReset();
	} else if (gridArray[7]=='O' && gridArray[8]=='O' && gridArray[9]=='O') {
		computerScore = computerScore +1;
		playerTip = "Computer Won!";
		gameReset();
	}

	//diagonal
	if (gridArray[1]=='X' && gridArray[5]=='X' && gridArray[9]=='X') {
		playerScore = playerScore +1;
		playerTip = "Player won!";
		gameReset();
	} else if (gridArray[1]=='O' && gridArray[5]=='O' && gridArray[9]=='O') {
		computerScore = computerScore +1;
		playerTip = "Computer Won!";
		gameReset();
	}
	if (gridArray[3]=='X' && gridArray[5]=='X' && gridArray[7]=='X') {
		playerScore = playerScore +1;
		playerTip = "Player won!";
		gameReset();
	} else if (gridArray[3]=='O' && gridArray[5]=='O' && gridArray[7]=='O') {
		computerScore = computerScore +1;
		playerTip = "Computer Won!";
		gameReset();
	}

	//downwards and upwards
	if (gridArray[1]=='X' && gridArray[4]=='X' && gridArray[7]=='X') {
		playerScore = playerScore +1;
		playerTip = "Player won!";
		gameReset();
	} else if (gridArray[1]=='O' && gridArray[4]=='O' && gridArray[7]=='O') {
		computerScore = computerScore +1;
		playerTip = "Computer Won!";
		gameReset();
	}
	if (gridArray[2]=='X' && gridArray[5]=='X' && gridArray[8]=='X') {
		playerScore = playerScore +1;
		playerTip = "Player won!";
		gameReset();
	} else if (gridArray[2]=='O' && gridArray[5]=='O' && gridArray[8]=='O') {
		computerScore = computerScore +1;
		playerTip = "Computer Won!";
		gameReset();
	}
	if (gridArray[3]=='X' && gridArray[6]=='X' && gridArray[9]=='X') {
		playerScore = playerScore +1;
		playerTip = "Player won!";
		gameReset();
	} else if (gridArray[3]=='O' && gridArray[6]=='O' && gridArray[9]=='O') {
		computerScore = computerScore +1;
		playerTip = "Computer Won!";
		gameReset();
	}

	// AI doesnt choose box if player has already chosen the box ID matching the rng output

	/*if (row1[0]=='X' && generateRandomNumber == 1) {
		alert("computer choice is changed")
		generateRandomNumber = generateRandomNumber +1;
		// make random number generator run again if rng output is equal to player choice value
	}

	// prevent player from clicking same square twice

	if (generateRandomNumber == 1 && b1.clicked) {
		document.getElementById("b1").innerHTML = "O";
		// stop random number generator from generating number until player clicks another empty button
	

	if (b1.clicked && generateRandomNumber == 1) {
		document.getElementById("b1").innerHTML = "X";
		// stop random number generator from generating number until player clicks another empty button
	}	*/

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
