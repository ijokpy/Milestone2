// Handles the functionality of showing and hiding the Instructions popup
document.getElementById("start-button").addEventListener("click", function () {
    document.getElementById("instructions-popup").style.display = "flex";
});

document.getElementById("got-it").addEventListener("click", function () {
    document.getElementById("instructions-popup").style.display = "none";
    window.location.href = "questions.html";
});