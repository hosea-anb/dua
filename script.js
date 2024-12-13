const answerButton = document.getElementById('answerButton');
const yesButton = document.getElementById('yesButton');
const response = document.getElementById('response');
const question = document.getElementById('question');

let score = 0;
let questionIndex = 0;

const questions = [
    {
        text: "Do ya think dua dua is slaying all time?",
        answers: [
            { text: "yes", correct: true },
            { text: "absolutely not", correct: false }
        ]
    },
    {
        text: "Do you think dua is a DIVA?",
        answers: [
            { text: "such a DIVA", correct: true },
            { text: "no!", correct: false }
        ]
    },
    {
        text: "Are you ready to help dua dua anytime?",
        answers: [
            { text: "ANYTIME", correct: true },
            { text: "i'm not sure!", correct: false }
        ]
    },
    {
        text: "Do you think dua dua is always right?",
        answers: [
            { text: "yes she is, there is no doubting about that", correct: true },
            { text: "she can't be always right", correct: false }
        ]
    }
];

function updateQuestion() {
    if (questionIndex < questions.length) {
        question.textContent = questions[questionIndex].text;
        answerButton.textContent = questions[questionIndex].answers[0].text;
        yesButton.textContent = questions[questionIndex].answers[1].text;

        // Set the colors according to the answers
        answerButton.style.backgroundColor = '#4CAF50';  // Green for correct (first answer)
        yesButton.style.backgroundColor = '#f76c6c';  // Red for incorrect (second answer)

        // Reset button positions and visibility
        answerButton.classList.remove('shake');
        yesButton.classList.remove('shake');
        answerButton.style.transform = 'translateX(0)';
        yesButton.style.transform = 'translateX(0)';
        
        response.style.visibility = 'hidden';  // Hide the response text initially
    } else {
        // If all questions are answered, show the final score
        question.textContent = "Your final score: " + score + " out of " + questions.length;

        // Final messages based on score
        if (score === 0) {
            response.textContent = "UR NOT A SUPPORTER GET OUT";
        } else if (score === 1) {
            response.textContent = "that's sad";
        } else if (score === 2) {
            response.textContent = "you could do better cmon";
        } else if (score === 3) {
            response.textContent = "u were so close but u count as a supporter!";
        } else if (score === 4) {
            response.textContent = "ur def a dua dua best supporter";
        }

        response.style.visibility = 'visible';

        answerButton.style.display = "none";
        yesButton.style.display = "none";
    }
}

let clickedAnswerButton = false;  // Track if the first button has been clicked once
let clickedYesButton = false;     // Track if the second button has been clicked once

answerButton.addEventListener('click', function() {
    if (!clickedAnswerButton) {
        // First click on the correct button, do nothing (it's already correct)
        response.textContent = "Great choice!";
        response.style.visibility = 'visible';
        score++;
        nextQuestion();
    }
});

yesButton.addEventListener('click', function() {
    if (!clickedYesButton) {
        // First click on the incorrect button, shake it
        yesButton.classList.add('shake');
        clickedYesButton = true;
        response.textContent = "dumbass";
        response.style.visibility = 'visible';
    } else {
        // Second click on the incorrect button, submit answer with 0 points
        response.textContent = "Wrong answer!";
        response.style.visibility = 'visible';
        nextQuestion(); // Move to the next question with 0 points for this one
    }
});

function nextQuestion() {
    clickedAnswerButton = false;  // Reset the first button
    clickedYesButton = false;     // Reset the second button
    questionIndex++;
    updateQuestion();
}

updateQuestion();
