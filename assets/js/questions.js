// Handles the functionality of showing and hiding the Instructions popup
document.getElementById("start-button").addEventListener("click", function () {
    document.getElementById("instructions-popup").style.display = "flex";
});

document.getElementById("got-it").addEventListener("click", function () {
    document.getElementById("instructions-popup").style.display = "none";
    window.location.href = "questions.html";
});

// Handles the functionality of showing and hiding the Exit popup
document.getElementById("exitBtn").addEventListener("click", function () {
    document.getElementById("popup").style.display = "flex";
});

// Handles the OK button in the Exit popup
document.getElementById("confirmExit").addEventListener("click", function () {
    window.location.href = "index.html";
});

// Handles the Cancel button in the Exit popup
document.getElementById("cancelExit").addEventListener("click", function () {
    document.getElementById("popup").style.display = "none";
});