/* JS Script for Sandbox Chatbot by Angela Tomita */

// Test link to html: Inspect html page, console tab
// console.log("hello")

// Set initial score values
let userScore = 0;
let botScore = 0;

// Caching dom: tagged dom var (html elements that store dom elements)
// --for performance and convenience
const userScore_span = document.getElementById("user-score");
const botScore_span = document.getElementById("bot-score");
const scoreBoard_div = document.querySelector(".score-board");
const feedback_p = document.querySelector(".feedback > p");

const green_div1 = document.getElementById("g1");
const yellow_div1 = document.getElementById("y1");
const red_div1 = document.getElementById("r1");

const green_div2 = document.getElementById("g2");
const yellow_div2 = document.getElementById("y2");
const red_div2 = document.getElementById("r2");


// Add functionality

function getComputerChoice() {
	const choices = ['g1', 'y1', 'r1'];
	const randNum = Math.floor( Math.random() * 3);
	return choices[randNum];
}

// Debugger for getComputerChoice()
//console.log(getComputerChoice());

function win() {
	userScore++;
	
	// Debugger for userScore 
	//console.log("WIN!! \nScore: "+userScore)
	userScore_span.innerHTML = userScore;
	feedback_p.innerHTML = "What happiness to smile into another's smile :]"
}

function lose() {
}

function draw() {
}

// Simplified game logic: user gets point if choice matches bot "choice"
function game(userChoice) {
	const computerChoice = getComputerChoice();
	
	// Debugger for choices
	//console.log("user choice:: " + userChoice);
	//console.log("computer choice:: " + computerChoice)

	console.log("User score: " + userScore);
	switch(userChoice + computerChoice) {
		case "g1g1":
			win();
			break;
	}
}

function main() {
	green_div1.addEventListener('click',function() {
	  //console.log("Ey! You clicked on happy :)")
	  game("g1");
	})

	yellow_div1.addEventListener('click',function() {
	  //console.log("Ok, you clicked on semi-happy :-|")
	  game("y1");
	})

	red_div1.addEventListener('click',function() {
	  //console.log("You ok? You clicked on unhappy :(")
	  game("r1");
	})

	green_div2.addEventListener('click',function() {
	  //console.log("You clicked on happy :)")
	  game("g2");
	})

	yellow_div2.addEventListener('click',function() {
	  //console.log("You clicked on semi-happy :-|")
	  game("y2");
	})

	red_div2.addEventListener('click',function() {
	  //console.log("You clicked on unhappy :(")
	  game("r2");
	})
}

main();
