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

function getBotChoice() {
	const choices = ['g1', 'y1', 'r1'];
	const randNum = Math.floor( Math.random() * 3);
	return choices[randNum];
}

// Debugger for getBotChoice()
//console.log(getBotChoice());

function matchCheck(mix){

	// Bug! Or... browser.
	// Array comprehension: logic doesn't require this. Just explorin
	// return [for i of Array(mix.length) mix[i]==mix[0];
	
	// Initialize arr for try-catch 
	var arr = [];
	try {
		for (i of [...Array(mix.length).keys()]) {
			arr.push(mix[i]==mix[0]);
		}

		// Debugger for checking:
		// - array comprehension runs!
		// - try clause runs every time
		console.log("Try-Catch: "+arr);

	} catch (e) {
		console.error(e);
	}

	return mix[0]==mix[2];
}

function win() {
	userScore++;
	
	// Debugger for userScore 
	//console.log("WIN!! \nScore: "+userScore)
	userScore_span.innerHTML = userScore;
	feedback_p.innerHTML = "What happiness to smile into another's smile :]"
}

// Simplified game logic: user gets point if choice matches bot "choice"
function game(userChoice) {
	const BotChoice = getBotChoice();
	
	// Debugger for choices
	//console.log("user choice:: " + userChoice);
	//console.log("Bot choice:: " + BotChoice)
	
	// Consolidate choices to an array for analysis
	const mix = userChoice + BotChoice;

	// Debugger for mix
	console.log(mix+'\n'+matchCheck(mix));

	switch(matchCheck(mix)) {
		case true:
			win();
			break;
	return false;
	}

	// Display the score
	console.log("User score: " + userScore);
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
