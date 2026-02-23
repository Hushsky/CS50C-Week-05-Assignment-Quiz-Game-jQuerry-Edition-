"use strict"; // Turn on strict mode to catch common JS mistakes (like accidental globals).

const questions = [ // Store all quiz questions in order (index 0 = question 1).
  "Question 1: Guess my favorite colour", // The text for question 1.
  "Question 2: Now guess my Age", // The text for question 2.
  "Question 3: Finally what is my last name?", // The text for question 3.
]; // Close the `questions` array.

const answers = [ // Store the correct answers matching the `questions` array by index.
  "green", // Correct answer for question 1 (questions[0]).
  "22", // Correct answer for question 2 (questions[1]).
  "Cao", // Correct answer for question 3 (questions[2]).
]; // Close the `answers` array.

const hints = [ // Store a hint for each question (same index as `questions`).
  "Hint: The colour of the grass!", // Hint for question 1.
  "Hint: I was born in 2004!", // Hint for question 2.
  "Hint: The answer is very visible!", // Hint for question 3.
]; // Close the `hints` array.

let obj = 0; // Track the current question index (0-based: 0, 1, 2, ...).

$("#submit").click(checkAnswer); // When the "Check Answer" button is clicked, run `checkAnswer`.

showQuestion(); // Render the first question immediately when this script runs.

function showHint() { // Define a function that shows the hint for the current question.
  $("#hint").html(hints[obj]); // Put the current hint text into the element with id="hint".
} // End `showHint`.

function hideHint() { // Define a function that clears/hides the hint area.
  $("#hint").html(""); // Replace the hint element's content with an empty string.
} // End `hideHint`.

function showQuestion() { // Define a function that updates the UI for the current question.
  $("#counter").html(obj + 1); // Show the human-friendly question number (1-based) in id="counter".
  $("#question").html(questions[obj]); // Show the current question text in id="question".
} // End `showQuestion`.

function checkAnswer() { // Define a function that checks the user's answer against the correct one.
  const userAnswer = $("#answer").val(); // Read the user's input text from the input with id="answer".
  const correctAnswer = answers[obj]; // Look up the correct answer for the current question index.

  if (userAnswer == correctAnswer) { // If the user's answer matches the correct answer...
    $("#message").html("Thats right!"); // Show a success message in the element with id="message".
    nextQuestion(); // Advance the quiz to the next question index.
    hideHint(); // Clear the hint when moving forward.
  } else { // Otherwise (answer is wrong)...
    $("#message").html("Wrong answer! Try again."); // Show an error message in the message area.
    showHint(); // Display a hint to help the user with the current question.
  } // End the if/else.
} // End `checkAnswer`.

function nextQuestion() { // Define a function that moves the quiz to the next question (if any).
  obj++; // Increment the question index so it points to the next question.

  if (obj < questions.length) { // If we haven't run out of questions yet...
    showQuestion(); // Update the page to display the next question.
  } // End the "more questions" check.
} // End `nextQuestion`.