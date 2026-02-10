"use strict"; // Enables strict mode for better error catching and prevents common JavaScript mistakes
const questions = [ // Array storing all quiz questions as strings
    "Question 1: Guess my favorite colour", // First question in the quiz
    "Question 2: Now guess my Age", // Second question in the quiz
    "Question 3: Finally what is my last name?", // Third question in the quiz
];
const answers = [ // Array storing the correct answers corresponding to each question
    "green", // Correct answer for question 1
    "22", // Correct answer for question 2
    "Cao", // Correct answer for question 3
];
const hints = [ // Array storing hints for each question
    "Hint: The colour of the grass!", // Hint for question 1
    "Hint: I was born in 2004!", // Hint for question 2
    "Hint: The answer is very visible!" // Hint for question 3
]

let obj = 0; // Variable to track the current question index (starts at 0 for the first question)

document.getElementById("submit").addEventListener("click", checkAnswer); // Attaches a click event listener to the submit button that calls checkAnswer when clicked

showQuestion(); // Calls showQuestion() immediately when the page loads to display the first question

function showHint() { // Function to display the hint for the current question
    document.getElementById("hint").innerHTML = hints[obj]; // Sets the hint element's content to the hint at the current question index
}
function hideHint() { // Function to hide/clear the hint
    document.getElementById("hint").innerHTML = ""; // Clears the hint element by setting its content to an empty string
}


function showQuestion() { // Function to display the current question and question number
    document.getElementById("counter").innerHTML = obj + 1; // Displays the question number (obj + 1 because obj starts at 0, but we want to show question 1, 2, 3)
    document.getElementById("question").innerHTML = questions[obj]; // Displays the question text for the current question index
  }
  
  function checkAnswer() { // Function to check if the user's answer is correct
      if ( document.getElementById("answer").value == answers[obj] ) { // Compares the user's input value with the correct answer for the current question
        document.getElementById("message").innerHTML = "Thats right!"; // Displays success message if answer is correct
        nextQuestion(); // Moves to the next question
        hideHint(); // Hides the hint when moving to the next question
      } else { // If the answer is incorrect
        document.getElementById("message").innerHTML = "Wrong answer! Try again."; // Displays error message
        showHint(); // Shows the hint to help the user with the current question
      }
  }
  
  function nextQuestion() { // Function to advance to the next question
    obj++; // Increments the question index to move to the next question
    if ( obj < questions.length ) { // Checks if there are more questions remaining
      showQuestion(); // Displays the next question if there are more questions
    }
  }        