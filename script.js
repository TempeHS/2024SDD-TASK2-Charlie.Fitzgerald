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

// generates random number 
function generateRandomNumber () {
	const result = Math.floor((Math.random() * 9) + 1);
	return result; // tested with alert(result); and gen rand num works when a button is clicked 
}

let buttons = document.getElementsByClassName("game") // assigns "buttons" to class "game"
	
function checkLine(player, number1, number2, number3) {
	if ($("#" + number1).text() === player && $("#" + number2).text() === player && $("#" + number3).text() === player)
{
	if (player === playerTurn) {
		playerTip = "Winner Winner Chicken Dinner!";
	}
}


// Logic part of the game

function equalityCheck (playerChoice, computerChoice){
	// perform an equality check, update scores and output a string using concatenation that gives user feedback 

	// create if statements that detect 3 crosses or circles in a row and decide the winner
	// create logic that plots the circles by the computer (player will be crosses and computer will be circles)
	
	let playerTip = 0;

	// computer player
	for (i=0; i < 10; i++)
		var random = randomNumber()
	if (buttons[random].innerHTML === "X")
	
	

	// alert (playerChoice);  //for debug only
	// alert (computerChoice); //for debug only
	
	document.getElementById("playerScoreContent").innerHTML = playerScore;
	document.getElementById("computerScoreContent").innerHTML = computerScore;
	document.getElementById("tipContent").innerHTML = playerTip;
}