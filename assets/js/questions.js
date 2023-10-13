document.addEventListener("DOMContentLoaded", function () {
    const totalQuestions = 20; 
    let currentQuestion = 1;

    function showQuestion(questionNumber) {
        for (let i = 1; i <= totalQuestions; i++) {
            document.getElementById(`question${i}`).style.display = "none";
        }
        document.getElementById(`question${questionNumber}`).style.display = "block";
    }

    // Show the first question initially
    showQuestion(currentQuestion);

    function goToNextQuestion() {
        if (currentQuestion < totalQuestions) {
            currentQuestion++;
            showQuestion(currentQuestion);
        }
    }

    function cancelQuiz() {
        window.location.href = "index.html"; // Redirect to the homepage
    }

    // Add event listeners for "Next" buttons and the "Cancel" button
    for (let i = 1; i <= totalQuestions; i++) {
        const nextButton = document.getElementById(`nextButton${i}`);
        if (nextButton) {
            nextButton.addEventListener("click", goToNextQuestion);
        }
    }

    const cancelButton2 = document.getElementById("cancelButton");
    if (cancelButton2) {
        cancelButton2.addEventListener("click", cancelQuiz);
    }
});