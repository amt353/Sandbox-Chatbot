/* JS Script for Sandbox Chatbot by Angela Tomita */

// Test link to html: Inspect html page, console tab
// console.log("hello")

// Set initial score values
const userScore = 0;
const botScore = 0;

// Caching dom: tagged dom var (html elements that store dom elements)
// --for performance and convenience
const userScore_span = document.getElementById("user-score");
const botScore_span = document.getElementById("bot-score");
const scoreBoard_div = document.querySelector(".score-board");
const feedback_div = document.querySelector(".feedback");

const green_div1 = document.getElementById("g1");
const yellow_div1 = document.getElementById("y1");
const red_div1 = document.getElementById("r1");

const green_div2 = document.getElementById("g2");
const yellow_div2 = document.getElementById("y2");
const red_div2 = document.getElementById("r2");

// Add functionality
green_div1.addEventListener('click',function() {
  console.log("Hey! You clicked on happy :)")
})
