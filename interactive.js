// Establish Answer Variables
let answer1 = document.querySelector("#answer1");
let answer2 = document.querySelector("#answer2");
let answer3 = document.querySelector("#answer3");
let result = document.querySelector("#result");

// EventListener
const element = document.getElementById("button1");
element.addEventListener("click", calculateScore);

// Function to Calculate Quiz Score
function calculateScore() {
  let score = 0; // inital score value
  if ((answer1 = "Engima")) {
    score += 1;
  } else {
    score += 0;
  } // Checks Question 1

  if ((answer2 = "intelligence")) {
    score += 1;
  } else {
    score += 0;
  } // Checks Question 2

  if ((answer3 = "sexuality")) {
    score += 1;
  } else {
    score += 0;
  } // Checks Question 3

  result.innerHTML = "You got a score of " + score + "!"; // Text to Display Score
}
