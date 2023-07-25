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


let playerScore;
let computerScore;

const numbers = document.querySelectorAll('.number')
const screen = document.getElementById('screen')

numbers.forEach(number => {
  number.addEventListener('click', function(e) {
    screen.innerHTML += e.target.innerHTML
  })
});


function gameLoop (playerClicked) {
	const randomNumber = generateRandomNumber()
	
	// utilise the randomnumber output to allow the computer to choose a square
	// convert random number outputs into a value that can be assigned into a square
	// assign outputs to squares 
	
	if (randomNumber == 1) {
		randomNumber == document.getElementById;
	}

	const computerChoice = randomNumber //for debug only
	equalityCheck (playerClicked, computerChoice);
}

function generateRandomNumber () {
	const result = Math.floor((Math.random() * 9) + 1);
	return result;
}


// Logic part of the game

function equalityCheck (playerChoice, computerChoice){
	// perform an equality check, update scores and output a string using concatenation that gives user feedback 

	// create if statements that detect 3 crosses or circles in a row and decide the winner
	// create logic that plots the circles by the computer (player will be crosses and computer will be circles)
	
	let playerTip = 0;

	// if (playerChoice == 
	
		// if (playerChoice == "Rock" && computerChoice == 2) {
		// 	playerTip = "Paper beats Rock! Computer Wins!"
		// 	computerScore = computerScore +1;
		// } else if (playerChoice == "Rock" && computerChoice == 1) {
		// 	playerTip = "Tie! Go again."
		// } else if (playerChoice == "Rock" && computerChoice == 3) {
		// 	playerTip = "Rock beats Scissors! You Win!"
		// 	playerScore = playerScore +1;
		// } else if (playerChoice == "Paper" && computerChoice == 1) {
		// 	playerTip = "Paper beats Rock! You Win!"
		// 	playerScore = playerScore +1;
		// } else if (playerChoice == "Paper" && computerChoice == 2) {
		// 	playerTip = "Tie! Go again."
		// } else if (playerChoice == "Paper" && computerChoice == 1) {
		// 	playerTip = "Paper beats Rock! You Win!"
		// 	playerScore = playerScore +1;
		// } else if (playerChoice == "Paper" && compuerChoice == 3) {
		// 	playerTip = "Scissors beats Paper! Computer Wins!"
		// 	computerScore = computerScore +1;
		// } else if (playerChoice == "Scissors" && computerChoice == 1) {
		// 	playerTip = "Rock beats Scissors! Computer Wins"
		// 	computerScore = computerScore +1;
		// } else if (playerChoice == "Scissors" && computerChoice == 2) {
		// 	playerTip = "Scissors Beats Paper! You Win!"
		// 	playerScore = playerScore +1;
		// } else if (playerChoice == "Scissors" && computerChoice == 3) {
		// 	playerTip = "Tie! Go again."
		// }

	// alert (playerChoice);  //for debug only
	// alert (computerChoice); //for debug only
	
	document.getElementById("playerScoreContent").innerHTML = playerScore;
	document.getElementById("computerScoreContent").innerHTML = computerScore;
	document.getElementById("tipContent").innerHTML = playerTip;
}