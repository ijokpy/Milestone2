// Store questions and answers
const questions = [
    "q1?",
    "q2?",
    // Add all 20 questions here
];

// Store user answers
const userAnswers = [];

// Get HTML elements
const questionContainer = document.querySelector(".question");
const resultsContainer = document.querySelector(".results");
const personalityDescription = document.querySelector("#personalityDescription");
const nextButton = document.querySelector("#nextButton");
const backButton = document.querySelector("#backButton");
const cancelButton = document.querySelector("#cancelButton");

let questionIndex = 0;

// Function to display the current question
function displayCurrentQuestion() {
    if (questionIndex < questions.length) {
        questionContainer.innerHTML = `
            <h2>Question ${questionIndex + 1}</h2>
            <p>${questions[questionIndex]}</p>
            <label>
                <input type="radio" name="q${questionIndex}" value="option1"> Option 1
            </label>
            <label>
                <input type="radio" name="q${questionIndex}" value="option2"> Option 2
            </label>
            ${questionIndex > 0 ? '<button id="backButton">Back</button>' : ''}
            <button id="nextButton">Next</button>
            <button id="cancelButton">Cancel</button>
        `;
    } else {
        showResults();
    }
}

// Function to show the personality results
function showResults() {
    resultsContainer.style.display = "block";
    let personality = "Your Personality Description based on answers...";
    personalityDescription.textContent = personality;
}

// Event listener for the "Next" button
questionContainer.addEventListener("click", function (event) {
    if (event.target.id === "nextButton") {
        const selectedOption = document.querySelector(`input[name="q${questionIndex}"]:checked`);
        if (selectedOption) {
            userAnswers.push(selectedOption.value);
        }
        questionIndex++;
        displayCurrentQuestion();
    }

    // Event listener for the "Back" button
    if (event.target.id === "backButton") {
        questionIndex--;
        displayCurrentQuestion();
    }

    // Event listener for the "Cancel" button
    if (event.target.id === "cancelButton") {
        resetQuiz();
    }
});

// Function to reset the quiz and navigate to the home screen (index.html)
function resetQuiz() {
    // Reset variables and clear userAnswers
    questionIndex = 0;
    userAnswers.length = 0;

    // Navigate to the home screen (index.html)
    window.location.href = "index.html";
}

// Start the test
displayCurrentQuestion();